import { SIGNATURE_PATH, SIGNATURE_STROKES } from "./signaturePath";

const WRITE_START = 0.2; // s
const WRITE_SPAN = 1.6; // s — how long the "pen" takes to cross the signature

/**
 * Brand splash on every full page load: a gold pen stroke writes the RR
 * signature, it fills in gold, then the overlay fades out. Pure CSS (timing
 * in globals.css), so it shows from the very first paint. Client-side
 * navigation keeps the root layout mounted, so it doesn't replay per page.
 */
export default function SplashScreen() {
  return (
    <div className="splash fixed inset-0 z-[100] flex items-center justify-center bg-navy" aria-hidden>
      <svg viewBox="-10 -10 1028 627" className="w-[160px] overflow-visible md:w-[220px]">
        {/* faint white base */}
        <path d={SIGNATURE_PATH} fillRule="evenodd" className="fill-white/15" />

        {/* gold writing strokes — the first is the full outline, the rest are the inner loops */}
        {SIGNATURE_STROKES.map((d, i) => {
          const startX = Number(d.split(" ")[1]) || 0;
          const delay = i === 0 ? WRITE_START : WRITE_START + (WRITE_SPAN * Math.max(0, startX)) / 1008;
          return (
            <path
              key={i}
              d={d}
              pathLength={1}
              className={`splash-stroke fill-none stroke-gold ${i === 0 ? "splash-stroke-main" : ""}`}
              style={{ animationDelay: `${delay}s` }}
            />
          );
        })}

        {/* gold fill once written */}
        <path d={SIGNATURE_PATH} fillRule="evenodd" className="splash-fill fill-gold" />
      </svg>
    </div>
  );
}
