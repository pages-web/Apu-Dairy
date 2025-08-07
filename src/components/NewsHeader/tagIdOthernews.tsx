"use client";

import React from "react";
import { useCmsPosts } from "@/src/graphql/queries/kb";
import OtherCarousel from "./OtherCarousel";

export default function Else() {
  const tagIds = ["HbDBuntlQiyGYEL-MKZGo"];

  const { cmsPosts } = useCmsPosts({
    tagIds,
    language: "mn",
  });

  return (
    <div>
      <OtherCarousel posts={cmsPosts} />
    </div>
  );
}
