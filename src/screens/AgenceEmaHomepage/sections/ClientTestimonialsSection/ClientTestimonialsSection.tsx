import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React, { JSX } from "react";
import { Button } from "../../../../components/ui/button";
import { Card } from "../../../../components/ui/card";

export const ClientTestimonialsSection = (): JSX.Element => {
  // Project data that can be mapped over if more projects are added
  const projectData = {
    name: "FAQ.IA",
    type: "SAAS",
    technologies: "React, Lovable, Vercel",
    mvpTime: "11 jours",
  };

  return (
    <section className="relative w-[80%] max-w-[1500px] p-16 flex flex-col">
      <img
        className="absolute translate-y-[125%] translate-x-[-50%] top-0 left-0 w-[80px] h-[80px] object-cover"
        alt="Ia ema"
        src="https://c.animaapp.com/mc1n4zn94AUOLo/img/ia---ema-2-5.png"
      />
            <h2 className="mt-12 font-['Roboto',Helvetica] font-black text-white text-[2.5rem]">
              Projets
            </h2>

      <div className="flex gap-8 justify-between my-12">

          <div className="space-y-6">
            <h3 className="bg-[linear-gradient(90deg,rgba(255,82,209,1)_0%,rgba(243,99,28,1)_33%,rgba(0,195,217,1)_66%,rgba(255,193,37,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-['Roboto',Helvetica] font-black text-transparent text-[1.7rem]">
              {projectData.name}
            </h3>

            <div className="max-w-[493px] font-['Roboto',Helvetica] text-white text-[1.3rem] leading-[22px]">
              <p>
                <span className="font-black">Projet :</span> {projectData.type}
              </p>
              <br />
              <p>
                <span className="font-black">Tech :</span>{" "}
                {projectData.technologies}
              </p>
              <br />
              <p>
                Temps de production <span className="font-black">MVP</span> :{" "}
                {projectData.mvpTime}
              </p>
            </div>

            <div className="flex items-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                className="w-[50px] h-[50px] rounded-[75px]"
              >
                <ChevronLeftIcon className="h-5 w-5" />
                <span className="sr-only">Previous project</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="w-[50px] h-[50px] rounded-[75px]"
              >
                <ChevronRightIcon className="h-5 w-5" />
                <span className="sr-only">Next project</span>
              </Button>
            </div>
          </div>

          <Card className="w-[30rem] aspect-[1.6] rounded-xl border-none bg-white">
            {/* Content for the card would go here */}
          </Card>

    </div>
    </section>
  );
};
