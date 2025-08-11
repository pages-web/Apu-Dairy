import React from "react";
import { ICmsPost } from "@/src/graphql/types/cms.types";
import Brand from "./title";

const BrandCarousel = ({ posts }: { posts: ICmsPost[] }) => {
  return (
    <div className="mt-28">
      {posts.map((post, index) => (
        <div key={index}>
          <Brand post={post} />
        </div>
      ))}
    </div>
  );
};

export default BrandCarousel;
