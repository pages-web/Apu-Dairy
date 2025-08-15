"use client";

import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import Image from "../ui/image";
import { ICmsPost } from "@/src/graphql/types/cms.types";
import Hogjil from "../Hogjil/page";

interface Props {
  posts: ICmsPost[];
  activeIndex: number;
  onSelect: (index: number) => void;
}

const Content = ({ posts, activeIndex, onSelect }: Props) => {
  return (
    <div className="w-[1400px] mx-auto px-4 relative">
      <div className="flex flex-col items-center justify-center mb-10">
        <h2 className="text-sm font-medium leading-normal text-[#ED3237] bg-[rgb(250,203,205)] rounded-full font-sf-pro-rounded w-32 h-7 flex items-center justify-center">
          Түүхэн замнал
        </h2>
        <h2 className="text-[#353535] text-center font-sf-pro-rounded text-2xl font-medium leading-normal mt-2">
          Бидний түүхэн мөр
        </h2>
      </div>

      <div className="relative flex flex-col md:flex-row overflow-x-auto md:overflow-x-visible space-x-0 md:space-x-6 scrollbar-hide px-4 overflow-y-hidden gap-10">
        <div className="absolute inset-x-0 top-9 border-t-2 border-gray-400 border-dashed z-0 hidden md:block max-w-screen"></div>
        {posts.map((post, idx) => (
          <div
            key={post._id || idx}
            onClick={() => onSelect(idx)}
            className={`flex-shrink-0 cursor-pointer flex flex-col items-center relative z-10 transition-all duration-300
            ${activeIndex === idx ? "scale-105 mt-6" : "scale-100 mt-0"}
            w-full md:w-1/3
            `}
          >
            <div className="flex flex-col items-center mb-4">
              <span
                className={`font-semibold text-center
                ${activeIndex === idx ? "text-red-600" : "text-gray-500"}
                text-base md:text-lg
              `}
              >
                {post.title} он
              </span>
              {activeIndex === idx && (
                <FaCheckCircle className="text-red-500 text-xl md:text-2xl mt-1" />
              )}
            </div>
            <div className="relative w-32 h-32 md:w-full md:h-[300px] rounded-2xl overflow-hidden">
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
              className="font-semibold text-gray-500 mt-2 text-xs md:text-lg text-center w-72 md:w-full"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
