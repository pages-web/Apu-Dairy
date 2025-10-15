"use client";

import React, { useEffect } from "react";
import { useCmsPostsByCategory } from "@/src/graphql/queries/kb";
import FoodItemCarousel from "./footItemCarousel";
import { useParams } from "next/navigation";

export default function FoodItem() {
  const params = useParams();
  const currentLocale = params.locale as string;

  const { posts: cmsPosts, refetch } = useCmsPostsByCategory("highlight", {
    language: currentLocale,
  });

  useEffect(() => {
    refetch();
  }, [currentLocale]);

  return (
    <div className="px-3">
      <FoodItemCarousel posts={cmsPosts} />
    </div>
  );
}
