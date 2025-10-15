// AboutHeader.tsx
"use client";

import React, { useMemo } from "react";
import { useCmsPosts } from "@/src/graphql/queries/kb";
import HeaderCarousel from "./headerCarousel";
import { useLocale } from "next-intl";

const ABOUT_HEADER_TAG_ID = "GEO51Oac_F23G9aS9qyf-";

export default function AboutHeader() {
  const locale = useLocale();

  const { cmsPosts, loading } = useCmsPosts({
    tagIds: [ABOUT_HEADER_TAG_ID],
    language: locale,
  });

  const memoPosts = useMemo(() => cmsPosts, [cmsPosts]);

  if (loading) {
    return <div className="h-[400px] bg-gray-100 animate-pulse" />;
  }

  return <HeaderCarousel posts={memoPosts} />;
}
