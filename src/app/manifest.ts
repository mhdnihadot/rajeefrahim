import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "Rajeef Rahim",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#001223",
    theme_color: "#001223",
    icons: [{ src: "/icon.png", sizes: "512x512", type: "image/png" }],
  };
}
