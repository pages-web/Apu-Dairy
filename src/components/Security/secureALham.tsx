"use client";

import { ICmsPost } from "@/src/graphql/types/cms.types";

const SecureMain = ({ post }: { post: ICmsPost }) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-[#444546] text-center font-sf-pro-rounded text-[42px] font-semibold capitalize mb-5">
        {post.title}
      </h1>

      <div className="max-w-4xl w-full text-center text-black text-lg md:text-2xl leading-relaxed font-sf-pro-rounded">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </div>
  );
};

export default SecureMain;
