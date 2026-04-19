import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
// Optional: If there's a footer, we can import it, but 404 pages sometimes skip the footer or keep it minimal.
// I'll just include the Navbar to keep it functional, or just absolute centering.
// The design given is purely white background without navbar, but usually a 404 in Phidelis would have a navbar?
// Let's rely on the image: the image shows purely white background, centered text. I will provide just the centered text layout.

const NotFoundPage = () => {
  return (
    <div className="w-full h-screen bg-white flex flex-col items-center justify-center font-['Inter'] px-4">
      <h1 className="text-[80px] md:text-[120px] font-bold text-[#24346D] leading-none mb-4">
        404
      </h1>
      <p className="text-[#4B5563] text-[18px] md:text-[22px] mb-8 text-center">
        Sorry, we were unable to find that page
      </p>
      <Link 
        to="/" 
        className="group text-[16px] md:text-[18px] text-gray-600 hover:opacity-80 transition-opacity"
      >
        Back to <span className="text-[#8B3D88] font-semibold">Home</span>
      </Link>
    </div>
  );
};

export default NotFoundPage;
