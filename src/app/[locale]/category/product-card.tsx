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
        "border border-neutral-200 rounded-[24px] p-4 h-96 flex flex-col items-center text-center shadow-md hover:shadow-lg transition-shadow duration-200"
      )}
    >
      <Link href={`/product/${_id}`}>
        <div
          className="flex h-[280px] p-12 relative w-52 overflow-hidden group justify-center items-center gap-1 shrink-0 self-stretch rounded-2xl transition-colors duration-200"
          style={{
            backgroundColor: "white",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLDivElement).style.backgroundColor = bgColor;
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLDivElement).style.backgroundColor = "white";
          }}
        >
          <Image
            ref={imgRef}
            src={product.attachment?.url || ""}
            alt={name}
            fill
            className="object-contain rounded-2xl transition-all duration-200 scale-125 group-hover:scale-175 group-hover:translate-x-2 cursor-none"
            sizes="(max-width: 768px) 100vw, 280px"
            loading="lazy"
          />
        </div>
      </Link>

      <div className="mt-4">
        <Link
          href={`/product/${_id}`}
          className="text-base font-medium hover:text-primary"
        >
          {name}
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
