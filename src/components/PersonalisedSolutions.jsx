import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const PersonalisedSolutions = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Title animation
    gsap.from(".ps-title", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      }
    });

    // Left Side Image animation
    gsap.from(".ps-image", {
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".ps-image",
        start: "top 80%",
      }
    });

    // Right Side content
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".ps-content-wrapper",
        start: "top 80%",
      }
    });

    tl.from(".ps-text", {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out",
    })
    .from(".ps-card", {
      y: 40,
      opacity: 0,
      duration: 0.6,
      stagger: 0.2,
      ease: "power3.out",
    }, "-=0.2")
    .from(".ps-button", {
      y: 20,
      opacity: 0,
      duration: 0.5,
      ease: "power3.out",
    }, "-=0.2");

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full py-20 px-6 md:px-20 overflow-hidden">
      {/* Complex Background Gradient */}
      <div className="absolute inset-0 bg-[#24346D] -z-20"></div>
      
      {/* Top Right Magenta Glow */}
      <div className="absolute top-[-20%] right-[-30%] w-[60%] h-[80%] bg-[#9818b2] blur-[150px] rounded-full pointer-events-none -z-10 opacity-70"></div>
      
      <div className="absolute top-[-20%] left-[-30%] w-[60%] h-[80%] bg-black blur-[150px] rounded-full pointer-events-none -z-10 opacity-70"></div>
      {/* Bottom Left Blue Glow */}
      <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[70%] bg-[#408fcb] blur-[140px] rounded-full pointer-events-none -z-10 opacity-80"></div>
      
      {/* Bottom Right Cyan/Teal Glow */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[50%] bg-[#ffffff] blur-[120px] rounded-full pointer-events-none -z-10 opacity-50"></div>

      <div className="max-w-[1440px] mx-auto z-10 relative">
        <h2 className="ps-title text-white font-['Inter'] font-medium text-[36px] md:text-[40px] leading-[66px] tracking-normal mb-12">
          Personalised Solutions
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 items-stretch">
          {/* Left Column - Image */}
          <div className="ps-image w-full lg:w-[45%] h-[350px] lg:h-auto rounded-[16px] overflow-hidden flex-shrink-0 shadow-lg">
            <img 
              src="/homePage/presonalisedSolutions.jpg" 
              alt="Personalised Solutions" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Column - Text and Cards */}
          <div className="ps-content-wrapper w-full lg:w-[55%] flex flex-col justify-center h-full pt-2">
            <p className="ps-text text-white font-['Inter'] font-semibold text-[20px] md:text-[24px] leading-[34px] mb-10 w-full lg:w-[95%]">
              Solutions designed for you, and asset management that delivers disciplined performance.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {/* Card 1 */}
              <div className="ps-card bg-[#FCFCFC] rounded-[12px] p-8 shadow-md">
                <h3 className="text-[#24346D] font-['Inter'] font-bold text-[20px] mb-4">
                  Wealth Solutions
                </h3>
                <p className="text-[#24346D] font-['Inter'] font-normal text-[15px] leading-[24px] opacity-80">
                  Independent discretionary and advisory portfolio solutions, aligned to client goals across every market cycle.
                </p>
              </div>

              {/* Card 2 */}
              <div className="ps-card bg-[#FCFCFC] rounded-[12px] p-8 shadow-md">
                <h3 className="text-[#24346D] font-['Inter'] font-bold text-[20px] mb-4">
                  Asset Management
                </h3>
                <p className="text-[#24346D] font-['Inter'] font-normal text-[15px] leading-[24px] opacity-80">
                  Research-led discretionary and allocation strategies with portfolio-as-a-service flexibility.
                </p>
              </div>
            </div>

            <button className="ps-button self-start bg-[#8B3A8B] text-white rounded-[32px] px-8 py-3 font-['Inter'] font-normal text-[16px] hover:bg-[#722A72] transition-colors shadow-md">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalisedSolutions;
