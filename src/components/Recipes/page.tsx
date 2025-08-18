"use client";

import React from "react";
import { useCmsPosts, useCmsTags } from "@/src/graphql/queries/kb";
import Carousels from "./carousel";
import Joruud from "./jor";
import Skeleton from "../Skeleton/page";

export default function JorPage() {
  const localeMap: Record<string, string> = {
    en: "en",
    mn: "mn",
  };

  const currentLang = localeMap || "mn";

  const { cmsTags } = useCmsTags({});

  const { cmsPosts, loading } = useCmsPosts({
    tagIds: [cmsTags.find((tag: { name: string }) => tag.name === "Jor")?._id],
    language: "mn",
  });
  if (loading) {
    return <Skeleton />;
  }

  return (
    <div className="px-3">
      <Carousels posts={cmsPosts} />
      <Joruud />
    </div>
  );
}
