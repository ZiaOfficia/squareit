"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { submitAudit, type AuditState } from "@/app/actions/audit";
import { CloseIcon } from "@/components/ui/Icons";

const initialState: AuditState = { status: "idle", message: "" };

const fieldClasses =
  "mt-2 w-full rounded-sm border border-line bg-white px-4 py-3 text-base text-ink outline-none sm:text-sm transition-colors placeholder:text-muted/70 focus:border-ink";

const labelClasses = "text-xs font-semibold uppercase tracking-[0.12em] text-muted";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex h-[3.25rem] w-full items-center justify-center gap-2 rounded-sm bg-brand-yellow px-7 text-[0.9375rem] font-semibold text-ink transition-colors hover:bg-brand-yellow-dark disabled:opacity-60"
    >
      {pending ? "Sending…" : "Request My Free Audit"}
    </button>
  );
}

function AuditForm() {
  const [state, formAction] = useActionState(submitAudit, initialState);

  if (state.status === "success") {
    return (
      <p
        role="status"
        aria-live="polite"
        className="rounded-sm border border-brand-green/30 bg-brand-green/10 px-4 py-3 text-sm text-brand-green-dark"
      >
        {state.message}
      </p>
    );
  }

  return (
    <form action={formAction} noValidate className="space-y-5">
      {/* Status region announced to screen readers */}
      {state.status === "error" ? (
        <p
          role="status"
          aria-live="polite"
          className="rounded-sm border border-brand-red/30 bg-brand-red/10 px-4 py-3 text-sm text-brand-red-dark"
        >
          {state.message}
        </p>
      ) : null}

      <div>
        <label htmlFor="audit-website" className={labelClasses}>
          Website to audit *
        </label>
        <input
          id="audit-website"
          name="website"
          type="url"
          inputMode="url"
          required
          autoComplete="url"
          aria-invalid={Boolean(state.errors?.website)}
          aria-describedby={state.errors?.website ? "audit-website-error" : undefined}
          className={fieldClasses}
          placeholder="www.yourcompany.com"
        />
        {state.errors?.website ? (
          <p id="audit-website-error" className="mt-1.5 text-xs text-brand-red">
            {state.errors.website}
          </p>
        ) : null}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="audit-name" className={labelClasses}>
            Your Name *
          </label>
          <input
            id="audit-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            aria-invalid={Boolean(state.errors?.name)}
            aria-describedby={state.errors?.name ? "audit-name-error" : undefined}
            className={fieldClasses}
            placeholder="Priya Sharma"
          />
          {state.errors?.name ? (
            <p id="audit-name-error" className="mt-1.5 text-xs text-brand-red">
              {state.errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="audit-phone" className={labelClasses}>
            Phone
          </label>
          <input
            id="audit-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            aria-invalid={Boolean(state.errors?.phone)}
            aria-describedby={state.errors?.phone ? "audit-phone-error" : undefined}
            className={fieldClasses}
            placeholder="+91 98765 43210"
          />
          {state.errors?.phone ? (
            <p id="audit-phone-error" className="mt-1.5 text-xs text-brand-red">
              {state.errors.phone}
            </p>
          ) : null}
        </div>
      </div>

      <div>
        <label htmlFor="audit-email" className={labelClasses}>
          Email *
        </label>
        <input
          id="audit-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          aria-invalid={Boolean(state.errors?.email)}
          aria-describedby={state.errors?.email ? "audit-email-error" : undefined}
          className={fieldClasses}
          placeholder="you@company.com"
        />
        {state.errors?.email ? (
          <p id="audit-email-error" className="mt-1.5 text-xs text-brand-red">
            {state.errors.email}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="audit-goals" className={labelClasses}>
          What should we look at?
        </label>
        <textarea
          id="audit-goals"
          name="goals"
          rows={3}
          className={`${fieldClasses} resize-y`}
          placeholder="Rankings, ad spend, site speed, conversions…"
        />
      </div>

      {/* Honeypot — hidden from users, catches naive bots */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="audit-company-website">Company website</label>
        <input
          id="audit-company-website"
          name="company_website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <SubmitButton />
      <p className="text-center text-xs text-muted">
        We reply within one business day. No spam, ever.
      </p>
    </form>
  );
}

export function AuditDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);

  // A native modal renders in the top layer, so the sticky header's
  // backdrop-filter cannot clip it, and focus trapping / Escape come free.
  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(event) => {
        // Clicks on the backdrop land on the dialog element itself.
        if (event.target === ref.current) onClose();
      }}
      aria-labelledby="audit-dialog-title"
      className="m-auto w-[calc(100%-2rem)] max-w-lg rounded-md border border-line bg-paper p-0 text-ink shadow-[0_30px_80px_-30px_rgba(0,0,0,0.5)] backdrop:bg-ink/60 backdrop:backdrop-blur-sm"
    >
      <div className="max-h-[calc(100dvh-2rem)] overflow-y-auto overscroll-contain p-5 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2
              id="audit-dialog-title"
              className="font-display text-2xl font-extrabold tracking-tight"
            >
              Get a Free Audit
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Share your website and we&apos;ll send back a clear review of what&apos;s holding it
              back.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-ink"
          >
            <CloseIcon className="size-4" />
          </button>
        </div>

        {/* Mounted only while open so each visit starts from a clean form. */}
        <div className="mt-6">{open ? <AuditForm /> : null}</div>
      </div>
    </dialog>
  );
}
