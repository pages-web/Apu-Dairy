"use client";

import { ICmsPost } from "@/src/graphql/types/cms.types";
import { Clock, Flame } from "lucide-react";
import Image from "next/image";

const Item = ({ post }: { post: ICmsPost }) => {
  return (
    <div className="flex flex-col items-center gap-4 max-w-[400px] mx-auto ">
      {post.thumbnail?.url && (
        <div className="relative w-full h-[200px] rounded-4xl overflow-hidden">
          <Image
            src={`https://apudairy.api.erxes.io/api/read-file?key=${post.thumbnail.url}`}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            quality={100}
            className="rounded-4xl object-cover"
            loading="lazy"
          />
        </div>
      )}
      <div className="w-full px-4">
        <div
          className="text-black font-sf-pro-rounded text-[16px] font-normal leading-[25px] font-sf-pro-rounded"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <div className="flex items-center gap-4 text-gray-700 text-sm font-medium mt-3">
          <div className="flex items-center gap-1">
            <Clock className="w-5 h-5 text-red-500" />
            <span>25 мин</span>
          </div>
          <div className="flex items-center gap-1">
            <Flame className="w-5 h-5 text-orange-500" />
            <span>826 ккал</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
