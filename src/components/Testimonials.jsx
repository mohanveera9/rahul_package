import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Button1 from "../buttons/Button1.jsx";
import { FaQuoteLeft } from "react-icons/fa";
import Testimonial1 from "../Assests/testimonial1.jpg";
import Testimonial2 from "../Assests/testimonial2.jpg";
import Testimonial3 from "../Assests/testimonial3.jpg";

const testimonials = [
  {
    image: Testimonial1,
    text: "Rahul Packaging has consistently exceeded our expectations with their high-quality packaging solutions and exceptional service. Their attention to detail and commitment to zero-defect printing have made them our trusted partner for years. Highly recommended!",
    name: "Urvashi Bakliwal",
    location: "Agra, Uttar Pradesh",
  },
  {
    image: Testimonial2,
    text: "The level of precision in their packaging is outstanding! Rahul Packaging ensures that every detail is perfect, and their dedication to quality is truly commendable. We couldn’t have asked for a better packaging partner.",
    name: "Rohan Mehta",
    location: "Mumbai, Maharashtra",
  },
  {
    image: Testimonial3,
    text: "Exceptional service and impeccable quality! The printing precision and material standards of Rahul Packaging are top-notch. They have always delivered beyond our expectations.",
    name: "Sneha Verma",
    location: "Delhi, India",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 md:p-10 mx-2 md:mx-4">
      <section className="flex flex-col items-center justify-center py-12 px-4 bg-white">
      <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
          <Button1 text="Testimonials" />
          <div className="mt-3 text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold text-gray-800">
            Voices of Trust,
          </div>
          <div className="mt-2 text-2xl sm:text-3xl md:text-5xl lg:text-6xl  font-semibold text-gray-800">
            success of <span className="text-purple-600">stories.</span>
          </div>
        </motion.div>

        <div className="mt-14 flex flex-col lg:flex-row items-center  gap-6 w-full max-w-6xl">
          {/* Image Section */}
          <div className="relative w-96 h-96 rounded-3xl overflow-hidden shadow-lg hidden lg:block">
            <img
              src={testimonials[currentIndex].image}
              alt="Client"
              className="w-full h-full object-cover transition-opacity duration-500"
            />
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 bg-gray-800 px-1 py-1  rounded-full text-white text-sm">
              <span>Trusted Clients</span>
              <div className="flex -space-x-1 overflow-hidden">
                {testimonials.map((testimonial, index) => (
                  <img
                    key={index}
                    className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-white"
                    src={testimonial.image}
                    alt=""
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Testimonial Content */}
          <div className="bg-purple-100 p-4 sm:p-6 rounded-3xl shadow-lg w-full lg:w-2/3">
            <div className="flex justify-between mx-4 sm:mx-10 mt-4 sm:mt-8">
              <div className="font-bold text-xl sm:text-3xl">
                <FaQuoteLeft />
              </div>
              <div className="flex">
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <span key={i} className="text-yellow-500 text-lg sm:text-xl">
                      ★
                    </span>
                  ))}
              </div>
            </div>
            <div className="font-semibold text-sm sm:text-lg mt-4 sm:mt-8 mx-4 sm:mx-10">
              {testimonials[currentIndex].text}
            </div>
            <div className="flex items-center mt-4 mx-4 sm:mx-10 mb-8">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
              />
              <div className="ml-3">
                <p className="font-semibold text-gray-800 text-sm sm:text-base">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-xs sm:text-sm text-gray-500">
                  {testimonials[currentIndex].location}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex space-x-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentIndex === index ? "bg-purple-600 w-4 h-4" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
