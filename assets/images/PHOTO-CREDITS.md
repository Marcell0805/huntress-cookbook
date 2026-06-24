# Photo credits

Recipe photos are from **Pexels** and **Unsplash** (free to use). Replace any image with your own Huntress-tested photo when you cook the dish — those are always best.

## Sources

| Source | License |
|--------|---------|
| [Pexels](https://www.pexels.com/license/) | Free for personal and commercial use |
| [Unsplash](https://unsplash.com/license) | Free under Unsplash License |
| [Wikimedia Commons](https://commons.wikimedia.org/) | See individual file (bobotie replaced with higher-quality stock) |

## Your own photos

Save photos as `assets/images/{recipe-slug}.jpg` (e.g. `bobotie-gf.jpg`). The filename must match the `image` field in `js/recipes.js`.

## Re-download stock images

```powershell
# Only downloads images that are missing (won't overwrite good photos):
powershell -ExecutionPolicy Bypass -File scripts/download-images-from-map.ps1

# To replace an image deliberately, delete the jpg first or use -Force:
powershell -ExecutionPolicy Bypass -File scripts/download-images-from-map.ps1 -Force
```

Breakfast omelette photos and other verified images are kept in git — do not bulk-replace without checking each photo.
