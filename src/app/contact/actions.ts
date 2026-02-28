'use server';

import { Resend } from 'resend';

export type ContactFormState = {
  success: boolean;
  message: string;
};

const initialState: ContactFormState = {
  success: false,
  message: '',
};

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

const toEmail = process.env.CONTACT_EMAIL ?? 'conner@cornerstoneintegrations.com';
const fromEmail = process.env.RESEND_FROM ?? 'noreply@cornerstoneintegrations.com';

export { initialState };

export async function submitContactForm(_prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  const honeypot = formData.get('website');
  if (typeof honeypot === 'string' && honeypot.trim().length > 0) {
    return {
      success: false,
      message: 'Submission rejected.',
    };
  }

  const name = String(formData.get('name') || '').trim();
  const email = String(formData.get('email') || '').trim();
  const company = String(formData.get('company') || '').trim();
  const phone = String(formData.get('phone') || '').trim();
  const message = String(formData.get('message') || '').trim();

  if (!name || !email || !message) {
    return {
      success: false,
      message: 'Please provide your name, email, and message.',
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: 'Please enter a valid email address.',
    };
  }

  console.log('Cornerstone lead submission', {
    name,
    email,
    company,
    phone,
    message,
    submittedAt: new Date().toISOString(),
  });

  if (!resend) {
    return {
      success: true,
      message: "Thanks! We'll get back to you within one business day.",
    };
  }

  const { error } = await resend.emails.send({
    from: fromEmail,
    to: toEmail,
    replyTo: email,
    subject: `New contact: ${name}${company ? ` — ${company}` : ''}`,
    text: [
      `Name: ${name}`,
      company ? `Company: ${company}` : null,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      ``,
      `Message:`,
      message,
      ``,
      `Submitted: ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })}`,
    ]
      .filter(Boolean)
      .join('\n'),
  });

  if (error) {
    console.error('Resend error:', error);
    return { success: false, message: 'Something went wrong. Please email us directly.' };
  }

  return {
    success: true,
    message: "Thanks! We'll get back to you within one business day.",
  };
}
