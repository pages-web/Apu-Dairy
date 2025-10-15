"use client";

import React from "react";
import { getCmsPostDetail } from "@/src/graphql/queries/news";
import { useTranslations } from "next-intl";

type Props = {
  postId: string;
};

const Instructions = (props: Props) => {
  const { post } = getCmsPostDetail({ id: props.postId });
  const t = useTranslations("Instructions");

  return (
    <div className="flex flex-col lg:flex-row gap-8 font-sans text-gray-800">
      <div className="flex-1 max-w-3xl">
        <h3 className="text-[#ED3237] text-3xl font-semibold mb-5 tracking-tight">
          {t("Title")}
        </h3>

        <p className="text-lg font-medium mb-2">{t("Entrance")}</p>
        <div className="mb-4 text-base leading-relaxed">
          {post?.customFieldsData?.[0]?.value?.toString() || t("NoValue")}
        </div>

        <p className="text-lg font-medium mb-2">{t("Instructions")}</p>
        <div className="mb-4">
          <ul className="list-disc list-inside space-y-1 text-base leading-relaxed">
            {post?.customFieldsData?.[1]?.value
              ?.split("\n")
              .map((line: string, idx: number) => (
                <li key={idx}>{line}</li>
              )) || <li>{t("NoValue")}</li>}
          </ul>
        </div>

        <p className="text-lg font-medium mb-2">{t("timetospend")}</p>
        <div className="mb-4 text-base leading-relaxed">
          {post?.customFieldsData?.[3]?.value?.toString() || t("NoValue")}{" "}
          {t("minute")}
        </div>

        <p className="text-lg font-medium mb-2">{t("Calories")}</p>
        <div className="mb-4 text-base leading-relaxed">
          {post?.customFieldsData?.[4]?.value?.toString() || t("NoValue")}
        </div>
      </div>
    </div>
  );
};

export default Instructions;
