import React, { JSX } from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ProjectsShowcaseSection = (): JSX.Element => {
  // Data for project cards
  const projectCards = [
    {
      id: 1,
      imageUrl: "https://c.animaapp.com/mc1n4zn94AUOLo/img/vector-4.svg",
      alt: "Vector",
    },
    {
      id: 2,
      imageUrl: "https://c.animaapp.com/mc1n4zn94AUOLo/img/vector-4.svg",
      alt: "Vector",
    },
    {
      id: 3,
      imageUrl: "https://c.animaapp.com/mc1n4zn94AUOLo/img/vector-4.svg",
      alt: "Vector",
    },
  ];

  return (
    <section className="relative w-full py-20 overflow-hidden">
      {/* Background blur effects */}
      <div className="absolute w-[359px] h-[807px] top-0 left-[15%] bg-[#191919] rounded-[179.5px/403.5px] blur-[50px]" />
      <div className="absolute w-[359px] h-[807px] top-0 right-[15%] bg-[#191919] rounded-[179.5px/403.5px] blur-[50px]" />

      <div className="relative container mx-auto">
        {/* Header with logo and title */}
        <div className="flex items-center mb-16">
          <img
            className="w-[150px] h-[150px] object-cover mr-3"
            alt="Ia ema"
            src="https://c.animaapp.com/mc1n4zn94AUOLo/img/ia---ema-2-5.png"
          />
          <h2 className="font-black text-white text-[45px] [font-family:'Roboto',Helvetica]">
            Réalisations
          </h2>
        </div>

        {/* Project cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {projectCards.map((card) => (
            <Card
              key={card.id}
              className="w-[781px] h-[441px] bg-transparent border-0"
            >
              <CardContent className="p-0">
                <img
                  className="w-full h-full"
                  alt={card.alt}
                  src={card.imageUrl}
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
