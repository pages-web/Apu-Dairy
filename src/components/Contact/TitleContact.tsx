"use client";

import { ICmsPost } from "@/src/graphql/types/cms.types";
import ContactForm from "../Erxes Form/contactForm";
import Info from "./info";
import FAQContact from "./faqPage";

const TitleContact = ({ post }: { post: ICmsPost }) => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8">
      <div className="max-w-4xl mx-auto text-center text-[#000000] font-[400] text-[32px] md:text-[42px] leading-normal font-sf-pro-rounded">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
      <div className="mt-10 flex flex-col md:flex-row justify-between items-start gap-8 max-w-6xl mx-auto">
        <div className="w-full md:w-1/2">
          <ContactForm brandId="vedQYV" formId="KzZ-Vx" />
        </div>
        <div className="w-full md:w-1/2">
          <Info />
        </div>
      </div>
      <div className="mt-16 flex justify-center">
        <div className="w-full max-w-[1200px]">
          <FAQContact />
        </div>
      </div>
    </div>
  );
};

export default TitleContact;
