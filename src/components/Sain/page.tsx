"use client";

import React from "react";
import { useCmsPosts, useCmsTags } from "@/src/graphql/queries/kb";
import Carousels from "./carousel";

export default function SainPage() {
  const { cmsTags } = useCmsTags();

  const tagId = cmsTags.find((tag) => tag.name === "Sain")?._id;

  const { cmsPosts } = useCmsPosts({
    tagIds: [tagId],
    language: "mn",
  });

  return (
    <div className="px-3">
      <Carousels posts={cmsPosts} />
    </div>
  );
}
