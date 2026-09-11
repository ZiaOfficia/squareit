"use server";

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
  /** Field-level messages keyed by input name. */
  errors?: Record<string, string>;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_PATTERN = /^[+\d][\d\s-]{7,17}$/;

/**
 * Contact form handler.
 *
 * Validation runs here so it cannot be bypassed from the client. The commented
 * block is the single place the backend work plugs in: persist the enquiry,
 * then notify the sales inbox. Until then the submission is accepted and logged
 * server-side so the form is fully wired end to end.
 */
export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // Honeypot: real users never fill a hidden field.
  if (typeof formData.get("company_website") === "string" && formData.get("company_website")) {
    return { status: "success", message: "Thanks — we'll be in touch shortly." };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const service = String(formData.get("service") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  const errors: Record<string, string> = {};

  if (name.length < 2) errors.name = "Please enter your name.";
  if (!EMAIL_PATTERN.test(email)) errors.email = "Please enter a valid email address.";
  if (phone && !PHONE_PATTERN.test(phone)) errors.phone = "Please enter a valid phone number.";
  if (message.length < 10) errors.message = "Tell us a little more — at least 10 characters.";

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
    // await db.enquiry.create({
    //   data: { name, email, phone, service, message, source: "website" },
    // });
    // await sendMail({
    //   to: siteConfig.contact.salesEmail,
    //   subject: `New enquiry — ${name}`,
    //   ...
    // });
    // ------------------------------------------------------------------
    console.info("[contact] enquiry received", { name, email, phone, service });

    return {
      status: "success",
      message: "Thanks — your enquiry is with us. We usually reply within one business day.",
    };
  } catch (error) {
    console.error("[contact] submission failed", error);
    return {
      status: "error",
      message: "Something went wrong on our side. Please call us or try again in a moment.",
    };
  }
}
