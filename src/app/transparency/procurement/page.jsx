"use client";
import React from "react";
import { Download } from "lucide-react";

const page = () => {
  const pdf = {
    name: "Бараа худалдан авах ТЖББ",
    file: "/files/TJBB.pdf",
  };

  return (
    <div className="max-w-3xl mx-auto p-10 font-sans">
      <h1 className="text-3xl font-bold text-gray-800 mb-10 border-b pb-4">
        Татаж авах
      </h1>

      <div className="bg-white border rounded-2xl shadow-sm hover:shadow-md transition p-8 flex flex-col items-center">
        {/* PDF Icon */}
        <div className="w-20 h-20 bg-red-100 text-red-600 flex items-center justify-center rounded-xl mb-6">
          <span className="text-2xl font-bold">PDF</span>
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold text-center text-gray-800 mb-6">
          {pdf.name}
        </h2>

        {/* Download Button */}
        <a
          href={pdf.file}
          download
          className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
        >
          <Download size={18} />
          Татах
        </a>
      </div>
    </div>
  );
};

export default page;
