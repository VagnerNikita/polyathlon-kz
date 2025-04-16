import React, { useState } from "react";
import newsData from "../data/newsData";
import NewsCard from "../components/NewsCard";

const categories = ["Все", "Соревнования", "Объявления", "Архив"];

const AllNewsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("Все");

  const filteredNews =
    selectedCategory === "Все"
      ? newsData
      : newsData.filter((item) => item.category === selectedCategory);

  return (
    <section className="max-w-screen-xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Все новости</h1>

      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full font-medium transition ${
              selectedCategory === cat
                ? "bg-[#0D2C48] text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {filteredNews.map((item) => (
          <NewsCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default AllNewsPage;
