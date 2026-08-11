param(
    [string]$MobileRoot = "",
    [switch]$SkipBuild
)

$ErrorActionPreference = "Stop"
$utf8 = [System.Text.UTF8Encoding]::new($false)
$cookbookRoot = Split-Path $PSScriptRoot -Parent
if (-not $MobileRoot) {
    $MobileRoot = Join-Path (Split-Path $cookbookRoot -Parent) "Marcell0805\HuntressCookbook Mobile"
}

if (-not $SkipBuild) {
    & (Join-Path $cookbookRoot "scripts\build-recipes.ps1")
}

$recipesJsPath = Join-Path $cookbookRoot "js\recipes.js"
if (-not (Test-Path $recipesJsPath)) { throw "Missing recipes.js - run build-recipes.ps1 first." }

$jsText = [IO.File]::ReadAllText($recipesJsPath, $utf8)
if ($jsText -notmatch 'var HUNTRESS_COOKBOOK = (\{[\s\S]*\});?\s*$') {
    throw "Could not parse HUNTRESS_COOKBOOK from recipes.js"
}
$data = $Matches[1] | ConvertFrom-Json

if ($data.settings.auth) {
    $data.settings.auth.password = $null
}

$assetsDir = Join-Path $MobileRoot "assets"
$imagesDir = Join-Path $assetsDir "images"
New-Item -ItemType Directory -Force -Path $imagesDir | Out-Null

function Write-JsonFile([string]$path, $obj) {
    $json = $obj | ConvertTo-Json -Depth 20 -Compress:$false
    # Normalize to LF so SHA-256 matches GitHub Pages (LF) and Android downloads.
    $json = $json -replace "`r`n", "`n" -replace "`r", "`n"
    $bytes = $utf8.GetBytes($json)
    [IO.File]::WriteAllBytes($path, $bytes)
}

Write-JsonFile (Join-Path $assetsDir "cookbook_seed.json") $data

$nav = @(
    @{ id = "introduction"; num = 1; label = "Introduction"; available = $true; kind = "guide" },
    @{ id = "dietary-guide"; num = 2; label = "Huntress Dietary Guide"; available = $true; kind = "guide" },
    @{ id = "pantry-essentials"; num = 3; label = "Pantry Essentials"; available = $true; kind = "guide" },
    @{ id = "breakfast"; num = 4; label = "Breakfast Recipes"; available = $true; kind = "chapter" },
    @{ id = "lunch"; num = 5; label = "Lunch Recipes"; available = $true; kind = "chapter" },
    @{ id = "dinner"; num = 6; label = "Dinner Recipes"; available = $true; kind = "chapter" },
    @{ id = "braai"; num = 7; label = "Braai Recipes"; available = $true; kind = "chapter" },
    @{ id = "soups"; num = 8; label = "Soups and Comfort Foods"; available = $true; kind = "chapter" },
    @{ id = "desserts"; num = 9; label = "Desserts"; available = $true; kind = "chapter" },
    @{ id = "snacks"; num = 10; label = "Snacks and Picnic Foods"; available = $true; kind = "chapter" },
    @{ id = "drinks"; num = 11; label = "Drinks"; available = $true; kind = "chapter" },
    @{ id = "approved-meals"; num = 13; label = "Approved Huntress Meals"; available = $true; kind = "chapter" },
    @{ id = "future-recipes"; num = 15; label = "Future Recipes To Try"; available = $true; kind = "guide" }
)
Write-JsonFile (Join-Path $assetsDir "nav.json") @{ items = $nav }

$chapters = @{
    chapters = $data.chapters
    chapterIntros = $data.chapterIntros
    categories = $data.categories
}
Write-JsonFile (Join-Path $assetsDir "chapters.json") $chapters

$guides = @{
    introduction = $data.introduction
    dietaryGuide = $data.dietaryGuide
    pantryEssentials = $data.pantryEssentials
    futureRecipes = $data.futureRecipes
}
Write-JsonFile (Join-Path $assetsDir "guides.json") $guides

$pagesBaseUrl = "https://marcell0805.github.io/huntress-cookbook"
$foxsDenPagesBaseUrl = "https://marcell0805.github.io/the-foxs-den-doc"
$updateCheckUrl = "$foxsDenPagesBaseUrl/downloads/huntresscookbook-mobile/mobile-version.json"

