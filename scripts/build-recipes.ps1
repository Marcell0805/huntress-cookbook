$root = Split-Path $PSScriptRoot -Parent
$utf8 = [System.Text.UTF8Encoding]::new($false)

function Read-JsonFile([string]$path) {
    return (Read-JsonFileText $path) | ConvertFrom-Json
}

function Read-JsonFileText([string]$path) {
    return [System.IO.File]::ReadAllText($path, $utf8)
}

function Write-Utf8File([string]$path, [string]$content) {
    [System.IO.File]::WriteAllText($path, $content, $utf8)
}

function Get-RecipeSearchText($recipe) {
    $parts = [System.Collections.Generic.List[string]]::new()
    foreach ($p in @($recipe.name, $recipe.description, $recipe.category, $recipe.huntressNotes, $recipe.foxNotes)) {
        if ($p) { $parts.Add([string]$p) }
    }
    if ($recipe.tags) {
        foreach ($t in @($recipe.tags)) { if ($t) { $parts.Add([string]$t) } }
    }
    if ($recipe.ingredients) {
        foreach ($i in @($recipe.ingredients)) { if ($i) { $parts.Add([string]$i) } }
    }
    return ($parts -join ' ')
}

function Get-GuideSearchText([string]$title, $doc) {
    $parts = [System.Collections.Generic.List[string]]::new()
    if ($title) { $parts.Add($title) }
    if (-not $doc) { return ($parts -join ' ') }
    if ($doc.description) { $parts.Add([string]$doc.description) }
    if ($doc.subtitle) { $parts.Add([string]$doc.subtitle) }
    if ($doc.introduction) {
        $intro = $doc.introduction
        foreach ($key in @('welcome', 'purpose')) {
            if ($intro.$key) { $parts.Add([string]$intro.$key) }
        }
        if ($intro.philosophy) { foreach ($x in @($intro.philosophy)) { if ($x) { $parts.Add([string]$x) } } }
    }
    if ($doc.sections) {
        foreach ($sec in @($doc.sections)) {
            if ($sec.title) { $parts.Add([string]$sec.title) }
            if ($sec.description) { $parts.Add([string]$sec.description) }
            if ($sec.notes) { foreach ($n in @($sec.notes)) { if ($n) { $parts.Add([string]$n) } } }
            if ($sec.items) { foreach ($it in @($sec.items)) { if ($it) { $parts.Add([string]$it) } } }
        }
    }
    if ($doc.categories) {
        foreach ($cat in @($doc.categories)) {
            if ($cat.name) { $parts.Add([string]$cat.name) }
            if ($cat.items) { foreach ($it in @($cat.items)) { if ($it.name) { $parts.Add([string]$it.name) } } }
        }
    }
    if ($doc.groups) {
        foreach ($grp in @($doc.groups)) {
            $gname = if ($grp.group) { $grp.group } elseif ($grp.name) { $grp.name } else { $null }
            if ($gname) { $parts.Add([string]$gname) }
        }
    }
    if ($doc.names) { foreach ($n in @($doc.names)) { if ($n) { $parts.Add([string]$n) } } }
    if ($doc.recipes) {
        foreach ($r in @($doc.recipes)) { if ($r.name) { $parts.Add([string]$r.name) } }
    }
    return ($parts -join ' ')
}

function Ensure-SearchScripts([string]$content, [string]$prefix) {
    if ($content -match 'search-index\.js') { return $content }
    $block = "  <script src=`"${prefix}js/vendor/fuse.min.js`"></script>`n  <script src=`"${prefix}js/search-index.js`"></script>`n  <script src=`"${prefix}js/search.js`"></script>`n"
    if ($content -match 'cookbook\.js') {
        return [regex]::Replace($content, '(\s*<script src="[^"]*cookbook\.js"></script>)', ($block + '${1}'))
    }
    return $content
}

