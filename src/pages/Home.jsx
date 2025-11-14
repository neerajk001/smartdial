import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Welcome from '../components/Welcome';
import Problem from '../components/Problem';
import Features from '../components/Features';
import Audience from '../components/Audience';
import Service from '../components/Service';
import Pricing from '../components/Pricing';
import WhatOurUsersSay from '../components/WhatOurUsersSay';
import WhyChooseUs from '../components/Choose';
import Contact from '../components/Contact';

const Home = () => {
  return (
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
  );
};

export default Home;
