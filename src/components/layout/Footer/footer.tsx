import Link from "next/link";
import Image from "next/image";
import {
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
} from "../Header/socialIcons";
import { PhoneIcon, MailIcon } from "lucide-react";
import { getBranchDetail } from "@/src/graphql/queries/auth";

const Footer = async () => {
  const { branchDetail } = await getBranchDetail();
  const { email, phoneNumber, address, coordinate } = branchDetail || {};

  return (
    <footer className="bg-[#ED3237] text-white rounded-3xl px-6 py-10 mt-16 mb-16 mx-auto max-w-[1400px]">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">APU DAIRY</h2>
          <p className="text-sm leading-relaxed">
            Монгол улс, Улаанбаатар хот, Хан-Уул дүүрэг, 1-р хороо
            <br />
            Чингисийн өргөн чөлөө 33/5, Үйлдвэр 10/17042
          </p>
        </div>

        <div className="flex justify-center md:justify-start items-start">
          <Image
            src="/images/image.svg"
            alt="footer plant"
            width={60}
            height={60}
          />
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold uppercase mb-2">Танилцуулга</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link href="/aboutheader">Бидний тухай</Link>
            </li>
            <li>
              <Link href="/products">Бүтээгдэхүүн</Link>
            </li>
            <li>
              <Link href="/sustainability">Тогтвортой хөгжил</Link>
            </li>
            <li>
              <Link href="/milk">Сүү бэлтгэл</Link>
            </li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold uppercase mb-2">Мэдээ мэдээлэл</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link href="/human">Хүний нөөц</Link>
            </li>
            <li>
              <Link href="/news">Мэдээлэл</Link>
            </li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold uppercase mb-2">Бидэнтэй холбогдох</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start">
              <PhoneIcon className="w-4 h-4 mt-1 mr-2" />
              <span>{phoneNumber || "+976 7600-6660"}</span>
            </li>
            <li className="flex items-start">
              <PhoneIcon className="w-4 h-4 mt-1 mr-2" />
              <span>+976 7676-2222</span>
            </li>
            <li className="flex items-start">
              <MailIcon className="w-4 h-4 mt-1 mr-2" />
              <span>{email || "info@apudairy.com"}</span>
            </li>
            <li className="flex items-start">
              <MailIcon className="w-4 h-4 mt-1 mr-2" />
              <span>sales@apudairy.mn</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Босоо зураас ба доод footer */}
      <div className="border-t border-white mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <p>© 2025 Made by erxes</p>
        <div className="flex gap-4">
          {InstagramIcon}
          {FacebookIcon}
          {YoutubeIcon}
        </div>
      </div>
    </footer>
  );
};
export default Footer;
