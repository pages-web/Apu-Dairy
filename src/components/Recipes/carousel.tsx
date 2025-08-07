import React from "react";
import { ICmsPost } from "@/src/graphql/types/cms.types";
import Item from "./item";

const Carousels = ({ posts }: { posts: ICmsPost[] }) => {
  const leftPost = posts[0];
  const topRightPost = posts[1];
  const bottomRightPost = posts[2];

  return (
    <div className="grid md:grid-cols-3 gap-4 py-10 max-w-[1400px] mx-auto px-1">
      <div className="md:col-span-2 md:row-span-2 h-full mt-10">
        <Item post={leftPost} large />
      </div>

      <div className="flex flex-col gap-4 mt-10 md:order-none order-2">
        <Item post={topRightPost} small />
        <Item post={bottomRightPost} small />
      </div>
    </div>
  );
};

export default Carousels;
