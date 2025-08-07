import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

const locales = ["en-us", "kr"];

export default getRequestConfig(async ({ locale }) => {
  if (!locale || !locales.includes(locale)) notFound();

  return {
    locale, // Одоо энэ нь string төрлөөр баталгаажиж байна
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
