import React from "react";
import { ICmsPost } from "@/src/graphql/types/cms.types";
import Item from "./item";

const FoodItemCarousel = ({ posts }: { posts: ICmsPost[] }) => {
  return (
    <div className="mt-12 w-full max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-6">
        {posts.map((post, index) => (
          <Item key={index} post={post} />
        ))}
      </div>
    </div>
  );
};

export default FoodItemCarousel;
