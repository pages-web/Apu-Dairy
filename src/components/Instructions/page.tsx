import React from "react";
import { getCmsPostDetail } from "@/src/graphql/queries/news";
import IngredientList from "./sidePage";

type Props = {
  postId: string;
};

const Instructions = (props: Props) => {
  const { post, loading } = getCmsPostDetail({ id: props.postId });

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="flex-1">
        <h3 className="text-[#ED3237] font-sans text-[24px] font-normal leading-normal mb-5">
          Instructions
        </h3>
        <h4 className="mb-5 text-[rgba(53,53,53,0.6)] font-sans text-[16px] font-normal leading-normal">
          Step 1/3
        </h4>
        <div className="mb-2 text-black font-sans text-[20px] font-normal leading-normal">
          {post?.customFieldsData?.[3]?.value?.toString() || "No value"}
        </div>

        <div className="mb-2">
          <ul className="list-disc list-inside">
            {post?.customFieldsData?.[0]?.value
              ?.split("\n")
              .map((line: string, idx: number) => (
                <li key={idx}>{line}</li>
              )) || <li>No value</li>}
          </ul>
        </div>

        <div className="mb-2">
          {post?.customFieldsData?.[1]?.value?.toString() || "No value"}
        </div>
        <h4 className="mb-5 text-[rgba(53,53,53,0.6)] font-sans text-[16px] font-normal leading-normal">
          Step 2/3
        </h4>
        <div className="mb-2 text-black font-sans text-[20px] font-normal leading-normal">
          {post?.customFieldsData?.[4]?.value?.toString() || "No value"}
        </div>
        <div className="mb-5">
          <ul className="list-disc list-inside">
            {post?.customFieldsData?.[5]?.value
              ?.split("\n")
              .map((line: string, idx: number) => (
                <li key={idx}>{line}</li>
              )) || <li>No value</li>}
          </ul>
        </div>
        <div className="mb-2">
          {post?.customFieldsData?.[6]?.value?.toString() || "No value"}
        </div>
        <h4 className="mb-5 text-[rgba(53,53,53,0.6)] font-sans text-[16px] font-normal leading-normal">
          Step 3/3
        </h4>
        <div className="mb-2 text-black font-sans text-[20px] font-normal leading-normal">
          {post?.customFieldsData?.[7]?.value?.toString() || "No value"}
        </div>
        <div className="mb-5">
          <ul className="list-disc list-inside">
            {post?.customFieldsData?.[8]?.value
              ?.split("\n")
              .map((line: string, idx: number) => (
                <li key={idx}>{line}</li>
              )) || <li>No value</li>}
          </ul>
        </div>
        <div className="mb-2">
          {post?.customFieldsData?.[9]?.value?.toString() || "No value"}
        </div>
      </div>
    </div>
  );
};

export default Instructions;
