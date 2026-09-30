"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { siteConfig } from "@/config/site";

export type Crumb = { label: string; href?: string };

type Props = {
  items: Crumb[];
  /** Where "Back" goes when there is no in-site history (e.g. opened from a shared link). */
  backHref: string;
};

export default function Breadcrumbs({ items, backHref }: Props) {
  const router = useRouter();

  const goBack = () => {
    const cameFromSite =
      typeof document !== "undefined" && document.referrer.startsWith(window.location.origin);
    if (cameFromSite && window.history.length > 1) router.back();
    else router.push(backHref);
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.href && { item: `${siteConfig.url}${c.href}` }),
    })),
  };

  return (
    <div className="flex items-center gap-4 md:gap-5">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      <button
        type="button"
        onClick={goBack}
        className="flex shrink-0 items-center gap-2 rounded-full border border-white/30 py-1.5 pr-4 pl-3 text-sm text-white transition-colors hover:border-gold hover:text-gold"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="size-4" aria-hidden>
          <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Back
      </button>

      <nav aria-label="Breadcrumb" className="min-w-0">
        <ol className="flex items-center gap-2 text-sm text-white/60">
          {items.map((c, i) => {
            const last = i === items.length - 1;
            return (
              <li key={i} className={`flex items-center gap-2 ${last ? "min-w-0" : "shrink-0"}`}>
                {c.href && !last ? (
                  <Link href={c.href} className="transition-colors hover:text-gold">
                    {c.label}
                  </Link>
                ) : (
                  <span aria-current={last ? "page" : undefined} className="truncate text-gold">
                    {c.label}
                  </span>
                )}
                {!last && <span aria-hidden className="text-white/30">/</span>}
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
}
