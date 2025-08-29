"use client";

import React from "react";
import { useCmsPosts } from "@/src/graphql/queries/kb";
import HeaderCarousel from "./headerCarousel";
import { useLocale } from "next-intl";

const ABOUT_HEADER_TAG_ID = "GEO51Oac_F23G9aS9qyf-";

export default function AboutHeader() {
  const locale = useLocale();

  const { cmsPosts } = useCmsPosts({
    tagIds: [ABOUT_HEADER_TAG_ID],
    language: locale,
  });

  return (
    <div>
      <HeaderCarousel posts={cmsPosts} />
    </div>
  );
}
