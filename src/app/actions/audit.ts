"use server";

export type AuditState = {
  status: "idle" | "success" | "error";
  message: string;
  /** Field-level messages keyed by input name. */
  errors?: Record<string, string>;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_PATTERN = /^[+\d][\d\s-]{7,17}$/;
const WEBSITE_PATTERN = /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,}(\/\S*)?$/i;

/**
 * Free audit request handler — same contract as the contact action: validate
 * on the server, then hand off at the single backend integration point.
 */
export async function submitAudit(_prev: AuditState, formData: FormData): Promise<AuditState> {
  // Honeypot: real users never fill a hidden field.
  if (typeof formData.get("company_website") === "string" && formData.get("company_website")) {
    return { status: "success", message: "Thanks — we'll be in touch shortly." };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const website = String(formData.get("website") ?? "").trim();
  const goals = String(formData.get("goals") ?? "").trim();

  const errors: Record<string, string> = {};

  if (name.length < 2) errors.name = "Please enter your name.";
  if (!EMAIL_PATTERN.test(email)) errors.email = "Please enter a valid email address.";
  if (phone && !PHONE_PATTERN.test(phone)) errors.phone = "Please enter a valid phone number.";
  if (!WEBSITE_PATTERN.test(website)) errors.website = "Please enter the website to audit.";

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Please correct the highlighted fields.",
      errors,
    };
  }

  try {
    // ------------------------------------------------------------------
    // BACKEND INTEGRATION POINT
    //
    // await db.auditRequest.create({
    //   data: { name, email, phone, website, goals, source: "header" },
    // });
    // await sendMail({
    //   to: siteConfig.contact.salesEmail,
    //   subject: `Free audit request — ${website}`,
    //   ...
    // });
    // ------------------------------------------------------------------
    console.info("[audit] request received", { name, email, phone, website, goals });

    return {
      status: "success",
      message: "Thanks — your audit request is with us. We usually reply within one business day.",
    };
  } catch (error) {
    console.error("[audit] submission failed", error);
    return {
      status: "error",
      message: "Something went wrong on our side. Please call us or try again in a moment.",
    };
  }
}
