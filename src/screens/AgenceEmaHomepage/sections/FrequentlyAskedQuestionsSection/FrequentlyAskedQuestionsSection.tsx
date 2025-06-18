import React, { JSX } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";

export const FrequentlyAskedQuestionsSection = (): JSX.Element => {
  // FAQ data for mapping
  const faqItems = [
    {
      question: "Est-ce que le code est de bonne qualité ?",
      answer:
        "L'utilisation de l'intelligence artificielle n'est pas la finalité, nous l'utilisons pour accélérer les processus de création. Mais la structure technique est stable, scalable et universelle. Une documentation technique sera également livrée à la demande, pour contribuer à la passation du projet.",
      defaultOpen: true,
    },
    {
      question: "Comment fonctionne la facturation ?",
      answer: "",
      defaultOpen: false,
    },
    {
      question: "Quelles sont les garanties ?",
      answer: "",
      defaultOpen: false,
    },
    {
      question: "Quelles ia utilise-t'on ?",
      answer: "",
      defaultOpen: false,
    },
    {
      question: "À quel stade doit-on vous contacter ?",
      answer: "",
      defaultOpen: false,
    },
  ];

  return (
    <section className="flex flex-row py-16 relative w-full">
      {/* Left side with question mark graphic */}
      <div className="relative flex-1">
        <img
          className="w-[150px] h-[150px] object-cover"
          alt="Ia ema"
          src="https://c.animaapp.com/mc1n4zn94AUOLo/img/ia---ema-2-5.png"
        />

        <h2 className="mt-[50px] ml-[162px] font-['Roboto',Helvetica] font-black text-white text-[45px]">
          FAQ
        </h2>

        <div className="relative mt-[35px] ml-[126px] w-[438px] h-[481px]">
          <div className="relative h-[483px]">
            <div className="absolute w-[197px] top-[148px] left-[127px] bg-[linear-gradient(180deg,rgba(255,82,209,1)_0%,rgba(243,99,28,1)_33%,rgba(0,195,217,1)_66%,rgba(255,193,37,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-['Roboto',Helvetica] font-black text-transparent text-[400px] leading-[315px] whitespace-nowrap">
              ?
            </div>

            {/* Vector decorative elements */}
            <img
              className="absolute w-7 h-[98px] top-[66px] left-[151px]"
              alt="Vector"
              src="https://c.animaapp.com/mc1n4zn94AUOLo/img/vector-13.svg"
            />
            <img
              className="absolute w-[138px] h-[59px] top-[131px] left-[300px]"
              alt="Vector"
              src="https://c.animaapp.com/mc1n4zn94AUOLo/img/vector-14.svg"
            />
            <img
              className="absolute w-[142px] h-16 top-[145px] left-0"
              alt="Vector"
              src="https://c.animaapp.com/mc1n4zn94AUOLo/img/vector-15.svg"
            />
            <img
              className="absolute w-[30px] h-[163px] top-0 left-[252px]"
              alt="Vector"
              src="https://c.animaapp.com/mc1n4zn94AUOLo/img/vector-16.svg"
            />
            <img
              className="absolute w-[137px] h-[100px] top-[230px] left-[250px]"
              alt="Vector"
              src="https://c.animaapp.com/mc1n4zn94AUOLo/img/vector-17.svg"
            />
            <img
              className="absolute w-[124px] h-[52px] top-[236px] left-[98px]"
              alt="Vector"
              src="https://c.animaapp.com/mc1n4zn94AUOLo/img/vector-18.svg"
            />
            <img
              className="absolute w-[87px] h-[85px] top-[332px] left-[110px]"
              alt="Vector"
              src="https://c.animaapp.com/mc1n4zn94AUOLo/img/vector-19.svg"
            />
            <img
              className="absolute w-[90px] h-[42px] top-[442px] left-[234px]"
              alt="Vector"
              src="https://c.animaapp.com/mc1n4zn94AUOLo/img/vector-20.svg"
            />
            <img
              className="absolute w-20 h-[34px] top-[383px] left-[254px]"
              alt="Vector"
              src="https://c.animaapp.com/mc1n4zn94AUOLo/img/vector-21.svg"
            />
          </div>
        </div>
      </div>

      {/* Right side with FAQ accordion */}
      <div className="flex-1 pt-[179px]">
        <Accordion
          type="single"
          collapsible
          defaultValue="item-0"
          className="w-[650px]"
        >
          {faqItems.map((item, index) => (
            <AccordionItem
              key={`item-${index}`}
              value={`item-${index}`}
              className="mb-6 rounded-xl"
            >
              <AccordionTrigger className="px-6 py-6 font-['Roboto',Helvetica] font-black text-white text-3xl leading-[30px]">
                {item.question}
              </AccordionTrigger>
              {item.answer && (
                <AccordionContent className="px-6 font-['Roboto',Helvetica] font-normal text-white text-lg leading-[22px]">
                  {item.answer}
                </AccordionContent>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
