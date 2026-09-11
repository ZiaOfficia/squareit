"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitContact, type ContactState } from "@/app/actions/contact";
import { serviceCategories } from "@/content/services";

const initialState: ContactState = { status: "idle", message: "" };

const fieldClasses =
  "mt-2 w-full rounded-sm border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-ink";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex h-[3.25rem] items-center justify-center gap-2 rounded-sm bg-ink px-7 text-[0.9375rem] font-semibold text-white transition-colors hover:bg-ink-soft disabled:opacity-60"
    >
      {pending ? "Sending…" : "Send Enquiry"}
    </button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitContact, initialState);

  return (
    <form action={formAction} noValidate className="space-y-5">
      {/* Status region announced to screen readers */}
      {state.status !== "idle" ? (
        <p
          role="status"
          aria-live="polite"
          className={`rounded-sm border px-4 py-3 text-sm ${
            state.status === "success"
              ? "border-brand-green/30 bg-brand-green/10 text-brand-green-dark"
              : "border-brand-red/30 bg-brand-red/10 text-brand-red-dark"
          }`}
        >
          {state.message}
        </p>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
            Your Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            aria-invalid={Boolean(state.errors?.name)}
            aria-describedby={state.errors?.name ? "name-error" : undefined}
            className={fieldClasses}
            placeholder="Priya Sharma"
          />
          {state.errors?.name ? (
            <p id="name-error" className="mt-1.5 text-xs text-brand-red">
              {state.errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            aria-invalid={Boolean(state.errors?.email)}
            aria-describedby={state.errors?.email ? "email-error" : undefined}
            className={fieldClasses}
            placeholder="you@company.com"
          />
          {state.errors?.email ? (
            <p id="email-error" className="mt-1.5 text-xs text-brand-red">
              {state.errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            aria-invalid={Boolean(state.errors?.phone)}
            aria-describedby={state.errors?.phone ? "phone-error" : undefined}
            className={fieldClasses}
            placeholder="+91 98765 43210"
          />
          {state.errors?.phone ? (
            <p id="phone-error" className="mt-1.5 text-xs text-brand-red">
              {state.errors.phone}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="service" className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
            What do you need?
          </label>
          <select id="service" name="service" className={fieldClasses} defaultValue="">
            <option value="">Select a service</option>
            {serviceCategories.map((category) => (
              <optgroup key={category.slug} label={category.title}>
                {category.items.slice(0, 6).map((item) => (
                  <option key={item.slug} value={item.title}>
                    {item.title}
                  </option>
                ))}
              </optgroup>
            ))}
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
          Tell us about your project *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          aria-invalid={Boolean(state.errors?.message)}
          aria-describedby={state.errors?.message ? "message-error" : undefined}
          className={`${fieldClasses} resize-y`}
          placeholder="Where you are now, where you want to get to, and any deadlines we should know about."
        />
        {state.errors?.message ? (
          <p id="message-error" className="mt-1.5 text-xs text-brand-red">
            {state.errors.message}
          </p>
        ) : null}
      </div>

      {/* Honeypot — hidden from users, catches naive bots */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="company_website">Company website</label>
        <input id="company_website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-wrap items-center gap-4 pt-1">
        <SubmitButton />
        <p className="text-xs text-muted">
          We reply within one business day. No spam, ever.
        </p>
      </div>
    </form>
  );
}
