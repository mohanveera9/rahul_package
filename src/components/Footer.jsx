import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Assests/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-pink-100 to-purple-200 text-white py-10 px-8 lg:px-20 md:px-14">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Company Info */}
        <div className="text-black flex items-center space-x-3">
          <img src={Logo} alt="Rahul Packaging Logo" className="h-12 w-auto" />
          <div>
            <h2 className="text-xl font-bold">ahul Packaging</h2>
            <p className="mt-1 text-sm">edefining Excellence in Pharmaceutical Packaging.</p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="text-black">
          <h3 className="text-lg font-semibold text-black mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Home</Link></li>
            <li><Link to="/about" className="hover:text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">About</Link></li>
            <li><Link to="/products" className="hover:text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Products</Link></li>
            <li><Link to="/contact" className="hover:text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-black space-y-3">
          <h3 className="text-lg font-semibold text-black mb-3">Contact Us</h3>
          <p className="text-sm">📧 Email: contact@yourcompany.com</p>
          <p className="text-sm">📞 Phone: +123 456 7890</p>
          <p className="text-sm">📍 Location: Hyderabad, India</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-sm border-t border-black pt-4 text-black">
        © {new Date().getFullYear()} Rahul Packaging. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
