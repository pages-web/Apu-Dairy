import React from "react";
import { useCmsPosts, useCmsTags } from "@/src/graphql/queries/kb";
import SecureCarousel from "./secureCarousel";

export default async function Secure() {
  const localeMap: Record<string, string> = {
    en: "en",
    mn: "mn",
  };

  const currentLang = localeMap || "mn";

  const { cmsTags } = useCmsTags({});

  const { cmsPosts } = useCmsPosts({
    tagIds: [
      cmsTags.find((tag: { name: string }) => tag.name === "Secure")?._id,
    ],
    language: "mn",
  });

  return (
    <div className="px-3">
      <SecureCarousel posts={cmsPosts} />
    </div>
  );
}
