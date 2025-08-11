"use client";
import React from "react";
import { ICmsPost } from "@/src/graphql/types/cms.types";
import {
  CarouselContent,
  Carousel,
  CarouselItem,
} from "@/src/components/heading/carousel";
import AlhamMain from "./secureALham";

const ImageCarousel = ({ posts }: { posts: ICmsPost[] }) => {
  return (
    <div className="w-full flex flex-col items-center">
      <Carousel className="w-full md:max-w-[90%]" data-aos="fade-up">
        <CarouselContent className="gap-2">
          {posts.map((post, index) => (
            <CarouselItem className="lg:basis-full" key={index}>
              <AlhamMain post={post} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
