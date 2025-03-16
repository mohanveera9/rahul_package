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

        {/* Contact Form Section */}
        <div className="container mx-auto py-16 px-4 lg:px-40">
          <div className="mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Send Us a Message
            </h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    First Name :
                  </label>
                  <input
                    id="first-name"
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
                  />
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Last Name :
                  </label>
                  <input
                    id="last-name"
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  placeholder="Your Message"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md min-h-[120px] focus:outline-none focus:ring-2 focus:ring-pink-600"
                  required
                ></textarea>
              </div>
              <button className="py-2 px-4 rounded-md text-white bg-black hover:opacity-90 transition">
                Submit Form
              </button>
            </form>
          </div>
        </div>

      {/* Contact Details at Bottom */}
{/* Contact Details at Bottom */}
{/* Contact Details at Bottom */}
{/* Contact Details Section */}
<div className="mt-12 text-center">
  {/* Heading */}
  <h3 className="text-3xl font-bold mb-6">Contact Us</h3>

  {/* Bordered Container */}
  <div className="border border-gray-400 rounded-xl p-8  mx-40">
    
    <div className="flex justify-between items-center">
      
      {/* Phone Section */}
      <div className="flex flex-col items-center flex-1 border-r-2 border-gray-300 p-6">
        <h4 className="text-2xl font-semibold mb-4 text-gray-800">Phone</h4>
        <div className="flex items-center">
          <LuPhone className="h-12 w-12 mr-4 text-pink-600" />
          <p className="text-gray-700 text-xl font-medium">+91 - 9811440664</p>
        </div>
      </div>

      {/* Email Section */}
      <div className="flex flex-col items-center flex-1 border-r-2 border-gray-300 p-6">
        <h4 className="text-2xl font-semibold mb-4 text-gray-800">Email</h4>
        <div className="flex items-center">
          <LuMail className="h-12 w-12 mr-4 text-pink-600" />
          <p className="text-gray-700 text-xl font-medium">rahul.oswal@yahoo.co.in</p>
        </div>
      </div>

      {/* Address Section */}
      <div className="flex flex-col items-center flex-1 p-6">
        <h4 className="text-2xl font-semibold mb-4 text-gray-800">Address</h4>
        <div className="flex items-center">
          <LuMapPin className="h-12 w-12 mr-4 text-pink-600" />
          <p className="text-gray-700 text-xl font-medium text-center max-w-xs">
            Plot no. 240, Sec - 38 Phase 1, HSIIDC, RAI, SONIPAT, HARYANA - 131029
          </p>
        </div>
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
