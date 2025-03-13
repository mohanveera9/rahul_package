
import Button1 from "../buttons/Button1.jsx";
import Button2 from "../buttons/Button2.jsx";
import aluminiumImage from "../Assests/aluminium.jpg";
import foillidImage from "../Assests/foil-lids.jpg";
import chocolateFoilImage from "../Assests/chocolate-foil.jpg";


const offerings = [
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
];

const KeyOffering = () => {
  return (
    <div className="text-center p-6 md:p-10">
      
      <Button1 text="Our Key Offerings" />
      <div className="mt-3">
        <div className="font-semibold text-4xl md:text-6xl">Discover the</div>
        <div className="font-semibold text-4xl md:text-6xl">
          core of <span className="text-purple-600">our Excellence</span>
        </div>
      </div>
      <div className="text-gray-600 mt-3 max-w-2xl mx-auto text-lg md:text-xl">
        Rahul Packaging specializes in a range of premium packaging solutions tailored
        for the pharmaceutical, food, and cosmetic industries.
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 mx-4 md:mx-10">
        {offerings.map((offering, index) => (
          <div
            key={index}
            className="border border-purple-300 p-6 rounded-lg shadow-md text-center flex flex-col h-auto md:h-auto"
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
          </div>
        ))}
      </div>

      
      <div className="bg-purple-100 mt-12 p-6 rounded-lg h-auto md:h-60 mx-4 md:mx-10 flex flex-col md:flex-row items-center justify-center relative overflow-hidden">
       
        <img
          src="/Assets/left-image.png"
          alt="Packaging Products"
          className="hidden md:block absolute left-0 h-40 md:h-48 w-auto object-contain ml-4 md:ml-6"
        />

        <div className="text-center">
          <div className="text-2xl md:text-3xl font-semibold">
            Let’s Start Packaging Your <span className="text-purple-600">Success.</span>
          </div>
          <div className="pt-5">
            <Button1 text="Request a Quote" />
          </div>
        </div>

        <img
          src="/Assets/right-image.png"
          alt="Blister Foil"
          className="hidden md:block absolute right-0 h-40 md:h-48 w-auto object-contain mr-4 md:mr-6"
        />
      </div>
    </div>
  );
};

export default KeyOffering;
