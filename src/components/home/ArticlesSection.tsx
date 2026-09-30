import Link from "next/link";
import { articles } from "@/data/articles";
import Container from "@/components/ui/Container";
import ArticleCard from "@/components/articles/ArticleCard";

/** Home page section: 9 cards on desktop, first 3 on mobile. */
export default function ArticlesSection() {
  const items = articles.slice(0, 9);

  return (
    <section id="articles" className="bg-navy pt-8 pb-16 md:pt-12 md:pb-24">
      <Container>
        <p className="text-center font-aeonik text-base text-gold md:hidden">My Expertise</p>
        <h2 className="mx-auto mt-3 max-w-[280px] text-center font-bloom text-[32px] leading-[1.15] md:mt-0 md:max-w-none md:text-5xl lg:text-[52px]">
          Where Experience <br className="md:hidden" />
          Meets <br className="hidden md:block" />
          <span className="text-gold">Opportunity</span>
        </h2>

        <div className="mt-8 grid gap-4 md:mt-14 md:grid-cols-2 lg:grid-cols-3">
          {items.map((a, i) => (
            <ArticleCard key={a.slug} article={a} className={i >= 3 ? "max-md:hidden" : ""} />
          ))}
        </div>

        <div className="mt-6 flex justify-center md:mt-7">
          <Link
            href="/articles"
            className="rounded-full bg-gold px-4 py-1.5 font-aeonik text-[13px] text-navy transition-opacity hover:opacity-90 md:px-6 md:py-3 md:text-[17px]"
          >
            <span className="md:hidden">View All</span>
            <span className="max-md:hidden">View More</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
