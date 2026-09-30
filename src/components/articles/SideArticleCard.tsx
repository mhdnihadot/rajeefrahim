import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/data/articles";
import { formatDate } from "@/lib/format";
import CalendarIcon from "@/components/ui/CalendarIcon";

export default function SideArticleCard({ article }: { article: Article }) {
  return (
    <Link href={`/articles/${article.slug}`} className="block min-w-0 bg-navy-soft p-4 md:p-5">
      <div className="relative aspect-[1.53] overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover"
        />
      </div>
      <h3 title={article.title} className="mt-5 truncate font-bloom text-2xl leading-tight">
        {article.title}
      </h3>
      <p className="mt-2 flex items-center gap-2 font-aeonik text-sm text-white/75">
        <CalendarIcon className="size-4 text-gold" />
        <time dateTime={article.date}>{formatDate(article.date)}</time>
      </p>
      <p className="mt-3 line-clamp-2 min-h-[3.3em] font-aeonik text-[15px] leading-[1.65] text-white/80">{article.excerpt}</p>
    </Link>
  );
}
