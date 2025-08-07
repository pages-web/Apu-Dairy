"use client";

import { ICmsPost } from "@/src/graphql/types/cms.types";

const Content = ({ post }: { post: ICmsPost }) => {
  return (
    <div className="relative w-full flex flex-col items-center justify-start px-4 sm:px-6 md:px-8">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-medium text-[#387474] text-center mt-4 sm:mt-6 mb-6 sm:mb-8 leading-tight sm:leading-snug font-sf-pro-rounded">
        {post.title.split(" ").map((word, index, arr) => {
          if (word === "нэгдсэнээр" && arr[index + 1] === "+") {
            return (
              <span key={index} className="text-red-500">
                {word} {arr[index + 1]}{" "}
              </span>
            );
          }
          if (arr[index - 1] === "нэгдсэнээр" && word === "+") {
            return null;
          }

          return <span key={index}>{word} </span>;
        })}
      </h1>

      <div className="w-full max-w-[90ch] text-left sm:text-center text-[#353535] font-sf-pro-rounded text-sm sm:text-base font-normal leading-relaxed sm:leading-[1.6]">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </div>
  );
};

export default Content;
