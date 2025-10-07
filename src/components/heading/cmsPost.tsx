"use client";

import { useMemo } from "react";
import MainBannerCarousel from "./cmsCarusel";
import { useCmsPosts, useCmsTags } from "@/src/graphql/queries/kb";

const MainBanner = () => {
  const { cmsTags } = useCmsTags({});

  const bannerTagId = useMemo(
    () => cmsTags.find((tag: { name: string }) => tag.name === "Bannet")?._id,
    [cmsTags]
  );

  const { cmsPosts } = useCmsPosts({
    tagIds: bannerTagId ? [bannerTagId] : [],
    language: "mn",
  });

  return (
    <div className="w-full">
      <MainBannerCarousel posts={cmsPosts} />
    </div>
  );
};

export default MainBanner;
