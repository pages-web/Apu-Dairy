"use client";

import { ICmsPost } from "@/src/graphql/types/cms.types";
import Image from "../ui/image";
import { TimerIcon } from "lucide-react";

const Item = ({ post }: { post: ICmsPost }) => {
  return (
    <div className="flex">
      {post.thumbnail?.url && (
        <div className=" md:h-[480px] w-full h-[300px] sm:h-[400px]">
          {/* Background Image */}
          <Image
            src={`https://apudairy.api.erxes.io/api/read-file?key=${post.thumbnail.url}`}
            alt={post.title}
            fill
            quality={100}
            className="object-cover"
            loading="lazy"
          />

          {/* Overlay */}
          <div className="absolute inset-0 flex flex-col justify-end px-20 bg-gradient-to-t from-black/60 to-transparent text-white">
            {/* Date + Time */}
            <div className="flex justify-start items-center gap-4 text-[12px] sm:text-[14px] md:text-[14px] font-normal opacity-90 mb-3">
              <div className="flex items-center gap-1">
                <img
                  src="/images/calendar.png"
                  alt="calendar"
                  className="w-4 h-4"
                />
                <span>6 сарын 18</span>
              </div>
              <div className="flex items-center gap-1">
                <TimerIcon className="w-4 h-4" />
                <span>5 mins read</span>
              </div>
            </div>

            {/* Title */}
            <div className="font-sf-pro-rounded max:sm-hidden text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-normal leading-snug uppercase break-words">
              {post.title}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Item;
