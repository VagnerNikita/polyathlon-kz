import React from "react";
import heroImg from "../assets/hero.jpg";

const Hero = () => {
  return (
    <section
      id="about"
      className="relative w-full h-[90vh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${heroImg})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60" />

      <div className="relative z-10 text-center px-4 text-white max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 drop-shadow-md">
          Федерация Полиатлона Республики Казахстан
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 drop-shadow-md">
          Развитие и популяризация полиатлона — комплексного вида спорта,
          сочетающего выносливость, силу и меткость.
        </p>
        <a
          href="#calendar"
          className="inline-block bg-white text-black px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-200 transition"
        >
          Смотреть календарь событий
        </a>
      </div>
    </section>
  );
};

export default Hero;
