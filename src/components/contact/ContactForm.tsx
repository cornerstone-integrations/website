'use client';

import { useActionState } from 'react';
import { initialState, submitContactForm } from '@/app/contact/actions';

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContactForm, initialState);

  return (
    <form action={formAction} className="space-y-5 rounded-xl border border-gray-200 bg-white p-6 shadow-soft">
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" required />
        <Field label="Email" name="email" type="email" required />
        <Field label="Company" name="company" />
        <Field label="Phone" name="phone" type="tel" />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-navy">
          Message <span className="text-red-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className="mt-2 w-full rounded-md border border-gray-300 px-4 py-3 text-sm text-navy outline-none ring-blue-accent/20 transition focus:border-blue-accent focus:ring-4"
          placeholder="Tell us about your systems, process bottlenecks, or project goals."
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="inline-flex rounded-md bg-blue-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-accent disabled:cursor-not-allowed disabled:opacity-70"
      >
        {pending ? 'Sending...' : 'Send Message'}
      </button>

      {state.message ? (
        <p className={`text-sm ${state.success ? 'text-emerald-700' : 'text-red-700'}`} aria-live="polite">
          {state.message}
        </p>
      ) : null}
    </form>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
};

function Field({ label, name, type = 'text', required = false }: FieldProps) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-navy">
        {label} {required ? <span className="text-red-600">*</span> : null}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-md border border-gray-300 px-4 py-3 text-sm text-navy outline-none ring-blue-accent/20 transition focus:border-blue-accent focus:ring-4"
      />
    </div>
  );
}
