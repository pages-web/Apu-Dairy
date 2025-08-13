"use client";

import React from "react";
import { useCmsPosts, useCmsTags } from "@/src/graphql/queries/kb";
import AjliinBair from "@/src/components/Ajliin Bair/page";
import Songon from "@/src/components/Shalgaruulalt/page";
import HumanCarousel from "./humanCarousel";
import Item from "@/src/app/cart/item";

export default function Human() {
  const localeMap: Record<string, string> = {
    en: "en",
    mn: "mn",
  };

  const currentLang = localeMap["mn"];

  const { cmsTags } = useCmsTags({});
  const tagId = cmsTags.find(
    (tag: { name: string }) => tag.name === "Hunii noots"
  )?._id;

  const { cmsPosts } = useCmsPosts({
    tagIds: [tagId],
    language: "mn",
  });

  return (
    <div>
      <HumanCarousel posts={cmsPosts} />
      <Item />
      <AjliinBair />
      <Songon />
    </div>
  );
}
