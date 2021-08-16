import { ClockIcon, UserGroupIcon, UsersIcon } from "@heroicons/react/outline";
import { useTranslation } from "next-i18next";

export default function HeaderInfo() {
  const { t } = useTranslation();
  return (
    <div className="pt-12 sm:pt-16">
      <div className="pb-4 sm:pb-8">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 " />
          <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <dl className="bg-gray-800 border-2 border-gray-700 rounded-lg shadow-lg sm:grid sm:grid-cols-3">
                <div className="flex flex-col p-6 text-center border-b border-gray-700 sm:border-0 sm:border-r">
                  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-100">{t`headerInfo.hours`}</dt>
                  <dd className="flex items-center justify-center order-1 text-5xl font-extrabold text-red-600">
                    <span className="w-12 mr-2">
                      <ClockIcon />
                    </span>
                    <span>48</span>
                  </dd>
                </div>
                <div className="flex flex-col p-6 text-center border-t border-b border-gray-700 sm:border-0 sm:border-l sm:border-r">
                  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-100">{t`headerInfo.teams`}</dt>
                  <dd className="flex items-center justify-center order-1 text-5xl font-extrabold text-red-600">
                    <span className="w-12 mr-2">
                      <UserGroupIcon />
                    </span>
                    <span>10</span>
                  </dd>
                </div>
                <div className="flex flex-col p-6 text-center border-t border-gray-700 sm:border-0 sm:border-l">
                  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-100">{t`headerInfo.teamMembers`}</dt>
                  <dd className="flex items-center justify-center order-1 text-5xl font-extrabold text-red-600">
                    <span className="w-12 mr-2">
                      <UsersIcon />
                    </span>
                    <span>5</span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
