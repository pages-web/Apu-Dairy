"use client";
import React, { useEffect } from "react";
import { ICmsPost } from "@/src/graphql/types/cms.types";
import {
  CarouselContent,
  Carousel,
  CarouselItem,
} from "@/src/components/heading/carousel";
import About from "./content";

const HeaderCarousel = ({ posts }: { posts: ICmsPost[] }) => {
  return (
    <div className="w-full flex flex-col items-center py-32">
      <Carousel className="w-full max-w-full pb-10" data-aos="fade-up">
        <CarouselContent>
          {posts.map((post, index) => (
            <CarouselItem className="w-full" key={index}>
              <About post={post} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default HeaderCarousel;
