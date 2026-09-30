import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/data/articles";

export default function ArticleCard({ article, className = "" }: { article: Article; className?: string }) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className={`block min-w-0 bg-navy-soft p-4 md:p-6 ${className}`}
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
      <h3 title={article.title} className="mt-5 truncate font-bloom text-2xl leading-tight md:mt-5 md:text-[26px]">
        {article.title}
      </h3>
      <p className="mt-3 line-clamp-2 min-h-[3.3em] font-aeonik text-[15px] leading-[1.65] text-white/80 md:text-base">
        {article.excerpt}
      </p>
    </Link>
  );
}
