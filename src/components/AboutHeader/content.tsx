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
    <div className="py flex flex-col items-center gap-8">
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
      <div className="bg-[rgb(237,50,55)] rounded-3xl p-8 w-full max-w-[1400px] mx-auto">
        {post.videoUrl && (
          <div className="flex flex-col items-center w-full gap-8 h-full">
            <div
              className="rounded-xl overflow-hidden w-full hidden md:block lg:block relative"
              style={{ paddingTop: "56.25%" }}
            >
              <iframe
                src={post.videoUrl.replace("watch?v=", "embed/")}
                title="Video"
                className="absolute top-0 left-0 w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="text-white font-semibold max-w-full w-full text-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <p className="text-[#EEE] font-sf-pro-rounded text-[28px] md:text-[32px] font-medium leading-normal">
                    21M
                  </p>
                  <p className="text-xs md:text-sm text-[#EEE] font-sf-pro-rounded">
                    {t("globalReach")}
                  </p>
                </div>
                <div>
                  <p className="text-[#EEE] font-sf-pro-rounded text-[28px] md:text-[32px] font-medium leading-normal">
                    12+
                  </p>
                  <p className="text-xs md:text-sm text-[#EEE] font-sf-pro-rounded">
                    {t("yearsExpertise")}
                  </p>
                </div>
                <div>
                  <p className="text-[#EEE] font-sf-pro-rounded text-[28px] md:text-[32px] font-medium leading-normal">
                    654
                  </p>
                  <p className="text-xs md:text-sm text-[#EEE] font-sf-pro-rounded">
                    {t("projectsCompleted")}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <div>
                  <p className="text-[#EEE] font-sf-pro-rounded text-[28px] md:text-[32px] font-medium leading-normal">
                    113K
                  </p>
                  <p className="text-xs md:text-sm text-[#EEE] font-sf-pro-rounded">
                    {t("monthlyActiveUsers")}
                  </p>
                </div>
                <div>
                  <p className="text-[#EEE] font-sf-pro-rounded text-[28px] md:text-[32px] font-medium leading-normal">
                    461K
                  </p>
                  <p className="text-xs md:text-sm text-[#EEE] font-sf-pro-rounded">
                    {t("registeredCustomers")}
                  </p>
                </div>
                <div>
                  <p className="text-[#EEE] font-sf-pro-rounded text-[28px] md:text-[32px] font-medium leading-normal">
                    10K+
                  </p>
                  <p className="text-xs md:text-sm text-[#EEE] font-sf-pro-rounded">
                    {t("dailyUsers")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Zamnal />
      <Hogjil />
      <h2 className="text-sm mt-10 font-medium leading-normal text-[#ED3237] bg-[rgb(250,203,205)] rounded-full font-sf-pro-rounded w-32 h-7 flex items-center justify-center">
        {t("safety")}
      </h2>
      <Secure />
      <Alham />
      <Zahiral />
    </div>
  );
};

export default About;
