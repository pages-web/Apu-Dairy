const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.cloudfront.net",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "**.erxes.io",
      },
      {
        protocol: "https",
        hostname: "erxes.io",
      },
    ],
  },
  i18n: {
    locales: ["en", "mn"],
    defaultLocale: "mn",
  },
  env: {
    NEXT_PUBLIC_MAIN_API_DOMAIN: "https://apudairy.app.erxes.io/gateway",
    NEXT_PUBLIC_POS_TOKEN: "IEItiKcXK7xQI6yb55DWXiYnNtoY8OUj",
    NEXT_PUBLIC_CP_ID: "Ss1lZ07O_UDvMQTUogwRf",
    NEXT_PUBLIC_ERXES_APP_TOKEN:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHAiOnsibmFtZSI6ImFwdSB0b2tlbiIsImNyZWF0ZWRBdCI6IjIwMjUtMDYtMTdUMTk6Mjk6MzAuOTQyWiIsInVzZXJHcm91cElkIjoiNEVIeWRUREFpczJMZFFuWm4iLCJleHBpcmVEYXRlIjoiMjAyNS0wNy0xOVQwOTo1NTozNS4wMDNaIiwibm9FeHBpcmUiOnRydWUsImFsbG93QWxsUGVybWlzc2lvbiI6dHJ1ZSwiX2lkIjoiQW1RVFNKVTlTV1ZyMVVXblNkSHQtIiwiX192IjowfSwiaWF0IjoxNzUwMzI2OTQ4fQ.b3dFx5qBmtuOJSBF1X5k1Sfsd1eoW05VPy8YA4Y5pHw",
  },
  reactStrictMode: true,
};

module.exports = withNextIntl(nextConfig);
