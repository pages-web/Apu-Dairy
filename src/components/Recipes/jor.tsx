"use client";

import React, { useEffect } from "react";
import JorCarousel from "./jorCarousel";
import { useParams } from "next/navigation";
import { useCmsPostsByCategory } from "@/src/graphql/queries/kb";

const Joruud = () => {
  const params = useParams();
  const currentLocale = params.locale as string;

  const { posts: cmsPosts, refetch } = useCmsPostsByCategory("joruud", {
    language: currentLocale,
  });

  useEffect(() => {
    refetch();
  }, [currentLocale]);

  return (
    <div>
      <JorCarousel posts={cmsPosts} />
    </div>
  );
};

export default Joruud;
