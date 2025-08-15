"use client";

import Image from "next/image";
import { ICmsPost } from "@/src/graphql/types/cms.types";

const News = ({ post }: { post: ICmsPost }) => {
  return (
    <div className="flex flex-col w-full h-full gap-3">
      {post.thumbnail?.url && (
        <div className="w-full rounded-xl overflow-hidden">
          <Image
            src={`https://apudairy.api.erxes.io/api/read-file?key=${post.thumbnail.url}`}
            alt={post.title || "thumbnail"}
            width={400}
            height={250}
            className="object-cover w-[100%] h-[200px] rounded-xl"
            loading="lazy"
          />
        </div>
      )}

      <div className="flex justify-between text-sm text-gray-500 px-1">
        <p>2 сарын 4</p>
        <p>5 mins read</p>
      </div>

      <p className="text-[#353535] font-sf-pro-rounded text-[16px] leading-[25px] px-1">
        {post.title}
      </p>
    </div>
  );
};

export default News;
