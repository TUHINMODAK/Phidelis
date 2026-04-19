import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const TechnologyPowers = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // Title
      gsap.from(".tp-title", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      // Left Column
      gsap.from(".tp-left", {
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".tp-container",
          start: "top 80%",
        },
      });

      // Right Column
      gsap.from(".tp-right", {
        x: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".tp-container",
          start: "top 80%",
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="w-full bg-[#FDFDFE] py-24 px-6 md:px-[60px] lg:px-20 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto">
        <h2 className="tp-title text-[#24346D] font-['Inter'] font-medium text-[32px] md:text-[40px] lg:text-[40px] tracking-tight mb-12">
          Technology Powers Clarity and Control
        </h2>

        <div className="tp-container flex flex-col lg:flex-row gap-6 items-stretch lg:max-h-[430px]">
          {/* Left Column - Purple Box */}
          <div className="tp-left w-full lg:w-[38%] bg-[#762D85] rounded-[16px] p-8 md:p-10 flex flex-col justify-between shadow-md lg:min-h-[440px]">
            <div>
              <h3 className="text-white font-['Inter'] font-bold text-[22px] md:text-[24px] tracking-tight mb-6">
                Technology - Enabled
              </h3>
              <p className="text-white font-['Inter'] font-normal text-[16px] leading-[26px] opacity-90 w-full sm:max-w-[90%] lg:max-w-full">
                Continuous monitoring and analytics provide control, foresight,
                and measurable transparency.
              </p>
            </div>

            <button
              className="mt-12 self-start cursor-pointer bg-white text-[#24346D] rounded-[32px] px-8 py-3 font-['Inter'] font-medium text-[15px] hover:bg-gray-100 transition-colors shadow-sm"
              onClick={() => {
                navigate("/technology", {
                  state: { section: "technology-transparent" },
                });
              }}
            >
              Learn more
            </button>
          </div>

          {/* Right Column - Image */}
          <div className="tp-right w-full lg:w-[62%] rounded-[16px] overflow-hidden shadow-md aspect-video lg:aspect-auto lg:min-h-[440px]">
            <img
              src="/homePage/technologyPowerCalrity.jpg"
              alt="Technology Powers Clarity"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyPowers;
