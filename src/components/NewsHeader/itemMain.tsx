"use client";

import { ICmsPost } from "@/src/graphql/types/cms.types";
import Image from "../ui/image";

const Item = ({ post }: { post: ICmsPost }) => {
  return (
    <div className="flex flex-col items-center sm:px-6 max-w-[1400px] w-full justify-center">
      {post.thumbnail?.url && (
        <div className="relative w-full md:h-[480px] overflow-hidden rounded-3xl">
          <Image
            src={`https://apudairy.api.erxes.io/api/read-file?key=${post.thumbnail.url}`}
            alt={post.title}
            width={1400}
            height={600}
            quality={100}
            className="object-cover rounded-3xl"
          />
          <div className="absolute bottom-4 left-4 text-white">
            <div className="flex justify-between w-full text-[14px] font-normal opacity-90">
              <div className="flex items-center gap-1">
                <img
                  src="/images/calendar.png"
                  alt="calendar"
                  className="w-4 h-4"
                />
                <span>6 сарын 18</span>
              </div>
              <span>5 mins read</span>
            </div>

            <div className="text-white font-sf-pro-rounded text-[18px] sm:text-[20px] font-normal leading-normal uppercase mt-1 mb-2 break-words hidden md:block lg:block">
              {post.title}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Item;
