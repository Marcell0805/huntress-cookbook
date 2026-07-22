# Huntress Cookbook Mobile — Next phase (record)

> **Status:** Implemented in app (build 16+); family polish shipped 2026-07-17  
> **Last updated:** 2026-07-17  
> **Mobile repo:** `HuntressCookbook-Mobile`  
> **Detail plan:** `HuntressCookbook-Mobile/docs/plans/family-notes-creator-account.md`

## Shipped in this phase

1. **Photo backup** — Drive App Data uploads `huntress_photos.zip` with `huntress_backup.json`; restore extracts into `recipe_images/`.
2. **Share source URL** — Recipe share text includes `Source:` when `sourceUrl` is set (future ideas).
3. **What's New** — First launch after a build bump shows local highlights; OTA update dialog parses multi-line release notes as bullets.
4. **Local export/import** — Share/save a zip without Google; import restores JSON (+ photos if present).
5. **Family group MVP** — MasterChef creates a shared Drive folder; invites up to 3 Google accounts; members add recipe notes only; MasterChef retains edit/delete.
6. **Family notes UX (2026-07-17)** — Creator roles (Huntress/Fox via `mobile_config.json`), colored notes, nicknames + `colorIndex`, Account screen, inline creator note editing, MasterChef note moderation. Audit + test checklist: see detail plan above.

## Follow-ups (not in this phase)

- Daily background auto-backup
- Publish MasterChef recipe body into shared `family_cookbook.json`
- PIN gate on destructive restore
- YAML authoring / SQLite → web JSON round-trip
