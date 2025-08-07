"use client";

import React from "react";
import { useCmsPosts, useCmsTags } from "@/src/graphql/queries/kb";
import AboutCarousel from "./aboutCarousel";

export default function About() {
  const localeMap: Record<string, string> = {
    "en-us": "en",
    mn: "mn",
  };

  const currentLang = localeMap["mn"] || "mn";

  const { cmsTags } = useCmsTags({});
  const aboutTagId = cmsTags.find((tag) => tag.name === "About us")?._id;

  const { cmsPosts } = useCmsPosts({
    tagIds: aboutTagId ? [aboutTagId] : [],
    language: currentLang,
  });

  return (
    <div className="px-3">
      <AboutCarousel posts={cmsPosts} />
    </div>
  );
}
