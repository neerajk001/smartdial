import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  return (
    <section className="py-20 bg-linear-to-br from-slate-50 via-white to-indigo-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Privacy & Data Protection
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-slate-600">
              Effective Date: <span className="font-semibold text-slate-900">01-01-2025</span>
            </p>
          </div>

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-10 p-6 bg-linear-to-br from-indigo-50 to-purple-50 rounded-2xl border border-indigo-200"
          >
            <p className="text-slate-700 leading-relaxed">
              At <span className="font-bold text-indigo-700">SmartDial</span>, your privacy is important to us. This privacy policy explains how we collect, use, store, and protect your data when you use the SmartDial application.
            </p>
          </motion.div>

          {/* Content Sections */}
          <div className="space-y-8">
            {/* Section 1 */}
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Information We Collect</h2>
                  <div className="space-y-4 text-slate-700">
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">Data Provided by You:</h3>
                      <p className="leading-relaxed">
                        <span className="font-medium">Customer Information:</span> When you use SmartDial, you voluntarily input customer names and mobile numbers into the app. This is the only personal information we collect and store.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">Data Storage:</h3>
                      <p className="leading-relaxed">
                        SmartDial does not access or collect any personal data from your mobile device, such as contacts, messages, or other personal information. The data we collect is only what you enter into the app.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Section 2 */}
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">How We Use Your Data</h2>
                  <p className="text-slate-700 leading-relaxed">
                    The data you enter (customer names and mobile numbers) is stored securely on our servers and is used solely for the purpose of helping you manage and organize your customer database. The data is not used for any other purposes, and we do not sell, rent, or share your data with third parties.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Section 3 */}
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Data Storage and Security</h2>
                  <div className="space-y-4 text-slate-700">
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">Data Storage:</h3>
                      <p className="leading-relaxed">
                        The data you provide (customer names and mobile numbers) is securely stored on our servers. We use industry-standard encryption methods to ensure that your data is protected.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">Data Protection:</h3>
                      <p className="leading-relaxed">
                        We implement a variety of security measures to ensure that your personal information is kept safe. However, please note that while we take steps to protect your data, no system is 100% secure. We cannot guarantee the absolute security of your data.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Section 4 */}
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-bold text-lg">
                  4
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Data Sharing and Disclosure</h2>
                  <div className="space-y-4 text-slate-700">
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">No Third-Party Sharing:</h3>
                      <p className="leading-relaxed">
                        We do not share, sell, or rent your data to third parties. The customer data you input into SmartDial is kept strictly for your use.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">Legal Compliance:</h3>
                      <p className="leading-relaxed">
                        In some cases, we may be required to disclose your information to comply with applicable laws or to protect our rights or the safety of others. Any such disclosures will be made in accordance with applicable law.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Section 5 */}
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-bold text-lg">
                  5
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">User Rights</h2>
                  <div className="space-y-4 text-slate-700">
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">Access to Data:</h3>
                      <p className="leading-relaxed">
                        You have the right to access, modify, or delete the customer information you have entered into SmartDial. You can easily update or remove any data within the app at any time.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">Data Retention:</h3>
                      <p className="leading-relaxed">
                        Your data will be retained as long as you use the app and for as long as necessary to provide you with the service. You can delete your data from the app at any time, and it will be removed from our servers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Section 6 */}
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-bold text-lg">
                  6
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Children's Privacy</h2>
                  <p className="text-slate-700 leading-relaxed">
                    SmartDial is not intended for children under the age of 13, and we do not knowingly collect or store any personal information from children. If we learn that we have inadvertently collected information from a child, we will take steps to delete such information from our records.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Section 7 */}
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-bold text-lg">
                  7
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Changes to This Privacy Policy</h2>
                  <p className="text-slate-700 leading-relaxed">
                    We may update this privacy policy from time to time. If we make significant changes, we will notify you by updating the "Effective Date" at the top of this page. We encourage you to review this policy periodically to stay informed about how we are protecting your data.
                  </p>
                </div>
              </div>
            </motion.section>
          </div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 p-8 bg-linear-to-br from-indigo-600 to-purple-600 rounded-2xl shadow-xl text-white"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
                <p className="text-indigo-100 mb-6">
                  If you have any questions or concerns about this privacy policy or how we handle your data, please contact us:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:admin@smartsolutionsmumbai.com" className="hover:text-indigo-200 transition font-medium">
                      admin@smartsolutionsmumbai.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:9588833303" className="hover:text-indigo-200 transition font-medium">
                      9588833303
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Back to Home */}
          <div className="mt-8 text-center">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
