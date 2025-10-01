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
  const [bgColor, setBgColor] = useState("white");
  const [hover, setHover] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!imgRef.current) return;

    const fac = new FastAverageColor();

    fac
      .getColorAsync(imgRef.current)
      .then((color) => {
        setBgColor(color.hex);
      })
      .catch(() => {
        setBgColor("white");
      });

    return () => fac.destroy();
  }, [attachment]);
  return (
    <div
      className={cn(
        "border border-neutral-200 rounded-[24px] p-4 h-96 flex flex-col items-center text-center shadow-md hover:shadow-lg transition-shadow duration-200",
        className
      )}
    >
      <Link href={`/product/${_id}`}>
        <div
          className={`flex h-[280px] p-12 relative w-52 overflow-hidden group justify-center items-center gap-1 shrink-0 self-stretch rounded-2xl transition-colors duration-300
          ${hover ? "" : ""}`}
          style={{ backgroundColor: hover ? bgColor : undefined }}
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
        <div className="mt-4">{name}</div>
      </Link>
    </div>
  );
};

export default ProductCard;
