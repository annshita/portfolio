import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Code2, BrainCircuit, Wrench } from "lucide-react";
import { SKILLS } from "../../data/portfolio";

const reveal = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 } }),
};

const Chip = ({ children, i }) => (
  <motion.span
    custom={i} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}
    className="rounded-full bg-cream px-4 py-2 text-sm text-plum/80 ring-1 ring-blush-200/70"
  >
    {children}
  </motion.span>
);

export const Skills = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const sectionOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);
  const cardY1 = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const cardY2 = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const cardY3 = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);

  return (
    <section ref={containerRef} id="skills" data-testid="skills-section" className="mx-auto max-w-7xl px-6 py-28 md:px-12 md:py-40">
      <motion.div
        style={{ opacity: sectionOpacity }}
        variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}
        className="mb-16 flex items-end justify-between"
      >
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-blush-600">(Skills)</p>
          <h2 className="font-serif text-5xl text-plum md:text-6xl">The toolkit</h2>
        </div>
      </motion.div>

      <motion.div style={{ opacity: sectionOpacity }} className="grid gap-6 md:grid-cols-12">
        <motion.div style={{ y: cardY1 }} variants={reveal} custom={0} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}
          className="rounded-[2rem] bg-blush-200/40 p-8 md:col-span-5 md:p-10">
          <Code2 className="mb-6 h-7 w-7 text-blush-600" />
          <h3 className="mb-5 font-serif text-2xl italic text-plum">Languages</h3>
          <div className="flex flex-wrap gap-3">
            {SKILLS.languages.map((s, i) => <Chip key={s} i={i}>{s}</Chip>)}
          </div>
        </motion.div>

        <motion.div style={{ y: cardY2 }} variants={reveal} custom={1} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}
          className="rounded-[2rem] bg-cream p-8 ring-1 ring-blush-200/60 md:col-span-7 md:p-10">
          <Wrench className="mb-6 h-7 w-7 text-blush-600" />
          <h3 className="mb-5 font-serif text-2xl italic text-plum">Tools and Frameworks</h3>
          <div className="flex flex-wrap gap-3">
            {SKILLS.tools.map((s, i) => <Chip key={s} i={i}>{s}</Chip>)}
          </div>
        </motion.div>

        <motion.div style={{ y: cardY3 }} variants={reveal} custom={2} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}
          className="rounded-[2rem] bg-plum p-8 md:col-span-12 md:p-10">
          <BrainCircuit className="mb-6 h-7 w-7 text-blush-300" />
          <h3 className="mb-5 font-serif text-2xl italic text-blush-100">Focus areas</h3>
          <div className="flex flex-wrap gap-3">
            {SKILLS.focus.map((s, i) => (
              <motion.span key={s} custom={i} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}
                className="rounded-full bg-white/10 px-4 py-2 text-sm text-blush-100 ring-1 ring-white/15">
                {s}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

