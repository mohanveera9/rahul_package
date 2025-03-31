import React from 'react';
import Navbar from './Navbar';
import { Link } from "react-router-dom";

const ContactHeader = () => {
    return (
        <div className="relative bg-gradient-to-r from-pink-100 to-purple-200 rounded-xl">
            <Navbar />

            {/* Hero Section */}
            <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-20 pt-28 md:pt-32 pb-16 lg:py-32">
                {/* Text Content */}
                <div className="text-center md:text-left">
                    {/* Breadcrumb Navigation */}
                    <nav className="text-gray-700 text-sm mb-4">
                        <Link to="/" className="hover:text-purple-600">Home</Link> 
                        <span className="mx-2 text-gray-500">/</span>
                        <span className="text-gray-900 font-semibold">Contact</span>
                    </nav>

                    <h1 className="bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text text-3xl md:text-5xl font-bold ">
                        Get in Touch
                    </h1>
                    <p className="text-gray-700 mt-3 max-w-lg">
                        Have a question or inquiry? Our team is here to help you.
                    </p>

                </div>

                {/* Hero Image */}
                <div className="hidden md:block">
                </div>
            </div>
        </div>
    );
};

export default ContactHeader;
