import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const SeasonedExperts = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  const teamMembers = [
    {
      img: "/people/anuj-grover.jpg",
      name: "Anuj Grover",
      title: "Chief Executive Officer",
    },
    {
      img: "/people/prashant-shah.jpg",
      name: "Prashant Shah",
      title: "Chief Investment Officer",
    },
    {
      img: "/people/patricia-lim.jpg",
      name: "Patricia Lim",
      title: "Head of Operations",
    },
  ];

  useGSAP(
    () => {
      // Title
      gsap.from(".se-title", {
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

      // Text block sequence
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".se-text-block",
          start: "top 80%",
        },
      });

      tl.from(".se-line", {
        width: 0,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          ".se-desc",
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4",
        )
        .from(
          ".se-btn",
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.4",
        );
    },
    { scope: containerRef },
  );

  return (
    <section
      id="seasoned-experts"
      ref={containerRef}
      className="w-full bg-white py-24 px-6 md:px-[20px] lg:px-20 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto">
        <h2 className="se-title text-[#2A3A6A] font-['Inter'] font-medium text-[clamp(28px,5vw,40px)] tracking-normal mb-16 lg:mb-20">
          Seasoned Experts, Trusted Advisors
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* Left Column - Team Member Cards */}
          <div className="w-full lg:w-1/2">
            <div className="se-avatars-grid flex md:grid md:grid-cols-3 overflow-x-auto md:overflow-visible gap-4 md:gap-6 items-stretch max-w-[720px] mx-auto lg:mx-0 snap-x snap-mandatory pb-8 md:pb-0 hide-scrollbar">
              {teamMembers.map((member, idx) => (
                <div
                  key={idx}
                  className="se-avatar flex-none w-[75vw] sm:w-[250px] md:w-auto snap-center rounded-[12px] overflow-hidden shadow-md"
                >
                  {/* Photo with gradient overlay */}
                  <div className="relative h-full min-h-[200px] bg-gradient-to-b from-[#1a2a5e] to-[#2d3d6d]">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover object-top"
                    />
                    {/* Bottom gradient for text readability */}
                    <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-black/80 to-transparent"></div>
                    {/* Name and Title overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 flex flex-col justify-center md:p-4">
                      <p className="text-white font-['Inter'] mx-auto font-semibold text-[11px] md:text-[14px] leading-tight">
                        {member.name}
                      </p>
                      <p className="text-white/80 font-['Inter'] mx-auto font-normal text-[9px] md:text-[12px] leading-tight mt-1">
                        {member.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Text Block */}
          <div className="se-text-block w-full lg:w-1/2 flex flex-col justify-center pt-2 lg:pt-6">
            <div className="se-line w-full h-px bg-[#2A3A6A]/30 mb-10 origin-left"></div>
            <p className="se-desc text-[#2A3A6A] font-['Inter'] font-semibold text-[20px] md:text-[22px] lg:text-[24px] leading-[36px] tracking-normal mb-12 max-w-[600px]">
              With decades of experience in private banking, investments, and
              wealth stewardship, we are a team united by integrity, diligence,
              and proven global expertise.
            </p>
            <button
              className="se-btn self-start cursor-pointer bg-[#2A3A6A] text-white rounded-[32px] px-8 py-3 font-['Inter'] font-medium text-[16px] hover:bg-[#202f5a] transition-colors shadow-sm"
              onClick={() => {
                navigate("/company", { state: { section: "company-team" } });
              }}
            >
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeasonedExperts;
