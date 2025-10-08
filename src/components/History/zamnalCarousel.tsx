"use client";
import React from "react";
import { ICmsPost } from "@/src/graphql/types/cms.types";
import HorizontalTwoRowTimeline from "./content";

interface Props {
  posts: ICmsPost[];
}

const ZamnalCarousel = ({ posts }: Props) => {
  return (
    <div className="w-full px-2 sm:px-4 md:px-8 lg:px-16">
      <HorizontalTwoRowTimeline posts={posts} />
    </div>
  );
};

export default ZamnalCarousel;
