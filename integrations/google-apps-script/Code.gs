const SHEET_ID = "PASTE_YOUR_GOOGLE_SHEET_ID_HERE";
const ALERT_EMAIL = "sudarsonprabhu.1308@gmail.com";
const TURNSTILE_SECRET_KEY = "PASTE_YOUR_TURNSTILE_SECRET_KEY_HERE";
const ENQUIRY_TURNSTILE_ACTION = "portfolio_enquiry";
const PAGE_VIEW_TURNSTILE_ACTION = "portfolio_pageview";
const TURNSTILE_EXPECTED_HOSTNAME = "";
const LEADS_SHEET_NAME = "Leads";
const PAGE_VIEWS_SHEET_NAME = "PageViews";
const PAGE_VIEW_CACHE_TTL_SECONDS = 1800;
const LEAD_DUPLICATE_CACHE_TTL_SECONDS = 900;

function doGet(e) {
  try {
    const action = (e && e.parameter && e.parameter.action) || "stats";

    if (action === "stats") {
      return jsonResponse_({
        ok: true,
        uniqueVisitors: getUniqueVisitorCount_(),
        totalViews: getTotalVisitCount_(),
      });
    }

    return jsonResponse_({
      ok: false,
      message: "Unsupported action.",
    });
  } catch (error) {
    return jsonResponse_({
      ok: false,
      message: error && error.message ? error.message : "Unexpected backend error.",
    });
  }
}

function doPost(e) {
  const payload = (e && e.parameter) || {};
  const type = cleanValue_(payload.type);

  try {
    if (payload.website) {
      return jsonResponse_({ ok: true, skipped: true });
    }

    if (type === "pageview") {
      const pageViewValidation = validatePageViewPayload_(payload);

      if (!pageViewValidation.ok) {
        return jsonResponse_(pageViewValidation);
      }

      const turnstileValidation = validateTurnstile_(
        cleanValue_(payload.turnstileToken),
        cleanValue_(payload.sourceUrl),
        PAGE_VIEW_TURNSTILE_ACTION
      );

      if (!turnstileValidation.ok) {
        return jsonResponse_(turnstileValidation);
      }

      recordPageView_(payload);

      return jsonResponse_({
        ok: true,
        uniqueVisitors: getUniqueVisitorCount_(),
        totalViews: getTotalVisitCount_(),
      });
    }

    if (type === "lead") {
      const leadValidation = validateLeadPayload_(payload);

      if (!leadValidation.ok) {
        return jsonResponse_(leadValidation);
      }

      const turnstileValidation = validateTurnstile_(
        cleanValue_(payload.turnstileToken),
        cleanValue_(payload.sourceUrl),
        ENQUIRY_TURNSTILE_ACTION
      );

      if (!turnstileValidation.ok) {
        return jsonResponse_(turnstileValidation);
      }

      if (isDuplicateLead_(payload)) {
        return jsonResponse_({
          ok: true,
          message: "Duplicate enquiry ignored.",
        });
      }

      const lead = recordLead_(payload);
      sendLeadAlert_(lead);
      cacheLead_(payload);

      return jsonResponse_({
        ok: true,
        message: "Lead captured successfully.",
      });
    }

    return jsonResponse_({
      ok: false,
      message: "Unsupported payload type.",
    });
  } catch (error) {
    return jsonResponse_({
      ok: false,
      message: error && error.message ? error.message : "Unexpected backend error.",
    });
  }
}

function recordPageView_(payload) {
  const visitorId = cleanValue_(payload.visitorId);

  if (!shouldTrackPageView_(visitorId)) {
    return;
  }

  const sheet = getOrCreateSheet_(PAGE_VIEWS_SHEET_NAME, [
    "Visitor ID",
    "First Seen",
    "Last Seen",
    "Visit Count",
    "Last Page",
    "Path",
    "Referrer",
    "Title",
    "Language",
    "Screen Width",
    "User Agent",
  ]);
  const now = new Date();
  const row = findVisitorRow_(sheet, visitorId);

  if (!row) {
    sheet.appendRow([
      visitorId,
      now,
      now,
      1,
      cleanValue_(payload.page),
      cleanValue_(payload.path),
      cleanValue_(payload.referrer),
      cleanValue_(payload.title),
      cleanValue_(payload.language),
      cleanValue_(payload.screenWidth),
      cleanValue_(payload.userAgent),
    ]);

    return;
  }

  const visitCount = Number(sheet.getRange(row, 4).getValue() || 0);

  sheet
    .getRange(row, 3, 1, 9)
    .setValues([
      [
        now,
        visitCount + 1,
        cleanValue_(payload.page),
        cleanValue_(payload.path),
        cleanValue_(payload.referrer),
        cleanValue_(payload.title),
        cleanValue_(payload.language),
        cleanValue_(payload.screenWidth),
        cleanValue_(payload.userAgent),
      ],
    ]);
}

