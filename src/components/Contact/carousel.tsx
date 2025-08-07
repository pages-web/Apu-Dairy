import React, { useEffect } from "react";

import { ICmsPost } from "@/src/graphql/types/cms.types";

import {
  CarouselContent,
  Carousel,
  CarouselItem,
} from "@/src/components/heading/carousel";
import TitleContact from "./TitleContact";

const ContactCarousel = ({ posts }: { posts: ICmsPost[] }) => {
  return (
    <div className="mt-28">
      <Carousel className="w-full md:max-w-[100%]" data-aos="fade-up">
        <CarouselContent>
          {posts.map((post, index) => (
            <CarouselItem key={index}>
              <TitleContact post={post} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default ContactCarousel;
