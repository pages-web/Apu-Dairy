import Link, { LinkProps } from "next/link";
import Image from "next/image";
import React from "react";
import { Button } from "../../ui/Button/Button";
import { icons } from "./icons";
import { cn } from "@/src/lib/utils/utils";
import { getBranchDetail } from "@/src/graphql/queries/auth";
import { getTranslations } from "next-intl/server";

const Footer = async () => {
  const { branchDetail } = await getBranchDetail();
  const { email, phoneNumber, links } = branchDetail || {};
  const t = await getTranslations("Footer");

  return (
    <footer className="bg-[#ED3237] text-white rounded-3xl px-6 py-10 mt-16 mb-16 mx-auto w-full max-w-[90%] lg:max-w-[1400px]">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 w-full items-start">
        {/* Logo + Address */}
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

        {/* Footer image */}
        <div className="flex justify-center md:justify-start items-start">
          <Image
            src="/images/image.svg"
            alt="footer plant"
            width={60}
            height={60}
            loading="lazy"
          />
        </div>

        {/* Introduction links */}
        <div className="space-y-2">
          <h3 className="font-semibold uppercase mb-2">{t("Introduction")}</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link href="/aboutheader">{t("Aboutus")}</Link>
            </li>
            <li>
              <Link href="/category">{t("Product")}</Link>
            </li>
            <li>
              <Link href="/#">{t("milkPreparation")}</Link>
            </li>
          </ul>
        </div>

        {/* News links */}
        <div className="space-y-2">
          <h3 className="font-semibold uppercase mb-2">{t("News")}</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link href="/human">{t("Human")}</Link>
            </li>
            <li>
              <Link href="/news">{t("Information")}</Link>
            </li>
          </ul>
        </div>

        {/* Contact info */}
        <div className="space-y-2">
          <h3 className="font-semibold uppercase mb-2">{t("contactUs")}</h3>
          <ul className="space-y-2 text-sm text-white">
            {phoneNumber && (
              <li>
                <FooterLink href={`tel:${phoneNumber}`}>
                  {phoneNumber}
                </FooterLink>
              </li>
            )}
            {email && (
              <li>
                <FooterLink href={`mailto:${email}`}>{email}</FooterLink>
              </li>
            )}
            <li>
              <span>sales@apudairy.mn</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-white mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <p>© 2023 Made by erxes</p>
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
    </footer>
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
      "text-xl shadow-none border w-12 h-12 bg-white/50 rounded-2xl"
    )}
    size="icon"
    variant="ghost"
  >
    <Link {...props}>{icons[props.icon as keyof typeof icons]}</Link>
  </Button>
);

export default Footer;
