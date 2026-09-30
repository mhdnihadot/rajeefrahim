import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/data/articles";

export default function ArticleCard({ article, className = "" }: { article: Article; className?: string }) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className={`block bg-navy-soft p-4 md:p-6 ${className}`}
    >
      <div className="relative aspect-[1.84] overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover"
        />
      </div>
      <h3 className="mt-5 font-serif text-2xl leading-tight md:mt-5 md:text-[26px]">{article.title}</h3>
      <p className="mt-3 text-[15px] leading-[1.65] text-white/80 md:text-base">
        {article.excerpt}
      </p>
    </Link>
  );
}
