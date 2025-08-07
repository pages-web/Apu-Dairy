"use client";

import React from "react";
import { useCmsPosts, useCmsTags } from "@/src/graphql/queries/kb";
import ZamnalCarousel from "./zamnalCarousel";

export default function Zamnal() {
  const localeMap: Record<string, string> = {
    "en-us": "en",
    mn: "mn",
  };

  const currentLang = localeMap["mn"];

  const { cmsTags } = useCmsTags({});
  const tagId = cmsTags.find(
    (tag: { name: string }) => tag.name === "History"
  )?._id;

  const { cmsPosts } = useCmsPosts({
    tagIds: [tagId],
    language: "mn",
  });

  return (
    <div>
      <ZamnalCarousel posts={cmsPosts} />
    </div>
  );
}
