"use client";

import { ICmsPost } from "@/src/graphql/types/cms.types";
import Image from "next/image";
import Link from "next/link";

const Images = ({ post }: { post: ICmsPost }) => {
  return (
    <div className="flex flex-col items-start gap-3 px-2 sm:px-4 max-w-full sm:max-w-md lg:max-w-lg">
      <Link href={`/newsa/${post._id}`} className="block w-full">
        <div className="relative aspect-[3/2] rounded-xl overflow-hidden">
          <Image
            src={`https://apudairy.api.erxes.io/api/read-file?key=${post.thumbnail?.url}`}
            alt={post.title}
            fill
            className="object-cover rounded-xl"
          />
        </div>

        <div className="flex justify-between w-full text-[#6B7280] text-[14px] font-normal mt-2">
          <span>2 сарын 4</span>
          <span>5 mins read</span>
        </div>

        <div className="text-[#121212] font-semibold text-[16px] leading-[120%] font-sf-pro-rounded text-start mt-1">
          {post.title}
        </div>
      </Link>
    </div>
  );
};

export default Images;
