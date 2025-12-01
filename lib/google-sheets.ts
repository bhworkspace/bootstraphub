import { google } from 'googleapis';

/**
 * Writes data to a Google Sheet
 * 
 * Setup Instructions:
 * 1. Go to Google Cloud Console (console.cloud.google.com)
 * 2. Create a new project or select existing
 * 3. Enable Google Sheets API
 * 4. Create Service Account credentials
 * 5. Download JSON key file
 * 6. Share your Google Sheet with the service account email
 * 7. Add credentials to .env.local:
 *    GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@project.iam.gserviceaccount.com
 *    GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
 */

export async function writeToSheet(
  sheetId: string,
  range: string,
  values: any[][]
): Promise<{ success: boolean; error?: string }> {
  try {
    // Initialize auth
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // Append data to sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: range,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: values,
      },
    });

    return { success: true };
  } catch (error) {
    console.error('Error writing to Google Sheets:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

// Helper function for contact form submissions
export async function saveContactToSheet(data: {
  name: string;
  email: string;
  phone?: string;
  message: string;
}) {
  const sheetId = process.env.GOOGLE_SHEET_ID_CONTACTS!;
  const timestamp = new Date().toISOString();
  
  const row = [
    [
      timestamp,
      data.name,
      data.email,
      data.phone || 'N/A',
      data.message,
    ],
  ];

  return writeToSheet(sheetId, 'Contacts!A:E', row);
}

// Helper function for quote submissions
export async function saveQuoteToSheet(data: any) {
  const sheetId = process.env.GOOGLE_SHEET_ID_QUOTES!;
  const timestamp = new Date().toISOString();
  
  const row = [
    [
      timestamp,
      data.name,
      data.email,
      data.phone,
      data.whatsapp || 'N/A',
      data.businessName,
      data.businessType,
      data.productsServices,
      data.hasDomain ? 'Yes' : 'No',
      data.domainName || 'N/A',
      data.projectType.join(', '),
      data.pagesNeeded,
      data.features.join(', '),
      data.integrations,
      data.budgetRange,
      data.timeline,
      data.inspirationLinks || 'N/A',
    ],
  ];

  return writeToSheet(sheetId, 'Quotes!A:Q', row);
}