import Layout, { siteTitle } from "../components/layout";

import Carousel from "../components/carousel";
import DesignIllustration from "../components/designIllustration";
import FacebookIcon from "../components/facebookIcon";
import FishIllustration from "../components/fishIllustration";
import GoalsIllustration from "../components/goalsIllustration";
import Head from "next/head";
import HeartIcon from "../components/heartIcon";
import HeroIllustration from "../components/heroIllustration";
import InstagramIcon from "../components/instagramIcon";
import LikeIcon from "../components/likeIcon";
import LinkedinIcon from "../components/linkedinIcon";
import PipeIllustration from "../components/pipeIllustration";
import StarIllustration from "../components/starIllustration";
import TiktokIcon from "../components/tiktokIcon";
import TwitterIcon from "../components/twitterIcon";
import ValuesIllustration from "../components/valuesIllustration";
import YoutubeIcon from "../components/youtubeIcon";
import { motion as m } from "framer-motion";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="grid">
        <h1 className="z-10 col-start-1 col-end-2 row-start-1 row-end-1 flex flex-col font-cohead text-fluid-xl font-bold">
          <m.span
            initial={{ y: 10 }}
            animate={{ y: 20 }}
            transition={{
              duration: 3,
              yoyo: Infinity,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="leading-none text-brightorange"
          >
            {t("home.hero title1")}
          </m.span>
          <m.span
            initial={{ y: 10 }}
            animate={{ y: 20 }}
            transition={{
              duration: 2.5,
              yoyo: Infinity,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="leading-none text-green"
          >
            {t("home.hero title2")}
          </m.span>
          <m.span
            initial={{ y: 10 }}
            animate={{ y: 20 }}
            transition={{
              duration: 2.75,
              yoyo: Infinity,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="leading-none text-cyan"
          >
            {t("home.hero title3")}
            <m.span className="text-brightorange"> !</m.span>
          </m.span>
        </h1>
        <m.h2
          initial={{ y: 10 }}
          animate={{ y: 20 }}
          transition={{
            duration: 3,
            yoyo: Infinity,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="z-10 col-start-1 col-end-2 row-start-2 row-end-3 text-fluid-m text-white"
        >
          {t("home.hero subtitle")}
        </m.h2>
        <HeroIllustration></HeroIllustration>
      </section>
      <section className="border-image-perforation relative -mx-8 my-40 bg-brightorange px-[3vh] pb-[9rem] pt-6">
        <h2 className="text-center font-cohead text-fluid-xl font-bold">
          {t("home.about title")}
        </h2>
        <p className="mx-auto max-w-[60ch] text-fluid-m">
          {t("home.about main")}
        </p>
        <StarIllustration></StarIllustration>
      </section>
      <section className="mb-40 flex flex-wrap justify-center gap-16">
        <div className="hover-card relative aspect-square basis-[20rem]">
          <div className="hover-card__side hover-card__side--front clip-path-corner--right absolute inset-0 grid place-items-center bg-orange">
            <figgroup className="clip-path-corner--right flex h-[90%] w-[90%] flex-col bg-darkorange">
              <figcaption>
                <h3 className="mt-3 text-center font-cohead text-fluid-m">
                  {t("home.card1 title")}
                </h3>
              </figcaption>
              <figure className="arrow-background m-3 flex-grow bg-repeat-space">
                <ValuesIllustration></ValuesIllustration>
              </figure>
            </figgroup>
          </div>
          <div className="hover-card__side hover-card__side--back clip-path-corner--left absolute inset-0 flex items-center justify-center bg-orange p-4">
            <ul
              role="list"
              className="flex h-full list-disc flex-col justify-evenly p-8 marker:text-deepblue"
            >
              <li>{t("home.card1 point1")}</li>
              <li>{t("home.card1 point2")}</li>
              <li>{t("home.card1 point3")}</li>
              <li>{t("home.card1 point4")}</li>
              <li>{t("home.card1 point5")}</li>
            </ul>
          </div>
        </div>
        <div className="hover-card relative aspect-square basis-[20rem]">
          <div className="hover-card__side hover-card__side--front clip-path-corner--right absolute inset-0 grid place-items-center bg-orange">
            <figgroup className="clip-path-corner--right flex h-[90%] w-[90%] flex-col bg-darkorange">
              <figcaption>
                <h3 className="mt-3 text-center font-cohead text-fluid-m">
                  {t("home.card2 title")}
                </h3>
              </figcaption>
              <figure className="arrow-background m-3 flex-grow bg-repeat-space">
                <DesignIllustration></DesignIllustration>
              </figure>
            </figgroup>
          </div>
          <div className="hover-card__side hover-card__side--back clip-path-corner--left absolute inset-0 flex h-full items-center justify-center bg-orange p-4">
            <ul
              role="list"
              className="flex h-full list-disc flex-col justify-evenly p-8 marker:text-deepblue"
            >
              <li>{t("home.card2 point1")}</li>
              <li>{t("home.card2 point2")}</li>
              <li>{t("home.card2 point3")}</li>
              <li>{t("home.card2 point4")}</li>
              <li>{t("home.card2 point5")}</li>
            </ul>
          </div>
        </div>
        <div className="hover-card relative aspect-square basis-[20rem]">
          <div className="hover-card__side hover-card__side--front clip-path-corner--right absolute inset-0 grid place-items-center bg-orange">
            <figgroup className="clip-path-corner--right flex h-[90%] w-[90%] flex-col bg-darkorange">
              <figcaption>
                <h3 className="mt-3 text-center font-cohead text-fluid-m">
                  {t("home.card3 title")}
                </h3>
              </figcaption>
              <figure className="arrow-background m-3 flex-grow bg-repeat-space">
                <GoalsIllustration></GoalsIllustration>
              </figure>
            </figgroup>
          </div>
          <div className="hover-card__side hover-card__side--back clip-path-corner--left absolute inset-0 flex items-center justify-center bg-orange p-4">
            <ul
              role="list"
              className="flex h-full list-disc flex-col justify-evenly p-8 marker:text-deepblue"
            >
              <li>{t("home.card3 point1")}</li>
              <li>{t("home.card3 point2")}</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="rtl:reverse-rtl mb-40 grid grid-cols-3 items-end gap-y-12 gap-x-6">
        <h2 className="flex flex-col justify-self-center text-center font-cohead text-fluid-l">
          <span className="text-green">Our</span>
          <div className="flex justify-between px-2">
            <div className="h-2 w-2 rounded-full bg-orange"></div>
            <div className="h-2 w-2 rounded-full bg-orange"></div>
          </div>
          <span className="text-cyan">Socials</span>
        </h2>
        <div class="relative col-start-1 col-end-2 row-start-1 row-end-2">
          <div className="clip-path-message--left col-start-1 col-end-2 row-start-1 row-end-2 h-16 bg-orange">
            <FacebookIcon className="h-3/5 pt-2.5 pl-2.5" fill="white" />
          </div>
          <HeartIcon></HeartIcon>
        </div>
        <div className="clip-path-message--left col-start-1 col-end-2 row-start-2 row-end-3 h-16 bg-orange"></div>
        <div className="clip-path-message--left group col-start-1 col-end-2 row-start-2 row-end-3 h-16 -translate-y-2 translate-x-2 bg-white transition-all hover:translate-x-0 hover:translate-y-0 active:bg-orange">
          <InstagramIcon className="h-3/5 pt-2.5 pl-2.5" fill="#E24F27" />
        </div>
        <div className="clip-path-message--left col-start-1 col-end-2 row-start-3 row-end-4 h-16 bg-orange">
          <TwitterIcon className="h-3/5 pt-2.5 pl-2.5" fill="white" />
        </div>
        <div className="clip-path-message--right col-start-3 col-end-4 row-start-1 row-end-2 h-16 bg-orange"></div>
        <div className="clip-path-message--right group col-start-3 col-end-4 row-start-1 row-end-2 h-16 -translate-y-2 -translate-x-2 bg-white transition-all hover:translate-x-0 hover:translate-y-0 active:bg-orange">
          <YoutubeIcon
            className="ml-auto h-3/5 w-auto pt-2.5 pr-2.5"
            fill="#E24F27"
          />
        </div>
        <div className="clip-path-message--right col-start-3 col-end-4 row-start-2 row-end-3 h-16 bg-orange">
          <TiktokIcon
            className={"ml-auto h-3/5 w-auto pt-2.5 pr-2.5"}
            fill="white"
          />
        </div>
        <div className="relative col-start-3 col-end-4 row-start-3 row-end-4">
          <div className="clip-path-message--right h-16 bg-orange"></div>
          <LikeIcon></LikeIcon>
        </div>
        <div className="clip-path-message--right group col-start-3 col-end-4 row-start-3 row-end-4 h-16 -translate-y-2 -translate-x-2 bg-white transition-all hover:translate-x-0 hover:translate-y-0 active:bg-orange">
          <LinkedinIcon
            className="ml-auto h-3/5 w-auto pt-2.5 pr-2.5"
            fill="#E24F27"
          />
        </div>
        <FishIllustration className="col-start-1 col-end-4 row-start-2 row-end-5 h-full w-full"></FishIllustration>
      </section>
      <section className="-mx-[max(20px,4vw)] mb-40 text-center md:mx-0">
        <h2 className="mb-6 inline-flex flex-col text-center font-cohead text-fluid-l">
          <span className="text-green">Our</span>
          <div className="flex justify-between px-2">
            <div className="h-2 w-2 rounded-full bg-orange"></div>
            <div className="h-2 w-2 rounded-full bg-orange"></div>
          </div>
          <span className="text-cyan">Projects</span>
        </h2>
        <Carousel />
      </section>
      <PipeIllustration />
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
