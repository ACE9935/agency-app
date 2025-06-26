
import EventSchedulingForm from "@/components/EventSchedulingForm";
import { Border } from "../components/Index";

const EventPlanning = () => {
  return (
    <section className="relative bg-primary flex flex-col items-center">
        <div className="absolute flex justify-center w-full h-full"><div className="max-w-[1500px] w-[90%] sm:w-[80%] border-secondary border-l border-r"></div></div>
        <Border/>
      {/* Gradient background elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-main-gradient rounded-full blur-3xl opacity-80"></div>
      <div className="absolute top-1/4 right-0 w-24 h-24 bg-main-gradient rounded-full blur-2xl opacity-70"></div>
      <div className="absolute bottom-0 left-1/4 w-40 h-40 bg-main-gradient rounded-full blur-3xl"></div>
      
      <div className="w-[90%] sm:w-[80%] flex flex-col px-0 md:px-16 py-16 max-w-[1000px]">

          <h1 className="text-5xl font-bold text-white mb-6 text-center">
            Planifiez Votre <span className="gradient-text">Réunion</span>
          </h1>
        
        <EventSchedulingForm />
      </div>
      
      {/* Footer */}
      <Border reverse/>
    </section>
  );
};

export default EventPlanning;
