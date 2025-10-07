"use client";

import React, { useRef, useEffect } from "react";
import { FaCheckCircle, FaCircle } from "react-icons/fa";
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
      <div className="flex flex-col items-center justify-center mb-10">
        <h2 className="text-sm font-medium leading-normal text-[#ED3237] bg-[rgb(250,203,205)] rounded-full w-32 h-7 flex items-center justify-center mb-10">
          {t("historicalJourney")}
        </h2>
        <h2 className="text-[#444546] text-center font-sf-pro-rounded text-[42px] font-semibold capitalize mt-2">
          {t("historyTrace")}
        </h2>
      </div>
      <div className="relative">
        <div className="absolute top-[130px] left-0 right-0 border-t-2 border-dashed border-gray-400 z-0 hidden md:block"></div>
        <div
          ref={containerRef}
          className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar py-20"
        >
          {posts.map((post, idx) => (
            <div
              key={post._id || idx}
              onClick={() => onSelect(idx)}
              className="flex-shrink-0 cursor-pointer flex flex-col items-center w-[250px] md:w-[300px] relative"
            >
              <span
                className={`mb-4 font-semibold text-center text-base md:text-lg ${
                  activeIndex === idx ? "text-red-600" : "text-gray-800"
                }`}
              >
                {post.title} он
              </span>
              <div className="relative flex items-center justify-center">
                <FaCheckCircle
                  className={`z-10 transition-all duration-300 ${
                    activeIndex === idx
                      ? "text-red-500 text-2xl"
                      : "text-gray-400 text-base"
                  }`}
                />
              </div>
              <div className="relative w-full h-[200px] md:h-[300px] rounded-2xl overflow-hidden mt-12">
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
              <p
                className="font-medium text-gray-600 mt-2 text-xs md:text-sm text-center"
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
