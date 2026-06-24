$root = "C:\Users\msvn\OneDrive - Hulamin Limited\Documents\MSVN\Personal\huntress-cookbook"

$v1 = Get-Content "$root\data\Huntress_Cookbook_Recipes_v1.json" -Raw | ConvertFrom-Json
$details = @{}
if (Test-Path "$root\data\recipes.json") {
    (Get-Content "$root\data\recipes.json" -Raw | ConvertFrom-Json) | ForEach-Object { $details[$_.name] = $_ }
}

$slugOverrides = @{
    "Yogurt & Honey Bowl" = "yogurt-honey-breakfast-bowl"
    "Yogurt & Honey Pot" = "yogurt-honey-pot"
    "Bobotie (GF Version)" = "bobotie-gf"
    "Bobotie" = "bobotie-gf"
    "Malva Pudding (GF)" = "malva-pudding-gf"
    "Peppermint Crisp Tart (GF)" = "peppermint-crisp-tart-gf"
    "Greek Salad (Onion-Free)" = "greek-salad-onion-free"
    "Shakshuka (Onion-Free)" = "shakshuka-onion-free"
    "French Toast (GF Bread)" = "french-toast-gf-bread"
    "Potato Salad (Onion-Free)" = "potato-salad-onion-free"
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
}

function Ensure-Array($value, $default) {
    if ($null -eq $value) { return @($default) }
    if ($value -is [System.Array]) { return @($value) }
    return @([string]$value)
}

