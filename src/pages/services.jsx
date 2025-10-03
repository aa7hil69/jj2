import React from "react";
import { Navbar } from "../components/Navbar";
import { Services } from "../components/services/Services";
import { Footer } from "../components/Footer";
import { Reveal } from "../components/Reveal";

export const Service = ({ appReady }) => {
  return (
    <div className="bg-[#040608]">
      <div className="min-h-screen text-foreground overflow-x-hidden">
        <Navbar />
        <main>
          {appReady && <Services />}        
        </main>
      </div>
      <div>
        <Reveal >
          <Footer />
        </Reveal>
      </div>
    </div>
  );
};
