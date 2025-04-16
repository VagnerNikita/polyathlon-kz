import React from "react";
import Calendar from "../components/Calendar";
import Footer from "../components/Footer";

const CalendarPage = () => {
  return (
    <>
      <section className="pt-32 pb-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-[#0D2C48] mb-10">
            Календарь событий
          </h1>
          <p className="text-gray-600 mb-10">
            Здесь вы можете ознакомиться со всеми мероприятиями текущего года.
          </p>
        </div>
        <Calendar showAll />
      </section>
      <Footer />
    </>
  );
};

export default CalendarPage;
