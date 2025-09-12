"use client";
import { useCmsPosts } from "@/src/graphql/queries/kb";
import { useLocale } from "next-intl";
import React, { useState } from "react";

const staticImages = [
  "/images/01.jpg",
  "/images/02.png",
  "/images/03.png",
  "/images/04.png",
];

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
      img: staticImages[index] || "/images/placeholder.png",
      color: "text-gray-400",
    })) || [];

  const currentStep = steps[activeStep] || steps[0];

  return (
    <div className="max-w-[1400px] w-full mx-auto ">
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
      <div className="relative md:w-[1390px] md:h-[600px] lg:h-[600px] overflow-hidden group rounded-3xl">
        <img
          src={currentStep.img}
          alt={currentStep.title}
          className="w-full max-w-[1400px] h-auto rounded object-cover"
        />
      </div>
    </div>
  );
};

export default Content;
