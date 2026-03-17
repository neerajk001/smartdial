// pricing.jsx
import React, { useEffect, useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { DEFAULT_PLANS, fetchPlanData } from "../services/smartDialApi";

// 1. SINGLE PLAN SETUP:
//    App & Web CRM bundled together. Web-only plans removed as per latest brief.
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
  const [data, setData] = useState(DEFAULT_PLANS);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const loadPlans = async () => {
      try {
        const plans = await fetchPlanData();
        if (isMounted && plans.length) {
          setData(plans);
        }
      } catch (error) {
        console.error("Unable to load plan data", error);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadPlans();

    return () => {
      isMounted = false;
    };
  }, []);

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
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Choose a plan that grows with you
          </h2>
          <p className="mt-3 text-base sm:text-lg leading-7 text-slate-600">
            Transparent pricing with all features included and priority support.
          </p>

          <p className="mt-4 text-sm text-slate-500">App &amp; Web CRM are bundled together. Web CRM only plans are no longer offered.</p>
        </div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <Motion.div
            key={isLoading ? "loading" : "loaded"}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="mt-10 md:mt-12 grid gap-4 sm:gap-6 md:grid-cols-3"
          >
            {data.map((p, i) => {
              const featured = p.featured; // Using data-driven prop
              return (
                <Motion.div
                  custom={i} // Pass index to variants for stagger
                  variants={cardVariants}
                  initial="hidden"
                  animate="show"
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  key={p.name}
                  className={`relative overflow-hidden rounded-2xl p-5 sm:p-6 ring-1 ${
                    featured
                      ? "bg-linear-to-b from-slate-900 to-slate-800 ring-slate-700 shadow-2xl shadow-indigo-500/20"
                      : "bg-white ring-slate-200"
                  }`}
                >
                  {/* 4. UPGRADED Accent ribbon */}
                  {featured && (
                    <div className="absolute right-0 top-0 rounded-bl-lg bg-linear-to-r from-pink-500 to-indigo-500 px-4 py-1 text-xs font-semibold text-white">
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
                      className={`text-2xl sm:text-3xl font-semibold leading-none ${
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
                    <p className={`${featured ? "text-indigo-300" : "text-indigo-600"} font-semibold`}>
                      {p.discount}
                    </p>
                    {/* 6. UPGRADED Effective price display */}
                    <p className={`mt-1 ${featured ? "text-slate-300" : "text-slate-600"}`}>
                      <span className={`font-semibold ${featured ? "text-white" : "text-slate-800"}`}>
                        {p.eff}
                      </span>
                      <span className="text-xs"> / per month/per user</span>
                    </p>
                  </div>

                  <ul className="mt-5 space-y-2 text-sm">
                    {[
                      "Full CRM & Dialer access",
                      "Lead & follow-up management",
                      "Call logs and performance tracking",
                      "Role-based user access",
                      "Advanced analytics dashboard",
                      "Priority support",
                    ].map((f) => (
                      <li
                        key={f}
                        className={`flex items-center gap-2 ${
                          featured ? "text-slate-200" : "text-slate-700"
                        }`}
                      >
                        {/* 7. UPGRADED Icon */}
                        <Check
                          className={`h-4 w-4 shrink-0 ${
                            featured ? "text-emerald-300" : "text-emerald-600"
                          }`}
                          strokeWidth="3"
                        />
                        {f}
                      </li>
                    ))}
                  </ul>

                </Motion.div>
              );
            })}
          </Motion.div>
        </AnimatePresence>

        {/* small footnote */}
        <div className="mt-8 text-center text-xs text-slate-500">
          {isLoading
            ? "Loading latest prices from the backend..."
            : "Prices are fetched from backend API; taxes may apply. Change or cancel anytime."}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
