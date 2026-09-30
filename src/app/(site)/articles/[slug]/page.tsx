import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { articles, getArticle, getRelatedArticles } from "@/data/articles";
import { siteConfig } from "@/config/site";
import { formatDate } from "@/lib/format";
import Container from "@/components/ui/Container";
import CalendarIcon from "@/components/ui/CalendarIcon";
import SideArticleCard from "@/components/articles/SideArticleCard";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps<"/articles/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/articles/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      url: `/articles/${article.slug}`,
      publishedTime: article.date,
      authors: [siteConfig.name],
      images: [{ url: article.image, alt: article.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  };
}

export default async function ArticleDetailPage({ params }: PageProps<"/articles/[slug]">) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const related = getRelatedArticles(slug, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: [article.image],
    datePublished: article.date,
    author: { "@type": "Person", name: siteConfig.name, url: siteConfig.url },
    mainEntityOfPage: `${siteConfig.url}/articles/${article.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      {/* Centred reading column */}
      <article className="bg-navy pt-4 pb-16 md:pt-6 md:pb-20">
        <Container>
          <div className="mx-auto max-w-[820px]">
            <Breadcrumbs
              backHref="/articles"
              items={[
                { label: "Home", href: "/" },
                { label: "Articles", href: "/articles" },
                { label: article.title },
              ]}
            />

            <div className="relative mt-6 aspect-[1.92] overflow-hidden md:mt-8 md:aspect-[1.7]">
              <Image
                src={article.image}
                alt={article.title}
                fill
                priority
                sizes="(min-width: 860px) 820px, 100vw"
                className="object-cover"
              />
            </div>

            <p className="mt-8 flex items-center gap-2 font-aeonik text-[15px] text-white/80 md:mt-10">
              <CalendarIcon className="size-4 text-gold" />
              <time dateTime={article.date}>{formatDate(article.date)}</time>
            </p>

            <h1 className="mt-3 font-bloom text-[28px] leading-[1.2] md:mt-4 md:text-[42px]">{article.title}</h1>

            <div className="mt-6 space-y-5 md:mt-8 md:space-y-6">
              {article.body.flat().map((p, i) => (
                <p key={i} className="font-aeonik text-base leading-[1.8] text-white/85 md:text-lg md:leading-[1.85]">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </article>

      {/* More articles */}
      <section aria-label="More articles" className="border-t border-white/10 bg-navy py-14 md:py-20">
        <Container>
          <h2 className="text-center font-serif text-[30px] leading-tight md:text-[42px]">
            More <span className="text-gold">Articles</span>
          </h2>
          <div className="mt-8 grid gap-4 md:mt-12 md:grid-cols-3">
            {related.map((a) => (
              <SideArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
