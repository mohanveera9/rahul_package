import Button1 from "../buttons/Button1.jsx";
const Phone = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 mr-3 text-pink-500 mt-0.5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

const Mail = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 mr-3 text-pink-500 mt-0.5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
)

const MapPin = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 mr-3 text-pink-500 mt-0.5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const Contact = () => {
  return (
    <section className="py-20 bg-white mx-8" id="contact">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-center md:text-left">Get in touch</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-center md:text-left">Send a message</h3>
                <p className="text-gray-600 mb-6 text-center md:text-left">
                  Have a question? Send us a message and we'll get back to you promptly!
                </p>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="E-mail"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Phone Number"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Message"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md min-h-[120px] focus:outline-none focus:ring-2 focus:ring-pink-500"
                    ></textarea>
                  </div>
                  <Button1 text="Send" />
                </form>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6  md:text-left sm:text-left">Contact Us</h3>
            <div className="space-y-4 text-center md:text-left">
              <div className="flex items-center  justify-center md:justify-start">
                <Phone />
                <p>+91 - 9811440664</p>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Mail />
                <p>rahul.oswal@yahoo.co.in, rahul_packs@rediffmail.com</p>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <MapPin />
                <p>Plot no. 240, Sec - 38 Phase 1, HSIIDC, RAI, SONIPAT, HARYANA - 131029</p>
              </div>
            </div>
            <div className="mt-8 h-[300px] bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <p className="font-medium">Map</p>
                <p className="text-sm text-gray-500">Interactive map would be displayed here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;