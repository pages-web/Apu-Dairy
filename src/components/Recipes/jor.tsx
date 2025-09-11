"use client";

import React from "react";
import { useCmsPosts } from "@/src/graphql/queries/kb";
import JorCarousel from "./jorCarousel";
import { useLocale } from "next-intl";

const JORUUD_TAG_ID = "C3hPHx0bBH-Me_jN3Smz_";

const Joruud = () => {
  const locale = useLocale();

  const { cmsPosts } = useCmsPosts({
    tagIds: [JORUUD_TAG_ID],
    language: locale,
  });

  return (
    <div>
      <JorCarousel posts={cmsPosts} />
    </div>
  );
};

export default Joruud;
