"use client";
import React from "react";
import { ICmsPost } from "@/src/graphql/types/cms.types";
import {
  CarouselContent,
  Carousel,
  CarouselItem,
} from "@/src/components/heading/carousel";
import AlhamMain from "./alhamMain";

const AlhamCarousel = ({ posts }: { posts: ICmsPost[] }) => {
  return (
    <div className="w-full flex mb-20">
      <div className="ml-[150px] w-full max-w-screen-xl flex flex-col items-start">
        <Carousel className="w-full" data-aos="fade-up">
          <CarouselContent
            className="flex flex-col overflow-visible"
            containerClassname="overflow-visible"
          >
            {posts?.length > 0 &&
              posts.map((post, index) => (
                <CarouselItem
                  key={index}
                  className="min-w-[250px] max-w-[320px] px-2"
                >
                  <AlhamMain post={post} />
                </CarouselItem>
              ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default AlhamCarousel;
