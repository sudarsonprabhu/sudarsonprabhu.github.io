const TURNSTILE_SECRET_KEY = 'ENTER_YOUR_TURNSTILE_SECRET_KEY_HERE';
const NOTIFICATION_EMAIL = 'sudarsonprabhu.1308@gmail.com';

function doPost(e) {
  try {
    const data = parseFormData(e);
    
    // 1. Verify Turnstile Token (if secret is configured)
    if (TURNSTILE_SECRET_KEY && TURNSTILE_SECRET_KEY !== 'ENTER_YOUR_TURNSTILE_SECRET_KEY_HERE') {
      const isValid = verifyTurnstile(data.turnstileToken);
      if (!isValid) {
        return createJsonResponse({ ok: false, message: 'Security verification failed.' });
      }
    }
    
    // 2. Handle by Type
    if (data.type === 'pageview') {
      savePageView(data);
      const stats = getStats();
      return createJsonResponse({ ok: true, message: 'Page view logged', uniqueVisitors: stats.uniqueVisitors, totalViews: stats.totalViews });
    }
    
    if (data.type === 'lead') {
      saveLeadToSheet(data);
      sendEmailNotification(data);
      return createJsonResponse({ ok: true, message: 'Enquiry submitted successfully' });
    }
    
    if (data.action === 'stats') {
      const stats = getStats();
      return createJsonResponse({ ok: true, uniqueVisitors: stats.uniqueVisitors, totalViews: stats.totalViews });
    }
    
    return createJsonResponse({ ok: false, message: 'Invalid payload type' });
    
  } catch (error) {
    return createJsonResponse({ ok: false, message: error.toString() });
  }
}

function doGet(e) {
  if (e.parameter && e.parameter.action === 'stats') {
    const stats = getStats();
    return createJsonResponse({ ok: true, uniqueVisitors: stats.uniqueVisitors, totalViews: stats.totalViews });
  }
  return createJsonResponse({ ok: true, message: 'Backend is running' });
}

function parseFormData(e) {
  if (e.parameter) {
    return e.parameter;
  }
  return {};
}

function verifyTurnstile(token) {
  if (!token) return false;
  
  const payload = {
    secret: TURNSTILE_SECRET_KEY,
    response: token
  };
  
  const options = {
    method: 'post',
    payload: payload
  };
  
  const response = UrlFetchApp.fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', options);
  const result = JSON.parse(response.getContentText());
  
  return result.success;
}

// ─── LEADS SHEET ───────────────────────────────────────────

function getLeadsSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName('Leads');
  
  if (!sheet) {
    sheet = ss.insertSheet('Leads');
    sheet.appendRow([
      'Date Submitted', 
      'Full Name', 
      'Email', 
      'Phone/WhatsApp', 
      'Company', 
      'Interest', 
      'Message', 
      'Source URL',
      'Visitor ID'
    ]);
    sheet.getRange('A1:I1').setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
  
  return sheet;
}

function saveLeadToSheet(data) {
  const sheet = getLeadsSheet();
  
  sheet.appendRow([
    data.submittedAt || new Date().toISOString(),
    data.fullName || '',
    data.email || '',
    data.phone || '',
    data.company || '',
    data.interest || '',
    data.message || '',
    data.sourceUrl || '',
    data.visitorId || ''
  ]);
}

// ─── PAGE VIEWS SHEET ──────────────────────────────────────

function getPageViewsSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName('PageViews');
  
  if (!sheet) {
    sheet = ss.insertSheet('PageViews');
    sheet.appendRow([
      'Timestamp',
      'Visitor ID',
      'Page',
      'Path',
      'Referrer',
      'Title',
      'Language',
      'Screen Width',
      'User Agent',
      'Source URL'
    ]);
    sheet.getRange('A1:J1').setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
  
  return sheet;
}

function savePageView(data) {
  const sheet = getPageViewsSheet();
  
  sheet.appendRow([
    data.viewedAt || new Date().toISOString(),
    data.visitorId || '',
    data.page || '',
    data.path || '',
    data.referrer || '',
    data.title || '',
    data.language || '',
    data.screenWidth || '',
    data.userAgent || '',
    data.sourceUrl || ''
  ]);
}

function getStats() {
  const sheet = getPageViewsSheet();
  const lastRow = sheet.getLastRow();
  
  if (lastRow <= 1) {
    return { totalViews: 0, uniqueVisitors: 0 };
  }
  
  const totalViews = lastRow - 1; // Exclude header row
  
  // Get unique visitor IDs from column B (Visitor ID)
  const visitorIds = sheet.getRange(2, 2, lastRow - 1, 1).getValues();
  const uniqueSet = new Set();
  
  visitorIds.forEach(function(row) {
    const id = (row[0] || '').toString().trim();
    if (id) {
      uniqueSet.add(id);
    }
  });
  
  return { totalViews: totalViews, uniqueVisitors: uniqueSet.size };
}

// ─── EMAIL NOTIFICATION ────────────────────────────────────

function sendEmailNotification(data) {
  const subject = '⭐ New Website Enquiry: ' + (data.interest || 'Consulting') + ' from ' + (data.fullName || 'Someone');
  
  const body = 
    'You have received a new enquiry through your portfolio website.\n\n' +
    'Details:\n' +
    '-------------------------------------------------\n' +
    'Name:     ' + (data.fullName || 'N/A') + '\n' +
    'Email:    ' + (data.email || 'N/A') + '\n' +
    'Phone:    ' + (data.phone || 'N/A') + '\n' +
    'Company:  ' + (data.company || 'N/A') + '\n' +
    'Interest: ' + (data.interest || 'N/A') + '\n' +
    'Source:   ' + (data.sourceUrl || 'N/A') + '\n' +
    'Date:     ' + (data.submittedAt || new Date().toISOString()) + '\n\n' +
    'Message:\n' +
    '-------------------------------------------------\n' +
    (data.message || 'No message provided.') + '\n';
  
  MailApp.sendEmail({
    to: NOTIFICATION_EMAIL,
    subject: subject,
    body: body,
    replyTo: data.email || ''
  });
}

function createJsonResponse(data) {
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
