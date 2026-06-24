# Retry missing images using verified Pexels + Unsplash URLs
$root = "C:\Users\msvn\OneDrive - Hulamin Limited\Documents\MSVN\Personal\huntress-cookbook"
$outDir = Join-Path $root "assets\images"
$ua = @{ "User-Agent" = "HuntressCookbook/1.0" }

function Pexels($id) {
    "https://images.pexels.com/photos/$id/pexels-photo-$id.jpeg?auto=compress&cs=tinysrgb&w=900&h=900&fit=crop"
}

function Unsplash($photo) {
    "https://images.unsplash.com/$photo`?auto=format&fit=crop&w=900&h=900&q=85"
}

# Verified sources only
$imageUrls = @{
    "bobotie-gf.jpg" = Unsplash "photo-1621996346565-e3dbc646d9a9"

    "beef-meatballs.jpg" = Pexels 2233708
    "beef-meatballs-rice.jpg" = Pexels 2233708
    "beef-potjie.jpg" = Pexels 769289
    "beef-stew.jpg" = Pexels 769289
    "potjie.jpg" = Pexels 769289
    "slow-cooked-beef-stew.jpg" = Pexels 769289

    "berry-cream-cups.jpg" = Pexels 1126359
    "berry-frozen-yogurt.jpg" = Pexels 1126359
    "blueberry-cheesecake-cups.jpg" = Pexels 452910
    "chocolate-mousse.jpg" = Pexels 452910

    "braaied-corn.jpg" = Pexels 129168
    "braaied-peaches.jpg" = Pexels 1132047
    "honey-roasted-peaches.jpg" = Pexels 1132047

    "cheese-board-lunch.jpg" = Pexels 296287
    "chicken-rice-bake.jpg" = Pexels 2338407
    "chicken-rice-bowl.jpg" = Pexels 2338407
    "simple-chicken-rice.jpg" = Pexels 2338407

    "creamy-mushroom-chicken.jpg" = Pexels 4109111
    "garlic-butter-chicken-braai.jpg" = Unsplash "photo-1753988059147-519073e45402"
    "lemon-herb-chicken.jpg" = Pexels 4109111
    "tuscan-chicken.jpg" = Unsplash "photo-1763219802762-1d34ee0907c5"

    "foil-potatoes.jpg" = Pexels 144248
    "potato-salad-onion-free.jpg" = Pexels 531028
    "sweet-potato-wedges.jpg" = Pexels 144248

    "french-toast-gf-bread.jpg" = Pexels 1624487
    "honey-yogurt-bowl.jpg" = Pexels 1126359
    "soft-scrambled-eggs.jpg" = Pexels 70497
    "mini-frittatas.jpg" = Pexels 70497

    "huntress-safe-boerewors.jpg" = Pexels 769289
    "lamb-chops.jpg" = Pexels 1279330
    "steak-over-the-coals.jpg" = Pexels 1279330
    "steak-sweet-potato.jpg" = Pexels 1279330

    "lemon-garlic-hake.jpg" = Pexels 1435904
    "prawn-rice-bowl.jpg" = Pexels 1435904
    "tuna-stuffed-peppers.jpg" = Pexels 1435904

    "rice-paper-rolls.jpg" = Pexels 1627307
}

$ok = 0; $fail = 0
foreach ($file in $imageUrls.Keys) {
    $dest = Join-Path $outDir $file
    try {
        Invoke-WebRequest -Uri $imageUrls[$file] -OutFile $dest -Headers $ua -UseBasicParsing -TimeoutSec 90
        $size = (Get-Item $dest).Length
        if ($size -lt 8000) { throw "Too small: $size bytes" }
        Write-Host "OK $file ($([math]::Round($size/1024))KB)"
        $ok++
    } catch {
        Write-Host "FAIL $file - $_"
        $fail++
    }
    Start-Sleep -Milliseconds 400
}
Write-Host "Retry done: $ok ok, $fail fail"
