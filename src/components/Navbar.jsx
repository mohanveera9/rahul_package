import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation(); // Get current route

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed transition-all duration-300 z-50 flex justify-between items-center px-6 py-3 
      ${isScrolled ? "top-0 left-0 right-0 bg-white shadow-md py-5 rounded-none" : "top-10 left-10 right-10 bg-white shadow-lg rounded-full"}`}
    >
      <div className="text-2xl font-bold">Ⓡ</div>
      <ul className="hidden md:flex space-x-8 font-medium">
        <li>
          <Link
            to="/"
            className={`hover:text-purple-600 ${
              location.pathname === "/" ? "text-purple-600 font-semibold" : ""
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={`hover:text-purple-600 ${
              location.pathname === "/about" ? "text-purple-600 font-semibold" : ""
            }`}
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to="/products"
            className={`hover:text-purple-600 ${
              location.pathname === "/products" ? "text-purple-600 font-semibold" : ""
            }`}
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            to="/infrastructure"
            className={`hover:text-purple-600 ${
              location.pathname === "/infrastructure" ? "text-purple-600 font-semibold" : ""
            }`}
          >
            Infrastructure
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={`hover:text-purple-600 ${
              location.pathname === "/contact" ? "text-purple-600 font-semibold" : ""
            }`}
          >
            Contact Us
          </Link>
        </li>
      </ul>
      <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-5 py-2 rounded-full text-l hover:scale-105 duration-300">
        Sign Up
      </button>
    </nav>
  );
};

export default Navbar;
