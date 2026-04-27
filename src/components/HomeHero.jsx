import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

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
      id="home-hero"
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
      <div className="hero-elem mb-[10px] w-full max-w-[850px] px-4 md:px-0">
        <img src="/navBar/logo3.svg" alt="Phidelis Capital" className="w-full h-auto max-h-[150px] object-contain" />
      </div>

      {/* Hero Content - Title and Subtitle with smaller gap */}
      <div className="flex flex-col items-center gap-[6px] px-2 w-full">
        <h1 className="hero-elem text-white font-['Inter'] font-medium text-[clamp(36px,8vw,64px)] leading-[1.1] md:leading-[66px] tracking-normal text-center w-full">
          Trusted Wealth Stewardship
        </h1>

        <p className="hero-elem text-white font-['Inter'] font-light text-[clamp(18px,4vw,32px)] leading-[1.3] md:leading-[66px] tracking-normal text-center w-full mt-2 md:mt-0">
          Built on Integrity and Insight
        </p>
      </div>

      {/* Get Started Button */}
      <div className="hero-elem mt-[24px]">
        <Link to="/solutions">
          <button className="flex items-center justify-center gap-[10px] px-[24px] py-[12px] bg-white text-[#24346D] rounded-[30px] font-['Inter'] font-normal text-[16px] leading-[100%] hover:bg-gray-100 transition-colors">
            Discover More
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HomeHero;
