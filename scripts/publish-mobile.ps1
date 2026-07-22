param(
    [string]$ApkPath = "",
    [string]$ReleaseNotes = "Mobile app update.",
    [string]$PagesBaseUrl = "https://marcell0805.github.io/huntress-cookbook",
    [string]$FoxsDenPagesBaseUrl = "https://marcell0805.github.io/the-foxs-den-doc",
    [string]$FoxsDenPortalRoot = "",
    [string]$MobileRoot = "",
    [switch]$SkipExport,
    [switch]$SkipFoxsDenCopy
)

$ErrorActionPreference = "Stop"
$utf8 = [System.Text.UTF8Encoding]::new($false)
$cookbookRoot = Split-Path $PSScriptRoot -Parent
$downloadsDir = Join-Path $cookbookRoot "downloads"

if (-not $MobileRoot) {
    $candidate = Join-Path (Split-Path $cookbookRoot -Parent) "HuntressCookbook-Mobile"
    if (Test-Path (Join-Path $candidate "pubspec.yaml")) {
        $MobileRoot = $candidate
    } else {
        $MobileRoot = Join-Path (Split-Path $cookbookRoot -Parent) "Marcell0805\HuntressCookbook Mobile"
    }
}

if (-not $FoxsDenPortalRoot) {
    foreach ($candidate in @(
            "D:\repos\The_Fox_s_Den Doc\portal",
            (Join-Path (Split-Path $cookbookRoot -Parent) "The_Fox_s_Den Doc\portal")
        )) {
        if (Test-Path $candidate) {
            $FoxsDenPortalRoot = $candidate
            break
        }
    }
}

$FoxsDenPagesBaseUrl = $FoxsDenPagesBaseUrl.TrimEnd('/')
$PagesBaseUrl = $PagesBaseUrl.TrimEnd('/')
$foxApkUrl = "$FoxsDenPagesBaseUrl/downloads/huntresscookbook-mobile.apk"
$foxUpdateCheckUrl = "$FoxsDenPagesBaseUrl/downloads/huntresscookbook-mobile/mobile-version.json"

if (-not $ApkPath) {
    $ApkPath = Join-Path $MobileRoot "build\app\outputs\flutter-apk\app-release.apk"
}

if (-not (Test-Path $ApkPath)) {
    throw "APK not found at $ApkPath. Run: flutter build apk --release"
}

# Warn if release APK may still be debug-signed (common when key.properties is missing).
try {
    $sig = & jarsigner -verify -verbose -certs $ApkPath 2>&1 | Out-String
    if ($sig -match 'CN=Android Debug') {
        Write-Warning "APK appears debug-signed. Configure android/key.properties and rebuild for release signing."
    }
} catch {
    # jarsigner optional
}

$pubspecPath = Join-Path $MobileRoot "pubspec.yaml"
if (-not (Test-Path $pubspecPath)) {
    throw "Missing pubspec.yaml at $MobileRoot"
}

$versionLine = (Get-Content $pubspecPath | Where-Object { $_ -match '^version:\s*' } | Select-Object -First 1)
if ($versionLine -notmatch 'version:\s*([0-9.]+)\+(\d+)') {
    throw "Could not parse version from pubspec.yaml (expected name: 1.0.0+1)"
}
$versionName = $Matches[1]
$buildNumber = [int]$Matches[2]

New-Item -ItemType Directory -Force -Path $downloadsDir | Out-Null

# Keep a local copy on the cookbook site for history; live apkUrl points at Fox's Den.
$apkDest = Join-Path $downloadsDir "huntress-cookbook.apk"
Copy-Item $ApkPath $apkDest -Force
Write-Host "Copied APK to $apkDest (bridge copy; live download is Fox's Den)"

$manifest = @{
    version = $versionName
    build = $buildNumber
    apkUrl = $foxApkUrl
    releaseNotes = $ReleaseNotes
}

$contentManifestPath = Join-Path $downloadsDir "mobile-content-manifest.json"
if (Test-Path $contentManifestPath) {
    $contentManifest = Get-Content $contentManifestPath -Raw | ConvertFrom-Json
    $manifest.contentVersion = $contentManifest.contentVersion
    $manifest.contentManifestUrl = "$PagesBaseUrl/downloads/mobile-content-manifest.json"
}
$manifestPath = Join-Path $downloadsDir "mobile-version.json"
$json = $manifest | ConvertTo-Json -Depth 5 -Compress:$false
[IO.File]::WriteAllText($manifestPath, $json, $utf8)
Write-Host "Wrote bridge $manifestPath (build $buildNumber → $foxApkUrl)"

if (-not $SkipExport) {
    & (Join-Path $PSScriptRoot "export-mobile-seed.ps1") -MobileRoot $MobileRoot -SkipBuild
    Write-Host "Refreshed Flutter mobile assets including Fox's Den updateCheckUrl"
}

if (-not $SkipFoxsDenCopy) {
    if (-not $FoxsDenPortalRoot -or -not (Test-Path $FoxsDenPortalRoot)) {
        Write-Warning "Fox's Den portal root not found; skipped copying APK/version JSON. Pass -FoxsDenPortalRoot or use portal\scripts\publish-app-mobile.ps1"
    } else {
        $foxDownloads = Join-Path $FoxsDenPortalRoot "downloads"
        $foxVersionDir = Join-Path $foxDownloads "huntresscookbook-mobile"
        New-Item -ItemType Directory -Force -Path $foxVersionDir | Out-Null
        $foxApkDest = Join-Path $foxDownloads "huntresscookbook-mobile.apk"
        Copy-Item $ApkPath $foxApkDest -Force
        Write-Host "Copied APK to $foxApkDest"

        $sizeBytes = [long](Get-Item $foxApkDest).Length
        function Format-ApkSize([long]$Bytes) {
            if ($Bytes -lt 1KB) { return "$Bytes B" }
            if ($Bytes -lt 1MB) { return ("{0:N1} KB" -f ($Bytes / 1KB)) }
            if ($Bytes -lt 1GB) { return ("{0:N1} MB" -f ($Bytes / 1MB)) }
            return ("{0:N2} GB" -f ($Bytes / 1GB))
        }
        $foxManifest = @{
            version = $versionName
            build = $buildNumber
            apkUrl = $foxApkUrl
            releaseNotes = $ReleaseNotes
            channel = "live"
            sizeBytes = $sizeBytes
            sizeLabel = (Format-ApkSize $sizeBytes)
        }
        if ($manifest.contentVersion) {
            $foxManifest.contentVersion = $manifest.contentVersion
            $foxManifest.contentManifestUrl = $manifest.contentManifestUrl
        }
        $foxVersionPath = Join-Path $foxVersionDir "mobile-version.json"
        [IO.File]::WriteAllText($foxVersionPath, ($foxManifest | ConvertTo-Json -Depth 5 -Compress:$false), $utf8)
        Write-Host "Wrote Fox's Den $foxVersionPath"
        Write-Host "Primary update check URL: $foxUpdateCheckUrl"
    }
}

Write-Host "Done. Commit huntress-cookbook/downloads/ and The Fox's Den portal/downloads/, then push both for GitHub Pages."
Write-Host "Preferred future publish: The_Fox_s_Den Doc\portal\scripts\publish-app-mobile.ps1 -AppId huntresscookbook-mobile"
