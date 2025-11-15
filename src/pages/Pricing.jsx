import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiCheckCircle, HiArrowRight } from 'react-icons/hi2';

// 1. Pricing data is stored in an array for easy management
const pricingData = {
  appAndWeb: [
    {
      name: "Quarterly",
      duration: "3 Months",
      price: "₹450 / ₹360",
      discount: "Discount: 20%",
      effectivePrice: "Effective Price (per User/Month) ₹120",
      features: [
        "Full access to all features",
        "Priority support",
        "Unlimited team members",
      ],
      isPopular: false,
    },
    {
      name: "Half Yearly",
      duration: "6 Months",
      price: "₹900 / ₹630",
      discount: "Discount: 30%",
      effectivePrice: "Effective Price (per User/Month) ₹105",
      features: [
        "Full access to all features",
        "Priority support",
        "Unlimited team members",
      ],
      isPopular: true,
    },
    {
      name: "Monthly",
      duration: "12 Months",
      price: "₹1800 / ₹900",
      discount: "Discount: 50%",
      effectivePrice: "Effective Price (per User/Month) ₹75",
      features: [
        "Full access to all features",
        "Priority support",
        "Unlimited team members",
      ],
      isPopular: false,
    },
  ],
  webOnly: [
    {
      name: "Quarterly",
      duration: "3 Months",
      price: "₹300 / ₹240",
      discount: "Discount: 20%",
      effectivePrice: "Effective Price (per User/Month) ₹80",
      features: [
        "Full access to all features",
        "Priority support",
        "Unlimited team members",
      ],
      isPopular: false,
    },
    {
      name: "Half Yearly",
      duration: "6 Months",
      price: "₹600 / ₹420",
      discount: "Discount: 30%",
      effectivePrice: "Effective Price (per User/Month) ₹70",
      features: [
        "Full access to all features",
        "Priority support",
        "Unlimited team members",
      ],
      isPopular: true,
    },
    {
      name: "Monthly",
      duration: "12 Months",
      price: "₹1200 / ₹600",
      discount: "Discount: 50%",
      effectivePrice: "Effective Price (per User/Month) ₹50",
      features: [
        "Full access to all features",
        "Priority support",
        "Unlimited team members",
      ],
      isPopular: false,
    },
  ],
};

// 2. Framer Motion variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1, // Stagger effect
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  }),
};

// 3. The main Pricing component
export default function Pricing() {
  const [planType, setPlanType] = useState('appAndWeb');

  const pricingPlans = planType === 'appAndWeb' ? pricingData.appAndWeb : pricingData.webOnly;

  return (
    <section className="py-24 bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- Header --- */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Choose a plan that grows with you
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Transparent pricing with all features included and priority support for every plan.
          </p>
        </div>

        {/* --- Toggle Switch --- */}
        <div className="flex justify-center mt-10">
          <div className="relative flex p-1 bg-white border border-gray-200 rounded-lg shadow-sm">
            {['appAndWeb', 'webOnly'].map((type) => (
              <button
                key={type}
                onClick={() => setPlanType(type)}
                className="relative px-6 py-2 text-sm font-semibold z-10 whitespace-nowrap"
              >
                {planType === type && (
                  <motion.div
                    layoutId="planToggle"
                    className="absolute inset-0 bg-indigo-600 rounded-md shadow-md"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className={`relative ${
                  planType === type 
                    ? 'text-white' 
                    : 'text-gray-600'
                }`}>
                  {type === 'appAndWeb' ? 'App & Web CRM' : 'Web CRM only'}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* --- Pricing Cards Grid --- */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              className={`
                border rounded-2xl p-8 flex flex-col
                ${
                  plan.isPopular
                    ? 'bg-linear-to-br from-indigo-600 to-purple-600 text-white border-indigo-400 shadow-2xl transform scale-105'
                    : 'bg-white border-gray-200 shadow-lg hover:shadow-xl'
                }
                relative
              `}
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <div className="absolute top-0 -translate-y-1/2 right-6 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Popular
                </div>
              )}

              {/* Plan Details */}
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <p className={`mt-1 text-sm ${
                plan.isPopular ? 'text-gray-300' : 'text-gray-500'
              }`}>
                {plan.duration}
              </p>

              {/* Price */}
              <div className="mt-6">
                <div className="text-3xl font-extrabold tracking-tight">
                  {plan.price}
                </div>
              </div>

              {/* Discounts */}
              <div className="mt-4 space-y-1 text-sm">
                <p className={`font-semibold ${
                  plan.isPopular ? 'text-indigo-300' : 'text-indigo-600'
                }`}>
                  {plan.discount}
                </p>
                <p className={plan.isPopular ? 'text-gray-300' : 'text-gray-500'}>
                  {plan.effectivePrice}
                </p>
              </div>

              {/* Features */}
              <ul className="mt-8 space-y-3 grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <HiCheckCircle className="w-5 h-5 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className={`
                  w-full mt-10 py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2
                  transition-colors
                  ${
                    plan.isPopular
                      ? 'bg-white text-indigo-600 hover:bg-gray-100'
                      : 'bg-indigo-600 text-white hover:bg-indigo-700'
                  }
                `}
              >
                Purchase Now
                <HiArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}