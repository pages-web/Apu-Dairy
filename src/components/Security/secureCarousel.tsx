"use client";
import React from "react";
import { ICmsPost } from "@/src/graphql/types/cms.types";
import AlhamMain from "./secureALham";

const SecureCarousel = ({ posts }: { posts: ICmsPost[] }) => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full md:max-w-[100%]" data-aos="fade-up">
        <div>
          {posts.map((post, index) => (
            <div key={index}>
              <AlhamMain post={post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecureCarousel;
