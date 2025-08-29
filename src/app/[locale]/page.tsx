"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

// Dynamic import with skeleton loading
const MainBanner = dynamic(() => import("../../components/heading/cmsPost"), {
  loading: () => (
    <p className="p-10 bg-gray-100 animate-pulse rounded">
      Banner ачааллаж байна...
    </p>
  ),
});
const Brand = dynamic(() => import("../../components/Brand/brand"), {
  ssr: false,
});
const Food = dynamic(() => import("../../components/Food"), { ssr: false });
const FoodCategory = dynamic(
  () => import("../../components/Food Category/foodCategory"),
  { ssr: false }
);
const AboutUs = dynamic(() => import("./about/page"), { ssr: false });
const Secure = dynamic(() => import("../../components/Security/page"), {
  ssr: false,
});
const Alham = dynamic(() => import("../../components/Security/alham"), {
  ssr: false,
});
const Togtwortoi = dynamic(() => import("../../components/TogtwortoiHogjil"), {
  ssr: false,
});
const News = dynamic(() => import("../../components/news/page"), {
  ssr: false,
});

export const revalidate = 60;

const Home = () => {
  return (
    <div className="space-y-10">
      <Suspense
        fallback={
          <p className="p-10 bg-gray-100 animate-pulse rounded">
            Banner ачааллаж байна...
          </p>
        }
      >
        <MainBanner />
      </Suspense>
      <Brand />
      <Food />
      <FoodCategory />
      <AboutUs />
      <Secure />
      <Alham />
      <Togtwortoi />
      <News />
    </div>
  );
};

export default Home;
