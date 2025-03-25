import { div } from "framer-motion/client";
import React from "react";

const Clients = () => {
  return (
    <div>
      {/* Trusted Companies Section */}
      <div className="mt-10 mb-16">
        <h2 className="text-center text-lg md:text-xl font-semibold text-gray-800 mb-6">
          Trusted by the most innovative companies
        </h2>

        {/* Scrollable Company Logos - Now works on all screens */}
        <div className="w-full overflow-hidden">
          <div className="relative flex items-center justify-center">
            <div className="w-full flex overflow-hidden whitespace-nowrap">
              <div className="flex space-x-8 md:space-x-12 scrolling-content">
                {/* Duplicating logos to create a seamless loop */}
                {companyLogos.concat(companyLogos).map((logo, index) => (
                  <img
                    key={index}
                    src={logo}
                    alt={`Company ${index + 1}`}
                    className="h-5 md:h-7 lg:h-8 object-contain grayscale hover:grayscale-0 transition duration-300"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .scrolling-content {
            display: flex;
            animation: scroll 15s linear infinite;
            width: max-content;
          }

          @media (max-width: 768px) {
            .scrolling-content {
              animation: scroll 12s linear infinite; /* Faster scroll for small screens */
            }
          }
        `}
      </style>
    </div>
  );
};

export default Clients;
