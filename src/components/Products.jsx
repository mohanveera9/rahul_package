import Button1 from "../buttons/Button1";
import Aluminium from "../Assests/Products/Aluminium_Blister_Foil.png";
import Bopp from "../Assests/Products/bopp.png";
import Four from "../Assests/Products/four_ply.png";
import Glassine from "../Assests/Products/glassine.png";
import Polyester from "../Assests/Products/Polyester.png";
import Pr from "../Assests/Products/pr.png";
import PVC from "../Assests/Products/pvc.png";
import Soft from "../Assests/Products/Soft_foil_wrapper.png";
import Alu from "../Assests/Products/alu.png"
import Foil from "../Assests/Products/Foil_Lid.png";
import Tripple from "../Assests/Products/triple.png";


const products = [
  {
    title: "Aluminium Blister Foil",
    description:
      "Durable and lightweight packaging for pharmaceutical tablets and capsules, available in 20 or 25-micron variants.",
    image: Aluminium , 
  },
  {
    title: "Foil Lids",
    description:
      "Durable, customizable, and designed for secure sealing across food, cosmetics, and pharmaceutical applications.",
    image:  Foil,
  },
  {
    title: "Soft Foil Chocolate Wrapping",
    description:
      "Premium, food-grade foil ensuring freshness, protection, and an elegant finish for your chocolates.",
    image: Soft,
  },
  {
    title: "Polyester Laminates",
    description:
      "Versatile, durable, and customizable packaging solutions for food, pharmaceutical, and consumer goods industries.",
    image: Polyester,
  },
  {
    title: " 4 Ply Laminate Pouches",
    description:
      "High-strength, multi-layer packaging designed for superior protection, freshness, and durability in diverse applications.",
    image: Four,
  },
  {
    title: " Glassine Paper Poly",
    description:
      "Smooth, grease-resistant, and eco-friendly packaging ideal for wrapping and protecting delicate products.",
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
    title: "PP Resin Granules for IV Fluid Bottles",
    description:
      "High quality, durable, reliable material for IV fluid bottles.",
    image: Pr,
  },
  {
    title: "PVC/PVDC",
    description:
      "Versatile material combination used for packaging, offering excellent barrier properties and durability.",
    image: PVC,
  },
  {
    title: "ALU ALU FOIL",
    description:
      "protective, high-barrier material commonly used for packaging pharmaceuticals.",
    image: Alu,
  },


];

const Products = () => {
  return (
    <div className="text-center p-6 md:p-10">
      
    <Button1 text="Our Products" />
    <div className="mt-3">
      <div className="font-semibold text-4xl md:text-6xl"> Innovative Solutions, </div>
      <div className="font-semibold text-4xl md:text-6xl">
      Tailored for <span className="text-purple-600">Every Need.</span>
      </div>
    </div>
    <div className="text-gray-600 mt-3 max-w-2xl mx-auto text-lg md:text-xl">
    Explore our diverse range of high-quality packaging solutions, designed to meet the unique demands 
    of various industries.
    </div>

    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 gap-6 mt-8 mx-4 md:mx-10">
      {products.map((products, index) => (
        <div
          key={index}
          className="border border-purple-300 p-6 rounded-lg shadow-md text-center flex flex-col h-auto md:h-auto"
        >
          <img
            src={products.image}
            alt={products.title}
            className="w-full h-56 object-cover rounded-lg"
          />
          <div className="text-xl font-semibold mt-4">{products.title}</div>
          <div className="text-gray-600 mt-2 text-sm md:text-base">{products.description}</div>
          <div className="mt-4">
            <Button1 text="Download Brochure" />
          </div>
        </div>
      ))}
    </div>

    
   
  </div>
  )
}

export default Products;