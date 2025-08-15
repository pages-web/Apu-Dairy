import React, { useState, useEffect } from "react";
import Image from "../ui/image";

type ImageType = {
  url: string;
  name?: string;
};

type Props = {
  images: ImageType[];
  autoScroll?: boolean;
  interval?: number;
};

const ImageCarousel: React.FC<Props> = ({
  images,
  autoScroll = true,
  interval = 6000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images.length) return null;

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (!autoScroll) return;
    const timer = setInterval(nextImage, interval);
    return () => clearInterval(timer);
  }, [autoScroll, interval]);

  const currentImage = images[currentIndex];

  return (
    <div className="w-full flex flex-col items-center md:mt-5">
      <div className="relative w-full max-w-4xl aspect-[16/9] rounded-3xl overflow-hidden mb-4">
        <Image
          key={currentImage.url}
          src={`https://apudairy.api.erxes.io/api/read-file?key=${currentImage.url}`}
          alt={currentImage.name || "image"}
          fill
          className="object-cover bg-white"
          quality={100}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 50vw"
          loading="lazy"
        />
        <button
          onClick={prevImage}
          className="absolute top-1/2 left-2 sm:left-4 -translate-y-1/2 rounded-full p-2 shadow-md bg-white/70 hover:bg-white transition"
          aria-label="Previous image"
        >
          <img
            src="/images/miniRight.svg"
            alt="left"
            className="w-4 h-4 sm:w-6 sm:h-6"
          />
        </button>
        <button
          onClick={nextImage}
          className="absolute top-1/2 right-2 sm:right-4 -translate-y-1/2 rounded-full p-2 shadow-md bg-white/70 hover:bg-white transition"
          aria-label="Next image"
        >
          <img
            src="/images/miniLeft.svg"
            alt="right"
            className="w-4 h-4 sm:w-6 sm:h-6"
          />
        </button>
      </div>
      <div className="flex gap-2 mt-4">
        {images.map((_, idx) => (
          <span
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${
              idx === currentIndex ? "bg-gray-800" : "bg-gray-400"
            }`}
            aria-label={`Go to image ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
