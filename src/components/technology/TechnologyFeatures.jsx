import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const techFeatures = [
  {
    title: 'Portfolio Analytics & Optimisation',
    desc: 'Real-time insights that keep portfolios aligned to client objectives.'
  },
  {
    title: 'Aggregation & Consolidation',
    desc: 'A unified view of assets across custodians, geographies, and structures.'
  },
  {
    title: 'Risk Analytics',
    desc: 'Robust monitoring to identify and manage risks across market cycles.'
  },
  {
    title: 'Operational Efficiency',
    desc: 'Technology-driven oversight that enhances accuracy, responsiveness, and scalability.'
  }
];

const TechnologyFeatures = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from('.tech-header', {
      scrollTrigger: {
        trigger: '.tech-header',
        start: 'top 85%',
      },
      y: 30,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    });

    gsap.from('.tech-card', {
      scrollTrigger: {
        trigger: '.tech-container',
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
    <section id="technology-features" ref={containerRef} className="w-full flex flex-col-reverse lg:flex-row justify-between overflow-hidden bg-[#1e2a5e]">
      <div className="w-full py-10 lg:py-20 px-6 md:px-20 overflow-hidden">

        {/* Title */}
        <h2 className="tech-header text-white font-['Inter'] font-semibold text-[32px] md:text-[40px] leading-tight mb-12 tracking-tight">
          Technology Powers Clarity and Control
        </h2>

        {/* Content Layout */}
        <div className="tech-container flex flex-col lg:flex-row gap-8 items-stretch">

          {/* Left Column - Image */}
          <div className="tech-card w-full lg:w-[35%] rounded-[12px] overflow-hidden shadow-sm min-h-[200px] lg:min-h-0">
            <img
              src="/technology/technologypowers.jpg"
              alt="Technology clarity"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Column - Grid of Cards */}
          <div className="w-full lg:w-[65%] grid grid-cols-1 md:grid-cols-2 gap-6">
            {techFeatures.map((feature, idx) => (
              <div key={idx} className="tech-card h-full flex flex-col">
                <div
                  className="bg-white rounded-[12px] p-6 md:p-8 flex flex-col shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 grow"
                >
                  <h3 className="text-[#1A2552] font-['Inter'] font-semibold text-[18px] md:text-[20px] leading-[1.3] mb-4 tracking-tight pr-2">
                    {feature.title}
                  </h3>
                  <p className="text-[#3b4b8f] font-['Inter'] font-medium text-[15px] leading-[1.5]">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default TechnologyFeatures;
