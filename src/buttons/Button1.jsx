import React from 'react'

const Button1 = ({text}) => {
  return (
    <button className="border border-gray-300 px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text font-semibold bg-white cursor-default transition-all">
    {text}
  </button>
  )
}

export default Button1