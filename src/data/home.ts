// Static home page content — swap for API data later.

export const heroContent = {
  name: "Rajeef Rahim",
  // Each line is a list of segments; `gold: true` renders the segment in the accent colour.
  tagline: [
    [{ text: "Building Trust. " }, { text: "Creating Value.", gold: true }],
    [{ text: "Shaping " }, { text: "Dubai’s Real Estate Future.", gold: true }],
  ],
  description: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.",
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
  "Real Estate May Define What I Do, But The People I Meet And The Experiences I Share Define Who I Am. Away From The Boardroom, I Value Meaningful Conversations, New Perspectives, Time With The People Around Me, And The Moments That Make Life Memorable. Real Estate May Define What I Do, But The People I Meet And The Experiences I Share Define Who I Am. Away From The Boardroom, I Value Meaningful Conversations, New Perspectives, Time With The People Around Me, And The Moments That Make Life Memorable.Real Estate May Define What I Do, But The People I Meet And The Experiences I Share Define Who I Am. Away From The Boardroom, I Value Meaningful Conversations, New Perspectives, Time With The People Around Me, And The Moments That Make Life Memorable.Real Estate May Define What I Do, But The People I Meet And The Experiences I Share Define Who I Am. Away From The Boardroom, I Value Meaningful Conversations, New Perspectives, Time With The People Around Me, And The Moments That Make Life Memorable.";

export const personContent = {
  eyebrow: "About",
  title: [
    { text: "The " },
    { text: "Person", gold: true },
    { text: " Behind The " },
    { text: "Profession", gold: true },
  ],
  quote:
    "Beyond Property, Meetings, And Milestones, There’s A Person Driven By Curiosity, Connection, And A Genuine Appreciation For The People And Experiences That Make The Journey Meaningful.",
  paragraphs: [aboutParagraph, aboutParagraph],
};

export type TextSegment = { text: string; gold?: boolean };
