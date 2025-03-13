import React from 'react'

const Button1 = ({text}) => {
  return (
    <button className="border border-gray-300 px-6 py-2 rounded-full text-purple-600 font-semibold bg-white hover:bg-purple-100 transition-all">
    {text}
  </button>
  )
}

export default Button1