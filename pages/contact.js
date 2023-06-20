import Layout, { siteTitle } from "../components/layout";
import { motion as m, stagger, useAnimate, useInView } from "framer-motion";

import BirdIllustration from "../components/birdIllustration";
import ContactForm from "../components/contactForm";
import FishIllustrationContact from "../components/fishIllustration__contact";
import Head from "next/head";
import HeroContact from "../components/heroContact";
import PearIllustration from "../components/pearIllustration";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect } from "react";
import { useTranslation } from "next-i18next";

export default function Contact() {
  const { t } = useTranslation();

  const [scopeFirst, animateFirst] = useAnimate();
  const isInViewFirst = useInView(scopeFirst, { amount: 0.5, once: true });
  const [scopeSecond, animateSecond] = useAnimate();
  const isInViewSecond = useInView(scopeSecond, { amount: 0.5, once: true });
  const [scopeThird, animateThird] = useAnimate();
  const isInViewThird = useInView(scopeThird, { amount: 0.5, once: true });
  const [scopeFourth, animateFourth] = useAnimate();
  const isInViewFourth = useInView(scopeFourth, { amount: 0.5, once: true });

  useEffect(() => {
    animateFirst(
      ".stagger",
      isInViewFirst ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
      {
        duration: 1,
        transition: "all .7s cubic-bezier(.29,-1.08,.69,4)",
        delay: isInViewFirst ? stagger(0.3) : 0,
      }
    );
    animateSecond(
      ".stagger",
      isInViewSecond ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
      {
        duration: 1,
        transition: "all .7s cubic-bezier(.29,-1.08,.69,4)",
        delay: isInViewSecond ? stagger(0.3) : 0,
      }
    );
    animateThird(
      ".stagger",
      isInViewThird ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
      {
        duration: 1,
        transition: "all .7s cubic-bezier(.29,-1.08,.69,4)",
        delay: isInViewThird ? stagger(0.1) : 0,
      }
    );
    animateFourth(
      ".stagger",
      isInViewFourth ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
      {
        duration: 1,
        transition: "all .7s cubic-bezier(.29,-1.08,.69,4)",
        delay: isInViewFourth ? stagger(0.1) : 0,
      }
    );
  }, [isInViewFirst, isInViewSecond, isInViewThird, isInViewFourth]);

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="mb-40 flex flex-col gap-8 sm:mx-0 sm:mt-0 sm:flex-row">
        <m.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            duration: 2,
          }}
          className="text-cohead center flex flex-col gap-3 self-center border-y-16 border-y-brightorange py-2 text-center text-fluid-l font-bold md:w-[15ch]"
        >
          {t("contact.title")}
        </m.h1>
        <HeroContact className="-mt-8 h-full w-full sm:ltr:-mr-8 sm:rtl:-ml-8" />
      </section>
      <div className="grid grid-cols-1 gap-20 px-6 pb-40 sm:px-0 md:grid-cols-2">
        <section ref={scopeFirst} className="relative flex flex-col gap-4">
          <span className="stagger absolute bg-brightorange p-4">1</span>
          <h2 className="stagger text-center font-cohead text-fluid-m">
            {t("contact.enterprise headline")}
          </h2>
          <FishIllustrationContact className="stagger w-full" />
          <p className="stagger">{t("contact.enterprise text")}</p>
          <a
            href="mailto:kirolousibrahim@3elm.com"
            className="stagger mt-auto flex cursor-pointer items-center justify-center rounded-full bg-brightorange p-4 transition-all hover:-translate-y-2 active:translate-y-2 active:bg-darkorange"
          >
            {t("contact.enterprise button")}
          </a>
        </section>
        <section ref={scopeSecond} className="relative flex flex-col gap-4">
          <span className="stagger absolute bg-brightorange p-4">2</span>
          <h2 className="stagger text-center font-cohead text-fluid-m">
            {t("contact.support headline")}
          </h2>
          <PearIllustration className="stagger w-full" />
          <p className="stagger">{t("contact.support text 1")}</p>
          <p className="stagger">{t("contact.support text 2")}</p>
          <a
            href="https://www.patreon.com/3elm"
            target="_blank"
            className="stagger mt-auto flex cursor-pointer items-center justify-center rounded-full bg-brightorange p-4 transition-all hover:-translate-y-2 active:translate-y-2 active:bg-darkorange"
          >
            {t("contact.support button")}
          </a>
        </section>
        <section ref={scopeThird} className="relative flex flex-col gap-4">
          <span className="stagger absolute bg-brightorange p-4">3</span>
          <h2 className="stagger text-center font-cohead text-fluid-m">
            {t("contact.reach headline")}
          </h2>
          <BirdIllustration className="stagger w-full" />
          <p className="stagger">{t("contact.reach text")}</p>
        </section>
        <div ref={scopeFourth}>
          <section className="stagger border-image-perforation  bg-brightorange p-8">
            <ContactForm className="stagger flex h-full flex-col gap-4" />
          </section>
        </div>
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
