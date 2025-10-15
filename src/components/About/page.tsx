"use client";

import React from "react";
import { useCmsPosts, useCmsTags } from "@/src/graphql/queries/kb";
import AboutCarousel from "./aboutCarousel";
import { useLocale } from "next-intl";

export default function About() {
  const locale = useLocale();

  const { cmsTags } = useCmsTags({});
  const aboutTag = cmsTags?.find((tag) => tag.name === "About us");
  const aboutTagId = aboutTag?._id;

  const { cmsPosts } = useCmsPosts(
    aboutTagId
      ? {
          tagIds: [aboutTagId],
          language: locale,
        }
      : { skip: true }
  );

  return (
    <div className="px-3">
      <AboutCarousel posts={cmsPosts} />
    </div>
  );
}
