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

          {/* Vision + Mission */}
          <div className="mt-10 grid gap-8 md:grid-cols-2 md:items-stretch">
            <div className="rounded-2xl bg-slate-50 p-6 md:p-7 border border-slate-200 shadow-sm hover:shadow-md transition-shadow h-full md:min-h-[420px] flex flex-col">
              <div className="mb-4 inline-flex w-fit rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold tracking-wide text-indigo-700">
                Vision
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Building the Future of the DSA Ecosystem</h3>
              <p className="mt-4 text-base leading-7 text-slate-600">
                We aim to become the most trusted digital operating system for DSAs and loan distribution
                partners across India.
              </p>
              <ul className="mt-5 space-y-2 text-sm leading-6 text-slate-600">
                <li>Unified sales, backend, and team workflows</li>
                <li>High transparency across every stage of loan operations</li>
                <li>Scalable systems for growing DSA businesses</li>
              </ul>
            </div>

            <div className="rounded-2xl bg-slate-50 p-6 md:p-7 border border-slate-200 shadow-sm hover:shadow-md transition-shadow h-full md:min-h-[420px] flex flex-col">
              <div className="mb-4 inline-flex w-fit rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold tracking-wide text-indigo-700">
                Mission
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Simplifying Financial Operations Through Technology</h3>
              <p className="mt-4 text-base leading-7 text-slate-600">
                We modernize how financial sales teams operate so they can work faster, with more clarity and
                better control.
              </p>
              <ul className="mt-5 space-y-2 text-sm leading-6 text-slate-600">
                <li>Automate repetitive operational tasks</li>
                <li>Provide real-time insights for better decisions</li>
                <li>Design tools that are simple, powerful, and human-centric</li>
              </ul>
            </div>
          </div>

        </Motion.div>
      </div>
    </section>
  );
};

export default About;

