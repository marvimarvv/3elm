import Layout, { siteTitle } from "../components/layout";

import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function ContactFormSubmitted() {
  const { t } = useTranslation();

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="px-6 pb-40 sm:px-0">
        <h1 className="text-cohead text-fluid-xl">
          {/* {t("imprint.title")} */} Congrats!
        </h1>
      </section>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
