"use client";

import React from "react";
import { useCmsPosts, useCmsTags } from "@/src/graphql/queries/kb";
import HeaderCarousel from "./headerCarousel";
import Skeleton from "../Skeleton/page";

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

  const { cmsPosts, loading } = useCmsPosts({
    tagIds: [tagId],
    language: "mn",
  });
  if (loading) {
    return <Skeleton />;
  }

  return (
    <div>
      <HeaderCarousel posts={cmsPosts} />
    </div>
  );
}
