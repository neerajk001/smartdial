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
  Users,
} from 'lucide-react';
import logo from '../assets/logo.png';

const milestones = [
  {
    year: '2023',
    title: 'Built for DSA reality',
    text: 'We started with one clear goal: create software that matches real loan sales workflows, not generic CRM templates.',
  },
  {
    year: '2024',
    title: 'Operational backbone launched',
    text: 'Telecalling, lead flow, and backend tracking came into one connected platform for growing teams.',
  },
  {
    year: '2025',
    title: 'Scale and reliability',
    text: 'Faster reporting, clearer accountability, and stable daily operations for distributed teams across cities.',
  },
  {
    year: 'Today',
    title: 'Focused on outcomes',
    text: 'We continue to improve conversion visibility, team productivity, and workflow clarity for every customer.',
  },
];

const pillars = [
  {
    icon: Layers,
    title: 'Connected Workflow',
    text: 'Sales, follow-ups, and backend processing work in one system with fewer handoff delays.',
  },
  {
    icon: Clock3,
    title: 'Faster Execution',
    text: 'Teams spend less time on manual coordination and more time on conversion-focused actions.',
  },
  {
    icon: BarChart3,
    title: 'Decision Clarity',
    text: 'Real-time reporting helps managers identify bottlenecks quickly and improve performance.',
  },
  {
    icon: Shield,
    title: 'Trust and Control',
    text: 'Role-based access and structured data flow improve transparency and operational confidence.',
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 md:grid-cols-2 md:py-24">
          <Motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
              <Sparkles className="h-4 w-4" />
              Why Smart Dial exists
            </div>
            <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
              A sharper operating system
              <span className="block text-blue-700">for modern DSA teams</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 md:text-lg">
              Smart Dial is designed for how financial sales teams actually work: high follow-up volume,
              distributed coordination, and constant need for visibility.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-blue-500 hover:text-blue-700"
              >
                Talk to our team
              </a>
            </div>
          </Motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <Motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-3xl font-bold md:text-4xl">How we evolved</h2>
          <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600 md:text-lg">
            A short timeline of how Smart Dial grew from a focused product idea into a practical system
            used by operational teams daily.
          </p>
        </Motion.div>

        <div className="grid gap-4 md:grid-cols-2">
          {milestones.map((m, idx) => (
            <Motion.div
              key={m.year}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">{m.year}</p>
              <h3 className="mt-2 text-xl font-bold text-slate-900">{m.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{m.text}</p>
            </Motion.div>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
          <Motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <h2 className="text-3xl font-bold md:text-4xl">What we optimize for</h2>
            <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600 md:text-lg">
              These are the pillars behind our product and service decisions.
            </p>
          </Motion.div>

          <div className="grid gap-6 sm:grid-cols-2">
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <Motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.05 }}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
                >
                  <div className="inline-flex rounded-lg bg-blue-100 p-3 text-blue-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-slate-900">{p.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{p.text}</p>
                </Motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="rounded-2xl bg-linear-to-r from-slate-900 to-slate-800 p-8 text-white md:p-10">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-bold md:text-4xl">Built for teams that execute daily</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300 md:text-base">
                If your team handles telecalling, follow-ups, and backend coordination every day,
                Smart Dial gives you the structure to move faster with fewer blind spots.
              </p>
            </div>

            <ul className="space-y-3 text-sm text-slate-200">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-400" />
                Clear handoffs between sales and operations
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-400" />
                Better manager visibility across active pipelines
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-400" />
                Reliable workflows for scaling teams
              </li>
              <li className="pt-2">
                <a
                  href="/pricing"
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 font-semibold text-slate-900"
                >
                  View plans
                  <ArrowRight className="h-4 w-4" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
