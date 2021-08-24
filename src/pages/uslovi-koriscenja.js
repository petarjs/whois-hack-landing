/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Footer from "src/components/Footer";
import { Trans, useTranslation } from "next-i18next";
import { siteUrl } from "src/constants";

export default function Terms() {
  const { t } = useTranslation("common", "terms");

  return (
    <>
      <Head>
        <title>{t`pageTitle`}</title>
        <meta name="title" content={t`pageTitle`} />
        <meta name="description" content={t`pageDescription`} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content={t`pageTitle`} />
        <meta property="og:description" content={t`pageDescription`} />
        <meta property="og:image" content="/images/share.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={siteUrl} />
        <meta property="twitter:title" content={t`pageTitle`} />
        <meta property="twitter:description" content={t`pageDescription`} />
        <meta property="twitter:image" content="/images/share.png" />
      </Head>

      <div className="px-4 py-16 mx-auto text-gray-300 max-w-7xl sm:px-6 lg:py-20 lg:px-8">
        <div className="max-w-[200px] mb-6">
          <img src="/images/symbol.svg" alt="" width="563px" height="241px" />
        </div>
        <div className="support-page">
          <h1>{t`terms:title`}</h1>
          <p>{t`terms:p1`}</p>
          <p>{t`terms:p2`}</p>
          <p>{t`terms:p3`}</p>
          <p>{t`terms:p4`}</p>
          <p>{t`terms:p5`}</p>

          <p>
            <Trans key="p3">
              Ауторска права над овим сајтом и у вези садржаја овог сајта су
              заштићена под условима лиценце
              <a
                href="https://creativecommons.org/licenses/by/3.0/deed.sr"
                target="_blank"
                rel="noopener noreferrer"
              >
                Creative Commons Ауторство 3.0 Србија
              </a>
              .
            </Trans>
          </p>

          <ul className="list-disc">
            <li>{t`terms:li1`}</li>
            <li>{t`terms:li2`}</li>
            <li>{t`terms:li3`}</li>
          </ul>

          <p>{t`terms:p6`}</p>
        </div>

        <div className="mt-12">
          <Footer />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ locale = "sr-Cyrl" }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "terms"])),
    },
  };
}
