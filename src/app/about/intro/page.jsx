"use client";
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const page = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
  

      <main className="flex-1 max-w-5xl mx-auto px-6 py-12">
        {/* Page Title */}
        <h1 className="text-4xl font-extrabold text-blue-900 mb-10 text-center">
          Чиг үүрэг
        </h1>

        <ol className="list-decimal list-inside space-y-10 text-gray-800">
          <li>
            <strong className="text-lg">Нийтийн аюулгүй байдлыг хангах</strong>
            <ul className="list-disc list-inside ml-6 mt-3 space-y-2 text-gray-700">
              <li>Гудамж, зам талбай, олон нийтийн газруудад гэмт хэрэг, зөрчлийг хянах</li>
              <li>Иргэдийн амь нас, эрүүл мэнд, эд хөрөнгийг хамгаалах</li>
            </ul>
          </li>

          <li>
            <strong className="text-lg">Гэмт хэрэг, зөрчлийг илрүүлэх, урьдчилан сэргийлэх</strong>
            <ul className="list-disc list-inside ml-6 mt-3 space-y-2 text-gray-700">
              <li>Камерын тусламжтайгаар гэмт хэрэг үйлдэгдэхээс өмнө анхааруулах, таслан зогсоох</li>
              <li>Гэмт хэрэг гарсан тохиолдолд хэрэгт холбогдогчдыг таних, баримтжуулах</li>
            </ul>
          </li>

          <li>
            <strong className="text-lg">Замын хөдөлгөөний хяналт</strong>
            <ul className="list-disc list-inside ml-6 mt-3 space-y-2 text-gray-700">
              <li>Замын хөдөлгөөний зөрчил илрүүлэх, ослоос урьдчилан сэргийлэх</li>
              <li>Замын түгжрэл, хөдөлгөөний урсгалыг хянах, удирдах</li>
            </ul>
          </li>

          <li>
            <strong className="text-lg">Онцгой байдал, гамшгийн үед хариу арга хэмжээ авах</strong>
            <ul className="list-disc list-inside ml-6 mt-3 space-y-2 text-gray-700">
              <li>Гал түймэр, үер, газар хөдлөлт зэрэг гамшгийн үед нөхцөл байдлыг хянах</li>
              <li>Шуурхай удирдлага, зохицуулалт хийхэд дэмжлэг үзүүлэх</li>
            </ul>
          </li>

          <li>
            <strong className="text-lg">Объектуудын хамгаалалт, хяналт</strong>
            <ul className="list-disc list-inside ml-6 mt-3 space-y-2 text-gray-700">
              <li>Стратегийн болон онц чухал объектуудын аюулгүй байдлыг хангах</li>
              <li>Дотоод болон гадаад хяналтыг хэрэгжүүлэх</li>
            </ul>
          </li>

          <li>
            <strong className="text-lg">Мэдээлэл цуглуулах, дүн шинжилгээ хийх</strong>
            <ul className="list-disc list-inside ml-6 mt-3 space-y-2 text-gray-700">
              <li>Камерын бичлэгээс мэдээлэл цуглуулж, гэмт хэргийн давтамж, байршил, хандлагыг тодорхойлох</li>
              <li>Цагдаа, хууль сахиулах байгууллагад шаардлагатай мэдээллээр хангах</li>
            </ul>
          </li>

          <li>
            <strong className="text-lg">Иргэдэд мэдээлэл хүргэх, сургалт сурталчилгаа явуулах</strong>
            <ul className="list-disc list-inside ml-6 mt-3 space-y-2 text-gray-700">
              <li>Аюулгүй байдлын талаар олон нийтэд мэдээлэл түгээх</li>
              <li>Камерын системийн ач холбогдлыг ойлгуулах, итгэлцлийг нэмэгдүүлэх</li>
            </ul>
          </li>
        </ol>

        {/* New Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
            Үйл ажиллагааны чиглэл
          </h2>
          <ul className="list-disc list-inside ml-6 space-y-3 text-gray-700">
            <li>
              Нийтийн эзэмшлийн гудамж, зам талбайд суурилуулсан теле камеруудыг нэгтгэх, хяналт тавих, бичлэг хадгалах, гэмт хэрэг, зөрчлөөс урьдчилан сэргийлэх, илрүүлэх авто замын хөдөлгөөний зохицуулалт хийх төрийн байгууллагуудад шаардлагатай дүрс бичлэгийг харуулах нэгдсэн удирдлага зохицуулалт хийх, төрийн албадыг мэдээ, мэдээллээр хангах
            </li>
            <li>
              Дүүргийн нутаг дэвсгэрийн нийтийн эзэмшлийн гудамж, зам талбайг камержуулах, суурилуулсан теле камеруудыг нэгтгэх, камеруудын хамгаалалт, арчлалт, засвар үйлчилгээг хариуцан, хэвийн ажиллагааг хангах
            </li>
            <li>Теле камерын дүрст мэдээллийг ажиглах, боловсруулах</li>
            <li>
              Гэмт хэрэг зөрчлөөс урьдчилан сэргийлэх, илрүүлэх төрийн тусгайлсан чиг үүрэг бүхий байгууллагуудад шаардлагатай дүрс бичлэгийг харуулах, нэгдсэн удирдлага зохицуулалт хийх, холбогдох байгууллагыг шаардлагатай мэдээллээр хангах
            </li>
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default page;
