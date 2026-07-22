# Installing The Huntress Cookbook (Android)

Preferred download (The Fox's Den):

**https://marcell0805.github.io/the-foxs-den-doc/downloads/huntresscookbook-mobile.apk**

The cookbook site still publishes a **bridge** `mobile-version.json` so older app builds that check this folder get steered to the Fox's Den APK. You can also use the phone icon in the cookbook toolbar on a desktop browser (points at Fox's Den after settings update).

## What to expect

Android shows extra prompts for apps installed outside the Google Play Store. That is normal for a personal family cookbook app.

1. Download `huntresscookbook-mobile.apk` from The Fox's Den
2. Open the file (Chrome, Files, or Google Drive)
3. If asked, allow **Install unknown apps** for that app
4. If **Play Protect** warns the app is uncommon, tap **Install anyway** or **More details** then proceed
5. Open **The Huntress Cookbook** — the fox logo should match the website

## Updating

If you already have an older test build (`com.example.huntresscookbook`), **uninstall it first**, then install this release — or accept the in-app update prompt.

- **New builds** check Fox's Den `…/downloads/huntresscookbook-mobile/mobile-version.json`
- **Older builds** still hit this folder's `mobile-version.json`, which now advertises the Fox's Den APK (bridge)

## For maintainers

Preferred APK publish from The Fox's Den portal:

```powershell
cd path\to\The_Fox_s_Den Doc\portal\scripts
.\publish-app-mobile.ps1 -AppId huntresscookbook-mobile -ReleaseNotes "Describe changes"
.\build-portal.ps1
```

Content export + bridge JSON from `huntress-cookbook/scripts`:

```powershell
.\export-mobile-seed.ps1
.\publish-mobile.ps1 -ReleaseNotes "Describe changes"
```

Commit and push cookbook `downloads/` and Fox's Den `portal/downloads/` for GitHub Pages.
