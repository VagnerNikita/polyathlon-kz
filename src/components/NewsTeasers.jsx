import n1 from "../assets/news/1.jpg";
import n2 from "../assets/news/2.jpg";
import n3 from "../assets/news/3.jpg";
import n1 from "../assets/news/1.jpg";
import n2 from "../assets/news/2.jpg";
import n3 from "../assets/news/3.jpg";
import n4 from "../assets/news/4.jpg";

const news = [
  { title: "Чемпионат по зимнему полиатлону", image: n1, date: "10 марта 2025" },
  { title: "Итоги летнего кубка", image: n2, date: "9 декабря 2024" },
  { title: "Президентский тест", image: n3, date: "22 августа 2024" },
  { title: "Летний чемпионат среди ветеранов", image: n4, date: "20 июня 2024" },
];

const items = [
  { img: n1, date: "10 марта 2025", title: "Чемпионат по зимнему полиатлону в Усть‑Каменогорске" },
  { img: n2, date: "9 декабря 2024", title: "Итоги летнего кубка 2024 года" },
  { img: n3, date: "22 августа 2024", title: "Президентский тест: результаты первого этапа" },
];

export default function NewsTeasers() {
  return (
    <section id="news" className="py-16 max-w-6xl mx-auto px-4">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-semibold">Последние новости</h2>
        <a href="#" className="text-blue-600 hover:underline">
          Все новости
        </a>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {items.map(({ img, date, title }) => (
          <article key={title} className="card" data-aos="fade-up">
            <img src={img} alt={title} className="rounded-md mb-4 h-40 w-full object-cover" />
            <p className="text-sm text-gray-500">{date}</p>
            <h3 className="font-semibold">{title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
