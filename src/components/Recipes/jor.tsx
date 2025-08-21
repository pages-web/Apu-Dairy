"use client";

import React from "react";
import { useCmsPosts, useCmsTags } from "@/src/graphql/queries/kb";
import JorCarousel from "./jorCarousel";
import Skeleton from "../Skeleton/page";
import { useLocale } from "next-intl";

const Joruud = () => {
  const locale = useLocale();

  const { cmsTags } = useCmsTags({});

  const joruudTagId = cmsTags.find(
    (tag: { name: string }) => tag.name === "Joruud"
  )?._id;

  const { cmsPosts } = useCmsPosts({
    tagIds: [joruudTagId],
    language: locale,
  });

  return (
    <div className="px-3">
      <JorCarousel posts={cmsPosts} />
    </div>
  );
};

export default Joruud;
