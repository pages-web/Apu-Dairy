"use client";

import React from "react";
import { useCmsPosts } from "@/src/graphql/queries/kb";
import Carousels from "./carousel";

export default function Propage() {
  const tagIds = ["t1qFnmLl199-w0xxiXirN"];

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
