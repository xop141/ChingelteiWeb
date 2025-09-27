"use client";
import React from "react";
import { Separator } from "@/components/ui/separator";
import { laws, source } from "@/app/staticData/Laws";

const page = () => {
  return (
    <div className="max-w-4xl mx-auto p-10 font-sans">
      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-8 border-b pb-4">
        Үйл ажиллагаандаа мөрдөж байгаа хуль тогтоомжийн жагсаалт
      </h1>

      {/* Laws List */}
      <ul className="list-disc list-inside space-y-2 text-gray-700 mb-10">
        {laws.map((law, i) => (
          <li key={i} className="leading-relaxed">
            {law.href ? (
              <a
                href={law.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {law.name}
              </a>
            ) : (
              <span>{law.name}</span>
            )}
          </li>
        ))}
      </ul>

      {/* Separator */}
      <Separator className="my-8" />

      {/* Source Section */}
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Эх сурвалж</h2>
      <ul className="list-none space-y-2 text-gray-700">
        {source.map((item, i) => (
          <li key={i} className="leading-relaxed">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;