$mobileConfigPath = Join-Path $assetsDir "mobile_config.json"
$config = @{
    pin = "0657"
    cookbookName = $data.settings.cookbookName
    tagline = $data.settings.tagline
    updateCheckUrl = $updateCheckUrl
}
if (Test-Path $mobileConfigPath) {
    $existing = Get-Content $mobileConfigPath -Raw | ConvertFrom-Json
    foreach ($name in @('pin', 'cookbookName', 'tagline', 'huntressEmail', 'foxEmail', 'appName', 'channel')) {
        if ($existing.PSObject.Properties.Name -contains $name -and $null -ne $existing.$name -and "$($existing.$name)" -ne '') {
            $config[$name] = $existing.$name
        }
    }
}
$config.updateCheckUrl = $updateCheckUrl
Write-JsonFile $mobileConfigPath $config
Write-Host "Wrote $mobileConfigPath (updateCheckUrl → Fox's Den)"

$srcImages = Join-Path $cookbookRoot "assets\images"
$logoSrc = Join-Path $cookbookRoot "assets\fox-huntress-logo.png"
if (Test-Path $logoSrc) {
    Copy-Item $logoSrc (Join-Path $assetsDir "fox-huntress-logo.png") -Force
}

$copied = 0
$missing = 0
foreach ($prop in $data.recipes.PSObject.Properties) {
    $recipe = $prop.Value
    $image = $recipe.image
    if (-not $image) { continue }
    $src = Join-Path $srcImages $image
    $dst = Join-Path $imagesDir $image
    if (Test-Path $src) {
        Copy-Item $src $dst -Force
        $copied++
    } else {
        $missing++
    }
}
Write-Host "Wrote assets to $assetsDir"
Write-Host "Copied $copied recipe images; $missing missing on disk"

# --- OTA content manifest for incremental mobile updates ---
$downloadsDir = Join-Path $cookbookRoot "downloads"
$contentDir = Join-Path $downloadsDir "content"
New-Item -ItemType Directory -Force -Path $contentDir | Out-Null
New-Item -ItemType Directory -Force -Path (Join-Path $contentDir "images") | Out-Null

function Get-FileSha256Hex([string]$path) {
    # Re-normalize text JSON to LF before hashing so working-tree CRLF checkouts
    # cannot poison the OTA manifest checksums.
    if ($path -like '*.json') {
        $text = [IO.File]::ReadAllText($path)
        $normalized = $text -replace "`r`n", "`n" -replace "`r", "`n"
        $bytes = $utf8.GetBytes($normalized)
        [IO.File]::WriteAllBytes($path, $bytes)
        $sha = [System.Security.Cryptography.SHA256]::Create()
        try {
            return ([BitConverter]::ToString($sha.ComputeHash($bytes))).Replace('-', '').ToLowerInvariant()
        } finally {
            $sha.Dispose()
        }
    }
    $hash = Get-FileHash -Path $path -Algorithm SHA256
    return $hash.Hash.ToLowerInvariant()
}

$manifestFiles = @()
$seedPath = Join-Path $assetsDir "cookbook_seed.json"
$seedDest = Join-Path $contentDir "cookbook_seed.json"
Copy-Item $seedPath $seedDest -Force
$seedHash = (Get-FileSha256Hex $seedDest)
$manifestFiles += [ordered]@{
    path = "cookbook_seed.json"
    url = "$pagesBaseUrl/downloads/content/cookbook_seed.json?v=$seedHash"
    sha256 = $seedHash
    size = (Get-Item $seedDest).Length
}

foreach ($prop in $data.recipes.PSObject.Properties) {
    $recipe = $prop.Value
    $image = $recipe.image
    if (-not $image) { continue }
    $src = Join-Path $srcImages $image
    if (-not (Test-Path $src)) { continue }
    $imgDest = Join-Path (Join-Path $contentDir "images") $image
    Copy-Item $src $imgDest -Force
    $imgHash = (Get-FileSha256Hex $imgDest)
    $manifestFiles += [ordered]@{
        path = $image
        # ${image} required — "$image?v=..." is parsed as variable image?v in Windows PowerShell.
        url = "$pagesBaseUrl/downloads/content/images/${image}?v=$imgHash"
        sha256 = $imgHash
        size = (Get-Item $imgDest).Length
    }
}

$contentVersion = $seedHash
$contentManifest = [ordered]@{
    contentVersion = $contentVersion
    files = $manifestFiles
}
$contentManifestPath = Join-Path $downloadsDir "mobile-content-manifest.json"
Write-JsonFile $contentManifestPath $contentManifest
Write-Host "Wrote $contentManifestPath (contentVersion $contentVersion, $($manifestFiles.Count) files)"
