import React, { useEffect, useState } from 'react';
import { motion as Motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { saveClientLead } from '../services/smartDialApi';
import logo from '../assets/logo.png';

const Login = () => {
  const navigate = useNavigate();
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
  const [submitErrorMessage, setSubmitErrorMessage] = useState('');
  const [fieldErrors, setFieldErrors] = useState({
    mobile: '',
    gstin: '',
    email: '',
  });

  const validationPatterns = {
    mobile: /^\d{10}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
    gstin: /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z][1-9A-Z]Z[0-9A-Z]$/,
  };

  const validateField = (field, value) => {
    const trimmed = String(value || '').trim();

    if (field === 'mobile') {
      if (!validationPatterns.mobile.test(trimmed)) {
        return 'Mobile number must be exactly 10 digits.';
      }
      return '';
    }

    if (field === 'email') {
      if (!validationPatterns.email.test(trimmed)) {
        return 'Please enter a valid email address.';
      }
      return '';
    }

    if (field === 'gstin') {
      if (!trimmed) {
        return '';
      }
      if (!validationPatterns.gstin.test(trimmed.toUpperCase())) {
        return 'GSTIN must be 15 characters in valid format (e.g., 27ABCDE1234F1Z5).';
      }
      return '';
    }

    return '';
  };

  const validateForm = (values) => {
    const nextErrors = {
      mobile: validateField('mobile', values.mobile),
      email: validateField('email', values.email),
      gstin: validateField('gstin', values.gstin),
    };

    setFieldErrors(nextErrors);
    return !Object.values(nextErrors).some(Boolean);
  };

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
    const nextValue = id === 'gstin' ? value.toUpperCase() : value;

    setFormData((prev) => ({ ...prev, [id]: nextValue }));

    if (id === 'mobile' || id === 'email' || id === 'gstin') {
      setFieldErrors((prev) => ({
        ...prev,
        [id]: validateField(id, nextValue),
      }));
    }

    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm(formData)) {
      setSubmitErrorMessage('Please correct highlighted fields and try again.');
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitErrorMessage('');

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
      setSubmitErrorMessage('');
      setFormData({
        name: '',
        mobile: '',
        companyName: '',
        address: '',
        numberOfEmployees: '',
        gstin: '',
        email: '',
      });
      setFieldErrors({ mobile: '', gstin: '', email: '' });
    } catch (error) {
      console.error('Register submit failed:', error);
      setSubmitErrorMessage(error?.message || 'Submission failed. Please try again.');
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
      return;
    }
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-100 to-slate-200 flex items-center justify-center px-3 sm:px-4 py-4 sm:py-8">
      {/* Success popup overlay */}
      {submitStatus === 'success' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <Motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="flex flex-col items-center gap-4 rounded-2xl bg-white px-10 py-8 shadow-2xl text-center"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
              <svg className="h-8 w-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-slate-900">Submitted Successfully!</h2>
            <p className="text-sm text-slate-500">Our team will get in touch with you shortly.</p>
          </Motion.div>
        </div>
      )}

      <Motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-6xl bg-white rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl overflow-hidden"
      >
        <div className="grid md:grid-cols-2 gap-0">
          {/* Left Side - Login Form */}
          <div className="p-4 sm:p-6 md:p-8 lg:p-10">
            <button
              type="button"
              onClick={handleGoBack}
              className="mb-4 inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm font-semibold text-slate-700 transition hover:border-blue-500 hover:text-blue-700"
            >
              <span aria-hidden="true">←</span>
              <span>Back</span>
            </button>

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
                  className={`w-full px-3 py-2.5 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition ${fieldErrors.mobile ? 'border-red-500' : 'border-slate-300'}`}
                  inputMode="numeric"
                  maxLength={10}
                  pattern="[0-9]{10}"
                  title="Mobile number must be exactly 10 digits"
                  required
                />
                {fieldErrors.mobile && <p className="mt-1 text-xs text-red-600">{fieldErrors.mobile}</p>}
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
                  className={`w-full px-3 py-2.5 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition ${fieldErrors.gstin ? 'border-red-500' : 'border-slate-300'}`}
                  maxLength={15}
                  pattern="[0-9]{2}[A-Za-z]{5}[0-9]{4}[A-Za-z][1-9A-Za-z]Z[0-9A-Za-z]"
                  title="Enter a valid 15-character GSTIN"
                />
                {fieldErrors.gstin && <p className="mt-1 text-xs text-red-600">{fieldErrors.gstin}</p>}
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
                  className={`w-full px-3 py-2.5 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition ${fieldErrors.email ? 'border-red-500' : 'border-slate-300'}`}
                  pattern="[^\s@]+@[^\s@]+\.[^\s@]{2,}"
                  title="Enter a valid email address"
                  required
                />
                {fieldErrors.email && <p className="mt-1 text-xs text-red-600">{fieldErrors.email}</p>}
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
                  {submitErrorMessage || 'Submission failed. Please try again.'}
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

