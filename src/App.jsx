import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home.jsx';
import About from './Pages/AboutPage.jsx';
import Contact from './Pages/ContactPage.jsx';
import Infrastructure from './Pages/Infrastructure.jsx';
import Products from './Pages/ProductsPage.jsx';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/products' element={<Products />} />
      <Route path='/infrastructure' element={<Infrastructure />} />
    </Routes>
  );
};

export default App;
