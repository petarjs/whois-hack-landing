/* eslint-disable @next/next/no-img-element */
import {
  CodeIcon,
  LightningBoltIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import { useTranslation } from "next-i18next";

export default function GeneralInfo() {
  const { t } = useTranslation();

  const supportLinks = [
    {
      name: t`generalInfo.competition`,
      description: t`generalInfo.competitionText`,
      icon: LightningBoltIcon,
    },
    {
      name: t`generalInfo.teams`,
      description: t`generalInfo.teamsText`,
      icon: UserGroupIcon,
    },
    {
      name: t`generalInfo.tech`,
      description: t`generalInfo.techText`,
      icon: CodeIcon,
    },
  ];

  return (
    <div className="relative">
      <div className="relative pb-32">
        <div className="absolute top-0 bottom-0 right-0 hidden overflow-hidden opacity-70 md:block left-[40%]">
          <img
            className="object-contain w-full h-full"
            src="/images/world.svg"
            alt=""
          />
        </div>

        <div className="block p-4 overflow-hidden md:hidden">
          <img
            className="object-contain w-full h-full"
            src="/images/world.svg"
            height="100px"
            width="220px"
            alt=""
          />
        </div>

        <div className="relative px-4 py-24 pt-4 mx-auto max-w-7xl sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
            {t`generalInfo.title`}
          </h1>
          <p className="max-w-xl mt-6 text-xl text-gray-300">
            {t`generalInfo.subtitle`}
          </p>
        </div>
      </div>

      <section
        className="relative z-10 px-4 pb-0 mx-auto -mt-32 max-w-7xl sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          {supportLinks.map((link) => (
            <div
              key={link.name}
              className="flex flex-col bg-gray-800 border-2 border-gray-700 shadow-xl rounded-2xl"
            >
              <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
                <div className="absolute top-0 inline-block p-5 transform -translate-y-1/2 bg-green-500 shadow-lg rounded-xl">
                  <link.icon
                    className="w-6 h-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-xl font-medium text-gray-100">
                  {link.name}
                </h3>
                <p className="mt-4 text-base text-gray-300">
                  {link.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
