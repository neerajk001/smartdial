// welcome.jsx
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const text = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const group = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const chipCls =
  "rounded-full bg-white/70 backdrop-blur-md px-3 py-1 text-xs font-medium text-gray-700 shadow-sm ring-1 ring-black/10";

const Welcome = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 200], [0, -10]);

  return (
    <section className="relative isolate overflow-hidden bg-white">
      {/* Subtle grid pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.06)_1px,transparent_1px)] [background-size:22px_22px]"
      />

      {/* Soft gradient glows */}
      <div className="absolute -top-28 -right-24 -z-10 h-96 w-96 rounded-full bg-gradient-to-br from-indigo-200 via-violet-200 to-rose-200 blur-3xl opacity-60" />
      <div className="absolute -bottom-24 -left-24 -z-10 h-80 w-80 rounded-full bg-gradient-to-br from-sky-200 via-cyan-200 to-indigo-300 blur-3xl opacity-50" />

      <div className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid items-center gap-14 md:grid-cols-2">

          {/* LEFT CONTENT */}
          <motion.div variants={group} initial="hidden" animate="show">

            {/* Chips */}
            <motion.div variants={text} className="mb-6 flex flex-wrap gap-2">
              <span className={chipCls}>Automation</span>
              <span className={chipCls}>Lead Management</span>
              <span className={chipCls}>Analytics</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={text}
              className="text-5xl font-extrabold leading-tight text-gray-900 md:text-6xl"
            >
              The Modern Way to Run{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-rose-600 bg-clip-text text-transparent">
                DSA Operations
              </span>
            </motion.h1>

            {/* Accent line */}
            <motion.div
              variants={text}
              className="mt-3 h-1.5 w-32 rounded-full bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-rose-600"
            />

            {/* Description */}
            <motion.p
              variants={text}
              className="mt-5 max-w-xl text-lg font-medium leading-8 text-gray-700"
            >
              Smart Dial makes telecalling, follow-ups, loan tracking, and reporting effortless.  
              A lightweight, powerful CRM for teams who want speed, structure, and accuracy.
            </motion.p>

            {/* Points */}
            <motion.ul variants={group} className="mt-6 space-y-3">
              <motion.li variants={text} className="flex items-start gap-3 text-sm text-gray-800">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-indigo-500" />
                Web-first workflow automation with secure customer records.
              </motion.li>
              <motion.li variants={text} className="flex items-start gap-3 text-sm text-gray-800">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-fuchsia-500" />
                Smart dashboards + MIS insights to measure conversions.
              </motion.li>
              <motion.li variants={text} className="flex items-start gap-3 text-sm text-gray-800">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-rose-500" />
                Cleaner workflows for better quality, higher productivity.
              </motion.li>
            </motion.ul>

            {/* CTAs */}
            <motion.div variants={text} className="mt-8 flex items-center gap-4">
              <a
                href="#"
                className="rounded-full bg-gray-900 px-6 py-3 text-sm font-medium text-white shadow-md transition hover:scale-105 hover:brightness-110"
              >
                Get Started
              </a>
              <a
                href="#"
                className="rounded-full border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50 transition hover:scale-105"
              >
                Book a Demo
              </a>
            </motion.div>

            {/* Meta */}
            <motion.div variants={text} className="mt-6 flex items-center gap-3">
              <div className="h-7 w-7 rounded-full bg-gray-300" />
              <div className="text-sm text-gray-600">Updated Nov 2025 • 1 min overview</div>
            </motion.div>
          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            style={{ y }}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            {/* Glow on hover */}
            <motion.div
              whileHover={{ scale: 1.015 }}
              transition={{ type: "spring", stiffness: 180, damping: 18 }}
              className="overflow-hidden rounded-2xl ring-1 ring-black/10 shadow-xl bg-white"
            >
              {/* Replace with your custom banner later */}
              <motion.img
  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600&auto=format&fit=crop"
  alt="Team Working"
  className="h-80 w-full object-cover md:h-[420px]"
  initial={{ scale: 1.05 }}
  animate={{ scale: 1 }}
  transition={{ duration: 1, ease: "easeOut" }}
/>

            </motion.div>

            {/* Small Glass Popup */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
              className="absolute bottom-4 right-4 hidden max-w-xs rounded-xl bg-white/80 p-3 shadow-lg backdrop-blur-md ring-1 ring-black/10 md:block"
            >
              <div className="text-xs font-semibold text-gray-700">Today’s Calls</div>
              <div className="mt-1 flex items-center gap-2">
                <span className="text-2xl font-bold text-indigo-600">136</span>
                <span className="text-xs text-gray-500">completed</span>
              </div>
              <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-gray-200">
                <motion.div
                  initial={{ width: "20%" }}
                  animate={{ width: "75%" }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-rose-500"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
