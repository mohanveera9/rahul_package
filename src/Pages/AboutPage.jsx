import React from 'react'
import AboutHeader from '../components/AboutHeader'
import About from '../components/About'
import Footer from '../components/Footer'

const AboutPage = () => {
  const features = [
    {
      title: "Trusted & Quality-Driven",
      description:
        "Since 2005, Rahul Packaging has been a leading name in pharmaceutical packaging, ensuring zero-defect printing and superior product quality.",
      image: About1, // Replace with actual image URL
    },
    {
      title: "State-of-the-Art Infrastructure",
      description:
        "Equipped with fully automatic 4 & 3-color rotogravure printing machines and high-precision slitting machines, we deliver impeccable packaging solutions.",
      image: About2, // Replace with actual image URL
    },
    {
      title: "Global & Reputed Clientele",
      description:
        "Serving 20+ top pharmaceutical companies like Cipla, Lupin, Alkem, and international clients, we are a trusted packaging partner worldwide.",
      image: About3, // Replace with actual image URL
    },
  ];

  return (
    <div>
      <AboutHeader />
      <About />

      {/* Why Choose Us Section with Scroll Animation */}
      <div className="bg-white py-12 px-6 text-center w-full mt-20 md:mt-10 sm:mt-4 mb-10">
        <motion.h2
          className="text-3xl font-bold text-gray-900 mb-20"
          initial={{ opacity: 0, y: 50 }} // Now it comes from down to up
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
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;
