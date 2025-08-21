"use client";

import React from "react";
import { useCmsPosts, useCmsTags } from "@/src/graphql/queries/kb";
import AlhamCarousel from "./alhamCarousel";
import ALhamItem from "./alhamItem";
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
    <div className="w-full max-w-[1600px] mx-auto px-6 py-10 flex flex-col lg:flex-row">
      {/* Зүүн талд carousel */}
      <div className="w-full lg:w-1/2">
        <AlhamCarousel posts={cmsPosts} />
      </div>

      {/* Баруун талд item */}
      <div className="w-full lg:w-1/2 flex items-center">
        <ALhamItem />
      </div>
    </div>
  );
}
