"use client";

import React from "react";
import { useCmsPosts, useCmsTags } from "@/src/graphql/queries/kb";
import { useLocale } from "next-intl";
import Item from "@/src/components/HuniiNoots/cart";

export default function CardPage() {
  const tags = [
    "s6DBTN9aBYvuTPvfCTMRd", // red card
    "wqlbGxAHIBH0WFq5PJsF9", // blue card
    "04D5cBojsYfI3UCMl21Jn", // yellow card
    "Ki3h0j7LGclf27wudzRQK", // red 2 card
    "69iXgS7Fagi0rmjMmJTuF", // another card
  ];

  const locale = useLocale();

  const { cmsPosts } = useCmsPosts({
    tagIds: tags,
    language: locale,
  });

  return (
    <div>
      <Item cmsPosts={cmsPosts} />
    </div>
  );
}
