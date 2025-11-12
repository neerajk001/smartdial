// service.jsx
import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const card = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: "easeOut" } },
};

const features = [
  {
    title: "Built‑in Dialer",
    desc: "Place outbound calls from the web app with crystal‑clear quality and quick actions.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6">
        <path
          d="M5 3h14a2 2 0 0 1 2 2v14l-4-3H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
          fill="currentColor"
        />
      </svg>
    ),
    accent: "from-indigo-500 to-sky-500",
  },
  {
    title: "Customer Database",
    desc: "Store contacts, notes, and tags with fast search and smart segments.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6">
        <path
          d="M4 6c0-1.1 3.6-2 8-2s8 .9 8 2-3.6 2-8 2-8-.9-8-2Zm0 6c0-1.1 3.6-2 8-2s8 .9 8 2-3.6 2-8 2-8-.9-8-2Zm0 6c0-1.1 3.6-2 8-2s8 .9 8 2-3.6 2-8 2-8-.9-8-2Z"
          fill="currentColor"
        />
      </svg>
    ),
    accent: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "Follow‑up Reminders",
    desc: "Never miss a touchpoint with auto‑scheduled nudges and inbox‑style queue.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6">
        <path
          d="M12 6v6l4 2"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
    accent: "from-amber-500 to-orange-500",
  },
  {
    title: "Call History",
    desc: "Search, filter, and review every conversation with recordings and notes.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6">
        <path
          d="M3 5h18v14H3zM7 9h10M7 13h6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    ),
    accent: "from-teal-500 to-emerald-500",
  },
  {
    title: "Secure & Reliable",
    desc: "Data encrypted at rest and in transit, with daily backups and audit logs.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6">
        <path
          d="M7 10V8a5 5 0 1 1 10 0v2M5 10h14v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    ),
    accent: "from-rose-500 to-red-500",
  },
];

const Service = () => {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950">
      {/* Background texture */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:22px_22px]"
      />
      {/* Glow accents */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-16 -z-10 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 py-16 md:py:20">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-3xl font-semibold text-transparent md:text-4xl">
            Designed for Agents. Built to Close More Leads
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            A carefully crafted toolkit to dial faster, remember more, and decide smarter—wrapped in a delightful UI.
          </p>
        </motion.div>

        {/* Feature grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={card}
              whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md"
            >
              {/* Accent ring */}
              <div
                className={`pointer-events-none absolute -top-20 right-0 h-40 w-40 rounded-full bg-gradient-to-tr ${f.accent} opacity-30 blur-3xl transition duration-500 group-hover:opacity-60`}
              />

              <div className="flex items-start gap-4">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${f.accent} text-white shadow-lg`}
                >
                  {f.icon}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">{f.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-300">{f.desc}</p>
                </div>
              </div>

              {/* Bottom action row */}
              <div className="mt-5 flex items-center justify-between">
                <a
                  href="#"
                  className="text-xs font-medium text-sky-300 transition-colors hover:text-white"
                >
                  Learn more →
                </a>
                <div className="text-[10px] uppercase tracking-wide text-slate-400">
                  Feature
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
          
        {/* CTA bar */}       
        <motion.div    
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-slate-800/60 to-slate-800/30 p-4 sm:p-6"
        >
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm font-medium text-white">
                Ready to boost agent productivity?
              </p>
              <p className="text-xs text-slate-300">
                Start a free trial and connect your team in minutes.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="rounded-full bg-white px-5 py-2 text-sm font-medium text-slate-900 shadow-sm transition hover:brightness-95"
              >
                Start Free Trial
              </a>
              <a
                href="#"
                className="rounded-full border border-white/20 px-5 py-2 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Book a Demo
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Service;
