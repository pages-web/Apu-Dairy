"use client";

import React from "react";
import { useCmsPosts, useCmsTags } from "@/src/graphql/queries/kb";
import Carousels from "./carousel";
import Joruud from "./jor";

export default function JorPage() {
  const localeMap: Record<string, string> = {
    "en-us": "en",
    mn: "mn",
  };

  const currentLang = localeMap || "mn";

  const { cmsTags } = useCmsTags({});

  const { cmsPosts } = useCmsPosts({
    tagIds: [cmsTags.find((tag: { name: string }) => tag.name === "Jor")?._id],
    language: "mn",
  });

  return (
    <div className="px-3">
      <Carousels posts={cmsPosts} />
      <Joruud />
    </div>
  );
}
