// what-our-users-say.jsx
import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const testimonials = [
  {
    name: "Aisha Verma",
    role: "Sales Lead, FinEdge",
    quote:
      "Smart Dial helped our team reduce follow‑up delays by 40%. The reminders and call logs are brilliant.",
    avatar: "https://i.pravatar.cc/80?img=5",
  },
  {
    name: "Rohit Sharma",
    role: "Founder, EventWale",
    quote:
      "From day one we could see every conversation in one place. Onboarding was smooth and fast.",
    avatar: "https://i.pravatar.cc/80?img=15",
  },
  {
    name: "Sneha Iyer",
    role: "Ops Manager, EduSpark",
    quote:
      "Exactly the clarity our agents needed—clean UI, powerful analytics, and excellent support.",
    avatar: "https://i.pravatar.cc/80?img=32",
  },
  {
    name: "Aditya Rao",
    role: "Head of CX, HealthLoop",
    quote:
      "We scaled to 50+ agents with zero chaos. Smart Dial keeps everything organized and accessible.",
    avatar: "https://i.pravatar.cc/80?img=10",
  },
];

const WhatOurUsersSay = () => {
  const controls = useAnimation();
  const intervalRef = useRef(null);

  useEffect(() => {
    // simple marquee autoplay
    controls.start({
      x: ["0%", "-50%"],
      transition: { repeat: Infinity, duration: 18, ease: "linear" },
    });
    return () => clearInterval(intervalRef.current);
  }, [controls]);

  return (
    <section className="relative isolate overflow-hidden bg-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.05)_1px,transparent_1px)] [background-size:22px_22px]"
      />
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
            What our users say
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Real stories from teams closing more leads with less effort.
          </p>
        </div>

        {/* Marquee row */}
        <div className="mt-10 overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={controls}
            whileHover={{ animationPlayState: "paused" }}
          >
            {[...testimonials, ...testimonials].map((t, idx) => (
              <motion.div
                key={idx}
                className="min-w-[320px] flex-1 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-sm font-medium text-slate-900">
                      {t.name}
                    </div>
                    <div className="text-xs text-slate-500">{t.role}</div>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-700">“{t.quote}”</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Rating strip */}
        <div className="mt-8 flex items-center justify-center gap-4 text-xs text-slate-600">
          <span className="inline-flex items-center gap-1">
            <svg viewBox="0 0 24 24" className="h-4 w-4 text-amber-500" fill="currentColor">
              <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            4.9/5 average rating
          </span>
          <span className="text-slate-400">•</span>
          <span>Trusted by 1000+ agents</span>
        </div>
      </div>
    </section>
  );
};

export default WhatOurUsersSay;
