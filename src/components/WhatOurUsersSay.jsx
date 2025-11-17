// what-our-users-say.jsx
import React, { useRef } from "react";
// 1. Import new hooks for scroll-based animation
import { motion, useScroll, useTransform } from "framer-motion";
import { Star } from "lucide-react";

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
  {
    name: "Priya Singh",
    role: "Director, Apex Solutions",
    quote:
      "The reporting features are incredibly detailed. We can finally track our team's performance accurately.",
    avatar: "https://i.pravatar.cc/80?img=45",
  },
  {
    name: "Karan Gupta",
    role: "Team Leader, RealProp",
    quote:
      "The integrated auto-dialer is a game-changer. It's saved us hundreds of hours.",
    avatar: "https://i.pravatar.cc/80?img=68",
  },
];

// 2. Component for the individual testimonial cards
const TestimonialCard = ({ t }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="w-full rounded-2xl border border-white/40 bg-white/70 p-6 backdrop-blur-lg shadow-xl shadow-blue-900/10"
  >
    <div className="flex items-center gap-3">
      <img
        src={t.avatar}
        alt={t.name}
        className="h-10 w-10 rounded-full object-cover"
      />
      <div>
        <div className="text-sm font-semibold text-slate-900">{t.name}</div>
        <div className="text-xs text-slate-600">{t.role}</div>
      </div>
    </div>
    <p className="mt-4 text-base leading-6 text-slate-700">“{t.quote}”</p>
  </motion.div>
);

// 3. Component for the animating columns
const ParallaxColumn = ({ testimonials, y = 0 }) => {
  return (
    <motion.div
      className="flex w-full flex-col gap-6"
      // 4. Apply the transformed 'y' value from useTransform
      style={{ y }}
    >
      {/* We duplicate the testimonials to create a "longer" scroll */}
      {[...testimonials, ...testimonials].map((t, idx) => (
        <TestimonialCard t={t} key={idx} />
      ))}
    </motion.div>
  );
};

const WhatOurUsersSay = () => {
  // 5. Setup a ref for the container to track scroll progress
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], // Track from start to end
  });

  // 6. Create different 'y' transforms for parallax
  // Each column moves at a different speed
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

  // Split testimonials for different columns
  const col1 = testimonials.slice(0, 3);
  const col2 = testimonials.slice(3, 6);
  const col3 = [testimonials[1], testimonials[4], testimonials[0]]; // Mix

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.05)_1px,transparent_1px)] [background-size:22px_22px]"
      />
      <div className="pointer-events-none absolute -top-12 left-16 -z-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-1/2 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-800 md:text-4xl">
            What our users say
          </h2>
          <p className="mt-3 text-lg leading-7 text-slate-700">
            Real stories from teams closing more leads with less effort.
          </p>
        </motion.div>

        {/* 7. NEW: Column Layout */}
        <div
          ref={containerRef}
          // 8. Add clipping and vertical fade masks
          className="relative mt-12 grid h-[600px] grid-cols-1 gap-6 overflow-hidden [mask-image:_linear-gradient(to_bottom,transparent_0,_black_10%,_black_90%,transparent_100%)] md:grid-cols-2 lg:grid-cols-3"
        >
          {/* The columns are hidden on mobile (md:flex) and we show a 
            static, simpler list instead. This is better for performance.
          */}
          
          {/* Desktop Parallax Columns */}
          <ParallaxColumn testimonials={col1} y={y1} />
          <div className="hidden md:block">
            <ParallaxColumn testimonials={col2} y={y2} />
          </div>
          <div className="hidden lg:block">
            <ParallaxColumn testimonials={col3} y={y3} />
          </div>

          {/* 9. NEW: Mobile Fallback (Static List) */}
          <div className="flex flex-col gap-6 md:hidden">
            <TestimonialCard t={testimonials[0]} />
            <TestimonialCard t={testimonials[1]} />
            <TestimonialCard t={testimonials[2]} />
          </div>
        </div>

        {/* Rating strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 flex items-center justify-center gap-4 text-sm text-slate-700"
        >
          <span className="inline-flex items-center gap-1.5">
            <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
            <span className="font-medium">4.9/5</span> average rating
          </span>
          <span className="text-slate-400">•</span>
          <span className="font-medium">Trusted by 1000+</span> agents
        </motion.div>
      </div>
    </section>
  );
};

export default WhatOurUsersSay;