import React, { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Navbar = () => {
  const location = useLocation();
  const isCompanyPage = location.pathname === '/company';
  const isTechnologyPage = location.pathname === '/technology';
  const isSolutionsPage = location.pathname === '/solutions';
  const navRef = useRef(null);

  useGSAP(() => {
    gsap.from(navRef.current, {
      y: -80,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    });
  }, []);

  return (
    <nav 
      ref={navRef}
      className="w-full h-[80px] bg-[#24346D] px-[36px] fixed top-0 left-0 right-0 z-50 flex items-center justify-between"
    >
      {/* Logo Section */}
      <Link to="/" className="flex items-center cursor-pointer">
        <img src="/navBar/logo3.svg" alt="Phidelis Capital" className="w-[151px] h-[50px] object-contain" />
      </Link>
      
      {/* Navigation Links - Centered using absolute positioning */}
      <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
        <ul className="flex items-center gap-[40px]">
          <li>
            <Link 
              to="/solutions" 
              className={`${isSolutionsPage ? 'text-gray-300' : 'text-white'} font-['Inter'] font-normal text-[16px] leading-[100%] hover:text-gray-300 transition-colors`}
            >
              Solutions
            </Link>
          </li>
          <li>
            <Link 
              to="/company" 
              className={`${isCompanyPage ? 'text-gray-300' : 'text-white'} font-['Inter'] font-normal text-[16px] leading-[100%] hover:text-gray-300 transition-colors`}
            >
              Company
            </Link>
          </li>
          <li>
            <Link 
              to="/technology" 
              className={`${isTechnologyPage ? 'text-gray-300' : 'text-white'} font-['Inter'] font-normal text-[16px] leading-[100%] hover:text-gray-300 transition-colors`}
            >
              Technology
            </Link>
          </li>
        </ul>
      </div>
      
      {/* CTA Button */}
      <div className="hidden md:block">
        <button className="w-[151px] h-[43px] text-white border border-white rounded-[40px] flex items-center justify-center font-['Inter'] font-normal text-[16px] leading-[100%] hover:bg-white hover:text-[#24346D] transition-colors">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
