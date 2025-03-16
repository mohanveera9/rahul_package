import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Assests/logo.png";
import BgImage from "../Assests/bg.avif"; // Add your background image
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="relative text-white py-10 px-8 lg:px-20 md:px-14 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Company Info */}
        <div  className="flex flex-col items-start">
          <div className="flex flex-row space-x-3">
            <img src={Logo} alt="Rahul Packaging Logo" className="h-12 w-auto" />
            <div>
              <h2 className="text-xl font-bold text-black">Rahul Packaging</h2>
              <p className="mt-1 text-sm  text-black">Redefining Excellence in Pharmaceutical Packaging.</p>
            </div>
          </div>
          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-black hover:text-pink-400 text-lg"><FaInstagram /></a>
            <a href="#" className="text-black hover:text-blue-600 text-lg"><FaFacebookF /></a>
            <a href="#" className="text-black hover:text-blue-600 text-lg"><FaLinkedinIn /></a>
            <a href="#" className="text-black hover:text-red-500 text-lg"><FaYoutube /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="text-black">
          <h3 className="text-lg font-semibold mb-3 ">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
            <li><Link to="/products" className="hover:text-gray-300">Products</Link></li>
            <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-3 text-black">
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p className="text-sm flex items-center space-x-2">
            <FaEnvelope className="text-pink-400" /> <span>contact@yourcompany.com</span>
          </p>
          <p className="text-sm flex items-center space-x-2">
            <FaPhone className="text-pink-400" /> <span>+123 456 7890</span>
          </p>
          <p className="text-sm flex items-center space-x-2">
            <FaMapMarkerAlt className="text-pink-400" /> <span>Hyderabad, India</span>
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative mt-8 text-center text-black text-sm border-t border-gray-500 pt-4">
        © {new Date().getFullYear()} Rahul Packaging. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
