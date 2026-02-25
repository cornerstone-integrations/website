'use server';

export type ContactFormState = {
  success: boolean;
  message: string;
};

const initialState: ContactFormState = {
  success: false,
  message: '',
};

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

  return {
    success: true,
    message: "Thanks! We'll get back to you within one business day.",
  };
}
