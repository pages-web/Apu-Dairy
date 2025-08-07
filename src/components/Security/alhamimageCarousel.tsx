import React from "react";
import { ICmsPost } from "@/src/graphql/types/cms.types";
import {
  CarouselContent,
  Carousel,
  CarouselItem,
} from "@/src/components/heading/carousel";
import SecureMain from "./images";

const ALhamItemCarousel = ({ posts }: { posts: ICmsPost[] }) => {
  return (
    <div className="w-full max-w-[1400px] px-4 py-10">
      <Carousel className="w-full" data-aos="fade-up">
        <CarouselContent
          className="flex flex-wrap overflow-visible justify-start gap-8"
          containerClassname="overflow-visible"
        >
          {posts.map((post, index) => (
            <CarouselItem
              key={index}
              className="shrink-0 px-2 max-w-[320px] w-full"
            >
              <SecureMain post={post} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default ALhamItemCarousel;
