import React, { JSX } from "react";
import { Button } from "../../../../components/ui/button";
import { Border } from "../../../../components/Index";

// Data for reusability
const footerData = {
  companyName: "Agence Ema",
  copyright: "©Agence Ema 2025 all right reserved",
  legalLinks: "Mentions légales | CGV",
  contactText:
    "Vous voulez demander un devis, poser vos questions ou simplement nous rencontrer :",
  contactButton: "Échanger avec nous",
  logoUrl: "https://c.animaapp.com/mc1n4zn94AUOLo/img/ia---ema-2-5.png",
  separatorUrl: "https://c.animaapp.com/mc1n4zn94AUOLo/img/header.svg",
};

export const MainFooterSection = (): JSX.Element => {
  return (
    <footer className="relative w-[80%] max-w-[1500px] px-6 md:px-16 py-16 flex flex-col">

      <img
        className="absolute translate-y-[-53%] translate-x-[-50%] top-0 left-0 w-[60px] md:w-[80px] lg:w-[120px] aspect-square object-cover"
        alt="Ia ema"
        src="https://c.animaapp.com/mc1n4zn94AUOLo/img/ia---ema-2-5.png"
      />
     
      <h2 className="text-[45px] font-black mb-4">
        {footerData.companyName}
      </h2>

      <div className="flex flex-col self-end mb-6">

        {/* Right column */}
        <div className="flex flex-col max-w-[474px]">
          <p className="text-[1.7rem] font-black mb-8">
            {footerData.contactText}
          </p>

          <button className="bg-main-gradient py-2 w-fit text-lg font-bold rounded-2xl px-8 glow cursor-pointer hover:scale-105 transition-all">Échanger avec nous</button>
        </div>
      </div>
    </footer>
  );
};
