"use client";
import React from "react";
import { ICmsPost } from "@/src/graphql/types/cms.types";
import AlhamMain from "./secureALham";

const SecureCarousel = ({ posts }: { posts: ICmsPost[] }) => {
  return (
    <div className="w-full max-sm:max-w-[90%] flex flex-col items-center justify-center mx-auto">
      <div>
        {posts.map((post, index) => (
          <div key={index}>
            <AlhamMain post={post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecureCarousel;
