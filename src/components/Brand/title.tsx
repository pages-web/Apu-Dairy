"use client";

import { ICmsPost } from "@/src/graphql/types/cms.types";
import BrandNew from "./brandNew";

const Brand = ({ post }: { post: ICmsPost }) => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start">
      <div className="w-full max-w-4xl text-center mb-20">
        <img
          src="/images/Group.svg"
          alt="brand image"
          className="mx-auto mb-8"
        />
        <div
          className="text-[#353535] font-medium leading-snug md:leading-normal md:mb-8"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <BrandNew />
      </div>
    </div>
  );
};

export default Brand;
