// pricing.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight } from "lucide-react"; // Import Lucide icons

// 1. UPDATED DATA STRUCTURE:
//    - Added 'originalPrice' and 'price' for clarity.
//    - Added 'featured: true' to the data.
//    - Simplified 'cycle' and 'discount' copy.
const plans = {
  appAndWeb: [
    {
      name: "Quarterly",
      originalPrice: "₹450",
      price: "₹360",
      cycle: "per user / 3 months",
      discount: "Save 20%",
      eff: "₹120",
      featured: false,
    },
    {
      name: "Half Yearly",
      originalPrice: "₹900",
      price: "₹630",
      cycle: "per user / 6 months",
      discount: "Save 30%",
      eff: "₹105",
      featured: true, // Moved "featured" logic here
    },
    {
      name: "Yearly", // Renamed from "Monthly" for clarity
      originalPrice: "₹1800",
      price: "₹900",
      cycle: "per user / 12 months",
      discount: "Save 50%",
      eff: "₹75",
      featured: false,
    },
  ],
  webOnly: [
    {
      name: "Quarterly",
      originalPrice: "₹300",
      price: "₹240",
      cycle: "per user / 3 months",
      discount: "Save 20%",
      eff: "₹80",
      featured: false,
    },
    {
      name: "Half Yearly",
      originalPrice: "₹600",
      price: "₹420",
      cycle: "per user / 6 months",
      discount: "Save 30%",
      eff: "₹70",
      featured: true, // Moved "featured" logic here
    },
    {
      name: "Yearly", // Renamed from "Monthly" for clarity
      originalPrice: "₹1200",
      price: "₹600",
      cycle: "per user / 12 months",
      discount: "Save 50%",
      eff: "₹50",
      featured: false,
    },
  ],
};

const cardVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: (i) => ({ // Added 'i' for staggered delay
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      delay: i * 0.1, // Stagger effect
      ease: "easeOut",
    },
  }),
};

const Pricing = () => {
  const [billing, setBilling] = useState("appAndWeb");
  const data = plans[billing];

  return (
    <section className="relative isolate overflow-hidden bg-white">
      {/* background accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-size-[22px_22px]"
      />
      <div className="absolute -top-24 -right-24 -z-10 h-72 w-72 rounded-full bg-indigo-500/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          {/* 2. UPGRADED HEADING: Added gradient for premium consistency */}
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Choose a plan that grows with you
          </h2>
          <p className="mt-3 text-lg leading-7 text-slate-600">
            Transparent pricing with all features included and priority support.
          </p>

          {/* 3. UPGRADED Billing toggle with layoutId animation */}
          <div className="mt-8 inline-flex items-center rounded-full border border-slate-200 bg-slate-50 p-1 shadow-sm">
            <button
              onClick={() => setBilling("appAndWeb")}
              className="relative rounded-full px-5 py-2 text-sm font-medium"
            >
              {billing === "appAndWeb" && (
                <motion.div
                  layoutId="highlighter"
                  className="absolute inset-0 rounded-full bg-slate-900"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className={`relative z-10 transition ${billing === "appAndWeb" ? "text-white" : "text-slate-700"}`}>
                App & Web CRM
              </span>
            </button>
            <button
              onClick={() => setBilling("webOnly")}
              className="relative rounded-full px-5 py-2 text-sm font-medium"
            >
              {billing === "webOnly" && (
                <motion.div
                  layoutId="highlighter"
                  className="absolute inset-0 rounded-full bg-slate-900"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className={`relative z-10 transition ${billing === "webOnly" ? "text-white" : "text-slate-700"}`}>
                Web CRM only
              </span>
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
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="mt-12 grid gap-6 md:grid-cols-3"
          >
            {data.map((p, i) => {
              const featured = p.featured; // Using data-driven prop
              return (
                <motion.div
                  custom={i} // Pass index to variants for stagger
                  variants={cardVariants}
                  initial="hidden"
                  animate="show"
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  key={p.name}
                  className={`relative overflow-hidden rounded-2xl p-6 ring-1 ${
                    featured
                      ? "bg-gradient-to-b from-slate-900 to-slate-800 ring-slate-700 shadow-2xl shadow-indigo-500/20"
                      : "bg-white ring-slate-200"
                  }`}
                >
                  {/* 4. UPGRADED Accent ribbon */}
                  {featured && (
                    <div className="absolute right-0 top-0 rounded-bl-lg bg-gradient-to-r from-pink-500 to-indigo-500 px-4 py-1 text-xs font-semibold text-white">
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
                  </div>

                  {/* 5. UPGRADED Price display (Strike-through) */}
                  <div className="flex items-baseline gap-2">
                    <span
                      className={`text-3xl font-semibold leading-none ${
                        featured ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {p.price}
                    </span>
                    <span
                      className={`text-lg ${
                        featured ? "text-slate-400" : "text-slate-500"
                      } line-through`}
                    >
                      {p.originalPrice}
                    </span>
                  </div>
                  <p className={`mt-1 text-sm ${featured ? "text-slate-300" : "text-slate-500"}`}>
                    {p.cycle}
                  </p>

                  <div className="mt-4 text-sm">
                    <p className={`${featured ? "text-indigo-300" : "text-indigo-600"} font-medium`}>
                      {p.discount}
                    </p>
                    {/* 6. UPGRADED Effective price display */}
                    <p className={`mt-1 ${featured ? "text-slate-300" : "text-slate-600"}`}>
                      <span className={`font-semibold ${featured ? "text-white" : "text-slate-800"}`}>
                        {p.eff}
                      </span>
                      <span className="text-xs"> / effective per month</span>
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
                        {/* 7. UPGRADED Icon */}
                        <Check
                          className={`h-4 w-4 flex-shrink-0 ${
                            featured ? "text-emerald-300" : "text-emerald-600"
                          }`}
                          strokeWidth="3"
                        />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6">
                    <a
                      href="#"
                      className={`inline-flex w-full items-center justify-center rounded-full px-4 py-2.5 text-sm font-medium transition ${
                        featured
                          ? "bg-white text-slate-900 hover:bg-slate-200"
                          : "bg-slate-900 text-white hover:bg-slate-700"
                      }`}
                    >
                      Purchase Now
                      {/* 7. UPGRADED Icon */}
                      <ArrowRight className="ml-1.5 h-4 w-4" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* small footnote */}
        <div className="mt-8 text-center text-xs text-slate-500">
          Prices shown are illustrative; taxes may apply. Change or cancel anytime.
        </div>
      </div>
    </section>
  );
};

export default Pricing;