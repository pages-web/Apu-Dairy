import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  localeDetection: false,
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
