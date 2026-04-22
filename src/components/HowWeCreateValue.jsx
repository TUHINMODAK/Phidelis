import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Navigate, useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const HowWeCreateValue = () => {
  const containerRef = useRef(null);
  const navigate = useNavigate();

  useGSAP(
    () => {
      // Title animation
      gsap.from(".hcv-title", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
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
        },
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
        },
      });
    },
    { scope: containerRef },
  );

  const cards = [
    {
      title: "Solutions",
      description: "Tailored strategies for every objective.",
      icon: "/icons/Isolation_Mode.jpg", // Replace with your concentric circles icon path
      link: "/solutions"
    },
    {
      title: "Company",
      description: "Seasoned expertise, united by integrity.",
      icon: "/icons/Vector.jpg", // Replace with your diamond icon path
      link: "/company"
    },{
      title: "Technology",
      description: "Clarity and control through intelligent tools.",
      icon: "/icons/Layer_1.jpg", // Replace with your circles icon path
      link: "/technology"
    },
  ];

  return (
    <section id="how-we-create-value" ref={containerRef} className="w-full flex flex-col-reverse lg:flex-row justify-between overflow-hidden">
      <div className="w-full bg-white py-10 lg:py-20 px-6 md:px-20 overflow-hidden">
        <div className="max-w-[1440px] mx-auto">
          {/* Section Title */}
          <h2 className="hcv-title text-[#24346D] font-['Inter'] font-medium text-[clamp(32px,5vw,40px)] mb-16">
            How We Create Value
          </h2>

          <div className="flex flex-col lg:flex-row gap-10 items-stretch">
            {/* Left Side: Cards Container */}
            <div className="hcv-cards-container flex-1 grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-6 md:gap-y-16 items-start content-start">
              {cards.map((card, idx) => (
                <div
                  key={idx}
                  className="hcv-card flex flex-col items-start md:max-w-[260px] h-full"
                >
                  {/* Icon Container */}
                  <div className="h-16 flex items-center mb-4 md:mb-8">
                    <img
                      src={card.icon}
                      alt={card.title}
                      className="w-14 h-14 object-contain"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-[#24346D] font-['Inter'] font-bold text-2xl mb-4 md:mb-6">
                    {card.title}
                  </h3>

                  {/* Description + Arrow row on mobile, stacked on desktop */}
                  <div className="flex items-center justify-between w-full md:flex-col md:items-start md:gap-8 md:flex-grow">
                    <p className="text-[#24346D] font-['Inter'] font-normal text-base leading-relaxed opacity-70 flex-1 pr-4 md:pr-0">
                      {card.description}
                    </p>
                    <button
                      className="w-9 h-9 bg-[#1E2B58] rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-900 transition-all group shrink-0 md:mt-auto"
                      aria-label={`Learn more about ${card.title}`}
                      onClick={() => {
                        navigate(`${card.link}`);
                      }}
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Right Side: Large Feature Image */}
      <div className="hcv-image-container w-auto lg:w-[30%] h-[250px] md:h-[350px] lg:h-auto mx-6 mt-10 mb-4 lg:m-0 rounded-2xl lg:rounded-none shadow-xl lg:shadow-none overflow-hidden shrink-0 relative z-0">
        <img
          src="/homePage/howWeCreateValueImg.jpg"
          alt="Singapore Skyline"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default HowWeCreateValue;
