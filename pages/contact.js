import Layout, { siteTitle } from "../components/layout";

import BirdIllustration from "../components/birdIllustration";
import ContactForm from "../components/contactForm";
import Eye from "../components/eye";
import FishIllustrationContact from "../components/fishIllustration__contact";
import Head from "next/head";
import HeroContact from "../components/heroContact";
import PearIllustration from "../components/pearIllustration";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
        <form name="contact" netlify netlify-honeypot="bot-field" hidden>
          <input type="text" name="fullname" />
          <input type="email" name="emailaddress" />
          <textarea name="message"></textarea>
        </form>
      </Head>
      {/* <section className="mb-40 flex flex-col gap-8 sm:mx-0 sm:mt-0 sm:flex-row">
        <h1 className="text-cohead center flex flex-col gap-3 self-center border-y-16 border-y-brightorange py-2 text-center text-fluid-l font-bold md:w-[15ch]">
          {t("contact.title")}
        </h1>
        <HeroContact className="-mt-8 h-full w-full sm:ltr:-mr-8 sm:rtl:-ml-8" />
      </section> */}
      <Eye />
      <h1 className="font-cohead text-fluid-xl">Coming soon...</h1>
      <div className="grid grid-cols-1 gap-20 px-6 pb-40 sm:px-0 md:grid-cols-2">
        {/* <section className="relative flex flex-col gap-4">
          <span className="absolute bg-brightorange p-4">1</span>
          <h2 className="text-center font-cohead text-fluid-m">
            {t("contact.enterprise headline")}
          </h2>
          <FishIllustrationContact className="w-full" />
          <p>{t("contact.enterprise text")}</p>
          <a
            href="mailto:kirolousibrahim@3elm.com"
            className="mt-auto flex cursor-pointer items-center justify-center rounded-full bg-brightorange p-4 transition-all hover:-translate-y-2 active:translate-y-2 active:bg-darkorange"
          >
            {t("contact.enterprise button")}
          </a>
        </section>
        <section className="relative flex flex-col gap-4">
          <span className="absolute bg-brightorange p-4">2</span>
          <h2 className="text-center font-cohead text-fluid-m">
            {t("contact.support headline")}
          </h2>
          <PearIllustration className="w-full" />
          <p>{t("contact.support text 1")}</p>
          <p>{t("contact.support text 2")}</p>
          <a
            href="https://www.patreon.com/3elm"
            target="_blank"
            className="mt-auto flex cursor-pointer items-center justify-center rounded-full bg-brightorange p-4 transition-all hover:-translate-y-2 active:translate-y-2 active:bg-darkorange"
          >
            {t("contact.support button")}
          </a>
        </section>
        <section className="relative flex flex-col gap-4">
          <span className="absolute bg-brightorange p-4">3</span>
          <h2 className="text-center font-cohead text-fluid-m">
            {t("contact.reach headline")}
          </h2>
          <BirdIllustration className="w-full" />
          <p>{t("contact.reach text")}</p>
        </section> */}
        <section className="border-image-perforation  bg-brightorange p-8">
          <ContactForm className="flex h-full flex-col gap-4" />
        </section>
      </div>
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
