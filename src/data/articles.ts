// Static dummy articles — replace with API data later.

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO yyyy-mm-dd
  image: string;
  /** Sections of the body; each section is a list of paragraphs rendered back to back. */
  body: string[][];
};

const IMAGES = [
  "https://www.imtilakgroup.com/cdn-cgi/image/format=auto,fit=contain/https://imt-assets.fra1.digitaloceanspaces.com/Safaraq/posts/7627290986ae7db2805c57d987c4ccd6RQr_6366lC.webp",
  "https://manaramagazine.org/wp-content/uploads/2022/01/shutterstock_1913045854_opt-scaled.jpg",
  "https://www.reuters.com/resizer/v2/TECHZMXJDZIZ3MSPVCWBOGTK6Y.jpg?auth=8f95ad3ca1c0e3906bb6afe60e60ab262f8f01749eef4ff676c1bb05fedae13e&width=1200&quality=80",
];

const P1 =
  "Buying property in the UAE, whether you're a seasoned investor or a first-time homebuyer, is a significant financial undertaking. Understanding your mortgage options is crucial to making informed decisions and securing the best possible terms for your investment. This guide provides a comprehensive overview of mortgage financing in the UAE, helping you navigate the process with confidence.";
const P2 =
  "Securing a mortgage is a significant step in the UAE property buying process. By understanding the various options available, assessing your financial situation, and seeking professional advice, you can navigate the mortgage market with confidence and secure the best possible financing for your dream property. Good luck!";

const DUMMY_BODY = [
  [P1, P2 + " " + P1, P2 + " " + P1, P2, P1, P2],
  [P1 + " " + P2, P2 + " " + P1, P2, P1, P2],
];

const raw: Omit<Article, "body">[] = [
  { slug: "mortgage-options-financing-your-uae-property-buys", title: "Mortgage Options: Financing Your UAE Property Buys", excerpt: "A clear guide to mortgage financing in the UAE for investors and first-time buyers.", date: "2026-10-09", image: IMAGES[1] },
  { slug: "dubai-real-estate", title: "Dubai Real Estate", excerpt: "Understanding Dubai’s property market and identifying opportunities with confidence.", date: "2026-10-06", image: IMAGES[0] },
  { slug: "investment-and-developments", title: "Investment & Developments", excerpt: "Identifying valuable investment opportunities across Dubai’s premium developments.", date: "2026-10-02", image: IMAGES[1] },
  { slug: "sales-and-investor-relations", title: "Sales & Investor Relations", excerpt: "Building trusted relationships through personalised guidance and strategic expertise.", date: "2026-09-28", image: IMAGES[2] },
  { slug: "off-plan-vs-ready-property", title: "Off-Plan Vs Ready Property", excerpt: "Weighing payment plans, timelines and returns before you commit to a purchase.", date: "2026-09-24", image: IMAGES[0] },
  { slug: "golden-visa-through-property", title: "Golden Visa Through Property", excerpt: "What investors need to know about residency through real estate in the UAE.", date: "2026-09-19", image: IMAGES[2] },
  { slug: "dubai-marina-vs-downtown", title: "Dubai Marina Vs Downtown", excerpt: "Comparing two of Dubai’s most sought-after addresses for living and investing.", date: "2026-09-15", image: IMAGES[1] },
  { slug: "rental-yields-in-dubai", title: "Rental Yields In Dubai", excerpt: "A practical look at where rental returns are strongest across the city.", date: "2026-09-10", image: IMAGES[0] },
  { slug: "understanding-service-charges", title: "Understanding Service Charges", excerpt: "How community fees work and why they matter for your long-term returns.", date: "2026-09-04", image: IMAGES[2] },
  { slug: "first-time-buyer-checklist", title: "First-Time Buyer Checklist", excerpt: "Every step from budgeting to handover for your first Dubai property.", date: "2026-08-30", image: IMAGES[1] },
];

export const articles: Article[] = raw.map((a) => ({ ...a, body: DUMMY_BODY }));

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);

export const getRelatedArticles = (slug: string, count = 4) =>
  articles.filter((a) => a.slug !== slug).slice(0, count);
