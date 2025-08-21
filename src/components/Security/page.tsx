"use client";

import React from "react";
import { useCmsPosts, useCmsTags } from "@/src/graphql/queries/kb";
import SecureCarousel from "./secureCarousel";
import { useLocale } from "next-intl";

export default function Secure() {
  const locale = useLocale();

  const { cmsTags, loading: tagsLoading } = useCmsTags({});
  const secureTagId =
    cmsTags?.find((tag: { name: string }) => tag.name === "Secure")?._id || "";

  const { cmsPosts, loading: postsLoading } = useCmsPosts({
    tagIds: secureTagId ? [secureTagId] : [],
    language: locale,
  });

  return (
    <div className="px-3">
      <SecureCarousel posts={cmsPosts} />
    </div>
  );
}
