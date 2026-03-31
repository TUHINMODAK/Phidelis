import React from 'react';

const PartnerWithUs = () => {
  return (
    <section className="relative w-full py-24 px-6 md:px-20 lg:px-20">
      {/* Background Image Setup */}
      <div
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage: "url('/homePage/heroImg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#0B1325]/85 -z-10" />

      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-stretch">

        {/* Left Column - Text & Info */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between text-white lg:py-[50px]">
          <div>
            <h2 className="font-['Inter'] font-bold text-[36px] md:text-[46px] tracking-tight mb-8">
              Partner with us
            </h2>

            <p className="font-['Inter'] font-normal text-[15px] md:text-[16px] leading-[28px] opacity-90 max-w-[540px]">
              At Phidelis Capital, every decision is crafted towards your objectives — guided by research-led insights and technology-supported intelligence, delivered with clarity and purpose.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-12 sm:gap-20 mt-12 lg:mt-0">
            {/* Office Info */}
            <div className="flex flex-col gap-[10px]">
              <h3 className="font-['Inter'] font-bold text-[22px] md:text-[24px]">
                Office
              </h3>
              <div className="font-['Inter'] font-medium text-[15px] leading-[26px] opacity-90">
                <p>12 Marina View,</p>
                <p>#11-21, Asia Square 2,</p>
                <p>Singapore, 018961</p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-[10px]">
              <h3 className="font-['Inter'] font-bold text-[22px] md:text-[24px]">
                Contact
              </h3>
              <div className="font-['Inter'] font-medium text-[15px] leading-[26px] opacity-90">
                <p>management@phideliscapital.com</p>
                <p>careers@phideliscapital.com</p>
                <p>+65 1234 5678</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="w-full lg:w-1/2">
          <div className="bg-[#FAFAFB] rounded-[16px] p-8 md:p-[50px] shadow-2xl h-full flex flex-col">
            <h3 className="text-[#24346D] font-['Inter'] font-bold text-[28px] md:text-[32px] tracking-tight mb-10">
              Get Started
            </h3>

            <form className="flex flex-col gap-10 grow">
              <div className="flex flex-col md:flex-row gap-10">
                {/* First Name */}
                <div className="flex flex-col gap-3 w-full md:w-1/2">
                  <label className="text-[#64748B] font-['Inter'] font-bold text-[12px] md:text-[13px] tracking-tight">
                    First Name
                  </label>
                  <input
                    type="text"
                    defaultValue="|"
                    className="border-b border-gray-300 py-1 focus:outline-none focus:border-[#24346D] text-gray-400 font-normal bg-transparent text-[15px]"
                  />
                </div>
                {/* Last Name */}
                <div className="flex flex-col gap-3 w-full md:w-1/2">
                  <label className="text-[#24346D] font-['Inter'] font-bold text-[12px] md:text-[13px] tracking-tight">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="border-b border-[#24346D]/30 py-1 focus:outline-none focus:border-[#24346D] text-[#24346D] font-medium bg-transparent text-[15px]"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-10">
                {/* Email */}
                <div className="flex flex-col gap-3 w-full md:w-1/2">
                  <label className="text-[#64748B] font-['Inter'] font-bold text-[12px] md:text-[13px] tracking-tight">
                    Email
                  </label>
                  <input
                    type="email"
                    className="border-b border-gray-300 py-1 focus:outline-none focus:border-[#24346D] text-[#24346D] font-medium bg-transparent text-[15px]"
                  />
                </div>
                {/* Phone Number */}
                <div className="flex flex-col gap-3 w-full md:w-1/2">
                  <label className="text-[#24346D] font-['Inter'] font-bold text-[12px] md:text-[13px] tracking-tight">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    defaultValue="+1 012 3456 789"
                    className="border-[#24346D]/40 py-1 focus:outline-none border-b-2 focus:border-[#24346D] text-[#24346D] font-bold text-[15px] bg-transparent"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-3 mt-2">
                <label className="text-[#64748B] font-['Inter'] font-bold text-[12px] md:text-[13px] tracking-tight">
                  Message
                </label>
                <input
                  type="text"
                  placeholder="Write your message.."
                  className="border-b border-gray-300 py-1 focus:outline-none focus:border-[#24346D] text-[#24346D] font-medium placeholder:text-[#64748B] bg-transparent text-[15px]"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end mt-auto pt-8">
                <button
                  type="button"
                  className="bg-[#8B3A8B] text-white rounded-[32px] px-10 py-3 font-['Inter'] font-medium text-[15px] hover:bg-[#722A72] transition-colors shadow-sm"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PartnerWithUs;
