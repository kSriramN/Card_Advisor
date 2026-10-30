CARDWISE MANAGER PWA — FINAL BUILD

Files:
- index.html
- manifest.webmanifest
- service-worker.js
- icon.svg

Deploy:
1. Extract this ZIP.
2. Upload all four files to the root of your existing GitHub Pages repository (replace the older versions).
3. Commit/push and wait for GitHub Pages deployment to finish.
4. Open the published HTTPS GitHub Pages URL in Safari on iPhone or Chrome on Android.
5. On iPhone, use Safari Share -> Add to Home Screen.

Mandatory backup protection:
- After adding, editing, or deleting a card, CardWise saves locally and blocks the app behind a backup screen.
- Tap Download backup, check the downloaded JSON in Files / Downloads, then acknowledge with OK.
- If the app detects zero cards or unreadable saved data, it blocks the dashboard and asks you to restore a CardWise JSON backup from the device.
- After restoring, it asks you to download a fresh backup before continuing.
- The gate remains pending if the page is closed before acknowledgement.

Important limitations:
- The browser cannot prove that a downloaded file was permanently saved or copied elsewhere. The OK step is a user acknowledgement after the download is initiated.
- Card data remains in browser storage on that device. There is no cloud sync. Clearing browser/site data can erase local data.
- Keep the JSON backup somewhere safe and make another copy when changing phones.
- Never enter card PINs, CVVs, passwords, or full card numbers. CardWise does not request or store them.
- Existing card strategy and sample cards are preserved. Recommendation logic uses the configured date ranges and UPI / Non-UPI flags; it does not calculate merchant-specific reward rankings.

For an update, replace the four files and keep the same browser/site data. Do not clear website data. Cache version has been incremented to refresh the app shell.

- If no backup is available, the zero-card screen also offers an explicit 'Start with no cards' option so the user can add cards manually; the next card change triggers the mandatory backup gate.
