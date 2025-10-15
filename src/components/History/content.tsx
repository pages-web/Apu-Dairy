"use client";

import React, { useRef, useEffect } from "react";
import { ICmsPost } from "@/src/graphql/types/cms.types";
import Image from "../ui/image";
import { FaCheckCircle } from "react-icons/fa";

interface Props {
  posts: ICmsPost[];
  activeIndex: number;
  onSelect: (index: number) => void;
}

const Content = ({ posts, activeIndex, onSelect }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const child = container.children[activeIndex] as HTMLElement;
    if (!child) return;

    const containerWidth = container.offsetWidth;
    const childLeft = child.offsetLeft;
    const childWidth = child.offsetWidth;

    container.scrollTo({
      left: childLeft - containerWidth / 2 + childWidth / 2,
      behavior: "smooth",
    });
  }, [activeIndex]);
  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 relative">
      <div className="absolute top-[150px] left-0 right-0 h-1 bg-gray-200 z-0  md:block rounded-full">
        <div
          className="h-1 bg-red-500 transition-all duration-500 rounded-full"
          style={{
            width: `${((activeIndex + 1) / posts.length) * 100}%`,
          }}
        />
      </div>
      <div
        ref={containerRef}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar py-10 md:py-20"
      >
        {posts.map((post, idx) => (
          <div
            key={post._id || idx}
            onClick={() => onSelect(idx)}
            className={`flex-shrink-0 cursor-pointer flex flex-col items-center w-[250px] md:w-[300px] snap-center transition-transform duration-300 ${
              activeIndex === idx
                ? "scale-105 opacity-100"
                : "scale-95 opacity-70"
            }`}
          >
            <span
              className={`mb-4 text-center font-semibold text-base md:text-lg ${
                activeIndex === idx ? "text-red-600" : "text-gray-500"
              }`}
            >
              {post.title} он
            </span>
            <div className="relative flex items-center justify-center mb-4">
              <FaCheckCircle
                className={`z-10 transition-all duration-300 ${
                  activeIndex === idx
                    ? "text-red-500 text-2xl"
                    : "text-gray-400 text-base"
                }`}
              />
            </div>
            <div className="relative w-full h-[200px] md:h-[300px] rounded-2xl overflow-hidden mt-4 shadow-lg group">
              {post.thumbnail?.url && (
                <Image
                  src={`https://apudairy.api.erxes.io/api/read-file?key=${post.thumbnail.url}`}
                  alt={post.title}
                  fill
                  quality={100}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              )}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-10 transition-opacity" />
            </div>
            <p
              className="font-medium text-gray-600 mt-2 text-xs md:text-sm text-center"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
