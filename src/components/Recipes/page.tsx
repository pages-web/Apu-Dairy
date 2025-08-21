"use client";

import React from "react";
import { useCmsPosts, useCmsTags } from "@/src/graphql/queries/kb";
import Carousels from "./carousel";
import Joruud from "./jor";
import { useLocale } from "next-intl";

export default function JorPage() {
  const locale = useLocale();

  const { cmsTags, loading: tagsLoading } = useCmsTags({});

  const jorTagId = cmsTags.find(
    (tag: { name: string }) => tag.name === "Jor"
  )?._id;

  const { cmsPosts, loading } = useCmsPosts({
    tagIds: [jorTagId],
    language: locale,
  });

  return (
    <div className="px-3">
      <Carousels posts={cmsPosts} />
      <Joruud />
    </div>
  );
}
