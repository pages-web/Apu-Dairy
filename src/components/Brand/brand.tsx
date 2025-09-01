"use client";

import React from "react";
import { useCmsPosts, useCmsTags } from "@/src/graphql/queries/kb";
import BrandCarousel from "./brandCarousel";
import { useLocale } from "next-intl";

export default function Brand() {
  const locale = useLocale();

  const { cmsTags, loading: tagsLoading } = useCmsTags({});
  const brandTagId =
    cmsTags?.find((tag: { name: string }) => tag.name === "Brand")?._id || "";
  const { cmsPosts } = useCmsPosts({
    tagIds: [brandTagId],
    language: locale,
  });
  return (
    <div>
      <BrandCarousel posts={cmsPosts} />
    </div>
  );
}
