// src/pages/HomePage.jsx
import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import News from "../components/News";
import Calendar from "../components/Calendar";
import Documents from "../components/Documents";
import Partners from "../components/Partners";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <News />
      <Calendar />
      <Documents />
      <Partners />
      <Footer />
    </>
  );
}
