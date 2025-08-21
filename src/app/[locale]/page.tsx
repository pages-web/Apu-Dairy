"use client";

import React from "react";
import Brand from "../../components/Brand/brand";
import MainBanner from "../../components/heading/cmsPost";
import Food from "../../components/Food";
import FoodCategory from "../../components/Food Category/foodCategory";
import AboutUs from "./about/page";
import Secure from "../../components/Security/page";
import Alham from "../../components/Security/alham";
import News from "../../components/news/page";
import Togtwortoi from "../../components/TogtwortoiHogjil";

export const revalidate = 60;

const Home = () => {
  return (
    <div>
      <MainBanner />
      <Brand />
      <Food />
      <FoodCategory />
      <AboutUs />
      <Secure />
      <Alham />
      <Togtwortoi />
      <News />
    </div>
  );
};

export default Home;
