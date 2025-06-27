import React, { JSX } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import Logo from "../../../../components/Logo";

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
    <section className="relative w-[90%] sm:w-[80%] max-w-[1500px] px-6 md:px-16 py-16 flex flex-col">

      <img
        className="absolute translate-y-[180%] md:translate-y-[125%] translate-x-[-50%] top-0 left-0 w-[60px] md:w-[80px] aspect-square object-cover"
        alt="Ia ema"
        src="https://c.animaapp.com/mc1n4zn94AUOLo/img/ia---ema-2-5.png"
      />
            <h2 className="mt-12 px-4 flex items-center gap-4 w-full font-['Roboto',Helvetica] font-black text-white text-[2.5rem]">
              FAQ
            </h2>

       <div className="flex lg:flex-row gap-6 flex-col justify-between pt-[5rem]">
        <img src="/question_mark.png" className="h-fit w-full max-w-[20rem] self-center lg:self-start"/>

      {/* Right side with FAQ accordion */}
      <div className="">
        <Accordion
          type="single"
          collapsible
          defaultValue="item-0"
          className="w-full"
        >
          {faqItems.map((item, index) => (
            <div className="bg-main-gradient-reverse mb-6 rounded-xl p-[0.1rem]">
            <AccordionItem
              key={`item-${index}`}
              value={`item-${index}`}
              className="bg-primary rounded-xl"
            >
              <AccordionTrigger className="px-6 py-6 cursor-pointer font-['Roboto',Helvetica] font-black text-white text-xl md:text-2xl leading-[30px]">
                {item.question}
              </AccordionTrigger>
              {item.answer && (
                <AccordionContent className="px-6 font-['Roboto',Helvetica] font-normal text-white text-lg leading-[22px]">
                  {item.answer}
                </AccordionContent>
              )}
            </AccordionItem>
          </div>))}
        </Accordion>
      </div>
      </div>
    </section>
  );
};
