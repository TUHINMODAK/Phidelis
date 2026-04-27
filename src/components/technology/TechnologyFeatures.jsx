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
    <section
      id="technology-features"
      ref={containerRef}
      className="w-full bg-[#24346D]"
    >
      <div className="max-w-[1440px] h-[857px] pt-[100px] px-[81px] mx-auto">

        <h2 className="tech-header text-white text-[50px] font-semibold leading-[1.2] mb-[40px]">
          Technology Powers Clarity and Control
        </h2>

        <div className="tech-container flex gap-[50px] items-start">

          {/* IMAGE */}
          <div className="tech-card w-[444px] h-[531px] rounded-[8px] overflow-hidden flex-shrink-0">
            <img
              src="/technology/technologypowers.jpg"
              alt="Technology clarity"
              className="w-full h-full object-cover"
            />
          </div>

          {/* CARDS */}
          <div className="grid grid-cols-2 gap-[34px] content-start">

            {techFeatures.map((feature, idx) => (
              <div key={idx} className="tech-card w-[383px] h-[238px] flex-shrink-0">
                
                <div className="bg-[#F9F9F9] rounded-[8px] p-[30px] h-full flex flex-col gap-[14px]">

                  {/* TITLE */}
                  <h3 className="text-[#24346D] font-semibold text-[26px] leading-[32px]">
                    {feature.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-[#1a285b] text-[18px] leading-[30px] opacity-90">
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