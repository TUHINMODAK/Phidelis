import React from 'react';

const teamMembers = [
  {
    name: 'Anuj Grover',
    role: 'Chief Executive Officer',
    desc: 'Over 20 years in private banking and wealth management with Citi, HSBC, UBS, and J. Safra Sarasin. Specialist in investment advisory, portfolio construction and legacy planning for UHNW clients across key global regions.',
    img: '/people/anuj-grover.jpg',
    linkedin: '#'
  },
  {
    name: 'Prashant Shah',
    role: 'Chief Investment Officer',
    desc: 'Over 25 years in wealth & asset management with UBS, J. Safra Sarasin, Standard Chartered, ENAM and Matterhorn. Expertise in multi-asset advisory, Fund Management, Equity Discretionary Portfolios for UHNW families and institutions.',
    img: '/people/prashant-shah.jpg',
    linkedin: '#'
  },
  {
    name: 'Patricia Lim',
    role: 'Head of Operations',
    desc: 'Over 35 years in banking across Citi, UBS, Deutsche Bank, DBS, Standard Chartered, and J. Safra Sarasin. Skilled in client advisory, relationship management, and operational leadership.',
    img: '/people/patricia-lim.jpg',
    linkedin: '#'
  },
  {
    name: 'Nandini Vijayaraghavan',
    role: 'Head of Research',
    desc: 'Over 25 years in financial research and strategy. Former Head of Research at KDB Singapore and Director at Fitch Ratings, specialising in credit, ESG, and Asian markets.',
    img: '/company/nandini_vi.png',
    linkedin: '#'
  },
  {
    name: 'Yuvraj Govindan',
    role: 'Investment Manager',
    desc: 'Over 20 years as a Chartered Accountant and family office advisor. Experienced in private equity, real estate, and structuring tailored investment vehicles for single family offices.',
    img: '/company/yuvraj_govindan.png',
    linkedin: '#'
  },
  {
    name: 'Sushruth Sunder',
    role: 'Investment Analyst',
    desc: '10 years in asset management, equity research, and financial journalism. Former equity research lead at INDmoney and journalist at Financial Express.',
    img: '/company/sushruth_sunder.png',
    linkedin: '#'
  }
];

const CompanyTeam = () => {
  return (
    <section className="w-full bg-[url('/common/gradient-Bg.png')] bg-cover bg-center py-20 px-6 lg:px-[120px]">
      <div className="max-w-[1240px] mx-auto">
        {/* Header */}
        <div className="mb-14 text-left">
          <h2 className="text-white font-['Inter'] font-semibold text-[32px] md:text-[40px] leading-tight">
            Seasoned Experts, Trusted Advisors
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-[12px] p-8 md:p-10 flex flex-col shadow-lg hover:-translate-y-1 transition-transform duration-300"
            >
              {/* Profile Image */}
              <div className="mb-6 w-[70px] h-[70px] rounded-full overflow-hidden flex-shrink-0">
                {member.img ? (
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover object-[10%_5%]" />
                ) : (
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500 font-medium">N/A</div>
                )}
              </div>
              
              {/* Member Info */}
              <div className="flex flex-col flex-1">
                {/* Name & LinkedIn */}
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-[#1a2552] font-['Inter'] font-semibold text-[20px] tracking-tight">
                    {member.name}
                  </h3>
                  <a href={member.linkedin} target="_blank" rel="noreferrer" className="flex items-center justify-center">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="#3D508F" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 0H5C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5V5c0-2.761-2.239-5-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z"/>
                    </svg>
                  </a>
                </div>
                
                {/* Role */}
                <h4 className="text-[#4ea5d8] font-['Inter'] font-semibold text-[13px] tracking-wide mb-5">
                  {member.role}
                </h4>
                
                {/* Description */}
                <p className="text-[#3b4b8f] font-['Inter'] font-medium text-[13px] leading-[1.6]">
                  {member.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyTeam;
