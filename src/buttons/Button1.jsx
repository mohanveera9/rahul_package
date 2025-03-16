import React from 'react'

const Button1 = ({text}) => {
  return (
    <button className="lg:text-base text-sm border border-gray-300 px-3 py-1 md:px-6 md:py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text font-semibold bg-white cursor-default transition-all">
    {text}
  </button>
  )
}

export default Button1