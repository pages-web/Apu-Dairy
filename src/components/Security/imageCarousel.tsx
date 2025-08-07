"use client";
import React, { useEffect } from "react";
import { ICmsPost } from "@/src/graphql/types/cms.types";
import {
  CarouselContent,
  Carousel,
  CarouselItem,
  CarouselApi,
} from "@/src/components/heading/carousel";
import AlhamMain from "./secureALham";

const ImageCarousel = ({ posts }: { posts: ICmsPost[] }) => {
  const [api, setApi] = React.useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;
  }, [api]);

  return (
    <div className="w-full flex flex-col items-center">
      <Carousel
        className="w-full md:max-w-[90%]"
        setApi={setApi}
        data-aos="fade-up"
      >
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
