/** @type {import('next').NextConfig} */
const createNextIntlPlugin = require("next-intl/plugin");
const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  reactStrictMode: true,
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
  env: {
    NEXT_PUBLIC_MAIN_API_DOMAIN: "https://apudairy.app.erxes.io/gateway",
    NEXT_PUBLIC_POS_TOKEN: "IEItiKcXK7xQI6yb55DWXiYnNtoY8OUj",
    NEXT_PUBLIC_CP_ID: "Ss1lZ07O_UDvMQTUogwRf",
    NEXT_PUBLIC_ERXES_APP_TOKEN:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHAiOnsibmFtZSI6InByb2R1Y3QiLCJjcmVhdGVkQXQiOiIyMDI1LTA5LTE2VDA2OjE2OjExLjU1OVoiLCJ1c2VyR3JvdXBJZCI6IjRFSHlkVERBaXMyTGRRblpuIiwiZXhwaXJlRGF0ZSI6IjIwMjUtMTAtMTZUMDk6Mzk6NTYuMDA3WiIsIm5vRXhwaXJlIjp0cnVlLCJhbGxvd0FsbFBlcm1pc3Npb24iOnRydWUsIl9pZCI6IjFiamgtS1RXYmNnOGhvMEllUlJsSyIsIl9fdiI6MH0sImlhdCI6MTc1ODAxNTYxMX0.UDbmoU7PaBsR7XcZaAz8WekYgi-W69Mj_jwNsqU5f-o",
  },
};

module.exports = withNextIntl(nextConfig);
