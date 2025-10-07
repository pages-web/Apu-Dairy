"use client";
import React from "react";
import { ICmsPost } from "@/src/graphql/types/cms.types";
import AlhamMain from "./alhamMain";

const AlhamCarousel = ({ posts }: { posts: ICmsPost[] }) => {
  return (
    <div className="w-full flex flex-col">
      {posts?.length > 0 && <AlhamMain posts={posts} />}
    </div>
  );
};

export default AlhamCarousel;
