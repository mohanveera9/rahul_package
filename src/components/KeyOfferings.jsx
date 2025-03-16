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
        <div className="font-semibold text-4xl md:text-6xl">Discover the</div>
        <div className="font-semibold text-4xl md:text-6xl">
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
            className="border border-purple-300 p-6 rounded-lg shadow-md text-center flex flex-col h-auto md:h-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
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