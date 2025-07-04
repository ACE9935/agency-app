import React, { JSX } from "react";
import { useNavigate } from "react-router-dom";


export const AboutUsSection = (): JSX.Element => {
  const navigate = useNavigate();
  const agencyStory = [
    "Après 5 années passées dans le Growth marketing, à accompagner des projets dans différents domaines j'ai eu l'occasion de manager des équipes de développement web à des fins marketing.",
    "Ces expériences m'ont toutes amenée à un constat :",
    "Les agences web et Freelances complexifient les projets et abusent des lacunes techniques de leurs clients.",
    "Donc j'ai réalisé le pivot de cette agence pour offrir une équipe clé en main pour build votre produit ou site web en moins de 30 jours.",
  ];

  return (
    <section className="relative px-6 md:px-16 py-16 flex justify-center w-[90%] sm:w-[80%] max-w-[1500px]">
      <div className="w-full max-w-[1144px] flex flex-col items-end">
        {/* Vector graphic at the top */}
        <img
          className="hidden lg:block w-[372px] h-[254px] self-start ml-[199px]"
          alt="Vector"
          src="https://c.animaapp.com/mc1n4zn94AUOLo/img/vector-3-1.svg"
        />
        <img
          className="block lg:hidden w-[0.1rem] h-[254px] object-cover self-center"
          alt="Vector"
          src="Vector 3.png"
        />

        <div className="flex lg:flex-row flex-col w-full gap-x-16 gap-y-8 justify-between">
          {/* Left side - Image */}
          <div className="relative">
            <img
              className="w-full lg:min-w-[300px]"
              alt="Agency founder"
              src="https://c.animaapp.com/mc1n4zn94AUOLo/img/rectangle-12.svg"
            />
          </div>

          {/* Right side - Content */}
          <div className="flex flex-col w-full">
            {/* Heading */}
            <h2 className="font-['Roboto',Helvetica] font-black text-[2.5rem] text-white mb-16">
              L&apos;histoire de l&apos;agence
            </h2>

            {/* Story text */}
            <div className="font-['Roboto',Helvetica] font-black text-white text-lg space-y-6">
              {agencyStory.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* CTA Button */}
              <button className="bg-main-gradient mt-8 py-2 w-fit text-xl font-bold rounded-2xl px-8 glow cursor-pointer hover:opacity-90 transition-all" onClick={()=>navigate("/contact")}>Échanger avec nous</button>
          </div>
        </div>
      </div>
    </section>
  );
};
