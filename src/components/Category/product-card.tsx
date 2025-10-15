"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "@/src/components/ui/image";
import { cn } from "@/src/lib/utils/utils";
import { IProduct } from "@/src/graphql/types/product.type";
import { FastAverageColor } from "fast-average-color";

const ProductCard = ({
  className,
  ...product
}: IProduct & { className?: string }) => {
  const { name, attachment, unitPrice, _id } = product;
  const [bgColor, setBgColor] = useState<string | undefined>("white");
  const [hover, setHover] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!imgRef.current) return;

    const fac = new FastAverageColor();

    let isMounted = true;

    fac
      .getColorAsync(imgRef.current)
      .then((color) => {
        if (isMounted) setBgColor(color.hex);
      })
      .catch(() => {
        if (isMounted) setBgColor("white");
      });

    return () => {
      isMounted = false;
      fac.destroy();
    };
  }, [attachment]);

  return (
    <div
      className={cn(
        "border border-neutral-200 rounded-[24px] p-4 h-96 flex flex-col items-center text-center shadow-md hover:shadow-lg transition-shadow duration-200",
        className
      )}
    >
      <Link
        href={`/product/${_id}`}
        className="w-full flex flex-col items-center"
      >
        <div
          className="flex h-[280px] w-52 p-12 relative overflow-hidden group justify-center items-center gap-1 shrink-0 self-stretch rounded-2xl transition-colors duration-300"
          style={{ backgroundColor: hover ? bgColor : "white" }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <Image
            ref={imgRef}
            src={attachment?.url || ""}
            alt={name}
            fill
            className="object-contain rounded-2xl transition-transform duration-300 scale-100 group-hover:scale-110 cursor-none"
            sizes="(max-width: 528px) 80vw, 180px"
            loading="lazy"
          />
        </div>
        <div className="mt-4 text-center font-medium">{name}</div>
        {unitPrice && <p className="mt-1 text-gray-700">{unitPrice}₮</p>}
      </Link>
    </div>
  );
};

export default ProductCard;
