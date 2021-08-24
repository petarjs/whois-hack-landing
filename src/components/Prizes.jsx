import { GiftIcon, SparklesIcon, StarIcon } from "@heroicons/react/outline";
import { useTranslation } from "next-i18next";

export default function Prizes() {
  const { t } = useTranslation();
  const prizes = [
    {
      id: 1,
      name: t`prizes.first`,
      value: 1500,
      icon: function first() {
        return <StarIcon className="w-6 h-6 text-white" />;
      },
    },
    {
      id: 2,
      name: t`prizes.second`,
      value: 700,
      icon: function second() {
        return (
          <div className="relative w-6 h-6">
            <StarIcon className="absolute w-5 h-5 text-white -left-2 -rotate-12" />
            <StarIcon className="absolute w-5 h-5 text-white -right-2 rotate-12" />
          </div>
        );
      },
    },
    {
      id: 3,
      name: t`prizes.third`,
      value: 300,
      icon: function third() {
        return (
          <div className="relative w-6 h-6">
            <StarIcon className="absolute w-4 h-4 text-white -translate-x-1/2 left-1/2 -top-1" />
            <StarIcon className="absolute w-4 h-4 text-white -left-1 -rotate-12 top-3" />
            <StarIcon className="absolute w-4 h-4 text-white -right-1 rotate-12 top-3" />
          </div>
        );
      },
    },
  ];

  return (
    <div className="px-4 py-4 mx-auto mt-12 max-w-7xl sm:px-6 lg:px-8">
      <h3 className="flex items-center space-x-2 text-2xl font-extrabold text-gray-100">
        <GiftIcon className="w-6 h-6 md:w-8 md:h-8" />
        <span>{t`prizes.title`}</span>
      </h3>

      <dl className="grid grid-cols-1 gap-5 mt-5 sm:grid-cols-2 lg:grid-cols-3">
        {prizes.map((item) => (
          <div
            key={item.id}
            className="relative px-4 pt-5 overflow-hidden bg-gray-800 border-2 border-gray-600 rounded-lg shadow sm:pt-6 sm:px-6"
          >
            <dt>
              <div className="absolute p-3 bg-green-500 rounded-md">
                <item.icon />
              </div>
              <p className="ml-16 text-sm font-medium text-gray-400 truncate">
                {item.name}
              </p>
            </dt>
            <dd className="flex items-baseline pb-6 ml-16 sm:pb-7">
              <p className="text-2xl font-semibold text-gray-100">
                €{item.value}
              </p>
            </dd>
          </div>
        ))}
      </dl>

      <div className="flex flex-col items-center justify-center w-full my-5 space-x-2 text-lg text-gray-100 sm:flex-row">
        <div>+ {t`prizes.rest`}</div>
        <div className="hidden w-5 md:block">
          <SparklesIcon />
        </div>
      </div>
    </div>
  );
}
