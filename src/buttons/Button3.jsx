import React from 'react'
import {ArrowRight} from "lucide-react";


const Button3 = ({ text }) => {
    return (
        <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full text-lg font-medium flex items-center space-x-3 shadow-lg transform hover:scale-105 transition-all">
            <span>{text}</span>
            <span className="bg-white text-purple-600 p-1 rounded-full flex items-center justify-center">
                <ArrowRight className="w-4 h-4" /> {/* Adjust size if needed */}
            </span>
        </button>
    )
}

export default Button3