import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link, useNavigate } from "react-router-dom";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const principles = [
  {
    title: "Care",
    desc: "A client-first approach in every relationship.",
    icon: "/company/care.svg",
  },
  {
    title: "Diligence",
    desc: "Thorough, disciplined execution at every step.",
    icon: "/company/diligence.svg",
  },
  {
    title: "Integrity",
    desc: "Unwavering ethical standards in all we do.",
    icon: "/company/integrity.svg",
  },
  {
    title: "Stewardship",
    desc: "Managing wealth with prudence and foresight.",
    icon: "/company/stewardship.svg",
  },
  {
    title: "Competence",
    desc: "Deep expertise and a global perspective.",
    icon: "/company/competence.svg",
  },
];

const CompanyPrinciples = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".principles-header", {
        scrollTrigger: {
          trigger: ".principles-header",
          start: "top 85%",
        },
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".principles-card", {
        scrollTrigger: {
          trigger: ".principles-grid",
          start: "top 80%",
        },
        y: 40,
        scale: 0.95,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      id="company-principles"
      ref={containerRef}
      className="w-full flex flex-col-reverse lg:flex-row justify-between overflow-hidden bg-[#1e2756]"
    >
      <div className="w-full py-10 lg:py-20 px-6 md:px-20 overflow-hidden">
        {/* Header Section */}
        <div className="principles-header mb-20 text-left">
          <h2 className="text-white font-['Inter'] font-semibold text-[32px] md:text-[44px] leading-tight mb-8 tracking-tight">
            Principles that shape every action.
          </h2>
          <p className="text-white font-['Inter'] font-semibold text-[16px] md:text-[18px] max-w-4xl leading-relaxed tracking-wide">
            Phidelis Capital applies a disciplined, research-driven approach to
            bespoke family office asset management — building portfolios with
            prudence, resilience, and long-term value creation.
          </p>
        </div>

        {/* Principles Grid */}
        <div className="principles-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12 auto-rows-fr items-stretch">
          {principles.map((p, idx) => (
            <div
              key={idx}
              className="principles-card flex flex-col items-start pr-4 h-full"
            >
              <div className="mb-6 h-10 flex items-center justify-start">
                <img
                  src={p.icon}
                  alt={p.title}
                  className="max-h-full w-auto object-contain"
                />
              </div>
              <h3 className="text-white font-['Inter'] font-bold text-[22px] mb-[15%]">
                {p.title}
              </h3>
              <p className="text-white/80 font-['Inter'] font-normal text-[15px] leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}

          {/* Solutions Action Card */}
          <div className="principles-card flex flex-col justify-between p-8 rounded-[12px] bg-[url('/common/gradient-Bg.png')] bg-cover bg-center overflow-hidden relative shadow-md h-full">
            <div className="relative z-10 h-full flex flex-col justify-between">
              <h3 className="text-white font-['Inter'] font-bold text-[24px] mb-[64px] tracking-tight">
                Solutions
              </h3>
              <div>
                <p className="text-white font-['Inter'] font-normal text-[14px] leading-snug mb-5">
                  Tailored Strategies for every objective.
                </p>
                <button
                  className="bg-white text-black cursor-pointer font-['Inter'] font-medium text-[14px] py-2 px-6 rounded-full hover:bg-gray-200 transition-colors"
                  onClick={() => {
                    navigate("/solutions", {
                      state: { section: "solutions-designed" },
                    });
                  }}
                >
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyPrinciples;
