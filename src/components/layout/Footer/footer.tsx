import Link, { LinkProps } from "next/link";
import Image from "next/image";
import { MapPinIcon } from "lucide-react";
import { getBranchDetail } from "@/src/graphql/queries/auth";
import { Button } from "../../ui/Button/Button";
import { icons } from "./icons";
import { cn } from "@/src/lib/utils/utils";
import { getTranslations } from "next-intl/server";
import React from "react";

const Footer = async () => {
  const { branchDetail } = await getBranchDetail();
  const { email, phoneNumber, address, coordinate, links } = branchDetail || {};
  const t = await getTranslations("Footer");
  return (
    <footer className="bg-[#ED3237] text-white rounded-3xl px-6 py-10 mt-16 mb-16 mx-auto max-w-[1400px]">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">APU DAIRY</h2>
          <p className="text-sm leading-relaxed">
            {t("address")
              .split("\n")
              .map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
          </p>
        </div>

        <div className="flex justify-center md:justify-start items-start">
          <Image
            src="/images/image.svg"
            alt="footer plant"
            width={60}
            height={60}
            loading="lazy"
          />
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold uppercase mb-2">{t("Introduction")}</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link href="/aboutheader" className="cursor-none">
                {t("Aboutus")}
              </Link>
            </li>
            <li>
              <Link href="/category" className="cursor-none">
                {t("Product")}
              </Link>
            </li>
            <li>
              <Link href="/#" className="cursor-none">
                {t("milkPreparation")}
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold uppercase mb-2">{t("News")}</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link href="/human" className="cursor-none">
                {t("Human")}
              </Link>
            </li>
            <li>
              <Link href="/news" className="cursor-none">
                {t("Information")}
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold uppercase mb-2">{t("contactUs")}</h3>
          <ul className="space-y-2 text-sm text-white">
            <li className="flex items-start">
              {!!phoneNumber && (
                <FooterLink
                  href={`tel:${phoneNumber}`}
                  className="flex items-center text-white cursor-none"
                >
                  {phoneNumber}
                </FooterLink>
              )}
            </li>
            <li className="flex items-start">
              {!!phoneNumber && (
                <FooterLink
                  href={`tel:${phoneNumber}`}
                  className="flex items-center text-white cursor-none"
                >
                  {phoneNumber}
                </FooterLink>
              )}
            </li>
            <li className="flex items-start">
              {!!email && (
                <FooterLink href={"mailto: " + email}>{email}</FooterLink>
              )}
              info@apudairy.com
            </li>

            <li className="flex items-start">
              <span>sales@apudairy.mn</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Босоо зураас ба доод footer */}
      <div className="border-t border-white mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <p>© 2023 Made by erxes</p>

        <div className="flex items-center pb-2 gap-1 -ml-2">
          {Object.keys(links || {}).map((link) =>
            !!links[link] ? (
              <SocialLink
                href={(links || {})[link] || ""}
                icon={link.toLowerCase()}
                key={link}
                className="cursor-none"
              >
                {link}
              </SocialLink>
            ) : null
          )}
        </div>
      </div>
    </footer>
  );
};

const FooterLink = (
  props: React.PropsWithChildren &
    LinkProps & { className?: string; target?: string }
) => (
  <Button
    asChild
    className={cn(
      "px-0 h-8 flex justify-start text-neutral-600 hover:text-primary",
      props.className
    )}
    variant="link"
  >
    <Link {...props} />
  </Button>
);

const SocialLink = (
  props: React.PropsWithChildren &
    LinkProps & { className?: string; icon: string }
) => (
  <Button
    asChild
    className={cn(
      "text-xl shadow-none border w-16 h-12 bg-white/50 rounded-2xl",
      props.className
    )}
    size="icon"
    variant="ghost"
  >
    <Link {...props}>{icons[props.icon as keyof typeof icons]}</Link>
  </Button>
);
export default Footer;
