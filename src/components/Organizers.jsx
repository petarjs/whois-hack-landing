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
            <h2 className="flex items-center space-x-2 text-xl font-extrabold text-gray-100 md:text-2xl">
              <GlobeIcon className="w-6 h-6 md:w-8 md:h-8" />
              <span>{t`organizers.title`}</span>
            </h2>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <div className="flex flex-col items-center justify-start space-y-8 md:space-y-0 md:space-x-8 md:flex-row">
              <a
                href="https://rnids.rs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img height="100px" src="/images/rnids.png" alt="RNIDS" />
              </a>
              <a
                href="https://quantox.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img width="140px" src="/images/quantox.png" alt="Quantox" />
              </a>
              <a
                href="https://icann.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img width="140px" src="/images/icann.png" alt="ICANN" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
