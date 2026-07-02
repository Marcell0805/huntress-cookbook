# The Huntress Cookbook

A personal cookbook for the Huntress — gluten-free, onion-free, and IBS-conscious meals built with care by the Sly Fox.

## Getting Started

Open **`index.html`** in your browser to browse the cookbook.

### Android app

Download the offline mobile app from **[downloads/huntress-cookbook.apk](downloads/huntress-cookbook.apk)** or use the phone icon in the chapter/recipe toolbar.

**Plans:** [Flutter mobile app](docs/plans/flutter-mobile-app.md) · [Content authoring pipeline](docs/plans/content-authoring-pipeline.md) · [Known issues & lessons](docs/known-issues-and-lessons.md)

See **[downloads/README.md](downloads/README.md)** for install steps (Play Protect prompts are normal for sideloaded apps).

### What's included

- **Recipe chapters** — breakfast, lunch, dinner, braai, soups, desserts, snacks, drinks
- **Guide pages** — introduction, dietary guide, pantry essentials, future recipes
- **Recipe data** — per-chapter JSON files in `data/` (see below)
- **Print-ready** — press `Ctrl+P` on any page to save as PDF

### Folder structure

```
huntress-cookbook/
├── index.html              ← Start here
├── data/
│   ├── breakfast.json
│   ├── lunch.json
│   ├── dinner.json
│   ├── braai.json
│   ├── comfortFood.json
│   ├── desserts.json
│   ├── snacks.json
│   ├── drinks.json
│   ├── introduction.json
│   ├── dietary-guide.json
│   ├── pantry-essentials.json
│   ├── future-recipes.json
│   └── cookbook-settings.json
├── chapters/
├── recipes/
├── css/
│   └── cookbook.css
├── js/
│   ├── recipes.js          ← Generated — do not edit by hand
│   ├── cookbook.js
│   └── auth.js
└── assets/
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

Recipe HTML pages use `data-recipe-slug` and `data-recipe-id` for hydration from `js/recipes.js`.

## Recipe data (JS)

All recipe data lives in **`js/recipes.js`** (generated from the JSON files in `data/`).

To rebuild after editing chapter JSON or guide files:

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

Your browser opens at **`http://127.0.0.1:5501`** (port 5500 is often used by Oracle on Windows). Save any file and the page refreshes automatically.

> Live Server is a VS Code extension — you do **not** need Python or Node installed.

## Password Gate

The cookbook has a simple password screen (`1234`) to keep casual visitors out. Once entered, the browser remembers for the session (until the tab is closed).

> This is not high-security — it stops random link-clickers, not someone determined to view the source.

To change the password, edit `PASSWORD` in `js/auth.js`.

## Fonts

Loaded from Google Fonts (requires internet on first view):

- **Cormorant Garamond** — headings and body
- **Dancing Script** — handwritten accents and quotes
