import Image from "next/image";
import Link from "next/link";
import { heroContent as c } from "@/data/home";
import Container from "@/components/ui/Container";
import GoldText from "@/components/ui/GoldText";
import SocialLinks from "@/components/ui/SocialLinks";

export default function Hero() {
  return (
    <section className="overflow-hidden bg-navy pb-16 md:pb-24">
      <Container className="grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_320px] md:gap-6 md:pt-20 lg:grid-cols-[minmax(0,1fr)_380px] xl:grid-cols-[minmax(0,1fr)_400px] xl:pt-28">
        {/* Photo — first on mobile, right column on desktop */}
        <div className="relative mx-auto w-full max-w-[420px] md:order-2 md:max-w-none">
          <div
            aria-hidden
            className="absolute inset-[-8%] bg-[radial-gradient(closest-side,#0a2a52_0%,transparent_100%)] opacity-40"
          />
          <Image
            src={c.image.src}
            alt={c.name}
            width={c.image.width}
            height={c.image.height}
            priority
            sizes="(min-width: 1280px) 400px, (min-width: 768px) 380px, 420px"
            className="relative aspect-[4/5] w-full object-cover object-top [mask-composite:intersect] [mask-image:linear-gradient(to_right,transparent,#000_18%,#000_82%,transparent),linear-gradient(to_bottom,transparent,#000_12%,#000_78%,transparent)] md:aspect-[4/5]"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col md:order-1">
          <h1 className="font-serif text-[34px] leading-tight md:text-[52px] lg:text-[60px] xl:text-[72px] xl:leading-[1.1]">
            {c.name}
          </h1>

          <p className="mt-3 font-serif text-[23px] leading-[1.15] md:mt-6 md:text-[34px] lg:text-[42px] xl:mt-8 xl:text-[48px] xl:leading-[1.12]">
            {c.tagline.map((line, i) => (
              <span key={i} className="block xl:whitespace-nowrap">
                <GoldText segments={line} />
              </span>
            ))}
          </p>

          <p className="mt-5 max-w-md text-base font-light text-white/80 md:mt-8 md:text-lg">
            {c.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3 md:mt-7 md:gap-4">
            <Link
              href={c.primaryCta.href}
              className="rounded-full border border-white px-5 py-2.5 text-[15px] text-white transition-colors hover:border-gold hover:text-gold md:text-[17px]"
            >
              {c.primaryCta.label}
            </Link>
            <Link
              href={c.secondaryCta.href}
              className="rounded-full bg-gold px-5 py-2.5 text-[15px] text-navy transition-opacity hover:opacity-90 md:text-[17px]"
            >
              {c.secondaryCta.label}
            </Link>
          </div>

          <div className="mt-12 flex flex-col items-start gap-5 md:mt-24 md:items-end md:gap-4 md:pr-4">
            <p className="text-base font-light text-white/80 md:text-[17px]">{c.socialsLabel}</p>
            <SocialLinks variant="circle" className="gap-9 md:gap-5" />
          </div>
        </div>
      </Container>
    </section>
  );
}
