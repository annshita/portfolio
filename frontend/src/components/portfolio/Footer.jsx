import { PROFILE, LINKS } from "../../data/portfolio";

export const Footer = () => (
  <footer data-testid="footer" className="border-t border-blush-200/60 bg-cream">
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-12 md:flex-row md:px-12">
      <p className="font-serif text-2xl italic text-plum">{PROFILE.name}<span className="text-blush-500">.</span></p>
      <div className="flex gap-6">
        {LINKS.map((l) => (
          <a key={l.label} href={l.url} target="_blank" rel="noopener noreferrer"
            className="link-underline text-sm text-plum/60 hover:text-plum">
            {l.label}
          </a>
        ))}
      </div>
      <p className="text-xs text-plum/40">© {new Date().getFullYear()} · Made with a little pink magic</p>
    </div>
  </footer>
);
