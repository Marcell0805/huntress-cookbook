# Known issues and lessons learned

Living notes from building **The Huntress Cookbook** (web + Flutter mobile). Use this when debugging similar problems or starting another app with the same patterns (OTA content sync, GitHub Pages hosting, sideloaded APKs).

> **Mirror:** The same file exists in `HuntressCookbook-Mobile/docs/known-issues-and-lessons.md`. Update both when you add an entry.

## How to add an entry

Copy this template under the right section:

```markdown
### Short title (YYYY-MM)

**Symptom:** What you saw  
**Cause:** Why it happened  
**Fix / workaround:** What worked  
**Future apps:** What to do differently next time
```

---

## OTA content sync and hosting

### GitHub Pages serves stale files (2026-07)

**Symptom:** Recipe update fails with `Checksum mismatch for cookbook_seed.json`. Manifest SHA-256 is correct locally; downloaded bytes do not match.

**Cause:** GitHub Pages (and browsers) can cache static files like `downloads/content/cookbook_seed.json`. The manifest was fresh but the seed file URL returned an older cached copy.

**Fix / workaround:**

- Append cache-busting query params to download URLs (`?v=<sha256>` per file, or `?v=<contentVersion>` on the manifest).
- Implemented in app (`cache_bust_url.dart`), `export-mobile-seed.ps1`, and `ContentSyncService`.
- After changing content, re-run `export-mobile-seed.ps1`, commit `downloads/`, push, then ship an APK that includes client-side cache busting.

**Future apps:** Never trust bare static URLs for verified downloads on GitHub Pages. Always cache-bust OTA assets. Verify live URLs in a browser with `?v=` before blaming the client.

### Content update prompt right after install (2026-07)

**Symptom:** Fresh APK install immediately offers “142 files (~4.1 MB)” recipe update even though the bundled seed matches the server.

**Cause:** `content_version` in `app_meta` was unset on first seed import, so any remote `contentVersion` looked “newer.”

**Fix / workaround:** On first bundled seed import, store SHA-256 of `cookbook_seed.json` as `content_version` (`seed_importer.dart`).

**Future apps:** Record the version/hash of bundled OTA content at first run so you only prompt when remote content is actually ahead.

### APK update vs recipe update (2026-07)

**Symptom:** User sees APK install dialog, then recipe update dialog, in sequence.

**Cause:** By design — `UpdateService` checks build number first (full APK), then `contentVersion` (incremental sync). A new APK may still ship older bundled content than what is hosted.

**Future apps:** Document the two-tier update model for testers. Consider whether fresh installs should skip content prompt when hashes match (now fixed for bundled seed).

---

## Publishing and versioning

### `publish-mobile.ps1` default path wrong (2026-06)

**Symptom:** Script reports APK not found after a successful `flutter build apk`.

**Cause:** Default `-MobileRoot` pointed at an old machine path (`...\Marcell0805\HuntressCookbook Mobile`).

**Fix / workaround:** Always pass `-MobileRoot` explicitly:

```powershell
-MobileRoot "c:\Users\msvn\source\repos\HuntressCookbook-Mobile"
```

**Future apps:** Default script paths to repo-relative detection (sibling folder) or require the parameter with no silent wrong default.

### APK updates use build number, not semver (2026-06)

**Symptom:** Published `mobile-version.json` showed `1.0.7` while the user expected `1.0.8`. Update check seemed inconsistent.

**Cause:** The app compares **integer build** (`pubspec.yaml` `+N`), not the semver string. Bumping only the name without `+N` does not trigger an APK update.

**Fix / workaround:** Bump `version: x.y.z+N` — increment **N** for every APK publish. Semver (`x.y.z`) is display-only for users.

**Future apps:** Document clearly: **build number drives OTA APK detection.** CI should fail if build is not incremented on release.

### PowerShell execution policy blocks scripts (2026-06)

**Symptom:** `.\publish-mobile.ps1` or `.\export-mobile-seed.ps1` fails with an execution policy error.

**Fix / workaround:**

```powershell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
# or per invocation:
powershell -ExecutionPolicy Bypass -File scripts\export-mobile-seed.ps1 ...
```

**Future apps:** Document bypass in README; consider `.cmd` wrappers for one-double-click publish.

### Large `downloads/` commits (2026-06)

**Symptom:** Git shows 140+ new/changed files after enabling content sync.

**Cause:** Expected — `downloads/content/images/*` mirrors recipe images for OTA sync on GitHub Pages.

**Future apps:** Plan for binary asset hosting in the publish pipeline; `.gitignore` only if you move assets to object storage (S3, R2, etc.).

---

## Android development environment

