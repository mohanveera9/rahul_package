import React from "react";
import Button3 from "../buttons/Button3";
import Navbar from "./Navbar";
import Heroimg from "../Assests/heroimage.jpg"

const HeroSection = () => {
  return (
    <div className="relative bg-white rounded-xl overflow-hidden">
      <Navbar />
      <div className="relative flex flex-col lg:flex-row items-center min-h-screen">
        {/* Left Section - Text Content */}
        <div className="w-full lg:w-1/3 relative z-10 text-center lg:text-left px-6 lg:px-28 py-12 lg:py-0 pt-32">
          <div className="text-2xl md:text-3xl lg:text-5xl xl:text-7xl text-gray-900 leading-tight ">
            <div>Redefining</div>
            <div>
              <span className="text-blue-700 font-bold">Pharma</span>{" "}
              <span className="text-pink-500 font-bold">Packaging</span>
            </div>
          </div>

          <p className="mt-4 text-gray-600 text-base md:text-lg max-w-md mx-auto lg:mx-0">
            Leading manufacturer of premium pharmaceutical packaging with unmatched printing precision and quality.
          </p>

          <div className="mt-8 flex justify-center lg:justify-start">
            <Button3 text="Explore Solutions" />
          </div>
        </div>

        {/* Right Section - Image with Responsive Fade Effect */}
        <div className="w-full lg:w-2/3 relative h-[300px] lg:h-screen">
          <img
            src={Heroimg}
            alt="Pharmaceutical Packaging"
            className="w-full h-full object-cover absolute inset-0"
          />

          {/* Fade Effect for Large Screens (Left to Right) */}
          <div
            className="hidden lg:block absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to bottom, 
                  rgba(255, 255, 255, 1) 0%, 
                  rgba(255, 255, 255, 0.9) 0%, 
                  rgba(255, 255, 255, 0.7) 0%, 
                  rgba(255, 255, 255, 0.4) 5%, 
                  rgba(255, 255, 255, 0) 10%
                ),
                linear-gradient(to right, 
                  rgba(255, 255, 255, 1) 0%, 
                  rgba(255, 255, 255, 1) 0px, 
                  rgba(255, 255, 255, 0.9) 20%, 
                  rgba(255, 255, 255, 0.5) 35%, 
                  rgba(255, 255, 255, 0) 100%
                )
              `,
            }}
          />

          {/* Fade Effect for Small Screens (Top to Bottom) */}
          <div
            className="lg:hidden absolute inset-0"
            style={{
              backgroundImage:
                `linear-gradient(to bottom, 
                rgba(255, 255, 255, 1) 0%,
                 rgba(255, 255, 255, 0.8) 10%,
                  rgba(255, 255, 255, 0.4) 30%, 
                  rgba(255, 255, 255, 0) 100%
                  )`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;