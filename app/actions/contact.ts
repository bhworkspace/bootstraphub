// ============================================
// FILE: app/actions/contact.ts
// ============================================
'use server';

import { saveContactToSheet } from '@/lib/google-sheets';
import { sendContactEmail } from '@/lib/email';

export async function submitContactForm(formData: FormData) {
  const data = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    phone: (formData.get('phone') as string) || undefined,
    message: formData.get('message') as string,
  };

  try {
    // Save to Google Sheets
    const sheetResult = await saveContactToSheet(data);
    
    // Send email notification
    const emailResult = await sendContactEmail(data);

    return { success: true };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return { success: false, error: 'Failed to submit form' };
  }
}