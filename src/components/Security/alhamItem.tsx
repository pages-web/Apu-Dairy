import React from "react";
import { useCmsPosts, useCmsTags } from "@/src/graphql/queries/kb";
import ALhamItemCarousel from "./alhamimageCarousel";

export default async function ALhamItem() {
  const localeMap: Record<string, string> = {
    en: "en",
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
      <ALhamItemCarousel posts={cmsPosts} />
    </div>
  );
}
