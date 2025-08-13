"use client";

import { useEffect, useState } from "react";
import { getConfig } from "@/src/graphql/queries/auth";
import Link from "next/link";
import { LanguageSwitcher } from "./languageSwitch";

export function NavbarTop() {
  const [logo, setLogo] = useState<string>("");

  useEffect(() => {
    const fetchConfig = async () => {
      const { config } = await getConfig();
      setLogo(config?.uiOptions?.logo || "");
    };

    fetchConfig();
  }, []);

  const navItems = [
    { label: "Бүтээгдэхүүн", href: "/category" },
    { label: "Жорууд", href: "/recipes" },
    { label: "Бидний тухай", href: "/aboutheader" },
    { label: "Хүний нөөц", href: "/human" },
    { label: "Мэдээлэл", href: "/news" },
    { label: "Холбогдох", href: "/contact" },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-white/50 bg-opacity-95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between py-4 px-6">
        <Link href="/">
          <img
            src={logo || "/images/footer.svg"}
            alt="Logo"
            className="w-24 h-auto"
          />
        </Link>
        <nav className="sm:hidden max-sm:hidden lg:flex items-center bg-gray-100 px-4 py-2 rounded-full text-sm font-semibold text-[#232323]">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="cursor-pointer px-3 py-1 rounded-full hover:bg-white hover:text-[#D64545] transition duration-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="sm:hidden max-sm:hidden lg:flex items-center gap-3">
          <LanguageSwitcher />
          <button className=" flex items-center gap-2 bg-white text-[#D64545] font-medium px-4 py-2 rounded-full hover:bg-gray-100 transition shadow-sm">
            💬 Санал хүсэлт
          </button>
        </div>
        <div className="lg:hidden" />
      </div>
    </header>
  );
}
