"use client";
import React from "react";
import { ICmsPost } from "@/src/graphql/types/cms.types";
import Item from "./item";

const FoodItemCarousel = ({ posts }: { posts: ICmsPost[] }) => {
  return (
    <div className="px-4 md:px-8 py-12">
      {/* Mobile & Tablet layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:hidden">
        {posts.map((post, index) => (
          <div key={index}>
            <Item post={post} />
          </div>
        ))}
      </div>

      {/* Desktop horizontal scroll */}
      <div className="hidden lg:block mt-12">
        <div className="flex gap-8 overflow-x-auto scrollbar-hide px-4">
          {posts.map((post, index) => (
            <div
              key={index}
              className="min-w-[320px] max-w-[400px] flex-shrink-0"
            >
              <Item post={post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodItemCarousel;
