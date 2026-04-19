import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const strategies = [
  {
    title: 'Equity\nStrategies',
    desc: 'Capturing growth opportunities across global developed and emerging markets.'
  },
  {
    title: 'Fixed Income\nStrategies',
    desc: 'Providing stability, diversification, and steady income streams.'
  },
  {
    title: 'Alternative\nStrategies',
    desc: 'Enhancing portfolio diversification through alternative assets.'
  }
];

const SolutionsAssetManagement = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from('.asset-header', {
      scrollTrigger: {
        trigger: '.asset-header',
        start: 'top 85%',
      },
      y: 30,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    });

    gsap.from('.asset-card', {
      scrollTrigger: {
        trigger: '.asset-grid',
        start: 'top 80%',
      },
      y: 40,
      scale: 0.95,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power2.out',
    });
  }, { scope: containerRef });

  return (
    <section id="solutions-asset-management" ref={containerRef} className="w-full flex flex-col-reverse lg:flex-row justify-between overflow-hidden bg-[#24346D]">
      <div className="w-full py-10 lg:py-20 px-6 md:px-20 overflow-hidden pb-32">

        {/* Header Section */}
        <div className="asset-header mb-14">
          <h2 className="text-white font-['Inter'] font-semibold text-[32px] md:text-[40px] leading-tight mb-6 tracking-tight">
            Asset Management That Delivers Disciplined Performance
          </h2>
          <p className="text-white font-['Inter'] font-medium text-[16px] md:text-[18px] leading-[1.6] max-w-4xl">
            Phidelis Capital applies a disciplined, research-driven approach to bespoke family office asset management — building portfolios with prudence, resilience, and long-term value creation.
          </p>
        </div>

        {/* 4-Column Grid Section */}
        <div className="asset-grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">

          {/* 3 Strategy Cards */}
          {strategies.map((strategy, idx) => (
            <div key={idx} className="asset-card h-full">
              <div
                className="bg-[#F8F9FA] rounded-[16px] p-8 md:p-10 flex flex-col justify-start shadow-md hover:-translate-y-1 transition-transform duration-300 h-full"
              >
                <h3 className="text-[#1A2552] font-['Inter'] font-semibold text-[22px] md:text-[24px] leading-[1.3] mb-6 tracking-tight whitespace-pre-line">
                  {strategy.title}
                </h3>
                <p className="text-[#3b4b8f] font-['Inter'] font-medium text-[15px] leading-[1.6]">
                  {strategy.desc}
                </p>
              </div>
            </div>
          ))}

          {/* 4th Column Image */}
          <div className="asset-card h-full">
            <div className="rounded-[16px] overflow-hidden max-h-[250px] xl:min-h-full shadow-md bg-white h-full relative">
              <img
                src="/solutions/solutionsassetmanagement.jpg"
                alt="Singapore Cityscape"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default SolutionsAssetManagement;
