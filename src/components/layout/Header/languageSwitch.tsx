"use client";

import { useRouter, usePathname } from "next/navigation";
import { Button } from "../../ui/Button/Button";

const locales = ["en", "mn"];

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const segments = pathname.split("/").filter(Boolean);
  const currentLocale = locales.includes(segments[0]) ? segments[0] : null;

  const currentIndex = currentLocale
    ? locales.indexOf(currentLocale)
    : locales.indexOf("mn");
  const nextLocale = locales[(currentIndex + 1) % locales.length];

  const handleClick = () => {
    let newPath = "";

    if (currentLocale) {
      newPath =
        "/" + [nextLocale, ...segments.slice(1)].filter(Boolean).join("/");
    } else {
      newPath = "/" + [nextLocale, ...segments].filter(Boolean).join("/");
    }

    router.push(newPath);
  };

  return (
    <Button
      onClick={handleClick}
      className="w-10 h-10 rounded-full cursor-none bg-white/50 flex items-center justify-center text-xl font-bold shadow-sm"
      aria-label="Change language"
    >
      🌐
    </Button>
  );
}
