import React from "react";
import { useCmsPosts, useCmsTags } from "@/src/graphql/queries/kb";
import FoodCategoryCarousel from "./foodCategoryCarousel";

export default async function FoodCategory() {
  const localeMap: Record<string, string> = {
    "en-us": "en",
    mn: "mn",
  };

  const currentLang = localeMap || "mn";

  const { cmsTags } = useCmsTags({});

  const { cmsPosts } = useCmsPosts({
    tagIds: [
      cmsTags.find((tag: { name: string }) => tag.name === "Food Category")
        ?._id,
    ],
    language: "mn",
  });
  return (
    <div>
      <FoodCategoryCarousel posts={cmsPosts} />
    </div>
  );
}
