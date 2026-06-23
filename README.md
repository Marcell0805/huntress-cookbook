# The Huntress Cookbook

A personal cookbook for the Huntress — gluten-free, onion-free, and IBS-conscious meals built with care by the Sly Fox.

## Getting Started

Open **`index.html`** in your browser to browse the cookbook.

### What's included

- **Breakfast chapter cover** — matches the Elegant Woodland design (forest green sidebar, gold accents, category sections)
- **Sample recipe** — Cheese & Herb Omelette with full recipe layout
- **Print-ready** — press `Ctrl+P` on any page to save as PDF

### Folder structure

```
huntress-cookbook/
├── index.html              ← Start here
├── chapters/
│   └── breakfast.html      ← Chapter cover page
├── recipes/
│   └── cheese-herb-omelette.html
├── css/
│   └── cookbook.css        ← Design system
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

## Approval Status

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

## Fonts

Loaded from Google Fonts (requires internet on first view):

- **Cormorant Garamond** — headings and body
- **Dancing Script** — handwritten accents and quotes
