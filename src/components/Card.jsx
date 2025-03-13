import Cardimg from "../Assests/card.png";
import Button3 from "../buttons/Button3";

const Card = () => {
  return (
    <div
      className="relative h-72 md:h-72 lg:mx-16 mx-8 flex items-center justify-center rounded-2xl overflow-hidden"
      style={{
        backgroundImage: `url(${Cardimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }} 
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div className="relative z-10 text-center text-white px-6">
        <h2 className="text-2xl md:text-4xl font-semibold">
          Partner with Rahul Packaging Today
        </h2>
        <p className="mt-2 text-sm md:text-lg max-w-2xl mx-auto">
          At Rahul Packaging, we don’t just deliver packaging solutions – we
          build lasting partnerships through quality, trust, and innovation.
          Join us in shaping a future where excellence is the standard.
        </p>

        {/* Centered Gradient Button */}
        <div className="flex justify-center  mt-6">
          <Button3 text= "Explore" />
        </div>
      </div>
    </div>
  );
};

export default Card;
