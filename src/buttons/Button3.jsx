import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Button3 = ({ text, to }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <button
      onClick={handleClick}
      className="bg-gradient-to-r from-[#D3A376] to-[#8C6E63] text-white px-5 py-2 md:px-6 md:py-2 rounded-full text-sm md:text-lg font-medium flex items-center space-x-2 md:space-x-3 shadow-lg transform hover:scale-105 transition-all"
    >
      <span>{text}</span>
      <span className="bg-white text-[#8C6E63] p-1 md:p-2 rounded-full flex items-center justify-center">
        <ArrowRight className="w-3 h-3 md:w-4 md:h-4 " /> {/* Responsive Icon Size */}
      </span>
    </button>
  );
};

export default Button3;
