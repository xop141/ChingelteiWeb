import React from "react";
import Image from "next/image";
import { Phone, Mail, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0C1622] text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Logo */}
        <div className="flex flex-col items-center gap-4 text-center md:text-left">
          <Image src="/logo.svg" alt="logo" width={100} height={100} />
          <p className="max-w-xs text-sm sm:text-base">
            ЧИНГЭЛТЭЙ ДҮҮРГИЙН ТЕЛЕ КАМЕРЫН ХЯНАЛТЫН ДЭД ТӨВ
          </p>
        </div>

        {/* Column 2: Contact Info */}
        <div className="flex flex-col gap-2 text-center md:text-left">
          <h3 className="font-semibold text-lg mb-2">Холбоо барих</h3>
        

          <p className="flex items-center justify-center md:justify-start gap-2">
            <Phone size={18} />
            <a href="tel:76000909" className="hover:underline">
              76000909
            </a>
          </p>

          <p className="flex items-center justify-center md:justify-start gap-2">
            <Mail size={18} />
            <a href="mailto:telecamera@chingeltei.gov.mn" className="hover:underline">
              telecamera@chingeltei.gov.mn
            </a>
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2">
  <Facebook size={18} />
  <a
    href="https://www.facebook.com/share/17QsSbYNGc/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:underline"
  >
    Facebook хуудас
  </a>
</p>
        </div>

        {/* Column 3: Map / Location */}
        <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
          <h3 className="font-semibold text-lg mb-2">Байршил</h3>
          <div className="w-full h-48 bg-gray-700 rounded-lg flex items-center justify-center text-gray-300">
            Map Placeholder
          </div>
          <p className="text-sm mt-2">
            Монгол улс, Улаанбаатар хот, Чингэлтэй дүүрэг, 22-р хороо, Согоот 83-р гудамж, ЧДНҮГ-ын байр, 401 тоот
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
