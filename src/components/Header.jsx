// header.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";


const Header = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", to: "/" },
    { label: "Features", to: "/features" },
    { label: "Pricing", to: "/pricing" },
    { label: "Contact Us", to: "/contact" },
    { label: "About", to: "/about" },
  ];    

  return (
  <header className="w-full border-b border-black/5 bg-linear-to-br from-slate-50 to-slate-100">
      {/* Top info strip */}
      <div className="w-full bg-blue-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-1.5 text-xs md:text-sm flex items-center justify-between">
          <p className="font-medium tracking-wide">Now! Get a Free Consultation for Your Business.</p>
          <p className="hidden sm:block">Opening Hours : Mon - Sat 10:00 AM To 07:30 PM</p>
        </div>
      </div>
      
      {/* Reduce vertical padding slightly so increasing logo size doesn't grow the header */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:py-4">
        {/* Left: Brand (Logo) */}
        <Link to="/" className="inline-flex items-center gap-3" aria-label="Home">
          <img
            src="/Smart-Dial-Final-01.png"
            alt="Smart Dial logo"
            className="h-12 w-auto"
            decoding="async"  
            loading="eager"
          />
          <span className="text-xl font-bold text-slate-900">Smart Dial</span>
        </Link>

        {/* Center: Nav pill */}
        <nav className="relative hidden md:flex">
          <div className="flex items-center gap-6 rounded-full bg-white px-10 py-3 shadow-sm border border-black">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* Right: Auth buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/login"
            className="group flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-slate-700 transition-all hover:text-slate-900 hover:bg-slate-50 rounded-full border border-slate-300 hover:border-slate-400"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
            </svg>
            <span>Log in</span>
          </Link>
          <Link
            to="/login"
            className="group flex items-center gap-2 rounded-full bg-linear-to-r from-blue-600 to-indigo-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition-all hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105"
          >
            <span>Sign Up</span>
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          aria-label="Toggle menu"
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden">
          <div className="mx-4 mb-4 rounded-2xl bg-black/5 p-4 shadow-sm">
            <div className="flex flex-col gap-3 border-b border-black/10 pb-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="rounded-md px-3 py-2 text-sm text-gray-800 hover:bg-white"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-end gap-3">
              <Link
                to="/login"
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 transition-all hover:text-slate-900 hover:bg-slate-50 rounded-full border border-slate-300"
                onClick={() => setOpen(false)}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
                <span>Log in</span>
              </Link>
              <Link
                to="/login"
                className="flex items-center gap-2 rounded-full bg-linear-to-r from-blue-600 to-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/30"
                onClick={() => setOpen(false)}
              >
                <span>Sign Up</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
