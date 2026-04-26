import React, { useRef, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

let hasAnimated = false;

const Navbar = () => {
  const location = useLocation();
  const isCompanyPage = location.pathname === "/company";
  const isTechnologyPage = location.pathname === "/technology";
  const isSolutionsPage = location.pathname === "/solutions";
  const navRef = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "";
    }
    return () => {
      document.body.style.overflowY = "";
    };
  }, [isMobileMenuOpen]);

  useGSAP(() => {
    if (!hasAnimated) {
      gsap.from(navRef.current, {
        y: -80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
      hasAnimated = true;
    }
  }, []);

  const scrollToContact = (e) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  };

  return (
    <>
      <nav
        ref={navRef}
        className="w-full h-[80px] bg-[#24346D] px-[30px] fixed top-0 left-0 right-0 z-[110] flex items-center justify-between"
      >
        {/* Logo Section */}
        <Link
          to="/"
          onClick={() => setIsMobileMenuOpen(false)}
          className="flex items-center cursor-pointer relative z-[120]"
        >
          <img
            src="/navBar/logo3.svg"
            alt="Phidelis Capital"
            className="w-[151px] h-[50px] object-contain"
          />
        </Link>

        {/* Navigation Links - Centered using absolute positioning */}
        <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
          <ul className="flex items-center gap-[40px]">
            <li>
              <Link
                to="/solutions"
                className={`${isSolutionsPage ? "text-gray-300" : "text-white"} font-['Inter'] font-normal text-[16px] leading-[100%] hover:text-gray-300 transition-colors`}
              >
                Solutions
              </Link>
            </li>
            <li>
              <Link
                to="/company"
                className={`${isCompanyPage ? "text-gray-300" : "text-white"} font-['Inter'] font-normal text-[16px] leading-[100%] hover:text-gray-300 transition-colors`}
              >
                Company
              </Link>
            </li>
            <li>
              <Link
                to="/technology"
                className={`${isTechnologyPage ? "text-gray-300" : "text-white"} font-['Inter'] font-normal text-[16px] leading-[100%] hover:text-gray-300 transition-colors`}
              >
                Technology
              </Link>
            </li>
          </ul>
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex gap-8">
          <a
            href="https://www.linkedin.com/company/phidelis-capital-pte-ltd/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center"
          >
            <img src="/icons/linkedin.svg" alt="Linkedin" />
          </a>
          <button 
            onClick={scrollToContact}
            className="w-[151px] h-[43px] text-white border border-white rounded-[40px] flex items-center justify-center font-['Inter'] font-normal text-[16px] leading-[100%] hover:bg-white hover:text-[#24346D] transition-colors"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Hamburger - animated lines */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden relative z-[120] w-8 h-8 flex flex-col justify-center items-center gap-1.5 focus:outline-none cursor-pointer"
          aria-label="Toggle menu"
        >
          <div
            className={`w-6 h-[2px] bg-white rounded transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-[8px]" : ""}`}
          ></div>
          <div
            className={`w-6 h-[2px] bg-white rounded transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}
          ></div>
          <div
            className={`w-6 h-[2px] bg-white rounded transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-[8px]" : ""}`}
          ></div>
        </button>
      </nav>

      {/* Mobile Menu Full Screen Overlay - OUTSIDE the nav */}
      <div
        className={`fixed inset-0 bg-[#24346D] z-[105] flex flex-col justify-start px-[36px] pt-[140px] transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] md:hidden ${isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"}`}
      >
        <ul className="flex flex-col items-start gap-10">
          <li>
            <Link
              to="/solutions"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`${isSolutionsPage ? "text-gray-300" : "text-white"} font-['Inter'] font-normal text-[18px] hover:text-gray-300 transition-colors`}
            >
              Solutions
            </Link>
          </li>
          <li>
            <Link
              to="/company"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`${isCompanyPage ? "text-gray-300" : "text-white"} font-['Inter'] font-normal text-[18px] hover:text-gray-300 transition-colors`}
            >
              Company
            </Link>
          </li>
          <li>
            <Link
              to="/technology"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`${isTechnologyPage ? "text-gray-300" : "text-white"} font-['Inter'] font-normal text-[18px] hover:text-gray-300 transition-colors`}
            >
              Technology
            </Link>
          </li>
        </ul>

        <div className="mt-12 flex gap-8">
          <button 
            onClick={scrollToContact}
            className="w-[140px] h-[45px] text-white border border-white rounded-[40px] flex items-center justify-center font-['Inter'] font-normal text-[16px] hover:bg-white hover:text-[#24346D] transition-colors"
          >
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
