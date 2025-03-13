import Button1 from "../buttons/Button1";
import aluminiumImage from "../Assests/aluminium.jpg";
import foillidImage from "../Assests/foil-lids.jpg";
import chocolateFoilImage from "../Assests/chocolate-foil.jpg";

const products = [
  {
    title: "Aluminium Blister Foil",
    description:
      "Durable and lightweight packaging for pharmaceutical tablets and capsules, available in 20 or 25-micron variants.",
    image: aluminiumImage  , 
  },
  {
    title: "Foil Lids",
    description:
      "Durable, customizable, and designed for secure sealing across food, cosmetics, and pharmaceutical applications.",
    image:  foillidImage,
  },
  {
    title: "Soft Foil Chocolate Wrapping",
    description:
      "Premium, food-grade foil ensuring freshness, protection, and an elegant finish for your chocolates.",
    image: chocolateFoilImage,
  },
  {
    title: "Polyester Laminates",
    description:
      "Versatile, durable, and customizable packaging solutions for food, pharmaceutical, and consumer goods industries.",
    image: foillidImage,
  },
  {
    title: " 4 Ply Laminate Pouches",
    description:
      "High-strength, multi-layer packaging designed for superior protection, freshness, and durability in diverse applications.",
    image: foillidImage,
  },
  {
    title: " Glassine Paper Poly",
    description:
      "Smooth, grease-resistant, and eco-friendly packaging ideal for wrapping and protecting delicate products.",
    image: foillidImage,
  },
  {
    title: "Soft Foil Chocolate Wrapping",
    description:
      "Premium, food-grade foil ensuring freshness, protection, and an elegant finish for your chocolates.",
    image: foillidImage,
  },
  {
    title: "Soft Foil Chocolate Wrapping",
    description:
      "Premium, food-grade foil ensuring freshness, protection, and an elegant finish for your chocolates.",
    image: foillidImage,
  },
  {
    title: "Soft Foil Chocolate Wrapping",
    description:
      "Premium, food-grade foil ensuring freshness, protection, and an elegant finish for your chocolates.",
    image:foillidImage,
  },
  {
    title: "Soft Foil Chocolate Wrapping",
    description:
      "Premium, food-grade foil ensuring freshness, protection, and an elegant finish for your chocolates.",
    image: foillidImage,
  },
  {
    title: "Soft Foil Chocolate Wrapping",
    description:
      "Premium, food-grade foil ensuring freshness, protection, and an elegant finish for your chocolates.",
    image: foillidImage,
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