"use client";

import { useState, useEffect } from "react";
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
    fetchPolicy: "network-only",
  });
  const [productsList, setProductsList] = useState<IProduct[]>([]);
  useEffect(() => {
    if (data?.poscProducts) setProductsList(data.poscProducts);
  }, [data]);

  if (tagsLoading || productsLoading) return <p>Loading...</p>;
  const parentTags = allTags.filter(
    (tag: any) => tag.parentId === "G0FjO5JlxRwJMBhsmOYUC"
  );

  return (
    <div className="ml-5">
      <div className="flex flex-wrap gap-3 mb-6 w-full max-w-[1300px]">
        {parentTags.map((parent) => {
          const childTags = allTags.filter(
            (child) => child.parentId === parent.id
          );
          return (
            <select
              key={parent.id}
              className="border p-2 rounded-2xl pr-10 appearance-none bg-white bg-no-repeat bg-right-[3rem] bg-center"
              style={{
                backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'><path fill-rule='evenodd' clip-rule='evenodd' d='M5.23002 7.20999C5.37328 7.07216 5.5654 6.99685 5.76416 7.0006C5.96292 7.00435 6.15206 7.08686 6.29002 7.22999L10 11.168L13.71 7.22999C13.7775 7.15565 13.8591 7.0956 13.9502 7.0534C14.0413 7.01119 14.1399 6.9877 14.2402 6.98431C14.3405 6.98093 14.4405 6.99771 14.5342 7.03366C14.6279 7.06962 14.7135 7.12402 14.7858 7.19365C14.8581 7.26327 14.9157 7.3467 14.9551 7.43899C14.9946 7.53127 15.0151 7.63055 15.0155 7.73092C15.0159 7.83129 14.9962 7.93072 14.9574 8.02332C14.9187 8.11592 14.8618 8.1998 14.79 8.26999L10.54 12.77C10.4701 12.8426 10.3862 12.9003 10.2934 12.9398C10.2006 12.9792 10.1008 12.9995 10 12.9995C9.8992 12.9995 9.79942 12.9792 9.70664 12.9398C9.61386 12.9003 9.52998 12.8426 9.46002 12.77L5.21002 8.26999C5.07219 8.12674 4.99687 7.93462 5.00062 7.73585C5.00437 7.53709 5.08688 7.34795 5.23002 7.20999Z' fill='black'/></svg>")`,
                backgroundPosition: "right 0.75rem center",
                backgroundSize: "1rem 1.1rem",
              }}
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
