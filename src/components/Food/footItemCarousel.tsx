import React from "react";
import { ICmsPost } from "@/src/graphql/types/cms.types";
import Item from "./item";

const FoodItemCarousel = ({ posts }: { posts: ICmsPost[] }) => {
  return (
    <div className="px-4 md:px-8 py-12 ">
      {/* Mobile & Tablet layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:hidden">
        {posts.map((post, index) => (
          <div key={index}>
            <Item post={post} />
          </div>
        ))}
      </div>

      {/* Desktop carousel layout */}
      <div className="hidden lg:block mt-12">
        <div className="flex gap-48 justify-center">
          {posts.map((post, index) => (
            <div key={index} className="w-[90vw] max-w-[500px] shrink-0 px-2">
              <Item post={post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodItemCarousel;
