"use client";
import React, { useState } from "react";
import HeaderList from "@/app/staticData/HeaderList";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const currentPath = usePathname();
  const [openMenu, setOpenMenu] = useState(null);

  return (
    <nav className="bg-blue-800 text-white p-4 flex flex-col items-center gap-4">
      {/* Logo + Title */}
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Image
          src="/logo.svg"
          alt="logo"
          width={100}
          height={100}
          className="rounded-full border-2 border-white"
        />
        <span className="text-center text-base sm:text-lg font-semibold leading-tight max-w-xs">
          ЧИНГЭЛТЭЙ ДҮҮРГИЙН ТЕЛЕ КАМЕРЫН ХЯНАЛТЫН ДЭД ТӨВ
        </span>
      </div>

      {/* Menu */}
      <ul className="flex flex-col sm:flex-row sm:space-x-6 list-none w-full sm:w-auto">
        {/* Static menu item */}
        <li className="cursor-pointer hover:text-yellow-300 font-semibold w-full sm:w-auto">
          <Link href="/home" className="block px-4 py-2">
            Эхлэл
          </Link>
        </li>

        {/* Dynamic menu items */}
        {Object.entries(HeaderList).map(([menuTitle, subItems], index) => (
          <li
            key={index}
            className="relative w-full sm:w-auto"
            onMouseEnter={() => setOpenMenu(index)}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <div className="px-4 py-2 hover:text-yellow-300 font-semibold cursor-pointer">
              {menuTitle}
            </div>

            {subItems.length > 0 && openMenu === index && (
              <ul className="absolute top-full left-0 sm:left-auto sm:right-0 bg-white text-black shadow-lg mt-0 w-full sm:w-64 z-50 list-none p-0 rounded-md">
                {subItems.map((item, subIndex) =>
                  item.label ? (
                    <li key={subIndex} className="relative group">
                      {item.href.startsWith("http") ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2 hover:bg-gray-200 cursor-pointer"
                        >
                          {item.label}
                        </a>
                      ) : (
                        <Link
                          href={item.href}
                          className="block px-4 py-2 hover:bg-gray-200"
                        >
                          {item.label}
                        </Link>
                      )}

                      {/* Sub-sub menu */}
                      {item.children && (
                        <ul className="absolute top-0 left-full bg-white text-black shadow-lg w-56 rounded-md hidden group-hover:block">
                          {item.children.map((child, childIndex) => (
                            <li
                              key={childIndex}
                              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                            >
                              <Link href={child.href} className="block w-full">
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ) : null
                )}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
