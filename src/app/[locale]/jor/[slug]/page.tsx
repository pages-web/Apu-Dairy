import Detail from "@/src/components/Recipes/detail";
import React from "react";

const JorDetailPage = async ({ params }: { params: { slug: string } }) => {
  return (
    <div className="w-full">
      <Detail postId={params.slug} />
    </div>
  );
};

export default JorDetailPage;
