"use client";
import React, { useEffect, useState } from "react";
import { ICmsPost } from "@/src/graphql/types/cms.types";
import {
  CarouselContent,
  Carousel,
  CarouselItem,
} from "@/src/components/heading/carousel";
import Text from "./text";

const HogjilCarousel = ({ posts }: { posts: ICmsPost[] }) => {
  return (
    <div className="w-full">
      <Carousel className="w-full" data-aos="fade-up">
        <CarouselContent>
          {posts.map((post, index) => (
            <CarouselItem className="w-full" key={index}>
              <Text post={post} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default HogjilCarousel;
