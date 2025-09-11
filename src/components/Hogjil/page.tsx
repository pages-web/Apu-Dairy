"use client";

import React from "react";
import { useCmsPosts, useCmsTags } from "@/src/graphql/queries/kb";
import HogjilCarousel from "./hogjilCarousel";

export default function Hogjil() {
  const { cmsTags } = useCmsTags();

  const tagId = cmsTags.find((tag) => tag.name === "Togtwor")?._id;

  const { cmsPosts } = useCmsPosts({
    tagIds: [tagId],
    language: "mn",
  });

  return (
    <div>
      <HogjilCarousel posts={cmsPosts} />
    </div>
  );
}
