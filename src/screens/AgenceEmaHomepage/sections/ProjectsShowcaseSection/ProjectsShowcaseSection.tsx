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
    <section className="relative w-[90%] sm:w-[80%] max-w-[1500px] px-6 md:px-16 py-16 flex flex-col items-center">

         <img
          className="absolute translate-y-[100%] md:translate-y-[70%] translate-x-[-50%] top-0 left-0 w-[60px] md:w-[80px] aspect-square object-cover"
          alt="Ia ema"
          src="https://c.animaapp.com/mc1n4zn94AUOLo/img/ia---ema-2-5.png"
            />
          <h2 className="font-black text-white text-[2.5rem] w-full px-4 [font-family:'Roboto',Helvetica] self-start">
            Réalisations
          </h2>

        {/* Project cards */}
        <div className="flex flex-col mt-8 w-full max-w-[1000px]">
          <img className="w-[90%] md:w-[350px] self-center" src="/project-vector1.png"/>
          <div className="flex gap-6">
          <img className="w-[550px] rounded-lg" src="/p2.png"/>
          <div className="bg-white rounded-full w-fit bg-main-gradient p-[0.1rem] h-fit md:block hidden">
            <div className="bg-white px-5 py-1 rounded-full"><span className="bg-main-gradient !bg-clip-text text-transparent text-2xl font-bold">WEB</span></div>
            </div>
          </div>
          <img className="w-[90%] md:w-[500px] self-center" src="/project-vector.png"/>
          <div className="self-end flex flex-row-reverse gap-3">
          <img className="w-[550px] rounded-lg" src="/p1.png"/>
           <div className="bg-white rounded-full w-fit bg-main-gradient p-[0.1rem] h-fit md:block hidden">
            <div className="bg-white px-5 py-1 rounded-full"><span className="bg-main-gradient !bg-clip-text text-transparent text-2xl font-bold">SAAS</span></div>
            </div>
          </div>
          <img
  className="w-[90%] md:w-[500px] self-center"
  src="/project-vector.png"
  style={{ transform: 'rotateY(180deg)' }}
/>
<div className="flex gap-6">
          <img className="w-[550px] rounded-lg" src="/p3.png"/>
          <div className="bg-white rounded-full w-fit bg-main-gradient p-[0.1rem] h-fit md:block hidden">
            <div className="bg-white px-5 py-1 rounded-full"><span className="bg-main-gradient !bg-clip-text text-transparent text-2xl font-bold">APP</span></div>
            </div>
          </div>
        </div>
    </section>
  );
};
