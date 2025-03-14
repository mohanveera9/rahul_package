import React from 'react';
import Quote1 from "../Assests/Quote/Quote1.png";
import Quote2 from "../Assests/Quote/Quote2.png";

const Quote = () => {
    return (
        <div className="bg-gradient-to-r from-pink-100 to-purple-200 mt-12 rounded-lg h-auto md:h-64 mx-4 md:mx-20 flex flex-col md:flex-row items-center justify-center relative overflow-hidden p-6 md:p-10">

            {/* Left Image - Adjusted to Corner with Border */}
            <img
                src={Quote1}
                alt="Packaging Products"
                className="hidden md:block absolute left-0 h-48 md:h-56 w-auto object-contain ml-[-40px] md:ml-[-10px] mb-[-0px] md:mb-[-160px]"
            />

            {/* Quote Text */}
            <div className="text-center z-10">
                <div className="text-2xl md:text-3xl font-semibold">
                    Let’s Start Packaging Your <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text">Success.</span>
                </div>
                <div className="pt-5">
                    <span className="relative px-6 py-3 rounded-full text-sm font-semibold bg-white inline-block shadow-lg">
                        <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text text-sm">
                            Request a Quote
                        </span>
                    </span>
                </div>
            </div>

            {/* Right Image - Adjusted to Corner with Border */}
            <img
                src={Quote2}
                alt="Blister Foil"
                className="hidden md:block absolute right-0 h-48 md:h-56 w-auto object-contain mr-[-40px] md:mr-[-10px] mb-[-40px] md:mb-[-30px] "
            />
        </div>
    );
};

export default Quote;
