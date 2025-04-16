import React from "react";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Логотип */}
          <a href="#" className="flex items-center">
            <img src={logo} alt="Polyathlon Logo" className="h-12" />
            <span className="ml-3 font-bold text-lg text-gray-800">
              Polyathlon KZ
            </span>
          </a>

          {/* Навигация */}
          <nav className="hidden md:flex space-x-6">
            <a href="#about" className="text-gray-700 hover:text-blue-600">О нас</a>
            <a href="#news" className="text-gray-700 hover:text-blue-600">Новости</a>
            <a href="#calendar" className="text-gray-700 hover:text-blue-600">Календарь</a>
            <a href="#docs" className="text-gray-700 hover:text-blue-600">Документы</a>
            <a href="#partners" className="text-gray-700 hover:text-blue-600">Партнёры</a>
            <a href="#contacts" className="text-gray-700 hover:text-blue-600">Контакты</a>
          </nav>

          {/* Переключение языка */}
          <div className="flex items-center space-x-3">
            <button className="text-sm font-medium text-blue-600 hover:underline">RU</button>
            <span className="text-gray-400">|</span>
            <button className="text-sm font-medium text-gray-600 hover:underline">KZ</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
