import Image from "next/image";
import { Home, FileText, BarChart2, Eye, Book } from "lucide-react";
import menuItems from "./staticData/MenuItems";
import React from "react";

const page = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center font-sans px-6">
      {/* Header */}
      <header className="flex flex-col items-center py-10">
        <Image src="/logo.svg" alt="Logo" width={150} height={150} />
        <h1 className="text-center mt-4">
          <span className="block text-3xl font-bold text-blue-900">
            ЧИНГЭЛТЭЙ ДҮҮРГИЙН ТЕЛЕ КАМЕРЫН
          </span>
          <span className="block text-2xl font-semibold text-blue-800 mt-2">
            ХЯНАЛТЫН ДЭД ТӨВ
          </span>
        </h1>
      </header>

      {/* Navigation / Menu */}
      <nav className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full max-w-6xl mt-10 ">
        {menuItems.map((menu, index) => (
          <a
            key={index}
            href={menu.href}
            className="text-blue-900  flex flex-col items-center justify-center p-8 bg-white border border-gray-200 rounded-xl shadow hover:bg-blue-500 hover:text-white transition-all transform hover:-translate-y-1 hover:scale-105 text-center"
          >
            {menu.icon}
            <span className="text-xl font-semibold mt-2">{menu.label}</span>
          </a>
        ))}
      </nav>

      {/* Contact Info */}
      <footer className="mt-auto py-10 text-center text-gray-700">
        <p className="font-medium">Утас: 76000909</p>
        <p>
          Email:{" "}
          <a
            href="mailto:telecamera@chingeltei.gov.mn"
            className="text-blue-700 hover:underline"
          >
            telecamera@chingeltei.gov.mn
          </a>
        </p>
      </footer>
    </div>
  );
};

export default page;
