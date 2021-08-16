/* eslint-disable @next/next/no-img-element */
import { GlobeIcon } from "@heroicons/react/outline";
import { useTranslation } from "next-i18next";

export default function Organizers() {
  const { t } = useTranslation();

  return (
    <div className="">
      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:py-20 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <h2 className="flex items-center space-x-2 text-2xl font-extrabold text-gray-100">
              <GlobeIcon className="w-8 h-8" />
              <span>{t`organizers.title`}</span>
            </h2>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <div className="flex flex-col items-center justify-start space-y-8 md:space-y-0 md:space-x-8 md:flex-row">
              <a
                href="http://rnids.rs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img height="100px" src="/images/rnids.png" alt="RNIDS" />
              </a>
              <a
                href="http://quantox.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img width="140px" src="/images/quantox.png" alt="Quantox" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
