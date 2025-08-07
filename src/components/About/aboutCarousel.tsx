"use client";
import React, { useEffect } from "react";
import { ICmsPost } from "@/src/graphql/types/cms.types";
import {
  CarouselContent,
  Carousel,
  CarouselItem,
  CarouselApi,
} from "@/src/components/heading/carousel";
import About from "./item";

const AboutCarousel = ({ posts }: { posts: ICmsPost[] }) => {
  const [api, setApi] = React.useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;
  }, [api]);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="mt-12">
        <p className="bg-transparent border border-red-500 text-red-500 font-semibold py-2 px-6 rounded-full text-sm">
          Бидний тухай
        </p>
      </div>

      <Carousel
        className="w-full md:max-w-[90%] pb-10"
        setApi={setApi}
        data-aos="fade-up"
      >
        <CarouselContent className="gap-2">
          {posts.map((post, index) => (
            <CarouselItem className="lg:basis-full" key={index}>
              <About post={post} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default AboutCarousel;
