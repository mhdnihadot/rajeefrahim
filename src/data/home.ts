// Static home page content — swap for API data later.

export const heroContent = {
  name: "Rajeef Rahim",
  // Each line is a list of segments; `gold: true` renders the segment in the accent colour.
  tagline: [
    [{ text: "Building Trust. " }, { text: "Creating Value.", gold: true }],
    [{ text: "Shaping " }, { text: "Dubai’s Real Estate Future.", gold: true }],
  ],
  description: "Helping investors make confident moves in Dubai real estate.",
  image: { src: "/images/rajeef-rahim.webp", width: 2730, height: 4096 },
  primaryCta: { label: "Explore My Journey", href: "/#about" },
  secondaryCta: { label: "Connect With Me", href: "/#contact" },
  socialsLabel: "Checkout My Socials",
};

export const aboutMeContent = {
  eyebrow: "About Me",
  title: [
    { text: "More Than Real Estate. It’s About " },
    { text: "People, Trust & Possibilities.", gold: true },
  ],
  description:
    "It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page When Looking At Its Layout. The Point Of Using Lorem Ipsum Is That It Has A More-Or-Less Normal Distribution Of Letters, As Opposed",
  image: { src: "/images/rajeef-rahim-about.webp", width: 2400, height: 1603 },
  cta: { label: "Connect With Me", href: "/#contact" },
};

const aboutParagraph =
  "Real estate may define what I do, but the people I meet and the experiences I share define who I am. Away from the boardroom, I value meaningful conversations, new perspectives, time with the people around me, and the moments that make life memorable. Real estate may define what I do, but the people I meet and the experiences I share define who I am. Away from the boardroom, I value meaningful conversations, new perspectives, time with the people around me, and the moments that make life memorable.Real estate may define what I do, but the people I meet and the experiences I share define who I am. Away from the boardroom, I value meaningful conversations, new perspectives, time with the people around me, and the moments that make life memorable.Real estate may define what I do, but the people I meet and the experiences I share define who I am. Away from the boardroom, I value meaningful conversations, new perspectives, time with the people around me, and the moments that make life memorable.";

export const personContent = {
  eyebrow: "About",
  title: [
    { text: "The " },
    { text: "Person", gold: true },
    { text: " Behind the " },
    { text: "Profession", gold: true },
  ],
  quote:
    "Beyond property, meetings, and milestones, there’s a person driven by curiosity, connection, and a genuine appreciation for the people and experiences that make the journey meaningful.",
  paragraphs: [aboutParagraph, aboutParagraph],
};

export type TextSegment = { text: string; gold?: boolean };
