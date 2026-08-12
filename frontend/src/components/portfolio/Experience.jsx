import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { EXPERIENCE } from "../../data/portfolio";

const reveal = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 } }),
};

export const Experience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const sectionOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);
  const timelineY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <section ref={containerRef} id="experience" data-testid="experience-section" className="mx-auto max-w-7xl px-6 py-28 md:px-12 md:py-40">
      <motion.div
        style={{ opacity: sectionOpacity }}
        variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}
        className="mb-20"
      >
        <p className="mb-4 text-xs uppercase tracking-[0.35em] text-blush-600">(Experience)</p>
        <h2 className="font-serif text-5xl text-plum md:text-6xl">The journey so far</h2>
      </motion.div>

      <motion.div style={{ opacity: sectionOpacity, y: timelineY }} className="relative border-l border-blush-200 pl-8 md:pl-14">
        {EXPERIENCE.map((e, i) => (
          <motion.div
            key={i} custom={i} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}
            data-testid={`experience-item-${i}`}
            className="relative mb-16 last:mb-0"
          >
            <span className="absolute -left-[41px] top-2 h-4 w-4 rounded-full bg-blush-300 ring-4 ring-blush-100 md:-left-[65px]" />
            <p className="mb-2 text-xs uppercase tracking-widest text-blush-600">{e.period}</p>
            <h3 className="font-serif text-3xl text-plum md:text-4xl">{e.role}</h3>
            <p className="mb-5 text-lg text-blush-600">{e.company}</p>
            <ul className="space-y-3">
              {e.points.map((p, j) => (
                <li key={j} className="flex gap-3 text-plum/70">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blush-400" />
                  <span className="leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

