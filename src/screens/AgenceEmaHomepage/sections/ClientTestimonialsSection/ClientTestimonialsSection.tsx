import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState, JSX } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const ClientTestimonialsSection = (): JSX.Element => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  // Project data array with 3 projects
  const projectsData = [
    {
      name: "FAQ.IA",
      type: "SAAS",
      technologies: "React, Lovable, Vercel",
      mvpTime: "11 jours",
      image: "/p1.png"
    },
    {
      name: "E-Commerce Pro",
      type: "E-COMMERCE",
      technologies: "Next.js, Stripe, Tailwind",
      mvpTime: "18 jours",
      image: "/p2.png"
    },
    {
      name: "Analytics Dashboard",
      type: "DASHBOARD",
      technologies: "React, D3.js, Firebase",
      mvpTime: "14 jours",
      image: "/p3.png"
    }
  ];

  const goToPrevious = () => {
    setCurrentProjectIndex((prevIndex) => 
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentProjectIndex((prevIndex) => 
      prevIndex === projectsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentProject = projectsData[currentProjectIndex];

  return (
    <section className="relative w-[90%] sm:w-[80%] max-w-[1500px] px-6 md:px-16 py-16 flex flex-col">
      <img
        className="absolute translate-y-[180%] md:translate-y-[125%] translate-x-[-50%] top-0 left-0 w-[60px] md:w-[80px] aspect-square object-cover"
        alt="Ia ema"
        src="https://c.animaapp.com/mc1n4zn94AUOLo/img/ia---ema-2-5.png"
      />
      
      <h2 className="mt-12 text-left w-full font-['Roboto',Helvetica] font-black text-white text-[2.5rem] px-4">
        Projets
      </h2>

      <div className="flex lg:flex-row flex-col gap-8 justify-between mt-12 lg:my-12">
        <div className="space-y-6 transition-all duration-500 ease-in-out">
          <h3 className="bg-[linear-gradient(90deg,rgba(255,82,209,1)_0%,rgba(243,99,28,1)_33%,rgba(0,195,217,1)_66%,rgba(255,193,37,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-['Roboto',Helvetica] font-black text-transparent text-[1.7rem]">
            {currentProject.name}
          </h3>

          <div className="max-w-[493px] font-['Roboto',Helvetica] text-white text-[1.3rem] leading-[22px]">
            <p>
              <span className="font-black">Projet :</span> {currentProject.type}
            </p>
            <br />
            <p>
              <span className="font-black">Tech :</span>{" "}
              {currentProject.technologies}
            </p>
            <br />
            <p>
              Temps de production <span className="font-black">MVP</span> :{" "}
              {currentProject.mvpTime}
            </p>
          </div>

          <div className="flex items-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              className="w-[50px] h-[50px] cursor-pointer rounded-[75px] hover:bg-main-gradient hover:border-transparent transition-all duration-300"
              onClick={goToPrevious}
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous project</span>
            </Button>
            
            {/* Project indicators */}
            <div className="flex gap-2">
              {projectsData.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentProjectIndex ? 'bg-main-gradient' : 'bg-gray-600'
                  }`}
                  onClick={() => setCurrentProjectIndex(index)}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              className="w-[50px] cursor-pointer h-[50px] rounded-[75px] hover:bg-main-gradient hover:border-transparent transition-all duration-300"
              onClick={goToNext}
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next project</span>
            </Button>
          </div>
        </div>

        <Card className="w-full max-w-[30rem] aspect-[1.6] rounded-xl border-none transition-all duration-500 ease-in-out transform">
          <div className="w-full h-full flex items-center justify-center text-gray-600 font-semibold">
            <img
              src={currentProject.image}
              alt={currentProject.name}
              className="w-full h-full object-contain"
            />
          </div>
        </Card>
      </div>
    </section>
  );
};
