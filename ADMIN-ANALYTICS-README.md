# TypeSkill — Admin Analytics Dashboard

## Overview

The admin analytics dashboard provides a centralized view of your TypeSkill analytics setup status, configuration checklist, and event tracking documentation.

## Access

1. Open `admin-login.html` in your browser.
2. Enter the admin password (default: `CHANGE_ME_ADMIN_PASSWORD`).
3. You will be redirected to `admin-analytics.html`.

## What Is Real Tracking

- **Google Analytics 4 (GA4):** Tracks pageviews, sessions, and custom events (with user consent via Cookiebot).
- **Netlify Web Analytics:** If enabled, provides server-side pageview data and 404 discovery.
- **Custom events:** Tracked via `gtag()` calls in `main.js` (e.g., `lesson_start`, `speed_test_complete`, `game_start`).

## What Is Placeholder

- The **Advanced Metrics** section shows locked/coming-soon cards. These display `--` values because the GA Data API is not yet connected.
- The **Setup Status** card shows "Not configured" if `G-REPLACE_ME` has not been replaced with a real Measurement ID.
- The **Netlify URL** is read from the browser's hostname and may show a Netlify draft URL or localhost during development.

## How to Connect GA Data API

To display real GA metrics directly on the admin page:

1. See `netlify/functions/ga-summary.js` for the implementation.
2. Create a Google Cloud service account with "Analytics Viewer" role.
3. Add the service account to your GA4 property as a viewer.
4. Set `GA_PROPERTY_ID`, `GA_CLIENT_EMAIL`, `GA_PRIVATE_KEY` in Netlify environment variables.
5. The admin page can then fetch from `/.netlify/functions/ga-summary`.

## Security

- **Do not expose private keys in frontend code.**
- The Netlify Function (`ga-summary.js`) reads credentials from environment variables only.
- The admin login is protected by a simple password check in client-side JavaScript (`sessionStorage`).
- **This is NOT high-security.** For production, use Netlify Identity or a password-protected deployment.

## Files Involved

| File | Purpose |
|------|---------|
| `assets/js/analytics-config.js` | Central GA configuration |
| `assets/js/main.js` | `trackEvent()` helper function |
| `admin-login.html` | Simple login page |
| `admin-analytics.html` | Analytics dashboard |
| `netlify/functions/ga-summary.js` | Netlify Function for GA Data API |
| `ANALYTICS-SETUP-GUIDE.md` | Step-by-step setup instructions |
