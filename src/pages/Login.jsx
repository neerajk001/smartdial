import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Login = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    companyName: '',
    address: '',
    numberOfEmployees: '',
    gstin: '',
    email: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submit logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-100 to-slate-200 flex items-center justify-center px-4 py-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden"
      >
        <div className="grid md:grid-cols-2 gap-0">
          {/* Left Side - Login Form */}
          <div className="p-6 md:p-8 lg:p-10">
            {/* Logo and Title */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <img
                  src="/Smart-Dial-Final-01.png"
                  alt="Smart Dial logo"
                  className="h-12 w-auto"
                />
                <span className="text-xl font-bold text-slate-900">Smart <span className="text-blue-600">Dial</span></span>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">
                Welcome to Smart Dial CRM
              </h1>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  required
                />
              </div>

              {/* Mobile */}
              <div>
                <label htmlFor="mobile" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Mobile
                </label>
                <input
                  type="tel"
                  id="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Enter mobile number"
                  className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  required
                />
              </div>

              {/* Company Name */}
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Enter company name"
                  className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  required
                />
              </div>

              {/* Number of Employees */}
              <div>
                <label htmlFor="numberOfEmployees" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Number of Employees
                </label>
                <input
                  type="number"
                  id="numberOfEmployees"
                  value={formData.numberOfEmployees}
                  onChange={handleChange}
                  placeholder="Enter number of employees"
                  min="1"
                  className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  required
                />
              </div>

              {/* GSTIN (Optional) */}
              <div>
                <label htmlFor="gstin" className="block text-sm font-medium text-slate-700 mb-1.5">
                  GSTIN (Optional)
                </label>
                <input
                  type="text"
                  id="gstin"
                  value={formData.gstin}
                  onChange={handleChange}
                  placeholder="Enter GSTIN"
                  className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  required
                />
              </div>

              {/* Address */}
              <div className="md:col-span-2">
                <label htmlFor="address" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Address
                </label>
                <textarea
                  id="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter address"
                  rows={4}
                  className="w-full min-h-24 px-3 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
                  required
                />
              </div>

              {/* Sign In Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full md:col-span-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-lg transition shadow-lg shadow-blue-700/30"
              >
                SUBMIT
              </motion.button>
            </form>
          </div>

          {/* Right Side - Illustration */}
          <div className="bg-linear-to-br from-blue-50 to-slate-100 p-6 md:p-8 lg:p-10 flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full max-w-md"
            >
              {/* Illustration */}
              <div className="relative">
                <img
                  src="/logo-img.jpg"
                  alt="Person working on laptop"
                  className="w-full h-auto rounded-2xl"
                />
              </div>   
  
              {/* Bottom Text */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-6 text-center"
              > 
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Mobile + Web Application
                </h3>
                <p className="text-sm text-slate-600">
                  Access and manage everything seamlessly across devices.
                </p>
                
                {/* Progress Dots */}
                <div className="flex items-center justify-center gap-2 mt-4">
                  <div className="w-8 h-1 bg-blue-600 rounded-full"></div>
                  <div className="w-8 h-1 bg-slate-300 rounded-full"></div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
