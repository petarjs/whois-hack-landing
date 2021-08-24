/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Trans, useTranslation } from "next-i18next";

import Footer from "src/components/Footer";
import { siteUrl } from "src/constants";

export default function Privacy() {
  const { t } = useTranslation("common", "cookies");

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
          <h1>{t`cookies:title`}</h1>
          <p>{t`cookies:p1`}</p>
          <p>{t`cookies:p2`}</p>
          <h2>{t`cookies:subtitle1`}</h2>
          <p>{t`cookies:p3`}</p>
          <p>{t`cookies:p4`}</p>
          <p>{t`cookies:p5`}</p>
          <p>{t`cookies:p6`}</p>
          <p>{t`cookies:p7`}</p>
          <h2>{t`cookies:subtitle2`}</h2>
          <p>
            <Trans key="p8">
              Како Гуглови сервиси користе колачиће:{" "}
              <a
                href="https://policies.google.com/technologies/cookies?hl=sr"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://policies.google.com/technologies/cookies?hl=sr
              </a>
            </Trans>
          </p>
          <p>
            <Trans key="p9">
              О колачићима уопштено, и како их искључити:
              <a
                href="http://www.allaboutcookies.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                http://www.allaboutcookies.org/
              </a>
            </Trans>
          </p>
          <h2>{t`cookies:subtitle3`}</h2>
          <p>{t`cookies:p10`}</p>
          <h3>{t`cookies:subsubtitle1`}</h3>
          <p>{t`cookies:p11`}</p>
          <p>{t`cookies:p12`}</p>
          <h2>{t`cookies:subtitle4`}</h2>
          <p>
            <Trans key="p13">
              Како Гугл аналитика користи колачиће:
              <a
                href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage
              </a>
            </Trans>
          </p>
          <p>
            <Trans key="p14">
              Помоћни програм Гугл аналитике који искључује колачиће:
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://tools.google.com/dlpage/gaoptout
              </a>
            </Trans>
          </p>
          <h3>{t`cookies:subsubtitle2`}</h3>
          <p>{t`cookies:p15`}</p>
          <p>{t`cookies:p16`}</p>
          <p>{t`cookies:p17`}</p>
          <h2>{t`cookies:subtitle5`}</h2>
          <p>
            <Trans key="p18">
              Како Фејсбук користи колачиће:
              <a
                href="https://www.facebook.com/policies/cookies/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.facebook.com/policies/cookies/
              </a>
            </Trans>
          </p>
          <p>
            <Trans key="p19">
              Подешавање приказа Фејсбук огласа:
              <a
                href="https://www.facebook.com/ads/preferences/?entry_product=ad_settings_screen"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.facebook.com/ads/preferences/?entry_product=ad_settings_screen
              </a>
            </Trans>
          </p>
          <p>
            <Trans key="p20">
              Алијанса за дигитално оглашавање, искључивање и савети:
              <a
                href="http://optout.aboutads.info"
                target="_blank"
                rel="noopener noreferrer"
              >
                http://optout.aboutads.info
              </a>
            </Trans>
          </p>
          <h3>{t`cookies:subsubtitle3`}</h3>
          <p>{t`cookies:p21`}</p>
          <p>{t`cookies:p22`}</p>
          <h2>{t`cookies:subtitle6`}</h2>
          <p>{t`cookies:p23`}</p>
          <p>{t`cookies:p24`}</p>
          <h2>{t`cookies:subtitle7`}</h2>
          <p>
            <Trans key="p25">
              Управљање осталим подацима о личности које РНИДС сакупља и
              обрађује, регулисано је нашом Политиком приватности коју можете
              прочитати на следећој адреси:
              <a
                href="https://www.rnids.rs/импресум/политика-приватности"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.rnids.rs/импресум/политика-приватности
              </a>
              .
            </Trans>
          </p>
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
      ...(await serverSideTranslations(locale, ["common", "cookies"])),
    },
  };
}
