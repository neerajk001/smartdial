// header.jsx
import React, { useState } from "react";


const Header = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "Contact Us", href: "#" },
    { label: "About", href: "#" },
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
        <a href="#" className="inline-flex items-center" aria-label="Home">
          <img
            src="/Smart-Dial-Final-01.png"
            alt="Smart Dial logo"
            className="h-12 w-auto"
            decoding="async"  
            loading="eager"
          />
        </a>

        {/* Center: Nav pill */}
        <nav className="relative hidden md:flex">
          <div className="flex items-center gap-8 rounded-full bg-black/5 px-8 py-3 shadow-sm backdrop-blur border">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-gray-700 transition-colors hover:text-black"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        {/* Right: Auth buttons */}
        <div className="hidden items-center gap-4 md:flex">
          <a
            href="#"
            className="text-sm text-gray-800 transition-colors hover:text-black bg-gray-100"
          >
            Log in
          </a>
          <a
            href="#"
            className="rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:brightness-105"
          >
            Sign Up
          </a>
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
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm text-gray-800 hover:bg-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-end gap-3">
              <a
                href="#"
                className="text-sm text-gray-800 transition-colors hover:text-black"
              >
                Log in
              </a>
              <a
                href="#"
                className="rounded-full bg-linear-to-b from-pink-300 to-pink-500 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:brightness-105"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
