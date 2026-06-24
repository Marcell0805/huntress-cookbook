# The Huntress Cookbook

A personal cookbook for the Huntress — gluten-free, onion-free, and IBS-conscious meals built with care by the Sly Fox.

## Getting Started

Open **`index.html`** in your browser to browse the cookbook.

### What's included

- **Breakfast chapter** — 10 recipes from the breakfast chapter import
- **Dinner & Desserts chapters** — recipes from `data/recipes.json`
- **Recipe data** — structured JSON at `data/recipes.json` (source for dinner, desserts, and cross-reference)
- **Print-ready** — press `Ctrl+P` on any page to save as PDF

### Folder structure

```
huntress-cookbook/
├── index.html              ← Start here
├── data/
│   └── recipes.json        ← Structured recipe data (JSON source)
├── chapters/
│   ├── breakfast.html
│   ├── dinner.html
│   └── desserts.html
├── recipes/
│   ├── cheese-herb-omelette.html
│   ├── garlic-butter-chicken.html
│   ├── bobotie-gf.html
│   ├── malva-pudding-gf.html
│   ├── peppermint-crisp-tart-gf.html
│   └── … (breakfast recipes)
├── css/
│   └── cookbook.css        ← Design system
├── js/
│   └── auth.js             ← Password gate
└── assets/
    ├── fox-logo.svg
    └── images/             ← Add your food photos here
```

## Adding Photos

1. Save food photos to `assets/images/` (e.g. `cheese-herb-omelette.jpg`)
2. In the HTML, replace a placeholder `<div class="photo-placeholder">` with:
   ```html
   <img src="../assets/images/your-photo.jpg" alt="Description">
   ```

## Adding Recipes

Copy `recipes/cheese-herb-omelette.html` as a template. Update:

- Recipe name, meta (prep/cook time, difficulty, servings)
- Status: `status-untested`, `status-testing`, or `status-approved`
- Ingredients, method, Huntress Notes, Fox Notes, rating

Link the new recipe from the relevant chapter page.

Recipe HTML pages include a `data-recipe-id` attribute matching the `id` field in `data/recipes.json` where applicable.

## Recipe data (JS)

All recipe data lives in **`js/recipes.js`** (generated from `data/Huntress_Cookbook_Recipes_v1.json` + `data/recipes.json`).

To rebuild after editing the JSON source files:

```powershell
powershell -ExecutionPolicy Bypass -File scripts/build-recipes.ps1
```

`js/cookbook.js` renders chapter recipe lists and hydrates recipe pages from `recipes.js`.

## Recipe data (JSON source)

| Status | CSS class | Label |
|--------|-----------|-------|
| Untested | `status-untested` | Untested |
| In Testing | `status-testing` | In Testing |
| Approved | `status-approved` | Huntress Approved |

## Design Colours

| Name | Hex |
|------|-----|
| Forest Green | `#1a3d2e` |
| Warm Gold | `#c9a227` |
| Cream | `#f5f0e8` |
| Soft Brown | `#5c4a3a` |

## View in VS Code / Cursor

1. **File → Open Folder** → select the `huntress-cookbook` folder
2. Install **Live Server** when prompted (or Extensions → search "Live Server")
3. Right-click **`index.html`** → **Open with Live Server**

Your browser opens at **`http://127.0.0.1:5500`** (not 8080). Save any file and the page refreshes automatically.

> Live Server is a VS Code extension — you do **not** need Python or Node installed.

## Password Gate

The cookbook has a simple password screen (`1234`) to keep casual visitors out. Once entered, the browser remembers for the session (until the tab is closed).

> This is not high-security — it stops random link-clickers, not someone determined to view the source.

To change the password, edit `PASSWORD` in `js/auth.js`.

## Fonts

Loaded from Google Fonts (requires internet on first view):

- **Cormorant Garamond** — headings and body
- **Dancing Script** — handwritten accents and quotes
