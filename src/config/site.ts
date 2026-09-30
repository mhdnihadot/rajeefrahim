export const siteConfig = {
  name: "Rajeef Rahim",
  // Set NEXT_PUBLIC_SITE_URL in production so canonical/OG/sitemap URLs are absolute and correct.
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
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
  socials: {
    linkedin: "#",
    facebook: "#",
    instagram: "#",
  },
  contact: {
    email: "info@example.com",
    phone: "+000 000 0000",
  },
};

export type NavItem = (typeof siteConfig.nav)[number];
