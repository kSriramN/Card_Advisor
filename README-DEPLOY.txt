CARDWISE PWA — DEPLOYMENT

This folder contains a PWA-ready version of CardWise.

IMPORTANT:
- A PWA must be served from HTTPS (or localhost). Opening index.html as a local file will not enable installation/offline service-worker features.
- No card PINs or security codes are included.
- The app's date recommendations and monthly strategy are in index.html.

GITHUB PAGES QUICK SETUP:
1. Create a new GitHub repository, e.g. cardwise.
2. Upload all four files from this folder to the repository root:
   index.html
   manifest.webmanifest
   service-worker.js
   icon.svg
3. In the repository, open Settings > Pages.
4. Under Build and deployment, select Deploy from a branch.
5. Select branch main and folder /(root), then Save.
6. Wait for GitHub Pages to publish the site. Open the HTTPS URL shown there.

IPHONE:
1. Open the published HTTPS URL in Safari.
2. Tap Share.
3. Scroll and choose Add to Home Screen.
4. Enable Open as Web App if shown, then tap Add.

ANDROID:
1. Open the HTTPS URL in Chrome.
2. Use the Install app prompt or menu > Install app / Add to Home screen.

After the first successful visit while online, the service worker caches the app shell for offline use.
