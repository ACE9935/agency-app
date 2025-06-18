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
      className="bg-[#191919] flex flex-row justify-center w-full"
      data-model-id="20:8"
    >
      <div className="bg-[#191919] overflow-hidden w-full relative">
        {/* Grid lines */}
        <div className="relative w-full">
          <Separator className="absolute w-px h-full top-0 left-[300px]" />
          <Separator className="absolute w-px h-full top-0 left-[1620px]" />
          <Separator className="absolute w-full h-px top-[149px] left-0" />

          {/* Logo */}
          <img
            className="w-[150px] h-[150px] absolute top-[75px] left-[225px] object-cover"
            alt="Ia ema"
            src="https://c.animaapp.com/mc1n4zn94AUOLo/img/ia---ema-2-5.png"
          />

          {/* Hero Section */}
          <section className="w-full flex justify-center mt-[220px]">
            <div className="flex flex-col md:flex-row w-full max-w-[2075px] relative">
              {/* Left side with CTA */}
              <div className="relative w-full md:w-[753px] py-16">
                <div className="relative w-full h-full bg-[#191919] rounded-[376.5px/483.5px] border border-solid border-black blur-[100px]" />

                <div className="relative mt-[611px] mx-auto">
                  <Button className="w-[484px] h-[74px] rounded-[30px] shadow-[3px_3px_25px_#ff51d099] bg-gradient-to-r from-pink-500 to-purple-500">
                    <span className="font-black text-white text-[35px]">
                      Échanger avec nous
                    </span>
                  </Button>
                </div>
              </div>

              {/* Right side with illustration */}
              <div className="relative w-full md:w-[1231px] mt-8 md:mt-[104px]">
                <div className="relative w-full h-full">
                  <div className="absolute w-[753px] h-[863px] top-0 right-0 bg-[#191919] rounded-[376.5px/431.5px] border border-solid border-black blur-[100px]" />

                  <img
                    className="absolute w-[407px] h-[254px] top-[664px] left-[194px]"
                    alt="Vector"
                    src="https://c.animaapp.com/mc1n4zn94AUOLo/img/vector-3.svg"
                  />

                  <Card className="absolute w-[821px] h-[462px] top-[202px] left-[190px] bg-white rounded-[30px]">
                    <CardContent className="p-0"></CardContent>
                  </Card>

                  <div className="absolute w-[380px] h-[100px] top-[907px] left-0 flex">
                    {aiTools.map((tool, index) => (
                      <img
                        key={index}
                        className="w-[100px] h-[100px]"
                        style={{
                          marginLeft: index > 0 ? `${index * 10}px` : "0",
                        }}
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
          <section className="w-full flex justify-center mt-16">
            <div className="relative w-full max-w-[1146px] py-16">
              <h2 className="text-[50px] font-black text-white text-center mb-[100px]">
                Réduisez vos temps de déploiement avec l&apos;ia.
              </h2>

              <div className="flex flex-col md:flex-row gap-8">
                <div className="relative">
                  <img
                    className="w-[462px] h-[330px] object-cover"
                    alt="Design"
                    src="https://c.animaapp.com/mc1n4zn94AUOLo/img/design-1.png"
                  />
                  <Separator className="w-0.5 h-[100px] mx-auto mt-4" />
                </div>

                <div className="relative">
                  <div className="flex mb-8">
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

                  <img
                    className="w-[465px] h-[332px] object-cover"
                    alt="Dev"
                    src="https://c.animaapp.com/mc1n4zn94AUOLo/img/dev-1.png"
                  />
                  <Separator className="w-0.5 h-[100px] mx-auto mt-4" />
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
      </div>
    </div>
  );
};
