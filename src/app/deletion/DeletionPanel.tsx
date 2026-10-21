"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { controlSite, type DeletionState } from "@/app/actions/deletion";

const initialState: DeletionState = { status: "idle", message: "" };

const fieldClasses =
  "mt-2 w-full rounded-sm border border-line bg-white px-4 py-3 text-base text-ink outline-none sm:text-sm transition-colors focus:border-ink";

const labelClasses = "text-xs font-semibold uppercase tracking-[0.12em] text-muted";

function ActionButtons() {
  const { pending } = useFormStatus();
  const base =
    "inline-flex h-12 flex-1 items-center justify-center rounded-sm px-5 text-sm font-semibold transition-colors disabled:opacity-60";

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <button type="submit" name="intent" value="off" disabled={pending} className={`${base} bg-ink text-white hover:bg-black`}>
        Switch website OFF
      </button>
      <button type="submit" name="intent" value="on" disabled={pending} className={`${base} bg-brand-green text-white hover:bg-brand-green-dark`}>
        Switch website ON
      </button>
      <button type="submit" name="intent" value="status" disabled={pending} className={`${base} border border-line text-ink hover:border-ink`}>
        Check status
      </button>
    </div>
  );
}

export function DeletionPanel() {
  const [state, formAction] = useActionState(controlSite, initialState);

  return (
    <form action={formAction} className="space-y-5">
      {state.status !== "idle" ? (
        <p
          role="status"
          aria-live="polite"
          className={
            state.status === "success"
              ? "rounded-sm border border-brand-green/30 bg-brand-green/10 px-4 py-3 text-sm text-brand-green-dark"
              : "rounded-sm border border-brand-red/30 bg-brand-red/10 px-4 py-3 text-sm text-brand-red-dark"
          }
        >
          {state.message}
        </p>
      ) : null}

      <div>
        <label htmlFor="deletion-username" className={labelClasses}>
          Admin username
        </label>
        <input id="deletion-username" name="username" required autoComplete="username" className={fieldClasses} />
      </div>

      <div>
        <label htmlFor="deletion-password" className={labelClasses}>
          Password
        </label>
        <input
          id="deletion-password"
          name="password"
          type="password"
          required
          autoComplete="current-password"
          className={fieldClasses}
        />
      </div>

      <ActionButtons />
    </form>
  );
}
