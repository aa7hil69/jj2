import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Contact Us", path: "/contact" },
    { id: 3, name: "Events", path: "/events" },
    { id: 4, name: "Services", path: "/services" },
  ];

  const toggleNavbar = () => setIsOpen(v => !v);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    const originalStyle = document.body.style.overflow;
    document.body.style.overflow = isOpen ? "hidden" : originalStyle || "";
    return () => {
      document.body.style.overflow = originalStyle || "";
    };
  }, [isOpen]);

  const linkClass = (path) =>
    [
      "relative inline-block pb-2 text-lg font-light tracking-wide",
      "transition-colors duration-300 ease-in-out",
      "focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/70 rounded",
      "after:content-[''] after:absolute after:left-1/2 after:bottom-0",
      "after:h-[3px] after:w-0 after:bg-yellow-400 after:-translate-x-1/2",
      "after:transition-all after:duration-300 after:ease-out",
      location.pathname === path
        ? "after:w-full text-yellow-300"
        : "hover:after:w-full",
    ].join(" ");

  const leftNavItems = navItems.slice(0, navItems.length / 2);
  const rightNavItems = navItems.slice(navItems.length / 2);

  return (
    <>
      <nav
        className={[
          "fixed top-0 left-0 w-full h-20 z-50",
          "bg-[#020406] border-b border-white/10", // ✅ solid background
          "flex items-center px-6 sm:px-12 font-teko text-white select-none",
        ]
          .filter(Boolean)
          .join(" ")}
        role="navigation"
        aria-label="Primary Navigation"
      >
        <div className="flex items-center justify-center w-full max-w-7xl mx-auto gap-16">
          {/* Left nav items */}
          <ul className="hidden md:flex items-center gap-12">
            {leftNavItems.map(({ id, name, path }) => (
              <li key={id}>
                <Link to={path} className={linkClass(path)}>
                  {name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Center logo */}
          <div
            className="pointer-events-none select-none hidden md:block"
            aria-hidden="true"
          >
            <img
              src="/logopics/logo.png"
              alt="Logo"
              className="h-[130px] w-[140px] mt-12 bg-[#020406] rounded-b-full"
              draggable="false"
              loading="lazy"
            />
          </div>

          {/* Right nav items */}
          <ul className="hidden md:flex items-center gap-12">
            {rightNavItems.map(({ id, name, path }) => (
              <li key={id}>
                <Link to={path} className={linkClass(path)}>
                  {name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile top bar */}
          <div className="md:hidden relative flex items-center justify-center w-full h-16 bg-[#020406] px-4">
            <img
              src="/logopics/logo.png"
              alt="Logo"
              className="h-[90px] w-[100px] mt-10 bg-[#020406] rounded-b-full"
              draggable="false"
              loading="lazy"
            />
            <button
              onClick={toggleNavbar}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400/80"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              type="button"
            >
              {isOpen ? (
                <IoMdClose size={28} className="text-yellow-400" />
              ) : (
                <FaBars size={28} className="text-yellow-400" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={[
            "fixed md:hidden inset-0 bg-[#020406] text-white z-50 transition-transform duration-300 ease-in-out",
            isOpen ? "translate-x-0" : "translate-x-full",
          ].join(" ")}
          role="dialog"
          aria-modal="true"
        >
          <div className="relative h-16 flex items-center justify-center px-4 bg-[#020406]">
            <button
              onClick={toggleNavbar}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400/80 text-yellow-400"
              aria-label="Close menu"
              type="button"
            >
              <IoMdClose size={28} />
            </button>
          </div>
          <div className="w-full h-[calc(100vh-64px)] overflow-y-auto bg-[#020406] flex items-center justify-center px-6 nav-scroll">
            <ul className="w-full max-w-sm flex flex-col gap-6">
              {navItems.map(({ id, name, path }) => {
                const active = location.pathname === path;
                return (
                  <li key={id}>
                    <Link
                      to={path}
                      onClick={() => setIsOpen(false)}
                      className={[
                        "block w-full text-center py-5 rounded-md text-2xl font-semibold tracking-wide transition-colors duration-200",
                        active
                          ? "text-yellow-300 bg-white/10"
                          : "text-white hover:text-yellow-300 hover:bg-white/10",
                      ].join(" ")}
                    >
                      {name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>

      {/* Add padding to content so it's not hidden behind fixed navbar */}
      <div className="h-20" />
    </>
  );
};
