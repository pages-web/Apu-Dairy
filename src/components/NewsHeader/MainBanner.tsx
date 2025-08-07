"use client";

import React from "react";
import { useCmsPosts } from "@/src/graphql/queries/kb";
import NewsCarousel from "./newsCarousel";

export default function Main() {
  // Шууд tag_id-г оруулж байна
  const tagIds = ["UOCgYMVGISuVFvSej18EI"];

  const { cmsPosts } = useCmsPosts({
    tagIds,
    language: "mn",
  });

  return (
    <div>
      <NewsCarousel posts={cmsPosts} />
    </div>
  );
}
