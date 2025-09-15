"use client";

import React, { useState } from "react";
import { ICmsPost } from "@/src/graphql/types/cms.types";
import { useTranslations } from "next-intl";

interface ItemProps {
  cmsPosts: ICmsPost[];
}

const FAQ = ({ cmsPosts }: ItemProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const t = useTranslations("FAQ");

  return (
    <div className="w-full max-w-[1135px] mx-auto">
      <div className="text-start mb-5">
        <h1 className="inline-block bg-[#FFEFF0] text-[#ED3237] font-sf-pro-rounded text-[13px] font-medium leading-[100%] px-3 py-1 sm:px-4 sm:py-1 rounded-full">
          {t("help")}
        </h1>
      </div>

      <h2 className="md:mb-5 lg:mb-5 text-lg sm:text-xl md:text-2xl font-sf-pro-rounded text-black">
        {t("FAQTitle")}
      </h2>
      {cmsPosts.map((post, index) => (
        <div
          key={post._id}
          className="border-b border-gray-200 py-3 cursor-pointer"
        >
          <div
            onClick={() => toggle(index)}
            className="flex justify-between items-center"
          >
            <h3 className="font-sf-pro-rounded text-base sm:text-lg md:text-xl">
              {post.title}
            </h3>
            <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
          </div>
          <div
            className={`transition-all duration-500 overflow-hidden ${
              openIndex === index ? "max-h-[500px] mt-2" : "max-h-0"
            }`}
          >
            <div
              className="text-gray-600 text-sm sm:text-base leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
