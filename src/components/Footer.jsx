import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full py-20 px-6 md:px-[60px] lg:px-[120px] bg-[url('/common/gradient-Bg.png')] bg-cover bg-center">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:grid lg:grid-cols-[9fr_3fr_1fr] gap-12 text-white font-['Inter']">
        {/* Logo Column */}
        <div className="flex flex-col justify-between h-full">
          <div className="flex items-center gap-3 w-full max-w-[850px]">
            <img
              src="/navBar/logo3.svg"   
              alt="Phidelis Capital"
              className="h-[60px] md:h-[70px] lg:h-[80px] w-auto object-contain"
            />
          </div>

          <div className="font-normal text-[13px] opacity-70 mt-12 md:mt-0 pb-1">
            © Phidelis Capital Singapore
          </div>
        </div>

        {/* Links Column */}
        <div className="flex flex-col justify-start">
          <ul className="flex flex-col gap-[16px] font-medium text-[14px] opacity-90">
            <li>
              <Link
                to="/solutions"
                className="hover:text-gray-300 transition-colors"
              >
                Solutions
              </Link>
            </li>
            <li>
              <Link
                to="/technology"
                className="hover:text-gray-300 transition-colors"
              >
                Technology
              </Link>
            </li>
            <li>
              <Link
                to="/company"
                className="hover:text-gray-300 transition-colors"
              >
                Company
              </Link>
            </li>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=management@phideliscapital.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              Contact
            </a>
          </ul>
        </div>

        {/* Copyright and Arrow Column */}
        <div className="flex flex-row lg:flex-col justify-between items-center lg:items-end md:w-1/4 shrink-0">
          <button
            onClick={scrollToTop}
            className="w-[48px] h-[48px] rounded-full bg-[#8B3A8B] flex items-center justify-center hover:bg-[#722A72] transition-colors shadow-sm"
            aria-label="Scroll to top"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-[20px] h-[20px] text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
              />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
