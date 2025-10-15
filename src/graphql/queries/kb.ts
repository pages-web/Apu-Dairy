import { OperationVariables, useQuery } from "@apollo/client";
import queries from "./cms/queries";
import queries1 from "./cms/jor";
import productQuery from "./product/productFilter";
import {
  ICmsCategory,
  ICmsPost,
  ICmsTag,
  IProductFilter,
} from "../types/cms.types";

export const useCmsPosts = (variables?: any) => {
  const { data, loading, error } = useQuery(queries.cmsPosts, {
    variables: {
      clientPortalId: process.env.NEXT_PUBLIC_CP_ID,
      perPage: 15,
      sortField: "created-desc",
      ...variables,
    },
    fetchPolicy: "no-cache",
  });

  const cmsPostsList: ICmsPost[] = data?.cmsPostList?.posts || [];

  return { cmsPosts: cmsPostsList, loading, error };
};

export const useCmsCategories = (variables?: OperationVariables) => {
  const { data: cmsCategoriesData, loading } = useQuery(queries.cmsCategories, {
    variables: {
      clientPortalId: process.env.NEXT_PUBLIC_CP_ID,
      perPage: 15,
      sortField: "created-desc",
      ...variables,
    },
  });

  const cmsCategories: ICmsCategory[] = cmsCategoriesData?.cmsCategories || [];

  return { cmsCategories, loading };
};

export const useCmsTags = (variables?: OperationVariables) => {
  const { data: cmsTagsData, loading } = useQuery(queries.cmsTags, {
    variables: {
      clientPortalId: process.env.NEXT_PUBLIC_CP_ID,
      perPage: 15,
      sortField: "created-desc",
      ...variables,
    },
  });

  const cmsTags: ICmsTag[] = cmsTagsData?.cmsTags || [];

  return { cmsTags, loading };
};

export const useCmsPostDetail = (variables?: OperationVariables) => {
  const { data, loading } = useQuery(queries.cmsPostDetail, {
    variables: {
      ...variables,
    },
    fetchPolicy: "no-cache",
  });

  const cmsPostDetail: ICmsPost = data?.cmsPost;

  return { cmsPostDetail, loading };
};

export const useProductTag = (variables?: OperationVariables) => {
  const { data, loading } = useQuery(productQuery.productTag, {
    variables: {
      parentId: "G0FjO5JlxRwJMBhsmOYUC",
      type: "core:product",
      page: 1,
      perPage: 15,
    },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "no-cache",
    context: {
      headers: {
        "erxes-app-token": process.env.NEXT_PUBLIC_ERXES_APP_TOKEN,
      },
    },
  });

  const cmsPosts: IProductFilter[] =
    data?.tags?.map((tag: any) => ({
      id: tag._id,
      name: tag.name,
      parentId: tag.parentId,
      order: tag.order,
    })) || [];

  return { cmsPosts, loading };
};

export const useCmsPostsByCategory = (
  slug: string,
  variables?: OperationVariables
) => {
  const { cmsCategories, loading: categoriesLoading } = useCmsCategories();

  const categoryId = cmsCategories.find((c) => c.slug === slug)?._id;

  const { data, loading, refetch } = useQuery(queries1.CmsPosts, {
    variables: {
      clientPortalId: process.env.NEXT_PUBLIC_CP_ID,
      ...variables,
      perPage: 15,
      categoryIds: categoryId ? [categoryId] : [""],
    },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "no-cache",
    skip: !slug || categoriesLoading,
  });

  const posts: ICmsPost[] = data?.cmsPostList.posts || [];

  return { posts, loading: loading || categoriesLoading, refetch };
};
