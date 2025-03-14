import { LuPhone, LuMail, LuMapPin } from "react-icons/lu"; // React Icons

import ContactHeader from "../components/ContactHeader";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactPage = () => {
  return (
    <section className="bg-white" id="contact">
      <Navbar />
      <ContactHeader />

      {/* Map Section - Responsive & Centered */}
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="w-full max-w-[1200px] mx-auto h-[500px] md:h-[600px] rounded-lg shadow-lg overflow-hidden">
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
      </div>

      {/* Contact Form Section */}
      <div className="container mx-auto py-16 px-4 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side: Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6 sm:text-left">Get in touch</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-left">Send a message</h3>
                <p className="text-gray-600 mb-6 text-left">
                  Have a question? Send us a message and we'll get back to you promptly!
                </p>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="E-mail"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Phone Number"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Message"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md min-h-[120px] focus:outline-none focus:ring-2 focus:ring-pink-600"
                    ></textarea>
                  </div>
                  <button className="w-full py-2 px-4 rounded-md text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 transition">
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Details */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-left">Contact Us</h3>
            <div className="space-y-6 text-left">
              <div className="flex items-center justify-start">
                <LuPhone className="h-6 w-6 mr-3 text-pink-600" />
                <p className="text-gray-700 text-lg">+91 - 9811440664</p>
              </div>
              <div className="flex items-center justify-start">
                <LuMail className="h-6 w-6 mr-3 text-pink-600" />
                <p className="text-gray-700 text-lg">rahul.oswal@yahoo.co.in</p>
              </div>
              <div className="flex items-center justify-start">
                <LuMapPin className="h-6 w-6 mr-3 text-pink-600" />
                <p className="text-gray-700 text-lg">
                  Plot no. 240, Sec - 38 Phase 1, HSIIDC, RAI, SONIPAT, HARYANA - 131029
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default ContactPage;