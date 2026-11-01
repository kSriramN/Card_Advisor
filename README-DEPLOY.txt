CARDWISE MANAGER PWA — v18 BUILD

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

Optional backup reminders:
- CardWise saves changes automatically in this browser on this device. There is no mandatory backup gate after card, transaction or bill changes.
- Backup reminders are enabled by default and appear after 10 changes. They can be disabled in Settings.
- Download Backup remains available in the header and Settings. A successful backup resets the change counter.
- Restore remains available in Settings. Older backups containing only cards are supported.

Important limitations:
- The browser cannot prove that a downloaded file was permanently saved or copied elsewhere. The OK step is a user acknowledgement after the download is initiated.
- Card data remains in browser storage on that device. There is no cloud sync. Clearing browser/site data can erase local data.
- Keep the JSON backup somewhere safe and make another copy when changing phones.
- Never enter card PINs, CVVs, passwords, or full card numbers. CardWise does not request or store them.
- Existing card strategy and sample cards are preserved. Recommendation logic uses the configured date ranges and UPI / Non-UPI flags; it does not calculate merchant-specific reward rankings.

For an update, replace the four files and keep the same browser/site data. Do not clear website data. Cache version has been incremented to refresh the app shell.

- If no backup is available, the zero-card screen offers an explicit 'Start with no cards' option so the user can add cards manually.


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


CARDWISE V10 — FIX SMART SUGGESTION BILLING DETAILS
- Corrected the Home recommendation card renderer to display Bill generation day
  from the saved Statement date field and Payment due day from the saved Due field.
- Existing offers remain visible below the billing details.
- No data migration; existing localStorage data and backup/restore remain unchanged.
- Service worker cache version: cardwise-manager-v10.


Version 11 update: Card editor now has only Statement generation day and Payment due day. The legacy billing-cycle value is retained internally when editing existing cards for compatibility, but is no longer shown as a separate field. Smart Suggestions uses the Statement generation day. Backup remains optional: changes save locally, the reminder appears after 10 changes by default, and reminders can be disabled in Settings. No mandatory backup gate is used.


CardWise v13 update: Home recommendations now show the number of days until each card's next statement generation date and sort cards from the longest time remaining to the shortest. Cards without a statement generation day are shown last. The calculation follows the next calendar occurrence of each saved statement day and handles month/year boundaries. Backup remains optional: local changes save automatically, with an optional reminder after 10 changes; there is no mandatory backup gate.


CARDWISE v18 ADDITIONS
- Rewards are managed inside each saved card. Add points in separate batches, optionally with an individual expiry date. Record redemptions against a selected batch or adjust the tracked balance.
- The Home page lists positive reward balances expiring within 30 days; urgency styling distinguishes 15-day and 7-day windows.
- Issuer rewards/check and redemption guide links are provided where known. Cashback-style products should be tracked according to their own reward model; no bank login or API integration is used.
- Bulk Add Cards accepts structured text copied from an OCR/AI tool. The parser runs locally. The editable review lets users change card name, network and statement day, remove rows, and validate duplicates/dates before saving.
- Backup/restore includes reward batches and reward history. The existing localStorage key cardwise-user-data-v2 is unchanged.


CARDWISE v19 · DECLUTTER
- Version label shown under the brand and in Settings > About, with a Check for update button.
- Removed filler text; compact Home with date picker and UPI/Non-UPI tabs; stacked wallet on Cards; charts on Activity; full-page sheets (+ button) for adding transactions, bills and cards; more collapsibles.
- Service worker is now network-first so updates arrive reliably. Cache: cardwise-manager-v19. Data key and backup format unchanged.


CARDWISE v20 · DASHBOARD
- Gradient header with time-of-day greeting; name asked once on first open (editable in Settings).
- Home: collapsed spend-vs-target summary (tap to expand: spent, target, left, most used cards), then one bordered box with date picker and recommendations.
- Monthly target in Settings and optional per-card target in the card editor; both included in backups.
- Amount fields show thousands separators (Indian grouping) while typing.
- Back button on form pages is now a solid labelled button.


CARDWISE v21 · FRESH
- Settings > About: Check for update, and Clear app cache (asks about backup first; keeps all saved data).
- Warns after more than 3 loads in a minute; offers to open Settings.
- Shows an "Update now" bar when a newer version is on the server.
- Service worker bypasses the browser HTTP cache and the page reloads once when a new service worker takes over.
- fresh-cache.js is the reusable version for other PWAs (see header comments).


CARDWISE v22 · THEMES
- Header: wallet icon, CardWise and version on every tab; greeting shown on Home only.
- Settings > Theme: Teal, Ocean, Indigo, Plum, Sunset, Graphite. Applies instantly, saved on the device and in backups.
- icon.svg redrawn as a wallet (iPhone refreshes a home-screen icon only when the app is re-added).


CARDWISE v23 · WELCOME
- Hard-coded personal cards removed: a fresh install starts with one Sample Card. Settings > Reset to sample data (asks for a backup first).
- Share CardWise / Copy link in Settings and on the last intro slide.
- Onboarding: three swipeable slides on first open; Settings > View intro replays it.
- Home: "Recommended cards" heading with a count for the chosen date.
- Brand: CARD in white, WISE in a theme-matched accent colour.
