"use client";

import { memo, useCallback, useEffect, useState } from "react";
import Image from "../ui/image";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "../heading/carousel";
import { IAttachment } from "@/src/types";
import { cn } from "@/src/lib/utils/utils";

const Gallery = ({ attachments = [] }: { attachments: IAttachment[] }) => {
  const [emblaMainApi, setApi] = useState<CarouselApi>();
  const [emblaThumbsApi, setThumbApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    const index = emblaMainApi.selectedScrollSnap();
    setSelectedIndex(index);
    emblaThumbsApi.scrollTo(index);
  }, [emblaMainApi, emblaThumbsApi]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();
    emblaMainApi.on("select", onSelect);
    emblaMainApi.on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <div className="flex flex-row-reverse gap-6 justify-stretch items-start md:mt-20">
      <Carousel className="flex-1" setApi={setApi}>
        <CarouselContent className="ml-0 max-w-[800px]">
          {attachments.map((attachment) => (
            <CarouselItem
              className="relative w-full h-[600px] rounded-2xl overflow-hidden"
              key={attachment?.url}
            >
              <Image
                src={attachment?.url || ""}
                height={600}
                width={600}
                quality={100}
                alt="Product Image"
                className="absolute inset-0 h-full w-full rounded-2xl object-fill transform transition-transform duration-100 ease-in-out hover:scale-105 hover:translate-y-[-5px]"
                loading="lazy"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <Carousel
        orientation="vertical"
        className={cn(
          "w-28 hidden lg:block",
          attachments.length === 1 && "lg:hidden"
        )}
        opts={{ containScroll: "keepSnaps", dragFree: true }}
        setApi={setThumbApi}
      >
        <CarouselContent className="max-h-[600px] overflow-y-auto gap-2 mt-0">
          {attachments.map((item, index) => (
            <CarouselItem
              key={item?.url}
              className={cn(
                "w-28 h-28 border-2 rounded-3xl overflow-hidden cursor-pointer",
                selectedIndex === index
                  ? "border-red-500"
                  : "border-transparent"
              )}
              onClick={() => onThumbClick(index)}
            >
              <Image
                src={item?.url || ""}
                height={164}
                width={164}
                alt=""
                className="object-contain h-full w-full rounded-2xl"
                loading="lazy"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default memo(Gallery);
