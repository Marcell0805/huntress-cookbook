param(
    [string]$ApkPath = "",
    [string]$ReleaseNotes = "Mobile app update.",
    [string]$PagesBaseUrl = "https://marcell0805.github.io/huntress-cookbook",
    [string]$MobileRoot = "",
    [switch]$SkipExport
)

$ErrorActionPreference = "Stop"
$utf8 = [System.Text.UTF8Encoding]::new($false)
$cookbookRoot = Split-Path $PSScriptRoot -Parent
$downloadsDir = Join-Path $cookbookRoot "downloads"

if (-not $MobileRoot) {
    $MobileRoot = Join-Path (Split-Path $cookbookRoot -Parent) "Marcell0805\AppGen\output\HuntressCookbook Mobile"
}

if (-not $ApkPath) {
    $ApkPath = Join-Path $MobileRoot "build\app\outputs\flutter-apk\app-release.apk"
}

if (-not (Test-Path $ApkPath)) {
    throw "APK not found at $ApkPath. Run: flutter build apk --release"
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

$apkDest = Join-Path $downloadsDir "huntress-cookbook.apk"
Copy-Item $ApkPath $apkDest -Force
Write-Host "Copied APK to $apkDest"

$manifest = @{
    version = $versionName
    build = $buildNumber
    apkUrl = "$PagesBaseUrl/downloads/huntress-cookbook.apk"
    releaseNotes = $ReleaseNotes
}
$manifestPath = Join-Path $downloadsDir "mobile-version.json"
$json = $manifest | ConvertTo-Json -Depth 5 -Compress:$false
[IO.File]::WriteAllText($manifestPath, $json, $utf8)
Write-Host "Wrote $manifestPath (build $buildNumber, version $versionName)"

if (-not $SkipExport) {
    & (Join-Path $PSScriptRoot "export-mobile-seed.ps1") -MobileRoot $MobileRoot -SkipBuild
    Write-Host "Refreshed Flutter mobile assets including updateCheckUrl"
}

Write-Host "Done. Commit downloads/ and push to GitHub Pages."
