import React from "react";
import { ICmsPost } from "@/src/graphql/types/cms.types";
import SecureMain from "./images";

const ALhamItemCarousel = ({ posts }: { posts: ICmsPost[] }) => {
  return (
    <div className="w-full max-w-[1400px] px-4 py-10">
      <div className="w-full" data-aos="fade-up">
        <div className="flex flex-wrap overflow-visible justify-start gap-8">
          {posts.map((post, index) => (
            <div key={index} className="shrink-0 px-2 max-w-[320px] w-full">
              <SecureMain post={post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ALhamItemCarousel;
