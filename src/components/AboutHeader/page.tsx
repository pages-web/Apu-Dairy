"use client";

import React from "react";
import { useCmsPosts, useCmsTags } from "@/src/graphql/queries/kb";
import HeaderCarousel from "./headerCarousel";

export default function AboutHeader() {
  const localeMap: Record<string, string> = {
    en: "en",
    mn: "mn",
  };

  const currentLang = localeMap["mn"];

  const { cmsTags } = useCmsTags({});
  const tagId = cmsTags.find(
    (tag: { name: string }) => tag.name === "About Header"
  )?._id;

  const { cmsPosts } = useCmsPosts({
    tagIds: [tagId],
    language: "mn",
  });

  return (
    <div>
      <HeaderCarousel posts={cmsPosts} />
    </div>
  );
}
