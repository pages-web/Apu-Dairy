"use client";

import React from "react";
import { useCmsPosts } from "@/src/graphql/queries/kb";
import ContactCarousel from "./carousel";
import { useLocale } from "next-intl";

export default function Contact() {
  const tagIds = ["hVKmR3N5CSfcBFv-lD4_Y"];
  const locale = useLocale();

  const { cmsPosts, loading } = useCmsPosts({
    tagIds,
    language: locale,
  });
  if (loading) {
    return <div>Wait Minutes ...</div>;
  }

  return (
    <div>
      <ContactCarousel posts={cmsPosts} />
    </div>
  );
}
