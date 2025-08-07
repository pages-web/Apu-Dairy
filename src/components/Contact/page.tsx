"use client";

import React from "react";
import { useCmsPosts } from "@/src/graphql/queries/kb";
import ContactCarousel from "./carousel";

export default function Contact() {
  const tagIds = ["hVKmR3N5CSfcBFv-lD4_Y"];

  const { cmsPosts } = useCmsPosts({
    tagIds,
    language: "mn",
  });

  return (
    <div>
      <ContactCarousel posts={cmsPosts} />
    </div>
  );
}
