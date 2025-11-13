import React from 'react'
import Header from './components/Header.jsx'
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

const App = () => {
  return (
    <div>
      <Header />
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
      <Footer />
    </div>
  )
}

export default App