# Installing The Huntress Cookbook (Android)

Download the APK only from the official site:

**https://marcell0805.github.io/huntress-cookbook/downloads/huntress-cookbook.apk**

You can also use the phone icon in the cookbook toolbar (chapter and recipe pages) on a desktop browser.

## What to expect

Android shows extra prompts for apps installed outside the Google Play Store. That is normal for a personal family cookbook app.

1. Download `huntress-cookbook.apk`
2. Open the file (Chrome, Files, or Google Drive)
3. If asked, allow **Install unknown apps** for that app
4. If **Play Protect** warns the app is uncommon, tap **Install anyway** or **More details** then proceed
5. Open **The Huntress Cookbook** — the fox logo should match the website

## Updating

If you already have an older test build (`com.example.huntresscookbook`), **uninstall it first**, then install this release.

Future updates: the app checks for new versions on launch when online and offers a download link.

## For maintainers

After `flutter build apk --release`, run from `huntress-cookbook/scripts`:

```powershell
.\publish-mobile.ps1 -ReleaseNotes "Describe changes"
```

Then commit and push this `downloads/` folder to GitHub Pages.
