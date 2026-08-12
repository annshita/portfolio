import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { PROFILE, LINKS } from "../../data/portfolio";

const FLUID =
  "https://images.unsplash.com/photo-1657624332868-2159deacefa9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTJ8MHwxfHNlYXJjaHwyfHxhYnN0cmFjdCUyMHBhc3RlbCUyMHBpbmslMjBmbHVpZCUyMGdyYWRpZW50fGVufDB8fHx8MTc4NjQ1MzUwOHww&ixlib=rb-4.1.0&q=85";

const line = {
  hidden: { y: "110%" },
  visible: (i) => ({
    y: "0%",
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 + i * 0.15 },
  }),
};

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  // Multi-plane depth parallax transforms
  const orbY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const orbScale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const subY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const bgGlowY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative flex min-h-screen items-center overflow-hidden pt-24">
      {/* Background Parallax Orbs */}
      <motion.div style={{ y: orbY, scale: orbScale }} className="pointer-events-none absolute -right-24 top-10 h-[70vh] w-[70vh] md:right-0">
        <img src={FLUID} alt="" className="h-full w-full rounded-full object-cover opacity-70 blur-[2px]" />
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cream via-transparent to-transparent" />
      </motion.div>
      <motion.div style={{ y: bgGlowY }} className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-blush-200/40 blur-3xl" />

      {/* Main Foreground Content with Layered Parallax */}
      <motion.div style={{ opacity: fade }} className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-12">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          data-testid="hero-eyebrow"
          className="mb-6 text-xs uppercase tracking-[0.35em] text-blush-600"
        >
          {PROFILE.role}
        </motion.p>

        <motion.h1 style={{ y: textY }} data-testid="hero-name" className="font-serif text-[18vw] leading-[0.85] text-plum md:text-[13vw] lg:text-[11rem]">
          <span className="line-mask">
            <motion.span custom={0} variants={line} initial="hidden" animate="visible" className="block">
              {PROFILE.first}
            </motion.span>
          </span>
          <span className="line-mask">
            <motion.span custom={1} variants={line} initial="hidden" animate="visible" className="block italic text-blush-500">
              {PROFILE.last}
            </motion.span>
          </span>
        </motion.h1>

        <motion.p
          style={{ y: subY }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.9 }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-plum/70 md:text-xl"
        >
          {PROFILE.tagline}
        </motion.p>

        <motion.div
          style={{ y: subY }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.9 }}
          className="mt-10 flex flex-wrap items-center gap-5"
        >
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={`hero-link-${l.label.toLowerCase()}`}
              className="link-underline text-sm font-medium tracking-wide text-plum"
            >
              {l.label}
            </a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-blush-500"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </motion.div>
    </section>
  );
};
