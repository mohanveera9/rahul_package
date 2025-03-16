import React from 'react'

const Button2 = ({text}) => {
  return (
    <button className="mt-4 bg-gradient-to-r from-pink-500 to-purple-600 md:text-base text-sm  text-white px-3 py-1 md:px-6 md:py-2 rounded-full hover:scale-105 duration-300">
        {text}
        </button>
  )
}

export default Button2