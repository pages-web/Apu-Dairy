import { ICmsPost } from "@/src/graphql/types/cms.types";
import { Clock, Flame } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Other = ({ post }: { post: ICmsPost }) => {
  const { _id } = post;
  return (
    <div className="flex flex-col items-center gap-4 px-4 sm:px-6">
      {post.thumbnail?.url && (
        <div className="relative w-full max-w-[500px] aspect-square overflow-hidden rounded-3xl">
          <Link href={`/jor/${post._id}`}>
            <Image
              src={`https://apudairy.api.erxes.io/api/read-file?key=${post.thumbnail.url}`}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, 500px"
              quality={100}
              className="rounded-3xl object-cover"
              loading="lazy"
            />
          </Link>
          <span className="absolute top-3 left-3 bg-white text-red-500 text-xs font-semibold px-2 py-0.5 rounded-full z-10">
            Веган
          </span>
        </div>
      )}
      <div className="flex flex-col w-full max-w-[500px] gap-2">
        <div className="text-[18px] font-normal font-weigth-400 text-black z-10 font-sf-pro-rounded">
          {post.title}
        </div>
        <div className="flex items-center gap-4 text-gray-700 text-sm font-medium">
          <div className="flex items-center gap-1">
            <Clock className="w-5 h-5 text-black/50" />
            <span>25 мин</span>
          </div>
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              className="text-black/50"
            >
              <path
                d="M10.2411 3.97602C11.391 4.48987 12.3298 5.38273 12.9006 6.50545C13.4714 7.62817 13.6397 8.91276 13.3773 10.1446C13.115 11.3765 12.4379 12.481 11.4591 13.2737C10.4804 14.0664 9.25926 14.4993 7.99977 14.5C6.92244 14.5 5.86885 14.1835 4.96978 13.59C4.07071 12.9964 3.36575 12.1519 2.94242 11.1612C2.51909 10.1706 2.39602 9.07739 2.58849 8.0174C2.78096 6.95741 3.2805 5.97728 4.0251 5.19869C4.53821 5.91518 5.21527 6.49852 5.99977 6.90002C6.01351 6.01911 6.22145 5.15207 6.60875 4.36075C6.99606 3.56942 7.5532 2.8733 8.24043 2.32202C8.76493 3.02548 9.45087 3.59253 10.2404 3.97535L10.2411 3.97602Z"
                stroke="currentColor"
                strokeOpacity="0.7"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.99986 12.5C8.63411 12.4997 9.24457 12.2584 9.70757 11.825C10.1706 11.3915 10.4515 10.7982 10.4935 10.1653C10.5354 9.53247 10.3352 8.90732 9.93352 8.41651C9.53179 7.9257 8.95853 7.60593 8.32986 7.52197C7.64157 8.13785 7.18805 8.97327 7.04653 9.88597C6.53297 9.76034 6.04958 9.53371 5.62453 9.21931C5.50109 9.59482 5.46846 9.99425 5.52931 10.3848C5.59016 10.7754 5.74275 11.146 5.97456 11.4661C6.20638 11.7863 6.5108 12.0469 6.86286 12.2266C7.21492 12.4064 7.60458 12.5 7.99986 12.5Z"
                stroke="currentColor"
                strokeOpacity="0.7"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>850 cal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Other;
