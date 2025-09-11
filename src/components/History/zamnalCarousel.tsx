"use client";
import React, { useState } from "react";
import { ICmsPost } from "@/src/graphql/types/cms.types";
import {
  CarouselContent,
  Carousel,
  CarouselItem,
} from "@/src/components/heading/carousel";
import Content from "./content";

const ZamnalCarousel = ({ posts }: { posts: ICmsPost[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="w-full flex flex-col items-center">
      <Carousel className="w-full max-w-full" data-aos="fade-up">
        <CarouselContent>
          {posts.map((post, index) => (
            <CarouselItem className="w-full">
              <Content
                posts={posts}
                activeIndex={activeIndex}
                onSelect={setActiveIndex}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default ZamnalCarousel;
