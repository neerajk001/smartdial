import React from 'react';
import { motion } from 'framer-motion';
import {
  HiOutlineDevicePhoneMobile,
  HiOutlineUserGroup,
  HiOutlineBellAlert,
  HiOutlineClock,
  HiOutlineShieldCheck,
  HiOutlineChartBar
} from 'react-icons/hi2'; // Using modern 'Heroicons 2'

// 1. Feature data is stored in an array for easy mapping
const features = [
  {
    title: "Built-in Dialer",
    description: "Make outbound calls directly from the app.",
    icon: <HiOutlineDevicePhoneMobile size={32} />,
    highlighted: true, // To match your reference
  },
  {
    title: "Customer Database",
    description: "Store customer names, numbers, and important notes.",
    icon: <HiOutlineUserGroup size={32} />,
    highlighted: false,
  },
  {
    title: "Follow-up Reminders",
    description: "Get notified when it's time to reconnect.",
    icon: <HiOutlineBellAlert size={32} />,
    highlighted: false,
  },
  {
    title: "Call History",
    description: "Review all your past call logs and outcomes.",
    icon: <HiOutlineClock size={32} />,
    highlighted: false,
  },
  {
    title: "Secure & Reliable",
    description: "Your data is safe with our enterprise-grade security.",
    icon: <HiOutlineShieldCheck size={32} />,
    highlighted: false,
  },
  {
    title: "Analytics",
    description: "Track your performance and close more deals.",
    icon: <HiOutlineChartBar size={32} />,
    highlighted: false,
  },
];

// 2. Framer Motion variants for animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Each card animates 0.1s after the previous
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

// 3. The main component
export default function Features() {
  return (
    <section className="py-20 sm:py-28 bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- Header --- */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Designed for Agents.
          </h2>
          <p className="mt-4 text-xl text-indigo-600 font-semibold">
            Built to Close More Leads
          </p>
        </div>

        {/* --- Features Grid --- */}
        <motion.div
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0px 10px 30px -5px rgba(0, 0, 0, 0.1)"
              }}
              transition={{ duration: 0.2 }}
              className={`
                rounded-2xl p-8 flex flex-col items-center text-center
                transition-colors duration-300
                ${
                  feature.highlighted
                    ? 'bg-linear-to-br from-indigo-600 to-purple-600 text-white shadow-2xl'
                    : 'bg-white shadow-lg hover:shadow-xl border border-gray-200'
                }
              `}
            >
              {/* Icon */}
              <div className={`
                flex items-center justify-center h-16 w-16 rounded-full
                ${
                  feature.highlighted
                    ? 'bg-white text-indigo-600'
                    : 'bg-indigo-100 text-indigo-600'
                }
              `}>
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="mt-6 text-xl font-bold">
                {feature.title}
              </h3>

              {/* Description */}
              <p className={`mt-2 text-base ${
                feature.highlighted 
                ? 'text-indigo-100' 
                : 'text-gray-600'
              }`}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}