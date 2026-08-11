import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "sonner";
import { PROFILE, LINKS } from "../../data/portfolio";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const reveal = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 } }),
};

const Field = ({ label, textarea, ...props }) => (
  <label className="block">
    <span className="mb-2 block text-xs uppercase tracking-widest text-blush-600">{label}</span>
    {textarea ? (
      <textarea
        {...props}
        rows={4}
        className="w-full resize-none border-b border-blush-200 bg-transparent py-3 text-lg text-plum outline-none transition-colors placeholder:text-plum/30 focus:border-blush-500"
      />
    ) : (
      <input
        {...props}
        className="w-full border-b border-blush-200 bg-transparent py-3 text-lg text-plum outline-none transition-colors placeholder:text-plum/30 focus:border-blush-500"
      />
    )}
  </label>
);

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all the fields.");
      return;
    }
    setLoading(true);
    try {
      const { data } = await axios.post(`${API}/contact`, form);
      toast.success(data.message || "Message sent!");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      toast.error(err.response?.data?.detail || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" data-testid="contact-section" className="mx-auto max-w-7xl px-6 py-28 md:px-12 md:py-40">
      <div className="grid gap-16 lg:grid-cols-12">
        <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-5">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-blush-600">(Contact)</p>
          <h2 className="font-serif text-5xl leading-[1.05] text-plum md:text-7xl">
            Let's make<br /><span className="italic text-blush-500">something</span> lovely
          </h2>
          <p className="mt-8 max-w-sm leading-relaxed text-plum/60">
            Have a role, a research idea, or just want to say hi? My inbox is always open.
          </p>
          <a href={`mailto:${PROFILE.email}`} data-testid="contact-email-link" className="link-underline mt-8 inline-block text-lg text-plum">
            {PROFILE.email}
          </a>
          <div className="mt-6 flex gap-5">
            {LINKS.map((l) => (
              <a key={l.label} href={l.url} target="_blank" rel="noopener noreferrer"
                data-testid={`contact-link-${l.label.toLowerCase()}`}
                className="link-underline text-sm text-plum/70 hover:text-plum">
                {l.label}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.form
          onSubmit={submit} variants={reveal} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
          data-testid="contact-form"
          className="space-y-8 lg:col-span-7"
        >
          <div className="grid gap-8 md:grid-cols-2">
            <Field label="Your name" data-testid="contact-name" placeholder="Anshita Verma"
              value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            <Field label="Email" type="email" data-testid="contact-email" placeholder="you@email.com"
              value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          </div>
          <Field label="Message" textarea data-testid="contact-message" placeholder="Tell me a little something..."
            value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
          <button
            type="submit" disabled={loading} data-testid="contact-submit"
            className="rounded-full bg-plum px-9 py-4 text-sm font-medium tracking-wide text-cream transition-colors hover:bg-blush-600 active:scale-95 disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send message →"}
          </button>
        </motion.form>
      </div>
    </section>
  );
};
