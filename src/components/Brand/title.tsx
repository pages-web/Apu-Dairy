"use client";

import { ICmsPost } from "@/src/graphql/types/cms.types";
import BrandNew from "./brandNew";

const Brand = ({ post }: { post: ICmsPost }) => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start pt-16 md:pt-28 px-4">
      <div className="w-full max-w-4xl text-center mb-20">
        <img
          src="/images/Group.svg"
          alt="brand image"
          className="mx-auto mb-8"
        />
        <div
          className="text-[#353535] text-[48px] md:text-5xl font-medium leading-normal text-2xl md:mb-5"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <BrandNew />
      </div>
    </div>
  );
};

export default Brand;
