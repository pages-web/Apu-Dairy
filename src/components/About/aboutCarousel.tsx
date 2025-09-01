"use client";
import React from "react";
import { ICmsPost } from "@/src/graphql/types/cms.types";
import About from "./item";

const AboutCarousel = ({ posts }: { posts: ICmsPost[] }) => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="mt-16">
        <p className="bg-transparent border border-red-500 text-red-500 font-semibold py-2 px-6 rounded-full text-sm">
          Бидний тухай
        </p>
      </div>

      <div className="w-full md:max-w-[90%] pb-10 mt-10">
        <div className="gap-2">
          {posts.map((post, index) => (
            <div className="lg:basis-full" key={index}>
              <About post={post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutCarousel;
