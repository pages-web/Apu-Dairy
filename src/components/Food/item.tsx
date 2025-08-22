"use client";

import { ICmsPost } from "@/src/graphql/types/cms.types";
import { Clock, Flame } from "lucide-react";
import Image from "next/image";

const Item = ({ post }: { post: ICmsPost }) => {
  return (
    <div className="flex flex-col items-center gap-4 px-4 sm:px-6">
      {post.thumbnail?.url && (
        <div className="relative sm:h-80 md:h-[480px] overflow-hidden rounded-3xl max-w-[900px] md:w-[650px] w-[320px] h-[200px]">
          <span className="absolute top-3 left-3 bg-white text-red-500 text-xs font-semibold px-2 py-0.5 rounded-full z-10">
            Веган
          </span>

          <Image
            src={`https://apudairy.api.erxes.io/api/read-file?key=${post.thumbnail.url}`}
            alt={post.title}
            fill
            quality={100}
            className="object-cover rounded-3xl"
            loading="lazy"
          />
        </div>
      )}

      {/* Text + Time */}
      <div className="flex flex-col sm:flex-row w-full gap-3 p-4 items-start sm:items-start sm:mr-52">
        <div
          className="text-black text-base sm:text-lg leading-6 sm:leading-[25px] font-sf-pro-rounded font-normal whitespace-nowrap"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <div className="flex items-center gap-4 text-gray-700 text-sm font-medium mt-2 sm:mt-0">
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
