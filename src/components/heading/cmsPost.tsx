"use client";

import { useMemo } from "react";
import MainBannerCarousel from "./cmsCarusel";
import { useCmsPosts, useCmsTags } from "@/src/graphql/queries/kb";

const MainBanner = () => {
  const { cmsTags } = useCmsTags({});

  // Tag ID-г cache хийж хадгалах
  const bannerTagId = useMemo(
    () => cmsTags.find((tag: { name: string }) => tag.name === "Bannet")?._id,
    [cmsTags]
  );

  const { cmsPosts } = useCmsPosts({
    tagIds: bannerTagId ? [bannerTagId] : [],
    language: "mn",
  });

  return (
    <div>
      <MainBannerCarousel posts={cmsPosts} />
    </div>
  );
};

export default MainBanner;
