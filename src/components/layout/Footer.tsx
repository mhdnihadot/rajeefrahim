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

        {/* Mobile: two rows of three, aligned in columns and centred. Desktop: one centred row. */}
        <nav aria-label="Footer" className="mt-10 md:mt-9">
          <ul className="grid grid-cols-[repeat(3,auto)] gap-x-6 gap-y-5 min-[360px]:gap-x-9 md:flex md:flex-wrap md:justify-center md:gap-x-10 md:gap-y-3">
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
