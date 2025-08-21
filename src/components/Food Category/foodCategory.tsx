"use client";

import React from "react";
import { useCmsPosts, useCmsTags } from "@/src/graphql/queries/kb";
import FoodCategoryCarousel from "./foodCategoryCarousel";
import { useLocale } from "next-intl";

export default function FoodCategory() {
  const locale = useLocale();

  const { cmsTags, loading: tagsLoading } = useCmsTags({});

  const foodCategoryTagId =
    cmsTags?.find((tag: { name: string }) => tag.name === "Food Category")
      ?._id || "";

  const { cmsPosts, loading: postsLoading } = useCmsPosts({
    tagIds: [foodCategoryTagId],
    language: locale,
  });

  return (
    <div>
      <FoodCategoryCarousel posts={cmsPosts} />
    </div>
  );
}
