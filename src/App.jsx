import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Problem from './components/Problem.jsx'
import Features from './components/Features.jsx'
import Audience from './components/Audience.jsx'
import Welcome from './components/Welcome.jsx'
import Service from './components/Service.jsx'
import Pricing from './components/Pricing.jsx'
import WhatOurUsersSay from './components/WhatOurUsersSay.jsx'
import WhyChooseUs from './components/Choose.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import AboutPage from './pages/About.jsx'
import FeaturesPage from './pages/Features.jsx'
import PricingPage from './pages/Pricing.jsx'
import ContactUsPage from './pages/ContactUs.jsx'
import LoginPage from './pages/Login.jsx'
import PrivacyPolicyPage from './pages/PrivacyPolicy.jsx'
import TermsAndConditionsPage from './pages/TermsAndConditions.jsx'

const App = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <div>
      <ScrollToTop />
      {!isLoginPage && <Header />}
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Welcome />
            <Problem />
            <Features />
            <Audience />
            <Service />
            <Pricing />
            <WhatOurUsersSay />
            <WhyChooseUs />
            <Contact />
          </>
        } />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
      </Routes>
      {!isLoginPage && <Footer />}
    </div>
  )
}

export default App