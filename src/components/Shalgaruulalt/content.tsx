"use client";
import { useCmsPosts } from "@/src/graphql/queries/kb";
import { useLocale } from "next-intl";
import React, { useState } from "react";

const Content = () => {
  const tagIds = [
    "y5Uc4CMyfNj1IbsDRccCM", // 01
    "5lYkfy1SwW4HxYnDH5OVB", // 02
    "Q96q-BN0Q_1jZaYHW6eWL", // 03
    "teiUZlY65XXZhg9XfWQJy", // 04
  ];

  const locale = useLocale();

  const { cmsPosts, loading } = useCmsPosts({
    tagIds,
    language: locale,
  });

  const [activeStep, setActiveStep] = useState(0);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[20rem]">
        Түр хүлээнэ үү...
      </div>
    );
  }

  const steps =
    cmsPosts?.map((post: any, index: number) => ({
      id: index,
      title: post.title || `Алхам ${index + 1}`,
      description: post.content || "",
      img: post.thumbnail?.url
        ? `https://apudairy.api.erxes.io/api/read-file?key=${post.thumbnail.url}`
        : post.images?.[0]?.url
        ? `https://apudairy.api.erxes.io/api/read-file?key=${post.images[0].url}`
        : "/images/placeholder.png",
      color: "text-gray-400",
    })) || [];

  const currentStep = steps[activeStep];

  return (
    <div className="max-w-[1400px] w-full mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 mb-8 gap-4">
        {steps.map(({ title, description, color }, index) => (
          <div
            key={index}
            onClick={() => setActiveStep(index)}
            className="cursor-pointer"
          >
            <span
              className={`text-2xl font-bold ${
                index === activeStep ? "text-red-500" : color
              }`}
            >
              {(index + 1).toString().padStart(2, "0")}
            </span>
            <h2
              className={`text-lg font-semibold mt-2 ${
                index === activeStep ? "text-black" : "text-gray-400"
              }`}
            >
              {title}
            </h2>
            <div
              className="text-gray-600 text-sm mt-2"
              dangerouslySetInnerHTML={{ __html: description }}
            />
            {index === activeStep && (
              <div className="w-full h-1 bg-red-500 mt-4 rounded"></div>
            )}
          </div>
        ))}
      </div>
      {currentStep && (
        <div className="relative w-full md:h-[600px] overflow-hidden rounded-3xl">
          <img
            src={currentStep.img}
            alt={currentStep.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default Content;
