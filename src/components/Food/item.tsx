"use client";

import { ICmsPost } from "@/src/graphql/types/cms.types";
import { Clock, Flame } from "lucide-react";
import Image from "next/image";

const Item = ({ post }: { post: ICmsPost }) => {
  return (
    <div className="flex flex-col items-center px-4 sm:px-6 lg:px-0 mr-20 sm:mr-0">
      {/* IMAGE */}
      {post.thumbnail?.url && (
        <div className="relative w-full max-w-[900px] aspect-[4/3] sm:aspect-[16/9] overflow-hidden rounded-3xl">
          <span className="absolute top-3 left-3 bg-white text-red-500 text-xs font-semibold px-2 py-0.5 rounded-full z-10">
            Веган
          </span>
          <Image
            src={`https://apudairy.api.erxes.io/api/read-file?key=${post.thumbnail.url}`}
            alt={post.title}
            fill
            quality={100}
            sizes="(max-width: 768px) 100vw,
           (max-width: 1200px) 80vw,
           900px"
            className="object-cover rounded-3xl"
            loading="lazy"
          />
        </div>
      )}

      {/* TEXT + INFO */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start mt-5 gap-6 w-[320px] sm:w-[500px] md:w-[650px] max-w-[900px]">
        {/* Text */}
        <div
          className="flex-1 text-black text-sm sm:text-base lg:text-lg leading-5 sm:leading-6 lg:leading-[25px] font-sf-pro-rounded font-normal text-center lg:text-left"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        {/* Time & kcal */}
        <div className="flex items-center gap-4 text-gray-700 text-xs sm:text-sm lg:text-base font-medium shrink-0">
          <div className="flex items-center gap-1 whitespace-nowrap">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
            <span>25 мин</span>
          </div>
          <div className="flex items-center gap-1 whitespace-nowrap">
            <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
            <span>826 ккал</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
