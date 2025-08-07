import React from "react";
import { useCmsPosts } from "@/src/graphql/queries/kb";
import CarouselSongon from "./carousel";

export default async function Songon() {
  const { cmsPosts } = useCmsPosts({
    tagIds: "nuoUBA4lWsZRl6GXSXS9U",
    language: "mn",
  });

  return (
    <div>
      <CarouselSongon posts={cmsPosts} />
    </div>
  );
}
