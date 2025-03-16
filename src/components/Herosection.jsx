import React from "react";
import Heroimg from "../Assests/heroimg.png";
import Button3 from "../buttons/Button3";
import Navbar from "./Navbar";
import BgImage from "../Assests/bg.avif";
import Company1 from "../Assests/companies/c1.png";
import Company2 from "../Assests/companies/c2.png";
import Company3 from "../Assests/companies/c3.png";
import Company4 from "../Assests/companies/c4.png";
import Company5 from "../Assests/companies/c5.png";
import Company6 from "../Assests/companies/c6.png";
import Company7 from "../Assests/companies/c7.png";
import Company8 from "../Assests/companies/c8.png";
import Company9 from "../Assests/companies/c9.png";

const companyLogos = [
  Company1, Company2, Company3, Company4, Company5,
  Company6, Company7, Company8, Company9
];

const HeroSection = () => {
  return (
    <div className="relative bg-cover bg-center bg-no-repeat rounded-xl" style={{ backgroundImage: `url(${BgImage})` }}>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-20 pt-32 md:pt-32">
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
            <div className="mt-6 flex sm:flex-row sm:items-start space-x-4 md:space-y-0 sm:space-y-0 lg:space-y-0">
              <Button3 text="Explore" />
              <button className="bg-white text-black px-6 py-3 rounded-full text-lg font-medium hover:bg-gray-300">
                Demo
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="mt-10 md:mt-0 flex justify-center">
            <img src={Heroimg} alt="Pharmaceutical Packaging" className="lg:w-[450px]" />
          </div>
        </div>

        {/* Trusted Companies Section (Placed Below Buttons) */}
        <div className="mt-10 mb-16">
          <h2 className="text-center text-lg md:text-xl font-semibold text-gray-800 mb-6">
            Trusted by the most innovative companies
          </h2>

          {/* Scrollable Company Logos */}
          <div className="overflow-hidden w-full">
            <div className="scrolling-container">
              {/* Duplicating logos to create a seamless loop */}
              <div className="scrolling-content">
                {companyLogos.concat(companyLogos).map((logo, index) => (
                  <img key={index} src={logo} alt={`Company ${index + 1}`} className="logo" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Animation Styles */}
        <style>
          {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); } /* Moves halfway, then repeats */
          }

          .scrolling-container {
            display: flex;
            overflow: hidden;
            white-space: nowrap;
            width: 100%;
          }

          .scrolling-content {
            display: flex;
            animation: scroll 15s linear infinite;
            width: max-content;
          }

          .logo {
            height: 60px;
            margin: 0 20px;
            object-fit: contain;
            filter: grayscale(100%); /* Converts images to black and white */
          }
        `}
        </style>
      </div>
    </div>
  );
};

export default HeroSection;
