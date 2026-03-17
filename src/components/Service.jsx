// service.jsx
import React from "react";
import { motion as Motion } from "framer-motion";
import {
  Phone,
  Database,
  CalendarClock,
  History,
  Lock,
  PieChart,
  ArrowRight,
} from "lucide-react"; // Added imports from previous step

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const card = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const features = [
  {
    title: "Built-in Dialer",
    desc: "Place outbound calls from the web app with crystal-clear quality and quick actions.",
    icon: <Phone className="h-6 w-6" />,
    accent: "from-indigo-500 to-sky-500",
  },
  {
    title: "Customer Database",
    desc: "Store contacts, notes, and tags with fast search and smart segments.",
    icon: <Database className="h-6 w-6" />,
    accent: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "Follow-up Reminders",
    desc: "Never miss a touchpoint with auto-scheduled nudges and inbox-style queue.",
    icon: <CalendarClock className="h-6 w-6" />,
    accent: "from-amber-500 to-orange-500",
  },
  {
    title: "Call History",
    desc: "Search, filter, and review every conversation with recordings and notes.",
    icon: <History className="h-6 w-6" />,
    accent: "from-teal-500 to-emerald-500",
  },
  {
    title: "Secure & Reliable",
    desc: "Data encrypted at rest and in transit, with daily backups and audit logs.",
    icon: <Lock className="h-6 w-6" />,
    accent: "from-rose-500 to-red-500",
  },
  {
    title: "Analytics & Reports",
    desc: "Track team performance, call volume, and lead conversion with visual dashboards.",
    icon: <PieChart className="h-6 w-6" />,
    accent: "from-green-500 to-lime-500",
  },
];

const Service = () => {
  return (
    <section className="relative isolate overflow-hidden bg-linear-to-br from-blue-50 via-white to-indigo-50">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-size-[22px_22px]"
      />
      <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-16 -z-10 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <Motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-800 md:text-4xl">
            Transform Your DSA Operations
          </h2>
          <p className="mt-3 text-lg leading-7 text-slate-700">
            Smart Dial gives your team the tools they need to manage leads, close more deals, and scale efficiently-
            without relying on disconnected tools and manual processes.
          </p>
        </Motion.div>

        {/* Feature grid */}
        <Motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((f) => (
            <Motion.div
              key={f.title}
              variants={card}
              whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              // 1. UPDATED Card style for Glassmorphism
              //    - Replaced 'bg-white' with 'bg-white/70 backdrop-blur-lg'
              //    - Swapped 'border-slate-200/70' for a cleaner 'border-white/40'
              className="relative rounded-2xl border border-white/40 bg-white/70 p-5 backdrop-blur-lg shadow-xl shadow-blue-900/10 transform-3d"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br ${f.accent} text-white shadow-lg`}
                >
                  {f.icon}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900">
                    {f.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-gray-700">
                    {f.desc}
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between">
                <a
                  href="/contact"
                  className="text-sm font-medium text-blue-600 transition-colors hover:text-blue-800"
                >
                  Book a Demo <ArrowRight className="inline h-4 w-4" />
                </a>
              </div>
            </Motion.div>
          ))}
        </Motion.div>

      </div>
    </section>
  );
};

export default Service;
