import React, { useState, useEffect } from "react";
import Heroimg from "../Assests/heroimg.png";
import Button3 from "../buttons/Button3";

const HeroSection = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-pink-100 to-purple-200 rounded-xl">
      {/* Navbar (Changes on Scroll) */}
      <nav
        className={`fixed transition-all duration-300 z-50 flex justify-between items-center px-10 py-3 
        ${isScrolled ? "top-0 left-0 right-0 bg-white shadow-md py-5 rounded-none" : "top-10 left-10 right-10 bg-white shadow-lg rounded-full"}`}
      >
        <div className="text-2xl font-bold">Ⓡ</div>
        <ul className="hidden md:flex space-x-8 font-medium">
          <li><a href="#" className="hover:text-purple-600">Home</a></li>
          <li><a href="#" className="hover:text-purple-600">About Us</a></li>
          <li><a href="#" className="hover:text-purple-600">Products</a></li>
          <li><a href="#" className="hover:text-purple-600">Clients</a></li>
          <li><a href="#" className="hover:text-purple-600">Contact Us</a></li>
        </ul>
        <button className="bg-purple-600 text-white px-5 py-2 rounded-full text-lg hover:bg-purple-700">
          Sign Up
        </button>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-10 py-24 lg:mx-8">
        {/* Text Content */}
        <div className="max-w-xl mt-10">
          <span className="px-4 py-2 text-purple-600 bg-white rounded-full text-sm font-semibold">
            Packaging Perfected
          </span>
          <h1 className="text-5xl font-bold text-gray-900 mt-4">
            Redefining Excellence in <span className="text-purple-600">Pharmaceutical Packaging.</span>
          </h1>
          <p className="mt-4 text-gray-600">
            This is a rapidly growing manufacturer and supplier of pharmaceutical strip
            packaging materials, renowned for its flawless printing precision and impeccable quality standards.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex space-x-4">
            <Button3 text="Explore" />
            <button className="bg-gray-200 text-gray-900 px-6 py-3 rounded-full text-lg font-medium hover:bg-gray-300">
              Demo
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="mt-10 md:mt-0">
          <img
            src={Heroimg}
            alt="Pharmaceutical Packaging"
            className="w-[450px]"
          />
        </div>
      </div>
    </div>

  );
};

export default HeroSection;
