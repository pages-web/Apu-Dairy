"use client";

import React from "react";
import { useCmsPosts } from "@/src/graphql/queries/kb";
import ContactCarousel from "./carousel";
import Skeleton from "../Skeleton/page";

export default function Contact() {
  const tagIds = ["hVKmR3N5CSfcBFv-lD4_Y"];

  const { cmsPosts, loading } = useCmsPosts({
    tagIds,
    language: "mn",
  });
  if (loading) {
    return <Skeleton />;
  }

  return (
    <div>
      <ContactCarousel posts={cmsPosts} />
    </div>
  );
}
