import { ICmsPost } from "@/src/graphql/types/cms.types";
import { Clock, Flame } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Other = ({ post }: { post: ICmsPost }) => {
  return (
    <div className="flex flex-col items-center px-1">
      {post.thumbnail?.url && (
        <div className="relative w-full aspect-square overflow-hidden rounded-3xl">
          <Link href={`/jor/${post._id}`}>
            <Image
              src={`https://apudairy.api.erxes.io/api/read-file?key=${post.thumbnail.url}`}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, 500px"
              quality={100}
              className="rounded-3xl object-cover cursor-none"
              loading="lazy"
            />
          </Link>
          <span className="absolute top-3 left-3 bg-white text-red-500 text-xs font-semibold px-2 py-0.5 rounded-full z-10">
            Веган
          </span>
        </div>
      )}
      <div className="flex flex-col w-full max-w-[500px] gap-2">
        <div className="text-[18px] font-normal font-weigth-400 text-black z-10 font-sf-pro-rounded mt-2">
          {post.title}
        </div>
        <div className="flex items-center gap-4 text-gray-700 text-sm font-medium mb-3">
          <div className="flex items-center gap-1">
            <Clock className="w-5 h-5 text-black/50" />
            <span>25 мин</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Other;
