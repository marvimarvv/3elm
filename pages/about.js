import Layout, { siteTitle } from "../components/layout";

import CircleScrollAnimation from "../components/circleScrollAnimation";
import CurvedText from "../components/curvedText";
import Gif from "../public/images/ARABIC.gif";
import Head from "next/head";
import Image from "next/image";
import StoryIllustration from "../components/storyIllustration";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="mb-40 px-6 pt-6 sm:px-0 sm:pt-0">
        <h1 className=" mb-7">
          <span className="text-fluid-s block font-cohead">
            {t("about.title top")}
          </span>
          <span className="font-cohead text-fluid-l">
            {t("about.title bottom")}
          </span>
        </h1>
        <Image
          unoptimized={true}
          src={Gif}
          alt="Arabic letters moving up and down"
          className="rtl:gif-shape-outside-rtl ltr:gif-shape-outside-ltr rtl:mirror w-8/12 ltr:float-right rtl:relative rtl:-z-10 rtl:float-left md:w-5/12 ltr:md:-mr-8 rtl:md:-ml-8"
        />
        <p className="text-cohead text-fluid-s mb-7 leading-7">
          {t("about.paragraph 1")}
        </p>
        <p className="font-cohead text-fluid-m">{t("about.paragraph 2")}</p>
      </section>
      <CircleScrollAnimation className="relative mb-40 grid h-screen place-items-center overflow-y-clip md:-mx-8" />
      <section className="border-image-perforation mb-40 grid grid-cols-1 gap-10 bg-brightorange px-[2vh] py-16 sm:-mx-8 md:grid-cols-3">
        <div class="md:col-span-2 md:pl-6">
          <h2 className="mb-2 font-cohead text-fluid-l font-bold">
            {t("about.story title")}
          </h2>
          <p className="text-fluid-s max-w-[60ch]">{t("about.story text")}</p>
        </div>
        <StoryIllustration className="h-full w-full" />
      </section>
      <section className="mb-40 px-6 sm:px-0">
        <h2 className="mb-2 font-cohead text-fluid-xl font-bold text-green">
          {t("about.how title")}
          <span className="text-cyan ltr:ml-3 rtl:mr-3">
            {t("about.how title question mark 1")}
          </span>
          <span className="align-text-top text-fluid-l text-cyan">
            {t("about.how title question mark 2")}
          </span>
        </h2>
        <p className="text-fluid-s mb-6">{t("about.how text 1")}</p>
        <p className="mb-6 font-cohead text-fluid-m font-bold">
          {t("about.how text 2")}
        </p>
        <a className="flex cursor-pointer items-center justify-center rounded-full bg-brightorange p-4 transition-all hover:-translate-y-2 active:translate-y-2 active:bg-darkorange md:inline-flex">
          {t("about.how button")}
        </a>
      </section>
      <section className="px-6 pb-40 text-center sm:px-0">
        <h2 className="mb-6 inline-flex flex-col text-center font-cohead text-fluid-l">
          <CurvedText className="text-green" text="red" />
          <div className="flex justify-between px-2">
            <div className="h-2 w-2 rounded-full bg-orange"></div>
            <div className="h-2 w-2 rounded-full bg-orange"></div>
          </div>
          <span className="text-cyan">{t("about.brains title 2")}</span>
        </h2>
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
