"use client";
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const page = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-blue-900 mb-6 text-center">
          Алсын хараа, эрхэм зорилго
        </h1>

        <p className="text-gray-800 text-lg leading-relaxed">
          Нийтийн аюулгүй байдлыг хангах, гэмт хэрэг, зөрчлийг илрүүлэх,
          урьдчилан сэргийлэх, замын хөдөлгөөний хяналтыг сайжруулах,
          иргэдийн амь нас, эрүүл мэнд, эд хөрөнгийг хамгаалах зорилгоор орчин
          үеийн дэвшилтэт технологи бүхий теле хяналтын системийг үр ашигтай
          ажиллуулах, мэдээллийн найдвартай байдлыг хангах, холбогдох
          байгууллагуудтай хамтран ажиллах замаар нийгмийн амар тайван,
          аюулгүй орчныг бүрдүүлэхэд хувь нэмэр оруулах.
        </p>
      </main>
    </div>
  );
};

export default page;
