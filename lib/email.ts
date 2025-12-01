import formData from 'form-data';
import Mailgun from 'mailgun.js';

/**
 * Email utility using Mailgun
 * 
 * Setup Instructions:
 * 1. Go to mailgun.com and create an account
 * 2. Add and verify your domain
 * 3. Get your API key from Settings > API Keys
 * 4. Get your domain from Sending > Domains
 * 5. Add to .env.local:
 *    MAILGUN_API_KEY=your_api_key_here
 *    MAILGUN_DOMAIN=yourdomain.com
 *    EMAIL_FROM=noreply@yourdomain.com
 *    EMAIL_TO=hello@bootstraphub.com
 */

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: 'api',
  key: process.env.MAILGUN_API_KEY || '',
});

interface SendEmailParams {
  to: string | string[];
  subject: string;
  html: string;
  replyTo?: string;
}

export async function sendEmail({
  to,
  subject,
  html,
  replyTo,
}: SendEmailParams): Promise<{ success: boolean; error?: string }> {
  try {
    const messageData = {
      from: process.env.EMAIL_FROM || 'BootstrapHub <noreply@bootstraphub.com>',
      to: Array.isArray(to) ? to : [to],
      subject,
      html,
      ...(replyTo && { 'h:Reply-To': replyTo }),
    };

    await mg.messages.create(process.env.MAILGUN_DOMAIN || '', messageData);

    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

// Template for contact form email
export async function sendContactEmail(data: {
  name: string;
  email: string;
  phone?: string;
  message: string;
}) {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          h2 { color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px; }
          .info-block { background: #f9fafb; padding: 15px; border-radius: 5px; margin: 10px 0; }
          strong { color: #1f2937; }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>New Contact Form Submission</h2>
          <div class="info-block">
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
          </div>
          <div class="info-block">
            <p><strong>Message:</strong></p>
            <p>${data.message.replace(/\n/g, '<br>')}</p>
          </div>
        </div>
      </body>
    </html>
  `;

  return sendEmail({
    to: process.env.EMAIL_TO || 'hello@bootstraphub.com',
    subject: `New Contact from ${data.name}`,
    html,
    replyTo: data.email,
  });
}

// Template for quote request email
export async function sendQuoteEmail(data: any, estimate: any) {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          h2 { color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px; }
          h3 { color: #1f2937; margin-top: 20px; }
          .info-block { background: #f9fafb; padding: 15px; border-radius: 5px; margin: 10px 0; }
          .estimate-block { background: #dbeafe; padding: 20px; border-radius: 5px; margin: 20px 0; text-align: center; }
          .price { font-size: 24px; font-weight: bold; color: #2563eb; }
          strong { color: #1f2937; }
          .badge { display: inline-block; padding: 4px 12px; border-radius: 12px; font-size: 12px; font-weight: bold; }
          .complexity-low { background: #d1fae5; color: #065f46; }
          .complexity-medium { background: #dbeafe; color: #1e40af; }
          .complexity-high { background: #fed7aa; color: #9a3412; }
          .complexity-enterprise { background: #e9d5ff; color: #6b21a8; }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>New Quote Request</h2>
          
          <h3>Personal Information</h3>
          <div class="info-block">
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone}</p>
            <p><strong>WhatsApp:</strong> ${data.whatsapp || 'Not provided'}</p>
          </div>
          
          <h3>Business Information</h3>
          <div class="info-block">
            <p><strong>Business Name:</strong> ${data.businessName}</p>
            <p><strong>Business Type:</strong> ${data.businessType}</p>
            <p><strong>Products/Services:</strong> ${data.productsServices}</p>
            <p><strong>Domain:</strong> ${data.hasDomain ? data.domainName : 'Need new domain'}</p>
          </div>
          
          <h3>Project Details</h3>
          <div class="info-block">
            <p><strong>Project Type:</strong> ${data.projectType.join(', ')}</p>
            <p><strong>Pages Needed:</strong> ${data.pagesNeeded}</p>
            <p><strong>Features:</strong> ${data.features.join(', ')}</p>
            <p><strong>Integrations:</strong> ${data.integrations || 'None specified'}</p>
            <p><strong>Budget Range:</strong> ${data.budgetRange}</p>
            <p><strong>Timeline:</strong> ${data.timeline}</p>
            <p><strong>Inspiration Links:</strong> ${data.inspirationLinks || 'Not provided'}</p>
          </div>
          
          <h3>Estimated Quote</h3>
          <div class="estimate-block">
            <div class="price">$${estimate.min.toLocaleString()} - $${estimate.max.toLocaleString()}</div>
            <p style="margin-top: 10px;">
              <span class="badge complexity-${estimate.complexity}">${estimate.complexity.toUpperCase()}</span>
              <span style="margin: 0 10px;">•</span>
              <strong>${estimate.estimatedWeeks} weeks</strong>
            </p>
          </div>
          
          <p style="color: #6b7280; font-size: 14px; margin-top: 20px;">
            This is an automated estimate based on the provided requirements. 
            Please contact the client to discuss the project in detail and provide a final quote.
          </p>
        </div>
      </body>
    </html>
  `;

  return sendEmail({
    to: process.env.EMAIL_TO || 'hello@bootstraphub.com',
    subject: `New Quote Request from ${data.name} - ${data.businessName}`,
    html,
    replyTo: data.email,
  });
}