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
  title: "APU",
  description: "Company description",
  icons: {
    icon: "/apu-dairy-favicon.jpg",
  },
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  if (!hasLocale(routing.locales, locale)) notFound();

  const messages = { en, mn }[locale];
  if (!messages) notFound();

  return (
    <html lang={locale}>
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
        <NextIntlClientProvider locale={locale} messages={messages}>
          <NavbarTop />
          <main className="flex-grow">
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
