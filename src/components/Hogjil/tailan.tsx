import { useCmsPosts } from "@/src/graphql/queries/kb";
import { getCmsPostDetail } from "@/src/graphql/queries/news";
import { useState } from "react";

type Props = {
  postId: string;
};

const ReportDropdown = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const tags = ["i0TVZVog1uX9l9noSSEy7"];
  const { cmsPosts } = useCmsPosts({ tagIds: tags });
  const { post } = getCmsPostDetail({ id: props.postId });

  const handleDownload = async (post: any) => {
    const pdfAttachment = post?.pdfAttachment?.pages || [];
    if (pdfAttachment.length === 0) return;

    const res = await fetch(pdfAttachment[0].url);
    const blob = await res.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = pdfAttachment[0].name || "file.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };
  return (
    <div className="relative mt-4 max-sm:mb-5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-6 py-2 bg-[#ED3237] text-white font-sf-pro-rounded font-medium text-sm rounded-lg border border-[#ED3237] transition-all duration-300 flex items-center gap-2 cursor-pointer"
      >
        Тайлан татах
      </button>

      {isOpen && (
        <ul className="absolute left-0 mt-2 w-56 max-h-96 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          {cmsPosts?.map((postItem) => {
            const pdfAttachment = postItem?.pdfAttachment?.pages || [];
            if (pdfAttachment.length === 0) {
              return (
                <li key={postItem._id}>
                  <span className="block px-4 py-2 text-sm text-gray-400">
                    {postItem.title}
                  </span>
                </li>
              );
            }

            return (
              <li key={postItem._id}>
                <button
                  onClick={() => handleDownload(postItem)}
                  className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full text-sm sm:text-base mb-2 cursor-pointer w-full text-left"
                >
                  {postItem.title}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default ReportDropdown;
