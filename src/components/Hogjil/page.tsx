"use client";

import React from "react";
import { useCmsPosts, useCmsTags } from "@/src/graphql/queries/kb";
import HogjilCarousel from "./hogjilCarousel";

export default function Hogjil() {
  const { cmsTags } = useCmsTags();

  const tagId = "Yf0NhKIt3cFiSO0Tq8Plu";

  const { cmsPosts } = useCmsPosts({
    tagIds: [tagId],
    language: "mn",
  });
  console.log("P{OSPKC", cmsPosts);
  return (
    <div>
      <HogjilCarousel posts={cmsPosts} />
    </div>
  );
}
