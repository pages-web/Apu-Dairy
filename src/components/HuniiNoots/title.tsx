"use client";

import { ICmsPost } from "@/src/graphql/types/cms.types";

const Content = ({ post }: { post: ICmsPost }) => {
  return (
    <div className="relative w-full flex flex-col items-center justify-start px-4 sm:px-6 md:px-8">
      <h1 className="text-[#444546] text-center font-sf-pro-rounded text-[42px] font-semibold capitalize">
        {post.title.split(" ").map((word, index, arr) => {
          const prevWord = arr[index - 1] || "";
          const nextWord = arr[index + 1] || "";
          if (word === "нэгдсэнээр" && nextWord === "+") {
            return (
              <span key={index}>
                <span className="text-red-500">{word} +</span>{" "}
              </span>
            );
          }
          if (word === "family" && nextWord === "+") {
            return (
              <span key={index}>
                <span className="text-red-500">{word} +</span>{" "}
              </span>
            );
          }
          if (
            (prevWord === "нэгдсэнээр" || prevWord === "family") &&
            word === "+"
          ) {
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
