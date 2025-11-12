// Features.jsx
import React from "react";
import { motion } from "framer-motion";

const Features = () => {
  const features = [
    {
      icon: "📞",
      title: "Smart Calling System",
      description:
        "Make calls directly from the app with an integrated auto-dialer. Track call logs, connected/not connected attempts, duration, and follow-up lists.",
    },
    {
      icon: "👩‍💼",
      title: "User Roles & Permissions",
      description:
        "Role-based access for Admin, Sub Admin, Team Leader, and Telecaller to manage teams and monitor performance efficiently.",
    },
    {
      icon: "🧾",
      title: "Loan Management",
      description:
        "Send login requests to the back-end CRM, manage bank/NBFC listings, check serviceable pincodes, and track file status in real-time.",
    },
    {
      icon: "🕒",
      title: "Attendance & HR Tools",
      description:
        "Mark attendance, apply for leave, view holiday lists, and download salary slips — directly from the app.",
    },
    {
      icon: "💻",
      title: "Integrated Web CRM",
      description:
        "The web-based CRM lets backend teams review login requests, manage documents, and track performance seamlessly.",
    },
  ];

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
            ⚙️ Key Features
          </h2>
          <p className="mb-10 max-w-3xl text-base leading-7 text-gray-700 md:text-lg">
            Everything you need to manage DSA operations efficiently and scale faster.
          </p>

          {/* Feature cards - alternating colors */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-xl p-6 shadow-md ring-1 ring-black/5 ${
                  index % 2 === 0 ? "bg-blue-50" : "bg-indigo-50"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{feature.icon}</div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-semibold text-slate-900">{feature.title}</h3>
                    <p className="text-base leading-6 text-gray-700">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Design tip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-6 text-center"
          >
            <p className="text-sm text-gray-600">
              💡 <strong>Design Tip:</strong> Use alternating colored sections or icon cards for
              better visual appeal.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
