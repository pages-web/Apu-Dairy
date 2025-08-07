import queries from "../news/queries";
import { useQuery } from "@apollo/client";

export const getCmsPostDetail = (params: { id: string }) => {
  const { data, error, loading } = useQuery(queries.newsDetail, {
    variables: { id: params.id },
  });

  return {
    post: data?.cmsPost,
    error_msg: error?.message,
    loading,
  };
};
