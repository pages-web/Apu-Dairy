"use client";

import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

const locales = ["en", "mn"];

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  // Одоогийн locale-г pathname-ээс гаргаж авна
  // Жишээ: /en/category → "en"
  const currentLocale = pathname.split("/")[1];

  // Дараагийн locale-г олно
  const currentIndex = locales.indexOf(currentLocale);
  const nextLocale = locales[(currentIndex + 1) % locales.length];

  const handleClick = () => {
    // Хуудсыг шинэ locale-оор рүү чиглүүлэх
    const newPathname = pathname.replace(`/${currentLocale}`, `/${nextLocale}`);
    router.push(newPathname);
  };

  return (
    <button
      onClick={handleClick}
      className="w-10 h-10 rounded-full bg-white text-[#D64545] flex items-center justify-center text-xl font-bold shadow-sm"
      aria-label="Change language"
    >
      🌐
    </button>
  );
}
