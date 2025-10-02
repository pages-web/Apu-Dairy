"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ICmsPost } from "@/src/graphql/types/cms.types";

type Slide = {
  src: string;
  type: "image" | "video";
  thumbnail?: string;
};

type Props = {
  post: ICmsPost;
};

const BannerCarousel: React.FC<Props> = ({ post }) => {
  const slides: Slide[] = [];

  slides.push({
    src: "/images/deejvideo.mp4",
    type: "video",
    thumbnail: "/images/video-thumb.jpg",
  });

  if (post.thumbnail?.url) {
    slides.push({
      src: `https://apudairy.api.erxes.io/api/read-file?key=${post.thumbnail.url}`,
      type: "image",
    });
  }

  // Other images
  if (post.images && post.images.length > 0) {
    post.images.forEach((item) =>
      slides.push({
        src: `https://apudairy.api.erxes.io/api/read-file?key=${item?.url}`,
        type: "image",
      })
    );
  }

  const [current, setCurrent] = useState(0);
  const [dragStart, setDragStart] = useState<number | null>(null);

  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleDragEnd = (endX: number) => {
    if (dragStart === null) return;
    const diff = dragStart - endX;
    if (diff > 50) setCurrent((prev) => (prev + 1) % slides.length);
    if (diff < -50)
      setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    setDragStart(null);
  };

  return (
    <div className="relative w-full h-[60vh] md:h-[80vh] lg:h-[93.2vh] overflow-hidden">
      {slides.length > 0 && (
        <div className="absolute inset-0">
          <div
            className="flex transition-transform duration-700 ease-in-out w-full h-full cursor-none"
            style={{ transform: `translateX(-${current * 100}%)` }}
            onMouseDown={(e) => setDragStart(e.clientX)}
            onMouseUp={(e) => handleDragEnd(e.clientX)}
            onMouseLeave={() => setDragStart(null)}
            onTouchStart={(e) => setDragStart(e.touches[0].clientX)}
            onTouchEnd={(e) => handleDragEnd(e.changedTouches[0].clientX)}
          >
            {slides.map((slide, i) => (
              <div key={i} className="w-full flex-shrink-0 h-full relative">
                {slide.type === "video" ? (
                  current === i ? (
                    <video
                      src={slide.src}
                      autoPlay
                      loop
                      muted
                      preload="metadata"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Image
                      src={slide.thumbnail!}
                      alt="video thumbnail"
                      fill
                      className="object-cover"
                    />
                  )
                ) : (
                  <Image
                    src={slide.src}
                    alt={`slide-${i}`}
                    fill
                    className="object-cover"
                    quality={100}
                    loading="lazy"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BannerCarousel;
