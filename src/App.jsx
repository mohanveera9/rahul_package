import React from 'react'
import KeyOfferings from './components/KeyOfferings.jsx'
import About from './components/About.jsx'
import Products from './components/Products.jsx'
import Testimonials from './components/Testimonials.jsx'
import Card from './components/Card.jsx'
import Contact from './components/Contact.jsx'
import HeroSection from './components/Herosection.jsx'



const App = () => {
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

export default App
