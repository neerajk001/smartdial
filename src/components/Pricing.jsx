// pricing.jsx
import React from "react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Basic",
    idealFor: "Small DSA teams",
    highlights: ["Smart Dialer", "Lead Management", "Basic Reporting"],
  },
  {
    name: "Pro",
    idealFor: "Mid-size agencies",
    highlights: ["Full CRM", "Team Management", "Advanced Analytics", "Priority Support"],
    featured: true,
  },
  {
    name: "Enterprise",
    idealFor: "Large organizations",
    highlights: ["API Integration", "Dedicated Support", "Custom Workflows", "White Label Option"],
  },
];

const Pricing = () => {
  return (
    <section className="w-full bg-linear-to-br from-slate-50 to-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section title */}
          <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">💰 Pricing</h2>
          <p className="mb-10 max-w-3xl text-base leading-7 text-gray-700 md:text-lg">
            Choose the plan that fits your business.
          </p>

          {/* Pricing cards */}
          <div className="grid gap-6 md:grid-cols-3">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative overflow-hidden rounded-2xl p-8 shadow-lg ring-1 ${
                  plan.featured
                    ? "bg-blue-600 text-white ring-blue-500"
                    : "bg-white text-slate-900 ring-slate-200"
                }`}
              >
                {plan.featured && (
                  <div className="absolute right-4 top-4 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur">
                    Popular
                  </div>
                )}

                <h3
                  className={`mb-2 text-2xl font-bold ${
                    plan.featured ? "text-white" : "text-slate-900"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`mb-6 text-sm ${
                    plan.featured ? "text-blue-100" : "text-gray-600"
                  }`}
                >
                  Ideal For: <span className="font-medium">{plan.idealFor}</span>
                </p>

                <div className="mb-6">
                  <h4
                    className={`mb-3 text-sm font-semibold ${
                      plan.featured ? "text-blue-100" : "text-gray-700"
                    }`}
                  >
                    Highlights:
                  </h4>
                  <ul className="space-y-2">
                    {plan.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className={`flex items-start gap-2 text-sm ${
                          plan.featured ? "text-white" : "text-gray-700"
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className={`h-5 w-5 shrink-0 ${
                            plan.featured ? "text-blue-200" : "text-green-600"
                          }`}
                        >
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                        </svg>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#"
                  className={`inline-flex w-full items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold shadow-sm transition ${
                    plan.featured
                      ? "bg-white text-blue-600 hover:bg-gray-50"
                      : "border border-gray-300 bg-white text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  Request Quote
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path d="M13.5 4.5L21 12l-7.5 7.5-1.06-1.06L17.88 12l-5.44-5.44L13.5 4.5z" />
                  </svg>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
