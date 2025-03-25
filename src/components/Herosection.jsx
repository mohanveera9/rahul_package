import React from "react";
import Button3 from "../buttons/Button3";
import Navbar from "./Navbar";

// Path to the background image
import Heroimg from "../Assests/heroimage.jpg";

const HeroSection = () => {
  return (
    <div className="relative bg-white rounded-xl overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-20 pt-24 md:pt-32 pb-12 lg:pb-32">
        {/* Left Section - Text Content */}
        <div className="md:w-1/2 relative z-10 text-center md:text-left mt-5">
          <div className="text-3xl md:text-4xl lg:text-7xl text-gray-900 leading-tight">
            <div className="flex flex-row pl-16 md:pl-0">
              <div>Redefining </div>
              <div>Excellence</div>
            </div>
            <div>
              <span className="text-blue-700 font-semibold">
                in Pharmaceutical{" "}
              </span>
            </div>
            <div>
              <span className="text-pink-500 font-semibold">Packaging.</span>
            </div>
          </div>

          <p className="mt-4 text-gray-600 text-lg md:text-xl">
            This is a rapidly growing manufacturer and supplier of pharmaceutical
            strip packaging materials, renowned for its flawless printing precision
            and impeccable quality standards.
          </p>

          {/* Buttons */}
          <div className="mt-6 pl-32 md:pl-0">
            <Button3 text="explore" />
          </div>
        </div>

        {/* Right Section - Full-Width & Height Image with Stronger Fade Effect */}
        <div className="w-screen  relative h-[400px] md:h-[750px] md:mt-[-150px]  overflow-hidden  ">
          {/* Image */}
          <img
            src={Heroimg}
            alt="Healthcare Future"
            className="w-full h-full object-cover ]"
          />

          {/* Desktop Fade (Left-to-Right) */}
          <div
            className="absolute inset-0 hidden md:block"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.9) 20%, rgba(255, 255, 255, 0.7) 40%, rgba(255, 255, 255, 0.4) 60%, rgba(255, 255, 255, 0.1) 80%, transparent 100%)",
            }}
          ></div>

          {/* Mobile Fade (Top-to-Bottom) */}
          <div
            className="absolute inset-0 md:hidden"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.8) 30%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0.2) 90%, transparent 100%)",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
