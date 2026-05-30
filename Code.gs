/**
 * ====================================================================
 *  GOOGLE APPS SCRIPT - CONTACT FORM BACKEND
 * ====================================================================
 * 
 * IMPORTANT NOTES:
 * - Every time Code.gs is edited -> you must re-deploy (new version)
 * - Free Gmail limit: 100 emails/day
 * - No API key, no password, no third party — only Google account needed
 * - Works on any static site: GitHub Pages, Netlify, Vercel, raw HTML file
 */

const RECEIVER_EMAIL = "kushwaha.prashant.dev@gmail.com";

function doPost(e) {
  try {
    // Parse the JSON body sent from pure JS fetch
    const data = JSON.parse(e.postData.contents);
    const name = data.name;
    const email = data.email;
    const subject = data.subject || "New Contact Form Submission";
    const message = data.message;

    if (!name || !email || !message) {
      return ContentService.createTextOutput(JSON.stringify({
        success: false,
        error: "Missing required fields"
      })).setMimeType(ContentService.MimeType.JSON);
    }

    /* =========================================================
       1. EMAIL TO YOU (The Portfolio Owner)
       ========================================================= */
    const adminHtmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
        <h2 style="color: #333; border-bottom: 2px solid #0066cc; padding-bottom: 10px;">New Message via Portfolio</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Subject:</strong> ${subject}</p>
        <h3 style="margin-top: 20px; color: #555;">Message:</h3>
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; color: #333; white-space: pre-wrap;">${message}</div>
        <br/>
        <p style="font-size: 12px; color: #999;">This email was sent automatically from your Google Apps Script backend.</p>
      </div>
    `;

    MailApp.sendEmail({
      to: RECEIVER_EMAIL,
      subject: `Portfolio Contact: ${subject} from ${name}`,
      htmlBody: adminHtmlBody,
      replyTo: email
    });

    /* =========================================================
       2. AUTO-REPLY TO THE SENDER (Modern Thank You Template)
       ========================================================= */
    const senderHtmlBody = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 12px; border: 1px solid #eaeaea; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
        <div style="background-color: #000000; padding: 40px 20px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600; letter-spacing: -0.5px;">Thank You!</h1>
        </div>
        <div style="padding: 40px 32px;">
          <p style="margin: 0 0 16px; font-size: 16px; color: #333333; line-height: 1.5;">Hi ${name},</p>
          <p style="margin: 0 0 24px; font-size: 16px; color: #555555; line-height: 1.6;">
            Thank you for reaching out! I've successfully received your message and will read it as soon as possible. 
            I typically try to respond to all inquiries within 24 to 48 hours.
          </p>
          <div style="background-color: #f9fafb; border-left: 4px solid #000000; padding: 16px 20px; margin-bottom: 24px; border-radius: 0 8px 8px 0;">
            <p style="margin: 0; font-size: 14px; color: #6b7280; font-style: italic;">
              " ${message} "
            </p>
          </div>
          <p style="margin: 0 0 32px; font-size: 16px; color: #555555; line-height: 1.6;">
            Looking forward to connecting with you soon!
          </p>
          <p style="margin: 0; font-size: 16px; color: #333333; font-weight: 600;">
            Best regards,<br>
            Prashant Kushwaha
          </p>
        </div>
        <div style="background-color: #fafafa; padding: 24px; text-align: center; border-top: 1px solid #eaeaea;">
          <p style="margin: 0; font-size: 12px; color: #999999;">
            This is an automated response to confirm we received your message.
          </p>
        </div>
      </div>
    `;

    MailApp.sendEmail({
      to: email, // Sending to the person who filled out the form
      subject: `Thank you for reaching out!`,
      htmlBody: senderHtmlBody,
      name: "Prashant Kushwaha" // The name they will see the email is from
    });

    // Return success JSON
    return ContentService.createTextOutput(JSON.stringify({
      success: true
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Return error JSON
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
