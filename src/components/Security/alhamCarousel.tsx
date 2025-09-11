"use client";
import React from "react";
import { ICmsPost } from "@/src/graphql/types/cms.types";
import AlhamMain from "./alhamMain";

const AlhamCarousel = ({ posts }: { posts: ICmsPost[] }) => {
  return (
    <div className="w-full flex mb-10">
      <div className="ml-[150px] w-full max-w-screen-xl items-start max-[1024px]:ml-4">
        <div className="w-full" data-aos="fade-up">
          {/* Том дэлгэц дээр wrap, жижиг дэлгэц дээр horizontal scroll */}
          <div className="flex lg:flex-wrap lg:overflow-visible overflow-x-auto gap-4 scrollbar-hide">
            {posts?.length > 0 &&
              posts.map((post, index) => (
                <div
                  key={index}
                  className="min-w-[250px] max-w-[320px] flex-shrink-0 lg:flex-shrink"
                >
                  <AlhamMain post={post} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlhamCarousel;
