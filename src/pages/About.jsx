import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Lightbulb, Shield, Users, TrendingUp, Award, ArrowRight, CheckCircle, Zap } from 'lucide-react';

const About = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section with Gradient */}
      <section className="relative overflow-hidden bg-linear-to-br from-blue-600 via-indigo-600 to-purple-700 py-24 md:py-32 text-white">
        <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-white/10 blur-3xl" />
        
        <div className="relative mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur-sm">
              <Zap className="h-4 w-4" />
              <span>Powering 10,000+ Users Nationwide</span>
            </div>
            <h1 className="text-5xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">
              About Smart Dial
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-xl md:text-2xl text-blue-50 leading-relaxed">
              Transforming how DSAs and financial teams operate with intelligent CRM solutions built for growth and efficiency.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section - Enhanced */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-12 lg:grid-cols-2 items-center"
          >
            <motion.div variants={item} className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 mb-6">
                <Award className="h-4 w-4" />
                Our Journey
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                Built for <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">Financial Teams</span>
              </h2>
              <div className="mt-6 space-y-4">
                <p className="text-lg leading-8 text-gray-700">
                  Smart Dial was born from a simple yet powerful observation: DSA teams and financial professionals needed a CRM that truly understands their workflow.
                </p>
                <p className="text-lg leading-8 text-gray-700">
                  Traditional systems were either too complex, overpriced, or lacked the specialized features that financial services demand. We built Smart Dial to bridge that gap.
                </p>
                <p className="text-lg leading-8 text-gray-700">
                  Today, we proudly serve 500+ DSA teams across India, helping them close more deals, streamline operations, and accelerate their business growth.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-blue-50 p-5 border border-blue-100">
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <div className="mt-1 text-sm font-medium text-gray-600">DSA Teams</div>
                </div>
                <div className="rounded-xl bg-indigo-50 p-5 border border-indigo-100">
                  <div className="text-3xl font-bold text-indigo-600">10K+</div>
                  <div className="mt-1 text-sm font-medium text-gray-600">Active Users</div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={item} className="order-1 lg:order-2 relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-blue-900/20 border-4 border-white max-w-md mx-auto lg:max-w-lg">
                <img
                  src="/Smart-Dial-Final-01.png"
                  alt="Smart Dial Platform"
                  className="h-full w-full object-contain"
                />
                <div className="absolute inset-0 bg-linear-to-t from-blue-900/40 to-transparent"></div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 rounded-2xl bg-white p-4 md:p-6 shadow-2xl border border-gray-100">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="rounded-full bg-amber-100 p-2 md:p-3">
                    <Award className="h-5 w-5 md:h-6 md:w-6 text-amber-600" />
                  </div>
                  <div>
                    <div className="text-xl md:text-2xl font-bold text-slate-900">4.9/5</div>
                    <div className="text-xs md:text-sm text-gray-600">Rating</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision - Modern Cards */}
      <section className="bg-slate-900 py-20 md:py-28 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold">Mission & Vision</h2>
            <p className="mt-4 text-xl text-slate-300">What drives us forward every day</p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-8 lg:grid-cols-2"
          >
            <motion.div
              variants={item}
              className="group relative overflow-hidden rounded-2xl bg-linear-to-br from-blue-500 to-indigo-600 p-10 shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
              <div className="relative">
                <div className="mb-6 inline-flex rounded-2xl bg-white/20 p-4 backdrop-blur-sm">
                  <Target className="h-10 w-10" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h3>
                <p className="text-lg leading-8 text-blue-50">
                  To empower DSA teams with intelligent, intuitive technology that simplifies lead management, boosts productivity, and fuels sustainable growth in the financial sector.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={item}
              className="group relative overflow-hidden rounded-2xl bg-linear-to-br from-purple-500 to-pink-600 p-10 shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
              <div className="relative">
                <div className="mb-6 inline-flex rounded-2xl bg-white/20 p-4 backdrop-blur-sm">
                  <Eye className="h-10 w-10" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">Our Vision</h3>
                <p className="text-lg leading-8 text-purple-50">
                  To be India's #1 CRM platform for DSAs, renowned for innovation, reliability, and customer success. We're building a future where every financial professional has access to world-class tools.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Values - Icon Grid */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Our Core Values</h2>
            <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {[
              {
                title: "Customer First",
                description: "Our customers are at the heart of everything. We listen, adapt, and evolve based on their needs.",
                icon: Heart,
                color: "from-red-500 to-pink-500",
                bgColor: "bg-red-50",
                borderColor: "border-red-200"
              },
              {
                title: "Innovation",
                description: "We embrace change and push boundaries to deliver cutting-edge solutions that make a real difference.",
                icon: Lightbulb,
                color: "from-yellow-500 to-orange-500",
                bgColor: "bg-yellow-50",
                borderColor: "border-yellow-200"
              },
              {
                title: "Integrity",
                description: "Transparency, honesty, and ethical practices form the foundation of all our relationships.",
                icon: Shield,
                color: "from-green-500 to-emerald-500",
                bgColor: "bg-green-50",
                borderColor: "border-green-200"
              },
              {
                title: "Excellence",
                description: "We pursue excellence in every detail, from product design to customer support and beyond.",
                icon: Award,
                color: "from-blue-500 to-cyan-500",
                bgColor: "bg-blue-50",
                borderColor: "border-blue-200"
              },
              {
                title: "Collaboration",
                description: "Teamwork and mutual respect drive our culture. Together, we achieve more.",
                icon: Users,
                color: "from-purple-500 to-violet-500",
                bgColor: "bg-purple-50",
                borderColor: "border-purple-200"
              },
              {
                title: "Growth",
                description: "Committed to continuous growth—for our customers, our team, and our company.",
                icon: TrendingUp,
                color: "from-indigo-500 to-blue-500",
                bgColor: "bg-indigo-50",
                borderColor: "border-indigo-200"
              }
            ].map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  variants={item}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className={`group rounded-2xl border-2 ${value.borderColor} ${value.bgColor} p-8 shadow-lg hover:shadow-2xl transition-all duration-300`}
                >
                  <div className={`mb-5 inline-flex rounded-xl bg-linear-to-br ${value.color} p-3 text-white shadow-lg`}>
                    <IconComponent className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{value.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Stats Section - Enhanced */}
      <section className="relative overflow-hidden bg-linear-to-br from-blue-600 via-indigo-600 to-purple-700 py-20 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
        
        <div className="relative mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold">Trusted by Thousands</h2>
            <p className="mt-4 text-xl text-blue-100">Our impact in numbers</p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          >
            {[
              { number: "500+", label: "DSA Teams", icon: Users },
              { number: "10,000+", label: "Active Users", icon: TrendingUp },
              { number: "1M+", label: "Calls Made", icon: Zap },
              { number: "4.9/5", label: "Customer Rating", icon: Award }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div 
                  key={index} 
                  variants={item}
                  className="group text-center rounded-2xl bg-white/10 backdrop-blur-sm p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2"
                >
                  <IconComponent className="h-12 w-12 mx-auto mb-4 text-blue-200" />
                  <div className="text-5xl md:text-6xl font-bold mb-2">{stat.number}</div>
                  <div className="text-lg text-blue-100 font-medium">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 p-12 md:p-16 text-center text-white shadow-2xl"
          >
            <div className="pointer-events-none absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="pointer-events-none absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
            
            <div className="relative">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                <CheckCircle className="h-4 w-4" />
                <span>Join 500+ Teams</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Ready to Transform Your<br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-400">Business Operations?</span>
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg md:text-xl text-slate-300">
                Join hundreds of DSA teams who trust Smart Dial to power their growth and streamline their workflow.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-blue-500 to-indigo-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-500/50 transition-all hover:shadow-xl hover:shadow-blue-500/60 hover:-translate-y-1"
                >
                  Get Started Today
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-xl border-2 border-white/30 bg-white/10 backdrop-blur-sm px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-white/20 hover:border-white/50"
                >
                  Contact Sales
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
