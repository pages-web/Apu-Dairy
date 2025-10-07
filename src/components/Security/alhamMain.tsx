"use client";

import { ICmsPost } from "@/src/graphql/types/cms.types";
import Image from "next/image";
import { useState } from "react";

const AlhamMain = ({ posts }: { posts: ICmsPost[] }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedPost = posts[selectedIndex];

  return (
    <div className="w-full flex flex-col md:flex-row gap-6">
      <div className="w-full md:w-1/2 flex flex-col gap-10 max-w-[600px]">
        {posts.map((post, index) => (
          <div
            key={post._id}
            className={`p-3 rounded-lg cursor-pointer border ${
              index === selectedIndex
                ? "border-blue-500 bg-blue-50"
                : "border-gray-300"
            }`}
            onClick={() => setSelectedIndex(index)}
          >
            <p className="text-[16px] sm:text-[18px] font-semibold text-[#1a1a1a] leading-snug">
              {post.title}
            </p>
            <div
              className="text-[#353535] text-[14px] sm:text-[16px] leading-[140%] font-medium"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        ))}
      </div>
      <div className="w-full md:w-1/2 relative h-64 sm:h-80 md:h-[500px] lg:h-[600px] flex-shrink-0">
        {selectedPost?.thumbnail?.url && (
          <>
            <Image
              src={`https://apudairy.api.erxes.io/api/read-file?key=${selectedPost.thumbnail.url}`}
              alt={selectedPost.title}
              fill
              className="object-cover rounded-lg"
              quality={100}
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
            />
            <div className="absolute bottom-5 left-5 bg-white/30 p-4 rounded-lg max-w-[90%]">
              <p className="text-sm mb-2 font-semibold opacity-90">
                {selectedPost.title}
              </p>
              <div
                className="text-xs leading-snug font-medium whitespace-pre-line"
                dangerouslySetInnerHTML={{ __html: selectedPost.content }}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AlhamMain;
