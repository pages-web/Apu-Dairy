"use client";

import { ICmsPost } from "@/src/graphql/types/cms.types";
import { useState } from "react";
import Image from "next/image";

interface ItemProps {
  cmsPosts: ICmsPost[];
}

const BrandItem = ({ cmsPosts }: ItemProps) => {
  const [hoverImage, setHoverImage] = useState<string | null>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-visible min-h-[30rem] mt-5">
      <div className="fixed inset-0 -z-10">
        {hoverImage && (
          <Image
            src={`https://apudairy.api.erxes.io/api/read-file?key=${hoverImage}`}
            alt="hover image"
            fill
            style={{ objectFit: "cover" }}
            className="transition-all duration-500 ease-in-out brightness-75"
            loading="lazy"
            placeholder="blur"
            blurDataURL="/images/placeholder.jpg"
          />
        )}
      </div>
      <div className="relative z-10 flex flex-col items-center space-y-6 text-black max-h-[80vh] overflow-y-auto">
        {cmsPosts.map((post, index) => {
          let colorClass = "text-black";
          if (hoverIndex !== null) {
            colorClass = hoverIndex === index ? "text-white" : "text-gray-400";
          }
          return (
            <span
              key={post._id}
              className={`font-mogul cursor-pointer text-[50px] sm:text-[80px] md:text-[180px] font-black leading-none text-center transition-colors duration-300 whitespace-nowrap ${colorClass}`}
              onMouseEnter={() => {
                setHoverImage(post.thumbnail?.url || null);
                setHoverIndex(index);
              }}
              onMouseLeave={() => {
                setHoverImage(null);
                setHoverIndex(null);
              }}
            >
              {post.title}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default BrandItem;
