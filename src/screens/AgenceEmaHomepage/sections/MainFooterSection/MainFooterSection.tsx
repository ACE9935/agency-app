import React, { JSX } from "react";
import { Button } from "../../../../components/ui/button";

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
    <footer className="relative w-full py-12 bg-transparent text-white font-['Roboto',Helvetica]">
      {/* Top section with separator */}
      <div className="relative w-full h-[150px] mb-12">
        <div className="relative w-full flex items-center justify-between">
          <div className="flex items-center">
            <img
              className="w-[150px] h-[150px] object-cover"
              alt="Agence Ema logo"
              src={footerData.logoUrl}
            />
          </div>

          <div className="absolute left-0 right-0 top-[74px]">
            <img
              className="w-full h-px object-cover"
              alt="Footer separator"
              src={footerData.separatorUrl}
            />
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-row justify-between px-[225px] mb-12">
        {/* Left column */}
        <div className="flex flex-col">
          <h2 className="text-[45px] font-black mb-4">
            {footerData.companyName}
          </h2>
        </div>

        {/* Right column */}
        <div className="flex flex-col max-w-[474px]">
          <p className="text-[35px] font-black mb-12">
            {footerData.contactText}
          </p>

          <div className="self-end mt-auto">
            <Button className="w-[484px] h-[74px] rounded-[30px] bg-transparent shadow-[3px_3px_25px_#ff51d099] hover:bg-transparent">
              <span className="text-[35px] font-black text-white">
                {footerData.contactButton}
              </span>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom section with copyright */}
      <div className="relative w-full mt-12">
        <div className="relative w-full h-[150px]">
          <div className="absolute left-0 right-0 top-0">
            <img
              className="w-full h-px object-cover"
              alt="Footer separator"
              src={footerData.separatorUrl}
            />
          </div>

          <div className="flex items-center justify-between px-[225px]">
            <img
              className="w-[150px] h-[150px] object-cover"
              alt="Agence Ema logo"
              src={footerData.logoUrl}
            />

            <img
              className="w-[150px] h-[150px] object-cover"
              alt="Agence Ema logo"
              src={footerData.logoUrl}
            />
          </div>

          <div className="flex justify-between px-[225px] mt-[66px]">
            <div className="text-base font-black">{footerData.copyright}</div>
            <div className="text-xl font-black">{footerData.legalLinks}</div>
          </div>
        </div>
      </div>
    </footer>
  );
};
