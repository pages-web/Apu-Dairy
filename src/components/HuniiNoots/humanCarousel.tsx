"use client";

import React from "react";
import { ICmsPost } from "@/src/graphql/types/cms.types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/src/components/heading/carousel";
import Content from "./title";

const HumanCarousel = ({ posts }: { posts: ICmsPost[] }) => {
  return (
    <div className="w-full flex flex-col items-center py-32 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8">
      <div className="w-full max-w-[1200px]" data-aos="fade-up">
        <Carousel>
          <CarouselContent>
            {posts.map((post, index) => (
              <CarouselItem className="w-full" key={index}>
                <Content post={post} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default HumanCarousel;
