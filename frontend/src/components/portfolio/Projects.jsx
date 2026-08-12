import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS, ACHIEVEMENTS } from "../../data/portfolio";

const reveal = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 } }),
};

export const Projects = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const sectionOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);
  const headerY = useTransform(scrollYProgress, [0, 1], ["8%", "-15%"]);
  const cardsY = useTransform(scrollYProgress, [0, 1], ["10%", "-5%"]);

  return (
    <section ref={containerRef} id="projects" data-testid="projects-section" className="bg-blush-100/40 py-28 md:py-40">
      <motion.div style={{ opacity: sectionOpacity }} className="mx-auto max-w-7xl px-6 md:px-12">
        <motion.div style={{ y: headerY }} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} className="mb-20">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-blush-600">(Selected Work)</p>
          <h2 className="font-serif text-5xl text-plum md:text-6xl">Projects & research</h2>
        </motion.div>

        <motion.div style={{ y: cardsY }} className="space-y-6">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.title} custom={i} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}
              data-testid={`project-item-${i}`}
              className="group grid cursor-default gap-4 rounded-[2rem] border border-blush-200/60 bg-white/70 p-8 backdrop-blur-sm transition-colors hover:border-blush-400 md:grid-cols-12 md:items-center md:p-10"
            >
              <div className="md:col-span-3">
                <span className="font-serif text-5xl italic text-blush-300">0{i + 1}</span>
              </div>
              <div className="md:col-span-8">
                <div className="mb-2 flex items-center gap-3">
                  <h3 className="font-serif text-3xl text-plum md:text-4xl">{p.title}</h3>
                  <ArrowUpRight className="h-6 w-6 text-blush-400 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                <p className="mb-3 text-xs uppercase tracking-widest text-blush-600">{p.stack}</p>
                <p className="leading-relaxed text-plum/70">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} className="mt-24">
          <h3 className="mb-10 font-serif text-3xl italic text-plum">Honours & achievements</h3>
          <div className="grid gap-5 md:grid-cols-2">
            {ACHIEVEMENTS.map((a, i) => (
              <motion.div
                key={i} custom={i} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}
                className="flex gap-4 rounded-2xl bg-white/60 p-6 ring-1 ring-blush-200/50"
              >
                <span className="font-serif text-2xl text-blush-400">✦</span>
                <p className="text-plum/75">{a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

