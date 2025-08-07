"use client";

import { useState } from "react";

const SizeSelector = () => {
  const sizes = ["420g", "760g", "900g"];
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  return (
    <div className="flex gap-4 mt-2">
      {sizes.map((size, index) => (
        <button
          key={index}
          onClick={() => setSelectedSize(size)}
          className={`w-[60px] h-[60px] rounded-full flex items-center justify-center border text-sm font-medium shadow
            ${
              selectedSize === size
                ? "bg-red-600 text-white border-red-600"
                : "bg-white border-gray-300 text-gray-800"
            }
          `}
        >
          {size}
        </button>
      ))}
    </div>
  );
};

export default SizeSelector;
