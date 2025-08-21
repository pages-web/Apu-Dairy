"use client";

import Image from "next/image";
import { Button } from "../ui/Button/Button";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Togtwortoi = () => {
  const t = useTranslations("Sustainable");
  return (
    <div className="w-full max-w-[1400px] mx-auto relative overflow-hidden px-4 py-8 rounded-2xl bg-green-800 flex flex-col items-start md:h-[480px]">
      {/* Logo */}
      <div className="w-32 h-auto z-10 mb-4 md:absolute md:top-6 md:left-6">
        <img src="/images/togtwor.svg" alt="logo" />
      </div>

      {/* Title */}
      <div className="text-white text-2xl md:text-4xl font-extrabold leading-snug tracking-tight mb-4 md:absolute md:top-[230px] md:left-6">
        {t("title")}
      </div>

      {/* Description */}
      <div className="text-white text-xs md:text-sm max-w-full md:max-w-[300px] mb-4 md:absolute md:top-[280px] md:left-6">
        {t("description")}
      </div>

      {/* Button */}
      <div className="mt-4 md:absolute md:top-[400px] md:left-6">
        <Link href="/contact">
          <Button className="flex items-center gap-2 px-4 py-2 mt-2 text-[#3B834D] bg-white rounded-full transition">
            {t("button")}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.22001 15.2927C5.36064 15.4331 5.55126 15.512 5.75001 15.512C5.94876 15.512 6.13939 15.4331 6.28001 15.2927L13.5 8.0727V13.7627C13.5 13.9616 13.579 14.1524 13.7197 14.293C13.8603 14.4337 14.0511 14.5127 14.25 14.5127C14.4489 14.5127 14.6397 14.4337 14.7803 14.293C14.921 14.1524 15 13.9616 15 13.7627V6.2627C15 6.06378 14.921 5.87302 14.7803 5.73237C14.6397 5.59171 14.4489 5.5127 14.25 5.5127H6.75001C6.5511 5.5127 6.36033 5.59171 6.21968 5.73237C6.07903 5.87302 6.00001 6.06378 6.00001 6.2627C6.00001 6.46161 6.07903 6.65237 6.21968 6.79303C6.36033 6.93368 6.5511 7.0127 6.75001 7.0127H12.44L5.22001 14.2327C5.07956 14.3733 5.00067 14.5639 5.00067 14.7627C5.00067 14.9614 5.07956 15.1521 5.22001 15.2927Z"
                fill="#3B834D"
              />
            </svg>
          </Button>
        </Link>
      </div>

      {/* Background images */}
      <div className="absolute bottom-48 left-190 w-14 h-10 z-10 hidden md:block">
        <Image
          src="/images/mod1.svg"
          alt="Tree1"
          fill
          className="object-contain"
        />
      </div>
      <div className="absolute bottom-54 left-270 w-28 h-36 z-10 hidden md:block">
        <Image
          src="/images/mod2.svg"
          alt="Tree2"
          fill
          className="object-contain"
        />
      </div>
      <div className="absolute bottom-54 left-253 w-28 h-26 z-10 hidden md:block">
        <Image
          src="/images/mod2.svg"
          alt="Tree2"
          fill
          className="object-contain"
        />
      </div>
      <div className="absolute bottom-54 left-230 w-28 h-26 z-10 hidden md:block">
        <Image
          src="/images/mod2.svg"
          alt="Tree2"
          fill
          className="object-contain"
        />
      </div>
      <div className="absolute bottom-40 right-35 w-50 h-36 z-10 hidden md:block">
        <Image
          src="/images/cow1.svg"
          alt="Cow1"
          fill
          className="object-contain"
        />
      </div>
      <div className="absolute bottom-45 right-120 w-20 h-16 z-10 hidden md:block">
        <Image
          src="/images/cow2.svg"
          alt="Cow2"
          fill
          className="object-contain"
        />
      </div>
      <div className="absolute bottom-36 z-10 left-150 hidden md:block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="126"
          height="36"
          viewBox="0 0 126 36"
          fill="none"
        >
          <g opacity="0.43">
            <path
              d="M122.891 35.0309H3.86028C0.71595 34.232 -0.0258102 32.5522 2.29972 30.5379C4.85026 28.3285 9.66412 27.9127 13.5032 28.8548C8.85113 26.691 7.56683 21.7263 10.8404 18.5626C14.114 15.3987 21.3105 14.6494 25.7597 17.0092C25.7149 14.1095 25.7004 11.1636 26.8355 8.37038C27.9705 5.57715 30.4253 2.90858 34.1721 1.61534C39.1027 -0.0866359 45.4162 1.02174 49.3513 3.68199C53.1703 6.26393 54.9507 10.0315 55.1603 13.7395C55.3685 13.509 55.5935 13.2877 55.8311 13.0734C57.0677 11.6393 59.351 10.6977 61.8039 10.4111C61.8061 10.4108 61.8087 10.4106 61.811 10.4103C61.9015 10.3998 61.9924 10.3907 62.0833 10.3819C62.1578 10.3746 62.2326 10.367 62.3074 10.361C62.3438 10.3579 62.3806 10.3559 62.4173 10.3534C62.5285 10.3453 62.6397 10.3381 62.7513 10.3328C62.7835 10.3313 62.8158 10.3305 62.848 10.3292C62.9553 10.325 63.0627 10.3214 63.17 10.3197C63.2387 10.3187 63.3074 10.3192 63.376 10.3192C63.4447 10.3192 63.5134 10.3187 63.582 10.3197C63.6894 10.3212 63.7967 10.325 63.9041 10.3292C63.9363 10.3305 63.9685 10.3313 64.0008 10.3328C64.1123 10.3381 64.2235 10.3453 64.3344 10.3534C64.3712 10.3559 64.4079 10.3582 64.4447 10.361C64.5194 10.367 64.5939 10.3746 64.6684 10.3819C64.7593 10.3907 64.8502 10.3998 64.9408 10.4103C64.943 10.4106 64.9456 10.4108 64.9479 10.4113C67.4007 10.6979 69.684 11.6396 70.9206 13.0736C71.1582 13.2879 71.3832 13.5093 71.5915 13.7397C71.8007 10.0318 73.5814 6.26419 77.4005 3.68226C81.3355 1.022 87.649 -0.08639 92.5796 1.61559C96.3261 2.90882 98.7812 5.57739 99.9163 8.37062C101.051 11.1639 101.037 14.1095 100.992 17.0095C105.441 14.6497 112.638 15.3989 115.911 18.5629C119.185 21.7268 117.901 26.6915 113.249 28.8551C117.087 27.9129 121.901 28.3287 124.452 30.5382C126.777 32.5522 126.035 34.232 122.891 35.0309Z"
              fill="#10566D"
            />
          </g>
        </svg>
      </div>
      <div className="absolute bottom-36 left-52 w-full z-0 rotate-[0deg] hidden md:block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="117"
          viewBox="0 0 668 117"
          fill="none"
        >
          <path
            d="M77.9697 77.5093C103.285 76.8364 128.655 75.1412 153.337 70.6911C207.342 60.9539 256.776 38.2852 311.404 30.9701C335.407 27.7558 359.897 27.587 384.095 25.4385C431.373 21.241 476.985 9.55029 523.667 2.35151C558.941 -3.08792 593.736 1.59144 627.963 9.29661C642.959 12.6725 655.23 23.2683 661.397 37.3483L667.5 51.2812C667.5 51.2812 660.5 47.2812 638.5 36.7812C590 24.2812 562.007 22.098 515.839 26.7748C493.771 29.0102 471.566 31.3307 450.021 35.7751C429.3 40.0492 409.133 45.7575 388.861 51.1438C368.333 56.5978 347.589 61.7566 326.217 64.7795C302.929 68.0734 279.472 70.1887 255.936 72.0483C233.222 73.8429 210.472 75.6109 187.998 78.824C165.052 82.1045 142.455 86.4323 119.324 88.9792C96.4518 91.4976 73.707 92.264 50.6552 92.7241C45.7678 92.8216 39.8796 99.3631 35.0512 99.8189L-6.10352e-05 116.281C9.99994 93.2241 63.952 77.882 77.9697 77.5093Z"
            fill="#A1D860"
          />
        </svg>
      </div>

      <div className="absolute bottom-26 left-64 w-full z-0 hidden md:block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="149"
          viewBox="0 0 764 149"
          fill="none"
        >
          <path
            d="M76.8705 76.5097C102.186 75.8367 127.556 74.1415 152.238 69.6914C206.243 59.9543 255.678 37.2856 310.306 29.9705C334.309 26.7561 358.8 26.5874 382.997 24.4389C430.275 20.2414 475.887 8.55066 522.569 1.35188C566.004 -5.34598 705.92 44.9906 764 148.782L730.5 141.282L12.1743 121.622L0.5 114.782C11 97.2817 62.8528 76.8824 76.8705 76.5097Z"
            fill="#5BA534"
          />
        </svg>
      </div>
    </div>
  );
};

export default Togtwortoi;