$chapterSectionsJson = @'
{
  "breakfast": [
    {"title":"Egg Based Breakfasts","icon":"egg","desc":"Protein-rich starts to fuel your morning adventures.","names":["Cheese & Herb Omelette","Mushroom & Spinach Omelette","Bacon & Avocado Eggs","Shakshuka (Onion-Free)"]},
    {"title":"Smoothies & Bowls","icon":"bowl","desc":"Light, refreshing, and easy on the stomach.","names":["Berry Smoothie Bowl","Chia Pudding","Yogurt & Honey Bowl"]},
    {"title":"Warm & Comforting","icon":"warm","desc":"Cozy mornings that feel like a hug.","names":["Creamy Cinnamon Oats","Sweet Potato Breakfast Hash","Gluten-Free Pancakes","French Toast (GF Bread)"]},
    {"title":"Quick & On-The-Go","icon":"clock","desc":"For mornings when adventure calls early.","names":["Overnight Oats"]}
  ],
  "lunch": [
    {"title":"Salads & Bowls","icon":"salad","desc":"Fresh midday meals that travel well.","names":["Chicken & Avocado Salad","Greek Salad (Onion-Free)","Egg Salad Bowl","Chicken & Rice Bowl","Sweet Potato & Chicken Bowl"]},
    {"title":"Soups","icon":"soup","desc":"Warm bowls for lighter lunch days.","names":["Butternut Soup","Tomato & Basil Soup","Carrot & Ginger Soup"]},
    {"title":"Bites & Skewers","icon":"skewer","desc":"Handheld lunches and picnic-friendly plates.","names":["Tuna Stuffed Peppers","Chicken Skewers","Mini Frittatas","Savoury GF Muffins","Cheese Board Lunch","Rice Paper Rolls","Beef Meatballs & Rice"]}
  ],
  "dinner": [
    {"title":"Chicken","icon":"chicken","desc":"Simple proteins with herbs and butter.","names":["Garlic Butter Chicken","Lemon Herb Chicken","Creamy Mushroom Chicken","Tuscan Chicken","Chicken & Rice Bake"]},
    {"title":"Beef & Lamb","icon":"beef","desc":"Hearty classics for cold evenings.","names":["Cottage Pie","Steak & Sweet Potato","Beef Meatballs","Slow Cooked Beef Stew","Beef Potjie","Shepherd's Pie"]},
    {"title":"Fish & Seafood","icon":"fish","desc":"Light suppers from the sea.","names":["Lemon Garlic Hake","Garlic Butter Salmon","Tuna Patties","Prawn & Rice Bowl"]},
    {"title":"South African Favourites","icon":"sa","desc":"Beloved classics, adapted for the Huntress.","names":["Bobotie (GF Version)","Butternut & Bacon Bake","Chicken Soup","Loaded Sweet Potatoes"]}
  ],
  "braai": [
    {"title":"Over The Coals","icon":"fire","desc":"Main braai proteins and stars.","names":["Garlic Butter Chicken Braai","Lemon Herb Chicken Sosaties","Steak Over The Coals","Lamb Chops","Huntress-Safe Boerewors"]},
    {"title":"Sides & Salads","icon":"potato","desc":"Everything that rounds out the plate.","names":["Sweet Potato Wedges","Braaied Corn","Greek Salad","Beetroot Salad","Potato Salad (Onion-Free)","Foil Potatoes","Stuffed Mushrooms"]},
    {"title":"Dessert On The Fire","icon":"peach","desc":"Sweet endings from the coals.","names":["Braaied Peaches","Cinnamon Braai Apples"]}
  ],
  "soups": [
    {"title":"Soups","icon":"soup","desc":"Gentle, warming bowls.","names":["Creamy Butternut Soup","Tomato & Basil Soup","Carrot & Ginger Soup","Chicken & Vegetable Soup","Roasted Red Pepper Soup"]},
    {"title":"Comfort Classics","icon":"home","desc":"Familiar favourites for slow evenings.","names":["Cottage Pie","Shepherd's Pie","Bobotie","Beef Stew","Potjie","Butternut & Bacon Bake","Loaded Sweet Potatoes","Chicken & Rice Bake","Simple Chicken & Rice","Soft Scrambled Eggs","Honey Yogurt Bowl"]}
  ],
  "desserts": [
    {"title":"South African Classics","icon":"sa","desc":"Iconic desserts, lovingly adapted.","names":["Malva Pudding (GF)","Peppermint Crisp Tart (GF)","Milk Tart (GF)"]},
    {"title":"Chocolate & Warm","icon":"chocolate","desc":"Indulgent treats when the mood strikes.","names":["Chocolate Mousse","Chocolate Covered Strawberries","Hot Chocolate Mug","Honey Roasted Peaches","Cinnamon Apples"]},
    {"title":"Cups & Frozen","icon":"ice","desc":"Chilled desserts and creamy cups.","names":["Berry & Cream Cups","Strawberry Cheesecake Cups","Blueberry Cheesecake Cups","Berry Frozen Yogurt","Mango Sorbet","Rice Pudding","Vanilla Custard"]}
  ],
  "snacks": [
    {"title":"Snack Boxes","icon":"box","desc":"Packed bites for adventures.","names":["Cheese & Rice Crackers","Boiled Eggs & Fruit","Chicken Snack Box","Chia Berry Cups","Yogurt & Honey Pot"]},
    {"title":"Picnic Favourites","icon":"picnic","desc":"Easy shares for outdoor days.","names":["Trail Mix (Huntress Safe)","Rice Cakes & Peanut Butter","Mini Frittatas","Picnic Cheese Board","Chicken Skewers"]}
  ]
}
'@

$chapterSections = $chapterSectionsJson | ConvertFrom-Json

$allRecipes = [ordered]@{}
$categories = @()

