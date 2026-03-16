// Problem.jsx
import React from "react";
import { motion as Motion } from "framer-motion";

const Problem = () => {
  const problems = [
    {
      number: "1",
      title: "High Agent Attrition",
      description:
        "Telecallers and loan agents often leave organizations due to poor lead management, lack of performance visibility, and unclear incentive calculations. Without proper systems to track leads and rewards, agent motivation decreases and turnover increases.",
    },
    {
      number: "2",
      title: "Lack of Transparency",
      description:
        "Telecalling and backend processing teams often operate in silos. This disconnect creates communication gaps, delays in file processing, and confusion about the status of loan applications-making it hard for managers to track real-time progress.",
    },
    {
      number: "3",
      title: "Slow Loan Processing",
      description:
        "Manual spreadsheets, ad-hoc follow-ups, and fragmented tools slow down the loan approval process. These inefficiencies increase turnaround time (TAT), reduce scalability, and negatively impact customer experience.",
    },
  ];

  return (
    <section className="w-full bg-linear-to-br from-slate-50 to-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section title */}
          <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
            The Problem in the DSA Industry
          </h2>
          <p className="mb-10 max-w-3xl text-base leading-7 text-gray-700 md:text-lg">
            Despite rapid growth in the loan distribution sector, many DSA businesses still rely on outdated,
            manual processes. These inefficiencies create several operational challenges.
          </p>

          {/* Problem cards */}
          <div className="grid gap-6 md:grid-cols-3">
            {problems.map((problem, index) => (
              <Motion.div
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
              </Motion.div>
            ))}
          </div>

          {/* Smart Dial solution */}
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 p-6 text-center text-white shadow-lg md:p-8"
          >
            <p className="text-lg font-semibold md:text-xl">
              Smart Dial addresses these challenges by providing a single integrated platform for DSA operations.
            </p>
            <p className="mt-3 text-base md:text-lg">
              The platform connects telecalling, loan processing, team management, and analytics into one seamless
              workflow-giving you real-time visibility, faster file movement, structured lead management, automated
              follow-ups, and transparent performance metrics.
            </p>
          </Motion.div>
        </Motion.div>
      </div>
    </section>
  );
};

export default Problem;

