"use client"
import React from "react";

const ProcurementPlan = () => {
  const data = [
    {
      id: 1,
      name: "Бичиг хэрэг",
      source: "2025 оны батлагдсан төсөв",
      estimate: "6,226.0",
      yearFunding: "6,226.0",
      rule: "Шууд худалдан авалт",
      tenderDate: "2025.05.06",
      contractDate: "2025.05.06",
      endDate: "2025.12.31",
      note: "",
    },
    {
      id: 2,
      name: "Тээврийн шатахуун",
      source: "2025 оны батлагдсан төсөв",
      estimate: "4,494.0",
      yearFunding: "4,494.0",
      rule: "Шууд худалдан авалт",
      tenderDate: "2025.05.06",
      contractDate: "2025.05.06",
      endDate: "2025.12.31",
      note: "",
    },
    {
      id: 3,
      name: "Бага үнэтэй түргэн элэгдэх зүйлс",
      source: "2025 оны батлагдсан төсөв",
      estimate: "2,728.4",
      yearFunding: "2,728.4",
      rule: "Шууд худалдан авалт",
      tenderDate: "2025.05.06",
      contractDate: "2025.05.06",
      endDate: "2025.12.31",
      note: "",
    },
    {
      id: 4,
      name: "Ажлын хувцас",
      source: "2025 оны батлагдсан төсөв",
      estimate: "7,858.3",
      yearFunding: "7,858.3",
      rule: "Шууд худалдан авалт",
      tenderDate: "2025.05.06",
      contractDate: "2025.05.06",
      endDate: "2025.12.31",
      note: "",
    },
    {
      id: 5,
      name: "Камерын засвар үйлчилгээнд шаардлагатай сэлбэг, материал",
      source: "2025 оны батлагдсан төсөв",
      estimate: "19,358.0",
      yearFunding: "19,358.0",
      rule: "Шууд худалдан авалт",
      tenderDate: "2025.05.06",
      contractDate: "2025.05.06",
      endDate: "2025.12.31",
      note: "",
    },
    {
      id: 6,
      name: "Камерын засвар үйлчилгээнд шаардлагатай сэлбэг, материал",
      source: "Орон нутгийн төсвийн хөрөнгө оруулалт",
      estimate: "547,500.0",
      yearFunding: "547,500.0",
      rule: "Нээлттэй тендер шалгаруулалт",
      tenderDate: "2025.09.20",
      contractDate: "2025.09.20",
      endDate: "2025.12.31",
      note: "",
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-center text-xl font-bold mb-4">
        Чингэлтэй дүүргийн телекамерын хяналтын дэд төвийн 2025 оны худалдан авах ажиллагааны төлөвлөгөө
      </h2>
      <p className="text-right mb-4">2025.05.30</p>

      <div className="overflow-x-auto">
        <table className="table-auto border-collapse border border-gray-400 w-full text-sm text-center">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-400 p-2">Д/д</th>
              <th className="border border-gray-400 p-2">
                Худалдан авах бараа, ажил, үйлчилгээний нэр төрөл
              </th>
              <th className="border border-gray-400 p-2">Эх үүсвэр</th>
              <th className="border border-gray-400 p-2">Төсөвт өртөг /мян.төг/</th>
              <th className="border border-gray-400 p-2">Тухайн онд санхүүжих /мян.төг/</th>
              <th className="border border-gray-400 p-2">ХАА-д мөрдөх журам</th>
              <th className="border border-gray-400 p-2">Тендер зарлах огноо</th>
              <th className="border border-gray-400 p-2">Гэрээ байгуулах эрх олгох огноо</th>
              <th className="border border-gray-400 p-2">Гэрээ дуусах огноо</th>
              <th className="border border-gray-400 p-2">Тайлбар</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id}>
                <td className="border border-gray-400 p-2">{row.id}</td>
                <td className="border border-gray-400 p-2">{row.name}</td>
                <td className="border border-gray-400 p-2">{row.source}</td>
                <td className="border border-gray-400 p-2">{row.estimate}</td>
                <td className="border border-gray-400 p-2">{row.yearFunding}</td>
                <td className="border border-gray-400 p-2">{row.rule}</td>
                <td className="border border-gray-400 p-2">{row.tenderDate}</td>
                <td className="border border-gray-400 p-2">{row.contractDate}</td>
                <td className="border border-gray-400 p-2">{row.endDate}</td>
                <td className="border border-gray-400 p-2">{row.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-right mt-6">Боловсруулсан: ЧДНҮГ-ын Захиргаа, хүний нөөцийн ахлах мэргэжилтэн Б.Болор</p>
    </div>
  );
};

export default ProcurementPlan;