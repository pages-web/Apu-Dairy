"use client";
import React from "react";
import { ICmsPost } from "@/src/graphql/types/cms.types";
import About from "./content";

const HeaderCarousel = ({ posts }: { posts: ICmsPost[] }) => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full max-w-full pb-10" data-aos="fade-up">
        <div>
          {posts.map((post, index) => (
            <div className="w-full" key={index}>
              <About post={post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeaderCarousel;
