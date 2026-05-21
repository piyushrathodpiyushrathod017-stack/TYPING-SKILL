# TypeSkill — Analytics Setup Guide

## Prerequisites

- A Google Analytics account
- Netlify deployment access
- Your website deployed at a custom domain

---

## Step-by-Step Setup

### 1. Create or Access a Google Analytics Property

Go to [Google Analytics](https://analytics.google.com) and sign in with your Google account. Create a new account or select an existing one.

### 2. Create a GA4 Web Data Stream

1. In the Admin panel, under "Property", click **Data Streams**.
2. Click **Add stream** and select **Web**.
3. Enter your website URL (e.g., `https://typeskill.academy`).
4. Name your stream (e.g., "TypeSkill Web").
5. Click **Create stream**.

### 3. Copy the Measurement ID

After creating the stream, you will see a **Measurement ID** in the format `G-XXXXXXXXXX`. Copy this value.

### 4. Replace the Placeholder

Open `assets/js/analytics-config.js` and replace:

```js
gaMeasurementId: "G-REPLACE_ME"
```

with:

```js
gaMeasurementId: "G-YOUR_REAL_ID"
```

The same placeholder `G-REPLACE_ME` is used in the static GA snippet in every HTML page. You can either:

- Replace it in each HTML file (find and replace `G-REPLACE_ME` with your real ID), OR
- Rely on the static tag if you keep the ID the same across all pages

### 5. Deploy to Netlify

```bash
git add .
git commit -m "Configure GA4 analytics"
git push
```

Netlify will auto-deploy from your connected repository. Alternatively, use the Netlify CLI:

```bash
netlify deploy --prod --dir=.
```

### 6. Verify with GA Realtime

1. Open [Google Analytics Realtime](https://analytics.google.com/analytics/web/#/realtime).
2. Visit your website in another browser tab.
3. Within 30 seconds, you should see at least 1 active user in the Realtime report.

### 7. Submit Sitemap to Search Console

1. Go to [Google Search Console](https://search.google.com/search-console).
2. Add your property (domain or URL prefix).
3. Submit `https://typeskill.academy/sitemap.xml` as your sitemap.

### 8. (Optional) Enable Netlify Web Analytics

1. Go to your site dashboard on [Netlify](https://app.netlify.com).
2. Navigate to **Analytics** > **Web Analytics**.
3. Click **Enable Netlify Web Analytics**.
4. No code changes needed — Netlify injects the script automatically.

### 9. (Optional) Connect GA Data API via Netlify Functions

To show real GA metrics in the admin analytics dashboard:

1. Create a Google Cloud service account with "Analytics Viewer" role.
2. Add the service account email as a viewer in your GA4 property settings.
3. Generate a JSON key for the service account.
4. In Netlify Dashboard, set these environment variables:

   - `GA_PROPERTY_ID` — e.g., `properties/123456789`
   - `GA_CLIENT_EMAIL` — from the service account JSON
   - `GA_PRIVATE_KEY` — from the service account JSON

5. Deploy and test by visiting `/.netlify/functions/ga-summary`.

---

## Testing Checklist

- [ ] All pages load without console errors
- [ ] GA tag appears once per page (check via browser DevTools > Network)
- [ ] No duplicate GA scripts
- [ ] `trackEvent()` does not crash if GA is unavailable
- [ ] Custom events fire when gtag is available
- [ ] Admin login page works
- [ ] Admin analytics page loads
- [ ] Logout works
- [ ] No private keys in frontend code
- [ ] Privacy policy and cookie policy are updated
- [ ] Netlify deploy succeeds
- [ ] Website speed remains fast

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| GA shows zero active users | Check that G-REPLACE_ME was replaced with real ID |
| Duplicate GA tags | Only one gtag.js script should load per page |
| Console error: gtag is not defined | Ensure analytics scripts load before trackEvent calls |
| Admin login doesn't work | Default password is `CHANGE_ME_ADMIN_PASSWORD` — change it |
| Netlify Function returns 404 | Ensure `netlify/functions/` directory is in your repository |
