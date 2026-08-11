import Marquee from "react-fast-marquee";
import { MARQUEE_WORDS } from "../../data/portfolio";

export const EditorialMarquee = () => (
  <section aria-hidden className="border-y border-blush-200/60 bg-blush-100/50 py-8">
    <Marquee speed={30} gradient={false} className="overflow-hidden">
      {MARQUEE_WORDS.map((w, i) => (
        <span key={i} className="mx-16 flex items-center gap-16 font-serif text-4xl italic text-plum/80 md:text-6xl">
          {w}
          <span className="text-blush-400">✦</span>
        </span>
      ))}
    </Marquee>
  </section>
);
