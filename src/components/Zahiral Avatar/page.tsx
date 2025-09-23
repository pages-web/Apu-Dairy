"use client";

import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import { useCmsPostsByCategory } from "@/src/graphql/queries/kb";
import Avatar from "./content";

const Zahiral = () => {
  const params = useParams();
  const currentLocale = params.locale as string;

  const { posts: cmsPosts, refetch } = useCmsPostsByCategory("zahiral", {
    language: currentLocale,
  });

  useEffect(() => {
    refetch();
  }, [currentLocale]);

  return (
    <div className="w-full max:w-[1400px]">
      <Avatar posts={cmsPosts} />
    </div>
  );
};

export default Zahiral;
