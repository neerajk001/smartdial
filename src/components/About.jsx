// About.jsx
import React from "react";
import { motion as Motion } from "framer-motion";

const About = () => {
  return (
    <section className="w-full bg-white text-slate-800">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Title */}
          <h2 className="flex items-center gap-3 text-3xl font-bold md:text-4xl">
            <span className="text-4xl">Idea</span>
            <span className="font-extrabold text-indigo-700">About Smart Dial</span>
          </h2>

          {/* Description */}
          <p className="text-lg leading-8 text-slate-700 font-medium max-w-3xl">
            <strong className="text-slate-900 font-semibold">Smart Dial</strong> is building the future of the DSA
            ecosystem. We exist to empower financial sales teams with technology that improves efficiency,
            transparency, and scalability.
          </p>

          <p className="text-lg leading-8 text-slate-700 font-medium max-w-3xl">
            By digitizing telecalling workflows, backend processing, and team management, Smart Dial helps
            organizations grow faster while maintaining operational clarity.
          </p>

          {/* Cards */}
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div className="rounded-xl bg-slate-50 p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="mb-3 text-xl font-bold text-indigo-600">Vision</h3>
              <p className="text-base leading-7 text-slate-600 space-y-2">
                <span className="block font-semibold">Building the Future of the DSA Ecosystem</span>
                <span className="block">
                  Our vision is to become the most trusted digital operating system for DSAs and loan
                  distribution partners in India.
                </span>
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="mb-3 text-xl font-bold text-indigo-600">Mission</h3>
              <div className="text-base leading-7 text-slate-600 space-y-3">
                <p className="font-semibold">Simplifying Financial Operations Through Technology</p>
                <p>
                  Our mission is to simplify and modernize the way financial sales teams operate.
                </p>
                <p>We achieve this by:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Automating repetitive operational tasks</li>
                  <li>Creating transparent workflows across departments</li>
                  <li>Providing real-time insights for better decision-making</li>
                  <li>Designing tools that are simple, powerful, and human-centric</li>
                </ul>
                <p>
                  Smart Dial is built to help DSA businesses focus on what matters most - closing more deals
                  and growing their business.
                </p>
              </div>
            </div>
          </div>

        </Motion.div>
      </div>
    </section>
  );
};

export default About;

