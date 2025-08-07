import React, { useState } from "react";
import { ICmsPost } from "@/src/graphql/types/cms.types";
import Content from "./content";

const TimelinePage = ({ posts }: { posts: ICmsPost[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Content
      posts={posts}
      activeIndex={activeIndex}
      onSelect={(idx) => setActiveIndex(idx)}
    />
  );
};

export default TimelinePage;
