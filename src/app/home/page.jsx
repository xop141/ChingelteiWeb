import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
const page = () => {
  return (
    <div className="min-h-screen bg-gray-50">
    

      {/* Hero / Banner */}
      <div className="bg-black w-full h-[400px]"></div>

      {/* News Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
          Сүүлийн мэдээ
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="rounded-xl border overflow-hidden bg-white shadow-lg
             transform transition-all duration-300 ease-in-out
             hover:scale-105 hover:shadow-2xl cursor-pointer"
            >
              {/* Image / Thumbnail */}
              <div className="bg-black w-full h-[200px] object-cover transition-all duration-300 ease-in-out"></div>

              {/* Content */}
              <div className="p-4 flex flex-col gap-2">
                <span className="text-sm text-gray-500 transition-colors duration-300 ease-in-out">
                  2025-09-26
                </span>
                <p className="text-md font-semibold text-gray-800 hover:text-blue-700 transition-colors duration-300 ease-in-out">
                  ХОРООДЫН НИЙГМИЙН АЖИЛТНУУДЫГ ЧАДАВХЖУУЛЛАА
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default page;
