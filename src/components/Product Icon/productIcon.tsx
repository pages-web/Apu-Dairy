import Link, { LinkProps } from "next/link";
import Image from "next/image";
import React from "react";
import { getTranslations } from "next-intl/server";
import { Button } from "../ui/Button/Button";
import { cn } from "@/src/lib/utils/utils";
import { icons } from "../layout/Footer/icons";
import { getBranchDetail } from "@/src/graphql/queries/auth";

const ProductIcons = async () => {
  const { branchDetail } = await getBranchDetail();
  const { links } = branchDetail || {};

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-10 w-full items-start">
      <div className="border-t border-white mt-2 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <div className="flex items-center gap-2">
          {Object.keys(links || {}).map((link) =>
            !!links[link] ? (
              <SocialLink
                href={links[link] || ""}
                icon={link.toLowerCase()}
                key={link}
              />
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

const FooterLink = (props: React.PropsWithChildren & LinkProps) => (
  <Button
    asChild
    className={cn("px-0 h-8 flex justify-start text-white hover:text-primary")}
    variant="link"
  >
    <Link {...props} />
  </Button>
);

const SocialLink = (
  props: React.PropsWithChildren & LinkProps & { icon: string }
) => (
  <Button
    asChild
    className={cn(
      "text-xl shadow-none border w-12 h-12 bg-white rounded-2xl text-red-500 hover:bg-gray-300"
    )}
    size="icon"
    variant="ghost"
  >
    <Link {...props}>{icons[props.icon as keyof typeof icons]}</Link>
  </Button>
);

export default ProductIcons;
