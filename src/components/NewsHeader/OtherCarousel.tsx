"use client";

import React from "react";
import { ICmsPost } from "@/src/graphql/types/cms.types";
import Images from "./image";

const OtherCarousel = ({ posts }: { posts: ICmsPost[] }) => {
  return (
    <div className="sm:px-8 md:px-16 xl:px-28 2xl:px-52 max-w-full mx-auto">
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-full"
        data-aos="fade-up"
      >
        {posts.map((post, index) => (
          <div key={index}>
            <Images post={post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherCarousel;
