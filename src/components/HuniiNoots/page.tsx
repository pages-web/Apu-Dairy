"use client";

import React from "react";
import { useCmsPosts, useCmsTags } from "@/src/graphql/queries/kb";
import AjliinBair from "@/src/components/Ajliin Bair/page";
import Songon from "@/src/components/Shalgaruulalt/page";
import HumanCarousel from "./humanCarousel";
import Item from "@/src/app/[locale]/cart/item";
import { useLocale } from "next-intl";

export default function Human() {
  const locale = useLocale();

  const { cmsTags } = useCmsTags({});

  const tagId = cmsTags?.find(
    (tag: { name: string }) => tag.name === "Hunii noots"
  )?._id;

  const { cmsPosts } = useCmsPosts({
    tagIds: tagId ? [tagId] : [],
    language: locale,
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
