// hero.jsx
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star, Volume2, VolumeX, Zap } from "lucide-react";

// Animation variants (unchanged)
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
    <section className="relative w-full overflow-hidden bg-slate-50">
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute right-0 top-0 -z-10 h-96 w-96 rounded-full bg-indigo-500/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 -z-10 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />

      {/* Screen-adjustable container */}
      <div className="mx-auto max-w-7xl px-4 min-h-screen flex items-center">
        {/* 50/50 Grid */}
        <div className="grid items-center gap-12 md:grid-cols-2 py-16 md:py-0">
          
          {/* 1. TWEAK: Left column is now the "Sleek Product Window" */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative order-2 md:order-1" // Stays below on mobile
          >
            <div className="rounded-xl overflow-hidden shadow-2xl shadow-blue-900/20 border border-slate-300/50 bg-slate-900">
              {/* Window Header */}
              <div className="h-9 flex items-center gap-1.5 px-4 bg-slate-800">
                <div className="h-3 w-3 rounded-full bg-slate-600"></div>
                <div className="h-3 w-3 rounded-full bg-slate-600"></div>
                <div className="h-3 w-3 rounded-full bg-slate-600"></div>
              </div>
              
              {/* Video Content */}
              <div className="relative">
                <video
                  ref={videoRef}
                  className="w-full h-auto object-cover" // Aspect ratio will be handled by the video file
                  autoPlay
                  muted={muted}
                  loop
                  playsInline
                  preload="metadata"
                  poster="/Smart-Dial-Final-01.png"
                  aria-label="SmartDial in action"
                >
                  <source
                    src="/6999816_Motion_Graphics_Animation_1920x1080.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
                
                {/* Mute Button */}
                <div className="absolute bottom-4 right-4 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={toggleMute}
                    className="group flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white shadow-lg backdrop-blur-md transition hover:bg-black/70"
                    aria-pressed={!muted}
                    aria-label={muted ? "Unmute video" : "Mute video"}
                  >
                    {muted ? (
                      <VolumeX className="h-5 w-5" />
                    ) : (
                      <Volume2 className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2. Right column (text) is unchanged */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="order-1 flex flex-col md:order-2" // Stays on top on mobile
          >
            

            <motion.h1
              variants={item}
              className="text-3xl font-extrabold leading-[1.1] text-slate-900 md:text-5xl lg:text-6xl"
            >
              Smart Dial — Powering Smarter{" "}
              <span className="relative inline-block">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                  DSA Operations
                </span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="8"
                  viewBox="0 0 200 8"
                  fill="none"
                >
                  <path
                    d="M0 6C50 2 100 2 150 6C166.667 8 183.333 8 200 6"
                    stroke="url(#gradient)"
                    strokeWidth="3"
                  />
                  <defs>
                    <linearGradient
                      id="gradient"
                      x1="0"
                      y1="0"
                      x2="200"
                      y2="0"
                    >
                      <stop offset="0%" stopColor="#2563eb" />
                      <stop offset="50%" stopColor="#4f46e5" />
                      <stop offset="100%" stopColor="#7c3aed" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-lg leading-8 text-gray-600 font-semibold"
            >
              A complete mobile and web-based CRM solution designed for DSAs and
              financial teams who work with banks and NBFCs.
            </motion.p>
            <motion.p
              variants={item}
              className="mt-3 max-w-xl text-lg leading-8 text-gray-600 font-semibold"
            >
              Manage leads, monitor calls, and track team performance  all in
              one powerful platform.
            </motion.p>       
            
            <motion.div
              variants={item}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 text-base font-semibold text-white shadow-lg shadow-blue-500/30 transition-all hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5"
              >
                Book a Demo
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#"
                className="group inline-flex items-center gap-2 rounded-xl border-2 border-slate-300 bg-white px-5 py-3 text-base font-semibold text-slate-800 shadow-sm transition-all hover:border-blue-600 hover:text-blue-700"
              >
                Get Started
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-10 flex flex-wrap items-center gap-6"
            >
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  <img
                    className="inline-block h-8 w-8 rounded-full object-cover ring-2 ring-white"
                    src="https://i.pravatar.cc/80?img=5"
                    alt="User 1"
                  />
                  <img
                    className="inline-block h-8 w-8 rounded-full object-cover ring-2 ring-white"
                    src="https://i.pravatar.cc/80?img=15"
                    alt="User 2"
                  />
                  <img
                    className="inline-block h-8 w-8 rounded-full object-cover ring-2 ring-white"
                    src="https://i.pravatar.cc/80?img=32"
                    alt="User 3"
                  />
                </div>
                <span className="ml-3 text-sm font-medium text-gray-600">
                  10k+ Active Users
                </span>
              </div>
              <div className="flex items-center gap-1 text-sm font-medium text-gray-600">
                <Star
                  className="h-5 w-5 text-amber-400"
                  fill="currentColor"
                />
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