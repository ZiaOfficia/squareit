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
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
            We help businesses grow with strategy, technology, marketing and creative solutions.
          </p>
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
