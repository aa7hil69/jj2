import React, { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    alt: "Slide 1",
    title: "JJ² Consultancy UK Limited",
    subtitle:
      "JJ² Consultancy team comes with a wealth of corporate experience that is diverse and broad. We map existing processes, assess gaps and ultimately bridge the gaps. However, our mapping techniques, tools deployed, business understanding, and recommendations are based on world-class best practices. Moreover, we get involved in the implementation, track development, and measure success criteria.",
  },
];

export const Description = ({ appReady }) => {
  const [index] = useState(0);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    if (appReady) {
      // Delay entering state to let splash screen fully finish
      const timer = setTimeout(() => setEntered(true), 300); // 300ms delay can be adjusted
      return () => clearTimeout(timer);
    } else {
      setEntered(false);
    }
  }, [appReady]);

  return (
    <section
      className="
        relative w-full min-h-screen bg-transparent
        flex items-center
        pt-6 md:pt-0
        overflow-hidden
        select-none
      "
      style={{
        WebkitUserSelect: "none",
        userSelect: "none",
        WebkitTouchCallout: "none",
        touchAction: "manipulation",
      }}
    >
      {/* Animated blurred logo background */}
      <div
        className={`
          pointer-events-none absolute inset-0
          opacity-40 sm:opacity-50
          blur-[5px] md:blur-[5px]
          scale-110 z-0
          transition-transform transition-opacity duration-700 ease-out
          ${entered ? "opacity-50 translate-y-[-30px]" : "opacity-0 translate-y-3"}
        `}
        style={{
          backgroundImage: entered ? "url('/logopics/logo.png')" : "none", // Load only after entered true
          backgroundPosition: "50.3% center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          transitionDelay: "100ms",
        }}
        aria-hidden="true"
      />

      {/* Contrast overlay */}
      <div
        className="pointer-events-none absolute inset-0 bg-black/30 md:bg-black/20 z-0"
        aria-hidden="true"
      />

      {/* Foreground slides wrapper */}
      <div
        className="relative z-10 w-full flex"
        style={{
          transform: `translateX(-${index * 100}%)`,
          transition: "transform 0.4s ease",
        }}
      >
        {slides.map((s) => (
          <div
            key={s.id}
            className="
              min-w-full
              flex items-center justify-center
              px-4 sm:px-6 md:px-10
              text-white font-teko
            "
          >
            <div className="w-full max-w-3xl text-center px-4 sm:px-6 md:px-10 py-6">
              {/* Title */}
              <h2
                className={`
                  text-white text-xl sm:text-xl md:text-[80px]
                  font-normal tracking-normal
                  leading-tight md:leading-relaxed
                  drop-shadow-sm transition-all duration-700 ease-out
                  ${entered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
                `}
                style={{ transitionDelay: "260ms" }}
              >
                {s.title}
              </h2>

              {/* Subtitle */}
              {s.subtitle && (
                <div className="flex justify-center">
                  <p
                    className={`
                      text-sm sm:text-sm md:text-sm
                      font-normal
                      leading-6 sm:leading-7 md:leading-7
                      text-white max-w-[48rem]
                      transition-all duration-700 ease-out
                      mt-4 sm:mt-5
                      ${entered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
                    `}
                    style={{ transitionDelay: "480ms" }}
                  >
                    {s.subtitle}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
