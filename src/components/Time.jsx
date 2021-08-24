import { ClockIcon, UserGroupIcon, UsersIcon } from "@heroicons/react/outline";
import { useTranslation } from "next-i18next";
import Countdown from "react-countdown";

const date = new Date("2021-09-25T09:00:00.000Z");

export default function Time() {
  const { t } = useTranslation();

  return (
    <Countdown
      date={date.valueOf()}
      renderer={({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
          return (
            <div className="pb-12 sm:pb-16">
              <div className="relative">
                <div className="absolute inset-0 h-1/2 " />
                <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                  <div className="max-w-lg mx-auto">
                    <dl className="grid grid-cols-4 bg-gray-800 border-2 border-gray-700 rounded-lg shadow-lg">
                      <div className="flex flex-col p-3 text-center border border-b border-r border-gray-700 md:p-6">
                        <dt className="order-2 mt-2 font-medium leading-6 text-gray-100 sm:text-lg">{t`time.days`}</dt>
                        <dd className="flex items-center justify-center order-1 text-4xl font-extrabold text-red-600 md:text-5xl">
                          <span>0</span>
                        </dd>
                      </div>
                      <div className="flex flex-col p-3 text-center border-t border-b border-l border-r border-gray-700 md:p-6">
                        <dt className="order-2 mt-2 font-medium leading-6 text-gray-100 sm:text-lg">{t`time.minutes`}</dt>
                        <dd className="flex items-center justify-center order-1 text-4xl font-extrabold text-red-600 md:text-5xl">
                          <span>0</span>
                        </dd>
                      </div>
                      <div className="flex flex-col p-3 text-center border-t border-b border-l border-r border-gray-700 md:p-6">
                        <dt className="order-2 mt-2 font-medium leading-6 text-gray-100 sm:text-lg">{t`time.minutes`}</dt>
                        <dd className="flex items-center justify-center order-1 text-4xl font-extrabold text-red-600 md:text-5xl">
                          <span>0</span>
                        </dd>
                      </div>
                      <div className="flex flex-col p-3 text-center border-t border-l border-gray-700 md:p-6">
                        <dt className="order-2 mt-2 font-medium leading-6 text-gray-100 sm:text-lg">{t`time.seconds`}</dt>
                        <dd className="flex items-center justify-center order-1 text-4xl font-extrabold text-red-600 md:text-5xl">
                          <span>0</span>
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          );
        } else {
          // Render a countdown
          return (
            <div className="pb-12 sm:pb-16">
              <div className="relative">
                <div className="absolute inset-0 h-1/2 " />
                <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                  <div className="max-w-lg mx-auto">
                    <dl className="grid grid-cols-4 bg-gray-800 border-2 border-gray-700 rounded-lg shadow-lg">
                      <div className="flex flex-col p-3 text-center border border-b border-r border-gray-700 md:p-6">
                        <dt className="order-2 mt-2 font-medium leading-6 text-gray-100 sm:text-lg">{t`time.days`}</dt>
                        <dd className="flex items-center justify-center order-1 text-4xl font-extrabold text-red-600 md:text-5xl">
                          <span>{days}</span>
                        </dd>
                      </div>
                      <div className="flex flex-col p-3 text-center border-t border-b border-l border-r border-gray-700 md:p-6">
                        <dt className="order-2 mt-2 font-medium leading-6 text-gray-100 sm:text-lg">{t`time.minutes`}</dt>
                        <dd className="flex items-center justify-center order-1 text-4xl font-extrabold text-red-600 md:text-5xl">
                          <span>{hours}</span>
                        </dd>
                      </div>
                      <div className="flex flex-col p-3 text-center border-t border-b border-l border-r border-gray-700 md:p-6">
                        <dt className="order-2 mt-2 font-medium leading-6 text-gray-100 sm:text-lg">{t`time.minutes`}</dt>
                        <dd className="flex items-center justify-center order-1 text-4xl font-extrabold text-red-600 md:text-5xl">
                          <span>{minutes}</span>
                        </dd>
                      </div>
                      <div className="flex flex-col p-3 text-center border-t border-l border-gray-700 md:p-6">
                        <dt className="order-2 mt-2 font-medium leading-6 text-gray-100 sm:text-lg">{t`time.seconds`}</dt>
                        <dd className="flex items-center justify-center order-1 text-4xl font-extrabold text-red-600 md:text-5xl">
                          <span>{seconds}</span>
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      }}
    />
  );
}
