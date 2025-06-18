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
    <section className="relative w-full max-w-[1311px] mx-auto py-16">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <div className="relative mb-8">
            <img
              className="w-[150px] h-[150px] object-cover"
              alt="Ia ema"
              src="https://c.animaapp.com/mc1n4zn94AUOLo/img/ia---ema-2-5.png"
            />
            <h2 className="mt-4 ml-[162px] font-['Roboto',Helvetica] font-black text-white text-[45px]">
              Projets
            </h2>
          </div>

          <div className="ml-[162px] space-y-6">
            <h3 className="bg-[linear-gradient(90deg,rgba(255,82,209,1)_0%,rgba(243,99,28,1)_33%,rgba(0,195,217,1)_66%,rgba(255,193,37,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-['Roboto',Helvetica] font-black text-transparent text-[35px]">
              {projectData.name}
            </h3>

            <div className="max-w-[493px] font-['Roboto',Helvetica] text-white text-[22px] leading-[22px]">
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
        </div>

        <div className="flex-1">
          <Card className="w-full h-[400px] rounded-xl border-none bg-white">
            {/* Content for the card would go here */}
          </Card>
        </div>
      </div>
    </section>
  );
};
