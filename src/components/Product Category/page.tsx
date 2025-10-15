"use client";

import { useState, useEffect } from "react";
import { useCategoryTag } from "@/src/graphql/queries/category";

interface Props {
  selectedTagIds: string[];
}

interface ITagFromCMS {
  id: string;
  name: string;
  parentId: string;
}

const ParentChildDropdowns: React.FC<Props> = ({ selectedTagIds }) => {
  const { cmsPosts: allTags = [], loading: tagsLoading } = useCategoryTag({});
  const [childTags, setChildTags] = useState<ITagFromCMS[]>([]);

  useEffect(() => {
    if (allTags.length > 0) {
      const children = allTags.filter(
        (tag: any) => tag.parentId === "3nTE42k-EJJull_on7pBM"
      );
      setChildTags(children);
    }
  }, [allTags?.length]);

  if (tagsLoading) return <p>Loading...</p>;

  return (
    <div className="ml-5 flex flex-wrap gap-2 mb-6 w-full max-w-[1300px]">
      {childTags.map((child) => {
        const isSelected = selectedTagIds.includes(child.id);
        return (
          <span
            key={child.id}
            className={`
              px-3 py-1 rounded-2xl text-sm border cursor-default
              ${
                isSelected
                  ? "bg-red-500 text-white border-red-500"
                  : "bg-gray-100 text-gray-800 border-gray-300"
              }
            `}
          >
            {child.name}
          </span>
        );
      })}
    </div>
  );
};

export default ParentChildDropdowns;
