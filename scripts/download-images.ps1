# Downloads recipe images from Unsplash / Wikimedia (800px+, high quality)
$root = "C:\Users\msvn\OneDrive - Hulamin Limited\Documents\MSVN\Personal\huntress-cookbook"
$outDir = Join-Path $root "assets\images"
$ua = @{ "User-Agent" = "HuntressCookbook/1.0" }

function Get-Unsplash($id) {
    "https://images.unsplash.com/$id`?auto=format&fit=crop&w=900&h=900&q=85"
}

$imageUrls = @{
    # Replace low-res bobotie
    "bobotie-gf.jpg" = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Bobotie.jpg/1280px-Bobotie.jpg"

    # Breakfast gaps
    "shakshuka-onion-free.jpg" = Get-Unsplash "photo-1590414424561-857cb3b1023c"
    "french-toast-gf-bread.jpg" = Get-Unsplash "photo-1484722417848-7cf42d6efb10"
    "honey-yogurt-bowl.jpg" = Get-Unsplash "photo-1488477181941-6428a0291771"
    "soft-scrambled-eggs.jpg" = Get-Unsplash "photo-1525351483963-9fa674f55809"

    # Lunch
    "chicken-avocado-salad.jpg" = Get-Unsplash "photo-1546069901-ba9599a7e63c"
    "greek-salad-onion-free.jpg" = Get-Unsplash "photo-1540189549336-e6e99c3679fe"
    "greek-salad.jpg" = Get-Unsplash "photo-1512621776951-a57141f2eefd"
    "tuna-stuffed-peppers.jpg" = Get-Unsplash "photo-1601926335425-0b5b4d2e4d1a"
    "egg-salad-bowl.jpg" = Get-Unsplash "photo-1547592166-23ac45744acd"
    "chicken-rice-bowl.jpg" = Get-Unsplash "photo-1603133872877-684f608b84e2"
    "butternut-soup.jpg" = Get-Unsplash "photo-1476718406336-bb5a9690ee2a"
    "tomato-basil-soup.jpg" = Get-Unsplash "photo-1547592166-23ac45744acd"
    "carrot-ginger-soup.jpg" = Get-Unsplash "photo-1547592166-23ac45744acd"
    "chicken-skewers.jpg" = Get-Unsplash "photo-1608039829572-78524f79c4c7"
    "mini-frittatas.jpg" = Get-Unsplash "photo-1482049016688-a72bd4f8bfe0"
    "savoury-gf-muffins.jpg" = Get-Unsplash "photo-1607958996333-41aef7caefaa"
    "cheese-board-lunch.jpg" = Get-Unsplash "photo-1452195100406-9bc0d579684f"
    "rice-paper-rolls.jpg" = Get-Unsplash "photo-1627308595229-87a8f273d964"
    "sweet-potato-chicken-bowl.jpg" = Get-Unsplash "photo-1546069901-ba9599a7e63c"
    "beef-meatballs-rice.jpg" = Get-Unsplash "photo-1529042410759-befb1204b386"

    # Dinner
    "lemon-herb-chicken.jpg" = Get-Unsplash "photo-1598103442097-39b9c565642b"
    "creamy-mushroom-chicken.jpg" = Get-Unsplash "photo-1632773439835-7b3a23b0a1b4"
    "tuscan-chicken.jpg" = Get-Unsplash "photo-1604908177297-0f4bd8a0b8f1"
    "chicken-rice-bake.jpg" = Get-Unsplash "photo-1603133872877-684f608b84e2"
    "cottage-pie.jpg" = Get-Unsplash "photo-1621996346565-e3dbc646d9a9"
    "shepherds-pie.jpg" = Get-Unsplash "photo-1621996346565-e3dbc646d9a9"
    "steak-sweet-potato.jpg" = Get-Unsplash "photo-1600891964599-f61ba0e97aab"
    "beef-meatballs.jpg" = Get-Unsplash "photo-1529042410759-befb1204b386"
    "slow-cooked-beef-stew.jpg" = Get-Unsplash "photo-1604908177297-0f4bd8a0b8f1"
    "beef-potjie.jpg" = Get-Unsplash "photo-1595777207849-977fba262541"
    "lemon-garlic-hake.jpg" = Get-Unsplash "photo-1519708227418-cc8fb6fb32a5"
    "garlic-butter-salmon.jpg" = Get-Unsplash "photo-1467003909585-2f8a72700288"
    "tuna-patties.jpg" = Get-Unsplash "photo-1565299624946-b28f40a0ae38"
    "prawn-rice-bowl.jpg" = Get-Unsplash "photo-1563379091339-03246963d29a"
    "butternut-bacon-bake.jpg" = Get-Unsplash "photo-1504674900247-0877df9cc836"
    "chicken-soup.jpg" = Get-Unsplash "photo-1547592166-23ac45744acd"
    "loaded-sweet-potatoes.jpg" = Get-Unsplash "photo-1504674900247-0877df9cc836"

    # Braai
    "garlic-butter-chicken-braai.jpg" = Get-Unsplash "photo-1598103442097-39b9c565642b"
    "lemon-herb-chicken-sosaties.jpg" = Get-Unsplash "photo-1608039829572-78524f79c4c7"
    "steak-over-the-coals.jpg" = Get-Unsplash "photo-1546837502-32d4370eddc4"
    "lamb-chops.jpg" = Get-Unsplash "photo-1602470520998-f4a52199d739"
    "huntress-safe-boerewors.jpg" = Get-Unsplash "photo-1606755456206-5a7d0c61013d"
    "sweet-potato-wedges.jpg" = Get-Unsplash "photo-1573080496216-bfbb26297ffe"
    "braaied-corn.jpg" = "https://images.pexels.com/photos/129168/pexels-photo-129168.jpeg?auto=compress&cs=tinysrgb&w=900&h=900&fit=crop"
    "beetroot-salad.jpg" = Get-Unsplash "photo-1512621776951-a57141f2eefd"
    "potato-salad-onion-free.jpg" = Get-Unsplash "photo-1534939561122-416b2f0700a6"
    "foil-potatoes.jpg" = Get-Unsplash "photo-1573080496216-bfbb26297ffe"
    "stuffed-mushrooms.jpg" = Get-Unsplash "photo-1504674900247-0877df9cc836"
    "braaied-peaches.jpg" = Get-Unsplash "photo-1629827435180-a74fe6863303"
    "cinnamon-braai-apples.jpg" = Get-Unsplash "photo-1567306226416-28f0efdc88ce"

    # Soups & comfort
    "creamy-butternut-soup.jpg" = Get-Unsplash "photo-1476718406336-bb5a9690ee2a"
    "chicken-vegetable-soup.jpg" = Get-Unsplash "photo-1547592166-23ac45744acd"
    "roasted-red-pepper-soup.jpg" = Get-Unsplash "photo-1547592166-23ac45744acd"
    "beef-stew.jpg" = Get-Unsplash "photo-1595777207849-977fba262541"
    "potjie.jpg" = Get-Unsplash "photo-1595777207849-977fba262541"
    "simple-chicken-rice.jpg" = Get-Unsplash "photo-1603133872877-684f608b84e2"

    # Desserts
    "milk-tart.jpg" = Get-Unsplash "photo-1578985545062-69928b1d9587"
    "chocolate-mousse.jpg" = Get-Unsplash "photo-1541783245831-57afa63efac5"
    "chocolate-covered-strawberries.jpg" = Get-Unsplash "photo-1464965911861-746a04b4bca6"
    "hot-chocolate-mug.jpg" = Get-Unsplash "photo-1542990253-0d0f5be5f0ed"
    "honey-roasted-peaches.jpg" = Get-Unsplash "photo-1629827435180-a74fe6863303"
    "cinnamon-apples.jpg" = Get-Unsplash "photo-1567306226416-28f0efdc88ce"
    "berry-cream-cups.jpg" = Get-Unsplash "photo-1488477181941-6428a0291771"
    "strawberry-cheesecake-cups.jpg" = Get-Unsplash "photo-1524351199678-941a58a3df50"
    "blueberry-cheesecake-cups.jpg" = Get-Unsplash "photo-1463535252580-e4470e8043ce"
    "berry-frozen-yogurt.jpg" = Get-Unsplash "photo-1488477181941-6428a0291771"
    "mango-sorbet.jpg" = Get-Unsplash "photo-1563805042-7684c019e1cb"
    "rice-pudding.jpg" = Get-Unsplash "photo-1571877227200-a0d98ea607e9"
    "vanilla-custard.jpg" = Get-Unsplash "photo-1571877227200-a0d98ea607e9"
}

$ok = 0
$fail = 0
foreach ($file in $imageUrls.Keys) {
    $dest = Join-Path $outDir $file
    try {
        Invoke-WebRequest -Uri $imageUrls[$file] -OutFile $dest -Headers $ua -UseBasicParsing -TimeoutSec 60
        $size = (Get-Item $dest).Length
        if ($size -lt 5000) { throw "File too small ($size bytes)" }
        Write-Host "OK $file ($size bytes)"
        $ok++
    } catch {
        Write-Host "FAIL $file - $_"
        $fail++
    }
    Start-Sleep -Milliseconds 300
}

# Copy existing shakshuka to slug-named file if missing
$shakCopy = Join-Path $outDir "shakshuka-onion-free.jpg"
$shakSrc = Join-Path $outDir "shakshuka.jpg"
if ((Test-Path $shakSrc) -and -not (Test-Path $shakCopy)) {
    Copy-Item $shakSrc $shakCopy
    Write-Host "Copied shakshuka.jpg -> shakshuka-onion-free.jpg"
}

Write-Host "Done: $ok downloaded, $fail failed"
