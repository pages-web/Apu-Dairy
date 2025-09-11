"use client";

import React from "react";
import { getCmsPostDetail } from "@/src/graphql/queries/news";
import Image from "../ui/image";
import { TimerIcon } from "lucide-react";
import Images from "./image";
import { useCmsPosts } from "@/src/graphql/queries/kb";
import ArticleLike from "./articleLike";

type Props = {
  postId: string;
};

const Detail = (props: Props) => {
  const { post, loading } = getCmsPostDetail({ id: props.postId });

  const { cmsPosts } = useCmsPosts({
    tagIds: ["HbDBuntlQiyGYEL-MKZGo"],
    language: "mn",
    perPage: 3,
  });

  if (loading) {
    return <div>loading</div>;
  }

  return (
    <div className="w-full max-w-screen-xl px-4 py-16 md:py-24 lg:py-32 mx-auto">
      <div className="flex flex-wrap gap-4 items-center mb-4 text-sm">
        <div className="bg-gray-300 w-fit px-3 py-1 text-center rounded-full text-gray-600 text-[13px]">
          Research
        </div>
        <span className="text-gray-500 flex items-center gap-1">
          <TimerIcon className="w-4 h-4" /> 3 mins
        </span>
      </div>
      <h1 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] font-normal leading-tight text-left text-[#232323] font-sf-pro-rounded mb-6 md:mb-10 max-w-3xl">
        {post.title}
      </h1>
      {post.thumbnail?.url && (
        <div className="relative w-full aspect-video mb-6 rounded-lg overflow-hidden">
          <Image
            src={`https://apudairy.api.erxes.io/api/read-file?key=${post.thumbnail.url}`}
            alt={post.title}
            fill
            quality={100}
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover"
            loading="lazy"
          />
        </div>
      )}
      <div
        className="prose prose-sm sm:prose-base lg:prose-lg max-w-none text-left"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      <div className="bg-gray-200 h-px w-full mt-10 md:mt-16 lg:mt-20"></div>
      {cmsPosts?.length > 0 && (
        <div className="mt-16">
          <h2 className="text-[32px] font-normal leading-none text-[#232323] font-[SF Pro Rounded] mb-6">
            <ArticleLike />
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cmsPosts
              .sort(() => 0.5 - Math.random())
              .slice(0, 3)
              .map((post) => (
                <Images key={post._id} post={post} />
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
