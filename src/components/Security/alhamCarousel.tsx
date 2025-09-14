"use client";
import React from "react";
import { ICmsPost } from "@/src/graphql/types/cms.types";
import AlhamMain from "./alhamMain";

const AlhamCarousel = ({ posts }: { posts: ICmsPost[] }) => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[500px] flex justify-center items-center mr-0 md:mr-[80px] lg:mr-[150px]">
        <div className="flex flex-col lg:flex-row lg:flex-wrap lg:overflow-visible gap-4 justify-center">
          {posts?.length > 0 &&
            posts.map((post, index) => (
              <div key={index} className="w-full sm:w-[320px] flex-shrink-0">
                <AlhamMain post={post} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AlhamCarousel;