### Android Studio Run button greyed out (2026-06)

**Symptom:** No green Run, or only “Android App” config that does nothing.

**Cause:** Flutter projects need the **Flutter** plugin and a **Flutter** run configuration, not a plain Android App config.

**Fix / workaround:** Install Flutter plugin → **Add Configuration → Flutter** → select device → Run. Or use `flutter run` in terminal.

**Future apps:** Add “Android Studio setup” to README before handing the project to someone else.

### NDK `CXX1101` / missing `source.properties` (2026-06)

**Symptom:** Gradle fails: NDK did not have a source.properties file.

**Cause:** Corrupted or partial NDK download under `%LOCALAPPDATA%\Android\Sdk\ndk\`.

**Fix / workaround:** Delete the broken NDK folder; re-run `flutter run` or reinstall NDK via SDK Manager.

**Future apps:** Mention in troubleshooting; pin NDK version in `gradle` if teams hit this often.

### Sideload install permissions (2026-06)

**Symptom:** “Ready to install” appears but install fails or app vanishes.

**Cause:** Android requires **Install unknown apps** permission for the browser or file manager doing the update.

**Fix / workaround:** Settings → Apps → (Chrome / Files) → Allow installs. In-app update flow documents this in the install dialog.

**Future apps:** Test the full download → install → open path on a physical device, not just emulator.

---

## Repo and path hygiene

### Multiple working copies (2026-06)

**Symptom:** Scripts, APK, and seed land in different folders; “it works on my machine” across OneDrive vs `source\repos`.

**Cause:** Cookbook repo existed in more than one path (`Personal\huntress-cookbook` vs `source\repos\huntress-cookbook`).

**Fix / workaround:** Pick one canonical clone for publish; pass absolute `-MobileRoot` and `-ApkPath` to scripts.

**Future apps:** Single source of truth for paths in README; scripts resolve paths from `$PSScriptRoot` where possible.

### Android back button skips chapter or exits app (2026-07)

**Symptom:** From a recipe, system back jumps to app home or phone launcher instead of the chapter list.

**Cause:** Mixed `context.go()` (replaces stack) and `context.push()`. Saving a recipe with `go('/recipe/...')` wiped history. Drawer navigation also uses `go()`.

**Fix / workaround:** Use `recipeRoute()` / `openRecipe()` with `?from=` and `?chapter=` query params; `cookbookPop()` / `handleCookbookSystemBack()` read those for fallback. Never `go()` to recipe after save — `pop()` instead (build 13+).

**Future apps:** One navigation policy: `push` for drill-down, `go` only for sidebar teleport; always preserve return path.

### Pantry guide showed raw `{name: ...}` (2026-07)

**Symptom:** Pantry Essentials list displayed Dart map `toString()` output.

**Cause:** JSON items are structured objects; UI called `.toString()` on each.

**Fix:** Render `name`, `priority`, and `notes` explicitly in `guide_screen.dart`.

### Recipe photos need runtime camera permission (2026-07)

**Symptom:** Take photo appears to do nothing.

**Cause:** `CAMERA` in manifest but not requested at runtime; pick returns null silently.

**Fix:** `permission_handler` + `ensureCameraPermission()` before camera pick; SnackBar on failure (build 13+).

---

## Resolved / watch list

| Item | Status | Notes |
|------|--------|--------|
| Cache-busting on OTA downloads | Fixed (build 12+) | `cache_bust_url.dart`, export script |
| Bundled seed `content_version` on install | Fixed (build 12+) | `seed_importer.dart` |
| Android back navigation | Fixed (build 13+) | `cookbook_navigation.dart`, no `go` after save |
| Pantry guide formatting | Fixed (build 13+) | `guide_screen.dart` |
| Recipe photo camera permission | Fixed (build 13+) | `permission_handler`, `recipe_image_store.dart` |
| Share recipe with image | Fixed (build 13+) | `Share.shareXFiles` |
| GF Carrot Cake | Added (build 13+) | `desserts.json`, future stubs |
| `publish-mobile.ps1` default `MobileRoot` | Open | Still wrong default; pass `-MobileRoot` |
| Auto-detect sibling mobile repo in scripts | Not done | Nice-to-have |
| `build-recipes.ps1` recursive export loop | Open | Script may re-invoke export repeatedly; use `export-mobile-seed.ps1 -SkipBuild` directly |

---

## Related docs

- Mobile README troubleshooting: `HuntressCookbook-Mobile/README.md`
- Incremental updates plan: `HuntressCookbook-Mobile/docs/plans/mobile-ux-and-incremental-updates.md`
- Web cookbook downloads: `downloads/README.md`
