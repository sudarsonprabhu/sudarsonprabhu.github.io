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
      // Ignore pageviews for now or append to a 'Stats' sheet if expanded
      return createJsonResponse({ ok: true, message: 'Page view logged' });
    }
    
    if (data.type === 'lead') {
      saveLeadToSheet(data);
      sendEmailNotification(data);
      return createJsonResponse({ ok: true, message: 'Enquiry submitted successfully' });
    }
    
    // To handle arbitrary options or ping requests from the stats endpoint logic
    if (data.action === 'stats') {
       return createJsonResponse({ ok: true, views: '--' });
    }
    
    return createJsonResponse({ ok: false, message: 'Invalid payload type' });
    
  } catch (error) {
    return createJsonResponse({ ok: false, message: error.toString() });
  }
}

// Note: Google Apps Script Web Apps automatically handle OPTIONS preflight.
function doGet(e) {
  if (e.parameter.action === 'stats') {
    return createJsonResponse({ ok: true, views: '--' });
  }
  return createJsonResponse({ ok: true, message: 'Backend is running' });
}

function parseFormData(e) {
  if (e.parameter) {
    return e.parameter; // Handles URLSearchParams sent by fetch
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

function saveLeadToSheet(data) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  // Create headers if they don't exist (when the sheet is blank)
  if (sheet.getLastRow() === 0) {
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
  
  // Append the data
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

function sendEmailNotification(data) {
  const subject = `⭐ New Website Enquiry: ${data.interest || 'Consulting'} from ${data.fullName || 'Someone'}`;
  
  const body = `
You have received a new enquiry through your portfolio website.

Details:
-------------------------------------------------
Name:     ${data.fullName || 'N/A'}
Email:    ${data.email || 'N/A'}
Phone:    ${data.phone || 'N/A'}
Company:  ${data.company || 'N/A'}
Interest: ${data.interest || 'N/A'}
Source:   ${data.sourceUrl || 'N/A'}
Date:     ${data.submittedAt || new Date().toISOString()}

Message:
-------------------------------------------------
${data.message || 'No message provided.'}
  `;
  
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
