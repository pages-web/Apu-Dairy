import React from "react";

import { ICmsPost } from "@/src/graphql/types/cms.types";
import Food from "./title";

const FoodCarousel = ({ posts }: { posts: ICmsPost[] }) => {
  return (
    <div>
      {posts.map((post, index) => (
        <div key={index}>
          <Food post={post} />
        </div>
      ))}
    </div>
  );
};

export default FoodCarousel;
