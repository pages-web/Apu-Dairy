"use client";

import React from "react";
import { useCmsPosts, useCmsTags } from "@/src/graphql/queries/kb";
import Carousels from "./carousel";
import { useLocale } from "next-intl";

export default function CategoryPage() {
  const locale = useLocale();
  const localeMap: Record<string, string> = { en: "en", mn: "mn" };
  const currentLang = localeMap[locale] || "mn";

  const { cmsTags } = useCmsTags();

  const tagId = cmsTags.find((tag) => tag.name === "Category")?._id;

  const { cmsPosts } = useCmsPosts({
    tagIds: tagId ? [tagId] : [],
    language: currentLang,
  });

  return (
    <div className="px-3">
      <Carousels posts={cmsPosts} />
    </div>
  );
}
