import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import SocialLinks from "@/components/ui/SocialLinks";

export default function Footer() {
  return (
    <footer id="contact" className="bg-black pt-16 pb-10 md:pt-12 md:pb-8">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center px-6 md:px-5">
        <Link href="/" aria-label={siteConfig.name}>
          <Image
            src="/images/logo-rr.png"
            alt={siteConfig.name}
            width={1008}
            height={607}
            className="h-auto w-[68px] md:w-[72px]"
          />
        </Link>

        <SocialLinks className="mt-10 gap-10 md:mt-7 md:gap-10" iconClassName="size-5" />

        {/* Mobile: two left-aligned columns (3 + 3). Desktop: one centred row. */}
        <nav aria-label="Footer" className="mt-12 w-full md:mt-9 md:w-auto">
          <ul className="grid grid-flow-col grid-cols-2 grid-rows-3 gap-y-6 pl-5 min-[375px]:grid-cols-[179px_1fr] md:flex md:flex-wrap md:justify-center md:gap-x-10 md:gap-y-3 md:pl-0">
            {siteConfig.footerLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-[15px] text-white/70 transition-colors hover:text-gold md:text-base"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <p className="mt-6 text-center text-xs text-white/60 md:mt-8 md:text-sm">
          © {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
