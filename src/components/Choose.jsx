// why-choose-us.jsx
import React from "react";
import { motion } from "framer-motion";

const items = [
  {
    title: "Faster outreach",
    desc: "Built‑in dialer and keyboard‑first workflows to keep agents in flow.",
    accent: "from-indigo-500 to-sky-500",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6">
        <path d="M3 12h18M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>
    ),
  },
  {
    title: "Deeper visibility",
    desc: "Unified history, notes, and analytics to understand every touchpoint.",
    accent: "from-violet-500 to-fuchsia-500",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6">
        <path d="M4 19V5h16v14M8 13l3 3 5-5" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>
    ),
  },
  {
    title: "Secure by design",
    desc: "Encryption, backups, and role‑based access to keep data protected.",
    accent: "from-teal-500 to-emerald-500",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6">
        <path d="M7 10V8a5 5 0 1 1 10 0v2M5 10h14v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9Z" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>
    ),
  },
  {
    title: "Delightful to use",
    desc: "Fast, modern UI with thoughtful automation that stays out of the way.",
    accent: "from-rose-500 to-orange-500",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6">
        <path d="M12 17.3 5.8 21l1.2-7L2 9l7-.9L12 2l3 6.1 7 .9-5 5 1.2 7z" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>
    ),
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:22px_22px]"
      />
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-white">Why choose us</h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Built for speed, clarity, and scale—so your team can focus on results.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
            >
              <div
                className={`pointer-events-none absolute -top-16 right-0 h-40 w-40 rounded-full bg-gradient-to-tr ${it.accent} opacity-30 blur-3xl transition duration-500 group-hover:opacity-60`}
              />
              <div className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${it.accent} text-white shadow-lg`}>
                {it.icon}
              </div>
              <h3 className="text-base font-semibold text-white">{it.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">{it.desc}</p>
              <div className="mt-4 text-xs text-slate-400">Learn more →</div>
            </motion.div>
          ))}
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="mt-12 grid grid-cols-2 gap-6 text-center md:grid-cols-4"
        >
          {[
            ["+50%", "Faster follow‑ups"],
            ["98%", "Uptime last 12m"],
            ["1K+", "Active agents"],
            ["<2m", "Avg. onboarding"],
          ].map(([k, v]) => (
            <div key={k} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-6">
              <div className="text-2xl font-semibold text-white">{k}</div>
              <div className="text-xs text-slate-300">{v}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
