// footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        {/* Top section */}
        <div className="grid gap-8 md:grid-cols-4">
          {/* About Us */}
          <div className="md:col-span-1">
            <img 
              src="/Smart-Dial-Final-01.png" 
              alt="Smart Dial Logo" 
              className="h-12 w-auto mb-4"
            />
            <p className="text-sm text-gray-300 leading-relaxed">
              Your smart companion for efficient loan processing. Our app is designed to simplify the way financial institutions, loan officers, and businesses collect essential customer data and documents.
            </p>
            <Link to="/about" className="inline-flex items-center gap-1 mt-3 text-sm text-blue-400 hover:text-blue-300 transition">
              Read More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/" className="transition hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/features" className="transition hover:text-white">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="transition hover:text-white">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/contact" className="transition hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Support</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/privacy-policy" className="transition hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="transition hover:text-white">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Get In Touch</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span className="font-medium">Email:</span>
                <a href="mailto:support@smartdial.com" className="hover:text-white transition">
                  support@smartdial.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-medium">Phone:</span>
                <a href="tel:+919588833303" className="hover:text-white transition">
                  +91-95888 33303
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-medium">Address:</span>
                <span>B-203, 204,205., Lawrence Trade Center, Manikpur Road, Near Madhuram Hotel, Vasai West 401202</span>
              </li>
              <li className="flex items-center gap-2 mt-4">
                <a 
                  href="https://www.instagram.com/__smartsolutions__/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-linear-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="font-medium">Follow Us</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px w-full bg-gray-700" />

        {/* Bottom section */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-400 md:flex-row">
          <p>© 2025 Smart Dial. All Rights Reserved.</p>
          <p className="text-sm font-medium text-gray-300">Smarter CRM. Smarter Results.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
