import React from "react";
import Heroimg from "../Assests/heroimg.png";
import Button3 from "../buttons/Button3";
import Navbar from "./Navbar";
import BgImage from "../Assests/bg.avif"; // Add a background image

const HeroSection = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat rounded-xl"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-20 pt-32 md:pt-32 md:pb-20 lg:py-32">
        {/* Text Content */}
        <div className="max-w-2xl md:text-left">
          <span className="relative px-4 py-2 rounded-full text-sm font-semibold bg-white inline-block">
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text">
              Packaging Perfected
            </span>
          </span>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 leading-tight">
            Redefining Excellence in{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text">
              Pharmaceutical{" "}
            </span>
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text">
              Packaging.
            </span>
          </h1>

          <p className="mt-4 text-gray-600 text-lg md:text-xl">
            We are a rapidly growing manufacturer and supplier of pharmaceutical strip
            packaging materials, renowned for flawless printing precision and impeccable
            quality standards.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex sm:flex-row sm:items-start space-y-4 space-x-4 md:space-y-0 sm:space-y-0 lg:space-y-0">
            <Button3 text="Explore" />
            <button className="bg-white text-black px-6 py-3 rounded-full text-lg font-medium hover:bg-gray-300">
              Demo
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="mt-10 md:mt-0 flex justify-center">
          <img
            src={Heroimg}
            alt="Pharmaceutical Packaging"
            className="lg:w-[450px]"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
