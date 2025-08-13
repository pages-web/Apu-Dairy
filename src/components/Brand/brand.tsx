import React from "react";
import { useCmsPosts, useCmsTags } from "@/src/graphql/queries/kb";
import BrandCarousel from "./brandCarousel";

export default async function Brand() {
  const localeMap: Record<string, string> = {
    en: "en",
    mn: "mn",
  };

  const currentLang = localeMap || "mn";

  const { cmsTags } = useCmsTags({});

  const { cmsPosts } = useCmsPosts({
    tagIds: [
      cmsTags.find((tag: { name: string }) => tag.name === "Brand")?._id,
    ],
    language: "mn",
  });
  return (
    <div>
      <BrandCarousel posts={cmsPosts} />
    </div>
  );
}
