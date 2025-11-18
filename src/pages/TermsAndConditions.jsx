import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function TermsAndConditions() {
  return (
    <section className="py-20 bg-linear-to-br from-slate-50 via-white to-blue-50 min-h-screen">
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
              className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Legal Document
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Terms & Conditions
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
            className="mb-10 p-6 bg-linear-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200"
          >
            <p className="text-slate-700 leading-relaxed">
              Welcome to <span className="font-bold text-blue-700">SmartDial</span>! These Terms and Conditions ("Terms") govern your use of the SmartDial application ("App") provided by <span className="font-semibold">Smart Solutions</span> ("we," "us," or "our"). By using the App, you agree to comply with and be bound by these Terms. If you do not agree to these Terms, please do not use the App.
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
                <div className="shrink-0 w-10 h-10 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">License to Use the App</h2>
                  <p className="text-slate-700 leading-relaxed">
                    We grant you a non-exclusive, non-transferable, limited license to use the SmartDial App on your personal device, subject to these Terms. You may use the App solely for its intended purpose of managing customer data and making calls to customers.
                  </p>
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
                <div className="shrink-0 w-10 h-10 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">User Responsibilities</h2>
                  <div className="space-y-4 text-slate-700">
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">Account Creation:</h3>
                      <p className="leading-relaxed">
                        To use the App, you may be required to create an account. You agree to provide accurate and complete information when creating your account and to update it when necessary.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">User Data:</h3>
                      <p className="leading-relaxed">
                        The App allows you to input customer names, mobile numbers, and other related information into the database. You are solely responsible for the data you input and for ensuring that it complies with applicable laws, including data protection and privacy laws.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">Prohibited Use:</h3>
                      <p className="leading-relaxed mb-2">You agree not to use the App for any illegal, unauthorized, or malicious activity, including but not limited to:</p>
                      <ul className="list-disc list-inside space-y-1.5 ml-4 text-slate-600">
                        <li>Violating the privacy of others</li>
                        <li>Using the App for spam or unsolicited marketing</li>
                        <li>Infringing on the intellectual property rights of others</li>
                      </ul>
                    </div>
                  </div>
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
                <div className="shrink-0 w-10 h-10 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Data Collection and Use</h2>
                  <div className="space-y-4 text-slate-700">
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">Data You Provide:</h3>
                      <p className="leading-relaxed">
                        The only data collected by SmartDial is the customer information (names and mobile numbers) that you voluntarily enter into the App.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">Data Storage:</h3>
                      <p className="leading-relaxed">
                        The information you input is stored on our secure servers to help you manage your customer database. We do not access any personal data from your device, and your data is not shared with any third parties.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">Data Security:</h3>
                      <p className="leading-relaxed">
                        We implement industry-standard security measures to protect the data you input into the App. However, we cannot guarantee the absolute security of your data, and you acknowledge that you use the App at your own risk.
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
                <div className="shrink-0 w-10 h-10 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold text-lg">
                  4
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">No Sharing of Data</h2>
                  <p className="text-slate-700 leading-relaxed">
                    We do not sell, rent, or share your customer data with any third parties. The data you input is stored securely and is used exclusively for the purpose of managing your customer database.
                  </p>
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
                <div className="shrink-0 w-10 h-10 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold text-lg">
                  5
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">User Rights</h2>
                  <div className="space-y-4 text-slate-700">
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">Access and Update:</h3>
                      <p className="leading-relaxed">
                        You have the right to access, update, or delete the customer data you input into the App at any time.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">Account Termination:</h3>
                      <p className="leading-relaxed">
                        You may terminate your account and stop using the App at any time. Upon termination, all data you have entered will remain stored on our servers unless you choose to delete it.
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
                <div className="shrink-0 w-10 h-10 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold text-lg">
                  6
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Third-Party Services</h2>
                  <p className="text-slate-700 leading-relaxed">
                    The App may integrate with third-party services (e.g., for calling customers). These services are provided under separate terms and conditions, and we are not responsible for their actions, policies, or practices. Please review their terms and privacy policies before using any third-party services.
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
                <div className="shrink-0 w-10 h-10 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold text-lg">
                  7
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Termination of Use</h2>
                  <p className="text-slate-700 leading-relaxed">
                    We may suspend or terminate your access to the App at any time, without notice, if we believe you have violated these Terms. Upon termination, your rights to use the App will cease, and you will no longer be able to access or manage your customer data.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Section 8 */}
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold text-lg">
                  8
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Disclaimers and Limitation of Liability</h2>
                  <div className="space-y-4 text-slate-700">
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">No Warranty:</h3>
                      <p className="leading-relaxed">
                        The App is provided "as-is," without warranty of any kind. We do not guarantee that the App will meet your requirements or that it will be free of errors, bugs, or interruptions.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">Limitation of Liability:</h3>
                      <p className="leading-relaxed">
                        To the maximum extent permitted by law, we are not liable for any indirect, incidental, special, or consequential damages arising from your use of the App, including but not limited to loss of data, business interruptions, or any damages related to third-party services.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Section 9 */}
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold text-lg">
                  9
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Changes to the Terms</h2>
                  <p className="text-slate-700 leading-relaxed">
                    We may update or modify these Terms from time to time. If we make significant changes, we will notify you by updating the "Effective Date" at the top of this page. Your continued use of the App after any changes to the Terms will constitute your acceptance of those changes.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Section 10 */}
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold text-lg">
                  10
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Governing Law</h2>
                  <p className="text-slate-700 leading-relaxed">
                    These Terms are governed by and construed in accordance with the laws of India, without regard to its conflict of law principles. Any disputes arising from or related to these Terms will be resolved in the competent courts of Mumbai, Maharashtra.
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
            className="mt-12 p-8 bg-linear-to-br from-blue-600 to-indigo-600 rounded-2xl shadow-xl text-white"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
                <p className="text-blue-100 mb-6">
                  If you have any questions or concerns about these Terms, please contact us:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:admin@smartsolutionsmumbai.com" className="hover:text-blue-200 transition font-medium">
                      admin@smartsolutionsmumbai.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:9588833303" className="hover:text-blue-200 transition font-medium">
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
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition"
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
