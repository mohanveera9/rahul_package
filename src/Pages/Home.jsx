import React from 'react'
import HeroSection from '../components/Herosection';
import KeyOfferings from '../components/KeyOfferings';
import About from '../components/About';
import Products from '../components/Products';
import Testimonials from '../components/Testimonials';
import Card from '../components/Card';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <KeyOfferings />
      <About />
      <Products />
      <Testimonials />
      <Card />
      <Contact />
    </div>
  )
}

export default Home;
