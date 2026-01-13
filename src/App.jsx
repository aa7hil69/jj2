import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Home } from "./pages/home";
import { Contact } from "./pages/contact";
import { Events } from "./pages/events";
import { Service } from "./pages/services";
import { ScrollToTopButton } from "./components/scrolltop";
import { Notfound } from "./pages/notfound";
import useRestoreThenAnimateToTop from "./hooks/useRestoreThenScrollTop";
import "./index.css";

/* Splash: solid logo over grey, fades out via opacity transition */
const Splash = ({ visible = true }) => (
  <div
    className={[
      "fixed inset-0 z-[9999] flex items-center justify-center bg-[#1d1e23]",
      "transition-opacity duration-300 ease-out",
      visible ? "opacity-100" : "opacity-0",
    ].join(" ")}
  >
    <img src="/logopics/logo.png" alt="Company logo" className="h-20 w-20" />
  </div>
);

/* Keep --footer-safe current (measures copyright bar if that's #site-footer) */
function useFooterSafeArea() {
  const location = useLocation();
  useEffect(() => {
    const footer = document.getElementById("site-footer");
    const setVar = () => {
      const h = footer?.offsetHeight ?? 0;
      document.documentElement.style.setProperty("--footer-safe", `${h + 16}px`);
    };
    const raf = requestAnimationFrame(setVar);
    const ro = footer ? new ResizeObserver(setVar) : null;
    if (footer && ro) ro.observe(footer);
    window.addEventListener("resize", setVar);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", setVar);
      ro?.disconnect();
    };
  }, [location.pathname]);
}

/* Show a loader on every route change (0.5s hold) */
function useRouteChangeLoader() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 3000); // half-second loader
    return () => clearTimeout(t);
  }, [location.pathname]);
  return loading;
}

/* App content with route-change splash */
// --- AppShell in app.jsx ---
const AppShell = ({ appReady }) => {
  useFooterSafeArea();
  const routeLoading = useRouteChangeLoader();
  const [routeSplashVisible, setRouteSplashVisible] = useState(false);

  useEffect(() => {
    if (routeLoading) setRouteSplashVisible(true);
    else {
      const t = setTimeout(() => setRouteSplashVisible(false), 300);
      return () => clearTimeout(t);
    }
  }, [routeLoading]);
    
  return (
    <>
      {routeSplashVisible && <Splash visible={routeLoading} />}

      <Routes>
        <Route path="/" element={<Home appReady={appReady} />} />
        <Route path="/contact" element={<Contact appReady={appReady} />} />
        <Route path="/events" element={<Events appReady={appReady} />} />
        <Route path="/services" element={<Service appReady={appReady} />} />
        <Route path="*" element={<Notfound />} />
      </Routes>

      <ScrollToTopButton showAfter={200} />
    </>
  );
};


const App = () => {

  // Initial boot splash (1s), with 300ms fade-out
  const [booting, setBooting] = useState(true);
  const [bootSplashVisible, setBootSplashVisible] = useState(true);

  useEffect(() => {
  
    const t = setTimeout(() => setBooting(false), 300); // boot splash hold
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (booting) {
      document.body.style.overflow = "hidden";
      document.body.classList.remove("app-ready"); // keep animations OFF during Splash
      setBootSplashVisible(true);
    } else {
      const t = setTimeout(() => {
        setBootSplashVisible(false);
        document.body.classList.add("app-ready"); // turn animations ON after fade-out completes
      }, 300); // fade-out time (keep in sync with Splash)
      document.body.style.overflow = "";
      return () => clearTimeout(t);
    }
  }, [booting]);
  const appReady = !bootSplashVisible;
  useRestoreThenAnimateToTop({ delayMs: 150, enabled: appReady });
  return (
    <>
      {bootSplashVisible && <Splash visible={booting} />}
        <AppShell appReady={appReady}/>
    </>
  );
};

export default App;
