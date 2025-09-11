"use client";

import React, { useRef, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import Image from "../ui/image";
import { ICmsPost } from "@/src/graphql/types/cms.types";
import { useTranslations } from "next-intl";

interface Props {
  posts: ICmsPost[];
  activeIndex: number;
  onSelect: (index: number) => void;
}

const Content = ({ posts, activeIndex, onSelect }: Props) => {
  const t = useTranslations("History");
  const containerRef = useRef<HTMLDivElement>(null);

  // activeIndex өөрчлөгдөхөд төвд шилжүүлэх
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
        <h2 className="text-sm font-medium leading-normal text-[#ED3237] bg-[rgb(250,203,205)] rounded-full w-32 h-7 flex items-center justify-center mb-10">
          {t("historicalJourney")}
        </h2>
        <h2 className="text-[#353535] text-center text-2xl font-medium mt-2">
          {t("historyTrace")}
        </h2>
      </div>

      {/* Timeline */}
      <div className="relative">
        <div className="absolute top-16 left-36 right-0 border-t-2 border-dashed border-gray-400 z-0 hidden md:block"></div>

        {/* Scrollable container */}
        <div
          ref={containerRef}
          className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar py-6"
        >
          {posts.map((post, idx) => (
            <div
              key={post._id || idx}
              onClick={() => onSelect(idx)}
              className={`flex-shrink-0 cursor-pointer flex flex-col items-center transition-transform duration-300
                w-[250px] md:w-[300px]
                ${activeIndex === idx ? "scale-105 mt-6" : "scale-100 mt-0"}
              `}
            >
              {/* Year & Check */}
              <div className="flex flex-col items-center mb-4">
                <span
                  className={`font-semibold text-center text-base md:text-lg ${
                    activeIndex === idx ? "text-red-600" : "text-gray-500"
                  }`}
                >
                  {post.title} он
                </span>
                <FaCheckCircle
                  className={`mt-1 text-xl md:text-2xl ${
                    activeIndex === idx ? "text-red-500" : "text-gray-400"
                  }`}
                />
              </div>

              {/* Image */}
              <div className="relative w-full h-[200px] md:h-[300px] rounded-2xl overflow-hidden">
                {post.thumbnail?.url && (
                  <Image
                    src={`https://apudairy.api.erxes.io/api/read-file?key=${post.thumbnail.url}`}
                    alt={post.title}
                    fill
                    quality={100}
                    className="object-cover"
                    loading="lazy"
                  />
                )}
              </div>

              {/* Content */}
              <p
                className="font-semibold text-gray-500 mt-2 text-xs md:text-sm text-center"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;
