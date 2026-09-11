"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { ChevronDown, CloseIcon, MenuIcon, PhoneIcon } from "@/components/ui/Icons";
import { mainNav } from "@/lib/navigation";
import { siteConfig } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  // Close the mobile sheet on navigation so the menu never lingers.
  useEffect(() => {
    setOpen(false);
    setOpenGroup(null);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll behind the mobile sheet.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-200 ${
        scrolled ? "border-line bg-paper/95 backdrop-blur-md" : "border-transparent bg-paper"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-sm focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>

      <div className="container-page flex h-[4.5rem] items-center justify-between gap-6">
        <Logo />

        {/* Desktop navigation */}
        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) => (
            <div
              key={item.href}
              className="relative"
              onMouseEnter={() => item.children && setOpenGroup(item.href)}
              onMouseLeave={() => setOpenGroup(null)}
            >
              <Link
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                aria-expanded={item.children ? openGroup === item.href : undefined}
                className={`inline-flex items-center gap-1 rounded-sm px-3 py-2 text-[0.875rem] font-medium transition-colors ${
                  isActive(item.href) ? "text-ink" : "text-ink-soft hover:text-ink"
                }`}
              >
                {item.label}
                {item.children ? (
                  <ChevronDown
                    className={`size-3.5 transition-transform duration-200 ${
                      openGroup === item.href ? "rotate-180" : ""
                    }`}
                  />
                ) : null}
              </Link>

              {item.children && openGroup === item.href ? (
                <div className="absolute left-0 top-full w-72 pt-2">
                  <div className="overflow-hidden rounded-md border border-line bg-white shadow-[0_18px_40px_-20px_rgba(0,0,0,0.35)]">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block border-b border-line/70 px-4 py-3 transition-colors last:border-0 hover:bg-paper-alt"
                      >
                        <span className="block text-sm font-semibold text-ink">{child.label}</span>
                        {child.description ? (
                          <span className="mt-0.5 block text-xs text-muted">{child.description}</span>
                        ) : null}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${siteConfig.contact.phonePrimaryHref}`}
            className="hidden items-center gap-2 text-sm font-semibold text-ink xl:inline-flex"
          >
            <PhoneIcon className="size-4 text-muted" />
            {siteConfig.contact.phonePrimary}
          </a>

          <ButtonLink href="/contact" variant="yellow" size="md" className="hidden sm:inline-flex">
            Get a Proposal
          </ButtonLink>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex size-10 items-center justify-center rounded-sm border border-line text-ink lg:hidden"
          >
            {open ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      {open ? (
        <div
          id="mobile-nav"
          className="fixed inset-0 top-[4.5rem] z-40 overflow-y-auto bg-paper lg:hidden"
        >
          <nav aria-label="Mobile" className="container-page py-6">
            <ul className="divide-y divide-line">
              {mainNav.map((item) => (
                <li key={item.href} className="py-1">
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      className="block py-3 font-display text-2xl font-extrabold tracking-tight text-ink"
                    >
                      {item.label}
                    </Link>
                    {item.children ? (
                      <button
                        type="button"
                        aria-label={`Toggle ${item.label} submenu`}
                        aria-expanded={openGroup === item.href}
                        onClick={() =>
                          setOpenGroup((current) => (current === item.href ? null : item.href))
                        }
                        className="inline-flex size-9 items-center justify-center rounded-full border border-line text-ink"
                      >
                        <ChevronDown
                          className={`size-4 transition-transform ${
                            openGroup === item.href ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    ) : null}
                  </div>

                  {item.children && openGroup === item.href ? (
                    <ul className="mb-3 space-y-1 border-l-2 border-brand-yellow pl-4">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link href={child.href} className="block py-2 text-sm text-ink-soft">
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
            </ul>

            <div className="mt-8 space-y-3">
              <ButtonLink href="/contact" variant="yellow" className="w-full">
                Get a Proposal
              </ButtonLink>
              <a
                href={`tel:${siteConfig.contact.phonePrimaryHref}`}
                className="flex items-center justify-center gap-2 rounded-sm border border-line py-3 text-sm font-semibold text-ink"
              >
                <PhoneIcon className="size-4" />
                {siteConfig.contact.phonePrimary}
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
