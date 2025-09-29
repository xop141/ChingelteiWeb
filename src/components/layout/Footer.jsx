"use client";
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
            <a
              href="mailto:telecamera@chingeltei.gov.mn"
              className="hover:underline"
            >
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

          {/* Google Maps Embed */}
          <div className="w-full h-48 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.153798515244!2d106.86518309222818!3d47.9640579890389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d968d8f442bca87%3A0x1bf7a8106235bab6!2z0KfQuNC90LPRjdC70YLRjdC5INC00q_Sr9GA0LPQuNC50L0g0J3QuNC50YLQu9GN0LMg0q_QudC70LjQu9Cz0Y3RjdC90LjQuSDQs9Cw0LfQsNGA!5e1!3m2!1sen!2smn!4v1759137765132!5m2!1sen!2smn"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.153798515244!2d106.86518309222818!3d47.9640579890389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d968d8f442bca87%3A0x1bf7a8106235bab6!2z0KfQuNC90LPRjdC70YLRjdC5INC00q_Sr9GA0LPQuNC50L0g0J3QuNC50YLQu9GN0LMg0q_QudC70LjQu9Cz0Y3RjdC90LjQuSDQs9Cw0LfQsNGA!5e1!3m2!1sen!2smn!4v1759137765132!5m2!1sen!2smn" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
          </div>

          <p className="text-sm mt-2">
            Монгол улс, Улаанбаатар хот, Чингэлтэй дүүрэг, 22-р хороо, Согоот
            83-р гудамж, ЧДНҮГ-ын байр, 401 тоот
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
