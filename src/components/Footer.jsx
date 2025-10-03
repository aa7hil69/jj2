import React, { useEffect, useRef } from "react";
import { IoMapSharp, IoMailOpen } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
  FaLinkedin,
} from "react-icons/fa";

export const Footer = () => {
  const rootRef = useRef(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const stopDrag = (e) => {
      e.preventDefault();
      e.stopPropagation();
    };
    el.addEventListener("dragstart", stopDrag, true);
    return () => el.removeEventListener("dragstart", stopDrag, true);
  }, []);

  return (
    <footer
      ref={rootRef}
      className="w-full bg-[#020406] text-white font-teko relative select-none"
      style={{
        WebkitUserSelect: "none",
        userSelect: "none",
        WebkitTouchCallout: "none",
        touchAction: "manipulation",
      }}
      draggable={false}
      onDragStart={(e) => e.preventDefault()}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/picsin/background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 0,
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 border-t border-b border-white/10">
        {/* CONTACT US */}
        <div>
          <h3 className="mb-2 text-xl tracking-wide text-white/80">
            CONTACT US
          </h3>
          <ul className="mt-6 space-y-4 text-white/90 text-sm">
            <li className="flex items-start gap-3">
              <IoMapSharp className="h-7 w-7 text-[#D4AF37]" aria-hidden="true" />
              <a
                href="https://www.google.com/maps/search/?api=1&query=166+Sevenoaks,+Derry~Londonderry,+Northern+Ireland,+BT47+6BF"
                target="_blank"
                rel="noopener noreferrer"
                className="leading-6 font-light hover:text-[#D4AF37] transition-colors"
              >
                166 Sevenoaks, Derry~Londonderry, <br />
                Northern Ireland, BT47 6BF
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaPhone className="h-6 w-6 text-[#D4AF37]" aria-hidden="true" />
              <a
                href="tel:+447367457334"
                className="font-light hover:text-[#D4AF37] transition-colors"
              >
                +44 (0) 73 6745 7334
              </a>
            </li>
            <li className="flex items-start gap-3">
              <IoMailOpen className="h-7 w-7 text-[#D4AF37]" aria-hidden="true" />
              <p className="font-light break-words">
                <a
                  href="mailto:info@jj2consultancy.co.uk"
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  info@jj2consultancy.co.uk
                </a>
                <br />
                <a
                  href="mailto:jessymathewhr@gmail.com"
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  jessymathewhr@gmail.com
                </a>
              </p>
            </li>
          </ul>
        </div>

        {/* LOCATION MAP */}
        <div>
          <h3 className="mb-2 text-xl tracking-wide text-white/80">
            LOCATION MAP
          </h3>
          <div className="mx-auto w-full max-w-[520px] mt-6">
            <iframe
              className="block w-full h-[203px] rounded-lg border border-white/10"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2296.947887269816!2d-7.283867839059367!3d54.990615417545484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485fe1e93832b17b%3A0x77c424f68aebb10b!2s166%20Sevenoaks%2C%20Londonderry%20BT47%206BF%2C%20UK!5e0!3m2!1sen!2sin!4v1755459515296!5m2!1sen!2sin"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            />
          </div>
        </div>

        {/* SOCIAL MEDIA */}
        <div>
          <h3 className="mb-2 text-xl tracking-wide text-white/80">
            SOCIAL MEDIA
          </h3>
          <p className="text-white/80 text-sm mb-6 font-light">
            Find the next big opportunity with JJ² Consultancy UK Limited —
            where top talent meets top employers!
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <FaFacebookSquare className="h-6 w-6 text-white/80" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <FaInstagramSquare className="h-6 w-6 text-white/80" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <FaYoutubeSquare className="h-6 w-6 text-white/80" />
            </a>
            <a
              href="https://www.linkedin.com/in/jessy-mathew-55318b99"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <FaLinkedin className="h-6 w-6 text-white/80" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div id="site-footer" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-4 text-center text-white/70 font-light">
          © {new Date().getFullYear()} JJ² Consultancy
        </div>
      </div>
    </footer>
  );
};
