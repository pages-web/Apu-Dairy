"use client";

import React from "react";
import { useCmsPosts, useCmsTags } from "@/src/graphql/queries/kb";
import AjliinBair from "@/src/components/Ajliin Bair/page";
import Songon from "@/src/components/Shalgaruulalt/page";
import HumanCarousel from "./humanCarousel";
import { useLocale } from "next-intl";
import CardPage from "@/src/app/[locale]/cart/page";

export default function Human() {
  const tagIds = ["38L6gL8uBNBr8RSQim8dd"];
  const locale = useLocale();

  const { cmsPosts } = useCmsPosts({
    tagIds,
    language: locale,
  });

  return (
    <div>
      <HumanCarousel posts={cmsPosts} />
      <CardPage />
      <AjliinBair />
      <Songon />
    </div>
  );
}
