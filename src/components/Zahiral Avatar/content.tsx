import { ICmsPost } from "@/src/graphql/types/cms.types";
import React from "react";
import Image from "next/image";

const Avatar = ({ posts }: { posts: ICmsPost[] }) => {
  const columns = [
    [posts[0]].filter(Boolean),
    [posts[1], posts[2]].filter(Boolean),
    [posts[3]].filter(Boolean),
    [posts[4], posts[5]].filter(Boolean),
  ];

  // Border style-ууд
  const borderStyles = [
    "border-red-500 rounded-full",
    "border-blue-500 rounded-xl",
    "border-green-500 rounded-2xl",
    "border-yellow-500 rounded-lg",
    "border-purple-500 rounded-md",
    "border-pink-500 rounded-xl",
  ];

  return (
    <div className="grid grid-cols-4 gap-6 w-full max-w-[1400px] mx-auto px-4">
      {columns.map((col, colIndex) => (
        <div key={colIndex} className="flex flex-col gap-6">
          {col.map((post, index) => (
            <div
              key={index}
              className={`flex flex-col items-center ${
                (colIndex === 1 && index === 1) ||
                (colIndex === 3 && index === 1)
                  ? "mt-2"
                  : colIndex === 0 || colIndex === 2
                  ? "mt-36"
                  : ""
              }`}
            >
              <div
                className={`relative w-full h-64 overflow-hidden shadow-md border-4 ${
                  borderStyles[(colIndex * 2 + index) % borderStyles.length]
                }`}
              >
                {post?.thumbnail?.url && (
                  <Image
                    src={`https://apudairy.api.erxes.io/api/read-file?key=${post.thumbnail.url}`}
                    alt={post.title || "Post image"}
                    fill
                    quality={100}
                    className="object-cover"
                  />
                )}
              </div>
              <div className="text-center mt-2">
                <h3 className="text-gray-800 font-bold text-lg">
                  {post.title}
                </h3>
                {post.content && (
                  <p
                    className="text-gray-500 text-sm mt-1"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  ></p>
                )}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Avatar;

// const borderStyles = [
//   "border-red-500 rounded-l-full",
//   "border-blue-500 rounded-bl-full",
//   "border-green-500 rounded-full",
//   "border-yellow-500 rounded-lg",
//   "border-purple-500 rounded-br-full",
// ];
