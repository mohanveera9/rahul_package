import { LuPhone, LuMail, LuMapPin } from "react-icons/lu"; // React Icons
import ContactHeader from "../components/ContactHeader";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <section className="bg-white" id="contact">
      <Navbar />
      <ContactHeader />

      {/* Map Section */}
      <div className="container mx-auto px-4 md:px-6 lg:px-16 py-12">
        <div className="w-full mx-auto h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-lg shadow-lg overflow-hidden mb-8 mt-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111722.40333054028!2d77.09458405!3d28.948080300000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390db00b8670400b%3A0x9efbd3cd589b645e!2sSonipat%2C%20Haryana!5e0!3m2!1sen!2sin!4v1741878512113!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Contact Form Section */}
        <motion.div 
          className="container py-16 px-4 md:px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="mx-auto">
            <h2 className="text-3xl font-semibold mb-6 text-center">Send Us a Message</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name :
                  </label>
                  <input
                    id="first-name"
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-200"
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name :
                  </label>
                  <input
                    id="last-name"
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-200"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-200"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  placeholder="Your Message"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md min-h-[120px] focus:outline-none focus:ring-2 focus:ring-pink-200"
                  required
                ></textarea>
              </div>
              <button className="w-full sm:w-auto py-2 px-4 rounded-md text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 transition">
                Submit Form
              </button>
            </form>
          </div>
        </motion.div>

        {/* Contact Info Section */}
        <motion.div 
          className="mt-12 text-center px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-semibold mb-6">Contact Us</h3>

          <div className="border border-gray-400 rounded-xl p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center p-6 border-b sm:border-b-0 sm:border-r border-gray-300">
                <LuPhone className="h-8 w-10 lg:h-12 md:h-10 sm:w-12 text-pink-600 mb-2" />
                <h4 className="text-2xl font-semibold mb-2 text-gray-800">Phone</h4>
                <p className="text-gray-700 text-xl font-medium">+91 9811440664</p>
              </div>
              <div className="flex flex-col items-center p-6 border-b sm:border-b-0 sm:border-r border-gray-300">
                <LuMail className="h-8 w-10 lg:h-12  md:h-10  sm:w-12 text-pink-600 mb-2" />
                <h4 className="text-2xl font-semibold mb-2 text-gray-800">Email</h4>
                <p className="text-gray-700 text-xl font-medium break-words">rahul.oswal@yahoo.co.in</p>
              </div>
              <div className="flex flex-col items-center p-6">
                <LuMapPin className="h-8 w-10 lg:h-12  md:h-10  sm:w-12 text-pink-600 mb-2" />
                <h4 className="text-2xl font-semibold mb-2 text-gray-800">Address</h4>
                <p className="text-gray-700 text-xl font-medium text-center max-w-xs">
                  Plot no. 240, Sec - 38 Phase 1, HSIIDC, RAI, SONIPAT, HARYANA - 131029
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </section>
  );
};

export default ContactPage;
