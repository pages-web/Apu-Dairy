"use client";

import { useRouter, usePathname } from "next/navigation";
import { Button } from "../../ui/Button/Button";

const locales = ["en", "mn"];

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const currentLocale = pathname.split("/")[1];

  const currentIndex = locales.indexOf(currentLocale);
  const nextLocale = locales[(currentIndex + 1) % locales.length];

  const handleClick = () => {
    const newPathname = pathname.replace(`/${currentLocale}`, `/${nextLocale}`);
    router.push(newPathname);
  };

  return (
    <Button
      onClick={handleClick}
      className="w-10 h-10 rounded-full bg-white/50 flex items-center justify-center text-xl font-bold shadow-sm"
      aria-label="Change language"
    >
      🌐
    </Button>
  );
}
