import React from "react";
import {Navbar} from "../components/Navbar";
import {Footer} from "../components/Footer";
import { Message } from "../components/contact/message";
import { Reveal } from "../components/Reveal";


export const Contact = (appReady) => {
  return (
    
    <div className="bg-[#040608]">
        <div className="min-h-screen text-foreground overflow-x-hidden ">
        <Navbar />
        <main className="bg-#040608 text-black"> 
        {appReady && <Message />}
        </main>
        
      </div>
      <div>
        <Reveal>
        <Footer className="bg-white"/>
        </Reveal>
      </div>
    </div>
  );
}

