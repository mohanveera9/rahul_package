import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import AboutBg from "../Assests/about.avif"; // Add your image path here

const AboutHeader = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat rounded-xl"
      style={{
        backgroundImage: `linear-gradient(to right, #ede9fe 20%, rgba(255, 255, 255, 0) 80%), url(${AboutBg})`,
      }}
    >
      <Navbar />

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-20 pt-28 md:pt-32 pb-16 lg:py-32">
        {/* Text Content */}
        <div className="text-center md:text-left">
          {/* Breadcrumb Navigation */}
          <nav className="text-gray-700 text-sm mb-4">
            <Link to="/" className="hover:text-purple-600">
              Home
            </Link>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-gray-900 font-semibold">About Us</span>
          </nav>

          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text">
            Who We Are
          </h1>
          <p className="text-gray-700 mt-3 max-w-lg">
            At <span className="font-semibold">Rahul Packaging</span>, we are
            committed to delivering high-quality packaging solutions that
            redefine excellence in the industry. Our innovation-driven approach
            ensures the best packaging for pharmaceuticals, food, and more.
          </p>
        </div>

        {/* Hero Image (Optional - Add an Image if needed) */}
        <div className="hidden md:block">
          {/* <img src={YourImageHere} alt="About Us" className="max-w-md" /> */}
        </div>
      </div>
    </div>
  );
};

export default AboutHeader;
