import React from "react";

const NewsCard = ({ item }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <p className="text-sm text-gray-500">{item.date} — {item.category}</p>
        <h3 className="text-lg font-semibold mt-1">{item.title}</h3>
        <p className="text-gray-600 text-sm mt-1">{item.description}</p>
      </div>
    </div>
  );
};

export default NewsCard;
