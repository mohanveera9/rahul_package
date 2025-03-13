import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-8 px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold">Ⓡ Your Company</h2>
          <p className="mt-2 text-sm">
            Redefining Excellence in Pharmaceutical Packaging.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
            <li><Link to="/products" className="hover:text-gray-300">Products</Link></li>
            <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <p className="mt-2 text-sm">Email: contact@yourcompany.com</p>
          <p className="text-sm">Phone: +123 456 7890</p>
          <p className="text-sm">Location: Hyderabad, India</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-sm border-t border-white/20 pt-4">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
