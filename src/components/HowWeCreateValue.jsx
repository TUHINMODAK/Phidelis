import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const HowWeCreateValue = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Title animation
    gsap.from(".hcv-title", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      }
    });

    // Cards animation
    gsap.from(".hcv-card", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".hcv-cards-container",
        start: "top 75%",
      }
    });

    // Right Side Feature Image animation
    gsap.from(".hcv-image-container", {
      opacity: 0,
      scale: 0.9,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".hcv-image-container",
        start: "top 80%",
      }
    });
  }, { scope: containerRef });

  const cards = [
    {
      title: 'Solutions',
      description: 'Tailored strategies for every objective.',
      icon: '/icons/Vector.jpg' // Replace with your diamond icon path
    },
    {
      title: 'Company',
      description: 'Seasoned expertise, united by integrity.',
      icon: '/icons/Layer_1.jpg' // Replace with your circles icon path
    },
    {
      title: 'Technology',
      description: 'Clarity and control through intelligent tools.',
      icon: '/icons/Isolation_Mode.jpg' // Replace with your concentric circles icon path
    }
  ];

  return (
    <section ref={containerRef} className="w-full bg-white py-20 px-6 md:px-20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">

        {/* Section Title */}
        <h2 className="hcv-title text-[#24346D] font-['Inter'] font-medium text-[40px] mb-16">
          How We Create Value
        </h2>

        <div className="flex flex-col lg:flex-row gap-10 items-stretch">

          {/* Left Side: Cards Container linearly */}
          <div className="hcv-cards-container flex-1 grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16 items-start content-start">
            {cards.map((card, idx) => (
              <div key={idx} className="hcv-card flex flex-col items-start max-w-[260px] h-full">
                {/* Icon Container */}
                <div className="h-16 flex items-center mb-8">
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="w-14 h-14 object-contain"
                  />
                </div>

                {/* Text Content */}
                <h3 className="text-[#24346D] font-['Inter'] font-bold text-2xl mb-6">
                  {card.title}
                </h3>
                <p className="text-[#24346D] font-['Inter'] font-normal text-base leading-relaxed opacity-70 mb-8 flex-grow">
                  {card.description}
                </p>

                {/* Action Button */}
                <button
                  className="mt-auto w-9 h-9 bg-[#1E2B58] rounded-full flex items-center justify-center hover:bg-blue-900 transition-all group shrink-0"
                  aria-label={`Learn more about ${card.title}`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  >
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          {/* Right Side: Large Feature Image with specific dimensions */}
          <div className="hcv-image-container w-[280px] h-[300px] rounded-[12px] overflow-hidden flex flex-col justify-between py-[48px] px-[10px] shrink-0 relative z-0">
            <img
              src="/homePage/hoeWeCreateValueImg.jpg"
              alt="Singapore Skyline"
              // Removed -z-10
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowWeCreateValue;