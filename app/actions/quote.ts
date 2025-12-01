// ============================================
// FILE: app/actions/quote.ts
// ============================================
'use server';

import { saveQuoteToSheet } from '@/lib/google-sheets';
import { sendQuoteEmail } from '@/lib/email';
import { QuoteFormData, PricingEstimate } from '@/types';

export async function submitQuote(
  data: QuoteFormData,
  estimate: PricingEstimate
) {
  try {
    // Save to Google Sheets
    await saveQuoteToSheet(data);
    
    // Send email notification
    await sendQuoteEmail(data, estimate);

    return { success: true };
  } catch (error) {
    console.error('Error submitting quote:', error);
    return { success: false, error: 'Failed to submit quote' };
  }
}