import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const SECTIONS = ["about", "skills", "experience", "projects", "contact"];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      data-testid="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled ? "glass border-b border-blush-200/50" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-12">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          data-testid="nav-logo"
          className="font-serif text-2xl italic text-plum"
        >
          Anshita<span className="text-blush-500">.</span>
        </button>

        <div className="hidden items-center gap-9 md:flex">
          {SECTIONS.map((s) => (
            <button
              key={s}
              onClick={() => go(s)}
              data-testid={`nav-${s}`}
              className="link-underline text-sm capitalize tracking-wide text-plum/70 hover:text-plum"
            >
              {s}
            </button>
          ))}
        </div>

        <button
          onClick={() => go("contact")}
          data-testid="nav-cta"
          className="hidden rounded-full bg-blush-200 px-6 py-2.5 text-sm font-medium text-plum transition-colors hover:bg-blush-300 active:scale-95 md:block"
        >
          Say hello
        </button>

        <button
          onClick={() => setOpen((o) => !o)}
          data-testid="nav-mobile-toggle"
          className="text-sm uppercase tracking-widest text-plum md:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="overflow-hidden border-t border-blush-200/50 glass md:hidden"
        >
          <div className="flex flex-col px-6 py-4">
            {SECTIONS.map((s) => (
              <button
                key={s}
                onClick={() => go(s)}
                data-testid={`nav-mobile-${s}`}
                className="py-3 text-left text-lg capitalize text-plum/80"
              >
                {s}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};
