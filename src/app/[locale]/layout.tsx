import { Inter } from "next/font/google";
import "./globals.css";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { Providers } from "@/src/components/providers/Providers";
import MilkDropCursor from "@/src/components/sections/CTA/cursor";
import Footer from "@/src/components/layout/Footer/footer";
import { routing } from "@/src/i18n/routing";

import en from "@/messages/en.json";
import mn from "@/messages/mn.json";
import { NavbarTop } from "@/src/components/layout/Header/Header";
import Icon from "@/src/components/Side Icon/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "APU Dairy",
  description:
    "APU Dairy LLC is the first milk and dairy product manufacturer in Mongolia to jointly implement the ISO 9001 Quality Management System and the ISO 22000, FSSC 22000 Food Safety System certification standards",
  icons: {
    icon: "/apu-dairy-favicon.jpg",
  },
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale?: string };
}) {
  const defaultLocale = "mn";
  const localeParam = params.locale || defaultLocale;
  const activeLocale = hasLocale(routing.locales, localeParam)
    ? localeParam
    : defaultLocale;

  const messages = { en, mn }[activeLocale];
  if (!messages) notFound();

  return (
    <html lang={activeLocale}>
      <head>
        <link
          rel="icon"
          type="image/jpeg"
          href="/images/apu-dairy-favicon.jpg"
        />
      </head>
      <body
        className={`${inter.className} min-h-screen flex flex-col cursor-none`}
      >
        <NextIntlClientProvider locale={activeLocale} messages={messages}>
          <NavbarTop />
          <main className="flex-grow cursor-none">
            <Providers>{children}</Providers>
          </main>
          <MilkDropCursor />
          <Icon children={undefined} />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
