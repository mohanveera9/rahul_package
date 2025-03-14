import Button1 from "../buttons/Button1.jsx";
import { FaQuoteLeft } from "react-icons/fa";
import Testimonial1 from "../Assests/testimonial1.jpg";

const Testimonials = () => {
  return (
    <div className="p-4 md:p-10 mx-2 md:mx-4 ">
      <section className="flex flex-col items-center justify-center py-12 px-4 bg-white">
        <div className="text-center">
          <Button1 text="Testimonials" />
          <div className="mt-3 text-2xl sm:text-3xl md:text-5xl font-semibold text-gray-800">
            Voices of Trust,
          </div>
          <div className="mt-2 text-2xl sm:text-3xl md:text-5xl font-semibold text-gray-800">
            success of <span className="text-purple-600">stories.</span>
          </div>
        </div>
        <div className="mt-8 flex flex-col lg:flex-row items-center gap-6 w-full max-w-6xl">
          <div className="relative w-full sm:w-80 md:w-96 h-64 sm:h-72 md:h-96 rounded-3xl overflow-hidden shadow-lg">
            <img
              src={Testimonial1}
              alt="Client"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 bg-gray-800 px-3 py-1 rounded-full text-white text-xs sm:text-sm">
              <span>Trusted Clients</span>
              <div className="flex -space-x-1 overflow-hidden">
                <img
                  className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-white"
                  src={Testimonial1}
                  alt=""
                />
                <img
                  className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-white"
                  src="https://source.unsplash.com/random/100x100/?person2"
                  alt=""
                />
                <img
                  className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-white"
                  src="https://source.unsplash.com/random/100x100/?person3"
                  alt=""
                />
              </div>
            </div>
          </div>
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
              Rahul Packaging has consistently exceeded our expectations with
              their high-quality packaging solutions and exceptional service.
              Their attention to detail and commitment to zero-defect printing
              have made them our trusted partner for years. Highly recommended!
            </div>
            <div className="flex items-center mt-4 mx-4 sm:mx-10 mb-8">
              <img
                src="https://source.unsplash.com/random/50x50/?woman,face"
                alt="Urvashi Bakliwal"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
              />
              <div className="ml-3">
                <p className="font-semibold text-gray-800 text-sm sm:text-base">
                  Urvashi Bakliwal
                </p>
                <p className="text-xs sm:text-sm text-gray-500">Agra, Uttar Pradesh</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;