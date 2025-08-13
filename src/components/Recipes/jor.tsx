import React from "react";
import { useCmsPosts, useCmsTags } from "@/src/graphql/queries/kb";
import JorCarousel from "./jorCarousel";

export default async function Joruud() {
  const localeMap: Record<string, string> = {
    en: "en",
    mn: "mn",
  };

  const currentLang = localeMap || "mn";

  const { cmsTags } = useCmsTags({});

  const { cmsPosts } = useCmsPosts({
    tagIds: [
      cmsTags.find((tag: { name: string }) => tag.name === "Joruud")?._id,
    ],
    language: "mn",
  });
  return (
    <div className="px-3">
      <JorCarousel posts={cmsPosts} />
    </div>
  );
}
