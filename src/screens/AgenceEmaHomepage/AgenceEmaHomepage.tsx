import React, { JSX } from "react";
import { Card, CardContent } from "../../components/ui/card";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { AboutUsSection } from "./sections/AboutUsSection";
import { ClientTestimonialsSection } from "./sections/ClientTestimonialsSection";
import { FrequentlyAskedQuestionsSection } from "./sections/FrequentlyAskedQuestionsSection";
import { MainFooterSection } from "./sections/MainFooterSection";
import { OurServicesSection } from "./sections/OurServicesSection";
import { ProjectsShowcaseSection } from "./sections/ProjectsShowcaseSection";
import { TeamSection } from "./sections/TeamSection";
import { TechnologyStackSection } from "./sections/TechnologyStackSection";
import { Border } from "../../components/Index";

export const AgenceEmaHomepage = (): JSX.Element => {
  // Client logos data
  const clientLogos = [
    {
      src: "https://c.animaapp.com/mc1n4zn94AUOLo/img/plan-de-travail-1-1.png",
      alt: "Plan de travail",
    },
    {
      src: "https://c.animaapp.com/mc1n4zn94AUOLo/img/plan-de-travail-3-1.png",
      alt: "Plan de travail",
    },
    {
      src: "https://c.animaapp.com/mc1n4zn94AUOLo/img/plan-de-travail-2-1.png",
      alt: "Plan de travail",
    },
    {
      src: "https://c.animaapp.com/mc1n4zn94AUOLo/img/plan-de-travail-5-1.png",
      alt: "Plan de travail",
    },
    {
      src: "https://c.animaapp.com/mc1n4zn94AUOLo/img/smpm-1.png",
      alt: "Smpm",
    },
  ];

  // AI tools logos data
  const aiTools = [
    {
      src: "https://c.animaapp.com/mc1n4zn94AUOLo/img/lovable.svg",
      alt: "Lovable",
    },
    {
      src: "https://c.animaapp.com/mc1n4zn94AUOLo/img/figma.svg",
      alt: "Figma",
    },
    {
      src: "https://c.animaapp.com/mc1n4zn94AUOLo/img/mistral.svg",
      alt: "Mistral",
    },
    {
      src: "https://c.animaapp.com/mc1n4zn94AUOLo/img/gemini.svg",
      alt: "Gemini",
    },
    {
      src: "https://c.animaapp.com/mc1n4zn94AUOLo/img/chatgpt.svg",
      alt: "Chat GPT",
    },
    {
      src: "https://c.animaapp.com/mc1n4zn94AUOLo/img/bing-ai.svg",
      alt: "Bing ai",
    },
  ];

  return (
    <div
      className="relative bg-[#191919] flex flex-col items-center"
    > 
    <div className="absolute flex justify-center w-full h-full"><div className="max-w-[1500px] w-[80%] border-secondary border-l border-r"></div></div>

          <Border/>
          
          {/* Hero Section */}
          <section className="w-full relative">
              {/* Left side with CTA */}
              <div className="mt-[5rem] lg:mt-[10rem] p-12 w-full relative flex lg:flex-row flex-col gap-12 justify-between">
              <div className="flex flex-col lg:items-start items-center gap-12 w-full lg:max-w-[30rem] bg-showcase lg:pt-7">
                <h1 className="text-center lg:text-left text-5xl md:text-6xl font-bold"> VOTRE <span className="bg-main-gradient !bg-clip-text text-transparent">MVP</span> EN MOINS DE 30 JOURS.</h1>
                <button className="bg-main-gradient py-2 w-fit text-lg font-bold rounded-2xl px-8 glow cursor-pointer hover:scale-105 transition-all">Échanger avec nous</button>
              </div>

              {/* Right side with illustration */}
              <div className="relative">
                <div className="relative">

                  <img
                    className="absolute w-[300px] md:w-[407px] aspect-[1.8] top-[36vw] md:top-[22rem] right-[0rem] lg:left-[-10%]"
                    alt="Vector"
                    src="https://c.animaapp.com/mc1n4zn94AUOLo/img/vector-3.svg"
                  />

                  <Card className="relative w-full lg:w-[40rem] aspect-[1.8] bg-white rounded-[30px]">
                    <CardContent className="p-0"></CardContent>
                  </Card>

                  <div className="absolute w-[380px] h-[100px] top-[20rem] md:top-[35rem] left-[10vw] lg:left-[-34%] flex">
                   {aiTools.map((tool, index) => (
                    <img
                     key={index}
                     className={`w-[40px] sm:w-[70px] aspect-square ${index !== 0 ? 'ml-[-0.8rem] md:ml-[-1.5rem]' : ''}`}
                     alt={tool.alt}
                     src={tool.src}
                    />
                    ))}
                  </div>

                </div>
              </div>
              </div>
          </section>

          {/* Reduce deployment time section */}
          <section className="w-[80%] flex justify-center mt-[10rem] lg:mt-[25rem] max-w-[1500px]">
            <div className="relative w-full max-w-[1146px] py-16 p-6">
              <h2 className="text-[2rem] md:text-[2.5rem] font-black text-white text-center mb-[3rem]">
                Réduisez vos temps de déploiement avec l&apos;ia.
              </h2>

              <div className="flex flex-col items-center">
                <div className="flex">
                    <img
                      className="w-[200px] md:w-[301px] aspect-[0.9]"
                      alt="Vector"
                      src="https://c.animaapp.com/mc1n4zn94AUOLo/img/vector-2.svg"
                    />
                    <img
                      className="lg:block hidden w-[302px] aspect-[0.9]"
                      alt="Vector"
                      src="https://c.animaapp.com/mc1n4zn94AUOLo/img/vector-1.svg"
                    />
                    </div>
                  <div className="flex w-full lg:flex-row flex-col lg:justify-around gap-6">
                  <img
                    className="w-[462px] aspect-[1.5] object-cover border border-amber-400 rounded-xl"
                    alt="Design"
                    src="https://c.animaapp.com/mc1n4zn94AUOLo/img/design-1.png"
                  />

                  <img
                    className="w-[465px] aspect-[1.5] object-cover border border-white rounded-xl"
                    alt="Dev"
                    src="https://c.animaapp.com/mc1n4zn94AUOLo/img/dev-1.png"
                  />
                  </div>
            </div>
            </div>
          </section>

          {/* Client logos section */}
          <section className="w-full flex justify-center mt-16 bg-showcase relative z-[5]">
            <div className="relative w-full max-w-[1681px] py-16">
              <h2 className="text-[2.5rem] font-black text-white mb-16 text-center">
                Ils nous font confiance
              </h2>

              <div className="flex flex-wrap justify-center items-center gap-8">
                {clientLogos.map((logo, index) => (
                  <div key={index} className="relative">
                    <img
                      className="w-[250px] h-[100px] object-cover"
                      alt={logo.alt}
                      src={logo.src}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Main content sections */}
          <AboutUsSection />
          <TeamSection />
          <ProjectsShowcaseSection />
          <OurServicesSection />
          <TechnologyStackSection />
          <ClientTestimonialsSection />
          <FrequentlyAskedQuestionsSection />
          <div className="w-full h-1 border-t border-white"></div>
          <MainFooterSection />
          <Border reverse/>
        </div>
  );
};
