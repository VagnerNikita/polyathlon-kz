import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // PNG логотип

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/">
            <img src={logo} alt="Polyathlon" className="h-12 w-auto" />
          </Link>
          <nav className="flex space-x-6 text-sm font-medium">
            <Link to="/" className="text-[#0D2C48] hover:text-blue-600 transition">
              Главная
            </Link>
            <a href="#news" className="text-[#0D2C48] hover:text-blue-600 transition">
              Новости
            </a>
            <Link to="/calendar" className="text-[#0D2C48] hover:text-blue-600 transition">
              Календарь
            </Link>
            <a href="#docs" className="text-[#0D2C48] hover:text-blue-600 transition">
              Документы
            </a>
            <a href="#partners" className="text-[#0D2C48] hover:text-blue-600 transition">
              Партнёры
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
