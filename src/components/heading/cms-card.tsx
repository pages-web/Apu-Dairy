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
  });

  if (post.thumbnail?.url) {
    slides.push({
      src: `https://apudairy.api.erxes.io/api/read-file?key=${post.thumbnail.url}`,
      type: "image",
    });
  }

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
    }, 8000);
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

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);

  return (
    <div className="relative w-full h-[75vh] md:h-[85vh] lg:h-[90vh] overflow-hidden">
      {slides.length > 0 && (
        <div className="absolute inset-0">
          <div
            className="flex transition-transform duration-700 ease-in-out w-full h-full"
            style={{ transform: `translateX(-${current * 100}%)` }}
            onMouseDown={(e) => setDragStart(e.clientX)}
            onMouseUp={(e) => handleDragEnd(e.clientX)}
            onMouseLeave={() => setDragStart(null)}
            onTouchStart={(e) => setDragStart(e.touches[0].clientX)}
            onTouchEnd={(e) => handleDragEnd(e.changedTouches[0].clientX)}
          >
            {slides.map((slide, i) => (
              <div key={i} className="w-full flex-shrink-0 relative h-screen">
                {slide.type === "video" ? (
                  current === i ? (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src={slide.src} type="video/mp4" />
                    </video>
                  ) : (
                    <Image
                      src={slide.thumbnail || "/default-thumbnail.jpg"}
                      alt="video thumbnail"
                      fill
                      className="object-cover object-center"
                      priority={i === 0}
                    />
                  )
                ) : (
                  <Image
                    src={slide.src}
                    alt={`slide-${i}`}
                    fill
                    className="object-cover object-center"
                    quality={100}
                    loading="lazy"
                  />
                )}
              </div>
            ))}
          </div>
          <button
            className="absolute left-7 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10"
            onClick={prevSlide}
          >
            &#10094;
          </button>
          <button
            className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10"
            onClick={nextSlide}
          >
            &#10095;
          </button>
        </div>
      )}
    </div>
  );
};

export default BannerCarousel;
