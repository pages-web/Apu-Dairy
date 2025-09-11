"use client";

import { ICmsPost } from "@/src/graphql/types/cms.types";
import { Clock, Flame } from "lucide-react";
import Image from "next/image";

const Item = ({ post }: { post: ICmsPost }) => {
  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-[500px] mx-auto">
      {post.thumbnail?.url && (
        <div className="relative w-full sm:w-[90%] md:w-full aspect-[16/9] rounded-3xl overflow-hidden mx-auto">
          <Image
            src={`https://apudairy.api.erxes.io/api/read-file?key=${post.thumbnail.url}`}
            alt={post.title}
            fill
            quality={100}
            className="object-cover rounded-3xl"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 50vw"
            loading="lazy"
          />
        </div>
      )}
      <div className="w-full px-2">
        <div
          className="text-black font-sf-pro-rounded text-[16px] sm:text-[18px] leading-[25px] sm:leading-[28px] font-normal text-center sm:text-left"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <div className="flex items-center gap-4 text-gray-700 text-sm font-medium mt-3 justify-center sm:justify-start">
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
