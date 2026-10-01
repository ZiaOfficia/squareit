import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { MailIcon, PhoneIcon, PinIcon, socialIcons } from "@/components/ui/Icons";
import { footerNav } from "@/lib/navigation";
import { siteConfig } from "@/lib/site";

const socialOrder = ["linkedin", "facebook", "instagram", "youtube"] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-paper">
      <div className="container-page grid gap-10 py-14 md:py-16 lg:grid-cols-12 lg:gap-8">
        {/* Brand */}
        <div className="lg:col-span-4 lg:pr-10">
          <Logo />
          {/* Company description as published on squareit.in. */}
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
            Squareit Solutions is a digital marketing company aims to provide best digital
            solutions to their customers. Using real time smart strategies, we attempt to provide
            the fruitful results in a minimum time lap.
          </p>

          {/* Accreditations carried over from squareit.in. */}
          <ul className="mt-6 flex flex-wrap items-center gap-3">
            <li className="flex h-12 items-center rounded-sm border border-line bg-white px-3">
              <Image
                src="/images/squareit/misc/google-partner.png"
                alt="Google Partner"
                width={96}
                height={40}
                sizes="96px"
                className="h-8 w-auto object-contain"
              />
            </li>
            <li className="flex h-12 items-center rounded-sm border border-line bg-white px-3">
              <Image
                src="/images/squareit/misc/iso-certification.webp"
                alt="ISO certified"
                width={96}
                height={40}
                sizes="96px"
                className="h-8 w-auto object-contain"
              />
            </li>
          </ul>
        </div>

        {/* Main links */}
        <nav aria-label="Footer" className="lg:col-span-2">
          <h2 className="text-sm font-bold text-ink">Main Links</h2>
          <ul className="mt-4 space-y-2.5">
            {footerNav.main.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted transition-colors hover:text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Services */}
        <nav aria-label="Services" className="lg:col-span-2">
          <h2 className="text-sm font-bold text-ink">Our Services</h2>
          <ul className="mt-4 space-y-2.5">
            {footerNav.services.map((link, index) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm transition-colors hover:text-ink ${
                    index === footerNav.services.length - 1
                      ? "font-semibold text-ink underline underline-offset-4"
                      : "text-muted"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div className="lg:col-span-2">
          <h2 className="text-sm font-bold text-ink">Contact</h2>
          <ul className="mt-4 space-y-3">
            <li>
              <a
                href={`tel:${siteConfig.contact.phonePrimaryHref}`}
                className="flex items-start gap-2.5 text-sm text-muted transition-colors hover:text-ink"
              >
                <PhoneIcon className="mt-0.5 size-4 shrink-0" />
                {siteConfig.contact.phonePrimary}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-start gap-2.5 text-sm text-muted transition-colors hover:text-ink"
              >
                <MailIcon className="mt-0.5 size-4 shrink-0" />
                {siteConfig.contact.email}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 text-sm text-muted transition-colors hover:text-ink"
              >
                <PinIcon className="mt-0.5 size-4 shrink-0" />
                <span>
                  {siteConfig.address.city}, {siteConfig.address.countryName}
                </span>
              </a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div className="lg:col-span-2">
          <h2 className="text-sm font-bold text-ink">Follow Us</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {socialOrder.map((key) => {
              const Icon = socialIcons[key];
              return (
                <li key={key}>
                  <a
                    href={siteConfig.social[key]}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${siteConfig.name} on ${key}`}
                    className="inline-flex size-9 items-center justify-center rounded-full border border-line text-ink-soft transition-colors hover:border-ink hover:bg-ink hover:text-white"
                  >
                    <Icon className="size-4" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Newsletter — copy as published on squareit.in. */}
      <div className="border-t border-line bg-paper-alt">
        <div className="container-page flex flex-col gap-6 py-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="font-display text-[1.35rem] font-extrabold tracking-tight">
              Subscribe to our Newsletter
            </h2>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
              Join Our Newsletter &amp; Marketing Communication. We&apos;ll send you news and
              offers.
            </p>
          </div>

          {/* Posts to the mail client until a list backend is connected — a
              form that silently discards addresses would be worse than none. */}
          <form
            action={`mailto:${siteConfig.contact.email}`}
            method="post"
            encType="text/plain"
            className="flex w-full max-w-md gap-2"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              name="email"
              required
              autoComplete="email"
              placeholder="you@company.com"
              className="h-12 min-w-0 flex-1 rounded-sm border border-line bg-white px-4 text-sm text-ink outline-none transition-colors placeholder:text-muted focus:border-ink"
            />
            <button
              type="submit"
              className="inline-flex h-12 shrink-0 items-center justify-center rounded-sm bg-ink px-6 text-sm font-semibold text-white transition-colors hover:bg-ink-soft"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-line">
        <div className="container-page flex flex-col items-center justify-between gap-4 py-5 text-xs text-muted sm:flex-row">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {footerNav.legal.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-ink">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
