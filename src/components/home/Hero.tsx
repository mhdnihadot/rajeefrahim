import Image from "next/image";
import Link from "next/link";
import { heroContent as c } from "@/data/home";
import Container from "@/components/ui/Container";
import GoldText from "@/components/ui/GoldText";
import SocialLinks from "@/components/ui/SocialLinks";

export default function Hero() {
  return (
    <section className="overflow-hidden bg-navy pb-8 md:pb-24">
      <Container className="grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_300px] md:gap-6 md:pt-12 lg:grid-cols-[minmax(0,1fr)_360px] xl:grid-cols-[minmax(0,1fr)_420px] xl:pt-16">
        {/* Photo — full 2:3 portrait (head to hands). First on mobile; right column on
            desktop, top aligned with the name and nudged past the content edge. */}
        <div className="relative mx-auto w-full max-w-[345px] md:order-2 md:max-w-none md:w-full md:self-start xl:mt-8 xl:translate-x-16 min-[1440px]:translate-x-24">
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
            sizes="(min-width: 1280px) 420px, (min-width: 1024px) 360px, 345px"
            className="relative aspect-[5/6] w-full object-cover object-center md:aspect-[2/3] md:object-top [mask-composite:intersect] [mask-image:linear-gradient(to_right,transparent,#000_14%,#000_86%,transparent),linear-gradient(to_bottom,transparent,#000_8%,#000_86%,transparent)]"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col md:order-1">
          {/* Name is set in the design's display font, supplied as an image */}
          <h1>
            <Image
              src="/images/name-rajeef-rahim.webp"
              alt={c.name}
              width={1647}
              height={282}
              priority
              sizes="(min-width: 1280px) 411px, (min-width: 1024px) 340px, (min-width: 768px) 300px, 176px"
              className="h-auto w-[176px] md:w-[300px] lg:w-[340px] xl:w-[411px]"
            />
          </h1>

          <p className="mt-3 font-bloom text-[23px] leading-[1.15] md:mt-6 md:text-[34px] lg:text-[42px] xl:mt-8 xl:text-[48px] xl:leading-[1.12]">
            {c.tagline.map((line, i) => (
              <span key={i} className="block xl:whitespace-nowrap">
                <GoldText segments={line} />
              </span>
            ))}
          </p>

          <p className="mt-5 font-aeonik text-base font-light text-white/80 md:mt-8 md:text-lg lg:whitespace-nowrap">
            {c.description}
          </p>

          <div className="mt-8 flex gap-2 min-[380px]:gap-2.5 md:mt-7 md:gap-4">
            <Link
              href={c.primaryCta.href}
              className="rounded-full border border-white px-3 py-2.5 font-aeonik text-[13px] whitespace-nowrap min-[350px]:px-4 min-[350px]:text-sm text-white min-[380px]:px-5 min-[380px]:text-[15px] transition-colors hover:border-gold hover:text-gold md:text-[17px]"
            >
              {c.primaryCta.label}
            </Link>
            <Link
              href={c.secondaryCta.href}
              className="rounded-full bg-gold px-3 py-2.5 font-aeonik text-[13px] whitespace-nowrap min-[350px]:px-4 min-[350px]:text-sm text-navy min-[380px]:px-5 min-[380px]:text-[15px] transition-opacity hover:opacity-90 md:text-[17px]"
            >
              {c.secondaryCta.label}
            </Link>
          </div>

          <div className="mt-12 flex flex-col items-start gap-5 md:mt-24 md:items-end md:gap-4 md:pr-4">
            <p className="font-aeonik text-base font-light text-white/80 md:text-[17px]">{c.socialsLabel}</p>
            <SocialLinks variant="circle" className="gap-4 md:gap-5" />
          </div>
        </div>
      </Container>
    </section>
  );
}
