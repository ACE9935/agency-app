import React, { JSX } from "react";

export const OurServicesSection = (): JSX.Element => {
  return (
        <section className="relative w-[80%] max-w-[1500px] px-6 md:px-16 py-16 flex flex-col">
            <img
              className="absolute translate-y-[125%] translate-x-[-50%] top-0 left-0 w-[80px] h-[80px] object-cover"
              alt="Ia ema"
              src="https://c.animaapp.com/mc1n4zn94AUOLo/img/ia---ema-2-5.png"
                />
            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-4">
                <h2 className="mt-12 text-center md:text-left w-full font-['Roboto',Helvetica] font-black text-white text-[2.5rem]">
                  Notre service
                </h2>
              </div>
              
              <div className="p-[0.1rem] rounded-lg bg-main-gradient-reverse max-w-[25rem] self-center mt-[4rem]">
                <div className="bg-primary p-6 rounded-lg flex flex-col gap-5">
                  <h3 className="text-[2rem] font-['Roboto',Helvetica] font-black text-center bg-[linear-gradient(90deg,rgba(255,82,209,1)_0%,rgba(243,99,28,1)_100%)] bg-clip-text text-transparent">
                    Développement Web
                  </h3>
                  <div className="font-['Roboto',Helvetica] font-black flex flex-col gap-3">
                    <p>Nous avons redéfini les processus de développement web...</p>
                    <p>Pour:</p>
                    <ul className="list-disc ml-8">
                      <li>Gagner du temps</li>
                      <li>Économiser vos ressources</li>
                      <li>Itérer plus facilement</li>
                      <li>Casser les limites tech</li>
                    </ul>
                    <p>Et rendre vos idées réelles vitesse éclair.</p>
                  </div>
                  <button className="bg-main-gradient py-2 w-fit text-lg font-bold rounded-2xl px-8 glow cursor-pointer hover:scale-105 transition-all">Découvrir</button>
                  </div>
            </div>
          </div>
        </section>
  );
};
