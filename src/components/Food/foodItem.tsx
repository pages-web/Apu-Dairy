"use client";

import React from "react";
import { useCmsPosts, useCmsTags } from "@/src/graphql/queries/kb";
import FoodItemCarousel from "./footItemCarousel";
import { useLocale } from "next-intl";

export default function FoodItem() {
  const locale = useLocale();

  const { cmsTags, loading: tagsLoading } = useCmsTags({});
  const foodImageTagId =
    cmsTags?.find((tag: { name: string }) => tag.name === "FoodImage")?._id ||
    "";
  const { cmsPosts, loading: postsLoading } = useCmsPosts({
    tagIds: [foodImageTagId],
    language: locale,
  });

  return (
    <div className="px-3">
      <FoodItemCarousel posts={cmsPosts} />
    </div>
  );
}
