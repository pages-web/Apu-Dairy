"use client";

import React, { useState } from "react";
import { ICmsPost } from "@/src/graphql/types/cms.types";
import Content from "./content";

interface Props {
  posts: ICmsPost[];
}

const ZamnalCarousel = ({ posts }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full px-2 sm:px-4 md:px-8 lg:px-16">
      <Content
        posts={posts}
        activeIndex={activeIndex}
        onSelect={setActiveIndex}
      />
    </div>
  );
};

export default ZamnalCarousel;
