import Layout from "../components/layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <Layout siteTitle={`3elm - ${t("navigation.work")}`}>
      <section>
        <h1 className="text-cohead text-fluid-xl">{t("work.title")}</h1>
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
