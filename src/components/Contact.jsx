// Contact.jsx
import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section title */}
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">📞 Contact Us</h2>
            <p className="mx-auto max-w-2xl text-base leading-7 text-gray-700 md:text-lg">
              Want to make your DSA operations smarter? Let's connect and show you how Smart Dial
              can transform your loan sales process.
            </p>
          </div>

          {/* Contact info cards */}
          <div className="mb-10 grid gap-6 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center rounded-xl bg-gray-50 p-6 text-center shadow-sm ring-1 ring-gray-200"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>
              <h3 className="mb-2 text-sm font-semibold text-gray-700">Email</h3>
              <a
                href="mailto:info@smartdial.in"
                className="text-base font-medium text-blue-600 hover:text-blue-700"
              >
                info@smartdial.in
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col items-center rounded-xl bg-gray-50 p-6 text-center shadow-sm ring-1 ring-gray-200"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                </svg>
              </div>
              <h3 className="mb-2 text-sm font-semibold text-gray-700">Phone</h3>
              <a
                href="tel:+91XXXXXXXXXX"
                className="text-base font-medium text-green-600 hover:text-green-700"
              >
                +91-XXXXXXXXXX
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center rounded-xl bg-gray-50 p-6 text-center shadow-sm ring-1 ring-gray-200"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
              <h3 className="mb-2 text-sm font-semibold text-gray-700">Address</h3>
              <p className="text-base text-gray-600">[Your Office Address]</p>
            </motion.div>
          </div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-8 py-3 text-base font-semibold text-white shadow-md transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              Request Demo
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M13.5 4.5L21 12l-7.5 7.5-1.06-1.06L17.88 12l-5.44-5.44L13.5 4.5z" />
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-8 py-3 text-base font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50"
            >
              Contact Us
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M13.5 4.5L21 12l-7.5 7.5-1.06-1.06L17.88 12l-5.44-5.44L13.5 4.5z" />
              </svg>
            </a>
          </motion.div>

          {/* Design tip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-6 text-center"
          >
            <p className="text-sm text-gray-600">
              💡 <strong>Design Tip:</strong> Use a light grey or white background with clean modern
              icons for Email, Phone, and Address.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