foreach ($prop in $v1.categories.PSObject.Properties) {
    $catKey = $prop.Name
    if (-not $categoryMeta.ContainsKey($catKey)) { continue }
    $meta = $categoryMeta[$catKey]
    $catId = $meta.id
    $catLabel = $meta.label
    $recipeSlugs = @()
    foreach ($name in @($prop.Value)) {
        $slug = Get-Slug $name
        $existingFile = "$root\recipes\$slug.html"
        if (Test-Path $existingFile) {
            $slug = [System.IO.Path]::GetFileNameWithoutExtension($existingFile)
        }
        $id = "$catId-$slug"
        $d = $details[$name]
        $hasExisting = $null -ne $allRecipes[$slug]
        $existingName = if ($hasExisting) { $allRecipes[$slug].name } else { $null }
        $recipe = [ordered]@{
            id = if ($d -and $d.id) { $d.id } else { $id }
            slug = $slug
            name = if ($hasExisting -and $details.ContainsKey($existingName)) { $existingName } elseif ($d -and $d.name) { $name } else { $name }
            categoryId = if ($d) { $catId } elseif ($hasExisting) { $allRecipes[$slug].categoryId } else { $catId }
            category = if ($d) { $catLabel } elseif ($hasExisting) { $allRecipes[$slug].category } else { $catLabel }
            status = "untested"
            description = if ($d -and $d.description) { $d.description } elseif ($hasExisting) { $allRecipes[$slug].description } else { "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing." }
            difficulty = if ($d -and $d.difficulty) { $d.difficulty } elseif ($hasExisting) { $allRecipes[$slug].difficulty } else { "TBD" }
            prepTime = if ($d -and $d.prepTime) { $d.prepTime } elseif ($hasExisting) { $allRecipes[$slug].prepTime } else { 0 }
            cookTime = if ($d -and $d.cookTime) { $d.cookTime } elseif ($hasExisting) { $allRecipes[$slug].cookTime } else { 0 }
            servings = if ($d -and $d.servings) { $d.servings } elseif ($hasExisting) { $allRecipes[$slug].servings } else { 0 }
            tags = if ($d -and $d.tags) { @($d.tags) } elseif ($hasExisting) { Ensure-Array $allRecipes[$slug].tags "Gluten Free" } else { @("Gluten Free", "Onion Free") }
            ingredients = if ($d -and $d.ingredients) { Ensure-Array $d.ingredients "Ingredients to be confirmed after testing." } elseif ($hasExisting) { Ensure-Array $allRecipes[$slug].ingredients "Ingredients to be confirmed after testing." } else { @("Ingredients to be confirmed after testing.") }
            instructions = if ($d -and $d.instructions) { Ensure-Array $d.instructions "Method to be added once this recipe has been tested." } elseif ($hasExisting) { Ensure-Array $allRecipes[$slug].instructions "Method to be added once this recipe has been tested." } else { @("Method to be added once this recipe has been tested.") }
            huntressNotes = if ($d -and $d.huntressNotes) { ($d.huntressNotes -join '. ') } elseif ($hasExisting) { $allRecipes[$slug].huntressNotes } else { "GF. Onion-Free. IBS-conscious." }
            foxNotes = if ($hasExisting) { $allRecipes[$slug].foxNotes } else { "Add Fox Notes after the first cook." }
            image = "$slug.jpg"
        }
        $allRecipes[$slug] = $recipe
        $recipeSlugs += $slug
    }
    $categories += [ordered]@{ id = $catId; name = $catLabel; recipeSlugs = $recipeSlugs }
}

$output = [ordered]@{
    version = if ($v1.version) { $v1.version } else { 2 }
    project = if ($v1.project) { $v1.project } else { "The Huntress Cookbook" }
    dietaryGuide = $v1.dietaryGuide
    futureRecipes = @($v1.futureRecipes)
    categories = $categories
    chapters = $chapterSections
    recipes = $allRecipes
}

$json = $output | ConvertTo-Json -Depth 12
$js = "/* The Huntress Cookbook - recipe data */`nvar HUNTRESS_COOKBOOK = $json;`n"
[System.IO.File]::WriteAllText("$root\js\recipes.js", $js)
Write-Host "Wrote js/recipes.js with $($allRecipes.Count) recipes"

