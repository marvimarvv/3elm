import { stagger, useAnimate, useInView } from "framer-motion";

import AbdelRhman from "../components/abdelrhman";
import AbdelRhmanBack from "../components/abdelrhmanBack";
import Amr from "../components/amr";
import AmrBack from "../components/amrBack";
import CircleScrollAnimation from "../components/circleScrollAnimation";
import CurvedText from "../components/curvedText";
import Esraa from "../components/esraa";
import EsraaBack from "../components/esraaBack";
import Gif from "../public/images/star.gif";
import Heba from "../components/heba";
import HebaBack from "../components/hebaBack";
import Hesahm from "../components/hesahm";
import HesahmBack from "../components/hesahmBack";
import Image from "next/image";
import Kay from "../components/kay";
import KayBack from "../components/kayBack";
import Kiro from "../components/kiro";
import KiroBack from "../components/kiroBack";
import Layout from "../components/layout";
import Mahmoud from "../components/mahmoud";
import MahmoudBack from "../components/mahmoudBack";
import Marvin from "../components/marvin";
import MarvinBack from "../components/marvinBack";
import Nadia from "../components/nadia";
import NadiaBack from "../components/nadiaBack";
import StoryIllustration from "../components/storyIllustration";
import Toka from "../components/toka";
import TokaBack from "../components/tokaBack";
import Zaid from "../components/zaid";
import ZaidBack from "../components/zaidBack";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect } from "react";
import { useTranslation } from "next-i18next";

