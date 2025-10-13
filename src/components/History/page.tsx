"use client";

import React from "react";
import { useCmsPosts, useCmsTags } from "@/src/graphql/queries/kb";
import ZamnalCarousel from "./zamnalCarousel";

export default function Zamnal() {
  const NEWS_TAG_ID = "cEJ2MKRKUTUddq0oEi5lJ";
  const { cmsPosts } = useCmsPosts({
    tagIds: [NEWS_TAG_ID],
  });

  return (
    <div>
      <ZamnalCarousel posts={cmsPosts} />
    </div>
  );
}
