import React from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Welcome from './components/Welcome.jsx'
import Service from './components/Service.jsx'
import Pricing from './components/Pricing.jsx'
import WhatOurUsersSay from './components/WhatOurUsersSay.jsx'
import WhyChooseUs from './components/Choose.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Welcome />
      <Service />
      <Pricing />
      <WhatOurUsersSay />
      <WhyChooseUs />
      <Footer />
    </div>
  )
}

export default App