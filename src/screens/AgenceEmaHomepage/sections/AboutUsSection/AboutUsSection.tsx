import React, { JSX } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const AboutUsSection = (): JSX.Element => {
  const agencyStory = [
    "Après 5 années passées dans le Growth marketing, à accompagner des projets dans différents domaines j'ai eu l'occasion de manager des équipes de développement web à des fins marketing.",
    "Ces expériences m'ont toutes amenée à un constat :",
    "Les agences web et Freelances complexifient les projets et abusent des lacunes techniques de leurs clients.",
    "Donc j'ai réalisé le pivot de cette agence pour offrir une équipe clé en main pour build votre produit ou site web en moins de 30 jours.",
  ];

  return (
    <section className="relative w-full py-16 flex justify-center">
      <div className="w-full max-w-[1144px] flex flex-col items-end">
        {/* Vector graphic at the top */}
        <img
          className="w-[372px] h-[254px] self-start ml-[199px]"
          alt="Vector"
          src="https://c.animaapp.com/mc1n4zn94AUOLo/img/vector-3-1.svg"
        />

        <div className="flex w-full mt-4 gap-[121px]">
          {/* Left side - Image */}
          <div className="relative">
            <img
              className="w-[400px] h-[510px]"
              alt="Agency founder"
              src="https://c.animaapp.com/mc1n4zn94AUOLo/img/rectangle-12.svg"
            />
          </div>

          {/* Right side - Content */}
          <div className="flex flex-col max-w-[619px]">
            {/* Heading */}
            <h2 className="font-['Roboto',Helvetica] font-black text-[45px] text-white mb-16">
              L&apos;histoire de l&apos;agence
            </h2>

            {/* Story text */}
            <div className="font-['Roboto',Helvetica] font-black text-white text-xl space-y-6">
              {agencyStory.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-16">
              <Card className="w-[486px] h-[74px] shadow-[3px_3px_25px_#ff51d099] rounded-[30px] bg-transparent border-0">
                <CardContent className="p-0 h-full">
                  <Button
                    className="w-full h-full rounded-[30px] flex items-center justify-center"
                    variant="default"
                  >
                    <span className="font-['Roboto',Helvetica] font-black text-white text-[35px]">
                      Échanger avec moi
                    </span>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
