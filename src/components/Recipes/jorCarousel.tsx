"use client";

import React, { useState } from "react";
import { ICmsPost } from "@/src/graphql/types/cms.types";
import Other from "./otherJor";
import { useTranslations } from "next-intl";

const JorCarousel = ({ posts }: { posts: ICmsPost[] }) => {
  const t = useTranslations("Recipe");

  const dropdown1Items: string[] = t.raw("Dropdown1");
  const dropdown2Items: string[] = t.raw("Dropdown2");

  const [selected1, setSelected1] = useState(dropdown1Items[0]);
  const [selected2, setSelected2] = useState(dropdown2Items[0]);

  return (
    <div className="max-w-[1500px] mx-auto px-4">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 sm:mb-8">
        <h2 className="text-[#232323] font-sf-pro-rounded text-[24px] md:ml-10 sm:text-[28px] md:text-[32px] font-medium text-center sm:text-start">
          {t("Title")}
        </h2>

        <div className="flex gap-4 md:mr-10">
          {/* Dropdown 1 */}
          <div className="relative w-32 h-10 border border-gray-300 rounded-2xl">
            <select
              value={selected1}
              onChange={(e) => setSelected1(e.target.value)}
              className="w-full h-full px-3 text-sm rounded-2xl appearance-none focus:outline-none"
            >
              {dropdown1Items.map((item, i) => (
                <option key={i} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="black"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.168l3.71-3.937a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06z"
                />
              </svg>
            </div>
          </div>

          {/* Dropdown 2 */}
          <div className="relative w-32 h-10 border border-gray-300 rounded-2xl">
            <select
              value={selected2}
              onChange={(e) => setSelected2(e.target.value)}
              className="w-full h-full px-3 text-sm rounded-2xl appearance-none focus:outline-none"
            >
              {dropdown2Items.map((item, i) => (
                <option key={i} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="black"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.168l3.71-3.937a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <Other key={index} post={post} />
        ))}
      </div>
    </div>
  );
};

export default JorCarousel;
