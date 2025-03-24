import React from "react";
import AboutHeader from "../components/AboutHeader";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import About1 from "../Assests/about1.png";
import About2 from "../Assests/about2.jpg";
import About3 from "../Assests/about3.png";
import About from "../components/About";
import Aboutimg from "../Assests/about.avif";

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
      <section className=" bg-white py-12  text-center w-full">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Our Story
        </motion.h2>
        <div className="flex flex-col  lg:flex-row ">
      {/* Image Section */}
      <motion.div
        className="flex-1 h-auto mt-4 lg:h-auto flex justify-center  items-center"
        initial={{ opacity: 0, x: -100 }} // Image starts off-screen to the left
        whileInView={{ opacity: 1, x: 0 }} // Slides in smoothly to original position
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img
          src={Aboutimg}
          alt="story"
          className="w-11/12 lg:w-4/5 h-full object-cover" // Ensures image fills available height
        />
      </motion.div>

      {/* Text Section */}
      <motion.div
        className="flex-1 text-gray-600 text-left text-base lg:text-xl leading-relaxed max-w-4xl  p-5"
        initial={{ opacity: 0, x: 100 }} // Text starts off-screen to the right
        whileInView={{ opacity: 1, x: 0 }} // Slides in smoothly to original position
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      >
        <p>
          Rahul Packaging is a reputable company specializing in the printing
          of foils for medicines.
        </p>
        <p className="py-5">
          Established in the year 2005, this Delhi-based enterprise with
          expertise in the packaging industry has served numerous clients.
          Using the most advanced printing technology, we deliver precise,
          vibrant, and durable prints.
        </p>
        <p>
          Rahul Packaging has a team of skilled workers, which ensures that
          each product meets the highest industry standards.
        </p>
        <p className="py-6">
          In this competitive market world, we enjoy a remarkable business
          position of a quality-conscious manufacturer because of our sincerity
          in following industrial quality norms. Stringent quality testing
          ensures delivery of solely the best from the company's end. Our
          business presence is not limited to local Indian markets but expands
          to international markets.
        </p>
        <p>
          Rahul Packaging has built a strong reputation for quality, technical
          know-how, and industry expertise. All these combined offer the
          highest level of customer satisfaction, premium quality products, and
          impeccable service.
        </p>
      </motion.div>
    </div>
      </section>
      <div className="bg-gradient-to-r from-pink-100 to-purple-200 rounded-3xl mx-5 lg:mx-20 py-12  mt-14">
        <div className="flex flex-col lg:flex-row  rounded-lg">
          {/* Our Clients Section with Image */}
          <div className=" py-12 px-6 text-center w-full lg:w-1/2">
            <motion.h2
              className="text-3xl font-bold text-gray-900 mb-10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Our Clients
            </motion.h2>
            <motion.div className="flex flex-col items-center justify-center gap-8 max-w-6xl mx-auto" 
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, ease: "easeOut" }}>
              <img
                src=""
                alt="Our Clients"
                className="w-full md:w-2/3 lg:w-3/4 h-64 object-cover rounded-sm shadow-lg hover:translate-y-[-5px] duration-500 transition-all"
              />
              <p className="text-gray-700 w-full md:w-2/3  lg:w-3/4 text-left leading-relaxed">
              Rahul Packaging's portfolio of esteemed clients, which includes some of the top pharmaceutical businesses in India, is one of its main competitive advantages. <strong> Alkem</strong>, <strong>Cipla</strong>, <strong>Macleods</strong>, <strong> Micro Labs</strong>, <strong>Lupin</strong>, <strong>Intas</strong>,<strong> Ajanta Pharma</strong>, and <strong>Dava</strong> India are a few of its prestigious clientele. These relationships illustrate the trust and confidence these prominent pharmaceutical businesses have in Rahul Packaging's ability to provide high-quality foil printing services. write in short striking message
              </p>
            </motion.div>
          </div>

          {/* Machinery Section with Image */}
          <div className=" py-12 px-6 b w-full lg:w-1/2 text-center">
            <motion.h2
              className="text-3xl font-bold text-gray-900 mb-10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Machinery
            </motion.h2>
            <motion.div className="flex flex-col items-center justify-center gap-8 max-w-6xl mx-auto"
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, ease: "easeOut" }}>
              <img
                src=""
                alt="Machinery"
                className=" w-full md:w-2/3  lg:w-3/4 h-64 object-cover rounded-sm shadow-lg hover:translate-y-[-5px] duration-500 transition-all"
              />
              <p className="text-gray-700  w-full md:w-2/3  lg:w-3/4 text-left leading-relaxed">
              Rahul Packaging leverages cutting-edge technology, including <strong>Rotogravure printing machines</strong>, to achieve high-quality and vibrant graphics on packaging materials. These machines ensure precision and consistency in the printing process. Additionally,<strong> slitting machines </strong>are employed to customize material widths, providing tailored packaging solutions to meet specific client needs.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Why Choose Rahul Packaging Section */}
      <div className="bg-white py-12 px-6 text-center mt-10 mb-10 mx-2 lg:mx-16">
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
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: index * 0.2,
              }}
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
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;
