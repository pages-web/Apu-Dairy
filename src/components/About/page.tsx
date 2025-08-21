"use client";

import React from "react";
import { useCmsPosts, useCmsTags } from "@/src/graphql/queries/kb";
import AboutCarousel from "./aboutCarousel";
import { useLocale } from "next-intl";

export default function About() {
  const locale = useLocale();

  const { cmsTags, loading: tagsLoading } = useCmsTags({});
  const aboutTagId =
    cmsTags?.find((tag: { name: string }) => tag.name === "About us")?._id ||
    "";

  const { cmsPosts, loading: postsLoading } = useCmsPosts({
    tagIds: aboutTagId ? [aboutTagId] : [],
    language: locale,
  });

  return (
    <div className="px-3">
      <AboutCarousel posts={cmsPosts} />
    </div>
  );
}
