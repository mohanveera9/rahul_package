import React from 'react';
import Navbar from './Navbar';
import { Link } from "react-router-dom";

const ProductHeader = () => {
    return (
        <div className="relative bg-gradient-to-r from-pink-100 to-purple-200 rounded-xl mb-10">
            <Navbar />

            {/* Hero Section */}
            <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-20 pt-28 md:pt-32 pb-16 lg:py-32">
                
                {/* Text Content */}
                <div className="text-center md:text-left">
                    {/* Breadcrumb Navigation */}
                    <nav className="text-gray-700 text-sm mb-4">
                        <Link to="/" className="hover:text-purple-600">Home</Link> 
                        <span className="mx-2 text-gray-500">/</span>
                        <span className="text-gray-900 font-semibold">Products</span>
                    </nav>

                    <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
                        Our Products
                    </h1>
                    <p className="text-gray-700 mt-3 max-w-lg">
                        Explore our premium range of <span className='font-semibold'>high-quality packaging solutions</span>, designed to 
                        meet the demands of various industries, from <span className='font-semibold'>pharmaceuticals</span> to <span className='font-semibold'>food packaging</span>.
                    </p>
                </div>

                {/* Hero Image (Optional - Add an Image if needed) */}
                <div className="hidden md:block">
                    {/* <img src={YourProductImageHere} alt="Our Products" className="max-w-md" /> */}
                </div>
            </div>
        </div>
    );
};

export default ProductHeader;
