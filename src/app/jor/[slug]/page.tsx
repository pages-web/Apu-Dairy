import { getPostDetail } from "@/src/graphql/queries/product";
import Image from "next/image";

const JorDetailPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const { post } = await getPostDetail({ variables: { _id: slug } });

  if (!post) return <div>Жор олдсонгүй</div>;

  return (
    <div className="max-w-2xl mx-auto py-10">
      {post.thumbnail?.url && (
        <div className="relative w-full aspect-square mb-6">
          <Image
            src={`https://apudairy.api.erxes.io/api/read-file?key=${post.thumbnail.url}`}
            alt={post.title}
            fill
            className="rounded-xl object-cover"
          />
        </div>
      )}
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
};

export default JorDetailPage;
