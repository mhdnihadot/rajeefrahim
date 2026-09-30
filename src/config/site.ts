export const siteConfig = {
  name: "Rajeef Rahim",
  // Public site URL — used for canonical links, sitemap and the share (Open Graph) image.
  // Set NEXT_PUBLIC_SITE_URL once the domain is live; on Vercel it falls back to the deployment URL.
  url:
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL && `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`) ||
    (process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`) ||
    "http://localhost:3000",
  title: "Rajeef Rahim | Dubai Real Estate Expert",
  description:
    "Rajeef Rahim — building trust, creating value and shaping Dubai's real estate future. Insights on Dubai property, investment, developments and investor relations.",
  keywords: [
    "Rajeef Rahim",
    "Dubai real estate",
    "Dubai property investment",
    "UAE real estate",
    "Dubai developments",
    "investor relations Dubai",
    "buy property in Dubai",
  ],
  locale: "en_AE",
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Article", href: "/articles" },
  ],
  // Footer links — "Opportunities" has no page yet ("#" placeholder).
  footerLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Expertise", href: "/#articles" },
    { label: "Insights", href: "/articles" },
    { label: "Opportunities", href: "#" },
    { label: "Contact", href: "/#contact" },
  ],
  socials: {
    linkedin: "#",
    x: "#",
    instagram: "#",
  },
  contact: {
    email: "info@example.com",
    phone: "+000 000 0000",
  },
};

export type NavItem = (typeof siteConfig.nav)[number];
