import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-br from-blue-600 via-indigo-700 to-purple-800 py-20 text-white">
        <div className="pointer-events-none absolute right-0 top-0 -z-10 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 -z-10 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">
              About Smart Dial
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-xl text-blue-100">
              Empowering DSAs and financial teams with cutting-edge CRM technology to streamline operations and accelerate growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-12 md:grid-cols-2 items-center"
          >
            <motion.div variants={item}>
              <h2 className="text-4xl font-bold text-slate-900">Our Story</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Smart Dial was born from a simple observation: DSA teams and financial professionals needed a better way to manage their customer relationships and daily operations.
              </p>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Traditional CRM systems were either too complex, too expensive, or not designed with the unique needs of the financial services industry in mind. We set out to change that.
              </p>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Today, Smart Dial serves over 500+ DSA teams across India, helping them close more deals, manage their pipelines more effectively, and grow their businesses with confidence.
              </p>
            </motion.div>

            <motion.div variants={item} className="relative">
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/Smart-Dial-Final-01.png"
                  alt="Smart Dial Team"
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-8 md:grid-cols-2"
          >
            <motion.div
              variants={item}
              className="rounded-2xl bg-linear-to-br from-blue-600 to-indigo-600 p-8 shadow-xl"
            >
              <div className="mb-4 inline-flex rounded-full bg-white/20 p-3">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold">Our Mission</h3>
              <p className="mt-4 text-lg leading-7 text-blue-100">
                To empower DSA teams with intelligent, easy-to-use technology that simplifies lead management, enhances productivity, and drives sustainable growth in the financial services sector.
              </p>
            </motion.div>

            <motion.div
              variants={item}
              className="rounded-2xl bg-linear-to-br from-purple-600 to-pink-600 p-8 shadow-xl"
            >
              <div className="mb-4 inline-flex rounded-full bg-white/20 p-3">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold">Our Vision</h3>
              <p className="mt-4 text-lg leading-7 text-purple-100">
                To become the leading CRM platform for DSAs across India, known for innovation, reliability, and exceptional customer success. We envision a future where every financial professional has access to world-class tools.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-slate-900">Our Core Values</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-16 grid gap-8 md:grid-cols-3"
          >
            {[
              {
                title: "Customer First",
                description: "We put our customers at the center of everything we do, constantly listening and evolving based on their needs.",
                icon: "❤️"
              },
              {
                title: "Innovation",
                description: "We embrace change and continuously push boundaries to deliver cutting-edge solutions that make a difference.",
                icon: "💡"
              },
              {
                title: "Integrity",
                description: "We operate with transparency, honesty, and ethical practices in all our business relationships.",
                icon: "🤝"
              },
              {
                title: "Excellence",
                description: "We strive for excellence in every detail, from product design to customer support.",
                icon: "⭐"
              },
              {
                title: "Collaboration",
                description: "We believe in the power of teamwork and foster a culture of collaboration and mutual respect.",
                icon: "🌟"
              },
              {
                title: "Growth",
                description: "We are committed to the growth of our customers, our team, and our company.",
                icon: "📈"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={item}
                className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <div className="mb-4 text-5xl">{value.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900">{value.title}</h3>
                <p className="mt-3 text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-600 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-8 text-center md:grid-cols-4"
          >
            {[
              { number: "500+", label: "DSA Teams" },
              { number: "10,000+", label: "Active Users" },
              { number: "1M+", label: "Calls Made" },
              { number: "4.9/5", label: "Customer Rating" }
            ].map((stat, index) => (
              <motion.div key={index} variants={item}>
                <div className="text-5xl font-bold">{stat.number}</div>
                <div className="mt-2 text-lg text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-900">Ready to Transform Your Business?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Join hundreds of DSA teams who trust Smart Dial to power their operations.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-500/30 transition-all hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5"
              >
                Get Started Today
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 transition-transform group-hover:translate-x-1">
                  <path d="M13.5 4.5L21 12l-7.5 7.5-1.06-1.06L17.88 12l-5.44-5.44L13.5 4.5z" />
                </svg>
              </a>
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-xl border-2 border-gray-300 bg-white px-8 py-4 text-base font-semibold text-gray-900 shadow-sm transition-all hover:border-blue-600 hover:bg-blue-50 hover:text-blue-700"
              >
                Contact Sales
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 transition-transform group-hover:translate-x-1">
                  <path d="M13.5 4.5L21 12l-7.5 7.5-1.06-1.06L17.88 12l-5.44-5.44L13.5 4.5z" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
