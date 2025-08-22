"use client";

import React from "react";
import { useCmsPosts, useCmsTags } from "@/src/graphql/queries/kb";
import FoodItemCarousel from "./footItemCarousel";
import { useLocale } from "next-intl";

export default function FoodItem() {
  const { cmsTags } = useCmsTags({});

  const foodTagId =
    cmsTags?.find((tag: { name: string }) => tag.name === "FoogImage")?._id ||
    "";

  const locale = useLocale();

  const { cmsPosts } = useCmsPosts({
    tagIds: [foodTagId],
    language: locale,
  });

  return (
    <div className="px-3">
      <FoodItemCarousel posts={cmsPosts} />
    </div>
  );
}
