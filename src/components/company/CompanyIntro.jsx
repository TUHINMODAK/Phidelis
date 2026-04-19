import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const CompanyIntro = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from('.intro-left', {
      scrollTrigger: {
        trigger: '.intro-left',
        start: 'top 85%',
      },
      x: -50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    });

    gsap.from('.intro-right', {
      scrollTrigger: {
        trigger: '.intro-right',
        start: 'top 85%',
      },
      x: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    });
  }, { scope: containerRef });

  return (
    <section id="company-intro" ref={containerRef} className="w-full flex flex-col-reverse lg:flex-row justify-between overflow-hidden">
      <div className="w-full bg-white py-10 lg:py-20 px-6 md:px-20 flex flex-col md:flex-row rounded-[16px] shadow-sm overflow-hidden">
        
        {/* Left Side - Gradient and Text */}
        <div className="intro-left w-full md:w-[45%] lg:w-[42%] bg-[url('/common/gradient-Bg.png')] bg-cover bg-center p-10 md:p-14 lg:p-[72px] flex flex-col justify-center md:rounded-l-[16px]">
          <h2 className="text-white font-['Inter'] font-semibold text-[22px] md:text-[26px] lg:text-[28px] leading-[1.4] tracking-tight mb-8">
            At Phidelis Capital, every decision is crafted towards your objectives.
          </h2>
          <p className="text-white font-['Inter'] font-medium text-[16px] md:text-[18px] lg:text-[19px] leading-[1.5] tracking-tight">
            Guided by research-led insights and technology-supported intelligence, delivered with clarity and purpose.
          </p>
        </div>
        
        {/* Right Side - Image */}
        <div 
          className="intro-right w-full md:w-[55%] lg:w-[58%] min-h-[350px] md:min-h-[480px] bg-cover bg-center md:rounded-r-[16px]"
          style={{ backgroundImage: "url('/company/intro-image.jpg')" }}
        >
        </div>
        
      </div>
    </section>
  );
};

export default CompanyIntro;