import { cache } from "react";
import { CommonParams } from "../types";
import { IProduct } from "../types/product.type";
import { getClient } from "../sSclient";
import { IProductDetail, ProductFields } from "@/src/types/product.type";
import queries from "../product/queries";

type GetProducts = (params?: CommonParams) => Promise<{
  products: IProduct[];
  count: number;
  error_msg: string | undefined;
}>;

type GetProductsMeta = (params?: CommonParams) => Promise<{
  products: { _id: string; modifiedAt: string }[];
  error_msg: string | undefined;
}>;

export const getProducts: GetProducts = cache(async (params) => {
  const { perPage, page, sortField, sortDirection, ...variables } =
    params?.variables || {};
  const { data, error } = await getClient().query({
    query: queries.products,
    variables: params?.variables,
  });
  const count = await getClient().query({
    query: queries.productsCount,
    variables: variables,
  });
  const { poscProducts: products } = data || {};
  return {
    products,
    count: count?.data?.poscProductsTotalCount,
    error_msg: error?.message,
  };
});

type GetProductSimilarities = (params?: CommonParams) => Promise<{
  products: IProductDetail[];
  error_msg: string | undefined;
  groups: { fieldId: string; title: string }[];
  fields: ProductFields;
}>;

export const getProductSimilarities: GetProductSimilarities = cache(
  async (params) => {
    const { data, error } = await getClient().query({
      query: queries.productSimilarities,
      variables: params?.variables,
    });
    const { products, groups } = data?.poscProductSimilarities || {};

    const customFields: any = [...products]
      .sort((a: IProduct, b: IProduct) => a.unitPrice - b.unitPrice)
      .map((product: IProduct) => product.customFieldsData);

    const getFieldValues = (fieldId: string) => {
      const array: string[] = customFields.map(
        (data: CustomField[]) =>
          data.find((field) => field.field === fieldId)?.value
      );
      const uniqueArray: string[] = [];

      for (const element of array) {
        if (!uniqueArray.includes(element)) {
          uniqueArray.push(element);
        }
      }
      return uniqueArray;
    };

    let fields = {};

    if (groups?.length) {
      groups.map(
        (group: Group) =>
          (fields = {
            ...fields,
            [group.fieldId]: {
              ...group,
              variants: getFieldValues(group.fieldId),
            },
          })
      );
    }

    const flattenProducts = (products || []).map(
      ({ customFieldsData, ...product }: IProduct) => {
        let flattenProduct: any = { ...product };
        (customFieldsData || []).forEach((field) => {
          flattenProduct[field.field] = field.value;
        });
        return flattenProduct;
      }
    );

    return {
      fields,
      products: flattenProducts,
      groups,
      error_msg: error?.message,
    };
  }
);

type GetProductDetail = (params?: CommonParams) => Promise<{
  product: IProductDetail;
  error_msg: string | undefined;
}>;

export const getProductDetail: GetProductDetail = cache(async (params) => {
  const { data, error } = await getClient().query({
    query: queries.productDetail,
    variables: params?.variables,
  });
  const { poscProductDetail: product } = data || {};
  return { product, error_msg: error?.message };
});
export interface CustomField {
  field: string;
  value: string;
  stringValue: string;
}
export interface Group {
  fieldId: string;
  title: string;
}

export const getPostDetail = async (params: { variables: { _id: string } }) => {
  const { data } = await getClient().query({
    query: queries.postDetail,
    variables: params.variables,
  });

  return {
    post: data?.postDetail,
  };
};