function recordLead_(payload) {
  const sheet = getOrCreateSheet_(LEADS_SHEET_NAME, [
    "Timestamp",
    "Full Name",
    "Email",
    "Phone",
    "Company",
    "Interest",
    "Message",
    "Page",
    "Source URL",
    "Visitor ID",
  ]);

  const lead = {
    timestamp: new Date(),
    fullName: cleanValue_(payload.fullName),
    email: cleanValue_(payload.email),
    phone: cleanValue_(payload.phone),
    company: cleanValue_(payload.company),
    interest: cleanValue_(payload.interest),
    message: cleanValue_(payload.message),
    page: cleanValue_(payload.page),
    sourceUrl: cleanValue_(payload.sourceUrl),
    visitorId: cleanValue_(payload.visitorId),
  };

  sheet.appendRow([
    lead.timestamp,
    lead.fullName,
    lead.email,
    lead.phone,
    lead.company,
    lead.interest,
    lead.message,
    lead.page,
    lead.sourceUrl,
    lead.visitorId,
  ]);

  return lead;
}

function sendLeadAlert_(lead) {
  const submitterName = lead.fullName || "Unknown visitor";
  const subject = "New portfolio enquiry from " + submitterName;
  const body = [
    "A new enquiry was submitted on your portfolio site.",
    "",
    "Name: " + (lead.fullName || "-"),
    "Email: " + (lead.email || "-"),
    "Phone: " + (lead.phone || "-"),
    "Company: " + (lead.company || "-"),
    "Interest: " + (lead.interest || "-"),
    "Message:",
    lead.message || "-",
    "",
    "Page: " + (lead.page || "-"),
    "Source URL: " + (lead.sourceUrl || "-"),
    "Visitor ID: " + (lead.visitorId || "-"),
    "Submitted at: " + lead.timestamp,
  ].join("\n");

  const options = {
    name: "Portfolio Enquiry Bot",
  };

  if (isValidEmail_(lead.email)) {
    options.replyTo = lead.email;
  }

  MailApp.sendEmail(ALERT_EMAIL, subject, body, options);
}

function getUniqueVisitorCount_() {
  const sheet = getOrCreateSheet_(PAGE_VIEWS_SHEET_NAME, [
    "Visitor ID",
    "First Seen",
    "Last Seen",
    "Visit Count",
    "Last Page",
    "Path",
    "Referrer",
    "Title",
    "Language",
    "Screen Width",
    "User Agent",
  ]);
  const lastRow = sheet.getLastRow();

  if (lastRow <= 1) {
    return 0;
  }

  const values = sheet.getRange(2, 1, lastRow - 1, 1).getValues().flat();

  return values.filter((value) => isValidVisitorId_(cleanValue_(value))).length;
}

function getTotalVisitCount_() {
  const sheet = getOrCreateSheet_(PAGE_VIEWS_SHEET_NAME, [
    "Visitor ID",
    "First Seen",
    "Last Seen",
    "Visit Count",
    "Last Page",
    "Path",
    "Referrer",
    "Title",
    "Language",
    "Screen Width",
    "User Agent",
  ]);
  const lastRow = sheet.getLastRow();

  if (lastRow <= 1) {
    return 0;
  }

  const rows = sheet.getRange(2, 1, lastRow - 1, 4).getValues();

  return rows.reduce((sum, row) => {
    return isValidVisitorId_(cleanValue_(row[0])) ? sum + Number(row[3] || 0) : sum;
  }, 0);
}

function validatePageViewPayload_(payload) {
  const visitorId = cleanValue_(payload.visitorId);
  const allowedPages = ["home", "about", "work", "experience", "credentials"];
  const sourceUrl = cleanValue_(payload.sourceUrl);
  const screenWidth = cleanValue_(payload.screenWidth);

  if (!isValidVisitorId_(visitorId)) {
    return {
      ok: false,
      message: "Invalid visitor identifier.",
    };
  }

  if (allowedPages.indexOf(cleanValue_(payload.page)) === -1) {
    return {
      ok: false,
      message: "Invalid page identifier.",
    };
  }

  if (!sourceUrl) {
    return {
      ok: false,
      message: "Missing source URL.",
    };
  }

  if (!/^https?:\/\//i.test(sourceUrl)) {
    return {
      ok: false,
      message: "Invalid source URL.",
    };
  }

  if (screenWidth && !/^\d{2,5}$/.test(screenWidth)) {
    return {
      ok: false,
      message: "Invalid screen width.",
    };
  }

  if (
    cleanValue_(payload.path).length > 500 ||
    cleanValue_(payload.referrer).length > 1000 ||
    cleanValue_(payload.title).length > 300 ||
    cleanValue_(payload.language).length > 32 ||
    cleanValue_(payload.userAgent).length > 1000
  ) {
    return {
      ok: false,
      message: "Page view payload exceeds supported size.",
    };
  }

  return { ok: true };
}

