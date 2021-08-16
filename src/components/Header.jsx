/* This example requires Tailwind CSS v2.0+ */
import {
  ChevronDoubleRightIcon,
  ClockIcon,
  SwitchHorizontalIcon,
} from "@heroicons/react/outline";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <header className="relative flex flex-col items-center justify-center h-screen ">
      <Link
        passHref
        href="/"
        locale={router.locale === "sr-Cyrl" ? "sr-Latn" : "sr-Cyrl"}
      >
        <a className="absolute z-10 flex items-center space-x-2 text-xl text-red-500 top-3 right-3">
          <SwitchHorizontalIcon className="w-5 h-5" />
          <span>{t("change-locale")}</span>
        </a>
      </Link>
      <div className="absolute inset-0 overflow-hidden">
        <Image
          className="object-cover w-full h-full"
          src="/images/bg2.png"
          layout="fill"
          alt=""
        />
        <div
          className="absolute inset-0 bg-gray-800 mix-blend-color"
          aria-hidden="true"
        />
      </div>
      <div className="relative text-center">
        <div className="max-w-[400px] md:max-w-full mb-6 mx-auto">
          <Image src="/images/symbol.svg" alt="" width="563px" height="241px" />
        </div>

        <div className="max-w-[320px] md:max-w-full mb-1 md:mb-2 overflow-hidden mx-auto">
          <Image src="/images/whois.svg" alt="" width="563px" height="91px" />
        </div>

        <div className="flex items-center justify-center mb-6 space-x-2 text-2xl font-bold tracking-wide text-white">
          <ClockIcon className="w-5 h-5" />
          <span>{t`header.date`}</span>
        </div>

        <a
          href="https://forms.gle/6bmAUJgKp9ztHu8T6"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 mt-4 text-base font-bold tracking-wide text-white uppercase bg-red-600 border border-transparent rounded-lg shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          {t`header.cta`}
          <ChevronDoubleRightIcon className="w-5 h-5 ml-1 animate-ping" />
        </a>
      </div>
    </header>
  );
}
