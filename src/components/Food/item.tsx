"use client";

import { ICmsPost } from "@/src/graphql/types/cms.types";
import { Clock, Flame } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Item = ({ post }: { post: ICmsPost }) => {
  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-full sm:max-w-[600px] mx-auto px-2 sm:px-4 lg:px-0">
      <Link href={`/jor/${post._id}`} className="block w-full">
        {post.thumbnail?.url && (
          <div className="relative w-full rounded-3xl overflow-hidden aspect-[16/9] sm:aspect-[16/9]">
            <span className="absolute top-3 left-3 bg-white text-red-500 text-xs sm:text-sm font-semibold px-2 py-0.5 rounded-full z-10">
              Веган
            </span>
            <Image
              src={`https://apudairy.api.erxes.io/api/read-file?key=${post.thumbnail.url}`}
              alt={post.title}
              fill
              quality={100}
              className="object-cover rounded-3xl"
              sizes="100vw"
              loading="lazy"
            />
          </div>
        )}

        <div className="flex flex-col md:flex-row md:items-center justify-between w-full gap-2">
          <div
            className="text-black font-sf-pro-rounded text-base sm:text-lg lg:text-xl leading-6 sm:leading-7 lg:leading-8"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <div className="flex flex-row md:gap-4 items-center justify-start mt-2 md:mt-0 text-gray-700 text-[16px]">
            <div className="flex items-center gap-1">
              <Clock className="w-5 h-5 text-red-500" />
              <span>25 mins</span>
            </div>
            <div className="flex items-center gap-1">
              <Flame className="w-5 h-5 text-orange-500" />
              <span>826 cal</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Item;
