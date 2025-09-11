import React from "react";
import { useCmsPosts } from "@/src/graphql/queries/kb";
import { useLocale } from "next-intl";

export default function ArticleLike() {
  const NEWS_TAG_ID = "IGmCs97rGqbDLEwaW89KI";
  const locale = useLocale();

  const { cmsPosts } = useCmsPosts({
    tagIds: [NEWS_TAG_ID],
    language: locale,
  });

  if (!cmsPosts || cmsPosts.length === 0) {
    return <div>No posts found</div>;
  }

  return (
    <div>
      {cmsPosts.map((post) => (
        <div key={post._id}>
          <h2>{post.title}</h2>
        </div>
      ))}
    </div>
  );
}