export default function About() {
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
      isInViewFirst ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 },
      {
        duration: 1,
        transition: "all .7s cubic-bezier(.29,-1.08,.69,4)",
        delay: isInViewFirst ? stagger(0.3) : 0,
      }
    );
    animateSecond(
      ".stagger",
      isInViewSecond
        ? { opacity: 1, scale: 1, x: 0 }
        : { opacity: 0, scale: 0.8, x: -40 },
      {
        duration: 1,
        transition: "all .7s cubic-bezier(.29,-1.08,.69,4)",
        delay: isInViewSecond ? stagger(0.3) : 0,
      }
    );
    animateThird(
      ".stagger",
      isInViewThird ? { opacity: 1, y: -20 } : { opacity: 0, y: 0 },
      {
        duration: 1,
        transition: "all .7s cubic-bezier(.29,-1.08,.69,4)",
        delay: isInViewThird ? stagger(0.1) : 0,
      }
    );
    animateFourth(
      ".stagger",
      isInViewFourth ? { opacity: 1, y: -20 } : { opacity: 0, y: 0 },
      {
        duration: 1,
        transition: "all .7s cubic-bezier(.29,-1.08,.69,4)",
        delay: isInViewFourth ? stagger(0.1) : 0,
      }
    );
  }, [isInViewFirst, isInViewSecond, isInViewThird, isInViewFourth]);

  return (
    <Layout siteTitle={`3elm - ${t("navigation.about")}`}>
      <section ref={scopeFirst} className="mb-40 px-6 pt-6 sm:px-0 sm:pt-0">
        <h1 className="stagger mb-7 leading-snug opacity-0">
          <span className="block font-cohead text-fluid-s font-bold tracking-[0.17em]">
            {t("about.title top")}
          </span>
          <span className=" font-cohead text-fluid-l">
            {t("about.title bottom")}
          </span>
        </h1>
        <Image
          unoptimized={true}
          src={Gif}
          alt="Arabic letters moving up and down"
          className="gif-shape-outside-ltr float-right w-8/12 md:-mr-8 md:w-5/12"
        />
        <p className="stagger text-cohead mb-7 text-fluid-s opacity-0">
          {t("about.paragraph 1")}
        </p>
        <p className="stagger font-cohead text-fluid-m leading-snug opacity-0">
          {t("about.paragraph 2")}
        </p>
      </section>
      <CircleScrollAnimation className="relative mb-40 grid h-[300vh] place-items-center overflow-y-clip md:-mx-8" />
      <div ref={scopeSecond}>
        <section className="stagger border-image-perforation mb-40 grid grid-cols-1 gap-10 bg-brightorange px-[2vh] py-16 sm:-mx-8 md:grid-cols-3">
          <div className="md:col-span-2 md:pl-6">
            <h2 className="stagger mb-2 font-cohead text-fluid-l font-bold leading-snug">
              {t("about.story title")}
            </h2>
            <p className="stagger max-w-[60ch] text-fluid-s">
              {t("about.story text")}
            </p>
          </div>
          <StoryIllustration className="stagger h-full w-full" />
        </section>
      </div>
      <section ref={scopeThird} className="mb-40 max-w-[75ch] px-6 sm:px-0">
        <h2 className="stagger mb-2 font-cohead text-fluid-xl font-bold text-green">
          {t("about.how title")}
          <span className="text-cyan ltr:ml-3 rtl:mr-3">
            {t("about.how title question mark 1")}
          </span>
          <span className="align-text-top text-fluid-l text-cyan">
            {t("about.how title question mark 2")}
          </span>
        </h2>
        <p className="stagger mb-6 text-fluid-s">{t("about.how text 1")}</p>
        <p className="stagger mb-6 font-cohead text-fluid-m font-bold">
          {t("about.how text 2")}
        </p>
        <a className="stagger flex cursor-pointer items-center justify-center rounded-full bg-brightorange p-4 transition-all hover:-translate-y-2 active:translate-y-2 active:bg-darkorange md:inline-flex">
          {t("about.how button")}
        </a>
      </section>
      <section className="px-6 pb-40 text-center sm:px-0 md:px-16">
        <h2
          ref={scopeFourth}
          className="mb-6 inline-flex flex-col gap-y-2 text-center font-cohead text-fluid-l"
        >
          <CurvedText
            className="stagger curved-text-width mx-auto"
            text={t("about.brains title 1")}
          />
          <div className="stagger flex justify-between px-2">
            <div className="h-2 w-2 rounded-full bg-orange"></div>
            <div className="h-2 w-2 rounded-full bg-orange"></div>
          </div>
          <span className="stagger ltr:show text-cyan rtl:hidden">
            {t("about.brains title 2")}
          </span>
        </h2>
        <div className="flex max-w-6xl flex-col items-center gap-y-10 lg:flex-row lg:flex-wrap">
          <div className="lg:align hover-card relative shrink-0 basis-1/3 self-start lg:self-center">
            <Kiro className="hover-card__side hover-card__side--front origin-center lg:px-4" />
            <KiroBack className="hover-card__side hover-card__side--back absolute inset-0 flex origin-center flex-col items-center lg:px-4 lg:px-4"></KiroBack>
          </div>
          <div className="hover-card relative  shrink-0 basis-1/3 self-end lg:self-center">
            <Kay className="hover-card__side hover-card__side--front origin-center lg:px-4" />
            <KayBack className="hover-card__side hover-card__side--back absolute inset-0 flex origin-center flex-col items-center lg:px-4 lg:px-4"></KayBack>
          </div>
          <div className="hover-card relative shrink-0 basis-1/3 self-start lg:self-center">
            <AbdelRhman className="hover-card__side hover-card__side--front origin-center lg:px-4" />
            <AbdelRhmanBack className="hover-card__side hover-card__side--back absolute inset-0 flex origin-center flex-col items-center lg:px-4 lg:px-4"></AbdelRhmanBack>
          </div>
          <div className="hover-card relative shrink-0 basis-1/3 self-end lg:self-center">
            <Esraa className="hover-card__side hover-card__side--front origin-center lg:px-4" />
            <EsraaBack className="hover-card__side hover-card__side--back absolute inset-0 flex origin-center flex-col items-center lg:px-4 lg:px-4"></EsraaBack>
          </div>
          <div className="hover-card relative shrink-0 basis-1/3 self-start lg:self-center">
            <Mahmoud className="hover-card__side hover-card__side--front origin-center lg:px-4" />
            <MahmoudBack className="hover-card__side hover-card__side--back absolute inset-0 flex origin-center flex-col items-center lg:px-4"></MahmoudBack>
          </div>
          <div className="hover-card relative shrink-0 basis-1/3 self-end lg:self-center">
            <Toka className="hover-card__side hover-card__side--front origin-center lg:px-4" />
            <TokaBack className="hover-card__side hover-card__side--back absolute inset-0 flex origin-center flex-col items-center lg:px-4"></TokaBack>
          </div>
          <div className="hover-card relative shrink-0 basis-1/3 self-start lg:self-center">
            <Heba className="hover-card__side hover-card__side--front origin-center lg:px-4" />
            <HebaBack className="hover-card__side hover-card__side--back absolute inset-0 flex origin-center flex-col items-center lg:px-4"></HebaBack>
          </div>
          <div className="hover-card relative shrink-0 basis-1/3 self-end lg:self-center">
            <Marvin className="hover-card__side hover-card__side--front origin-center lg:px-4" />
            <MarvinBack className="hover-card__side hover-card__side--back absolute inset-0 flex origin-center flex-col items-center lg:px-4"></MarvinBack>
          </div>
          <div className="hover-card relative shrink-0 basis-1/3 self-start lg:self-center">
            <Amr className="hover-card__side hover-card__side--front origin-center lg:px-4" />
            <AmrBack className="hover-card__side hover-card__side--back absolute inset-0 flex origin-center flex-col items-center lg:px-4"></AmrBack>
          </div>
          <div className="hover-card relative shrink-0 basis-1/3 self-end lg:self-center">
            <Hesahm className="hover-card__side hover-card__side--front origin-center lg:px-4" />
            <HesahmBack className="hover-card__side hover-card__side--back absolute inset-0 flex origin-center flex-col items-center lg:px-4"></HesahmBack>
          </div>
          <div className="hover-card relative shrink-0 basis-1/3 self-start lg:self-center">
            <Nadia className="hover-card__side hover-card__side--front origin-center lg:px-4" />
            <NadiaBack className="hover-card__side hover-card__side--back absolute inset-0 flex origin-center flex-col items-center lg:px-4"></NadiaBack>
          </div>
          <div className="hover-card relative shrink-0 basis-1/3 self-end lg:self-center">
            <Zaid className="hover-card__side hover-card__side--front origin-center lg:px-4" />
            <ZaidBack className="hover-card__side hover-card__side--back absolute inset-0 flex origin-center flex-col items-center lg:px-4"></ZaidBack>
          </div>
        </div>
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
