/* eslint-disable @next/next/no-img-element */

import { CheckCircleIcon } from "@heroicons/react/outline";
import { useTranslation } from "next-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="">
      <div className="px-4 py-4 mx-auto border-t border-gray-700 max-w-7xl lg:py-8 lg:px-8">
        <p className="text-base text-center text-gray-400">
          &copy; {new Date().getFullYear()}. {t`footer.copyright`}
        </p>
      </div>
    </footer>
  );
}
