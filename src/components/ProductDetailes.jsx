import React from "react";
import { motion } from "framer-motion";
import Button1 from "../buttons/Button1";
import Aluminium from "../Assests/Products/Aluminium_Blister_Foil.png";
import Bopp from "../Assests/Products/bopp.png";
import Four from "../Assests/Products/four_ply.png";
import Glassine from "../Assests/Products/glassine.png";
import Polyester from "../Assests/Products/Polyester.png";
import Pr from "../Assests/Products/pr.png";
import PVC from "../Assests/Products/pvc.png";
import Soft from "../Assests/Products/Soft_foil_wrapper.png";
import Alu from "../Assests/Products/alu.png";
import Foil from "../Assests/Products/Foil_Lid.png";
import Tripple from "../Assests/Products/triple.png";

const products = [
  {
    title: "Aluminium Blister Foil",
    description: [
      "Commonly used in the pharmaceutical industry for packaging tablets and capsules.",
      "Developed under clean and hygienic conditions, available in both plain and printed forms.",
      "Primer coated Aluminium foil, hard tempered with HSL coating, available in 20-30 microns thickness."
    ],
    image: Aluminium,
  },
  {
    title: "Aluminium Foil Poly",
    description: [
      "Trusted manufacturer and supplier of aluminium foil poly.",
      "Aluminium foil laminated with polyethylene offers a versatile packaging solution, often used in food packaging.",
      "Safer and healthier than other materials for making sealing films, with a clean surface preventing bacterial growth."
    ],
    image: Foil,
  },
  {
    title: "Polyester Laminates",
    description: [
      "Widely used in flexible packaging, offering durability and moisture resistance.",
      "Provides excellent printability and innovative packing solutions for a range of applications."
    ],
    image: Polyester,
  },
  {
    title: "4 Ply Laminate Pouches",
    description: [
      "Rahul Packaging manufacture and export wide range of 3Ply/4PLY Laminate Pouches to our esteemed clients.  These pouches combine multiple layers to provide enhanced protection for various products. ",
      "Our manufacturing unit is well equipped with advanced techniques that assist us to develop the flawless range of products that are commonly used in the food and pharmaceutical industries for packaging items like snacks, powders, and more."
    ],
    image: Four,
  },
  {
    title: "Glassine Paper Poly",
    description: [
     "Rahul Packaging is a trusted name among Glassine Paper Suppliers; we make sure that a defect-free range reaches our clients. Glassine paper is a smooth and glossy paper that is often combined with polyethylene to create packaging materials suitable for items like confectionery, cosmetics, and pharmaceuticals.",
      "Smooth and glossy paper combined with polyethylene, ideal for packaging confectionery, cosmetics, and pharmaceuticals.",
      "Ensures defect-free delivery to clients with high quality control standards."
    ],
    image: Glassine,
  },
  {
    title: "PP Resin Granules for IV Fluid Bottles",
    description: [
      "High-quality polypropylene (PP) resins for manufacturing needs.",
      "Essential building blocks for a wide range of plastic products."
    ],
    image: Pr,
  },
  {
    title: "Triple Laminate Foils",
    description: [
    "Rahul Packaging also offers packing for conservative products like confectionery, tea, consumables etc. These laminates offer a combination of strength, barrier properties, and printability. ",
    "The final product specifications are made as per agreed pact with the customers based on the type of products that are to be packed. These foils are usually used for packing pouch.",
      "Used for packing confectionery, tea, consumables, and more.",
      "Offers a combination of strength, barrier properties, and printability, ensuring product quality and appearance."
    ],
    image: Tripple,
  },
  {
    title: "Alu-Alu Foil",
    description: [
      "Rahul Packaging also manufactures Alu-Alu foils used exclusively in the pharmaceutical industry for blister packaging. ",
      "Manufactured exclusively for the pharmaceutical industry for blister packaging.",
      "Available in 45 & 50 microns, offering cost-saving benefits and better mileage.",
      "Superior quality at competitive rates, with a focus on customer satisfaction and quality assurance."
    ],
    image: Alu,
  },
  {
    title: "PVC/PVDC",
    description: [
      "PVC: A versatile plastic used in various industries, including packaging and construction.",
      "PVDC: A high-barrier coating enhancing moisture and oxygen resistance in packaging films and foils.",
      "Advanced coating technology used for superior healthcare solutions."
    ],
    image: PVC,
  },
];

const Products = () => {
  return (
    <div className="text-center p-6 md:p-10">
      <div className="mt-8 mx-2 md:mx-4 lg:mx-12">
        {products.map((product, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-10 mb-20 md:mb-40 ${
              index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            <motion.div
              className="md:w-1/2"
              initial={{ x: index % 2 === 1 ? 100 : -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.2 }}
            >
             <motion.img
                src={product.image}
                alt={product.title}
                className="w-full h-96 object-cover rounded-lg shadow-md"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
            <motion.div
              className="md:w-1/2 text-left"
              initial={{ x: index % 2 === 1 ? -100 : 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h3 className="text-xl font-semibold md:text-3xl lg:text-5xl text-gray-800 mb-5 lg:mb-8">
                {product.title}
              </h3>
              <ul className="text-gray-600 mt-2 text-sm md:text-base lg:text-lg list-disc pl-5 space-y-2">
                {product.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <div className="mt-6">
                <Button1 text="Download Brochure" />
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
