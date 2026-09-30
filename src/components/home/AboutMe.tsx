import Image from "next/image";
import Link from "next/link";
import { aboutMeContent as c } from "@/data/home";
import Container from "@/components/ui/Container";
import GoldText from "@/components/ui/GoldText";

/**
 * Mobile: heading → full-bleed photo → text → button.
 * Desktop: copy on the left, photo on the right with a soft left-edge fade.
 */
export default function AboutMe() {
  return (
    <section id="about-me" className="relative bg-navy pt-12 pb-10 md:py-0">
      {/* Heading (mobile sits above the photo; desktop is overlaid) */}
      <Container className="md:absolute md:inset-x-0 md:top-1/2 md:z-10 md:-translate-y-1/2">
        <div className="md:max-w-[440px] lg:max-w-[500px]">
          <p className="text-[15px] text-gold md:text-[17px]">{c.eyebrow}</p>
          <h2 className="mt-2 font-serif text-[30px] leading-[1.15] md:mt-4 md:text-[44px] lg:text-[52px]">
            <GoldText segments={c.title} />
          </h2>

          <div className="max-md:hidden">
            <p className="mt-6 text-lg leading-[1.75] text-white/85">{c.description}</p>
            <Link
              href={c.cta.href}
              className="mt-8 inline-block rounded-full bg-gold px-5 py-2.5 text-[15px] text-navy transition-opacity hover:opacity-90 md:text-[17px]"
            >
              {c.cta.label}
            </Link>
          </div>
        </div>
      </Container>

      {/* Photo: full-bleed on mobile; right-hand side on desktop so the person is fully visible */}
      <div className="relative mt-8 aspect-[1.43] w-full md:mt-0 md:ml-auto md:aspect-auto md:h-[640px] md:w-[62%] lg:h-[720px]">
        <Image
          src={c.image.src}
          alt="Rajeef Rahim"
          fill
          sizes="(min-width: 768px) 62vw, 100vw"
          className="object-cover object-center grayscale"
        />
        {/* Desktop: soft fade on the photo's left edge only, blending into the copy side */}
        <div
          aria-hidden
          className="absolute inset-y-0 left-0 hidden w-1/4 bg-gradient-to-r from-navy to-transparent md:block"
        />
        <div aria-hidden className="absolute inset-x-0 top-0 hidden h-12 bg-gradient-to-b from-navy to-transparent md:block" />
        <div aria-hidden className="absolute inset-x-0 bottom-0 hidden h-12 bg-gradient-to-t from-navy to-transparent md:block" />
      </div>

      {/* Mobile copy below the photo */}
      <Container className="md:hidden">
        <p className="mt-8 text-[15px] leading-[1.7] text-white/85">{c.description}</p>
        <Link
          href={c.cta.href}
          className="mt-8 inline-block rounded-full bg-gold px-5 py-2 text-sm text-navy transition-opacity hover:opacity-90"
        >
          {c.cta.label}
        </Link>
      </Container>
    </section>
  );
}
