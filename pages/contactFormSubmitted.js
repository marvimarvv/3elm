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
      <h1 className="font-cohead text-fluid-xl">
        Thank you for your submission!
      </h1>
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
