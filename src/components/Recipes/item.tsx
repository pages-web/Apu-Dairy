import { ICmsPost } from "@/src/graphql/types/cms.types";
import Image from "next/image";
import Link from "next/link";
import { FaClock } from "react-icons/fa";
import { GiFireflake } from "react-icons/gi";

const Item = ({
  post,
  large = false,
  small = false,
}: {
  post?: ICmsPost;
  large?: boolean;
  small?: boolean;
}) => {
  if (!post || !post.thumbnail?.url) return null;

  return (
    <div
      className={`relative rounded-3xl overflow-hidden text-white shadow-md ${
        small ? "h-[290px] w-full" : "h-[600px] w-full"
      }`}
    >
      <Link href={`/jor/${post._id}`}>
        <Image
          src={`https://apudairy.api.erxes.io/api/read-file?key=${post.thumbnail.url}`}
          alt={post.title}
          fill
          priority={large}
          sizes={large ? "(min-width: 768px) 66vw, 100vw" : "33vw"}
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <span className="absolute top-3 left-3 bg-white text-red-500 text-xs font-semibold px-2 py-0.5 rounded-full z-10">
          Веган
        </span>

        <div className="absolute bottom-10 left-3 flex gap-4 text-sm items-center z-10">
          <div className="flex items-center gap-1">
            <FaClock className="text-white text-xs" />
            <span>15 mins</span>
          </div>
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
            >
              <path
                d="M10.2411 3.97602C11.391 4.48987 12.3298 5.38273 12.9006 6.50545C13.4714 7.62817 13.6397 8.91276 13.3773 10.1446C13.115 11.3765 12.4379 12.481 11.4591 13.2737C10.4804 14.0664 9.25926 14.4993 7.99977 14.5C6.92244 14.5 5.86885 14.1835 4.96978 13.59C4.07071 12.9964 3.36575 12.1519 2.94242 11.1612C2.51909 10.1706 2.39602 9.07739 2.58849 8.0174C2.78096 6.95741 3.2805 5.97728 4.0251 5.19869C4.53821 5.91518 5.21527 6.49852 5.99977 6.90002C6.01351 6.01911 6.22145 5.15207 6.60875 4.36075C6.99606 3.56942 7.5532 2.8733 8.24043 2.32202C8.76493 3.02548 9.45087 3.59253 10.2404 3.97535L10.2411 3.97602Z"
                stroke="white"
                stroke-opacity="0.7"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.99986 12.5C8.63411 12.4997 9.24457 12.2584 9.70757 11.825C10.1706 11.3915 10.4515 10.7982 10.4935 10.1653C10.5354 9.53247 10.3352 8.90732 9.93352 8.41651C9.53179 7.9257 8.95853 7.60593 8.32986 7.52197C7.64157 8.13785 7.18805 8.97327 7.04653 9.88597C6.53297 9.76034 6.04958 9.53371 5.62453 9.21931C5.50109 9.59482 5.46846 9.99425 5.52931 10.3848C5.59016 10.7754 5.74275 11.146 5.97456 11.4661C6.20638 11.7863 6.5108 12.0469 6.86286 12.2266C7.21492 12.4064 7.60458 12.5 7.99986 12.5Z"
                stroke="white"
                stroke-opacity="0.7"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>850 cal</span>
          </div>
        </div>
        <div className="absolute bottom-3 left-3 text-sm font-semibold z-10">
          {post.title}
        </div>
      </Link>
    </div>
  );
};

export default Item;
