import React from 'react'
import HeroSection from '../components/Herosection';
import KeyOfferings from '../components/KeyOfferings';
import About from '../components/About';
import Products from '../components/Products';
import Testimonials from '../components/Testimonials';
import Card from '../components/Card';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Quote from '../components/Quote';
import Clients from '../components/Clients';

const Home = () => {
  return (
    <div className="overflow-x-hidden scrollbar-hide">
      <HeroSection />
      <Clients/>
      <About />
      <KeyOfferings />
      <Quote />
      <Products />
      <Card />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home;
