import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Login = () => {
  const [loginType, setLoginType] = useState('secure');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login submitted:', { username, password, loginType });
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-100 to-slate-200 flex items-center justify-center px-4 py-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden"
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
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Username/Mobile Number */}
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Username/Mobile Number
                </label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Chirag.w"
                  className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••••"
                  className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  required
                />
              </div>

              {/* Login Type */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Login Type
                </label>
                <div className="flex items-center gap-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="loginType"
                      value="secure"
                      checked={loginType === 'secure'}
                      onChange={(e) => setLoginType(e.target.value)}
                      className="w-5 h-5 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-slate-700">Secure</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="loginType"
                      value="unsecure"
                      checked={loginType === 'unsecure'}
                      onChange={(e) => setLoginType(e.target.value)}
                      className="w-5 h-5 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-slate-700">Unsecure</span>
                  </label>
                </div>
              </div>

              {/* Sign In Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-lg transition shadow-lg shadow-blue-700/30"
              >
                SIGN IN
              </motion.button>

              {/* Forgot Password */}
              <div className="text-center">
                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium text-sm underline">
                  Forget Password?
                </a>
              </div>
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
