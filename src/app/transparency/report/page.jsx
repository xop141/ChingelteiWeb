"use client";
import React from "react";

const page = () => {
  const fileUrl = "/gomdol";

  // ---- Table Config ----
  const columns = [
    { key: "id", label: "№" },
    { key: "org", label: "Байгууллагын нэр" },
    { key: "total", label: "Нийт өргөдөл гомдол, санал хүсэлт" },
    { key: "written", label: "Бичгээр" },
    { key: "email", label: "Цахим хаягаар" },
    { key: "phone", label: "Утсаар хандсан" },
    { key: "inPerson", label: "Биечлэн уулзсан" },
    { key: "other", label: "Бусад" },
    { key: "center1111", label: "11-11 төвөөр" },
  ];

  const tableRows = [
    {
      id: 1,
      org: "Чингэлтэй дүүргийн Теле камерын хяналтын дэд төв",
      total: 5,
      written: 1,
      email: 3,
      phone: 0,
      inPerson: 0,
      other: 0,
      center1111: 1,
    },
  ];

  return (
    <div className="p-6">
      {/* Title */}
      <h1 className="text-center font-semibold">
        Чингэлтэй дүүргийн Теле камерын хяналтын дэд төвийн 2025 оны 3-р улиралд
        иргэд, албан хаагчаас ирүүлсэн өргөдөл гомдол, санал хүсэлт
      </h1>
      <p className="text-right mt-2">2025.09.17</p>

      {/* --- Preview Table --- */}
      <div className="overflow-x-auto mt-6">
        <table className="w-full border border-black text-sm">
          <thead>
            <tr className="bg-gray-100 text-center">
              {columns.map((col) => (
                <th key={col.key} className="border border-black p-2">
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableRows.map((row) => (
              <tr key={row.id} className="text-center">
                {columns.map((col) => (
                  <td key={col.key} className="border border-black p-2">
                    {row[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Note */}
      <p className="mt-4 text-gray-600 italic">
        (Дэлгэрэнгүй мэдээлэлд өргөдлийн төрлүүд болон шийдвэрлэлттэй холбоотой
        статистик багтсан. Доорх товчоор бүрэн тайланг татаж авна уу.)
      </p>

      {/* Download button */}
      <div className="flex justify-center mt-6">
        <a
          href='/files/gomdol.pdf'
          download
          className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Бүрэн тайлан татах (PDF)
        </a>
      </div>
    </div>
  );
};

export default page;
