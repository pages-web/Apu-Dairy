"use client";

import { ICmsPost } from "@/src/graphql/types/cms.types";
import { Clock, Flame } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Item = ({ post }: { post: ICmsPost }) => {
  return (
    <div className="flex flex-col items-center lg:items-start gap-6 w-full max-w-[900px] mx-auto px-4 sm:px-6 lg:px-0">
      <Link href={`/jor/${post._id}`} className="block w-full">
        {post.thumbnail?.url && (
          <div className="relative w-full aspect-[16/9] sm:aspect-[16/9] rounded-3xl overflow-hidden">
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

        <div className="flex flex-col w-full gap-4">
          <div
            className="w-full max-w-[600px] text-black font-sf-pro-rounded text-base sm:text-lg lg:text-xl leading-6 sm:leading-7 lg:leading-8 text-center lg:text-left mx-auto"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <div className="flex flex-row lg:flex-row items-center justify-center lg:justify-start gap-4 text-gray-700 text-[16px]">
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
      </Link>
    </div>
  );
};

export default Item;
