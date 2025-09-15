"use client";
import React, { useState } from "react";
import { ICmsPost } from "@/src/graphql/types/cms.types";
import Content from "./content";

interface Props {
  posts: ICmsPost[];
}

const ZamnalCarousel = ({ posts }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full flex overflow-x-auto gap-4 p-2">
      {posts.map((post, index) => (
        <div key={post._id} className="flex-shrink-0 w-full sm:w-2/3 md:w-1/3">
          <Content
            posts={posts}
            activeIndex={activeIndex}
            onSelect={setActiveIndex}
          />
        </div>
      ))}
    </div>
  );
};

export default ZamnalCarousel;

//  <div className="flex flex-col items-center justify-center mb-10">
//         <h2 className="text-sm font-medium leading-normal text-[#ED3237] bg-[rgb(250,203,205)] rounded-full w-32 h-7 flex items-center justify-center mb-10">
//           {t("historicalJourney")}
//         </h2>
//         <h2 className="text-[#353535] text-center text-2xl font-medium mt-2">
//           {t("historyTrace")}
//         </h2>
//       </div>
