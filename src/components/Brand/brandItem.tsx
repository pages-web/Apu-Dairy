"use client";

import { ICmsPost } from "@/src/graphql/types/cms.types";
import { useState, useEffect } from "react";
import Image from "next/image";

interface ItemProps {
  cmsPosts: ICmsPost[];
}

const BrandItem = ({ cmsPosts }: ItemProps) => {
  const [hoverImage, setHoverImage] = useState<string | null>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [preloadedImages, setPreloadedImages] = useState<{
    [key: string]: boolean;
  }>({});

  useEffect(() => {
    cmsPosts.forEach((post) => {
      const url = post.thumbnail?.url;
      if (url && !preloadedImages[url]) {
        const img = document.createElement("img");
        img.src = url;
        setPreloadedImages((prev) => ({ ...prev, [url]: true }));
      }
    });
  }, [cmsPosts, preloadedImages]);

  return (
    <div className="relative w-full  mt-5 flex flex-col items-center justify-center overflow-visible">
      {hoverImage && (
        <div className="fixed inset-0 -z-10 w-full h-full">
          <Image
            src={`https://apudairy.api.erxes.io/api/read-file?key=${hoverImage}`}
            alt="hover image"
            fill
            style={{ objectFit: "fill" }}
            className="transition-opacity duration-150 ease-in-out brightness-75"
          />
        </div>
      )}
      <div className="relative z-10 flex flex-col items-center space-y-6 text-black max-h-[80vh] overflow-y-auto">
        {cmsPosts.map((post, index) => {
          const isHover = hoverIndex === index;
          return (
            <span
              key={post._id}
              className={`font-mogul cursor-pointer text-[50px] sm:text-[80px] md:text-[180px] font-black leading-none text-center transition-colors duration-150 whitespace-nowrap ${
                hoverIndex === null
                  ? "text-black"
                  : isHover
                  ? "text-white"
                  : "text-gray-400"
              }`}
              onMouseEnter={() => {
                if (post.thumbnail?.url) setHoverImage(post.thumbnail.url);
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
