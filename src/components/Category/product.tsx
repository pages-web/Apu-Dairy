"use client";

import { useState } from "react";
import { useProductTag } from "@/src/graphql/queries/kb";
import { IProduct } from "@/src/graphql/types/product.type";
import queries from "@/src/graphql/queries/queries.product";
import { useQuery } from "@apollo/client";
import ProductCard from "./product-card";

const ParentChildDropdowns = () => {
  const { cmsPosts: allTags = [], loading: tagsLoading } = useProductTag({});
  const [selectedParents, setSelectedParents] = useState<{
    [key: string]: string;
  }>({});
  const [selectedTagId, setSelectedTagId] = useState<string>("");

  const handleParentChange = (parentId: string, value: string) => {
    setSelectedParents((prev) => ({ ...prev, [parentId]: value }));
    setSelectedTagId(value);
  };
  const { data, loading: productsLoading } = useQuery(queries.products, {
    variables: {
      categoryId: "-wOEhgQ_XpfnROF2idODh",
      tag: selectedTagId || null,
      page: 1,
      perPage: 12,
    },
  });

  if (tagsLoading || productsLoading) return <p>Loading...</p>;
  const parentTags = allTags.filter((tag) => !tag.parentId);
  const productsList: IProduct[] = data?.poscProducts || [];

  return (
    <div>
      <div className="flex space-x-3 mb-6">
        {parentTags.map((parent) => {
          const childTags = allTags.filter(
            (child) => child.parentId === parent.id
          );
          return (
            <select
              key={parent.id}
              className="border p-2 rounded-2xl"
              value={selectedParents[parent.id] || ""}
              onChange={(e) => handleParentChange(parent.id, e.target.value)}
            >
              <option value="">{parent.name}</option>
              {childTags.map((child) => (
                <option key={child.id} value={child.id}>
                  {child.name}
                </option>
              ))}
            </select>
          );
        })}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {productsList.map((product) => (
          <ProductCard key={product._id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ParentChildDropdowns;
