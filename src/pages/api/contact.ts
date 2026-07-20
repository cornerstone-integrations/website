import type { APIRoute } from 'astro';

export const prerender = false;

const toEmail = import.meta.env.CONTACT_EMAIL ?? 'conner@cornerstoneintegrations.com';
const fromEmail = import.meta.env.RESEND_FROM ?? 'noreply@cornerstoneintegrations.com';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();

  // Honeypot — real forms never fill this hidden field in.
  const honeypot = formData.get('hp_field');
  if (typeof honeypot === 'string' && honeypot.trim().length > 0) {
    return json({ success: false, message: 'Submission rejected.' }, 400);
  }

  const name = String(formData.get('name') || '').trim();
  const company = String(formData.get('company') || '').trim();
  const email = String(formData.get('email') || '').trim();
  const phone = String(formData.get('phone') || '').trim();
  const companyWebsite = String(formData.get('companyWebsite') || '').trim();
  const goal = String(formData.get('goal') || '').trim();
  const systemsUsed = String(formData.get('systemsUsed') || '').trim();
  const nextStep = String(formData.get('nextStep') || '').trim();

  if (!name || !email || !goal) {
    return json({ success: false, message: 'Please provide your name, email, and a brief description of your goal.' }, 400);
  }

  if (!emailRegex.test(email)) {
    return json({ success: false, message: 'Please enter a valid email address.' }, 400);
  }

  const submittedAt = new Date().toISOString();
  const fields = { name, company, email, phone, companyWebsite, goal, systemsUsed, nextStep, submittedAt };

  const resendApiKey = import.meta.env.RESEND_API_KEY;
  if (resendApiKey) {
    try {
      const { Resend } = await import('resend');
      const resend = new Resend(resendApiKey);
      const { error } = await resend.emails.send({
        from: fromEmail,
        to: toEmail,
        replyTo: email,
        subject: `New consultation request: ${name}${company ? ` — ${company}` : ''}`,
        text: [
          `Name: ${name}`,
          company ? `Company: ${company}` : null,
          `Email: ${email}`,
          phone ? `Phone: ${phone}` : null,
          companyWebsite ? `Company website: ${companyWebsite}` : null,
          '',
          'Problem or goal:',
          goal,
          systemsUsed ? `\nSystems currently used:\n${systemsUsed}` : null,
          nextStep ? `\nPreferred next step:\n${nextStep}` : null,
          '',
          `Submitted: ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })}`,
        ]
          .filter(Boolean)
          .join('\n'),
      });

      if (error) {
        console.error('Resend error:', error);
        return json(
          { success: false, message: 'Something went wrong. Please email us directly at conner@cornerstoneintegrations.com.' },
          502,
        );
      }
    } catch (err) {
      console.error('Resend threw:', err);
      return json(
        { success: false, message: 'Something went wrong. Please email us directly at conner@cornerstoneintegrations.com.' },
        502,
      );
    }
  } else {
    console.log('Cornerstone lead submission (no RESEND_API_KEY set)', fields);
  }

  const n8nWebhook = import.meta.env.N8N_WEBHOOK_URL;
  if (n8nWebhook) {
    try {
      await fetch(n8nWebhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      });
    } catch {
      // n8n down — no-op, Resend email already sent (or logged).
    }
  }

  return json({ success: true, message: "Thanks! We'll get back to you within one business day." });
};

function json(body: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });
}
