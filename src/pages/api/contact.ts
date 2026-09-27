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

  const firstName = String(formData.get('firstName') || '').trim();
  const lastName = String(formData.get('lastName') || '').trim();
  const name = `${firstName} ${lastName}`.trim();
  const company = String(formData.get('company') || '').trim();
  const email = String(formData.get('email') || '').trim();
  const phone = String(formData.get('phone') || '').trim();
  const companyWebsite = String(formData.get('companyWebsite') || '').trim();
  const goal = String(formData.get('goal') || '').trim();
  const systems = String(formData.get('systems') || '').trim();
  const timing = String(formData.get('timing') || '').trim();

  if (!firstName || !lastName || !company || !email || !phone || !goal || !timing) {
    return json({ success: false, message: 'Please complete all required fields.' }, 400);
  }

  if (!emailRegex.test(email)) {
    return json({ success: false, message: 'Please enter a valid email address.' }, 400);
  }

  const submittedAt = new Date().toISOString();
  const fields = { firstName, lastName, company, email, phone, companyWebsite, goal, systems, timing, submittedAt };

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
          `Company: ${company}`,
          `Email: ${email}`,
          `Phone: ${phone}`,
          companyWebsite ? `Company website: ${companyWebsite}` : null,
          '',
          'What the business is trying to accomplish:',
          goal,
          systems ? `\nSystems or software involved:\n${systems}` : null,
          `\nDesired project completion date: ${timing}`,
          '',
          `Submitted: ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })}`,
        ]
          .filter(Boolean)
          .join('\n'),
      });

      if (error) {
        console.error('Resend error:', error);
        return json(
          { success: false, message: 'Something went wrong. Please try again in a moment.' },
          502,
        );
      }
    } catch (err) {
      console.error('Resend threw:', err);
      return json(
        { success: false, message: 'Something went wrong. Please try again in a moment.' },
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
    } catch (err) {
      console.error('n8n webhook failed:', err);
    }
  }

  return json({ success: true, message: 'Your consultation request has been received.' });
};

function json(body: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });
}
