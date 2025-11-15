// pricing.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const plans = {
  appAndWeb: [
    { 
      name: "Quarterly", 
      price: "₹450 / ₹360", 
      cycle: "3 Months", 
      discount: "20%", 
      eff: "₹120" 
    },
    { 
      name: "Half Yearly", 
      price: "₹900 / ₹630", 
      cycle: "6 Months", 
      discount: "30%", 
      eff: "₹105" 
    },
    { 
      name: "Monthly", 
      price: "₹1800 / ₹900", 
      cycle: "12 Months", 
      discount: "50%", 
      eff: "₹75" 
    },
  ],
  webOnly: [
    { 
      name: "Quarterly", 
      price: "₹300 / ₹240", 
      cycle: "3 Months", 
      discount: "20%", 
      eff: "₹80" 
    },
    { 
      name: "Half Yearly", 
      price: "₹600 / ₹420", 
      cycle: "6 Months", 
      discount: "30%", 
      eff: "₹70" 
    },
    { 
      name: "Monthly", 
      price: "₹1200 / ₹600", 
      cycle: "12 Months", 
      discount: "50%", 
      eff: "₹50" 
    },
  ],
};

const cardVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const Pricing = () => {
  const [billing, setBilling] = useState("appAndWeb");
  const data = plans[billing];

  return (
    <section className="relative isolate overflow-hidden bg-white">
      {/* background accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-size-[22px_22px]"
      />
      <div className="absolute -top-24 -right-24 -z-10 h-72 w-72 rounded-full bg-linear-to-tr from-indigo-200 via-fuchsia-200 to-pink-200 blur-3xl opacity-60" />

      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            Choose a plan that grows with you
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Transparent pricing with all features included and priority support for every plan.
          </p>

          {/* Billing toggle */}
          <div className="mt-6 inline-flex items-center rounded-full border border-slate-200 bg-white p-1 shadow-sm">
            <button
              onClick={() => setBilling("appAndWeb")}
              className={`rounded-full px-4 py-2 text-sm transition ${
                billing === "appAndWeb"
                  ? "bg-slate-900 text-white"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              App & Web CRM
            </button>
            <button
              onClick={() => setBilling("webOnly")}
              className={`rounded-full px-4 py-2 text-sm transition ${
                billing === "webOnly"
                  ? "bg-slate-900 text-white"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              Web CRM only
            </button>
          </div>
        </div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={billing}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mt-10 grid gap-6 md:grid-cols-3"
          >
            {data.map((p, i) => {
              const featured = i === 1;
              return (
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  animate="show"
                  whileHover={{ y: -6 }}
                  key={p.name}
                  className={`relative overflow-hidden rounded-2xl p-6 ring-1 ${
                    featured
                      ? "bg-linear-to-b from-slate-900 to-slate-800 ring-slate-700"
                      : "bg-white ring-slate-200"
                  }`}
                >
                  {/* Accent ribbon */}
                  {featured && (
                    <div className="absolute right-3 top-3 rounded-full bg-white/10 px-3 py-1 text-xs text-white backdrop-blur">
                      Popular
                    </div>
                  )}

                  <div className="mb-4">
                    <h3
                      className={`text-lg font-semibold ${
                        featured ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {p.name}
                    </h3>
                    <p className={`text-xs ${featured ? "text-slate-300" : "text-slate-500"}`}>
                      {p.cycle}
                    </p>
                  </div>

                  <div className="flex items-end gap-2">
                    <span
                      className={`text-3xl font-semibold leading-none ${
                        featured ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {p.price}
                    </span>
                  </div>

                  <div className="mt-3 text-sm">
                    <p className={`${featured ? "text-indigo-200" : "text-indigo-700"}`}>
                      Discount: <span className="font-medium">{p.discount}</span>
                    </p>
                    <p className={`${featured ? "text-slate-300" : "text-slate-600"}`}>
                      Effective Price (per User/Month) {p.eff}
                    </p>
                  </div>

                  <ul className="mt-5 space-y-2 text-sm">
                    {[
                      "Full access to all features",
                      "Priority support",
                      "Unlimited team members",
                    ].map((f) => (
                      <li
                        key={f}
                        className={`flex items-center gap-2 ${
                          featured ? "text-slate-200" : "text-slate-700"
                        }`}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className={`h-4 w-4 ${
                            featured ? "text-emerald-300" : "text-emerald-600"
                          }`}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6">
                    <a
                      href="#"
                      className={`inline-flex w-full items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition ${
                        featured
                          ? "bg-white text-slate-900 hover:brightness-95"
                          : "bg-slate-900 text-white hover:brightness-110"
                      }`}
                    >
                      Purchase Now
                      <svg viewBox="0 0 24 24" className="ml-2 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* small footnote */}
        <div className="mt-6 text-center text-xs text-slate-500">
          Prices shown are illustrative; taxes may apply. Change or cancel anytime.
        </div>
      </div>
    </section>
  );
};

export default Pricing;
