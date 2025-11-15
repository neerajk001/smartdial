// hero.jsx
import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stagger = {
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Hero = () => {
  const videoRef = React.useRef(null);
  const [muted, setMuted] = React.useState(true);

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };
  return (
    <section className="relative w-full overflow-hidden bg-linear-to-br from-blue-50 via-white to-indigo-50">
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute right-0 top-0 -z-10 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 -z-10 h-96 w-96 rounded-full bg-indigo-400/10 blur-3xl" />
      
      <div className="mx-auto max-w-7xl px-4 ">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Left: animated video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative order-2 md:order-1"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-black/10 transition-transform duration-300 hover:scale-[1.02]">
              <video
                ref={videoRef}                 
                className="h-72 w-full object-cover md:h-96"   
                autoPlay
                muted={muted}
                loop
                playsInline
                preload="metadata"
                poster="/Smart-Dial-Final-01.png"
                aria-label="SmartDial in action"
              >
                <source src="/6999816_Motion_Graphics_Animation_1920x1080.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {/* Overlay gradient for depth */}
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />
            </div>

            {/* Video controls - improved styling */}
            <div className="absolute bottom-4 left-4 flex items-center gap-2">
              <button
                type="button"
                onClick={toggleMute}
                className="group inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-medium text-slate-800 shadow-lg backdrop-blur transition hover:bg-white hover:shadow-xl"
                aria-pressed={!muted}
              >
                {muted ? (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-blue-600">
                    <path d="M5 9v6h4l5 4V5L9 9H5z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-blue-600">
                    <path d="M5 9v6h4l5 4V5L9 9H5z" />
                    <path d="M16 8l5 5m0-5l-5 5" className="opacity-70" />
                  </svg>
                )}
                <span className="group-hover:text-blue-600">{muted ? "Unmute" : "Mute"}</span>
              </button>
            </div>
          </motion.div>

          {/* Right: marketing copy and actions */}
          <motion.div 
            variants={stagger} 
            initial="hidden" 
            animate="show" 
            className="order-1 flex flex-col md:order-2"
          >
            {/* Badge */}
            

            {/* Main headline */}
            <motion.h1
              variants={item}
              className="text-4xl font-extrabold leading-[1.1] text-slate-900 md:text-5xl lg:text-6xl"
            >
              Smart Dial — Powering Smarter{" "}
              <span className="relative inline-block">
                <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600">
                  DSA Operations
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                  <path d="M0 6C50 2 100 2 150 6C166.667 8 183.333 8 200 6" stroke="url(#gradient)" strokeWidth="3"/>
                  <defs>
                    <linearGradient id="gradient" x1="0" y1="0" x2="200" y2="0">
                      <stop offset="0%" stopColor="#2563eb"/>
                      <stop offset="50%" stopColor="#4f46e5"/>
                      <stop offset="100%" stopColor="#7c3aed"/>
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-lg leading-8 text-gray-600"
            >
              A complete mobile and web-based CRM solution designed for DSAs and financial teams who
              work with banks and NBFCs.
            </motion.p>
            <motion.p
              variants={item}
              className="mt-3 max-w-xl text-lg leading-8 text-gray-600"
            >
              Manage leads, monitor calls, and track team performance — all in one powerful platform.
            </motion.p>

            {/* CTA Buttons - enhanced design */}
            <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#"
                className="group inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 px-4 py-2 text-base font-semibold text-white shadow-lg shadow-blue-500/30 transition-all hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5"
              >
                Book a Demo
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 transition-transform group-hover:translate-x-1">
                  <path d="M13.5 4.5L21 12l-7.5 7.5-1.06-1.06L17.88 12l-5.44-5.44L13.5 4.5z" />
                </svg>
              </a>
              <a
                href="#"
                className="group inline-flex items-center gap-2 rounded-xl border-2 border-gray-300 bg-white px-4 py-2 text-base font-semibold text-gray-900 shadow-sm transition-all hover:border-blue-600 hover:bg-blue-50 hover:text-blue-700"
              >
                Get Started
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 transition-transform group-hover:translate-x-1">
                  <path d="M13.5 4.5L21 12l-7.5 7.5-1.06-1.06L17.88 12l-5.44-5.44L13.5 4.5z" />
                </svg>
              </a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex -space-x-2">
                  <div className="h-8 w-8 rounded-full bg-blue-500 ring-2 ring-white" />
                  <div className="h-8 w-8 rounded-full bg-indigo-500 ring-2 ring-white" />
                  <div className="h-8 w-8 rounded-full bg-purple-500 ring-2 ring-white" />
                </div>
                <span className="text-sm font-medium text-gray-600">10k+ Active Users</span>
              </div>
              <div className="flex items-center gap-1 text-sm font-medium text-gray-600">
                <svg className="h-5 w-5 fill-yellow-400" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
                <span>4.9/5 Rating</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