$slugOverrides = @{
    "Yogurt & Honey Bowl" = "yogurt-honey-breakfast-bowl"
    "Yogurt & Honey Breakfast Bowl" = "yogurt-honey-breakfast-bowl"
    "Yogurt & Honey Pot" = "yogurt-honey-pot"
    "Bobotie (GF Version)" = "bobotie-gf"
    "Bobotie" = "bobotie-gf"
    "Malva Pudding (GF)" = "malva-pudding-gf"
    "Malva Pudding (GF Version)" = "malva-pudding-gf"
    "Milk Tart (GF)" = "milk-tart-gf"
    "Peppermint Crisp Tart (GF)" = "peppermint-crisp-tart-gf"
    "Greek Salad (Onion-Free)" = "greek-salad-onion-free"
    "Greek Salad (Onion Free)" = "greek-salad-onion-free"
    "French Toast (GF Bread)" = "french-toast-gf-bread"
    "Potato Salad (Onion-Free)" = "potato-salad-onion-free"
    "Potato Salad (Onion Free)" = "potato-salad-onion-free"
    "Shepherd's Pie" = "shepherds-pie"
    "Cheese & Rice Crackers" = "cheese-rice-crackers"
    "Boiled Eggs & Fruit" = "boiled-eggs-fruit"
    "Chicken Snack Box" = "chicken-snack-box"
    "Chia Berry Cups" = "chia-berry-cups"
    "Trail Mix (Huntress Safe)" = "trail-mix-huntress-safe"
    "Rice Cakes & Peanut Butter" = "rice-cakes-peanut-butter"
    "Picnic Cheese Board" = "picnic-cheese-board"
    "Cheese Board Lunch" = "cheese-board-lunch"
    "Honey Yogurt Bowl" = "honey-yogurt-bowl"
}

