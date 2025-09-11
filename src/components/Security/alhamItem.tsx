"use client";

import React from "react";
import { useCmsPosts } from "@/src/graphql/queries/kb";
import ALhamItemCarousel from "./alhamimageCarousel";

const SECURE_IMAGE_TAG_ID = "6acFMCWKG14Gl_F3AvIzh";

export default function ALhamItem() {
  const { cmsPosts } = useCmsPosts({
    tagIds: [SECURE_IMAGE_TAG_ID],
    language: "mn",
  });

  return (
    <div>
      <ALhamItemCarousel posts={cmsPosts} />
    </div>
  );
}
