import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/news/1.jpg";
import img2 from "../assets/news/2.jpg";
import img3 from "../assets/news/3.jpg";
import NewsCard from "./NewsCard";

const dummyNews = [
  {
    id: "1",
    title: "Открытие зимнего сезона",
    description: "Церемония открытия прошла в Петропавловске.",
    date: "01.12.2024",
    imageUrl: img1,
    category: "Соревнования",
  },
  {
    id: "2",
    title: "Новый рекорд по лыжным гонкам",
    description: "Наш спортсмен установил новый рекорд.",
    date: "15.01.2025",
    imageUrl: img2,
    category: "Спорт",
  },
  {
    id: "3",
    title: "Полиатлон — что это?",
    description: "Рассказываем о дисциплинах полиатлона.",
    date: "10.02.2025",
    imageUrl: img3,
    category: "Образование",
  },
];

const News = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-10 text-center">Последние новости</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {dummyNews.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
        <div className="text-center mt-6">
          <Link to="/news" className="text-blue-600 hover:underline">
            Смотреть все
          </Link>
        </div>
      </div>
    </section>
  );
};

export default News;
