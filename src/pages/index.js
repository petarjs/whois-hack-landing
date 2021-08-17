import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import FAQ from "src/components/FAQ";
import Footer from "src/components/Footer";
import GeneralInfo from "src/components/GeneralInfo";
import Header from "src/components/Header";
import HeaderInfo from "src/components/HeaderInfo";
import Time from "src/components/Time";
import { useTranslation } from "next-i18next";
import Prizes from "src/components/Prizes";
import Organizers from "src/components/Organizers";

const siteUrl = "https://whoishack.io";

export default function Home() {
  const { t } = useTranslation("common");

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

      <Header />
      <div className="relative">
        <div className="absolute top-0 w-full h-48 -mt-32 bg-gradient-to-b from-[#020d1b00] via-[#020d1b] to-[#111927]" />
      </div>
      <HeaderInfo />
      <Time />
      <GeneralInfo />
      <Prizes />
      <FAQ />
      <Organizers />
      <Footer />
    </>
  );
}

export async function getStaticProps({ locale = "sr-Cyrl" }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
