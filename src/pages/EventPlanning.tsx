
import EventSchedulingForm from "@/components/EventSchedulingForm";
import { useState } from "react";
import { Border } from "../components/Index";
import ContactForm from "../components/ContactForm";

const EventPlanning = () => {

  const [pageState, setPageState]=useState(0)

  return (
    <section className="relative min-h-screen bg-primary flex flex-col items-center">
        <div className="absolute flex justify-center w-full h-full"><div className="max-w-[1500px] w-[90%] sm:w-[80%] border-secondary border-l border-r"></div></div>
        <Border/>
      {/* Gradient background elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-main-gradient rounded-full blur-3xl opacity-80"></div>
      <div className="absolute top-1/4 right-0 w-24 h-24 bg-main-gradient rounded-full blur-2xl opacity-70"></div>
      <div className="absolute bottom-0 left-1/4 w-40 h-40 bg-main-gradient rounded-full blur-3xl"></div>
      
      <div className="w-[90%] sm:w-[80%] flex flex-col px-4 md:px-16 py-16 max-w-[1000px]">
         <div className="gradient-border !rounded-full text-white flex w-full max-w-[30rem] mb-8 self-center !p-1 font-bold">
          <button className={`w-full px-4 py-2 rounded-full cursor-pointer  ${pageState===0?'bg-main-gradient hover:opacity-90':''}`} onClick={()=>setPageState(0)}>Prendre rendez-vous</button>
          <button className={`w-full px-4 py-2 rounded-full cursor-pointer ${pageState===1?'bg-main-gradient hover:opacity-90':''}`} onClick={()=>setPageState(1)}>Demander un devis</button>
         </div>
          {pageState===0 ?<><h1 className="text-3xl md:text-5xl font-bold text-white mb-8 text-center">
            Planifiez Votre <span className="gradient-text">Réunion</span>
          </h1>
        
        <EventSchedulingForm /></>:<ContactForm/>}
      </div>
      
      {/* Footer */}
      <Border reverse/>
    </section>
  );
};

export default EventPlanning;
