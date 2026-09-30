import { personContent as c } from "@/data/home";
import Container from "@/components/ui/Container";
import GoldText from "@/components/ui/GoldText";

export default function PersonBehind() {
  return (
    <section id="about" className="scroll-mt-8 bg-navy py-16 md:py-20">
      <Container>
        <p className="text-center text-base text-gold md:text-left md:text-[17px]">{c.eyebrow}</p>

        <h2 className="mx-auto mt-3 max-w-[300px] text-center font-serif text-[32px] leading-[1.15] md:mx-0 md:mt-6 md:max-w-none md:text-left md:text-5xl lg:text-[52px]">
          <GoldText segments={c.title} />
        </h2>

        <blockquote className="mt-10 border-l-4 border-gold bg-navy-soft px-5 py-6 text-base leading-[1.7] text-white/85 md:mt-7 md:px-8 md:py-7 md:text-lg">
          {c.quote}
        </blockquote>

        <div className="mt-10 space-y-8 md:mt-12 md:space-y-8">
          {c.paragraphs.map((p, i) => (
            <p key={i} className="text-base leading-[1.75] text-white/80 md:text-[17px] md:leading-[1.8]">
              {p}
            </p>
          ))}
        </div>
      </Container>
    </section>
  );
}