$chapterLinks = @{
    breakfast = "breakfast.html"
    lunch = "lunch.html"
    dinner = "dinner.html"
    braai = "braai.html"
    soups = "soups.html"
    desserts = "desserts.html"
    snacks = "snacks.html"
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
<body class="recipe-page" data-recipe-slug="{{SLUG}}" data-recipe-id="{{ID}}">

  <p class="no-print" style="text-align:center;padding:1rem;font-family:sans-serif;font-size:0.85rem;">
    <a href="../chapters/{{CHAPTER_FILE}}">← Back to {{CHAPTER_LABEL}}</a> &nbsp;|&nbsp;
    <a href="../index.html">Cookbook Home</a> &nbsp;|&nbsp;
    Press <strong>Ctrl+P</strong> to print or save as PDF
  </p>

  <div class="page">
    <aside class="sidebar">
      <div class="sidebar-logo">
        <img src="../assets/fox-logo.svg" alt="Sly Fox">
        <div class="sidebar-brand">THE HUNTRESS<br>COOKBOOK</div>
      </div>
      <ol class="sidebar-nav">
        <li><a href="#">1. Introduction</a></li>
        <li><a href="../chapters/dietary-guide.html">2. Huntress Dietary Guide</a></li>
        <li><a href="#">3. Pantry Essentials</a></li>
        <li><a href="../chapters/breakfast.html">4. Breakfast Recipes</a></li>
        <li><a href="../chapters/lunch.html">5. Lunch Recipes</a></li>
        <li><a href="../chapters/dinner.html">6. Dinner Recipes</a></li>
        <li><a href="../chapters/braai.html">7. Braai Recipes</a></li>
        <li><a href="../chapters/soups.html">8. Soups &amp; Comfort Foods</a></li>
        <li><a href="../chapters/desserts.html">9. Desserts</a></li>
        <li><a href="../chapters/snacks.html">10. Snacks &amp; Picnic Foods</a></li>
        <li><a href="#">11. Special Occasion Meals</a></li>
        <li><a href="#">12. Approved Huntress Meals</a></li>
        <li><a href="#">13. Recipe Improvement Notes</a></li>
        <li><a href="../chapters/future-recipes.html">14. Future Recipes To Try</a></li>
      </ol>
      <p class="sidebar-tagline">Made with care,<br>for the Huntress <span class="heart">♥</span></p>
    </aside>

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
        <div class="recipe-rating">☆ ☆ ☆ ☆ ☆</div>
        <div class="recipe-photo">
          <img src="../assets/images/{{IMAGE}}" alt="{{NAME}}">
        </div>
      </div>
    </main>
  </div>

  <script src="../js/recipes.js"></script>
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
    snacks = "Snacks"
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
        $html = $html.Replace('{{CHAPTER_FILE}}', $chapterLinks[$recipe.categoryId])
        $html = $html.Replace('{{CHAPTER_LABEL}}', $chapterLabels[$recipe.categoryId])
        [System.IO.File]::WriteAllText($path, $html)
        $created++
    }
}
Write-Host "Created $created new recipe HTML pages"

$updated = 0
Get-ChildItem "$root\recipes\*.html" | ForEach-Object {
    $content = [System.IO.File]::ReadAllText($_.FullName)
    $slug = $_.BaseName
    $recipe = $allRecipes[$slug]
    if (-not $recipe) { return }
    $changed = $false
    if ($content -notmatch 'data-recipe-slug=') {
        $content = $content -replace '<body class="recipe-page"[^>]*>', "<body class=`"recipe-page`" data-recipe-slug=`"$slug`" data-recipe-id=`"$($recipe.id)`">"
        $changed = $true
    }
    if ($content -notmatch 'recipes\.js') {
        $content = $content -replace '</body>', "  <script src=`"../js/recipes.js`"></script>`n  <script src=`"../js/cookbook.js`"></script>`n</body>"
        $changed = $true
    }
    if ($changed) {
        [System.IO.File]::WriteAllText($_.FullName, $content)
        $updated++
    }
}
Write-Host "Updated $updated existing recipe HTML pages"
