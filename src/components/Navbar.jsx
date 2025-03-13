import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed transition-all duration-300 z-50 flex justify-between items-center px-10 py-3 
      ${isScrolled ? "top-0 left-0 right-0 bg-white shadow-md py-5 rounded-none" : "top-10 left-10 right-10 bg-white shadow-lg rounded-full"}`}
    >
      <div className="text-2xl font-bold">Ⓡ</div>
      <ul className="hidden md:flex space-x-8 font-medium">
        <li><Link to="/" className="hover:text-purple-600">Home</Link></li>
        <li><Link to="/about" className="hover:text-purple-600">About Us</Link></li>
        <li><Link to="/products" className="hover:text-purple-600">Products</Link></li>
        <li><Link to="/infrastructure" className="hover:text-purple-600">Infrastructure</Link></li>
        <li><Link to="/contact" className="hover:text-purple-600">Contact Us</Link></li>
      </ul>
      <button className="bg-purple-600 text-white px-5 py-2 rounded-full text-lg hover:bg-purple-700">
        Sign Up
      </button>
    </nav>
  );
};

export default Navbar;
