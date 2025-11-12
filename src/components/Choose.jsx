// why-choose-us.jsx
import React from "react";
import { motion } from "framer-motion";

const benefits = [
  "Designed specifically for DSA operations",
  "Fully integrated mobile app + web CRM solution",
  "Real-time tracking of calls, attendance, and team performance",
  "Cloud-based and secure",
  "Saves time, boosts productivity, and improves loan conversion",
];

const WhyChooseUs = () => {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section title */}
          <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
            Why Choose Smart Dial
          </h2>
          <p className="mb-10 max-w-3xl text-base leading-7 text-gray-700 md:text-lg">
            Smart Dial stands apart because it's built for how DSA businesses actually work.
          </p>

          {/* Benefits checklist */}
          <div className="grid gap-4 md:grid-cols-2">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 rounded-xl bg-green-50 p-6 shadow-sm ring-1 ring-green-100"
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-500 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </div>
                <p className="text-base font-medium leading-6 text-gray-900">{benefit}</p>
              </motion.div>
            ))}
          </div>

          {/* Optional add-ons note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-6"
          >
            <p className="text-sm text-gray-600">
              <strong>Optional Add-ons:</strong> Client testimonials, case studies, or logos of
              partner DSAs.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
