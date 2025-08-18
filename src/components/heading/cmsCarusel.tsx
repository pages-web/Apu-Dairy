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
              className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] xl:h-[100vh]"
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
