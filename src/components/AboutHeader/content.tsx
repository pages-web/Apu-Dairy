"use client";

import Image from "next/image";
import { ICmsPost } from "@/src/graphql/types/cms.types";
import Zamnal from "@/src/components/History/page";
import Alham from "@/src/components/Security/alham";
import Secure from "@/src/components/Security/page";
import Hogjil from "../Hogjil/page";
import { useTranslations } from "next-intl";
import Zahiral from "../Zahiral Avatar/page";

const About = ({ post }: { post: ICmsPost }) => {
  const t = useTranslations("stats");
  return (
    <div className="flex flex-col items-center gap-8">
      <div>
        <p className="text-[#444546] text-center font-sf-pro-rounded text-[42px] font-semibold capitalize">
          {post.title.split(" ").map((word, index) =>
            word === "Up" ? (
              <span key={index} className="text-red-500">
                {word}
              </span>
            ) : (
              <span key={index}>{word} </span>
            )
          )}
        </p>
      </div>
      <div
        className="max-w-5xl text-[#000000] text-center text-base leading-[160%] font-sf-pro-rounded font-normal"
        data-aos="fade-up"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      <Zamnal />
      <Zahiral />
      <Hogjil />
      <h2 className="text-sm mt-10 font-medium leading-normal text-[#ED3237] bg-[rgb(250,203,205)] rounded-full font-sf-pro-rounded w-32 h-7 flex items-center justify-center">
        {t("safety")}
      </h2>
      <Secure />
      <Alham />
    </div>
  );
};

export default About;
