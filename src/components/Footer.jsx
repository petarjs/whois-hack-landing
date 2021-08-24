/* eslint-disable @next/next/no-img-element */

import { CheckCircleIcon } from "@heroicons/react/outline";
import { useTranslation } from "next-i18next";
import Link from "next/link";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="">
      <div className="px-4 pt-4 pb-2 mx-auto border-t border-gray-700 max-w-7xl lg:pt-8 lg:px-8">
        <p className="text-base text-center text-gray-400">
          &copy; {new Date().getFullYear()}. {t`footer.copyright`}
        </p>
      </div>
      <div className="px-4 pb-4 mx-auto max-w-7xl lg:pb-8 lg:px-8">
        <p className="flex flex-col items-center justify-center text-base text-center text-gray-400 md:flex-row">
          <Link
            href="/politika-privatnosti"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-1 md:mb-0 md:mr-1"
          >{t`footer.privacy`}</Link>{" "}
          <span className="hidden mx-2 md:inline">|</span>
          <Link
            href="/uslovi-koriscenja"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-1 md:mb-0 md:mr-1"
          >{t`footer.terms`}</Link>{" "}
          <span className="hidden mx-2 md:inline">|</span>
          <Link
            href="/politika-kolacica"
            target="_blank"
            rel="noopener noreferrer"
          >{t`footer.cookies`}</Link>
        </p>
      </div>
    </footer>
  );
}
