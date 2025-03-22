import React from "react";
import AboutHeader from "../components/AboutHeader";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import About1 from "../Assests/about1.png";
import About2 from "../Assests/about2.jpg";
import About3 from "../Assests/about3.png";
import About from "../components/About";



const AboutPage = () => {
  const features = [
    {
      title: "38 Years of Expertise",
      description:
        "Rahul Packaging has established itself as a leader in the packaging industry, known for delivering quality products and maintaining global standards.",
      image: About1,
    },
    {
      title: "240 Metric Tonnes of Corn Processed Daily",
      description:
        "With high-capacity infrastructure and cutting-edge technology, Rahul Packaging ensures consistent product excellence and innovation.",
      image: About2,
    },
    {
      title: "Serving 15+ Countries",
      description:
        "Our network expands across 15+ countries, catering to pharmaceutical and FMCG industries globally, ensuring seamless services.",
      image: About3,
    },
  ];

  return (
    <div>
      <AboutHeader />
      <About />

      {/* Our Story Section */}
      <section className="bg-white py-12 px-6 text-center w-full">
        <motion.h2
          className="text-3xl font-bold text-gray-900 mb-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Our Story
        </motion.h2>
        <p className="text-gray-600 max-w-4xl mx-auto">
          Since 2005, Rahul Packaging has been at the forefront of foil
          printing for pharmaceuticals, delivering precision and quality using
          advanced technology. We have earned a stellar reputation by serving
          top pharmaceutical companies and maintaining the highest quality
          standards.
        </p>
      </section>

      {/* Our Clients Section with Image */}
      <section className="bg-gray-100 py-12 px-6 text-center w-full">
        <motion.h2
          className="text-3xl font-bold text-gray-900 mb-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Our Clients
        </motion.h2>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 max-w-6xl mx-auto">
          <img
            src=""
            alt="Our Clients"
            className="w-full lg:w-1/2 h-64 object-cover rounded-sm shadow-md"
          />
          <p className="text-gray-600 lg:w-1/2 text-left">
            Rahul Packaging's portfolio of esteemed clients includes top
            pharmaceutical companies in India such as <strong>Alkem, Cipla, Macleods,
            Micro Labs, Lupin, Intas, Ajanta Pharma,</strong> and <strong>Dava India</strong>.
            These relationships reflect the trust and confidence these
            businesses have in our ability to provide high-quality foil printing
            services.
          </p>
        </div>
      </section>

      {/* Machinery Section with Image */}
      <section className="bg-white py-12 px-6 text-center w-full">
        <motion.h2
          className="text-3xl font-bold text-gray-900 mb-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Machinery
        </motion.h2>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 max-w-6xl mx-auto">
          <img
            src=""
            alt="Machinery"
            className="w-full lg:w-1/2 h-64 object-cover rounded-sm shadow-md"
          />
          <p className="text-gray-600 lg:w-1/2 text-left">
            Rahul Packaging leverages cutting-edge technology, including{" "}
            <strong>Rotogravure printing machines</strong>, to achieve high-quality
            and vibrant graphics on packaging materials. Additionally,{" "}
            <strong>slitting machines</strong> are employed to customize material
            widths, providing tailored packaging solutions to meet specific
            client needs.
          </p>
        </div>
      </section>

      {/* Our Timeline Section */}
      <section className="bg-gray-100 py-12 px-6 text-center w-full">
        <motion.h2
          className="text-3xl font-bold text-gray-900 mb-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Our Timeline
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-10">
            <div className="text-left">
              <h3 className="text-xl font-semibold">1986</h3>
              <p className="text-gray-600">
                Rahul Packaging began with a vision to redefine the packaging
                industry. From humble beginnings, we established ourselves as a
                trusted partner for high-quality foil packaging.
              </p>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold">1998</h3>
              <p className="text-gray-600">
                With growing demand and trust, we expanded operations, adopting
                advanced technologies to ensure precision and consistency in
                our offerings.
              </p>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold">2010</h3>
              <p className="text-gray-600">
                We took a significant leap, establishing state-of-the-art
                facilities equipped with advanced machinery to deliver
                world-class products to a global audience.
              </p>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold">Today</h3>
              <p className="text-gray-600">
                Rahul Packaging stands as a leader in the packaging industry,
                supplying premium products to over 15 countries and catering to
                diverse industries, including food, beverage, and healthcare
                sectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Rahul Packaging Section */}
      <section className="bg-white py-12 px-6 text-center w-full">
        <motion.h2
          className="text-3xl font-bold text-gray-900 mb-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Why Choose Rahul Packaging?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-48 object-cover rounded-sm mb-4 hover:translate-y-[-5px] duration-500 transition-all"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
