"use client";

import React from "react";
import Image from "../ui/image";
import { ICmsPost } from "@/src/graphql/types/cms.types";

interface Props {
  posts: ICmsPost[];
}

const HorizontalTwoRowTimeline = ({ posts }: Props) => {
  const topPosts = posts.filter((_, idx) => idx % 2 === 0);
  const bottomPosts = posts.filter((_, idx) => idx % 2 !== 0);

  const renderPost = (post: ICmsPost) => (
    <div className="flex-shrink-0 w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px] relative cursor-pointer">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4">
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full overflow-hidden shadow-sm flex-shrink-0 mx-auto md:mx-0">
          {post.thumbnail?.url && (
            <Image
              src={`https://apudairy.api.erxes.io/api/read-file?key=${post.thumbnail.url}`}
              alt={post.title}
              fill
              quality={100}
              className="object-cover rounded-2xl"
            />
          )}
        </div>
        <div className="flex-1 text-center md:text-left px-1 sm:px-2">
          <p
            className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed line-clamp-5"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative w-full mx-auto max-w-full md:max-w-[900px] lg:max-w-[1200px] xl:max-w-[1400px] py-8 sm:py-12 md:py-16">
      <div className="hidden md:block">
        <div className="absolute top-1/2 left-0 right-0 border-t-2 border-gray-300 -translate-y-4 z-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 z-0">
          <h2 className="text-[16px] sm:text-[18px] md:text-[22px] lg:text-[26px] font-bold text-[#ED3237] text-center uppercase whitespace-nowrap">
            APU Dairy
          </h2>
        </div>
        <div className="absolute top-1/2 left-0 right-0 border-t-2 border-gray-300 translate-y-4"></div>
      </div>
      <div className="block md:hidden space-y-6">
        {posts.map((post, idx) => (
          <div key={post._id || idx} className="w-full">
            {renderPost(post)}
          </div>
        ))}
      </div>
      <div className="hidden md:block">
        <div className="w-full overflow-x-auto scroll-smooth no-scrollbar mb-[200px] -mx-2 px-2">
          <div className="inline-flex gap-5 md:gap-8 lg:gap-12">
            {topPosts.map((post, idx) => (
              <div key={post._id || idx}>{renderPost(post)}</div>
            ))}
          </div>
        </div>
        <div className="w-full overflow-x-auto scroll-smooth no-scrollbar -mx-2 px-2">
          <div className="inline-flex gap-5 md:gap-8 lg:gap-12">
            {bottomPosts.map((post, idx) => (
              <div key={post._id || idx}>{renderPost(post)}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalTwoRowTimeline;
