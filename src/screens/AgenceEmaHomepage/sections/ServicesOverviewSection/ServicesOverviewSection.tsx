import React, { JSX } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const ServicesOverviewSection = (): JSX.Element => {
  const webDevServices = [
    "Gagner du temps",
    "Économiser vos ressources",
    "Itérer plus facilement",
    "Casser les limites tech",
  ];

  return (
    <section className="w-full py-16 relative">
      <div className="container mx-auto flex flex-col md:flex-row items-start gap-8">
        <div className="flex-1">
          <div className="relative">
            <img
              className="w-[150px] h-[150px] object-cover"
              alt="Ia ema"
              src="https://c.animaapp.com/mc1n4zn94AUOLo/img/ia---ema-2-5.png"
            />
            <h2 className="mt-12 font-['Roboto',Helvetica] font-black text-white text-[45px]">
              Notre service
            </h2>
          </div>
        </div>

        <div className="flex-1 mt-8 md:mt-16">
          <Card className="w-full max-w-[400px] h-[510px] rounded-xl border-none">
            <CardContent className="p-10">
              <h3 className="text-[35px] font-['Roboto',Helvetica] font-black text-center whitespace-nowrap bg-[linear-gradient(90deg,rgba(255,82,209,1)_0%,rgba(243,99,28,1)_100%)] bg-clip-text text-transparent">
                Développement Web
              </h3>

              <div className="mt-6 font-['Roboto',Helvetica] font-black text-white text-xl">
                <p>Nous avons redéfini les processus de développement web...</p>
                <p className="mt-6">Pour :</p>

                <ul className="mt-6 space-y-1">
                  {webDevServices.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>

                <p className="mt-6">
                  Et rendre vos idées réelles vitesse éclair.
                </p>
              </div>

              <div className="mt-10 flex justify-center">
                <Button className="w-[200px] h-[50px] rounded-[30px] font-['Roboto',Helvetica] font-black text-white text-[25px] shadow-[3px_3px_25px_#ff51d099]">
                  Découvrir
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
