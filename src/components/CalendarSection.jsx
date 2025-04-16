const events = [
  {
    date: "15–17 февраля 2025",
    place: "Щучинск",
    name: "Зимний чемпионат Казахстана (стрельба, лыжи, подтягивание)",
  },
  {
    date: "12–14 апреля 2025",
    place: "Костанай",
    name: "Кубок РК по летнему полиатлону (плавание, бег, стрельба)",
  },
  {
    date: "3–5 июля 2025",
    place: "Алматы",
    name: "Международный турнир «Alatau Polyathlon Open»",
  },
];

export default function CalendarSection() {
  return (
    <section id="calendar" className="py-16 bg-slate-50">
      <h2 className="text-center text-3xl font-semibold mb-10">
        Календарь соревнований 2025
      </h2>

      <div className="max-w-4xl mx-auto divide-y divide-slate-200">
        {events.map(({ date, place, name }) => (
          <div key={name} className="py-6 flex flex-col md:flex-row md:items-center gap-4" data-aos="fade-up">
            <div className="w-48 shrink-0">
              <p className="font-medium">{date}</p>
              <p className="text-sm text-slate-500">{place}</p>
            </div>
            <p className="flex-1">{name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
