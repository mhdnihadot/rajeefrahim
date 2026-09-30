import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Hosts for the static dummy article images — replace when real uploads exist.
    remotePatterns: [
      { protocol: "https", hostname: "www.imtilakgroup.com" },
      { protocol: "https", hostname: "manaramagazine.org" },
      { protocol: "https", hostname: "www.reuters.com" },
    ],
  },
};

export default nextConfig;
