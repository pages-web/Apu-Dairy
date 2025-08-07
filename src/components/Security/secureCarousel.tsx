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

const SecureCarousel = ({ posts }: { posts: ICmsPost[] }) => {
  const [api, setApi] = React.useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;
  }, [api]);

  return (
    <div className="w-full flex flex-col items-center">
      <Carousel
        className="w-full md:max-w-[100%]"
        setApi={setApi}
        data-aos="fade-up"
      >
        <CarouselContent>
          {posts.map((post, index) => (
            <CarouselItem key={index}>
              <AlhamMain post={post} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default SecureCarousel;
