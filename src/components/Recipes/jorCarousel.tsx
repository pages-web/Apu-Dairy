"use client";

import React, { useState } from "react";
import { ICmsPost } from "@/src/graphql/types/cms.types";
import Other from "./otherJor";
import { useTranslations } from "next-intl";

const PostFilterByTitle = ({ posts }: { posts: ICmsPost[] }) => {
  const [selectedTagId, setSelectedTagId] = useState<string>("");

  const filteredPosts = selectedTagId
    ? posts.filter((post) =>
        post.tags?.some((tag) => tag._id === selectedTagId)
      )
    : posts;

  const t = useTranslations("Recipe");

  const uniqueTags = Array.from(
    new Map(
      posts.flatMap((post) => post.tags || []).map((tag) => [tag._id, tag])
    ).values()
  );

  return (
    <div className="max-w-[1400px] mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-2 sm:mb-8">
        <h2 className="text-[#444546] text-center font-sf-pro-rounded text-[42px] font-semibold capitalize">
          {t("Title")}
        </h2>
        <div className="flex gap-4 mt-2 sm:mt-0">
          <div className="relative w-64 h-10 border border-gray-300 rounded-2xl">
            <select
              value={selectedTagId}
              onChange={(e) => setSelectedTagId(e.target.value)}
              className="w-full h-full px-3 text-sm rounded-2xl appearance-none focus:outline-none cursor-pointer"
            >
              <option value="">{t("All")}</option>

              {uniqueTags.map((tag) => (
                <option key={tag._id} value={tag._id}>
                  {tag.name.slice(2)}
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {filteredPosts.map((post) => (
          <Other key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default PostFilterByTitle;
