"use client";

import React from "react";
import { useCmsPosts, useCmsTags } from "@/src/graphql/queries/kb";
import { useLocale } from "next-intl";
import FAQ from "./faq";

export default function FAQProduct() {
  const tags = ["lEXOAHnCcJAWACD6gXnG7"];

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
