"use client";

import { useEffect, useState } from "react";
import { getConfig } from "@/src/graphql/queries/auth";
import Link from "next/link";
import { LanguageSwitcher } from "./languageSwitch";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";

export function NavbarTop() {
  const [logo, setLogo] = useState<string>("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = useTranslations("navbar");

  useEffect(() => {
    let isMounted = true;

    const fetchConfig = async () => {
      try {
        const { config } = await getConfig();
        if (isMounted) setLogo(config?.uiOptions?.logo || "");
      } catch (error) {
        console.error("Failed to fetch config:", error);
      }
    };
    fetchConfig();
    return () => {
      isMounted = false;
    };
  }, []);

  const navItems = [
    { label: t("products"), href: "/category" },
    { label: t("recipes"), href: "/recipes" },
    { label: t("about"), href: "/aboutheader" },
    { label: t("human"), href: "/human" },
    { label: t("news"), href: "/news" },
  ];

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white/50 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between py-1 px-6 gap-6">
        <Link href="/">
          <img
            src={logo || "/images/footer.svg"}
            alt="Logo"
            className="w-24 h-auto cursor-none"
          />
        </Link>
        <nav className="sm:hidden max-sm:hidden md:flex items-center bg-gray-100 px-4 py-2 rounded-full text-sm font-semibold text-[#232323] gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="cursor-none px-3 py-1 rounded-full hover:bg-white hover:text-[#D64545] transition duration-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="sm:hidden max-sm:hidden md:flex items-center">
          <LanguageSwitcher />
        </div>
        <div className="flex md:hidden items-center gap-2">
          <LanguageSwitcher />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-md border border-gray-300"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-white w-full border-t border-gray-200 shadow-md">
          <nav className="flex flex-col px-6 py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="cursor-none px-3 py-2 rounded-full hover:bg-gray-100 hover:text-[#D64545] transition"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
