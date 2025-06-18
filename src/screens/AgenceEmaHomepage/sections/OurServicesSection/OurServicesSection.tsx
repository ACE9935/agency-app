import React, { JSX } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const OurServicesSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-16 flex flex-col items-center">
      <div className="container max-w-6xl relative">
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* Left side with image and title */}
          <div className="flex flex-col">
            <img
              className="w-[150px] h-[150px] object-cover"
              alt="Ia ema"
              src="https://c.animaapp.com/mc1n4zn94AUOLo/img/ia---ema-2-5.png"
            />
            <h2 className="mt-[50px] font-['Roboto',Helvetica] font-black text-white text-[45px]">
              Notre service
            </h2>
          </div>

          {/* Right side with service card */}
          <div className="mt-16 md:mt-0">
            <Card className="w-[400px] h-[510px] rounded-xl border-none">
              <CardContent className="p-0">
                <h3 className="mt-[35px] mx-[38px] bg-[linear-gradient(90deg,rgba(255,82,209,1)_0%,rgba(243,99,28,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-['Roboto',Helvetica] font-black text-[35px] text-center">
                  Développement Web
                </h3>

                <div className="w-80 mt-[35px] mx-10 font-['Roboto',Helvetica] font-black text-white text-xl">
                  Nous avons redéfini les processus de développement web...
                  <br />
                  <br />
                  Pour :<br />
                  <br />
                  Gagner du temps
                  <br />
                  Économiser vos ressources
                  <br />
                  Itérer plus facilement
                  <br />
                  Casser les limites tech
                  <br />
                  <br />
                  Et rendre vos idées réelles vitesse éclair.
                </div>

                <div className="flex justify-center mt-[40px]">
                  <Button className="w-[200px] h-[50px] rounded-[30px] shadow-[3px_3px_25px_#ff51d099] font-['Roboto',Helvetica] font-black text-white text-[25px]">
                    Découvrir
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
