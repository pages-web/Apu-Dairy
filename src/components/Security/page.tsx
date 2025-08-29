"use client";

import React, { Suspense } from "react";
import { useCmsPosts, useCmsTags } from "@/src/graphql/queries/kb";
import SecureCarousel from "./secureCarousel";
import { useLocale } from "next-intl";

export default function Secure() {
  const locale = useLocale();

  const { cmsTags } = useCmsTags({});
  const secureTagId =
    cmsTags?.find((tag: { name: string }) => tag.name === "Secure")?._id || "";

  const { cmsPosts } = useCmsPosts({
    tagIds: secureTagId ? [secureTagId] : [],
    language: locale,
  });

  return (
    <div className="px-3">
      <Suspense>
        <SecureCarousel posts={cmsPosts} />
      </Suspense>
    </div>
  );
}
