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
  const { name, attachment, _id } = product;
  const [bgColor, setBgColor] = useState("white");
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
        "border border-neutral-200 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200 w-full max-w-[200px] h-[280px] mx-auto flex flex-col items-center text-center",
        className
      )}
    >
      <Link href={`/product/${_id}`} className="w-full">
        <div
          className="relative w-full h-[220px] flex items-center justify-center rounded-xl overflow-hidden group transition-colors duration-200"
          style={{ backgroundColor: "white" }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLDivElement).style.backgroundColor = bgColor;
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLDivElement).style.backgroundColor = "white";
          }}
        >
          <Image
            ref={imgRef}
            src={attachment?.url || ""}
            alt={name}
            fill
            className="object-contain p-4 transition-transform duration-300 scale-100 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 220px"
            loading="lazy"
          />
        </div>
      </Link>

      <div className="mt-3 px-2">
        <Link
          href={`/product/${_id}`}
          className="text-base font-medium hover:text-primary line-clamp-2"
        >
          {name}
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
