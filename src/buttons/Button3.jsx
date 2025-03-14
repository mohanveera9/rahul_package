import React from 'react';
import { ArrowRight } from "lucide-react";

const Button3 = ({ text }) => {
    return (
        <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-5 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-lg font-medium flex items-center space-x-2 md:space-x-3 shadow-lg transform hover:scale-105 transition-all">
            <span>{text}</span>
            <span className="bg-white text-purple-600 p-1 md:p-2 rounded-full flex items-center justify-center">
                <ArrowRight className="w-3 h-3 md:w-4 md:h-4" /> {/* Responsive Icon Size */}
            </span>
        </button>
    );
};

export default Button3;
