import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "../Assests/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed transition-all duration-300 z-50 flex justify-between items-center px-6 py-3 w-[95%] mx-auto 
      ${isScrolled ? "top-0 left-0 right-0 w-full bg-white shadow-md py-4 px-6 md:px-12 lg:px-20 rounded-none" : "top-10 left-0 right-0 w-[95%] bg-white shadow-lg rounded-full"}`}
    >
      <div className="flex items-center">
        <img src={Logo} alt="logo" className="h-9 w-9" />
      </div>
      
      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8 font-medium">
        {[
          { path: "/", label: "Home" },
          { path: "/about", label: "About Us" },
          { path: "/products", label: "Products" },
          { path: "/infrastructure", label: "Infrastructure" },
          { path: "/contact", label: "Contact Us" },
        ].map(({ path, label }) => (
          <li key={path}>
            <Link
              to={path}
              className={`hover:text-[#8C6E63] ${location.pathname === path ? "text-[#8C6E63] font-semibold" : ""}`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Desktop Sign-Up Button */}
      <button className="hidden md:block bg-gradient-to-r from-[#D3A376] to-[#8C6E63] text-white px-5 py-2 rounded-full text-l hover:scale-105 duration-300">
        Quote
      </button>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-2xl text-[#8C6E63] focus:outline-none">
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
      
      {/* Mobile Drawer Menu */}
      <div
        className={`fixed top-0 right-0 w-3/4 max-w-xs h-full bg-white shadow-lg transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 md:hidden flex flex-col items-center p-6`}
      >
        <button onClick={toggleMenu} className="text-2xl text-[#8C6E63] self-end mb-6">
          <FiX />
        </button>
        <ul className="flex flex-col space-y-6 font-medium text-center">
          {[
            { path: "/", label: "Home" },
            { path: "/about", label: "About Us" },
            { path: "/products", label: "Products" },
            { path: "/infrastructure", label: "Infrastructure" },
            { path: "/contact", label: "Contact Us" },
          ].map(({ path, label }) => (
            <li key={path}>
              <Link
                to={path}
                onClick={toggleMenu}
                className={`hover:text-[#8C6E63] ${location.pathname === path ? "text-[#8C6E63] font-semibold" : ""}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        {/* Mobile Sign-Up Button */}
        <button className="mt-6 bg-gradient-to-r from-[#D3A376] to-[#8C6E63] text-white px-5 py-2 rounded-full text-l hover:scale-105 duration-300">
          Quote
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
