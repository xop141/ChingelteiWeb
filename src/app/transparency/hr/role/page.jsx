"use client";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50 px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Албан тушаалын тодорхойлолт
      </h1>

      <a
        href="/downloads/alban_tushaaliin_todorhoilolt.pdf"
        download
        className="bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:bg-blue-800 transition-colors text-center"
      >
        Татах
      </a>
    </div>
  );
};

export default page;
    