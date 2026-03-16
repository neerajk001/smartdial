// why-choose-us.jsx
import React from "react";
import { motion as Motion } from "framer-motion";
import { CheckCircle, Zap } from "lucide-react"; // Import icons

// 1. UPDATED data to reflect key advantages
const benefits = [
  {
    title: "Built for Loan Sales",
    desc: "Smart Dial is designed specifically for loan distribution and DSA operations-not as a generic CRM retrofit.",
  },
  {
    title: "Integrated Calling + CRM",
    desc: "Telecalling, customer data, loan workflows, and team management live in one connected platform.",
  },
  {
    title: "Real-Time Team Visibility",
    desc: "Monitor calling activity, file movement, and performance metrics live so you can react faster.",
  },
  {
    title: "Faster, Simpler Operations",
    desc: "Structured workflows reduce manual effort, speed up loan processing, and improve lead conversion rates.",
  },
];

// Animation variants for the new "Glow Border" card
const cardVariants = {
  hover: { opacity: 1 },
  rest: { opacity: 0 },
};

// Animation variants for the card stack
const stackContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Each card animates 0.2s after the previous
    },
  },
};

const stackItemVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 100 },
  },
};

const WhyChooseUs = () => {
  return (
    <section className="w-full bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          
          {/* --- LEFT COLUMN (Info & Highlight) --- */}
          <Motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col gap-8" // Added gap
          >
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Why Choose Smart Dial
            </h2>
            <p className="text-lg leading-7 text-slate-600">
              Smart Dial is not just another CRM-it is a complete operational platform designed specifically for the
              DSA industry, helping you centralize processes and operate with real-time insight.
            </p>

            <Motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 rounded-lg bg-indigo-600/10 p-2 text-indigo-600">
                  <Zap className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">
                  Trusted by Industry Leaders
                </h3>
              </div>
              <p className="mt-3 text-sm text-slate-600">
                We power operations for leading DSAs and financial partners,
                helping them scale securely.
              </p>
              <div className="mt-4 flex gap-4 text-sm font-medium text-slate-500">
                <span>FinEdge</span>
                <span>Apex Solutions</span>
                <span>RealProp</span>
              </div>
            </Motion.div>
          </Motion.div>

          {/* --- RIGHT COLUMN (Interactive Benefit Cards) --- */}
          {/* 2. REPLACED motion.ul with this new card stack */}
          <Motion.div
            variants={stackContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col gap-6"
          >
            {benefits.map((benefit, index) => (
              <Motion.div
                key={index}
                variants={stackItemVariants}
                // 3. This is the "Glow Border" card from Features.jsx
                initial="rest"
                whileHover="hover"
                animate="rest"
                className="relative rounded-xl shadow-xl shadow-blue-900/10 border border-slate-200/70"
              >
                {/* The Glow */}
                <Motion.div
                  className="pointer-events-none absolute inset-0 rounded-xl"
                  style={{
                    background:
                      "linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)",
                  }}
                  variants={cardVariants}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />

                {/* The Content */}
                <div className="relative h-full w-full rounded-[11px] bg-white p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 rounded-lg bg-blue-100 p-3 text-blue-600">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-1 text-lg font-semibold text-slate-900">
                        {benefit.title}
                      </h3>
                      <p className="text-base leading-6 text-gray-700">
                        {benefit.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </Motion.div>
            ))}
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