function validateLeadPayload_(payload) {
  const fullName = cleanValue_(payload.fullName);
  const email = cleanValue_(payload.email);
  const interest = cleanValue_(payload.interest);
  const message = cleanValue_(payload.message);
  const phone = cleanValue_(payload.phone);
  const company = cleanValue_(payload.company);
  const sourceUrl = cleanValue_(payload.sourceUrl);

  if (!fullName || !email || !interest || !message) {
    return {
      ok: false,
      message: "Missing required lead fields.",
    };
  }

  if (!isValidEmail_(email)) {
    return {
      ok: false,
      message: "Invalid email address.",
    };
  }

  if (!isValidVisitorId_(cleanValue_(payload.visitorId))) {
    return {
      ok: false,
      message: "Invalid visitor identifier.",
    };
  }

  if (sourceUrl && !/^https?:\/\//i.test(sourceUrl)) {
    return {
      ok: false,
      message: "Invalid source URL.",
    };
  }

  if (
    fullName.length > 150 ||
    phone.length > 50 ||
    company.length > 150 ||
    interest.length > 250 ||
    message.length > 5000 ||
    sourceUrl.length > 1000
  ) {
    return {
      ok: false,
      message: "Lead payload exceeds supported size.",
    };
  }

  return { ok: true };
}

function validateTurnstile_(token, sourceUrl, expectedAction) {
  if (!isConfiguredValue_(TURNSTILE_SECRET_KEY)) {
    return {
      ok: false,
      message: "Turnstile secret key is not configured in the Apps Script backend.",
    };
  }

  if (!token) {
    return {
      ok: false,
      message: "Missing verification token.",
    };
  }

  const response = UrlFetchApp.fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "post",
      payload: {
        secret: TURNSTILE_SECRET_KEY,
        response: token,
      },
      muteHttpExceptions: true,
    }
  );
  const body = JSON.parse(response.getContentText() || "{}");

  if (!body.success) {
    return {
      ok: false,
      message: "Verification challenge failed.",
    };
  }

  if (expectedAction && body.action !== expectedAction) {
    return {
      ok: false,
      message: "Verification action mismatch.",
    };
  }

  if (TURNSTILE_EXPECTED_HOSTNAME && body.hostname !== TURNSTILE_EXPECTED_HOSTNAME) {
    return {
      ok: false,
      message: "Verification hostname mismatch.",
    };
  }

  const sourceHostname = extractHostname_(sourceUrl);

  if (sourceHostname && body.hostname && sourceHostname !== body.hostname) {
    return {
      ok: false,
      message: "Source URL hostname did not match the verified challenge hostname.",
    };
  }

  return { ok: true };
}

function getOrCreateSheet_(sheetName, headers) {
  const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
  let sheet = spreadsheet.getSheetByName(sheetName);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(sheetName);
  }

  ensureHeaderRow_(sheet, headers);

  return sheet;
}

function ensureHeaderRow_(sheet, headers) {
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers);
    sheet.setFrozenRows(1);
    return;
  }

  const headerValues = sheet.getRange(1, 1, 1, headers.length).getValues()[0];

  if (headerValues.join("|") !== headers.join("|")) {
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    sheet.setFrozenRows(1);
  }
}

function shouldTrackPageView_(visitorId) {
  const cache = CacheService.getScriptCache();
  const cacheKey = "pageview:" + visitorId;

  if (cache.get(cacheKey)) {
    return false;
  }

  cache.put(cacheKey, "1", PAGE_VIEW_CACHE_TTL_SECONDS);
  return true;
}

function findVisitorRow_(sheet, visitorId) {
  const found = sheet.createTextFinder(visitorId).matchEntireCell(true).findNext();

  return found ? found.getRow() : null;
}

function isDuplicateLead_(payload) {
  const cache = CacheService.getScriptCache();
  return Boolean(cache.get(createLeadCacheKey_(payload)));
}

function cacheLead_(payload) {
  const cache = CacheService.getScriptCache();
  cache.put(createLeadCacheKey_(payload), "1", LEAD_DUPLICATE_CACHE_TTL_SECONDS);
}

function createLeadCacheKey_(payload) {
  const raw = [
    cleanValue_(payload.email).toLowerCase(),
    cleanValue_(payload.interest).toLowerCase(),
    cleanValue_(payload.message).slice(0, 120).toLowerCase(),
  ].join("|");
  const digest = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, raw);
  const hash = Utilities.base64EncodeWebSafe(digest);

  return "lead:" + hash;
}

function extractHostname_(url) {
  if (!url) {
    return "";
  }

  const match = String(url).match(/^https?:\/\/([^\/?#]+)/i);
  return match ? match[1].toLowerCase() : "";
}

function isConfiguredValue_(value) {
  return Boolean(value && String(value).indexOf("PASTE_YOUR") === -1);
}

function isValidVisitorId_(value) {
  return (
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value) ||
    /^visitor-[a-z0-9-]+$/i.test(value)
  );
}

function isValidEmail_(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function cleanValue_(value) {
  return String(value || "").trim();
}

function jsonResponse_(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON
  );
}
