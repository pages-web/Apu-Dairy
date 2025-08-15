"use client";

import Image from "next/image";
import { ICmsPost } from "@/src/graphql/types/cms.types";
import { Button } from "@/src/components/ui/Button/Button";

const About = ({ post }: { post: ICmsPost }) => {
  return (
    <div className="container py flex flex-col items-center gap-12">
      <div
        className="max-w-5xl text-gray-600 text-center text-3xl font-sf-pro-rounded"
        data-aos="fade-up"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      {post.thumbnail?.url && (
        <div className="flex justify-center items-start w-full gap-16 flex-wrap">
          <div className="flex flex-col gap-8 items-center">
            <div className="flex flex-col items-center w-32">
              <img
                src="/images/Frame1.png"
                alt="Cloud image"
                className="w-32 h-32 object-contain"
              />
              <p className="mt-2 text-center text-gray-700">
                CO2 ялгаруулалтыг бууруулсан
              </p>
            </div>
            <div className="flex flex-col items-center w-32">
              <img
                src="/images/Frame2.svg"
                alt="Rain image"
                className="w-32 h-32 object-contain rounded-full"
                style={{ backgroundColor: "rgba(136, 189, 74, 1)" }}
              />
              <p className="mt-2 text-center text-gray-700">
                Усны хэрэглээ бага
              </p>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden hidden md:block max-w-xl w-full">
            <Image
              src={`https://apudairy.api.erxes.io/api/read-file?key=${post.thumbnail.url}`}
              alt={post.title}
              width={800}
              height={600}
              quality={100}
              className="object-cover w-full h-auto rounded-xl"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col gap-8 items-center">
            <div className="flex flex-col items-center w-32">
              <img
                src="/images/Group 81887.svg"
                alt="Cow image"
                className="w-32 h-32 object-contain rounded-full"
                style={{ backgroundColor: "rgba(136, 189, 74, 1)" }}
              />
              <p className="mt-2 text-center text-gray-700">Амьтанд ээлтэй</p>
            </div>
            <div className="flex flex-col items-center w-32">
              <img
                src="/images/Group 81889.svg"
                alt="Build image"
                className="w-32 h-32 object-contain rounded-full"
                style={{ backgroundColor: "rgba(136, 189, 74, 1)" }}
              />
              <p className="mt-2 text-center text-gray-700">
                Дахин боловсруулсан сав боодол
              </p>
            </div>
          </div>
        </div>
      )}
      <div className="ml-28">
        <span className="flex items-center gap-2 px-4 py-2 text-red-500 bg-white rounded-full hover:bg-red-50 font-semibold shadow-md mb-5">
          Дэлгэрэнгүй
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.22001 15.1067C5.36064 15.2471 5.55126 15.326 5.75001 15.326C5.94876 15.326 6.13939 15.2471 6.28001 15.1067L13.5 7.88666V13.5767C13.5 13.7756 13.579 13.9663 13.7197 14.107C13.8603 14.2476 14.0511 14.3267 14.25 14.3267C14.4489 14.3267 14.6397 14.2476 14.7803 14.107C14.921 13.9663 15 13.7756 15 13.5767V6.07666C15 5.87775 14.921 5.68698 14.7803 5.54633C14.6397 5.40568 14.4489 5.32666 14.25 5.32666H6.75001C6.5511 5.32666 6.36033 5.40568 6.21968 5.54633C6.07903 5.68698 6.00001 5.87775 6.00001 6.07666C6.00001 6.27557 6.07903 6.46634 6.21968 6.60699C6.36033 6.74764 6.5511 6.82666 6.75001 6.82666H12.44L5.22001 14.0467C5.07956 14.1873 5.00067 14.3779 5.00067 14.5767C5.00067 14.7754 5.07956 14.966 5.22001 15.1067Z"
              fill="#ED3237"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default About;
