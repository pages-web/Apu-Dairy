"use client";

import { ICmsPost } from "@/src/graphql/types/cms.types";

const AlhamMain = ({ post }: { post: ICmsPost }) => {
  return (
    <div className="w-full flex flex-col md:mt-5">
      <div className="w-full max-w-[800px] px-4 sm:px-6 md:px-8 space-y-3">
        <p className="text-[16px] sm:text-[18px] font-semibold text-[#1a1a1a] leading-snug border w-fit px-4 py-1 text-center rounded-full">
          {post.title}
        </p>
        <div
          className="text-[#353535] text-[14px] sm:text-[16px] leading-[140%] font-medium"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <div className="w-full h-[1px] bg-gray-800" />
      </div>
    </div>
  );
};

export default AlhamMain;
