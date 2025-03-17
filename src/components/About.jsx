import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Button1 from "../buttons/Button1.jsx";
import Aboutimg from "../Assests/about.avif";

const About = () => {
 
  const { ref: contentRef, inView: contentInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="flex flex-col md:flex-col items-center lg:mx-12 mx-0 mt-10 md:mx-4 py-16">
      {/* Left Content */}
      <div className="flex flex-col md:flex-row">
        <motion.div
          ref={contentRef}
          initial={{ opacity: 0, x: -50 }}
          animate={contentInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
          className="md:w-3/5 lg:w-3/5 space-y-6 px-8"
        >
          <Button1 text="About Us" />
          <h2 className="font-semibold text-4xl md:text-5xl lg:text-6xl">
            Excellence in Packaging at{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text">
              Competitive Prices.
            </span>
          </h2>
          <p className="text-gray-600 text-lg">
            Rahul Packaging is a trusted name in premium packaging solutions,
            specializing in high-quality materials for pharmaceutical, food, and
            cosmetic industries. We combine state-of-the-art technology with
            years of expertise to create innovative and sustainable packaging.
            Our focus is on precision, durability, and eco-friendly designs that
            meet evolving industry standards. With a commitment to customer
            satisfaction, we ensure timely delivery, competitive pricing, and
            unmatched service. Partner with us for packaging solutions that
            enhance your brand and product presentation.
          </p>
        </motion.div>

        {/* Right Image */}
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, x: 50 }}
          animate={imageInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
          className="md:w-2/5 lg:w-2/5 flex justify-center mt-8 md:mt-0 px-6"
        >
          <img
            src={Aboutimg}
            alt="Packaging Facility"
            className="rounded-2xl shadow-lg w-full max-w-md md:max-w-xs md:mt-32 lg:mt-12 md:h-80"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
