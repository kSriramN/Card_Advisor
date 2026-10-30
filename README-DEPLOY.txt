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


EXPENSE TRACKER / CREDIT UTILISATION (v5)
- Existing saved cards remain in the same localStorage key (cardwise-user-data-v2).
- Each card has an editable credit limit.
- Record purchases, payments made to the card, and refunds/reversals.
- Outstanding balance is calculated as purchases minus payments minus refunds (floored at zero).
- Dashboard shows period-based purchases by card, payments, refunds, total outstanding, total limits, and overall utilisation.
- Per-card view shows outstanding, available credit, and utilisation.
- Transaction additions and deletions trigger the mandatory backup gate.
- Backup JSON now includes both cards and transactions. Older backups containing only cards still restore; their transaction history starts empty.
- Data remains local to each browser/device. No automatic bank-feed connection or cloud sync is included.


BILL PAYMENT TRACKER (v6)
- Record each generated statement manually with card, bill month, statement date, due date and amount due.
- Bills start as PAYMENT PENDING and can be marked PAID with a payment date, or changed back to unpaid.
- Dashboard shows counts of recorded, paid and pending bills plus pending amount.
- Bill creation, status changes and deletion trigger the mandatory backup gate.
- Bill records are included in JSON backups. Existing v5 backups without bills remain restorable.
- CardWise does not automatically fetch statements or confirm payments with banks; the user records bill amounts and marks payment after paying.


CARDWISE V7 — MINIMAL LIGHT UI
- Redesigned as a focused app with Home, Cards, Activity, Bills and Settings screens.
- Mobile bottom navigation; desktop navigation adapts to a top bar.
- Existing functionality and element IDs retained.
- Existing localStorage key cardwise-user-data-v2 is unchanged.
- Backup format and restore compatibility are unchanged.
- Service worker cache version: cardwise-manager-v7.

Deploy by replacing the existing GitHub Pages files with these files.
After deployment, refresh the app. If an older version remains, close and reopen it
or clear the site's cached data. Existing local data remains in the same browser.


CARDWISE V8 — OPTIONAL BACKUP REMINDERS
- CardWise no longer blocks after card, transaction or bill changes.
- Changes continue to save automatically in this browser/device.
- Optional backup reminders are enabled by default and appear after 10 changes.
- Reminder preference is available in Settings and can be switched off.
- Download backup remains available from the header and Settings.
- A successful backup resets the change counter.
- Restore remains available in Settings; empty-data recovery screen remains intact.
- Existing localStorage key cardwise-user-data-v2 is unchanged.
- Service worker cache version: cardwise-manager-v8.


CARDWISE V9 — RECOMMENDATION BILL GENERATION DAY
- Home screen smart card recommendations now show the configured statement/bill generation day.
- Payment due day is shown alongside it when configured.
- Card offers remain visible below the dates.
- Uses the existing card.statement and card.due fields; no data migration required.
- Existing localStorage key and backup/restore behaviour are unchanged.
- Service worker cache version: cardwise-manager-v9.
