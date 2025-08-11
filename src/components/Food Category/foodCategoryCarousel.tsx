import React, { useEffect } from "react";

import { ICmsPost } from "@/src/graphql/types/cms.types";
import Item from "./item";
import { Button } from "../ui/Button/Button";

const FoodCarousel = ({ posts }: { posts: ICmsPost[] }) => {
  return (
    <div>
      <div className="w-full md:max-w-[100%]" data-aos="fade-up">
        <div className="flex flex-wrap overflow-visible justify-center gap-2">
          {posts.map((post, index) => (
            <div
              key={index}
              className="flex-grow min-w-[280px] max-w-[335px] shrink-0 px-2"
            >
              <Item post={post} />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 flex justify-center">
        <Button className="h-10 w-36 px-6 rounded-full border border-white bg-white text-red-600 hover:bg-red-50 transition">
          Цааш үзэх
        </Button>
      </div>
    </div>
  );
};

export default FoodCarousel;
