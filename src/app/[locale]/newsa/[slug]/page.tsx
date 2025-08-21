import Detail from "@/src/components/NewsHeader/Detail";

const NewsDetailPage = async ({ params }: { params: { slug: string } }) => {
  return (
    <div>
      <Detail postId={params.slug} />
    </div>
  );
};

export default NewsDetailPage;
