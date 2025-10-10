"use client";

import React from "react";
import Joruud from "./jor";
import ThirdItem from "./thirdItem";

export default function JorPage() {
  return (
    <div className="px-3 mt-8 grid md:grid-cols-2 grid-cols-1 gap-6">
      <Joruud />
      <ThirdItem />
    </div>
  );
}
