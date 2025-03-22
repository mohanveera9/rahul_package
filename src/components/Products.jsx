import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Import for navigation
import Button1 from "../buttons/Button1";
import Aluminium from "../Assests/Products/Aluminium_Blister_Foil.png";
import Bopp from "../Assests/Products/bopp.png";
import Four from "../Assests/Products/four_ply.png";
import Glassine from "../Assests/Products/glassine.png";
import Polyester from "../Assests/Products/Polyester.png";
import Pr from "../Assests/Products/pr.png";
import PVC from "../Assests/Products/pvc.png";
import Alu from "../Assests/Products/alu.png";
import Foil from "../Assests/Products/Foil_Lid.png";
import Tripple from "../Assests/Products/triple.png";
import Button3 from "../buttons/Button3";

const products = [
  {
    title: "Aluminium Blister Foil",
    description:
      "Durable and lightweight packaging for pharmaceutical tablets and capsules, available in 20 or 25-micron variants.",
    image: Aluminium,
  },
  {
    title: "Foil Lids",
    description:
      "Durable, customizable, and designed for secure sealing across food, cosmetics, and pharmaceutical applications.",
    image: Foil,
  },
 {
     title: "Polyester Laminates",
     description: "Provides excellent printability and innovative packing solutions for a range of applications.They offer durability and moisture resistance.",
     image: Polyester,
   },
  {
    title: "Polyester Laminates",
    description:
      "Versatile, durable, and customizable packaging solutions for food, pharmaceutical, and consumer goods industries.",
    image: Polyester,
  },
  {
    title: "4 Ply Laminate Pouches",
    description:
      "High-strength, multi-layer packaging designed for superior protection, freshness, and durability in diverse applications.",
    image: Four,
  },
  {
    title: "Glassine Paper Poly",
    description:
      "Glassine paper is a smooth and glossy paper that is often combined with polyethylene to create packaging materials.",
    image: Glassine,
  },
  {
    title: "Triple Laminate Foils",
    description:
      "Durable, multi-layer packaging offering excellent barrier properties for optimal product protection and freshness.",
    image: Tripple,
  },
  {
    title: "BOPP Film",
    description:
      "Versatile, durable, and high-quality packaging material widely used for its excellent clarity, strength, and printability.",
    image: Bopp,
  },
  {
    title: "PP Resin Granules for IV Fluid",
    description:
      "High quality, durable, reliable material for IV fluid bottles, essential building blocks for a wide range of plastic products.",
    image: Pr,
  },
  {
    title: "PVC/PVDC",
    description:
      "Versatile material combination used for packaging, offering excellent barrier properties and durability, oxygen resistance in packaging films and foils.",
    image: PVC,
  },
  {
    title: "ALU ALU FOIL",
    description:
      "Protective, high-barrier material commonly used for packaging pharmaceuticals, superior quality at competitive rates.",
    image: Alu,
  },
];

const Products = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate(); // For navigating to products page

  return (
    <div className="text-center p-6 mt-10 md:p-10 relative mb-20">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Button1 text="Our Products" />
        <div className="mt-3">
          <div className="font-semibold text-4xl md:text-5xl lg:text-6xl">
            Innovative Solutions,
          </div>
          <div className="font-semibold text-4xl md:text-5xl lg:text-6xl">
            Tailored for{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text">
              Every Need.
            </span>
          </div>
        </div>
        <div className="text-gray-600 mt-3 max-w-2xl mx-auto text-lg md:text-xl">
          Explore our diverse range of high-quality packaging solutions,
          designed to meet the unique demands of various industries.
        </div>
      </motion.div>

      {/* Product Grid */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", staggerChildren: 0.3 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 gap-6 mt-8 mx-2 md:mx-4 lg:mx-12 relative"
      >
        {products.slice(0, 6).map((product, index) => (
          <motion.div
            key={index}
            className="relative"
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
            transition={{ duration: 0.6, ease: "easeOut" }}
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

            {/* Main card content */}
            <div className="p-6 rounded-lg shadow-md text-center flex flex-col h-auto md:h-auto border-2 border-transparent">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-56 object-cover rounded-lg"
              />
              <div className="text-xl font-semibold mt-4">{product.title}</div>
              <div className="text-gray-600 mt-2 text-sm md:text-base">
                {product.description}
              </div>
              <div className="mt-4">
                <Button1 text="Download Brochure" />
              </div>
            </div>
          </motion.div>
        ))}

        {/* Black Shadow on Last Row */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      </motion.div>

      {/* Explore Button Positioned at 2/3 Height */}
          {/* Explore Button Positioned at 2/3 Height */}
          <div className="absolute inset-x-0 top-2/3 flex justify-center mt-72">
        <Button3 to="/products" text="Explore" />
      </div>

    </div>
  );
};

export default Products;
