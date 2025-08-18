"use client";

import React from "react";
import { useCmsPosts } from "@/src/graphql/queries/kb";
import Carousels from "./carousel";

export default function SheepPage() {
  const tagIds = ["YH3h3ZQYH3qIjuBBF5FbJ"];

  const { cmsPosts } = useCmsPosts({
    tagIds,
    language: "mn",
  });

  return (
    <div className="px-3">
      <Carousels posts={cmsPosts} />
    </div>
  );
}
