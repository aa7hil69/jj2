import React from "react";

export const Services = () => {
  const servicesList = [
    {
      label: "Change Management",
      description:
        "As a leading firm in the field of change management, we always spend a significant amount of time understanding the organizational culture to surf through the transition smoothly. Our focus on the team spirit is a key driver towards a successful change.",
    },
    {
      label: "Selection & Assessment",
      description:
        "The process of identifying that your organisation needs to employ someone is managed by us. Selection then consists of the processes involved in choosing from applicants a suitable candidate to fill a post.",
    },
    {
      label: "Outplacement",
      description:
        "JJ2 help corporate organizations, keen to support individuals who are exiting your business (voluntarily or involuntarily) – to help former employees transition to new jobs or help them re-orient themselves in the job market.",
    },
    {
      label: "HR Consultancy",
      description:
        "JJ2 Consultancy team comes with a wealth of corporate experience that is diverse and broad. We map existing processes, assess gaps and ultimately bridge the gaps. We get involved in the implementation, track development, and measure success criteria.",
    },
    {
      label: "Career Coaching",
      description:
        "Career coaching can help you take more control of your career. Work on a one to one basis with one of our specialist career coaches to help achieve your career goals and get senior level positions.",
    },
    {
      label: "Corporate Social Responsibility",
      description:
        "Corporate social responsibility (CSR) for companies, the overall aim is to achieve a positive impact on society as a whole while maximising the creation of shared value for the owners of the business, its employees, shareholders and stakeholders.",
    },
    {
      label: "Recruitment",
      description:
        "Senior level recruitment by senior level recruiters. We believe that successful Talent Attraction and Career Management is all about the quality of the recruiter and our expertise in finding the right people for the job.",
    },
    {
      label: "Outsourcing",
      description:
        "Outsourcing has become a major trend in human resources over the past decade. Send certain job functions outside your company instead of handling them in house. Use outsourcing as a way to grow while restraining payroll and overhead costs.",
    },
    {
      label: "Training & Development",
      description:
        "Providing an educational process which involves the sharpening of skills, concepts, changing of attitude and gaining more knowledge to enhance the performance of the employees.",
    },
  ];

  return (
    <section
      className="bg-[#020406] px-6 sm:px-12 py-20 mt-10 text-white font-teko overflow-hidden"
      style={{ WebkitUserSelect: "none", userSelect: "none" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {servicesList.map((service, idx) => (
            <div
              key={idx}
              className="group relative bg-[#181c24] rounded-lg p-6 transition-colors duration-500 hover:bg-[#746328] hover:text-white overflow-hidden opacity-0 slide-in-left"
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              {/* Big tall & thin number */}
              <span
                className="absolute -top-2 -left-10 text-[180px] sm:text-[200px] md:text-[150px] font-bold text-[#2a2a30]/100 opacity-70 pointer-events-none select-none"
                style={{ lineHeight: "1", zIndex: 0, transform: "scaleX(0.4)" }}
              >
                {`0${idx + 1}`}
              </span>

              {/* Overlay wipe effect */}
              <div
                className="pointer-events-none absolute inset-0
                            [clip-path:polygon(60%_100%,100%_30%,100%_100%)]
                            bg-black/15 translate-x-full translate-y-full
                            group-hover:translate-x-0 group-hover:translate-y-0
                            transition-transform duration-700 ease-out"
              />

              {/* Content */}
              <div className="relative z-10">
                <h3 className="uppercase text-xl sm:text-2xl font-light mt-2">
                  {service.label}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base font-light mt-3">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animation styles */}
      <style>{`
        @keyframes slide-in-left {
          0% {
            opacity: 0;
            transform: translateX(-50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
          will-change: transform, opacity;
        }
      `}</style>
    </section>
  );
};
