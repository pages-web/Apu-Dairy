import React from "react";
import { ICmsPost } from "@/src/graphql/types/cms.types";
import {
  CarouselContent,
  Carousel,
  CarouselItem,
} from "@/src/components/heading/carousel";
import Item from "./item";

const CarouselSongon = ({ posts }: { posts: ICmsPost[] }) => {
  return (
    <div className="px-4 max-w-full mx-auto">
      <Carousel className="w-full" data-aos="fade-up">
        <CarouselContent>
          {posts.map((post, index) => (
            <CarouselItem key={index}>
              <Item post={post} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CarouselSongon;
