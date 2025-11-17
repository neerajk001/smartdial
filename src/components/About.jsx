// About.jsx
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="w-full bg-white text-slate-800">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Title */}
          <h2 className="flex items-center gap-3 text-3xl font-bold md:text-4xl">
            <span className="text-4xl">💡</span>
            <span className="font-extrabold text-indigo-700">About Smart Dial</span>
          </h2>

          {/* Description */}
          <p className="text-lg leading-8 text-slate-700 font-medium max-w-3xl">
            <strong className="text-slate-900 font-semibold">Smart Dial</strong> is a CRM-integrated 
            calling platform created for DSA businesses. It connects telecallers, leaders, and backend 
            operations into one intelligent system—boosting productivity, transparency, and conversion rates.
          </p>

          <p className="text-lg leading-8 text-slate-700 font-medium max-w-3xl">
            Built by FinTech professionals, our mission is to 
            <strong className="text-slate-900 font-semibold"> unify sales, operations, and HR</strong> 
            under a single platform—helping businesses scale faster with clarity and efficiency.
          </p>

          {/* Cards */}
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div className="rounded-xl bg-slate-50 p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="mb-3 text-xl font-bold text-indigo-600">Vision</h3>
              <p className="text-base leading-7 text-slate-600">
                To become the most trusted digital operating system for DSAs in the Indian loan ecosystem.
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="mb-3 text-xl font-bold text-indigo-600">Mission</h3>
              <p className="text-base leading-7 text-slate-600">
                To simplify financial operations through intelligent automation and human-centric design.
              </p>
            </div>
          </div>

          {/* Visual Idea */}
          <div className="mt-8 rounded-xl border border-black bg-white/80 backdrop-blur-sm p-6 shadow-sm">
            <h3 className="mb-3 text-lg font-bold text-indigo-700">Visual Idea</h3>
            <p className="mb-2 text-base text-slate-700 font-medium">
              Infographic: <strong className="font-semibold">
                “Mobile App + Web CRM = Complete DSA Solution”
              </strong>
            </p>
            <p className="text-sm text-slate-600 font-medium">
              Icons for Integration ⚙️ | Automation 🤖 | Analytics 📊
            </p>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;
