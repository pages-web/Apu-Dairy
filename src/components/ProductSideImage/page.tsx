"use client";

import React, { useState } from "react";
import { IAttachment } from "@/src/types";

interface SideImageProps {
  attachments: IAttachment[];
}

const SideImage: React.FC<SideImageProps> = ({ attachments }) => {
  const [activeIndex, setActiveIndex] = useState(0); // Эхэндээ 0-index-ийг идэвхтэй

  if (!attachments || attachments.length === 0) return null;

  return (
    <div className="flex gap-6">
      <div className="flex flex-col gap-4">
        {attachments.map((attachment, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`flex items-center justify-center rounded-md cursor-pointer transition-transform duration-150 ${
              activeIndex === index
                ? "w-24 h-24 scale-110 bg-blue-100"
                : "w-16 h-16 hover:scale-110 bg-gray-100"
            }`}
          >
            <img
              src={attachment?.url}
              alt=""
              className="object-contain w-full h-full"
              draggable={false}
            />
          </div>
        ))}
      </div>
      <div className="flex-1 flex items-center justify-center bg-gray-50 rounded-md shadow-md p-4">
        <img
          src={attachments[activeIndex]?.url}
          alt=""
          className="object-contain max-h-[400px] w-full"
          draggable={false}
        />
      </div>
    </div>
  );
};

export default SideImage;
