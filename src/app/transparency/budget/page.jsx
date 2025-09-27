"use client";
import React from "react";
import { Download } from "lucide-react";

const page = () => {
   const pdfs = [
    { name: "И-Хуулга", file: "/files/И-Хуулга.pdf" },
    { name: "Төсөв 2025", file: "/files/Tosov-2025.pdf" },
    { name: "Санхүүгийн тайлан", file: "/files/Sankhuugiin tailan.pdf" },
  ];

  return (
    <div className="max-w-4xl mx-auto p-10 font-sans">
      <h1 className="text-3xl font-bold text-gray-800 mb-10 border-b pb-4">
        Санхүүгийн тайлангууд
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {pdfs.map((pdf, i) => (
          <div
            key={i}
            className="bg-white border rounded-2xl shadow-sm hover:shadow-md transition p-6 flex flex-col justify-between"
          >
            {/* PDF Icon */}
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-red-100 text-red-600 flex items-center justify-center rounded-xl">
                <span className="text-2xl font-bold">PDF</span>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-lg font-semibold text-center text-gray-800 mb-6">
              {pdf.name}
            </h2>

            {/* Download Button */}
            <a
              href={pdf.file}
              download
              className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
            >
              <Download size={18} />
              Татах
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
