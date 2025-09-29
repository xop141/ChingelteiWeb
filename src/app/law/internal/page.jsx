"use client";
import React from "react";

const page = () => {
  const files = [
    {
      name: "Ажил үнэлгээний журам",
      url: "/unelgee.pdf",
    },
    {
      name: "Ажилтан сонгон шалгаруулах журам",
      url: "/songon.pdf",
    },
    {
      name: "Хүний нөөцийн стратеги үнэлэх журам",
      url: "/strat.pdf",
    },
    {
      name: "Төрийн захиргааны болон үйлчилгээний албан тушаал эрхэлдэг төрийн албан хаагчийн ёс зүйн хэм хэмжээ",
      url: "/yos.pdf",
    },
  ];

  return (
    <div className="p-8">
      <h1 className="text-center text-xl font-bold mb-6">
        Журам татах
      </h1>

      <div className="grid gap-4 max-w-lg mx-auto">
        {files.map((file, idx) => (
          <a
            key={idx}
            href={file.url}
            download
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition text-center"
          >
            {file.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default page;
