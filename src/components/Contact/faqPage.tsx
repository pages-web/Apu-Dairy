"use client";

import React from "react";
import { useCmsPosts, useCmsTags } from "@/src/graphql/queries/kb";
import { useLocale } from "next-intl";
import FAQ from "./faqContact";

export default function FAQContact() {
  const tags = ["B5_YsqJ9PjiClc2Z_L4JN"];

  const locale = useLocale();

  const { cmsPosts } = useCmsPosts({
    tagIds: tags,
    language: locale,
  });

  return (
    <div className="px-3">
      <FAQ cmsPosts={cmsPosts} />
    </div>
  );
}
