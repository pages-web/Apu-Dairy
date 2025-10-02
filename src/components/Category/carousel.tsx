import React from "react";
import { ICmsPost } from "@/src/graphql/types/cms.types";
import {
  CarouselContent,
  Carousel,
  CarouselItem,
} from "@/src/components/heading/carousel";
import Itemcategory from "./item";

const Carousels = ({ posts }: { posts: ICmsPost[] }) => {
  return (
    <div className=" lg:block">
      <Carousel>
        <CarouselContent className="flex">
          {posts.map((post, index) => (
            <CarouselItem key={index} className="basis-[100%] shrink-0">
              <Itemcategory post={post} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Carousels;
