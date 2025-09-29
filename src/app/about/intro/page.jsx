"use client";
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const page = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-blue-900 mb-6 text-center">
          Чиг үүрэг
        </h1>

        <ol className="list-decimal list-inside space-y-6 text-gray-800">
          <li>
            <strong>Нийтийн аюулгүй байдлыг хангах</strong>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>Гудамж, зам талбай, олон нийтийн газруудад гэмт хэрэг, зөрчлийг хянах</li>
              <li>Иргэдийн амь нас, эрүүл мэнд, эд хөрөнгийг хамгаалах</li>
            </ul>
          </li>

          <li>
            <strong>Гэмт хэрэг, зөрчлийг илрүүлэх, урьдчилан сэргийлэх</strong>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>Камерын тусламжтайгаар гэмт хэрэг үйлдэгдэхээс өмнө анхааруулах, таслан зогсоох</li>
              <li>Гэмт хэрэг гарсан тохиолдолд хэрэгт холбогдогчдыг таних, баримтжуулах</li>
            </ul>
          </li>

          <li>
            <strong>Замын хөдөлгөөний хяналт</strong>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>Замын хөдөлгөөний зөрчил илрүүлэх, ослоос урьдчилан сэргийлэх</li>
              <li>Замын түгжрэл, хөдөлгөөний урсгалыг хянах, удирдах</li>
            </ul>
          </li>

          <li>
            <strong>Онцгой байдал, гамшгийн үед хариу арга хэмжээ авах</strong>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>Гал түймэр, үер, газар хөдлөлт зэрэг гамшгийн үед нөхцөл байдлыг хянах</li>
              <li>Шуурхай удирдлага, зохицуулалт хийхэд дэмжлэг үзүүлэх</li>
            </ul>
          </li>

          <li>
            <strong>Объектуудын хамгаалалт, хяналт</strong>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>Стратегийн болон онц чухал объектууд (цахилгаан станц, усан сан, банк, шорон гэх мэт)-ын аюулгүй байдлыг хангах</li>
              <li>Дотоод болон гадаад хяналтыг хэрэгжүүлэх</li>
            </ul>
          </li>

          <li>
            <strong>Мэдээлэл цуглуулах, дүн шинжилгээ хийх</strong>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>Камерын бичлэгээс мэдээлэл цуглуулж, гэмт хэргийн давтамж, байршил, хандлагыг тодорхойлох</li>
              <li>Цагдаа, хууль сахиулах байгууллагад шаардлагатай мэдээллээр хангах</li>
            </ul>
          </li>

          <li>
            <strong>Иргэдэд мэдээлэл хүргэх, сургалт сурталчилгаа явуулах</strong>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>Аюулгүй байдлын талаар олон нийтэд мэдээлэл түгээх</li>
              <li>Камерын системийн ач холбогдлыг ойлгуулах, итгэлцлийг нэмэгдүүлэх</li>
            </ul>
          </li>
        </ol>
      </main>
    </div>
  );
};

export default page;

