"use client";

import React, { useState } from "react";
import LongLine from "./longline";
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
    <>
      <div className="mb-28">
        <div className="text-start md:mb-10 mt-10 mb-5">
          <h1 className="inline-block bg-[#FFEFF0] text-[#ED3237] font-sf-pro-rounded text-[13px] font-medium leading-[100%] px-4 py-1 rounded-full">
            {t("help")}
          </h1>
        </div>

        <h2 className="md:mb-10 lg:mb-10 text-xl sm:text-xl md:text-2xl font-sf-pro-rounded text-black">
          {t("FAQTitle")}
        </h2>

        {cmsPosts.map((post, index) => (
          <div
            key={post._id}
            className="border-b border-gray-200 py-3 cursor-none"
          >
            <div
              onClick={() => toggle(index)}
              className="flex justify-between items-center"
            >
              <h3 className="font-sf-pro-rounded text-xl">{post.title}</h3>
              <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
            </div>
            <div
              className={`transition-all duration-500 overflow-hidden ${
                openIndex === index ? "max-h-[500px] mt-2" : "max-h-0"
              }`}
            >
              <div
                className="text-gray-600 text-sm leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>
        ))}
      </div>
      <LongLine />
    </>
  );
};

export default FAQ;
