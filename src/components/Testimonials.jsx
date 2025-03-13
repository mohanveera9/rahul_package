import Button1 from "../buttons/Button1.jsx";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className=" p-6 md:p-10 mx-4">
      <section className="flex flex-col items-center justify-center py-12 px-4 bg-white">
        <div className="text-center">
          <Button1 text="Testimonials" />
          <div className="mt-3 text-5xl font-semibold text-gray-800">
            Voices of Trust,
          </div>
          <div className="mt-3 text-5xl font-semibold text-gray-800">
            success of <span className="text-purple-600">stories.</span>
          </div>
        </div>
        <div className="mt-8 flex flex-col md:flex-row items-center gap-6">
          <div className="relative w-96 h-96 rounded-3xl overflow-hidden shadow-lg">
            <img
              src="https://source.unsplash.com/random/400x400/?woman,city"
              alt="Client"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-3 left-24 right-24  flex items-center space-x-2 bg-gray-800 px-3 py-1 rounded-full text-white text-sm">
              <span>Trusted Clients</span>
              <div className="flex -space-x-1 overflow-hidden">
                <img
                  className="w-6 h-6 rounded-full border-2 border-white"
                  src="https://source.unsplash.com/random/100x100/?person1"
                  alt=""
                />
                <img
                  className="w-6 h-6 rounded-full border-2 border-white"
                  src="https://source.unsplash.com/random/100x100/?person2"
                  alt=""
                />
                <img
                  className="w-6 h-6 rounded-full border-2 border-white"
                  src="https://source.unsplash.com/random/100x100/?person3"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="bg-purple-100 p-6 rounded-3xl shadow-lg w-full h-80 md:w-2/3">
            <div className="flex justify-between mx-10 mt-8">
              {" "}
              <div className="font-bold text-4xl">
                <FaQuoteLeft />
              </div>
              <div className="flex">
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <span key={i} className="text-yellow-500 text-xl">
                      ★
                    </span>
                  ))}
              </div>
            </div>
            <div className="font-semibold  text-lg mt-8 mx-10">
              Rahul Packaging has consistently exceeded our expectations with
              their high-quality packaging solutions and exceptional service.
              Their attention to detail and commitment to zero-defect printing
              have made them our trusted partner for years. Highly recommended!"
            </div>
            <div className="flex items-center mt-4 mx-10">
              <img
                src="https://source.unsplash.com/random/50x50/?woman,face"
                alt="Urvashi Bakliwal"
                className="w-10 h-10 rounded-full"
              />
              <div className="ml-3">
                <p className="font-semibold text-gray-800">Urvashi Bakliwal</p>
                <p className="text-sm text-gray-500">Agra, Uttar Pradesh</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
