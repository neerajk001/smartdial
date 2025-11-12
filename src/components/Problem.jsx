// Problem.jsx
import React from "react";
import { motion } from "framer-motion";

const Problem = () => {
  const problems = [
    {
      number: "1",
      title: "High Agent Attrition",
      description:
        "Poor lead management and unclear commission tracking lead to high agent turnover and reduced morale.",
    },
    {
      number: "2",
      title: "Lack of Transparency",
      description:
        "Disconnected front-end telecalling and back-end processing teams result in miscommunication and delays.",
    },
    {
      number: "3",
      title: "Slow Loan Approval TAT",
      description:
        "Fragmented systems and manual rework cause slow turnaround times, reducing scalability and profitability.",
    },
  ];

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
          <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">The Problem</h2>
          <p className="mb-10 max-w-3xl text-base leading-7 text-gray-700 md:text-lg">
            The DSA industry faces three critical challenges:
          </p>

          {/* Problem cards */}
          <div className="grid gap-6 md:grid-cols-3">
            {problems.map((problem, index) => (
              <motion.div
                key={problem.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-xl bg-white p-6 shadow-md ring-1 ring-black/5"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-xl font-bold text-red-600">
                  {problem.number}
                </div>
                <h3 className="mb-3 text-xl font-semibold text-slate-900">{problem.title}</h3>
                <p className="text-base leading-6 text-gray-600">{problem.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Closing statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 p-6 text-center text-white shadow-lg md:p-8"
          >
            <p className="text-lg font-semibold md:text-xl">
              These inefficiencies reduce scalability, profitability, and overall business
              performance.
            </p>
            <p className="mt-3 text-base md:text-lg">
              <strong>Smart Dial solves all three</strong> — by connecting teams, automating
              workflows, and giving you real-time control.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Problem;
