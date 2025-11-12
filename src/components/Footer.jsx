// footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        {/* Top section */}
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4 flex items-center gap-2">
              <img src="/Smart-Dial-Final-01.png" alt="Smart Dial" className="h-8 w-auto" />
            </div>
            <p className="text-sm text-gray-400">Smarter CRM. Smarter Results.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="transition hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Social Media</h4>
            <div className="flex items-center gap-4">
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-gray-400 transition hover:text-white"
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                  <path d="M6.9 7.6H3.8V21h3.1V7.6zM5.4 3A1.8 1.8 0 1 0 5.4 6 1.8 1.8 0 0 0 5.4 3zM21 21h-3.1v-6.8c0-3.6-4-3.3-4 0V21H10V7.6h2.9v1.8c1.3-2.3 8-2.4 8 2.2V21z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-400 transition hover:text-white"
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                  <path d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9v-2.9h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6v1.9h2.8l-.4 2.9h-2.3v7c4.7-.8 8.4-4.9 8.4-9.9z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-400 transition hover:text-white"
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                  <path d="M7.5 2h9C19.4 2 22 4.6 22 7.5v9c0 2.9-2.6 5.5-5.5 5.5h-9C4.6 22 2 19.4 2 16.5v-9C2 4.6 4.6 2 7.5 2zm0 1.5C5.6 3.5 3.5 5.6 3.5 7.5v9c0 1.9 2.1 4 4 4h9c1.9 0 4-2.1 4-4v-9c0-1.9-2.1-4-4-4h-9zM17 5.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 7c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>info@smartdial.in</li>
              <li>+91-XXXXXXXXXX</li>
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
