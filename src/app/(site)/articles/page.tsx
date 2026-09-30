import type { Metadata } from "next";
import { articles } from "@/data/articles";
import Container from "@/components/ui/Container";
import ArticleCard from "@/components/articles/ArticleCard";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Insights on Dubai real estate, property investment, developments and investor relations by Rajeef Rahim.",
  alternates: { canonical: "/articles" },
};

export default function ArticlesPage() {
  return (
    <section className="bg-navy pt-4 pb-16 md:pt-6 md:pb-24">
      <Container>
        <Breadcrumbs backHref="/" items={[{ label: "Home", href: "/" }, { label: "Articles" }]} />

        <p className="mt-10 text-center font-aeonik text-base text-gold md:mt-12 md:text-[17px]">Articles</p>
        <h1 className="mx-auto mt-3 max-w-[280px] text-center font-bloom text-[32px] leading-[1.15] md:max-w-none md:text-5xl lg:text-[52px]">
          Where Experience <br className="md:hidden" />
          Meets <br className="hidden md:block" />
          <span className="text-gold">Opportunity</span>
        </h1>

        <div className="mt-8 grid gap-4 md:mt-14 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </Container>
    </section>
  );
}
