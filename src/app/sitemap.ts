import type { MetadataRoute } from "next";
import { articles } from "@/data/articles";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteConfig.url, changeFrequency: "monthly", priority: 1 },
    { url: `${siteConfig.url}/articles`, changeFrequency: "weekly", priority: 0.8 },
    ...articles.map((a) => ({
      url: `${siteConfig.url}/articles/${a.slug}`,
      lastModified: a.date,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
