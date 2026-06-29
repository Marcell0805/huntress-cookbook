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
    [IO.File]::WriteAllText($path, $json, $utf8)
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

Write-JsonFile (Join-Path $assetsDir "mobile_config.json") @{
    pin = "0657"
    cookbookName = $data.settings.cookbookName
    tagline = $data.settings.tagline
    updateCheckUrl = "$pagesBaseUrl/downloads/mobile-version.json"
}

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
