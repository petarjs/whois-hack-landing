import {
  AcademicCapIcon,
  ClipboardListIcon,
  ClockIcon,
  CodeIcon,
  InformationCircleIcon,
  LightBulbIcon,
  LightningBoltIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import { useTranslation } from "next-i18next";

export default function FAQ() {
  const { t } = useTranslation();

  const faqs = [
    {
      icon: LightningBoltIcon,
      question: t`faq.faq1`,
      answer: t`faq.faq1text`,
    },
    {
      icon: UserGroupIcon,
      question: t`faq.faq2`,
      answer: t`faq.faq2text`,
    },
    {
      icon: LightBulbIcon,
      question: t`faq.faq3`,
      answer: t`faq.faq3text`,
    },
    {
      icon: CodeIcon,
      question: t`faq.faq4`,
      answer: t`faq.faq4text`,
    },
    {
      icon: ClipboardListIcon,
      question: t`faq.faq5`,
      answer: t`faq.faq5text`,
    },
    {
      icon: AcademicCapIcon,
      question: t`faq.faq6`,
      answer: t`faq.faq6text`,
    },
    {
      icon: ClockIcon,
      question: t`faq.faq7`,
      answer: t`faq.faq7text`,
    },
  ];

  return (
    <div className="">
      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:py-20 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <h2 className="flex items-center space-x-2 text-xl font-extrabold text-gray-100 md:text-2xl">
              <InformationCircleIcon className="w-6 h-6 md:w-8 md:h-8" />
              <span>{t`faq.title`}</span>
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              {t`faq.desc1`}{" "}
              <a
                href="#"
                className="font-medium text-red-600 hover:text-red-500"
              >
                {t`faq.desc2`}
              </a>
              .
            </p>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <dl className="space-y-12">
              {faqs.map((faq) => (
                <div key={faq.question} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center w-12 h-12 text-white bg-green-500 rounded-md">
                      <faq.icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg font-medium leading-6 text-gray-100">
                      {faq.question}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-400">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
