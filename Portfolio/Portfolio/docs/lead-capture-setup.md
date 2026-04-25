# Lead Capture And View Tracking Setup

This site is hosted as static files, so live enquiry handling and visitor tracking need a small backend endpoint.

The included setup uses Google Apps Script plus Cloudflare Turnstile. Together they can:

- receive enquiry submissions from the site
- append rows into a Google Sheet
- send email alerts to your inbox
- return a deduped visitor count to the homepage
- reject unsigned or unverified spam requests before they are stored

## What gets added

- secure homepage enquiry form submission
- a `Leads` sheet for work enquiries
- a `PageViews` sheet for visitor tracking
- an email alert to `sudarsonprabhu.1308@gmail.com`
- a homepage counter that tracks unique visitors by browser or device instead of raw refreshes

## Files in this repo for the integration

- `config.js`
- `integrations/google-apps-script/Code.gs`

## Important note about Excel

GitHub Pages cannot directly update a local `.xlsx` file in the background. The practical live setup is a Google Sheet as the backend data store, which you can export to Excel whenever needed.

If you later want true Microsoft Excel Online storage instead, the front end can stay almost the same and the backend can be replaced with Power Automate or another service.

## Setup steps

1. Create a new Google Sheet.
2. Copy the spreadsheet ID from the sheet URL.
3. Create a Cloudflare Turnstile widget for your GitHub Pages domain or custom domain.
4. Copy the Turnstile site key and secret key.
5. Open [Google Apps Script](https://script.new/).
6. Replace the default code with the contents of `integrations/google-apps-script/Code.gs`.
7. In `Code.gs`, update these values:
   - `SHEET_ID`
   - `ALERT_EMAIL` if you want a different inbox
   - `TURNSTILE_SECRET_KEY`
   - `TURNSTILE_EXPECTED_HOSTNAME` with your deployed hostname such as `yourname.github.io`
8. Deploy the script as a web app:
   - Execute as: `Me`
   - Who has access: `Anyone`
9. Copy the deployed web app URL.
10. Open `config.js` in this project and set:

```js
window.PORTFOLIO_CONFIG = {
  backendUrl: "YOUR_DEPLOYED_WEB_APP_URL_HERE",
  turnstileSiteKey: "YOUR_TURNSTILE_SITE_KEY_HERE",
};
```

11. Push the updated site to GitHub Pages.

## What the backend stores

### `Leads` sheet columns

- Timestamp
- Full Name
- Email
- Phone
- Company
- Interest
- Message
- Page
- Source URL
- Visitor ID

### `PageViews` sheet columns

- Visitor ID
- First Seen
- Last Seen
- Visit Count
- Last Page
- Path
- Referrer
- Title
- Language
- Screen Width
- User Agent

## How the protection works

- Enquiry submissions require a valid Turnstile token before a row is written or an email is sent.
- Pageview tracking also requires a valid Turnstile token, which prevents easy direct POST spam against the public Apps Script URL.
- Visitor counting is deduped by a browser-level visitor ID, so refreshes and multi-page navigation do not automatically count as new people.
- Pageview writes are rate-limited in Apps Script to reduce noisy repeats from the same browser.

## What visitors experience

- The enquiry form shows a visible verification widget before submit.
- The pageview tracker uses background verification.
- If Cloudflare decides additional verification is needed for a suspicious visit, a small challenge can appear near the bottom-right of the page.

## Upgrading from the older version

If you already used the earlier raw page-view tracker, clear the old `PageViews` tab or create a fresh sheet before switching to this version. The schema changed from one row per page load to one row per visitor.

## Testing checklist

- Load the homepage in a fresh browser session and confirm the visitor count increases by one, not on every refresh.
- Open a second page on the site and confirm it does not create a new visitor.
- Submit a test enquiry with a valid email address.
- Confirm the row appears in the `Leads` sheet.
- Confirm the email alert arrives in your inbox.
- Try submitting the form without completing verification and confirm the submission is blocked.

## Reference docs

- GitHub Pages: [GitHub Pages documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages)
- Apps Script web apps: [Web apps guide](https://developers.google.com/apps-script/guides/web)
- Spreadsheet service: [SpreadsheetApp reference](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app)
- Mail service: [MailApp reference](https://developers.google.com/apps-script/reference/mail/mail-app)
