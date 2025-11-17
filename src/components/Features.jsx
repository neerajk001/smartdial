// Features.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Users,
  Banknote,
  CalendarDays,
  LayoutGrid,
  ShieldCheck,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Phone className="h-7 w-7" />,
      title: "Smart Calling System",
      description:
        "Make calls directly from the app with an integrated auto-dialer. Track call logs, connected/not connected attempts, duration, and follow-up lists.",
    },
    {
      icon: <ShieldCheck className="h-7 w-7" />,
      title: "User Roles & Permissions",
      description:
        "Role-based access for Admin, Sub Admin, Team Leader, and Telecaller to manage teams and monitor performance efficiently.",
    },
    {
      icon: <Banknote className="h-7 w-7" />,
      title: "Loan Management",
      description:
        "Send login requests to the back-end CRM, manage bank/NBFC listings, check serviceable pincodes, and track file status in real-time.",
    },
    {
      icon: <CalendarDays className="h-7 w-7" />,
      title: "Attendance & HR Tools",
      description:
        "Mark attendance, apply for leave, view holiday lists, and download salary slips — directly from the app.",
    },
    {
      icon: <LayoutGrid className="h-7 w-7" />,
      title: "Integrated Web CRM",
      description:
        "The web-based CRM lets backend teams review login requests, manage documents, and track performance seamlessly.",
    },
    {
      icon: <Users className="h-7 w-7" />,
      title: "Team & Performance",
      description:
        "Monitor individual and team performance with dashboards, leaderboards, and detailed analytics reports.",
    },
  ];

  // Animation variants for the new "Glow Border"
  const cardVariants = {
    hover: { opacity: 1 },
    rest: { opacity: 0 },
  };

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* 1. UPGRADED HEADING: Added a gradient to the text */}
          <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
            ⚙️ Key Features
          </h2>
          <p className="mb-12 max-w-3xl text-lg text-slate-600">
            Everything you need to manage DSA operations efficiently and scale
            faster.
          </p>

          {/* Card Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial="rest"
                whileHover="hover"
                animate="rest"
                // 2. UPGRADED CARD: Added "lift" on hover and subtle transition
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                // Kept the clean shadow and border, but removed overflow-hidden
                className="relative rounded-xl shadow-xl shadow-blue-900/10 border border-slate-200/70"
              >
                {/* 3. NEW "GLOW BORDER" ELEMENT:
                    This div is a gradient that fades in on hover.
                    It sits *behind* the main content.
                */}
                <motion.div
                  className="pointer-events-none absolute inset-0 rounded-xl"
                  style={{
                    background:
                      "linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)",
                  }}
                  variants={cardVariants}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />

                {/* 4. NEW CONTENT CONTAINER:
                    This sits *on top* of the glow border.
                    It has a white background and a *slightly smaller* border-radius (11px vs 12px for the parent)
                    which is what *creates* the 1px gradient border effect.
                */}
                <div className="relative h-full w-full rounded-[11px] bg-white p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 rounded-lg bg-blue-100 p-3 text-blue-600">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-xl font-semibold text-slate-900">
                        {feature.title}
                      </h3>
                      <p className="text-base leading-6 text-gray-700">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;