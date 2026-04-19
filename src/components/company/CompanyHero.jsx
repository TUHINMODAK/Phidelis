import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const CompanyHero = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    
    tl.from('.hero-bg', {
      scale: 1.05,
      duration: 1.5,
      ease: 'power2.out',
    }, 0);

    tl.from('.hero-text', {
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
    }, 0.2);
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      id="company-hero"
      className="relative w-full h-[50vh] min-h-[400px] md:min-h-[247px] md:h-[247px] flex items-center justify-center mt-[80px] overflow-hidden"
    >
      {/* Background Image Setup */}
      <div
        className="hero-bg absolute inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/homePage/heroImg.jpg')" }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 -z-10"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6">
        <h1 className="hero-text text-white font-['Inter'] font-semibold text-[48px] md:text-[64px] leading-tight mb-4 tracking-tight">
          Company
        </h1>
        <p className="hero-text text-white font-['Inter'] font-normal text-[18px] md:text-[20px] max-w-2xl leading-relaxed">
          Seasoned expertise, united by integrity.
        </p>
      </div>
    </section>
  );
};

export default CompanyHero;
