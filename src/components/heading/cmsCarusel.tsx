"use client";

import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "./carousel";
import { ICmsPost } from "@/src/graphql/types/cms.types";
import BannerCard from "./cms-card";

const MainBannerCarousel = ({ posts }: { posts: ICmsPost[] }) => {
  return (
    <div className="relative w-full">
      <Carousel className="relative">
        <CarouselContent>
          {posts.map((post, index) => (
            <CarouselItem
              key={index}
              className="w-full h-[40vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[100vh]"
            >
              <BannerCard post={post} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default MainBannerCarousel;
