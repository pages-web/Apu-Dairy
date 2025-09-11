"use client";

import React from "react";
import { ICmsPost } from "@/src/graphql/types/cms.types";
import Images from "./image";

const OtherCarousel = ({ posts }: { posts: ICmsPost[] }) => {
  return (
    <div className="w-full">
      <div className="max-w-[1430px] mx-auto grid grid-cols-3 gap-6 justify-between px-4">
        {posts.map((post, index) => (
          <Images key={index} post={post} />
        ))}
      </div>
    </div>
  );
};

export default OtherCarousel;
