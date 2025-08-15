"use client";

import MainBannerCarousel from "./cmsCarusel";
import { useCmsPosts, useCmsTags } from "@/src/graphql/queries/kb";

const MainBanner = () => {
  const localeMap: Record<string, string> = {
    en: "en",
    mn: "mn",
  };

  const currentLang = localeMap || "mn";

  const { cmsTags } = useCmsTags({});

  const { cmsPosts } = useCmsPosts({
    tagIds: [
      cmsTags.find((tag: { name: string }) => tag.name === "Bannet")?._id,
    ],
    language: "mn",
  });
  return (
    <div>
      <MainBannerCarousel posts={cmsPosts} />
    </div>
  );
};

export default MainBanner;
