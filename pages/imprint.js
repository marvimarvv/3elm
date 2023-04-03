import Layout, { siteTitle } from "../components/layout";

import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function Imprint() {
  const { t } = useTranslation();

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <h1 className="text-cohead text-fluid-xl">{t("imprint.title")}</h1>
        <p className="text-fluid-s">{t("imprint.paragraph 1")}</p>
        <p className="text-fluid-s">{t("imprint.paragraph 2")}</p>
        <p className="text-fluid-s">{t("imprint.paragraph 3")}</p>
        <p className="text-fluid-s">{t("imprint.paragraph 4")}</p>
        <p className="text-fluid-s">{t("imprint.paragraph 5")}</p>
        <p className="text-fluid-s">{t("imprint.paragraph 6")}</p>
        <p className="text-fluid-s mb-8">{t("imprint.paragraph 7")}</p>
        <h2 className="text-cohead text-fluid-l">
          {t("imprint.contact title")}
        </h2>
        <p className="text-fluid-s">{t("imprint.contact paragraph 1")}</p>
        <p className="text-fluid-s">{t("imprint.contact paragraph 2")}</p>
        <p className="text-fluid-s">{t("imprint.contact paragraph 3")}</p>
        <p className="text-fluid-s">{t("imprint.contact paragraph 4")}</p>
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
