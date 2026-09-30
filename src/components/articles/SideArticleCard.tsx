import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/data/articles";
import { formatDate } from "@/lib/format";
import CalendarIcon from "@/components/ui/CalendarIcon";

export default function SideArticleCard({ article }: { article: Article }) {
  return (
    <Link href={`/articles/${article.slug}`} className="block bg-navy-soft p-4 md:p-5">
      <div className="relative aspect-[1.53] overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover"
        />
      </div>
      <h3 className="mt-5 font-serif text-2xl leading-tight">{article.title}</h3>
      <p className="mt-2 flex items-center gap-2 text-sm text-white/75">
        <CalendarIcon className="size-4 text-gold" />
        <time dateTime={article.date}>{formatDate(article.date)}</time>
      </p>
      <p className="mt-3 text-[15px] leading-[1.65] text-white/80">{article.excerpt}</p>
    </Link>
  );
}
