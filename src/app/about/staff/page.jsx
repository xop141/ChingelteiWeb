"use client";
import React from "react";
import contacts from "@/app/staticData/contacts";
const page = () => {
  return (
    <div className="p-6 overflow-x-auto">
      <h2 className="text-xl font-bold mb-4 text-center">
        Албан хаагчдын овог нэр, утасны дугаар, цахим шуудангийн хаяг
      </h2>
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">Д/д</th>
            <th className="border px-4 py-2">Овог нэр</th>
            <th className="border px-4 py-2">Албан тушаал</th>
            <th className="border px-4 py-2">Утасны дугаар</th>
            <th className="border px-4 py-2">Цахим шуудан</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{contact.id}</td>
              <td className="border px-4 py-2">{contact.name}</td>
              <td className="border px-4 py-2">{contact.position}</td>
              <td className="border px-4 py-2">{contact.phone}</td>
              <td className="border px-4 py-2">{contact.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default page;
