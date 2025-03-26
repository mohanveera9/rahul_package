import React from "react";
import Button3 from "../buttons/Button3";
import Navbar from "./Navbar";
import Heroimg from "../Assests/heroimage.jpg";

const HeroSection = () => {
  return (
    <div className="relative bg-[#FFF2DF] overflow-hidden">
      <Navbar />
      <div className="relative flex flex-col lg:flex-row items-center min-h-screen container mx-auto">
        {/* Left Section - Text Content */}
        <div className="w-full lg:w-1/2 relative z-10 text-left px-8 lg:px-12 py-12 lg:py-0 space-y-4">
          <div className="text-left">
            <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-gray-900 leading-tight mt-24  lg:mt-0">
              <div className="flex flex-row  gap-2 mb-2">
                <span>Redefining</span>
                <span>Excellence</span>
              </div>
              <div className="flex-row  font-semibold mb-2">
                <span>in{" "}</span>
                <span className="bg-gradient-to-r from-[#D3A376] to-[#8C6E63] text-transparent bg-clip-text">
                  Pharmaceutical
                </span>
              </div>
              <div className="font-semibold bg-gradient-to-r from-[#D3A376] to-[#8C6E63] text-transparent bg-clip-text pb-3">
                Packaging
              </div>
            </h1>
            
            <p className="mt-2 md:mt-4 text-gray-600 text-base md:text-lg max-w-2xl mx-auto lg:mx-0 text-left">
              This is a rapidly growing manufacturer and supplier of pharmaceutical 
              strip packaging materials,<span className="hidden md:block"> renowned for its flawless printing precision 
              and impeccable quality standards.</span>
            </p>
            
            <div className="mt-8 flex justify-start">
              <Button3 text="Explore" />
            </div>
          </div>
        </div>

        {/* Right Section - Image with Responsive Fade Effect */}
        <div className="w-full lg:w-1/2 relative h-[400px] sm:h-[500px] lg:h-screen mt-8 lg:mt-0">
          <div className="absolute inset-0">
            <img
              src={Heroimg}
              alt="Pharmaceutical Packaging"
              className="w-full h-full object-cover"
            />
            
            {/* Fade Effect for Large Screens (Left to Right) */}
            <div 
              className="hidden lg:block absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: `
                  linear-gradient(to bottom,
                    rgba(255, 242, 223, 1) 0%,
                    rgba(255, 242, 223, 0.9) 0%,
                    rgba(255, 242, 223, 0.7) 0%,
                    rgba(255, 242, 223, 0.4) 5%,
                    rgba(255, 242, 223, 0) 10%
                  ),
                  linear-gradient(to right,
                    rgba(255, 242, 223, 1) 0%,
                    rgba(255, 242, 223, 1) 0px,
                    rgba(255, 242, 223, 0.9) 10%,
                    rgba(255, 242, 223, 0.5) 60%,
                    rgba(255, 242, 223, 0) 100%
                  )
                `,
              }}
            />
            
            {/* Fade Effect for Small Screens (Top to Bottom) */}
            <div 
              className="lg:hidden absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: `linear-gradient(to bottom,
                  rgba(255, 242, 223, 1) 0%,
                  rgba(255, 242, 223, 0.8) 20%,
                  rgba(255, 242, 223, 0.4) 50%,
                  rgba(255, 242, 223, 0) 100%
                )`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;