import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

// Pricing data structure matching component
const pricingData = {
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
      featured: true,
    },
    {
      name: "Yearly",
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
      featured: true,
    },
    {
      name: "Yearly",
      originalPrice: "₹1200",
      price: "₹600",
      cycle: "per user / 12 months",
      discount: "Save 50%",
      eff: "₹50",
      featured: false,
    },
  ],
};

// Framer Motion variants
const cardVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  }),
};

export default function Pricing() {
  const [planType, setPlanType] = useState('appAndWeb');
  const data = planType === 'appAndWeb' ? pricingData.appAndWeb : pricingData.webOnly;

  return (
    <section className="relative isolate overflow-hidden bg-white py-24">
      {/* background accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-size-[22px_22px]"
      />
      <div className="absolute -top-24 -right-24 -z-10 h-72 w-72 rounded-full bg-indigo-500/5 blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- Header --- */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 sm:text-5xl">
            Choose a plan that grows with you
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Transparent pricing with all features included and priority support for every plan.
          </p>
        </div>

        {/* --- Toggle Switch --- */}
        <div className="flex justify-center mt-10">
          <div className="relative flex p-1 bg-slate-50 border border-slate-200 rounded-full shadow-sm">
            {['appAndWeb', 'webOnly'].map((type) => (
              <button
                key={type}
                onClick={() => setPlanType(type)}
                className="relative px-6 py-2 text-sm font-medium z-10 whitespace-nowrap rounded-full"
              >
                {planType === type && (
                  <motion.div
                    layoutId="planToggle"
                    className="absolute inset-0 bg-slate-900 rounded-full shadow-md"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className={`relative ${
                  planType === type 
                    ? 'text-white' 
                    : 'text-slate-700'
                }`}>
                  {type === 'appAndWeb' ? 'App & Web CRM' : 'Web CRM only'}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* --- Pricing Cards Grid --- */}
        <AnimatePresence mode="wait">
          <motion.div
            key={planType}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="mt-12 grid gap-6 md:grid-cols-3"
          >
            {data.map((p, i) => {
              const featured = p.featured;
              return (
                <motion.div
                  key={p.name}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className={`relative overflow-hidden rounded-2xl p-6 ring-1 ${
                    featured
                      ? 'bg-linear-to-b from-slate-900 to-slate-800 ring-slate-700 shadow-2xl shadow-indigo-500/20'
                      : 'bg-white ring-slate-200'
                  }`}
                >
                  {/* Popular Badge */}
                  {featured && (
                    <div className="absolute right-0 top-0 rounded-bl-lg bg-linear-to-r from-pink-500 to-indigo-500 px-4 py-1 text-xs font-semibold text-white">
                      Popular
                    </div>
                  )}

                  <div className="mb-4">
                    <h3
                      className={`text-lg font-semibold ${
                        featured ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {p.name}
                    </h3>
                  </div>

                  {/* Price display with strike-through */}
                  <div className="flex items-baseline gap-2">
                    <span
                      className={`text-3xl font-semibold leading-none ${
                        featured ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {p.price}
                    </span>
                    <span
                      className={`text-lg ${
                        featured ? 'text-slate-400' : 'text-slate-500'
                      } line-through`}
                    >
                      {p.originalPrice}
                    </span>
                  </div>
                  <p className={`mt-1 text-sm ${featured ? 'text-slate-300' : 'text-slate-500'}`}>
                    {p.cycle}
                  </p>

                  <div className="mt-4 text-sm">
                    <p className={`${featured ? 'text-indigo-300' : 'text-indigo-600'} font-medium`}>
                      {p.discount}
                    </p>
                    {/* Effective price display */}
                    <p className={`mt-1 ${featured ? 'text-slate-300' : 'text-slate-600'}`}>
                      <span className={`font-semibold ${featured ? 'text-white' : 'text-slate-800'}`}>
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
                          featured ? 'text-slate-200' : 'text-slate-700'
                        }`}
                      >
                        <Check
                          className={`h-4 w-4 shrink-0 ${
                            featured ? 'text-emerald-300' : 'text-emerald-600'
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
                          ? 'bg-white text-slate-900 hover:bg-slate-200'
                          : 'bg-slate-900 text-white hover:bg-slate-700'
                      }`}
                    >
                      Purchase Now
                      <ArrowRight className="ml-1.5 h-4 w-4" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Footnote */}
        <div className="mt-8 text-center text-xs text-slate-500">
          Prices shown are illustrative; taxes may apply. Change or cancel anytime.
        </div>
      </div>
    </section>
  );
}