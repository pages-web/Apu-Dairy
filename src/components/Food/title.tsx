"use client";

import { ICmsPost } from "@/src/graphql/types/cms.types";
import { Button } from "../ui/Button/Button";

const Food = ({ post }: { post: ICmsPost }) => {
  return (
    <div className="relative w-full flex flex-col items-center justify-start px-4 sm:px-6 md:px-8">
      <Button className="border rounded-full border-red-600 px-4 py-2 text-sm sm:text-base">
        Бүтээгдэхүүн
      </Button>

      <h1 className="text-2xl sm:text-3xl font-medium text-[#414545] text-center mt-4 sm:mt-5 font-sf-pro-rounded">
        {post.title}
      </h1>

      <div className="max-w-4xl w-full text-center text-black font-serif font-normal text-base sm:text-lg md:text-2xl leading-relaxed">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </div>
  );
};

export default Food;
