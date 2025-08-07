import React from "react";
import { useCmsPosts, useCmsTags } from "@/src/graphql/queries/kb";
import NewsCarousel from "./newsCarousel";

export default async function News() {
  const localeMap: Record<string, string> = {
    "en-us": "en",
    mn: "mn",
  };

  const currentLang = localeMap || "mn";

  const { cmsTags } = useCmsTags({});

  const { cmsPosts } = useCmsPosts({
    tagIds: [cmsTags.find((tag: { name: string }) => tag.name === "News")?._id],
    language: "mn",
  });

  return (
    <div className="px-3">
      <NewsCarousel posts={cmsPosts} />
    </div>
  );
}
