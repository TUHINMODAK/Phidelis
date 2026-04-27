import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const DailyMarketInsight = () => {
  const containerRef = useRef(null);

  const teamMembers = ["/people/p1.png", "/people/p2.png", "/people/p3.png"];

  useGSAP(
    () => {
      // Title
      gsap.from(".daily-title", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
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
        },
      });

      // phone
      gsap.from(".daily-phone", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 50%",
        },
      });

      // Text block sequence
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".daily-text-block",
          start: "top 80%",
        },
      }); 

      tl.from(
          ".daily-desc",
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          }
        )
        .from(
          ".daily-btn",
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.4"
        );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      id="daily-market-insight"
      className="w-full bg-[#2A3A6A] py-24 px-6 md:px-[20px] lg:px-20 overflow-hidden"
    >
      <div className="relative max-w-[100%] mx-auto bg-[#2A4781] rounded-3xl p-8 md:p-16 lg:p-20 grid grid-cols-1 lg:grid-cols-2 gap-8 daily-text-block overflow-visible">
        <div className="flex flex-col items-start bg-transparent relative z-10 w-full mb-10 lg:mb-0">
          <div className="daily-title text-white font-['Inter'] font-medium text-[clamp(28px,5vw,40px)] tracking-normal mb-6 lg:mb-10">
            Daily Market Insights, Delivered
          </div>
          <div className="daily-desc text-white font-['Inter'] font-normal text-[15px] md:text-[16px] leading-[28px] opacity-90 max-w-[540px] mb-8 md:mb-12">
            Stay ahead with Phidelis Capital's daily reports on markets, trends,
            and opportunities.
          </div>
          <a
            href="https://www.linkedin.com/company/phidelis-capital-pte-ltd/"
            target="_blank"
            rel="noopener noreferrer"
            className="se-btn self-start cursor-pointer bg-white text-[#2A3A6A] rounded-[32px] px-8 py-3 font-['Inter'] font-medium text-[16px] hover:bg-gray-100 transition-colors shadow-sm inline-block"
          >
            Follow Us on Linkedin
          </a>
        </div>
        <div className="se-phone relative w-[70%] sm:w-[50%] mx-auto mt-10 lg:absolute lg:w-[40%] lg:top-[-5rem] lg:right-20 lg:mt-0">
          <img src="/homePage/dailyMarketInsights.png" alt="" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default DailyMarketInsight;
