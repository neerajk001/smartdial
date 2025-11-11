// footer.jsx
import React from "react";
import { motion } from "framer-motion";

const links = {
  Product: ["Overview", "Pricing", "Changelog", "Status"],
  Company: ["About", "Careers", "Press", "Contact"],
  Resources: ["Docs", "Guides", "Blog", "Support"],
  Legal: ["Privacy", "Terms", "Security", "DPA"],
};

const Footer = () => {
  return (
    <footer className="relative isolate overflow-hidden bg-slate-950 text-slate-300">
      {/* background grid + glow */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:22px_22px]"
      />
      <div className="pointer-events-none absolute -top-20 left-1/2 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 py-14">
        {/* Top row */}
        <div className="grid gap-10 md:grid-cols-5">
          {/* Brand + newsletter */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-white" />
              <span className="text-lg font-semibold text-white">Smart Dial</span>
            </div>
            <p className="mt-4 text-sm text-slate-400">
              Modern telecalling and lead management to help teams connect faster and close more.
            </p>

            <motion.form
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              onSubmit={(e) => e.preventDefault()}
              className="mt-5 flex max-w-md items-center gap-2"
            >
              <input
                type="email"
                placeholder="Work email"
                className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-slate-400 outline-none focus:border-white/30"
              />
              <button
                type="submit"
                className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:brightness-95"
              >
                Subscribe
              </button>
            </motion.form>

            <div className="mt-4 flex items-center gap-3 text-xs text-slate-400">
              <span>No spam. Unsubscribe anytime.</span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <h4 className="text-sm font-medium text-white">{section}</h4>
              <ul className="mt-3 space-y-2 text-sm">
                {items.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-slate-300 transition hover:text-white"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-8 h-px w-full bg-white/10" />

        {/* Bottom row */}
        <div className="flex flex-col items-center justify-between gap-4 text-xs text-slate-400 md:flex-row">
          <p>© {new Date().getFullYear()} Smart Dial. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Twitter" className="hover:text-white">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d="M22 5.8c-.7.3-1.4.5-2.2.6.8-.5 1.3-1.2 1.6-2.1-.8.5-1.7.8-2.6 1-1.6-1.8-4.4-.8-4.6 1.6-.1.4 0 .8.1 1.2C10.1 8 6.6 6.2 4.3 3.5c-.9 1.6-.5 3.7 1 4.8-.6 0-1.2-.2-1.7-.5 0 1.8 1.2 3.4 3 3.8-.5.1-1 .2-1.5.1.4 1.5 1.9 2.6 3.5 2.7-1.4 1.1-3.1 1.6-4.8 1.4 1.6 1 3.4 1.6 5.3 1.6 6.4 0 10-5.4 9.8-10.3.7-.5 1.3-1.1 1.7-1.8z" />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d="M6.9 7.6H3.8V21h3.1V7.6zM5.4 3A1.8 1.8 0 1 0 5.4 6 1.8 1.8 0 0 0 5.4 3zM21 21h-3.1v-6.8c0-3.6-4-3.3-4 0V21H10V7.6h2.9v1.8c1.3-2.3 8-2.4 8 2.2V21z" />
              </svg>
            </a>
            <a href="#" aria-label="GitHub" className="hover:text-white">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d="M12 .5A11.5 11.5 0 0 0 .5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.7 1.8 2.7 2 .5-.4 1-.7 1.2-1.2-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.4 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.5 3.3-1.2 3.3-1.2.6 1.8.2 3.1.1 3.4.7.8 1.2 1.9 1.2 3.2 0 4.6-2.7 5.6-5.3 5.9.5.4 1 .9 1 .4v2.9c0 .3.2.7.8.6A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
