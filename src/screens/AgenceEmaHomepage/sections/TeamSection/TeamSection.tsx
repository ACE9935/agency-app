import React, { JSX } from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const TeamSection = (): JSX.Element => {
  // Team member images data
  const teamImages = [
    {
      src: "https://c.animaapp.com/mc1n4zn94AUOLo/img/rectangle-16.svg",
      alt: "Rectangle",
    },
    {
      src: "https://c.animaapp.com/mc1n4zn94AUOLo/img/rectangle-13.svg",
      alt: "Rectangle",
    },
    {
      src: "https://c.animaapp.com/mc1n4zn94AUOLo/img/rectangle-15.svg",
      alt: "Rectangle",
    },
    {
      src: "https://c.animaapp.com/mc1n4zn94AUOLo/img/rectangle-15.svg",
      alt: "Rectangle",
    },
  ];

  return (
    <section className="relative w-full py-16 flex flex-col items-start">
      <div className="container mx-auto">
        <div className="flex flex-col gap-8">
          <div className="flex items-start gap-4">
            <img
              className="w-[150px] h-[150px] object-cover"
              alt="Ia ema"
              src="https://c.animaapp.com/mc1n4zn94AUOLo/img/ia---ema-2-5.png"
            />

            <h2 className="mt-12 font-['Roboto',Helvetica] font-black text-white text-[45px]">
              L&apos;équipe
            </h2>
          </div>

          <p className="font-['Roboto',Helvetica] font-black text-white text-xl max-w-[1142px]">
            Ils sont jeunes, ils sont passionnés et surtout et sont à
            l&apos;affût des dernières évolutions techniques dans leurs domaines
            pour resté compétitifs jour après jour !
          </p>

          <div className="flex gap-4 mt-4">
            {teamImages.map((image, index) => (
              <Card key={index} className="border-0 bg-transparent">
                <CardContent className="p-0">
                  <img
                    className="w-[150px] h-[150px]"
                    alt={image.alt}
                    src={image.src}
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
