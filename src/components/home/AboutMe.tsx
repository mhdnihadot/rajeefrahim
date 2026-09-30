import Image from "next/image";
import Link from "next/link";
import { aboutMeContent as c } from "@/data/home";
import Container from "@/components/ui/Container";
import GoldText from "@/components/ui/GoldText";

/**
 * Mobile: heading → full-bleed photo → text → button.
 * Desktop: full-width photo with the copy overlaid on its lower-left.
 */
export default function AboutMe() {
  return (
    <section id="about-me" className="relative bg-navy pt-6 pb-10 md:py-0">
      {/* Heading (mobile sits above the photo; desktop is overlaid bottom-left) */}
      <Container className="md:absolute md:inset-x-0 md:bottom-[9%] md:z-10">
        <div className="md:max-w-[440px] lg:max-w-[600px]">
          <p className="font-aeonik text-[15px] text-gold md:text-base">{c.eyebrow}</p>
          <h2 className="mt-2 font-bloom text-[30px] leading-[1.15] md:mt-5 md:text-[34px] lg:text-[40px] lg:leading-[1.12]">
            <GoldText segments={c.title} />
          </h2>

          <div className="max-md:hidden">
            <p className="mt-4 font-aeonik text-base leading-[1.7] text-white/85 lg:max-w-[520px] lg:text-[17px]">{c.description}</p>
            <Link
              href={c.cta.href}
              className="mt-7 inline-block rounded-full bg-gold font-aeonik px-5 py-2 text-[15px] text-navy transition-opacity hover:opacity-90 lg:text-base"
            >
              {c.cta.label}
            </Link>
          </div>
        </div>
      </Container>

      {/* Photo: full-bleed on both; on desktop the copy sits over it */}
      <div className="relative mt-8 aspect-[1.43] w-full md:mt-0 md:aspect-[1.57]">
        <Image
          src={c.image.src}
          alt="Rajeef Rahim"
          fill
          sizes="100vw"
          className="object-cover object-center grayscale"
        />
        {/* Desktop: navy wash rising from the bottom-left so the overlaid copy stays readable */}
        <div
          aria-hidden
          className="absolute inset-0 hidden bg-[radial-gradient(ellipse_65%_75%_at_10%_100%,rgba(2,17,34,0.92)_0%,rgba(2,17,34,0.6)_45%,transparent_80%)] md:block"
        />
      </div>

      {/* Mobile copy below the photo */}
      <Container className="md:hidden">
        <p className="mt-8 font-aeonik text-[15px] leading-[1.7] text-white/85">{c.description}</p>
        <Link
          href={c.cta.href}
          className="mt-8 inline-block rounded-full bg-gold font-aeonik px-5 py-2 text-sm text-navy transition-opacity hover:opacity-90"
        >
          {c.cta.label}
        </Link>
      </Container>
    </section>
  );
}
