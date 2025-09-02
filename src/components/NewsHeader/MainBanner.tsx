"use client";

import React from "react";
import { useCmsPosts } from "@/src/graphql/queries/kb";
import NewsCarousel from "./newsCarousel";
import { useLocale } from "next-intl";

export default function Main() {
  // Шууд tag_id-г оруулж байна
  const tagIds = ["UOCgYMVGISuVFvSej18EI"];

  const locale = useLocale();

  const { cmsPosts } = useCmsPosts({
    tagIds,
    language: locale,
  });

  return (
    <div>
      <NewsCarousel posts={cmsPosts} />
    </div>
  );
}
