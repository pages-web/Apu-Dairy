"use client";

import React, { useState } from "react";
import { ICmsPost } from "@/src/graphql/types/cms.types";
import Other from "./otherJor";
import ThhirdItem from "./thirdItemImage";

const ImageCarousel = ({ posts }: { posts: ICmsPost[] }) => {
  return (
    <div>
      {posts.map((post, index) => (
        <div key={index}>
          <ThhirdItem posts={post} />
        </div>
      ))}
    </div>
  );
};

export default ImageCarousel;
