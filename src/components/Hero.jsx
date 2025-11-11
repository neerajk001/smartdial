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
    <section className="w-full bg-linear-to-br from-slate-50 to-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-10 md:py-14">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Left: animated video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-xl shadow-lg ring-1 ring-black/5">
              <video
                ref={videoRef}
                className="h-64 w-full object-cover md:h-80"
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
              {/* Overlay gradient for readability */}
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/10 via-transparent to-transparent" />
            </div>

            {/* Video controls */}
            <div className="absolute bottom-3 left-3 flex items-center gap-2">
              <button
                type="button"
                onClick={toggleMute}
                className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-slate-800 shadow-sm backdrop-blur hover:bg-white"
                aria-pressed={!muted}
              >
                {muted ? (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path d="M5 9v6h4l5 4V5L9 9H5z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path d="M5 9v6h4l5 4V5L9 9H5z" />
                    <path d="M16 8l5 5m0-5l-5 5" className="opacity-70" />
                  </svg>
                )}
                {muted ? "Unmute" : "Mute"}
              </button>
            </div>
          </motion.div>

          {/* Right: marketing copy and actions */}
          <motion.div variants={stagger} initial="hidden" animate="show" className="flex flex-col">
            {/* Small eyebrow heading */}
            <motion.div variants={container} className="mb-3 text-sm text-gray-600">
              Welcome To Smart Dial
            </motion.div>

            {/* Main headline */}
            <motion.h1
              variants={item}
              className="text-4xl font-extrabold leading-tight text-[#0f172a] md:text-5xl"
            >
              Simplify Customer Calling &amp; Follow-ups
              <br className="hidden sm:block" />
              with <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-indigo-600">SmartDial</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={item}
              className="mt-5 max-w-xl text-base leading-7 text-gray-600 md:text-lg"
            >
              Manage calls, save customer info, and never miss a follow-up — all in one powerful
              dialer app.
            </motion.p>

            {/* Actions */}
            <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                Explore More
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M13.5 4.5L21 12l-7.5 7.5-1.06-1.06L17.88 12l-5.44-5.44L13.5 4.5z" />
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50"
              >
                See Plans
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M13.5 4.5L21 12l-7.5 7.5-1.06-1.06L17.88 12l-5.44-5.44L13.5 4.5z" />
                </svg>
              </a>
            </motion.div>

            {/* Social proof */}
            <motion.div variants={item} className="mt-6 flex flex-wrap items-center gap-6 text-sm text-gray-600">
              <div className="inline-flex items-center gap-2">
                <span className="inline-flex -space-x-2 overflow-hidden">
                  <span className="h-6 w-6 rounded-full bg-gray-200" />
                  <span className="h-6 w-6 rounded-full bg-gray-200" />
                  <span className="h-6 w-6 rounded-full bg-gray-200" />
                </span>
                <span>Trusted by 10k+ teams</span>
              </div>
              <div className="inline-flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-yellow-500">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <span>4.9/5 average rating</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
