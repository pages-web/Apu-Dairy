"use client";

import { ICmsPost } from "@/src/graphql/types/cms.types";
import { Clock, Flame } from "lucide-react";
import Image from "next/image";

const Item = ({ post }: { post: ICmsPost }) => {
  return (
    <div className="flex flex-col items-center gap-4 px-4 sm:px-6">
      {post.thumbnail?.url && (
        <div className="relative w-full max-w-[900px] h-[60vw] sm:h-[480px] overflow-hidden rounded-3xl">
          <span className="absolute top-3 left-3 bg-white text-red-500 text-xs font-semibold px-2 py-0.5 rounded-full z-10">
            Веган
          </span>

          <Image
            src={`https://apudairy.api.erxes.io/api/read-file?key=${post.thumbnail.url}`}
            alt={post.title}
            fill
            quality={100}
            className="object-cover rounded-3xl"
          />
        </div>
      )}

      <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center w-full max-w-[650px] gap-2 sm:gap-0">
        <div
          className="text-black text-base sm:text-lg leading-6 sm:leading-[25px] font-sf-pro-rounded font-normal"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <div className="flex items-center gap-4 text-gray-700 text-sm font-medium">
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
