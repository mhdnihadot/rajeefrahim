import Hero from "@/components/home/Hero";
import AboutMe from "@/components/home/AboutMe";
import PersonBehind from "@/components/home/PersonBehind";
import ArticlesSection from "@/components/home/ArticlesSection";
import { siteConfig } from "@/config/site";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  url: siteConfig.url,
  image: `${siteConfig.url}/images/rajeef-rahim.webp`,
  jobTitle: "Real Estate Professional",
  description: siteConfig.description,
  address: { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" },
  sameAs: Object.values(siteConfig.socials).filter((u) => u.startsWith("http")),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
      />
      <Hero />
      <AboutMe />
      <PersonBehind />
      <ArticlesSection />
    </>
  );
}
