"use client";

import React from "react";
import { useCmsPosts, useCmsTags } from "@/src/graphql/queries/kb";
import FoodCarousel from "./foodCarousel";
import FoodItem from "./foodItem";
import { useLocale } from "next-intl";

export default function Food() {
  const locale = useLocale();

  const { cmsTags } = useCmsTags({});

  const foodTagId =
    cmsTags?.find((tag: { name: string }) => tag.name === "Food")?._id || "";

  const { cmsPosts } = useCmsPosts({
    tagIds: [foodTagId],
    language: locale,
  });

  return (
    <div>
      <FoodCarousel posts={cmsPosts} />
      <FoodItem />
    </div>
  );
}
