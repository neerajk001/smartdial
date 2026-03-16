// Features.jsx
import React from "react";
import { motion as Motion } from "framer-motion";
import {
  Phone,
  Users,
  Banknote,
  CalendarDays,
  LayoutGrid,
  ShieldCheck,
} from "lucide-react";

const Features = () => {
  const [showAllMobile, setShowAllMobile] = React.useState(false);

  const features = [
    {
      icon: <Phone className="h-7 w-7" />,
      title: "Smart Calling System",
      description:
        "Integrated outbound calling from within Smart Dial-no external dialer needed. Every call is logged with duration, connection status, follow-up schedule, and centralized history so managers can review activity in one place.",
    },
    {
      icon: <LayoutGrid className="h-7 w-7" />,
      title: "Customer Database",
      description:
        "A central, structured database for all leads and customers. Store contact details, notes, interaction history, tags, and use powerful search and filters to find the right records instantly.",
    },
    {
      icon: <CalendarDays className="h-7 w-7" />,
      title: "Follow-Up Reminder System",
      description:
        "Intelligent follow-up queues and reminders that tell telecallers exactly whom to call next. Automatic callbacks, reminder notifications, and completion tracking ensure no prospect is ever forgotten.",
    },
    {
      icon: <Banknote className="h-7 w-7" />,
      title: "Loan Management Workflow",
      description:
        "Send loan login requests directly to the backend CRM, verify serviceable pincodes, and track file status across banks and NBFCs. Sales and operations stay connected in a single, structured workflow.",
    },
    {
      icon: <ShieldCheck className="h-7 w-7" />,
      title: "User Roles & Permissions",
      description:
        "Role-based access for Admin, Sub Admin, Team Leader, and Telecaller so each user sees the right data and actions. Permissions keep information secure while making team management easier.",
    },
    {
      icon: <CalendarDays className="h-7 w-7" />,
      title: "Attendance & HR Tools",
      description:
        "Daily attendance, leave applications, holiday calendar, and salary slip downloads-all from the same platform. HR workflows become simpler and more transparent for both managers and staff.",
    },
    {
      icon: <Users className="h-7 w-7" />,
      title: "Analytics & Performance Reports",
      description:
        "Real-time dashboards and MIS reports show telecaller productivity, call volume, conversion rates, and team comparisons with leaderboards and rankings for better decision-making.",
    },
    {
      icon: <ShieldCheck className="h-7 w-7" />,
      title: "Secure & Reliable Platform",
      description:
        "Secure cloud infrastructure with data encryption in transit and at rest, daily backups, and detailed activity logs-so your business and customer data stays protected and always accessible.",
    },
  ];

  // Animation variants for card lift and glow border
  const cardVariants = {
    hover: { scale: 1.03 },
    rest: { scale: 1 },
  };

  const glowVariants = {
    hover: { opacity: 1 },
    rest: { opacity: 0 },
  };

  const renderFeatureCard = (feature, index) => (
    <Motion.div
      key={`${feature.title}-${index}`}
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={cardVariants}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="relative rounded-xl shadow-xl shadow-blue-900/10 border border-slate-200/70"
    >
      <Motion.div
        className="pointer-events-none absolute inset-0 rounded-xl"
        style={{
          background:
            "linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)",
        }}
        variants={glowVariants}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      />

      <div className="relative h-full w-full rounded-[11px] bg-white p-6">
        <div className="flex items-start gap-4">
          <div className="shrink-0 rounded-lg bg-blue-100 p-3 text-blue-600">
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
    </Motion.div>
  );

  const firstThreeFeatures = features.slice(0, 3);
  const remainingFeatures = features.slice(3);

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* 1. UPGRADED HEADING: Added a gradient to the text */}
          <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
            Key Features
          </h2>
          <p className="mb-12 max-w-3xl text-lg text-slate-600">
            Smart Dial offers a comprehensive set of tools designed specifically for financial sales and DSA
            operations.
          </p>

          {/* Desktop/Tablet: Show all cards */}
          <div className="hidden md:grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => renderFeatureCard(feature, index))}
          </div>

          {/* Mobile: Show 3 cards + accordion for remaining */}
          <div className="grid gap-6 md:hidden">
            {firstThreeFeatures.map((feature, index) => renderFeatureCard(feature, index))}

            {remainingFeatures.length > 0 && (
              <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
                <button
                  type="button"
                  onClick={() => setShowAllMobile((prev) => !prev)}
                  className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-semibold text-slate-800"
                  aria-expanded={showAllMobile}
                >
                  <span>{showAllMobile ? "Hide more features" : "Show all features"}</span>
                  <span className="text-slate-500">{showAllMobile ? "-" : "+"}</span>
                </button>

                {showAllMobile && (
                  <div className="grid gap-6 p-4 pt-0">
                    {remainingFeatures.map((feature, index) => renderFeatureCard(feature, index + 3))}
                  </div>
                )}
              </div>
            )}
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default Features;
