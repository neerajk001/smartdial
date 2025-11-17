// Contact.jsx
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    // 1. Kept the light gradient background
    <section className="w-full bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        
        {/* 2. NEW: High-Contrast "Contact Hub" Card */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          // This card is the new centerpiece
          className="mx-auto max-w-6xl overflow-hidden rounded-2xl shadow-2xl shadow-blue-900/20 border border-slate-200/70"
        >
          {/* 3. NEW: Internal Grid for 50/50 Split */}
          <div className="grid lg:grid-cols-2">
            
            {/* --- LEFT (INFO) - Dark Side --- */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="bg-slate-900 p-8 md:p-12"
            >
              <h2 className="mb-4 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 md:text-4xl">
                Get in Touch
              </h2>
              <p className="mb-8 max-w-2xl text-lg leading-7 text-slate-300">
                Let's connect and show you how Smart Dial can transform your
                loan sales process.
              </p>

              {/* Redesigned Info List for Dark Mode */}
              <div className="space-y-6">
                <a
                  href="mailto:info@smartdial.in"
                  className="flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 rounded-lg bg-blue-900/50 p-3 text-blue-300 transition-colors group-hover:bg-blue-800">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      Email
                    </h3>
                    <p className="text-base text-blue-300 transition-colors group-hover:text-white">
                      info@smartdial.in
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+91XXXXXXXXXX"
                  className="flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 rounded-lg bg-blue-900/50 p-3 text-blue-300 transition-colors group-hover:bg-blue-800">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      Phone
                    </h3>
                    <p className="text-base text-blue-300 transition-colors group-hover:text-white">
                      +91-XXXXXXXXXX
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 rounded-lg bg-blue-900/50 p-3 text-blue-300">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      Office
                    </h3>
                    <p className="text-base text-slate-300">
                      [Your Office Address, City, Pincode]
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* --- RIGHT (FORM) - Light Side --- */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="bg-white p-8 md:p-12"
            >
              <h3 className="mb-6 text-2xl font-semibold text-slate-900">
                Send us a message
              </h3>
              <form action="#" method="POST" className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="How can we help?"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-blue-500/30 transition-all hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5"
                  >
                    Send Message
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;