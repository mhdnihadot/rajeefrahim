import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import SocialLinks from "@/components/ui/SocialLinks";
import CurrentYear from "@/components/ui/CurrentYear";

export default function Footer() {
  return (
    <footer id="contact" className="bg-black pt-12 pb-8 md:pt-12 md:pb-8">
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

        <SocialLinks className="mt-7 gap-9 md:gap-10" iconClassName="size-5" />

        {/* Mobile: two left-aligned columns (3 + 3) at fixed offsets. Desktop: one centred row. */}
        <nav aria-label="Footer" className="mt-12 w-full md:mt-9 md:w-auto">
          <ul className="grid grid-flow-col grid-cols-2 grid-rows-3 gap-y-5 pl-[33px] min-[360px]:grid-cols-[164px_1fr] md:flex md:flex-wrap md:justify-center md:gap-x-10 md:gap-y-3 md:pl-0">
            {siteConfig.footerLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="font-poppins text-sm text-white/70 transition-colors hover:text-gold md:text-base"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <p className="mt-8 text-center font-poppins text-[11px] font-normal text-balance text-white/60 min-[360px]:text-xs md:text-sm">
          Copyright ⓒ <CurrentYear /> rajeefrahim.com . All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
