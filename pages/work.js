import Layout from "../components/layout";
import { serverSideTranslations } from "next-i18next/pages/serverSideTranslations";
import { useTranslation } from "next-i18next/pages";

export default function Home() {
  const { t } = useTranslation();

  return (
    <Layout siteTitle={`3elm - ${t("navigation.work")}`}>
      <section>
        <h1 className="text-cohead px-6 py-10 text-fluid-xl">
          {t("work.title")}
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
