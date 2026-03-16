// header.jsx
import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";


const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const navRef = useRef(null);
  const wrapperRef = useRef(null);

  const navItems = [
    { label: "Home", to: "/" },
    { label: "Features", to: "/features" },
    { label: "Pricing", to: "/pricing" },
    { label: "Contact Us", to: "/contact" },
    { label: "About", to: "/about" },
  ];

  useEffect(() => {
    const calculate = () => {
      if (!navRef.current || !wrapperRef.current) return;
      const isHome = location.pathname === "/";
      if (isHome) {
        setIndicatorStyle({ width: 0, left: 0 });
        return;
      }

      const activeIndex = navItems.findIndex((item) => item.to === location.pathname);
      const links = navRef.current.querySelectorAll('a');
      const activeLink = activeIndex !== -1 ? links[activeIndex] : null;

      if (!activeLink) {
        setIndicatorStyle({ width: 0, left: 0 });
        return;
      }

      const parentRect = wrapperRef.current.getBoundingClientRect();
      const linkRect = activeLink.getBoundingClientRect();

      setIndicatorStyle({
        width: linkRect.width,
        left: linkRect.left - parentRect.left,
      });
    };

    calculate();
    window.addEventListener('resize', calculate);
    return () => window.removeEventListener('resize', calculate);
  }, [location.pathname]);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
  <header className="w-full border-b border-black/5 bg-linear-to-br from-slate-50 to-slate-100">
      {/* Top info strip */}
      <div className="w-full bg-blue-900 text-white">
        <div className="mx-3 sm:mx-4 md:mx-6 lg:mx-8 max-w-7xl py-1.5 text-xs md:text-sm flex items-center justify-center sm:justify-between">
          <p className="font-medium tracking-wide text-center sm:text-left">Now! Get a Free Consultation for Your Business.</p>
          <p className="hidden sm:block">Opening Hours : Mon - Sat 10:00 AM To 07:30 PM</p>
        </div>
      </div>
      
      {/* Reduce vertical padding slightly so increasing logo size doesn't grow the header */}
      <div className="mx-3 sm:mx-4 md:mx-6 lg:mx-8 flex max-w-7xl items-center justify-between py-3 md:py-4">
        {/* Left: Brand (Logo) */}
        <Link to="/" className="inline-flex items-center gap-3" aria-label="Home">
          <img
            src={logo}
            alt="Smart Dial logo"
            className="h-12 w-auto md:h-14"
            decoding="async"  
            loading="eager"
          />
        </Link>

        {/* Center: Nav pill with animated background */}
        <nav className="relative hidden md:flex">
          <div ref={wrapperRef} className="relative flex items-center gap-6 rounded-full bg-white px-12 py-2 shadow-sm border border-black overflow-hidden">
            {/* Animated background indicator */}
            <div
              className="absolute top-1/2 -translate-y-1/2 bg-slate-900 rounded-full transition-all duration-300 ease-out"
              style={{
                width: indicatorStyle.width ? `${indicatorStyle.width}px` : '0px',
                height: 'calc(100% - 8px)',
                left: indicatorStyle.left ? `${indicatorStyle.left}px` : '0px',
                opacity: indicatorStyle.width ? 1 : 0,
              }}
            />
            <div ref={navRef} className="relative z-10 flex items-center gap-6">
              {navItems.map((item) => {
                const isActive = location.pathname === item.to;
                const isHome = item.to === "/";
                const showIndicator = location.pathname !== "/";

                let linkClasses = "text-[15px] md:text-[17px] font-medium transition-colors duration-300 px-3.5 py-1.5 ";
                if (isActive && showIndicator) {
                  linkClasses += "text-white";
                } else if (isActive && isHome) {
                  linkClasses += "text-blue-600"; // Home active: make it blue
                } else {
                  linkClasses += "text-gray-700 hover:text-gray-900";
                }

                return (
                  <Link key={item.label} to={item.to} className={linkClasses}>
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>

        {/* Right: Auth buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/register"
            className="group flex items-center gap-2 rounded-full bg-linear-to-r from-blue-600 to-indigo-600 px-6 py-2.5 text-base font-semibold text-white shadow-lg shadow-blue-500/30 transition-all hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105"
          >
            <span>Register</span>
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          aria-label="Toggle menu"
          type="button"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span>{open ? "Close" : "Menu"}</span>
          <svg
            className="h-5 w-5"
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
          <div className="mx-3 sm:mx-4 mb-4 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-900/10">
            <div className="border-b border-slate-100 px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Navigation</p>
            </div>

            <div className="grid gap-1.5 p-3">
              {navItems.map((item) => {
                const isActive = location.pathname === item.to;
                return (
                  <Link
                    key={item.label}
                    to={item.to}
                    className={`group relative rounded-lg px-3 py-3 text-[15px] font-medium transition-all ${
                      isActive 
                        ? 'bg-slate-900 text-white shadow-sm' 
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {!isActive && (
                      <span className="pointer-events-none absolute left-0 top-1/2 h-0 w-0.5 -translate-y-1/2 rounded-full bg-blue-600 transition-all duration-200 group-hover:h-5" />
                    )}
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <div className="border-t border-slate-100 p-3">
              <Link
                to="/register"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-linear-to-r from-blue-600 to-indigo-600 px-5 py-2.5 text-base font-semibold text-white shadow-lg shadow-blue-500/30"
                onClick={() => setOpen(false)}
              >
                <span>Register</span>
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
