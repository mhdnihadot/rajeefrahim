import type { TextSegment } from "@/data/home";

/** Renders a list of text segments, colouring the `gold` ones with the accent. */
export default function GoldText({ segments }: { segments: TextSegment[] }) {
  return (
    <>
      {segments.map((s, i) => (
        <span key={i} className={s.gold ? "text-gold" : undefined}>
          {s.text}
        </span>
      ))}
    </>
  );
}
