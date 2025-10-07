"use client";

import React, { Suspense } from "react";
import { useCmsPosts, useCmsTags } from "@/src/graphql/queries/kb";
import AlhamCarousel from "./alhamCarousel";
import { useLocale } from "next-intl";

export default function Alham() {
  const locale = useLocale();

  const { cmsTags, loading: tagsLoading } = useCmsTags({});
  const alhamTagId =
    cmsTags?.find((tag: { name: string }) => tag.name === "Alham")?._id || "";

  const { cmsPosts, loading: postsLoading } = useCmsPosts({
    tagIds: alhamTagId ? [alhamTagId] : [],
    language: locale,
  });

  return (
    <div className="w-full max-w-[1400px] mx-auto">
      <Suspense>
        <div className="w-full">
          <AlhamCarousel posts={cmsPosts} />
        </div>
      </Suspense>
    </div>
  );
}
