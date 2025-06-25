import React, { JSX } from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const TechnologyStackSection = (): JSX.Element => {
  // Define technology categories and their icons
  const techCategories = [
    {
      name: "Design",
      icons: [
        "https://c.animaapp.com/mc1n4zn94AUOLo/img/ellipse-8-2.svg",
        "https://c.animaapp.com/mc1n4zn94AUOLo/img/ellipse-12.svg",
        "https://c.animaapp.com/mc1n4zn94AUOLo/img/ellipse-9-1.svg",
        "https://c.animaapp.com/mc1n4zn94AUOLo/img/ellipse-10.png",
        "https://c.animaapp.com/mc1n4zn94AUOLo/img/ellipse-11-1.png",
      ],
      position: { top: "35px", left: "40px" },
      hasSecondRow: true,
    },
    {
      name: "Cloud & DevOps",
      icons: [
        "https://c.animaapp.com/mc1n4zn94AUOLo/img/ellipse-8-1.png",
        "https://c.animaapp.com/mc1n4zn94AUOLo/img/ellipse-9.svg",
        "https://c.animaapp.com/mc1n4zn94AUOLo/img/ellipse-10-3.png",
      ],
      position: { top: "35px", left: "440px" },
    },
    {
      name: "Front End",
      icons: [
        "https://c.animaapp.com/mc1n4zn94AUOLo/img/claude-ia-1.svg",
        "https://c.animaapp.com/mc1n4zn94AUOLo/img/react.svg",
        "https://c.animaapp.com/mc1n4zn94AUOLo/img/react-4.svg",
        "https://c.animaapp.com/mc1n4zn94AUOLo/img/react-3.svg",
        "https://c.animaapp.com/mc1n4zn94AUOLo/img/claude-ia.svg",
        "https://c.animaapp.com/mc1n4zn94AUOLo/img/react-1.svg",
      ],
      position: { top: "35px", left: "866px" },
      hasSecondRow: true,
    },
    {
      name: "Back End",
      icons: [
        "https://c.animaapp.com/mc1n4zn94AUOLo/img/ellipse-8-2.svg",
        "https://c.animaapp.com/mc1n4zn94AUOLo/img/ellipse-9-1.svg",
        "https://c.animaapp.com/mc1n4zn94AUOLo/img/ellipse-10-2.png",
        "https://c.animaapp.com/mc1n4zn94AUOLo/img/ellipse-11-1.png",
      ],
      position: { top: "272px", left: "40px" },
    },
    {
      name: "App",
      icons: [
        "https://c.animaapp.com/mc1n4zn94AUOLo/img/ellipse-8-1.png",
        "https://c.animaapp.com/mc1n4zn94AUOLo/img/ellipse-9.svg",
        "https://c.animaapp.com/mc1n4zn94AUOLo/img/ellipse-10-3.png",
      ],
      position: { top: "272px", left: "440px" },
    },
    {
      name: "IA",
      icons: [
        "https://c.animaapp.com/mc1n4zn94AUOLo/img/claude-ia-1.svg",
        "https://c.animaapp.com/mc1n4zn94AUOLo/img/react.svg",
        "https://c.animaapp.com/mc1n4zn94AUOLo/img/react.svg",
      ],
      position: { top: "276px", left: "864px" },
      hasIAIcon: true,
    },
  ];

  return (
    <section className="relative w-[80%] max-w-[1500px] px-6 md:px-16 py-16 flex flex-col">
      <img
        className="absolute translate-y-[125%] translate-x-[-50%] top-0 left-0 w-[80px] h-[80px] object-cover"
        alt="Ia ema"
        src="https://c.animaapp.com/mc1n4zn94AUOLo/img/ia---ema-2-5.png"
      />

        <div className="flex flex-col gap-8">
            <h2 className="mt-12 text-center md:text-left w-full font-['Roboto',Helvetica] font-black text-white text-[2.5rem]">
              Notre stack technique
            </h2>
        <div className="bg-main-gradient-reverse p-[0.1rem] rounded-lg self-center w-full">
          <div className="flex bg-primary rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
          {techCategories.map((category, index) => (
            <div
              key={index}
              style={{
                top: category.position.top,
                left: category.position.left,
              }}
            >
              <div className="bg-[linear-gradient(92deg,rgba(226,169,36,1)_0%,rgba(243,99,28,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-['Roboto',Helvetica] font-black text-transparent text-[1.5rem] mb-4 relative">
                {category.name === "IA" && (
                  <img
                    className="w-4 h-4 absolute top-0 left-0 object-cover"
                    alt="Ia ema"
                    src="https://c.animaapp.com/mc1n4zn94AUOLo/img/ia---ema-2-5.png"
                  />
                )}
                {category.name}
              </div>

              <div className="flex flex-wrap gap-2.5">
                {category.icons.slice(0, 4).map((icon, iconIndex) => (
                  <img
                    key={`${index}-${iconIndex}`}
                    className="w-[50px] h-[50px]"
                    alt={`${category.name} technology icon ${iconIndex + 1}`}
                    src={icon}
                  />
                ))}
              </div>

              {category.hasSecondRow && category.icons.length > 4 && (
                <div className="flex flex-wrap gap-2.5 mt-2.5">
                  {category.icons.slice(4).map((icon, iconIndex) => (
                    <img
                      key={`${index}-second-row-${iconIndex}`}
                      className="w-[50px] h-[50px]"
                      alt={`${category.name} technology icon ${iconIndex + 5}`}
                      src={icon}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        </div>
          </div>

      <div className="flex ml-[12rem] 2xl:ml-[20rem]">
        <img
          className="w-[301px] h-80"
          alt="Vector graphic"
          src="https://c.animaapp.com/mc1n4zn94AUOLo/img/vector-2-1.svg"
        />
      </div>
      <h2 className="text-[2rem] font-['Roboto',Helvetica] font-black text-center">Notre technique au service des vos <span className="bg-linear-to-r from-gradient-one to-blue-500 bg-clip-text text-transparent">idées</span></h2>
    </section>
  );
};
