"use client";

import React from "react";
import { useCmsPosts } from "@/src/graphql/queries/kb";
import NewsCarousel from "./newsCarousel";
import { useLocale } from "next-intl";

const NEWS_TAG_ID = "PtP0iD42Hp1YkM3uO_DFg";

export default function News() {
  const locale = useLocale();

  const { cmsPosts } = useCmsPosts({
    tagIds: [NEWS_TAG_ID],
    language: locale,
  });

  return (
    <div className="px-3">
      <NewsCarousel posts={cmsPosts} />
    </div>
  );
}
