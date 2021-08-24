import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Footer from "src/components/Footer";
import { Trans, useTranslation } from "next-i18next";
import { siteUrl } from "src/constants";
import Image from "next/image";

export default function Cookies() {
  const { t } = useTranslation("common", "privacy");

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
          <Image src="/images/symbol.svg" alt="" width="563px" height="241px" />
        </div>
        <div className="support-page">
          <h1>{t`privacy:title`}</h1>
          <h2>{t`privacy:subtitle1`}</h2>
          <p>{t`privacy:p1`}</p>
          <p>{t`privacy:p2`}</p>
          <p>{t`privacy:p3`}</p>
          <ul>
            <li>{t`privacy:li1`}</li>
            <li>{t`privacy:li2`}</li>
            <li>{t`privacy:li3`}</li>
            <li>{t`privacy:li4`}</li>
          </ul>
          <p>{t`privacy:p4`}</p>
          <ul>
            <li>{t`privacy:li5`}</li>
            <li>{t`privacy:li6`}</li>
            <li>{t`privacy:li7`}</li>
          </ul>
          <p>{t`privacy:p5`}</p>
          <p>{t`privacy:p6`}</p>
          <p>{t`privacy:p7`}</p>
          <p>{t`privacy:p8`}</p>
          <h2>{t`privacy:subtitle2`}</h2>
          <p>{t`privacy:p9`}</p>
          <p>{t`privacy:p10`}</p>
          <h2>{t`privacy:subtitle3`}</h2>
          <p>{t`privacy:p11`}</p>
          <h2>{t`privacy:subtitle4`}</h2>
          <p>{t`privacy:p12`}</p>
          <h2>{t`privacy:subtitle5`}</h2>
          <p>{t`privacy:p13`}</p>
          <h2>{t`privacy:subtitle6`}</h2>
          <p>{t`privacy:p14`}</p>
          <h2>{t`privacy:subtitle7`}</h2>
          <p>{t`privacy:p15`}</p>
          <h2>{t`privacy:subtitle8`}</h2>
          <p>{t`privacy:p16`}</p>
          <h2>{t`privacy:subtitle9`}</h2>
          <p>{t`privacy:p17`}</p>
          <h2>{t`privacy:subtitle10`}</h2>
          <p>{t`privacy:p18`}</p>
          <h2>{t`privacy:subtitle11`}</h2>
          <p>{t`privacy:p19`}</p>
          <h2>{t`privacy:subtitle12`}</h2>
          <p>{t`privacy:p20`}</p>
          <h2>{t`privacy:subtitle13`}</h2>
          <p>{t`privacy:p21`}</p>
          <p>{t`privacy:p22`}</p>
          <h2>{t`privacy:subtitle14`}</h2>
          <p>{t`privacy:p23`}</p>
          <h2>{t`privacy:subtitle15`}</h2>
          <p>
            <Trans key="privacy:p24">
              РНИДС задржава право да измени ову Политику приватности. РНИДС ће
              све промене ове Политике приватности објавити на свом сајту на
              адреси{" "}
              <a
                href="https://rnids.rs"
                target="_blank"
                rel="noopener noreferrer"
              >
                rnids.rs
              </a>{" "}
              /{" "}
              <a
                href="https://рнидс.срб"
                target="_blank"
                rel="noopener noreferrer"
              >
                рнидс.срб
              </a>
              .
            </Trans>
          </p>
          <h2>{t`privacy:subtitle16`}</h2>
          <p>
            <Trans key="privacy:p25">
              Да бисте изменили своје податке, исправили их или избрисали, или
              ако имате нека друга питања у вези са овом Политиком приватности,
              можете нас контактирати путем адресе е-поште:{" "}
              <a
                href="mailto:privacy@rnids.rs"
                target="_blank"
                rel="noopener noreferrer"
              >
                privacy@rnids.rs
              </a>
            </Trans>
          </p>

          <ul className="list-disc">
            <li>{t`privacy:li1`}</li>
            <li>{t`privacy:li2`}</li>
            <li>{t`privacy:li3`}</li>
          </ul>

          <p>{t`privacy:p6`}</p>
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
      ...(await serverSideTranslations(locale, ["common", "privacy"])),
    },
  };
}
