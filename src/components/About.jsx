import Button1 from "../buttons/Button1.jsx";
import Aboutimg from "../Assests/about.avif";

const About = () => {
  return (
    <section className="flex flex-col md:flex-row items-center lg:mx-12 mx-0 mt-4 md:mx-4 py-16">
      {/* Left Content */}
      <div className="md:w-3/5 lg:w-3/5 space-y-6 px-8">
        <Button1 text="About Us" />
        <p className="text-gray-500 text-lg font-semibold">
          Driven by Quality, Defined by Innovation.
        </p>
        <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
          Delivering Unparalleled Quality and Prompt Service at{" "}
          <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text">
            Competitive Prices.
          </span>
        </h2>
        <p className="text-gray-600 text-lg">
          Rahul Packaging excels in premium packaging solutions, offering a diverse range of
          products tailored to the pharmaceutical, food, and cosmetic industries. With a steadfast
          commitment to exceptional quality, reliable service, and innovative design, we leverage
          state-of-the-art technology and industry expertise to meet the evolving needs of our
          clients worldwide.
        </p>
      </div>

      {/* Right Image */}
      <div className="md:w-2/5 lg:w-2/5 flex justify-center mt-8 md:mt-0 px-6">
        <img
          src={Aboutimg}
          alt="Packaging Facility"
          className="rounded-2xl shadow-lg w-full max-w-md"
        />
      </div>
    </section>
  );
};

export default About;
