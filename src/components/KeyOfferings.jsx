import React, { useState } from "react";
import { motion } from "framer-motion";
import Button1 from "../buttons/Button1.jsx";
import Button2 from "../buttons/Button2.jsx";
import Soft from "../Assests/Products/Soft_foil_wrapper.png";
import Alu from "../Assests/Products/alu.png";
import Foil from "../Assests/Products/Foil_Lid.png";

const offerings = [
  {
    title: "Aluminium Blister Foil",
    description:
      "Durable and lightweight packaging for pharmaceutical tablets and capsules, available in 20 or 25-micron variants.",
    image: Alu,
  },
  {
    title: "Foil Lids",
    description:
      "Durable, customizable, and designed for secure sealing across food, cosmetics, and pharmaceutical applications.",
    image: Foil,
  },
  {
    title: "Soft Foil Chocolate Wrapping",
    description:
      "Premium, food-grade foil ensuring freshness, protection, and an elegant finish for your chocolates.",
    image: Soft,
  },
];

const KeyOffering = () => {
 const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  return (
    <motion.div
      className="text-center p-6 md:p-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* heading */}
      <Button1 text="Our Key Offerings" />
      <div className="mt-3">
        <div className="font-semibold text-4xl md:text-5xl lg:text-6xl">Discover the</div>
        <div className="font-semibold text-4xl md:text-5xl lg:text-6xl">
          core of <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text">our Excellence</span>
        </div>
      </div>
      <div className="text-gray-600 mt-3 max-w-2xl mx-auto text-lg md:text-xl">
        Rahul Packaging specializes in a range of premium packaging solutions tailored
        for the pharmaceutical, food, and cosmetic industries.
      </div>
      {/* cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 mx-2 lg:mx-12 md:mx-4">
        {offerings.map((offering, index) => (
          <motion.div
            key={index}
            className="border  p-6 rounded-lg shadow-md text-center flex flex-col h-auto md:h-auto relative"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              setMousePosition({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
              });
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
             {/* Border layer */}
             <div
              className="absolute inset-0 rounded-lg border-[1px] border-gray-300 pointer-events-none"
              style={{
                borderImageSource:
                  hoveredIndex === index
                    ? "linear-gradient(90deg, #ec4899, #8b5cf6)"
                    : "none",
                borderImageSlice: hoveredIndex === index ? 1 : "none",
                maskImage:
                  hoveredIndex === index
                    ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,1) 15px, rgba(255,255,255,0.2) 80px, rgba(255,255,255,0) 100px)`
                    : "none",
                WebkitMaskImage:
                  hoveredIndex === index
                    ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,1) 15px, rgba(255,255,255,0.2) 80px, rgba(255,255,255,0) 100px)`
                    : "none",
              }}
            />

            <img
              src={offering.image}
              alt={offering.title}
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="text-xl font-semibold mt-4">{offering.title}</div>
            <div className="text-gray-600 mt-2 text-sm md:text-base">{offering.description}</div>
            <div className="mt-auto">
              <Button2 text="Learn more" />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default KeyOffering;