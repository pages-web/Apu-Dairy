"use client";

import React, { useRef, useEffect } from "react";
import { ICmsPost } from "@/src/graphql/types/cms.types";
import Image from "../ui/image";
import { FaCheckCircle } from "react-icons/fa";
import { useTranslations } from "next-intl";

interface Props {
  posts: ICmsPost[];
  activeIndex: number;
  onSelect: (index: number) => void;
}

const Content = ({ posts, activeIndex, onSelect }: Props) => {
  const t = useTranslations("History");
  const containerRef = useRef<HTMLDivElement>(null);

  // Active slide-г center-д scroll хийх
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
      {/* Header */}
      <div className="flex flex-col items-center justify-center mb-10">
        <h2 className="text-sm font-medium leading-normal text-[#ED3237] bg-[rgb(250,203,205)] rounded-full w-32 h-7 flex items-center justify-center mb-4">
          {t("historicalJourney")}
        </h2>
        <h2 className="text-[#444546] text-center font-sf-pro-rounded text-[36px] md:text-[42px] font-semibold capitalize">
          {t("historyTrace")}
        </h2>
      </div>

      {/* Progress Indicator */}
      <div className="absolute top-[150px] left-0 right-0 h-1 bg-gray-200 z-0 hidden md:block rounded-full">
        <div
          className="h-1 bg-red-500 transition-all duration-500 rounded-full"
          style={{
            width: `${((activeIndex + 1) / posts.length) * 100}%`,
          }}
        />
      </div>

      {/* Carousel */}
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
            {/* Year */}
            <span
              className={`mb-4 text-center font-semibold text-base md:text-lg ${
                activeIndex === idx ? "text-red-600" : "text-gray-500"
              }`}
            >
              {post.title} он
            </span>

            {/* Check Icon */}
            <div className="relative flex items-center justify-center mb-4">
              <FaCheckCircle
                className={`z-10 transition-all duration-300 ${
                  activeIndex === idx
                    ? "text-red-500 text-2xl"
                    : "text-gray-400 text-base"
                }`}
              />
            </div>

            {/* Thumbnail */}
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

            {/* Content */}
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
