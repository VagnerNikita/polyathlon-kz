import React from "react";

const events = [
  { date: "15.04.2025", title: "Весенний чемпионат" },
  { date: "10.06.2025", title: "Соревнования среди юниоров" },
  { date: "22.08.2025", title: "Открытый турнир" },
  { date: "01.10.2025", title: "Финал Кубка Казахстана" },
];

const Calendar = ({ showAll }) => {
  const displayEvents = showAll ? events : events.slice(0, 3);

  return (
    <section className="bg-gray-50 py-14 px-4" id="calendar">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-[#0D2C48] mb-8">Календарь событий</h2>
        <ul className="space-y-6">
          {displayEvents.map((event, idx) => (
            <li
              key={idx}
              className="bg-white shadow-md rounded-lg p-5 border-l-4 border-[#0D2C48] text-left"
            >
              <p className="text-sm text-gray-500 mb-1">{event.date}</p>
              <p className="text-lg font-medium text-gray-800">{event.title}</p>
            </li>
          ))}
        </ul>

        {!showAll && (
          <div className="mt-10">
            <a
              href="/calendar"
              className="inline-block px-6 py-2 bg-[#0D2C48] text-white rounded hover:bg-blue-800 transition"
            >
              Смотреть все события
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default Calendar;
