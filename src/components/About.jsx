// About.jsx
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="w-full bg-slate-800 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Section title */}
          <h2 className="mb-8 flex items-center gap-2 text-3xl font-bold md:text-4xl">
            <span className="text-4xl">💡</span> About Smart Dial
          </h2>

          {/* Main description */}
          <p className="text-base leading-7 text-gray-200 md:text-lg">
            <strong>Smart Dial</strong> is an advanced CRM-integrated calling platform designed for
            DSA businesses and loan providers. It connects telecallers, team leaders, and backend
            operations into one intelligent ecosystem — enhancing productivity, transparency, and
            loan conversion rates.
          </p>

          <p className="text-base leading-7 text-gray-200 md:text-lg">
            Built by FinTech professionals who understand the operational realities of DSA businesses,
            Smart Dial's mission is to{" "}
            <strong>unify sales, operations, and HR under one system</strong> — helping every DSA
            business scale faster with clarity, efficiency, and trust.
          </p>

          {/* Vision & Mission */}
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div className="rounded-lg bg-slate-700/50 p-6">
              <h3 className="mb-3 text-xl font-semibold">Vision:</h3>
              <p className="text-base leading-7 text-gray-300">
                To be the most trusted digital operating system for DSAs in the Indian loan ecosystem.
              </p>
            </div>
            <div className="rounded-lg bg-slate-700/50 p-6">
              <h3 className="mb-3 text-xl font-semibold">Mission:</h3>
              <p className="text-base leading-7 text-gray-300">
                To simplify financial operations through intelligent automation and human-centric
                design.
              </p>
            </div>
          </div>

          {/* Visual Idea */}
          <div className="mt-8 rounded-lg border border-slate-600 bg-slate-700/30 p-6">
            <h3 className="mb-3 text-lg font-semibold">Visual Idea:</h3>
            <p className="mb-2 text-base text-gray-300">
              Infographic: "Mobile App + Web CRM = Complete DSA Solution"
            </p>
            <p className="text-sm text-gray-400">Icons for Integration, Automation, Analytics</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
