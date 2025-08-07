import React from "react";
import { useCmsPosts, useCmsTags } from "@/src/graphql/queries/kb";
import FoodItemCarousel from "./footItemCarousel";

export default async function FoodItem() {
  const localeMap: Record<string, string> = {
    "en-us": "en",
    mn: "mn",
  };

  const currentLang = localeMap || "mn";

  const { cmsTags } = useCmsTags({});

  const { cmsPosts } = useCmsPosts({
    tagIds: [
      cmsTags.find((tag: { name: string }) => tag.name === "FoogImage")?._id,
    ],
    language: "mn",
  });
  return (
    <div className="px-3">
      <FoodItemCarousel posts={cmsPosts} />
    </div>
  );
}
