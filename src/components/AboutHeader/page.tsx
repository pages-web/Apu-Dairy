"use client";

import React from "react";
import { useCmsPosts, useCmsTags } from "@/src/graphql/queries/kb";
import HeaderCarousel from "./headerCarousel";
import { useLocale } from "next-intl";

export default function AboutHeader() {
  const locale = useLocale();
  const { cmsTags } = useCmsTags({});

  const tagId = cmsTags?.find(
    (tag: { name: string }) => tag.name === "About Header"
  )?._id;

  const { cmsPosts } = useCmsPosts({
    tagIds: tagId ? [tagId] : [],
    language: locale,
  });

  return (
    <div>
      <HeaderCarousel posts={cmsPosts} />
    </div>
  );
}
