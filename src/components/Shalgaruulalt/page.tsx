"use client";

import React from "react";
import { useCmsPosts } from "@/src/graphql/queries/kb";
import CarouselSongon from "./carousel";
import { useLocale } from "next-intl";

export default function Songon() {
  const locale = useLocale();

  const tagIds = ["nuoUBA4lWsZRl6GXSXS9U"];

  const { cmsPosts } = useCmsPosts({
    tagIds,
    language: locale,
  });

  return (
    <div>
      <CarouselSongon posts={cmsPosts} />
    </div>
  );
}
