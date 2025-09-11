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
    <div className="w-full flex overflow-x-auto gap-4 p-2">
      {posts.map((post, index) => (
        <div key={post._id} className="flex-shrink-0 w-full sm:w-2/3 md:w-1/3">
          <Content
            posts={posts}
            activeIndex={activeIndex}
            onSelect={setActiveIndex}
          />
        </div>
      ))}
    </div>
  );
};

export default ZamnalCarousel;
