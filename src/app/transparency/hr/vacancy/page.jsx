"use client";
import React from "react";

const Vacancy = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 text-gray-900">
      {/* Title */}
      <h1 className="text-2xl font-bold text-center mb-6">
        Сул орон тоо
      </h1>

      {/* Date */}
      <p className="text-sm text-gray-600 mb-6 text-center">
        2025 оны 09 дүгээр сарын 15-ны өдрийн байдлаар
      </p>

      <p className="mb-6">
        Тус байгууллагад дараах ажлын байрны сул орон тоо байна:
      </p>

      {/* Job 1 */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-2">
          1. Хөдөлмөрийн аюулгүй байдлын мэргэжилтэн
        </h2>
        <h3 className="font-medium mb-2">Тавигдах шаардлага:</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Инженер, техникийн мэргэжлээр бакалавр болон түүнээс дээш зэрэгтэй</li>
          <li>Хөдөлмөрийн аюулгүй ажиллагааны чиглэлээр мэргэшсэн (үнэмлэх, сертификаттай)</li>
          <li>Хөдөлмөрийн аюулгүй ажиллагааны чиглэлээр ажиллаж байсан тодорхой туршлагатай</li>
          <li>Удирдан зохион байгуулах, яаралтай үед бие даан шийдвэр гаргах чадвартай</li>
          <li>Компьютерийн өргөн хэрэглээний программууд дээр ажиллах чадвартай</li>
        </ul>
      </div>

      {/* Job 2 */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-2">2. Нярав</h2>
        <h3 className="font-medium mb-2">Тавигдах шаардлага:</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Тусгай дунд болон түүнээс дээш зэргийн боловсролтой</li>
          <li>Няравын сургалтад хамрагдсан (үнэмлэх, сертификаттай)</li>
          <li>Няраваар ажиллаж байсан тодорхой туршлагатай</li>
          <li>Техникийн чиглэлээр ажиллаж байсан туршлагатай бол давуу тал болно</li>
          <li>Нягтлан бодох бүртгэлийн болон өргөн хэрэглээний программууд дээр ажиллах чадвартай</li>
        </ul>
      </div>

      {/* Required Documents */}
      <div className="mb-8">
        <h3 className="font-medium mb-2">Бүрдүүлэх материал:</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Төрийн албан хаагчийн анкет</li>
          <li>Мэргэжлийн диплом, үнэмлэх, сертификатны хуулбар</li>
          <li>Иргэний үнэмлэхний хуулбар</li>
        </ul>
      </div>

      {/* Contact */}
      <div className="bg-blue-50 p-4 rounded-md">
        <h3 className="font-medium mb-2">Материал хүлээн авах хаяг:</h3>
        <p className="mb-2">
          Ажилд орох хүсэлтэй иргэдийн материалыг{" "}
          <strong>Чингэлтэй дүүргийн 22 дугаар хороо, Чингэлтэй дүүргийн Нийтлэг үйлчилгээний газрын байр, 401 тоот</strong> хаягаар авч байна.
        </p>
        <p className="mb-2">
          <strong>Утасны дугаар:</strong> 76000909, 80089213
        </p>
        <p>
          <strong>Цахим шуудан:</strong>{" "}
          <a href="mailto:telecamera@chingeltei.gov.mn" className="text-blue-700 underline">
            telecamera@chingeltei.gov.mn
          </a>
        </p>
      </div>
    </div>
  );
};

export default Vacancy;
