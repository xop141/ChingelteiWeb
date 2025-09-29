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

        <p className="text-gray-800 text-lg leading-relaxed mb-10">
          Нийтийн аюулгүй байдлыг хангах, гэмт хэрэг, зөрчлийг илрүүлэх,
          урьдчилан сэргийлэх, замын хөдөлгөөний хяналтыг сайжруулах,
          иргэдийн амь нас, эрүүл мэнд, эд хөрөнгийг хамгаалах зорилгоор орчин
          үеийн дэвшилтэт технологи бүхий теле хяналтын системийг үр ашигтай
          ажиллуулах, мэдээллийн найдвартай байдлыг хангах, холбогдох
          байгууллагуудтай хамтран ажиллах замаар нийгмийн амар тайван,
          аюулгүй орчныг бүрдүүлэхэд хувь нэмэр оруулах.
        </p>

        <h2 className="text-2xl font-semibold text-blue-800 mb-4 text-center">
          Тэргүүлэх чиглэл:
        </h2>

        <ol className="list-decimal list-inside text-gray-800 text-lg leading-relaxed space-y-4">
          <li>
            <span className="font-semibold">Нийтийн аюулгүй байдлыг хангах</span>
            <ul className="list-disc list-inside ml-6">
              <li>Гэмт хэрэг, зөрчлийг илрүүлэх, урьдчилан сэргийлэх</li>
              <li>Олон нийтийн газар, гудамж талбайн хяналтыг сайжруулах</li>
            </ul>
          </li>

          <li>
            <span className="font-semibold">Замын хөдөлгөөний зохицуулалт ба хяналт</span>
            <ul className="list-disc list-inside ml-6">
              <li>Замын хөдөлгөөний ачааллыг бууруулах</li>
              <li>Зам тээврийн ослоос урьдчилан сэргийлэх</li>
              <li>Зөрчил илрүүлэх, торгууль ногдуулах</li>
            </ul>
          </li>

          <li>
            <span className="font-semibold">Онцгой байдал, гамшгийн үеийн хариу арга хэмжээ</span>
            <ul className="list-disc list-inside ml-6">
              <li>Гамшгийн үед хяналт, мэдээлэл дамжуулалт</li>
              <li>Шуурхай удирдлага, зохион байгуулалтыг дэмжих</li>
            </ul>
          </li>

          <li>
            <span className="font-semibold">Мэдээллийн технологийн дэвшлийг нэвтрүүлэх</span>
            <ul className="list-disc list-inside ml-6">
              <li>Ухаалаг хяналтын систем нэвтрүүлэх</li>
              <li>Хиймэл оюун ухаан, дүрс таних технологийг ашиглах</li>
            </ul>
          </li>

          <li>
            <span className="font-semibold">Хүний нөөцийн чадавхыг сайжруулах</span>
            <ul className="list-disc list-inside ml-6">
              <li>Ажилтнуудын сургалт, мэргэшүүлэлтийг тогтмол зохион байгуулах</li>
              <li>Ёс зүй, хариуцлагыг дээшлүүлэх</li>
            </ul>
          </li>

          <li>
            <span className="font-semibold">Олон нийттэй хамтран ажиллах, ил тод байдлыг хангах</span>
            <ul className="list-disc list-inside ml-6">
              <li>Иргэдийн оролцоог нэмэгдүүлэх</li>
              <li>Мэдээллийн ил тод байдал, хүртээмжийг сайжруулах</li>
            </ul>
          </li>

          <li>
            <span className="font-semibold">Мэдээллийн аюулгүй байдал, нууцлалыг хамгаалах</span>
            <ul className="list-disc list-inside ml-6">
              <li>Хяналтын бичлэг, мэдээллийг хамгаалах</li>
              <li>Хувь хүний мэдээллийг хуулийн дагуу хамгаалах</li>
            </ul>
          </li>
        </ol>
      </main>
    </div>
  );
};

export default page;
