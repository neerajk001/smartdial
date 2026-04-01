import React from 'react';
import { motion as Motion } from 'framer-motion';
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Clock3,
  Layers,
  Shield,
  Sparkles,
  Target,
  Rocket
} from 'lucide-react';

const milestones = [
  {
    year: '2023',
    title: 'Built for DSA reality',
    text: 'We started with one clear goal: create software that matches real loan sales workflows, not generic CRM templates.',
    icon: Target
  },
  {
    year: '2024',
    title: 'Operational backbone',
    text: 'Telecalling, lead flow, and backend tracking came into one connected platform for growing teams.',
    icon: Layers
  },
  {
    year: '2025',
    title: 'Scale and reliability',
    text: 'Faster reporting, clearer accountability, and stable daily operations for distributed teams across cities.',
    icon: Rocket
  },
  {
    year: 'Today',
    title: 'Focused on outcomes',
    text: 'We continue to improve conversion visibility, team productivity, and workflow clarity for every customer.',
    icon: Sparkles
  },
];

const pillars = [
  {
    icon: Layers,
    title: 'Connected Workflow',
    text: 'Sales, follow-ups, and backend processing work in one system with fewer handoff delays.',
    color: 'from-blue-100 to-cyan-100 text-blue-700',
    hoverRing: 'group-hover:ring-blue-300'
  },
  {
    icon: Clock3,
    title: 'Faster Execution',
    text: 'Teams spend less time on manual coordination and more time on conversion-focused actions.',
    color: 'from-purple-100 to-pink-100 text-purple-700',
    hoverRing: 'group-hover:ring-purple-300'
  },
  {
    icon: BarChart3,
    title: 'Decision Clarity',
    text: 'Real-time reporting helps managers identify bottlenecks quickly and improve performance.',
    color: 'from-amber-100 to-orange-100 text-orange-700',
    hoverRing: 'group-hover:ring-orange-300'
  },
  {
    icon: Shield,
    title: 'Trust and Control',
    text: 'Role-based access and structured data flow improve transparency and operational confidence.',
    color: 'from-emerald-100 to-teal-100 text-emerald-700',
    hoverRing: 'group-hover:ring-emerald-300'
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const About = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-indigo-500/30">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-24 pb-24 md:pt-32 md:pb-32 bg-white border-b border-slate-200">
        {/* Soft Blurs vs aggressive ones */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
        <div className="pointer-events-none absolute -left-20 top-0 -z-10 h-80 w-80 translate-y-1/2 opacity-40 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.3)_0,rgba(0,0,0,0)_100%)] blur-[80px]" />
        <div className="pointer-events-none absolute -right-20 top-0 -z-10 h-80 w-80 translate-y-1/2 opacity-40 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.3)_0,rgba(0,0,0,0)_100%)] blur-[80px]" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700 shadow-xs">
              <Sparkles className="h-4 w-4" />
              <span>Why Smart Dial Exists</span>
            </div>
            
            <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
              A smarter OS for <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600">
                modern DSA teams
              </span>
            </h1>
            
            <p className="mt-8 max-w-2xl text-lg text-slate-600 sm:text-xl leading-relaxed">
              Smart Dial is engineered for how financial sales teams actually work: high follow-up volume,
              distributed coordination, and a constant need for real-time visibility.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a href="/contact" className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-indigo-600 px-8 py-4 font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all hover:scale-105 hover:shadow-indigo-500/40">
                <span className="relative flex items-center gap-2">
                  Contact to our expert
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            </div>
          </Motion.div>
        </div>
      </section>

      {/* 2. TIMELINE / MILESTONES */}
      <section className="relative py-20 sm:py-28 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 md:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">How We Evolved</h2>
            <p className="mt-4 text-lg text-slate-600 md:mx-auto md:max-w-2xl">
              From a focused product idea into a powerful engine driving operational teams daily.
            </p>
          </div>

          <Motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {milestones.map((m) => {
              const Icon = m.icon;
              return (
                <Motion.div
                  key={m.year}
                  variants={itemVariants}
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-500/10"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl group-hover:bg-indigo-500/10 transition-all" />
                  
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 border border-slate-100 text-indigo-600 group-hover:scale-110 group-hover:bg-indigo-50 group-hover:border-indigo-200 transition-all">
                    <Icon className="h-6 w-6" />
                  </div>
                  
                  <div className="text-sm font-bold tracking-widest text-indigo-600 uppercase mb-2">
                    {m.year}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{m.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {m.text}
                  </p>
                </Motion.div>
              );
            })}
          </Motion.div>
        </div>
      </section>

      {/* 3. CORE PILLARS */}
      <section className="relative py-20 sm:py-28 bg-white border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 md:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">What We Optimize For</h2>
            <p className="mt-4 text-lg text-slate-600 md:mx-auto md:max-w-2xl">
              The fundamental pillars that drive our engineering and service decisions.
            </p>
          </div>

          <Motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-6 md:grid-cols-2"
          >
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <Motion.div
                  key={p.title}
                  variants={itemVariants}
                  className="group flex flex-col sm:flex-row gap-6 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8 transition-all hover:border-slate-300 hover:bg-white hover:shadow-lg"
                >
                  <div className={`flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br ring-1 ring-slate-200 shadow-xs ${p.color} ${p.hoverRing} group-hover:scale-110 transition-all`}>
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{p.title}</h3>
                    <p className="text-slate-600 leading-relaxed">
                      {p.text}
                    </p>
                  </div>
                </Motion.div>
              );
            })}
          </Motion.div>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="py-20 sm:py-28 bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-[2.5rem] bg-linear-to-r from-slate-900 via-slate-800 to-slate-900 p-10 sm:p-16 text-center shadow-xl border border-slate-800"
          >
            <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
                Built for teams that execute daily
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-slate-300 mb-10">
                If your team handles telecalling, follow-ups, and backend coordination every day,
                Smart Dial gives you the structure to move faster with fewer blind spots.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="/pricing" className="group inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-bold text-slate-900 transition-all hover:scale-105 hover:bg-slate-100 shadow-md shadow-black/20">
                  View our plans
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
              
              <ul className="mt-12 flex flex-col sm:flex-row justify-center gap-6 sm:gap-8 text-sm text-slate-300">
                {['Clear handoffs', 'Manager visibility', 'Reliable workflows'].map((item) => (
                  <li key={item} className="flex items-center justify-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Motion.div>
        </div>
      </section>
      
    </div>
  );
};

export default About;
