// Audience.jsx
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react"; // Import icons

const Audience = () => {
  const audiences = [
    "DSA partners working with banks and NBFCs",
    "Loan agents and financial sales teams",
    "Call centers and BPOs handling loan sales or telecalling",
    "Financial institutions managing distributed sales teams",
  ];

  // Animation variants for the staggered list
  const listContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Each child will animate 0.15s after the previous
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    // 1. Swapped background for consistency with the "premium" Features section
    <section className="w-full bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        {/* 2. Changed to a 2-column layout for a more "designed" feel */}
        <div className="grid items-center gap-12 md:grid-cols-2">
          
          {/* --- LEFT COLUMN (Info & CTA) --- */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* 3. Added gradient text to heading for premium consistency */}
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
              👥 Who We Built This For
            </h2>
            <p className="mb-8 max-w-3xl text-lg leading-7 text-gray-700">
              Smart Dial is designed for any team involved in high-volume DSA and
              financial sales operations.
            </p>
            {/* 4. Moved CTA button here and upgraded icon */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="inline-flex items-center gap-2.5 rounded-lg bg-blue-600 px-7 py-3 text-base font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              Start Your Free Trial
              <ArrowRight className="h-5 w-5" />
            </motion.a>
          </motion.div>

          {/* --- RIGHT COLUMN (Audience List) --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            {/* 5. The "Glassmorphism" Card
                - backdrop-blur-md: Creates the frosted glass effect
                - bg-white/70: Makes it semi-transparent
                - ring-1 ring-white/50: Gives it a subtle "glass edge"
            */}
            <motion.ul
              variants={listContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="relative flex flex-col gap-6 rounded-2xl p-8 backdrop-blur-md bg-white/70 shadow-xl shadow-blue-900/10 ring-1 ring-white/50"
            >
              {audiences.map((audience, index) => (
                <motion.li
                  key={index}
                  variants={listItemVariants}
                  className="flex items-start gap-4"
                >
                  {/* 6. Upgraded Icon Styling */}
                  <div className="flex-shrink-0 rounded-full bg-blue-600/10 p-2 text-blue-600">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <p className="pt-1 text-base font-medium leading-6 text-slate-800">
                    {audience}
                  </p>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Audience;