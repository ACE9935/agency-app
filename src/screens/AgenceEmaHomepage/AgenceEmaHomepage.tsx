import React, { JSX } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";
import { AboutUsSection } from "./sections/AboutUsSection";
import { ClientTestimonialsSection } from "./sections/ClientTestimonialsSection";
import { FrequentlyAskedQuestionsSection } from "./sections/FrequentlyAskedQuestionsSection";
import { MainFooterSection } from "./sections/MainFooterSection";
import { OurServicesSection } from "./sections/OurServicesSection";
import { ProjectsShowcaseSection } from "./sections/ProjectsShowcaseSection";
import { ServicesOverviewSection } from "./sections/ServicesOverviewSection";
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
      className="bg-[#191919] flex flex-col justify-center w-full"
      data-model-id="20:8"
    >

          <Border/>

          {/* Hero Section */}
          <section className="w-full flex lg:flex-row flex-col gap-12 justify-between mt-[220px] p-12">
              {/* Left side with CTA */}
              <div className="flex flex-col gap-12 w-full max-w-[40rem]">
                <h1 className="text-8xl font-bold"> VOTRE <span className="bg-main-gradient !bg-clip-text text-transparent">MVP</span> EN MOINS DE 30 JOURS.</h1>
                <button className="bg-main-gradient py-3 w-fit text-xl font-bold rounded-2xl px-14 glow cursor-pointer hover:scale-105 transition-all">Échanger avec nous</button>
              </div>

              {/* Right side with illustration */}
              <div className="relative">
                <div className="relative">

                  <img
                    className="absolute w-[407px] h-[254px] top-[27rem] left-[194px]"
                    alt="Vector"
                    src="https://c.animaapp.com/mc1n4zn94AUOLo/img/vector-3.svg"
                  />

                  <Card className="relative w-full lg:w-[50rem] aspect-[1.8] bg-white rounded-[30px]">
                    <CardContent className="p-0"></CardContent>
                  </Card>

                  <div className="absolute w-[380px] h-[100px] top-[40rem] left-0 flex">
                   {aiTools.map((tool, index) => (
                    <img
                     key={index}
                     className={`w-[100px] h-[100px] ${index !== 0 ? '-ml-6' : ''}`}
                     alt={tool.alt}
                     src={tool.src}
                    />
                    ))}
                  </div>

                </div>
              </div>
          </section>

          {/* Reduce deployment time section */}
          <section className="w-full flex justify-center mt-[25rem]">
            <div className="relative w-full max-w-[1146px] py-16">
              <h2 className="text-[50px] font-black text-white text-center mb-[3rem]">
                Réduisez vos temps de déploiement avec l&apos;ia.
              </h2>

              <div className="flex flex-col items-center">
                <div className="flex">
                    <img
                      className="w-[301px] h-[333px]"
                      alt="Vector"
                      src="https://c.animaapp.com/mc1n4zn94AUOLo/img/vector-2.svg"
                    />
                    <img
                      className="w-[302px] h-[333px]"
                      alt="Vector"
                      src="https://c.animaapp.com/mc1n4zn94AUOLo/img/vector-1.svg"
                    />
                    </div>
                  <div className="flex w-full justify-around gap-6">
                  <img
                    className="w-[462px] h-[330px] object-cover border border-amber-400 rounded-xl"
                    alt="Design"
                    src="https://c.animaapp.com/mc1n4zn94AUOLo/img/design-1.png"
                  />
                  

                  <img
                    className="w-[465px] h-[332px] object-cover border border-white rounded-xl"
                    alt="Dev"
                    src="https://c.animaapp.com/mc1n4zn94AUOLo/img/dev-1.png"
                  />
                  </div>
            </div>
            </div>
          </section>

          {/* Client logos section */}
          <section className="w-full flex justify-center mt-16">
            <div className="relative w-full max-w-[1681px] py-16">
              <h2 className="text-[45px] font-black text-white mb-16 text-center">
                Ils nous font confiance
              </h2>

              <div className="flex flex-wrap justify-center items-center gap-8">
                {clientLogos.map((logo, index) => (
                  <div key={index} className="relative">
                    <div className="absolute w-[359px] h-[421px] top-[-161px] left-[52px] bg-[#191919] rounded-[179.5px/210.5px] blur-[50px] -z-10" />
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
          <ServicesOverviewSection />
          <TechnologyStackSection />
          <FrequentlyAskedQuestionsSection />
          <ClientTestimonialsSection />
          <MainFooterSection />
        </div>
  );
};
