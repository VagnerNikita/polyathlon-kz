import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const next = i18n.language === "ru" ? "kz" : "ru";
    i18n.changeLanguage(next);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="text-white hover:text-gray-300 transition px-3"
    >
      🌐 {i18n.language.toUpperCase()}
    </button>
  );
}
