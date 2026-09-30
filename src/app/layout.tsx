import type { Metadata, Viewport } from "next";
import { Figtree, Gilda_Display, Poppins } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import SplashScreen from "@/components/layout/SplashScreen";
import ScrollTopOnLoad from "@/components/layout/ScrollTopOnLoad";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins-src",
  subsets: ["latin"],
  weight: "400",
});

const gilda = Gilda_Display({
  variable: "--font-gilda",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.title, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/",
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#021122",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} ${gilda.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ScrollTopOnLoad />
        <SplashScreen />
        {children}
      </body>
    </html>
  );
}
