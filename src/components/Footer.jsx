import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1E1E1E] text-white py-10" id="contacts">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Колонка 1: О федерации */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Федерация полиатлона</h3>
          <p className="text-sm text-gray-400">
            Федерация полиатлона Республики Казахстан продвигает здоровый образ
            жизни и развитие комплексных видов спорта по всей стране.
          </p>
        </div>

        {/* Колонка 2: Навигация */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Навигация</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#about" className="hover:text-white">О нас</a></li>
            <li><a href="#news" className="hover:text-white">Новости</a></li>
            <li><a href="#calendar" className="hover:text-white">Календарь</a></li>
            <li><a href="#docs" className="hover:text-white">Документы</a></li>
            <li><a href="#partners" className="hover:text-white">Партнёры</a></li>
          </ul>
        </div>

        {/* Колонка 3: Контакты */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Контакты</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Адрес: г. Астана, ул. Спортивная, 10</li>
            <li>Телефон: +7 (7172) 123-456</li>
            <li>Email: info@polyathlon.kz</li>
            <li>График: Пн-Пт 9:00 – 18:00</li>
          </ul>
        </div>
      </div>

      {/* Нижняя строка */}
      <div className="text-center text-sm text-gray-500 mt-10">
        © {new Date().getFullYear()} Федерация полиатлона РК. Все права защищены.
      </div>
    </footer>
  );
};

export default Footer;
