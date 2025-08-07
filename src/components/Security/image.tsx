import React from "react";
import { useCmsPosts, useCmsTags } from "@/src/graphql/queries/kb";
import ImageCarousel from "./secureCarousel";

export default async function Image() {
  const localeMap: Record<string, string> = {
    "en-us": "en",
    mn: "mn",
  };

  const currentLang = localeMap || "mn";

  const { cmsTags } = useCmsTags({});

  const { cmsPosts } = useCmsPosts({
    tagIds: [
      cmsTags.find((tag: { name: string }) => tag.name === "Secure Image")?._id,
    ],
    language: "mn",
  });

  return (
    <div className="px-3">
      <ImageCarousel posts={cmsPosts} />
    </div>
  );
}
