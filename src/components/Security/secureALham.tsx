"use client";

import { ICmsPost } from "@/src/graphql/types/cms.types";

const SecureMain = ({ post }: { post: ICmsPost }) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-[32px] font-medium text-[#353535] text-center font-sf-pro-rounded leading-none mt-5">
        {post.title}
      </h1>

      <div className="max-w-4xl w-full text-center text-black text-lg md:text-2xl leading-relaxed font-sf-pro-rounded [&_p]:my-2 [&_h1]:my-2 [&_h2]:my-2 [&_br]:hidden">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </div>
  );
};

export default SecureMain;
