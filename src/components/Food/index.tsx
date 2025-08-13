import React from "react";
import { useCmsPosts, useCmsTags } from "@/src/graphql/queries/kb";
import FoodCarousel from "./foodCarousel";
import FoodItem from "./foodItem";

export default async function Food() {
  const localeMap: Record<string, string> = {
    en: "en",
    mn: "mn",
  };

  const currentLang = localeMap || "mn";

  const { cmsTags } = useCmsTags({});

  const { cmsPosts } = useCmsPosts({
    tagIds: [cmsTags.find((tag: { name: string }) => tag.name === "Food")?._id],
    language: "mn",
  });
  return (
    <div>
      <FoodCarousel posts={cmsPosts} />
      <FoodItem />
    </div>
  );
}
