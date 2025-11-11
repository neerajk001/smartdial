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
  "rounded-full bg-black/5 px-3 py-1 text-xs text-gray-600 ring-1 ring-black/5";

const Welcome = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 200], [0, -12]);

  return (
    <section className="relative isolate overflow-hidden bg-white">
      {/* Grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.06)_1px,transparent_1px)] [background-size:22px_22px]"
      />
      {/* Soft gradients */}
      <div className="absolute -top-24 -right-24 -z-10 h-72 w-72 rounded-full bg-gradient-to-tr from-indigo-200 via-fuchsia-200 to-pink-200 blur-3xl opacity-60" />
      <div className="absolute -bottom-20 -left-20 -z-10 h-72 w-72 rounded-full bg-gradient-to-tr from-cyan-200 via-sky-200 to-indigo-200 blur-3xl opacity-50" />

      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Copy */}
          <motion.div variants={group} initial="hidden" animate="show">
            <motion.div variants={text} className="mb-5 flex flex-wrap gap-2">
              <span className={chipCls}>Automation</span>
              <span className={chipCls}>Lead Management</span>
              <span className={chipCls}>Analytics</span>
            </motion.div>

            <motion.h1
              variants={text}
              className="text-4xl font-semibold leading-tight text-gray-900 md:text-5xl"
            >
              Welcome to{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-rose-600 bg-clip-text text-transparent">
                Smart Dial
              </span>
            </motion.h1>

            <motion.p
              variants={text}
              className="mt-4 max-w-xl text-base leading-7 text-gray-600"
            >
              An advanced telecalling and lead platform that streamlines calls,
              captures follow‑ups, and surfaces insights with a real‑time dashboard,
              helping teams work faster with less manual effort.
            </motion.p>

            <motion.ul variants={group} className="mt-6 space-y-2">
              <motion.li variants={text} className="flex items-start gap-3 text-sm text-gray-700">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-indigo-500" />
                Seamless web-based app with secure customer records and follow‑ups.
              </motion.li>
              <motion.li variants={text} className="flex items-start gap-3 text-sm text-gray-700">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-fuchsia-500" />
                MIS reports and dashboards to analyze performance and make decisions.
              </motion.li>
              <motion.li variants={text} className="flex items-start gap-3 text-sm text-gray-700">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-rose-500" />
                Organized, transparent, and result‑driven workflows for your team.
              </motion.li>
            </motion.ul>

            <motion.div variants={text} className="mt-8 flex items-center gap-3">
              <a
                href="#"
                className="rounded-full bg-gray-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:brightness-110"
              >
                Get Started
              </a>
              <a
                href="#"
                className="rounded-full border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-50"
              >
                Book a Demo
              </a>
            </motion.div>

            {/* Author/meta */}
            <motion.div variants={text} className="mt-8 flex items-center gap-3">
              <div className="h-7 w-7 rounded-full bg-gray-300" />
              <div className="text-sm text-gray-600">Published Oct 30, 2025 • 9 min read</div>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            style={{ y }}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="relative"
          >
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="overflow-hidden rounded-xl ring-1 ring-black/10 shadow-xl bg-white"
            >
              {/* Replace with your image */}
              <motion.img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600&auto=format&fit=crop"
                alt="Team working"
                className="h-72 w-full object-cover md:h-[380px]"
                initial={{ scale: 1.03 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
              />
            </motion.div>

            {/* Floating glass card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              className="absolute bottom-4 right-4 hidden max-w-sm rounded-lg bg-white/80 p-3 shadow-lg backdrop-blur-md ring-1 ring-black/10 md:block"
            >
              <div className="text-xs font-medium text-gray-700">Live Queue</div>
              <div className="mt-2 flex items-center gap-3">
                <span className="text-2xl font-semibold text-indigo-600">48</span>
                <span className="text-xs text-gray-500">active calls</span>
              </div>
              <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-gray-200">
                <motion.div
                  initial={{ width: "30%" }}
                  animate={{ width: "68%" }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
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
