"use client";

import React from "react";
import Main from "./MainBanner";
import Else from "./tagIdOthernews";

export default async function NewsHeader() {
  return (
    <div>
      <Main />
      <Else />
    </div>
  );
}
