import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const SeasonedExperts = () => {
  const containerRef = useRef(null);
  
  const teamMembers = [
    '/people/p1.png',
    '/people/p2.png',
    '/people/p3.png',
    '/people/p4.png',
    '/people/p5.png',
    '/people/p6.png',
  ];

  useGSAP(() => {
    // Title
    gsap.from(".se-title", {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      }
    });

    // Avatars grid staggering
    gsap.from(".se-avatar", {
      scale: 0.8,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out", // Removed back.out to keep it professional and consistent
      scrollTrigger: {
        trigger: ".se-avatars-grid",
        start: "top 80%",
      }
    });

    // Text block sequence
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".se-text-block",
        start: "top 80%",
      }
    });

    tl.from(".se-line", {
      width: 0,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    })
    .from(".se-desc", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    }, "-=0.4")
    .from(".se-btn", {
      y: 20,
      opacity: 0,
      duration: 0.5,
      ease: "power3.out",
    }, "-=0.4");
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full bg-[#2A3A6A] py-24 px-6 md:px-[20px] lg:px-20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="se-title text-white font-['Inter'] font-medium text-[36px] md:text-[42px] lg:text-[40px] tracking-normal mb-16 lg:mb-20">
          Seasoned Experts, Trusted Advisors
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* Left Column - Team Avatars */}
          <div className="w-full lg:w-1/2">
            <div className="se-avatars-grid grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12 max-w-[500px]">
              {teamMembers.map((img, idx) => (
                <div key={idx} className="se-avatar flex justify-center">
                  <div className="w-[110px] h-[110px] md:w-[135px] md:h-[135px] rounded-full bg-white overflow-hidden shadow-sm flex items-center justify-center">
                    <img 
                      src={img} 
                      alt={`Team Member ${idx + 1}`} 
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Text Block */}
          <div className="se-text-block w-full lg:w-1/2 flex flex-col justify-center pt-2 lg:pt-6">
            <div className="se-line w-full h-px bg-white/30 mb-10 origin-left"></div>
            <p className="se-desc text-white font-['Inter'] font-semibold text-[20px] md:text-[22px] lg:text-[24px] leading-[36px] tracking-normal mb-12 max-w-[600px]">
              With decades of experience in private banking, investments, and wealth stewardship, we are a team united by integrity, diligence, and proven global expertise.
            </p>
            <button className="se-btn self-start bg-white text-[#2A3A6A] rounded-[32px] px-8 py-3 font-['Inter'] font-medium text-[16px] hover:bg-gray-100 transition-colors shadow-sm">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeasonedExperts;
