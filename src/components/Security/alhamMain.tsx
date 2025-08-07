"use client";

import { ICmsPost } from "@/src/graphql/types/cms.types";

const AlhamMain = ({ post }: { post: ICmsPost }) => {
  return (
    <div className="w-full flex flex-col items-center md:mt-5 lg:mt-5">
      <div className="max-w-[800px] w-full px-2 space-y-3">
        <p className="text-[18px] font-semibold text-[#1a1a1a] leading-snug border w-24 text-center rounded-full">
          {post.title}
        </p>

        <div
          className="text-[#353535] text-[16px] leading-[140%] font-medium"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <div className="w-full h-[1px] bg-gray-800" />
      </div>
    </div>
  );
};

export default AlhamMain;
