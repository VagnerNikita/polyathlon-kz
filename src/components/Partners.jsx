import React from "react";
import kazyna from "../assets/partners/kazyna.png";
import vest from "../assets/partners/vest.png";
import qas from "../assets/partners/qas.png";
import sumy from "../assets/partners/sumy.png";
import hilton from "../assets/partners/hilton.png";

const Partners = () => {
  const logos = [kazyna, vest, qas, sumy, hilton];

  return (
    <section className="bg-[#0D2C48] py-16" id="partners">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-white text-2xl font-semibold mb-12 tracking-wide">
          ПАРТНЁРЫ
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {logos.map((logo, idx) => (
            <img
              key={idx}
              src={logo}
              alt={`Партнёр ${idx + 1}`}
              className="h-14 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
