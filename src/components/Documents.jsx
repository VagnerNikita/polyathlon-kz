// src/components/Documents.jsx
import { HiOutlineDocumentText, HiArrowDownTray } from "react-icons/hi2";

const files = [
  { name: "Положение о соревнованиях", file: "/files/polozhenie.pdf" },
  { name: "Устав федерации", file: "/files/ustav.pdf" },
  { name: "Регламент мероприятий", file: "/files/reglament.docx" },
  { name: "Бюллетень", file: "/files/byulleten.pdf" },
];

export default function Documents() {
  return (
    <section id="docs" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Документы</h2>
        <ul className="space-y-4">
          {files.map((doc, index) => (
            <li
              key={index}
              className="flex items-center justify-between bg-gray-50 border border-gray-200 p-5 rounded-xl hover:shadow-md transition"
            >
              <div className="flex items-center gap-4">
                <HiOutlineDocumentText className="text-3xl text-blue-500" />
                <span className="text-lg">{doc.name}</span>
              </div>
              <a
                href={doc.file}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-600 hover:underline hover:text-blue-800"
              >
                <HiArrowDownTray className="text-xl" />
                Скачать
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
