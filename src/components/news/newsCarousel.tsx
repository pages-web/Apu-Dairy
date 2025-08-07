"use client";
import React, { useEffect } from "react";
import { ICmsPost } from "@/src/graphql/types/cms.types";
import {
  CarouselContent,
  Carousel,
  CarouselItem,
  CarouselApi,
} from "@/src/components/heading/carousel";
import { Button } from "@/src/components/ui/Button/Button";
import Link from "next/link";
import News from "./news";

const NewsCarousel = ({ posts }: { posts: ICmsPost[] }) => {
  const [api, setApi] = React.useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;
  }, [api]);

  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 flex flex-col items-start">
      <div className="flex flex-col items-start gap-4 mt-12">
        <Button className="h-9 px-6 w-36 rounded-full border border-red-600 text-red-600 hover:bg-red-50 transition">
          Мэдээ мэдээлэл
        </Button>
      </div>

      <div className="flex justify-between items-center mt-4 w-full">
        <h1 className="text-[#353535] font-sf-pro-rounded text-[24px] md:text-[32px] font-medium leading-normal not-italic">
          Сүүлийн үеийн мэдээ
        </h1>
        <Link href="/news">
          <Button className="h-9 w-32 md:w-36 rounded-full border border-red-600 text-red-600 hover:bg-red-50 transition">
            Цааш үзэх
          </Button>
        </Link>
      </div>

      <Carousel className="w-full mt-8" setApi={setApi} data-aos="fade-up">
        <CarouselContent className="flex flex-col md:flex-row">
          {posts.map((post, index) => (
            <CarouselItem key={index} className="w-full md:basis-1/3 shrink-0">
              <News post={post} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default NewsCarousel;
