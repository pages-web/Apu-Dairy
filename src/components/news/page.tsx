"use client";

import React from "react";
import { useCmsPosts, useCmsTags } from "@/src/graphql/queries/kb";
import NewsCarousel from "./newsCarousel";
import { useLocale } from "next-intl";

export default function News() {
  const locale = useLocale();
  const localeMap: Record<string, string> = { en: "en", mn: "mn" };
  const currentLang = localeMap[locale] || "mn";

  const { cmsTags } = useCmsTags({});
  const newsTagId = cmsTags.find((tag) => tag.name === "News")?._id;

  const { cmsPosts, loading } = useCmsPosts({
    tagIds: newsTagId ? [newsTagId] : [],
    language: currentLang,
  });

  if (loading) return <div>Loading...</div>;

  return (
    <div className="px-3">
      <NewsCarousel posts={cmsPosts} />
    </div>
  );
}
