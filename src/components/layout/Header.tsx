"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/config/site";
import SocialLinks from "@/components/ui/SocialLinks";
import Container from "@/components/ui/Container";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50 bg-navy">
      <Container className="flex h-20 items-center justify-between md:h-[76px]">
        <Link href="/" aria-label={siteConfig.name} className="shrink-0">
          <Image
            src="/images/logo-rr.png"
            alt={siteConfig.name}
            width={1008}
            height={607}
            priority
            className="h-auto w-[68px] md:w-[56px]"
          />
        </Link>

        <div className="flex items-center gap-6 md:gap-12">
          <nav className="hidden items-center gap-12 md:flex">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[17px] font-light text-white transition-colors hover:text-gold"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <SocialLinks className="gap-6 md:gap-5" />

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="text-gold md:hidden"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
              {open ? (
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path strokeLinecap="round" d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </Container>

      {open && (
        <nav className="absolute inset-x-0 top-full border-t border-white/10 bg-navy md:hidden">
          <Container className="py-4">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-base font-light text-white hover:text-gold"
              >
                {item.label}
              </Link>
            ))}
          </Container>
        </nav>
      )}
    </header>
  );
}
