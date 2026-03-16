import React, { useEffect, useState } from 'react';
import { motion as Motion } from 'framer-motion';
import { saveClientLead } from '../services/smartDialApi';
import logo from '../assets/logo.png';

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');

  useEffect(() => {
    if (submitStatus !== 'success') {
      return undefined;
    }

    const timer = setTimeout(() => {
      setSubmitStatus('idle');
    }, 3000);

    return () => clearTimeout(timer);
  }, [submitStatus]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const addressWithGstin = formData.gstin
        ? `${formData.address} | GSTIN: ${formData.gstin}`
        : formData.address;

      await saveClientLead({
        name: formData.name,
        phone: formData.mobile,
        companyName: formData.companyName,
        email: formData.email,
        noOfEmp: formData.numberOfEmployees,
        address: addressWithGstin,
      });

      setSubmitStatus('success');
    } catch (error) {
      console.error('Register submit failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-100 to-slate-200 flex items-center justify-center px-3 sm:px-4 py-4 sm:py-8">
      <Motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-6xl bg-white rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl overflow-hidden"
      >
        <div className="grid md:grid-cols-2 gap-0">
          {/* Left Side - Login Form */}
          <div className="p-4 sm:p-6 md:p-8 lg:p-10">
            {/* Logo and Title */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <img
                  src={logo}
                  alt="Smart Dial logo"
                  className="h-12 w-auto"
                />
              </div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-1">
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
              <Motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className={`w-full md:col-span-2 text-white font-semibold py-3 rounded-lg transition shadow-lg ${
                  submitStatus === 'success'
                    ? 'bg-emerald-600 shadow-emerald-600/30'
                    : 'bg-blue-700 hover:bg-blue-800 shadow-blue-700/30'
                } ${isSubmitting ? 'opacity-80 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'SUBMITTING...' : submitStatus === 'success' ? 'SUBMITTED' : 'SUBMIT'}
              </Motion.button>

              {submitStatus === 'error' && (
                <p className="md:col-span-2 text-sm text-red-600 text-center">
                  Submission failed. Please try again.
                </p>
              )}
            </form>
          </div>

          {/* Right Side - Illustration */}
          <div className="hidden md:flex bg-linear-to-br from-blue-50 to-slate-100 p-6 md:p-8 lg:p-10 flex-col items-center justify-center">
            <Motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full max-w-md"
            >
              {/* Illustration */}
              <div className="relative">
                <img
                  src={logo}
                  alt="Person working on laptop"
                  className="w-full h-auto rounded-2xl"
                />
              </div>   
  
              {/* Bottom Text */}
              <Motion.div
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
              </Motion.div>
            </Motion.div>
          </div>
        </div>
      </Motion.div>
    </div>
  );
};

export default Login;

