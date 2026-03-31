import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const HomeHero = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Add polished entrance animation for elements
    gsap.from('.hero-elem', {
      y: 50,
      opacity: 0,
      duration: 1.2,
      stagger: 0.15,
      ease: 'power3.out',
    });
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-[800px] flex flex-col items-center justify-center px-6 gap-[24px]"
    >
      {/* Background Image Setup */}
      <div 
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage: "url('/homePage/heroImg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      />
      
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/60 -z-10" />

      {/* Logo in Hero Section */}
      <div className="hero-elem mb-[10px]">
        <img src="/navBar/logo3.svg" alt="Phidelis Capital" className="w-[850px] h-[150px] object-contain" />
      </div>

      {/* Hero Content - Title and Subtitle with smaller gap */}
      <div className="flex flex-col items-center gap-[6px]">
        <h1 className="hero-elem text-white font-['Inter'] font-medium text-[64px] leading-[66px] tracking-normal text-center w-full">
          Trusted Wealth Stewardship
        </h1>
        
        <p className="hero-elem text-white font-['Inter'] font-light text-[32px] leading-[66px] tracking-normal text-center w-full">
          Built on Integrity and Insight
        </p>
      </div>

      {/* Get Started Button */}
      <div className="hero-elem mt-[24px]">
        <button className="flex items-center justify-center gap-[10px] w-[137px] h-[43px] px-[24px] py-[12px] bg-white text-[#24346D] rounded-[30px] font-['Inter'] font-normal text-[16px] leading-[100%] hover:bg-gray-100 transition-colors">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HomeHero;
