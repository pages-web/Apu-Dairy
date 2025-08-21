"use client";

import { useQuery } from "@apollo/client";
import { IProduct } from "@/src/graphql/types/product.type";
import queries from "@/src/graphql/queries/queries.product";
import { useState } from "react";
import { useRouter } from "next/navigation";
import ProductCard from "./product-card";
import { useTranslations } from "next-intl";

const AllProductsPage = () => {
  const t = useTranslations("AllProductsPage");
  const { data } = useQuery(queries.products, {
    variables: { categoryId: "-wOEhgQ_XpfnROF2idODh", page: 1, perPage: 12 },
  });

  const productsList: IProduct[] = data?.poscProducts || [];

  const router = useRouter();
  const [brand, setBrand] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedBrand = e.target.value;
    setBrand(selectedBrand);

    if (selectedBrand === "Sain") {
      router.push("/sain");
    }

    if (selectedBrand === "Pro+") {
      router.push("/proplus");
    }

    if (selectedBrand === "Sheep") {
      router.push("/sheep");
    }
  };
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-[18px] font-normal text-black font-sf-pro-rounded mb-10">
        {t("FilterTitle")}
      </h1>
      <div className="flex flex-row sm:flex-row gap-4 sm:gap-10 mb-10">
        <div className="relative w-32">
          <select
            className="appearance-none w-full border rounded-2xl p-2 text-sm pr-8"
            value={brand}
            onChange={handleChange}
          >
            <option value="">{t("BrandPlaceholder")}</option>
            <option value="Pro+">{t("BrandOptions.Pro+")}</option>
            <option value="Sain">{t("BrandOptions.Sain")}</option>
            <option value="Sheep">{t("BrandOptions.Sheep")}</option>
          </select>
          <div className="pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.23 7.21C5.373 7.072 5.565 6.997 5.764 7.001C5.963 7.004 6.152 7.087 6.29 7.23L10 11.168L13.71 7.23C13.778 7.156 13.859 7.096 13.95 7.053C14.041 7.011 14.14 6.988 14.24 6.984C14.341 6.981 14.441 6.998 14.534 7.034C14.628 7.07 14.713 7.124 14.786 7.194C14.858 7.263 14.916 7.347 14.955 7.439C14.995 7.531 15.015 7.631 15.016 7.731C15.016 7.831 14.996 7.931 14.957 8.023C14.919 8.116 14.862 8.2 14.79 8.27L10.54 12.77C10.47 12.843 10.386 12.9 10.293 12.94C10.201 12.979 10.101 13 10 13C9.899 13 9.799 12.979 9.707 12.94C9.614 12.9 9.53 12.843 9.46 12.77L5.21 8.27C5.072 8.127 4.997 7.935 5.001 7.736C5.004 7.537 5.087 7.348 5.23 7.21Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
        <div className="relative w-32">
          <select className="appearance-none w-full border rounded-2xl p-2 text-sm pr-8">
            <option>{t("TypePlaceholder")}</option>
            <option>{t("TypeOptions.Milk")}</option>
            <option>{t("TypeOptions.Yogurt")}</option>
            <option>{t("TypeOptions.Other")}</option>
          </select>
          <div className="pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.23 7.21C5.373 7.072 5.565 6.997 5.764 7.001C5.963 7.004 6.152 7.087 6.29 7.23L10 11.168L13.71 7.23C13.778 7.156 13.859 7.096 13.95 7.053C14.041 7.011 14.14 6.988 14.24 6.984C14.341 6.981 14.441 6.998 14.534 7.034C14.628 7.07 14.713 7.124 14.786 7.194C14.858 7.263 14.916 7.347 14.955 7.439C14.995 7.531 15.015 7.631 15.016 7.731C15.016 7.831 14.996 7.931 14.957 8.023C14.919 8.116 14.862 8.2 14.79 8.27L10.54 12.77C10.47 12.843 10.386 12.9 10.293 12.94C10.201 12.979 10.101 13 10 13C9.899 13 9.799 12.979 9.707 12.94C9.614 12.9 9.53 12.843 9.46 12.77L5.21 8.27C5.072 8.127 4.997 7.935 5.001 7.736C5.004 7.537 5.087 7.348 5.23 7.21Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
        <div className="relative w-32">
          <select className="appearance-none w-full border rounded-2xl p-2 text-sm pr-8">
            <option>{t("SizePlaceholder")}</option>
            <option>900 гр</option>
            <option>760 гр</option>
            <option>420 гр</option>
          </select>
          <div className="pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.23 7.21C5.373 7.072 5.565 6.997 5.764 7.001C5.963 7.004 6.152 7.087 6.29 7.23L10 11.168L13.71 7.23C13.778 7.156 13.859 7.096 13.95 7.053C14.041 7.011 14.14 6.988 14.24 6.984C14.341 6.981 14.441 6.998 14.534 7.034C14.628 7.07 14.713 7.124 14.786 7.194C14.858 7.263 14.916 7.347 14.955 7.439C14.995 7.531 15.015 7.631 15.016 7.731C15.016 7.831 14.996 7.931 14.957 8.023C14.919 8.116 14.862 8.2 14.79 8.27L10.54 12.77C10.47 12.843 10.386 12.9 10.293 12.94C10.201 12.979 10.101 13 10 13C9.899 13 9.799 12.979 9.707 12.94C9.614 12.9 9.53 12.843 9.46 12.77L5.21 8.27C5.072 8.127 4.997 7.935 5.001 7.736C5.004 7.537 5.087 7.348 5.23 7.21Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {productsList.map((product) => (
          <ProductCard key={product._id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default AllProductsPage;
