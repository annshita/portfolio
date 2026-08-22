import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { PROJECTS, ACHIEVEMENTS } from "../../data/portfolio";

const reveal = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 } }),
};

const GithubIcon = ({ className = "h-4 w-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      clipRule="evenodd"
    />
  </svg>
);

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
          {PROJECTS.map((p, i) => {
            const githubUrl = p.github || p.githubUrl || p.url;
            const liveUrl = p.live || p.liveUrl || p.demo || p.demoUrl;

            return (
              <motion.div
                key={p.title}
                custom={i}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                data-testid={`project-item-${i}`}
                className="group grid gap-6 rounded-[2rem] border border-blush-200/60 bg-white/70 p-8 backdrop-blur-sm transition-all hover:border-blush-400 hover:shadow-lg md:grid-cols-12 md:items-center md:p-10"
              >
                <div className="md:col-span-2">
                  <span className="font-serif text-5xl italic text-blush-300 transition-colors group-hover:text-blush-400">0{i + 1}</span>
                </div>
                <div className="md:col-span-7">
                  <h3 className="mb-1 font-serif text-3xl text-plum transition-colors group-hover:text-blush-600 md:text-4xl">{p.title}</h3>
                  <p className="mb-3 text-xs uppercase tracking-widest text-blush-600">{p.stack}</p>
                  <p className="leading-relaxed text-plum/70">{p.desc}</p>
                </div>
                <div className="flex flex-wrap items-center gap-3 md:col-span-3 md:justify-end">
                  {liveUrl && (
                    <a
                      href={liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-plum px-4 py-2 text-xs font-medium uppercase tracking-wider text-cream shadow-sm transition-all hover:bg-blush-600 hover:shadow-md"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {githubUrl && (
                    <a
                      href={githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-blush-300/80 bg-white/90 px-4 py-2 text-xs font-medium uppercase tracking-wider text-plum transition-all hover:border-blush-500 hover:bg-blush-100 hover:text-blush-700"
                    >
                      <GithubIcon className="h-3.5 w-3.5" />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
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

