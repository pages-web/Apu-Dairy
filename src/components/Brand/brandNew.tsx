"use client";

import React from "react";
import { useCmsPosts, useCmsTags } from "@/src/graphql/queries/kb";
import { useLocale } from "next-intl";
import BrandItem from "./brandItem";

export default function BrandNew() {
  const tags = "OxDGC_5w9CYqiWSqM_r8r";

  const locale = useLocale();

  const { cmsPosts } = useCmsPosts({
    tagIds: tags,
    language: locale,
  });

  return (
    <div>
      <BrandItem cmsPosts={cmsPosts} />
    </div>
  );
}
