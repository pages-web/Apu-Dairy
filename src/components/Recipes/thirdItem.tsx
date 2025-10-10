"use client";

import React, { useEffect } from "react";
import JorCarousel from "./jorCarousel";
import { useParams } from "next/navigation";
import { useCmsPostsByCategory } from "@/src/graphql/queries/kb";
import ImageCarousel from "./imageCarousel";

const ThirdItem = () => {
  const params = useParams();
  const currentLocale = params.locale as string;

  const { posts: cmsPosts, refetch } = useCmsPostsByCategory("item", {
    language: currentLocale,
  });

  useEffect(() => {
    refetch();
  }, [currentLocale]);

  return (
    <div>
      <ImageCarousel posts={cmsPosts} />
    </div>
  );
};

export default ThirdItem;
