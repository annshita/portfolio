import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PROFILE, MANIFESTO, LINKS } from "../../data/portfolio";

const reveal = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 },
  }),
};

const WORKSPACE =
  "https://images.unsplash.com/photo-1659050818222-5532a7829571?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNTl8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwbWluaW1hbGlzdCUyMHRlY2glMjB3b3Jrc3BhY2UlMjBwaW5rfGVufDB8fHx8MTc4NjQ1MzMzMXww&ixlib=rb-4.1.0&q=85";

export const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const sectionOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["15%", "-15%"]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1.04, 0.96]);
  const textY = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);

  return (
    <section ref={containerRef} id="about" data-testid="about-section" className="relative mx-auto max-w-7xl px-6 py-28 md:px-12 md:py-40">
      <motion.p
        style={{ opacity: sectionOpacity }}
        variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}
        className="mb-14 text-xs uppercase tracking-[0.35em] text-blush-600"
      >
        (About)
      </motion.p>

      <motion.div style={{ opacity: sectionOpacity }} className="grid gap-16 lg:grid-cols-12">
        <motion.div style={{ y: textY }} className="lg:col-span-7">
          {PROFILE.bio.map((p, i) => (
            <motion.p
              key={i} custom={i} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}
              className="mb-8 font-serif text-3xl leading-[1.3] text-plum md:text-4xl"
            >
              {p}
            </motion.p>
          ))}

          <div className="mt-12 flex flex-wrap gap-3">
            {LINKS.map((l, i) => (
              <motion.a
                key={l.label} custom={i} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}
                href={l.url} target="_blank" rel="noopener noreferrer"
                data-testid={`about-link-${l.label.toLowerCase()}`}
                className="rounded-full border border-blush-200 px-5 py-2.5 text-sm text-plum transition-colors hover:bg-blush-100"
              >
                {l.label} <span className="text-blush-500">↗</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <div className="lg:col-span-5">
          <motion.div
            style={{ y: imageY, scale: imageScale }}
            variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}
            className="overflow-hidden rounded-[2rem] border border-blush-200/60 shadow-lg shadow-blush-200/20"
          >
            <img src={WORKSPACE} alt="Workspace" className="h-64 w-full object-cover md:h-72" />
          </motion.div>

          <div className="mt-10 space-y-9">
            {MANIFESTO.map((m, i) => (
              <motion.div
                key={m.n} custom={i} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}
                className="border-l-2 border-blush-300 pl-5"
              >
                <span className="font-serif text-sm text-blush-500">{m.n}</span>
                <h3 className="mt-1 text-lg font-medium text-plum">{m.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-plum/60">{m.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

