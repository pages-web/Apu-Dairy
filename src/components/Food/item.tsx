"use client";

import { ICmsPost } from "@/src/graphql/types/cms.types";
import { Clock, Flame } from "lucide-react";
import Image from "next/image";

const Item = ({ post }: { post: ICmsPost }) => {
  return (
    <div className="flex flex-col items-center lg:items-start gap-6 w-full max-w-[900px] mx-auto px-4 sm:px-6 lg:px-0">
      {post.thumbnail?.url && (
        <div className="relative w-full aspect-[16/9] sm:aspect-[16/9] rounded-3xl overflow-hidden">
          <span className="absolute top-3 left-3 bg-white text-red-500 text-xs sm:text-sm font-semibold px-2 py-0.5 rounded-full z-10">
            Веган
          </span>
          <Image
            src={`https://apudairy.api.erxes.io/api/read-file?key=${post.thumbnail.url}`}
            alt={post.title}
            fill
            quality={100}
            className="object-cover rounded-3xl"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 900px"
            loading="lazy"
          />
        </div>
      )}

      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 w-full">
        <div
          className="flex-1 text-black font-sf-pro-rounded text-base sm:text-lg lg:text-xl leading-6 sm:leading-7 lg:leading-8 text-center lg:text-left"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <div className="flex items-center gap-4 text-gray-700 text-sm sm:text-base lg:text-lg font-medium justify-center lg:justify-start shrink-0">
          <div className="flex items-center gap-1 whitespace-nowrap">
            <Clock className="w-5 h-5 text-red-500" />
            <span>25 мин</span>
          </div>
          <div className="flex items-center gap-1 whitespace-nowrap">
            <Flame className="w-5 h-5 text-orange-500" />
            <span>826 ккал</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
