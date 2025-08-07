// app/layout.tsx

import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "../components/providers/Providers";
import MilkDropCursor from "../components/sections/CTA/cursor";
import Footer from "../components/layout/Footer/footer";
import Image from "next/image";
import { NavbarTop } from "../components/layout/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "APU",
  description: "Company description",
};
const backgroundImageUrl = "/images/4178627.jpg";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <NavbarTop />
        {/* Background image disabled */}
        <main className="flex-grow">
          <Providers>{children}</Providers>
        </main>
        <MilkDropCursor />
        <Footer />
      </body>
    </html>
  );
}