function Get-Slug([string]$name) {
    if ($slugOverrides.ContainsKey($name)) { return $slugOverrides[$name] }
    $s = $name.ToLower()
    $s = $s -replace '\([^)]*\)', ''
    $s = $s -replace '&', ' '
    $s = $s -replace '''', ''
    $s = $s -replace '\s+', ' '
    $s = $s.Trim()
    $s = $s -replace ' ', '-'
    $s = $s -replace '[^a-z0-9-]', ''
    $s = $s -replace '-+', '-'
    return $s.Trim('-')
}

$categoryMeta = @{
    Breakfast = @{ id = "breakfast"; label = "Breakfast" }
    Lunch = @{ id = "lunch"; label = "Lunch" }
    Dinner = @{ id = "dinner"; label = "Dinner" }
    Braai = @{ id = "braai"; label = "Braai" }
    SoupsComfortFoods = @{ id = "soups"; label = "Soups & Comfort Foods" }
    Desserts = @{ id = "desserts"; label = "Desserts" }
    SnacksPicnicFoods = @{ id = "snacks"; label = "Snacks & Picnic Foods" }
    ApprovedHuntressMeals = @{ id = "approved-meals"; label = "Approved Huntress Meals" }
}

function Ensure-Array($value, $default) {
    if ($null -eq $value) { return @($default) }
    if ($value -is [System.Array]) { return @($value) }
    return @([string]$value)
}

function Parse-Minutes($value) {
    if ($null -eq $value) { return 0 }
    if ($value -is [int] -or $value -is [long] -or $value -is [double]) { return [int]$value }
    $s = [string]$value
    if ($s -match '(\d+)') { return [int]$Matches[1] }
    return 0
}

function Parse-Servings($value) {
    if ($null -eq $value) { return 0 }
    if ($value -is [int] -or $value -is [long]) { return [int]$value }
    $s = [string]$value
    if ($s -match '(\d+)') { return [int]$Matches[1] }
    return 0
}

function Normalize-Status($value) {
    if (-not $value) { return "untested" }
    $s = $value.ToString().ToLower().Trim()
    if ($s -match 'approv') { return "approved" }
    if ($s -match 'tweak') { return "tweaking" }
    if ($s -eq 'testing' -or $s -eq 'in testing') { return "testing" }
    return "untested"
}

function Join-Notes($value, $default) {
    if ($null -eq $value) { return $default }
    if ($value -is [System.Array]) { return ($value -join '. ') }
    return [string]$value
}

function Get-ImageFile($recipe, $slug) {
    $imgDir = Join-Path $root "assets\images"
    $slugFile = "$slug.jpg"
    # Prefer on-disk file named after recipe slug (matches assets/images/)
    if (Test-Path (Join-Path $imgDir $slugFile)) { return $slugFile }

    # Fall back to filename from JSON image path if that file exists
    if ($recipe.image) {
        $img = ([string]$recipe.image) -replace '\\', '/'
        if ($img -match '([^/]+\.(jpg|jpeg|png|webp))$') {
            $fromJson = $Matches[1]
            if (Test-Path (Join-Path $imgDir $fromJson)) { return $fromJson }
        }
    }

    return $slugFile
}

function Get-RecipeSlug([string]$name, [string]$id, [string]$catId) {
    if ($slugOverrides.ContainsKey($name)) { return $slugOverrides[$name] }
    if ($id -and $id -match '^[a-z0-9]+(-[a-z0-9]+)*$') {
        $idFile = "$root\recipes\$id.html"
        if (Test-Path $idFile) { return $id }
    }
    $slug = Get-Slug $name
    $existingFile = "$root\recipes\$slug.html"
    if (Test-Path $existingFile) { return $slug }
    if ($id -and $id -match '^[a-z0-9]+(-[a-z0-9]+)*$') { return $id }
    if ($id -and $id -match "^$([regex]::Escape($catId))-(.+)$") { return $Matches[1] }
    return $slug
}

$sectionIcons = @{
    "Egg Based Breakfasts" = "egg"
    "Smoothies & Bowls" = "bowl"
    "Warm & Comforting" = "warm"
    "Quick & On-The-Go" = "clock"
    "Light Lunches" = "salad"
    "Salads & Bowls" = "salad"
    "Soups" = "soup"
    "Soup Collection" = "soup"
    "Comfort Bowls" = "bowl"
    "Cold Weather Favourites" = "warm"
    "Classic Comfort Foods" = "home"
    "Baked Comfort Dishes" = "warm"
    "Recovery Meals" = "bowl"
    "Winter Favourites" = "warm"
    "Comfort Classics" = "home"
    "Picnic Friendly" = "picnic"
    "Bites & Skewers" = "skewer"
    "Warm Lunches" = "warm"
    "Chicken Dinners" = "chicken"
    "Beef Dinners" = "beef"
    "Fish & Seafood" = "fish"
    "Comfort Food Collection" = "sa"
    "Braai Proteins" = "fire"
    "Braai Sides" = "potato"
    "Fire & Foil Favourites" = "fire"
    "Braai Desserts" = "peach"
    "Fox & Huntress Braai Platters" = "box"
    "Braai Salads" = "salad"
    "Braai Sauces & Extras" = "sauce"
    "South African Classics" = "sa"
    "Chocolate Collection" = "chocolate"
    "Fruit Based Desserts" = "peach"
    "Cheesecake Collection" = "ice"
    "Frozen Desserts" = "ice"
    "Comfort Desserts" = "warm"
    "Fox & Huntress Date Night Desserts" = "box"
    "Future Dessert Projects" = "clock"
    "South African Favourites" = "sa"
    "Protein Snacks" = "skewer"
    "Fruit & Light Snacks" = "peach"
    "Movie Night Snacks" = "picnic"
    "Road Trip Snacks" = "picnic"
    "Fox & Huntress Snack Boards" = "box"
    "Future Snack Projects" = "clock"
    "Morning Drinks" = "warm"
    "Smoothies & Blended Drinks" = "bowl"
    "Summer Coolers" = "ice"
    "Comfort Drinks" = "warm"
    "Road Trip Drinks" = "picnic"
    "Fox & Huntress Café Collection" = "box"
    "Future Drink Projects" = "clock"
}

# Per-chapter JSON files in data/
$chapterDataFiles = [ordered]@{
    breakfast = "breakfast.json"
    lunch     = "lunch.json"
    dinner    = "dinner.json"
    braai     = "braai.json"
    soups     = "comfortFood.json"
    desserts  = "desserts.json"
    snacks    = "snacks.json"
    drinks    = "drinks.json"
    'approved-meals' = "approved-meals.json"
}

function Import-ChapterFile([string]$chapterId, [string]$fileName, [string]$catLabel) {
    $path = Join-Path $root "data\$fileName"
    if (-not (Test-Path $path)) { return $null }

    $data = Read-JsonFile $path
    $sections = @()
    $recipeSlugs = @()

    foreach ($group in @($data.groups)) {
        $title = if ($group.group) { $group.group } elseif ($group.name) { $group.name } else { "Recipes" }
        $names = @()
        foreach ($r in @($group.recipes)) {
            $name = $r.name
            $slug = Get-RecipeSlug $name $r.id $chapterId
            $names += $name

            if ($null -ne $script:allRecipes[$slug]) {
                if ($recipeSlugs -notcontains $slug) { $recipeSlugs += $slug }
                continue
            }

            $recipe = [ordered]@{
                id = if ($r.id) { $r.id } else { "$chapterId-$slug" }
                slug = $slug
                name = $name
                categoryId = $chapterId
                category = if ($r.category) { $r.category } else { $catLabel }
                status = Normalize-Status $r.status
                description = if ($r.description) { $r.description } else { "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing." }
                difficulty = if ($r.difficulty) { $r.difficulty } else { "TBD" }
                prepTime = Parse-Minutes $r.prepTime
                cookTime = Parse-Minutes $r.cookTime
                servings = Parse-Servings $r.servings
                tags = if ($r.tags) { @($r.tags) } else { @("Gluten Free", "Onion Free") }
                ingredients = if ($r.ingredients) { Ensure-Array $r.ingredients "Ingredients to be confirmed after testing." } else { @("Ingredients to be confirmed after testing.") }
                instructions = if ($r.instructions) { Ensure-Array $r.instructions "Method to be added once this recipe has been tested." } else { @("Method to be added once this recipe has been tested.") }
                huntressNotes = Join-Notes $r.huntressNotes "GF. Onion-Free. IBS-conscious."
                foxNotes = Join-Notes $r.foxNotes "Add Fox Notes after the first cook."
                image = Get-ImageFile $r $slug
            }
            if ($r.proteins) { $recipe.proteins = @(Ensure-Array $r.proteins "") }
            if ($r.sides) { $recipe.sides = @(Ensure-Array $r.sides "") }
            if ($r.salad) { $recipe.salad = @(Ensure-Array $r.salad "") }
            if ($r.dessert) { $recipe.dessert = @(Ensure-Array $r.dessert "") }
            $script:allRecipes[$slug] = $recipe
            if ($recipeSlugs -notcontains $slug) { $recipeSlugs += $slug }
        }

        $sections += [ordered]@{
            title = $title
            icon = if ($sectionIcons.ContainsKey($title)) { $sectionIcons[$title] } else { "egg" }
            desc = if ($group.description) { $group.description } else { "" }
            names = $names
        }
    }

    return [ordered]@{
        sections = $sections
        recipeSlugs = $recipeSlugs
        label = if ($data.category) { $data.category } else { $catLabel }
        intro = $data.description
    }
}

function Load-DataJson([string]$fileName) {
    $path = Join-Path $root "data\$fileName"
    if (-not (Test-Path $path)) { return $null }
    return Read-JsonFile $path
}

$chapterSections = [PSCustomObject]@{}

$allRecipes = [ordered]@{}
$categories = @()
$chapterIntros = [ordered]@{}

# Load split chapter JSON files first (e.g. data/breakfast.json)
foreach ($entry in $chapterDataFiles.GetEnumerator()) {
    $chapterId = $entry.Key
    $meta = $categoryMeta.Values | Where-Object { $_.id -eq $chapterId } | Select-Object -First 1
    $catLabel = if ($meta) { $meta.label } else { (Get-Culture).TextInfo.ToTitleCase($chapterId) }
    $imported = Import-ChapterFile $chapterId $entry.Value $catLabel
    if ($imported) {
        $chapterSections | Add-Member -NotePropertyName $chapterId -NotePropertyValue $imported.sections -Force
        $categories += [ordered]@{ id = $chapterId; name = $imported.label; recipeSlugs = $imported.recipeSlugs }
        if ($imported.intro) { $chapterIntros[$chapterId] = $imported.intro }
        Write-Host "Loaded $($imported.recipeSlugs.Count) recipes from data/$($entry.Value)"
    }
}

$introduction = Load-DataJson "introduction.json"
if ($introduction) { Write-Host "Loaded introduction from data/introduction.json" }

$pantryEssentials = Load-DataJson "pantry-essentials.json"
if ($pantryEssentials) { Write-Host "Loaded pantry essentials from data/pantry-essentials.json" }

$dietaryGuide = Load-DataJson "dietary-guide.json"
if ($dietaryGuide) { Write-Host "Loaded dietary guide from data/dietary-guide.json" }

$futureRecipes = Load-DataJson "future-recipes.json"
if (-not $futureRecipes) { $futureRecipes = @{ names = @() } }
else { Write-Host "Loaded future recipes from data/future-recipes.json" }

$settings = Load-DataJson "cookbook-settings.json"
if ($settings) { Write-Host "Loaded cookbook settings from data/cookbook-settings.json" }

$output = [ordered]@{
    version = if ($settings -and $settings.version) { $settings.version } else { "1.0" }
    project = if ($settings -and $settings.cookbookName) { $settings.cookbookName } else { "The Huntress Cookbook" }
    settings = $settings
    introduction = $introduction
    dietaryGuide = $dietaryGuide
    pantryEssentials = $pantryEssentials
    futureRecipes = $futureRecipes
    chapterIntros = $chapterIntros
    categories = $categories
    chapters = $chapterSections
    recipes = $allRecipes
}

$json = $output | ConvertTo-Json -Depth 12
$js = "/* The Huntress Cookbook - recipe data */`nvar HUNTRESS_COOKBOOK = $json;`n"
Write-Utf8File "$root\js\recipes.js" $js
Write-Host "Wrote js/recipes.js with $($allRecipes.Count) recipes"

$searchEntries = [System.Collections.Generic.List[object]]::new()
foreach ($slug in $allRecipes.Keys) {
    $r = $allRecipes[$slug]
    $searchEntries.Add([ordered]@{
        id = "recipe-$slug"
        title = $r.name
        section = $r.category
        url = "recipes/$slug.html"
        text = Get-RecipeSearchText $r
        tags = @(@($r.tags))
        status = $r.status
    })
}

$cookbookGuidePages = @(
    @{ id = 'introduction'; title = 'Introduction'; file = 'introduction.html'; doc = $introduction }
    @{ id = 'dietary-guide'; title = 'Huntress Dietary Guide'; file = 'dietary-guide.html'; doc = $dietaryGuide }
    @{ id = 'pantry-essentials'; title = 'Pantry Essentials'; file = 'pantry-essentials.html'; doc = $pantryEssentials }
    @{ id = 'future-recipes'; title = 'Future Recipes To Try'; file = 'future-recipes.html'; doc = $futureRecipes }
)

foreach ($cat in $categories) {
    $searchEntries.Add([ordered]@{
        id = "chapter-$($cat.id)"
        title = $cat.name
        section = 'Chapter'
        url = "chapters/$($cat.id).html"
        text = "$($cat.name) $($chapterIntros[$cat.id])"
        tags = @()
        status = ''
    })
}

foreach ($g in $cookbookGuidePages) {
    if (-not $g.doc) { continue }
    $searchEntries.Add([ordered]@{
        id = $g.id
        title = $g.title
        section = 'Guide'
        url = "chapters/$($g.file)"
        text = Get-GuideSearchText $g.title $g.doc
        tags = @()
        status = ''
    })
}

$searchJson = ($searchEntries | ConvertTo-Json -Depth 10 -Compress)
$searchIndexJs = "/* Generated search index - do not edit by hand */`nwindow.HUNTRESS_SEARCH_INDEX = $searchJson;`n"
Write-Utf8File "$root\js\search-index.js" $searchIndexJs
Write-Host "Wrote js/search-index.js ($($searchEntries.Count) entries)"

$chapterLinks = @{
    breakfast = "breakfast.html"
    lunch = "lunch.html"
    dinner = "dinner.html"
    braai = "braai.html"
    soups = "soups.html"
    desserts = "desserts.html"
    snacks = "snacks.html"
    drinks = "drinks.html"
    'approved-meals' = "approved-meals.html"
}

function Convert-CookbookPageShell([string]$content, [string]$scope, [string]$activeNav) {
    if ($content -notmatch 'data-cookbook-sidebar') {
        $notes = ''
        if ($content -match '(?s)<div class="sidebar-notes">\s*<div class="sidebar-notes-title">.*?</div>\s*<p>.*?</p>\s*</div>') {
            $notes = '      ' + ($Matches[0] -replace '<div class="sidebar-notes">', '<div class="sidebar-notes" data-sidebar-preserve>')
            $content = [regex]::Replace($content, '(?s)\s*<div class="sidebar-notes">\s*<div class="sidebar-notes-title">.*?</div>\s*<p>.*?</p>\s*</div>\s*', "`n")
        }
        $sidebarReplacement = "    <aside class=`"sidebar`" data-cookbook-sidebar>`n$notes    </aside>"
        $content = [regex]::Replace($content, '(?s)\s*<aside class="sidebar"[^>]*>.*?</aside>', "`n$sidebarReplacement")
    }

    if ($content -notmatch 'id="cookbook-toolbar"') {
        $content = [regex]::Replace($content, '(?s)\s*<header class="cookbook-toolbar\b[^>]*>.*?</header>', "`n  <div id=`"cookbook-toolbar`"></div>")
    }

    if ($content -notmatch 'data-nav-scope=') {
        $content = [regex]::Replace($content, '<body([^>]*)>', "<body`$1 data-nav-scope=`"$scope`">")
    } elseif ($scope) {
        $content = [regex]::Replace($content, 'data-nav-scope="[^"]*"', "data-nav-scope=`"$scope`"")
    }

    if ($activeNav) {
        if ($content -notmatch 'data-nav-active=') {
            $content = [regex]::Replace($content, '<body([^>]*)>', "<body`$1 data-nav-active=`"$activeNav`">")
        } else {
            $content = [regex]::Replace($content, 'data-nav-active="[^"]*"', "data-nav-active=`"$activeNav`"")
        }
    }

    return $content
}

$recipeTemplate = @'
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{NAME}} &mdash; The Huntress Cookbook</title>
  <link rel="stylesheet" href="../css/cookbook.css">
  <style>html:not(.auth-ok) body > :not(#auth-gate) { display: none; }</style>
  <script src="../js/auth.js"></script>
</head>
<body class="recipe-page" data-nav-scope="recipe" data-recipe-slug="{{SLUG}}" data-recipe-id="{{ID}}">

  <div id="cookbook-toolbar"></div>

  <div class="page">
    <aside class="sidebar" data-cookbook-sidebar></aside>

    <main class="main">
      <header class="recipe-header">
        <h1>{{NAME}}</h1>
        <div class="recipe-meta"></div>
      </header>
      <div class="recipe-body">
        <section class="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul></ul>
        </section>
        <section class="recipe-method">
          <h2>Method</h2>
          <ol></ol>
        </section>
        <div class="recipe-notes">
          <div class="note-box huntress">
            <h3>Huntress Notes</h3>
            <p></p>
          </div>
          <div class="note-box">
            <h3>Fox Notes</h3>
            <p></p>
          </div>
        </div>
        <div class="recipe-rating" aria-label="Rating not yet set"></div>
        <div class="recipe-photo">
          <img src="../assets/images/{{IMAGE}}" alt="{{NAME}}">
        </div>
      </div>
    </main>
  </div>

  <script src="../js/recipes.js"></script>
  <script src="../js/vendor/fuse.min.js"></script>
  <script src="../js/search-index.js"></script>
  <script src="../js/search.js"></script>
  <script src="../js/cookbook.js"></script>
</body>
</html>
'@

$chapterLabels = @{
    breakfast = "Breakfast"
    lunch = "Lunch"
    dinner = "Dinner"
    braai = "Braai"
    soups = "Soups"
    desserts = "Desserts"
    snacks = "Snacks & Picnic Foods"
    drinks = "Drinks"
}

$created = 0
foreach ($slug in $allRecipes.Keys) {
    $recipe = $allRecipes[$slug]
    $path = "$root\recipes\$slug.html"
    if (-not (Test-Path $path)) {
        $html = $recipeTemplate
        $html = $html.Replace('{{SLUG}}', $recipe.slug)
        $html = $html.Replace('{{ID}}', $recipe.id)
        $html = $html.Replace('{{NAME}}', ($recipe.name -replace '&', '&amp;'))
        $html = $html.Replace('{{IMAGE}}', $recipe.image)
        Write-Utf8File $path $html
        $created++
    }
}
Write-Host "Created $created new recipe HTML pages"

$updated = 0
Get-ChildItem "$root\recipes\*.html" | ForEach-Object {
    $content = [System.IO.File]::ReadAllText($_.FullName, $utf8)
    $slug = $_.BaseName
    $recipe = $allRecipes[$slug]
    $changed = $false
    $newContent = Convert-CookbookPageShell $content 'recipe' ''
    if ($newContent -ne $content) { $content = $newContent; $changed = $true }
    if ($recipe -and $content -notmatch 'data-recipe-slug=') {
        $content = $content -replace '<body class="recipe-page"[^>]*>', "<body class=`"recipe-page`" data-nav-scope=`"recipe`" data-recipe-slug=`"$slug`" data-recipe-id=`"$($recipe.id)`">"
        $changed = $true
    } elseif ($content -notmatch 'data-nav-scope=') {
        $content = [regex]::Replace($content, '<body([^>]*)>', '<body$1 data-nav-scope="recipe">')
        $changed = $true
    }
    if ($content -notmatch 'recipes\.js') {
        $content = $content -replace '</body>', "  <script src=`"../js/recipes.js`"></script>`n  <script src=`"../js/vendor/fuse.min.js`"></script>`n  <script src=`"../js/search-index.js`"></script>`n  <script src=`"../js/search.js`"></script>`n  <script src=`"../js/cookbook.js`"></script>`n</body>"
        $changed = $true
    } else {
        $withSearch = Ensure-SearchScripts $content '../'
        if ($withSearch -ne $content) { $content = $withSearch; $changed = $true }
    }
    if ($changed) {
        Write-Utf8File $_.FullName $content
        $updated++
    }
}
Write-Host "Updated $updated existing recipe HTML pages"

$chapterNavIds = @{
    'introduction.html' = 'introduction'
    'dietary-guide.html' = 'dietary-guide'
    'pantry-essentials.html' = 'pantry-essentials'
    'breakfast.html' = 'breakfast'
    'lunch.html' = 'lunch'
    'dinner.html' = 'dinner'
    'braai.html' = 'braai'
    'soups.html' = 'soups'
    'desserts.html' = 'desserts'
    'snacks.html' = 'snacks'
    'drinks.html' = 'drinks'
    'approved-meals.html' = 'approved-meals'
    'future-recipes.html' = 'future-recipes'
}

$chaptersUpdated = 0
Get-ChildItem "$root\chapters\*.html" | ForEach-Object {
    $content = [System.IO.File]::ReadAllText($_.FullName, $utf8)
    $activeNav = $chapterNavIds[$_.Name]
    if (-not $activeNav) { return }
    $newContent = Convert-CookbookPageShell $content 'chapter' $activeNav
    if ($newContent -notmatch 'cookbook\.js') {
        $newContent = $newContent -replace '</body>', "  <script src=`"../js/recipes.js`"></script>`n  <script src=`"../js/vendor/fuse.min.js`"></script>`n  <script src=`"../js/search-index.js`"></script>`n  <script src=`"../js/search.js`"></script>`n  <script src=`"../js/cookbook.js`"></script>`n</body>"
    } else {
        $newContent = Ensure-SearchScripts $newContent '../'
    }
    if ($newContent -ne $content) {
        Write-Utf8File $_.FullName $newContent
        $chaptersUpdated++
    }
}
Write-Host "Updated $chaptersUpdated chapter HTML pages with shared shell"

$fixedAside = 0
Get-ChildItem "$root\chapters\*.html" | ForEach-Object {
    $content = [System.IO.File]::ReadAllText($_.FullName, $utf8)
    if ($content -match 'data-sidebar-preserve') {
        $newContent = [regex]::Replace($content, '(?s)\s*<aside class="sidebar" data-cookbook-sidebar>.*?</aside>', "`n    <aside class=`"sidebar`" data-cookbook-sidebar></aside>")
        if ($newContent -ne $content) {
            Write-Utf8File $_.FullName $newContent
            $fixedAside++
        }
    }
}
Write-Host "Fixed $fixedAside chapter sidebars with broken markup"

$ratingFixed = 0
Get-ChildItem "$root\recipes\*.html" | ForEach-Object {
    $content = [System.IO.File]::ReadAllText($_.FullName, $utf8)
    $newContent = [regex]::Replace($content, '<div class="recipe-rating"[^>]*>.*?</div>', '<div class="recipe-rating" aria-label="Rating not yet set"></div>')
    if ($newContent -ne $content) {
        Write-Utf8File $_.FullName $newContent
        $ratingFixed++
    }
}
Write-Host "Normalized recipe rating stars on $ratingFixed HTML pages"

$searchScriptsAdded = 0
$htmlFiles = @("$root\index.html") + (Get-ChildItem "$root\chapters\*.html").FullName + (Get-ChildItem "$root\recipes\*.html").FullName
foreach ($file in $htmlFiles) {
    $prefix = if ($file -eq "$root\index.html") { "" } else { "../" }
    $content = [System.IO.File]::ReadAllText($file, $utf8)
    $newContent = Ensure-SearchScripts $content $prefix
    if ($newContent -ne $content) {
        Write-Utf8File $file $newContent
        $searchScriptsAdded++
    }
}
Write-Host "Ensured search scripts on $searchScriptsAdded HTML pages"

$exportScript = Join-Path $PSScriptRoot "export-mobile-seed.ps1"
if (Test-Path $exportScript) {
    Write-Host "Exporting mobile seed assets..."
    & $exportScript
}
