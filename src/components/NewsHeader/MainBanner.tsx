"use client";

import React from "react";
import { useCmsPosts } from "@/src/graphql/queries/kb";
import NewsCarousel from "./newsCarousel";
import Skeleton from "../Skeleton/page";

export default function Main() {
  // Шууд tag_id-г оруулж байна
  const tagIds = ["UOCgYMVGISuVFvSej18EI"];

  const { cmsPosts, loading } = useCmsPosts({
    tagIds,
    language: "mn",
  });
  if (loading) {
    return <Skeleton />;
  }

  return (
    <div>
      <NewsCarousel posts={cmsPosts} />
    </div>
  );
}
