"use client";
import React from "react";
import content from "@/app/staticData/HrStrategy";

const HumanResourceStrategy = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 font-sans">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-8 border-b pb-4">
        {content.title}
      </h1>

      {/* Sections */}
      <div className="space-y-10">
        {content.sections.map((section, i) => (
          <div
            key={i}
            className="bg-white shadow-sm rounded-2xl p-6 border border-gray-100"
          >
            <h2 className="text-xl font-semibold text-blue-700 mb-4">
              {section.title}
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {section.points.map((point, j) => (
                <li key={j} className="leading-relaxed">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

 
      {/* Source Section */}
      <div className="mt-12 bg-gray-50 rounded-2xl p-6 border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          {content.source.title}
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          {content.source.details.map((item, i) => (
            <li key={i} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </div>
           {/* Download Button */}
      <div className="mt-8 flex justify-center">
        <a
          href="/files/Сургалттөлөвлөгөө.pdf" 
          download
          className="bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-blue-800 transition-colors"
        >
          Сургалтын Төлөвлөгөө татах
        </a>
      </div>

    </div>
  );
};

export default HumanResourceStrategy;
