"use client";

import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "./carousel";
import { ICmsPost } from "@/src/graphql/types/cms.types";
import BannerCarousel from "./cms-card";

const MainBannerCarousel = ({ posts }: { posts: ICmsPost[] }) => {
  return (
    <div className="relative w-full h-full">
      <Carousel>
        <CarouselContent>
          {posts.map((post, index) => (
            <CarouselItem key={index}>
              <BannerCarousel post={post} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default MainBannerCarousel;
