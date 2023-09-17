import { motion as m, stagger, useAnimate, useInView } from "framer-motion";

import CurvedText from "../components/curvedText";
import DesignIllustration from "../components/designIllustration";
import FacebookIcon from "../components/facebookIcon";
import FallingWords from "../components/fallingWords";
import FishIllustration from "../components/fishIllustration";
import GoalsIllustration from "../components/goalsIllustration";
import HeartIcon from "../components/heartIcon";
import HeroIllustration from "../components/heroIllustration";
import HeroIllustrationMobile from "../components/heroIllustrationMobile";
import HoverCardDesignBack from "../components/hoverCardDesignBack";
import InstagramIcon from "../components/instagramIcon";
import Layout from "../components/layout";
import LikeIcon from "../components/likeIcon";
import LinkedinIcon from "../components/linkedinIcon";
import PipeIllustration from "../components/pipeIllustration";
import RedStarIcon from "../components/redStarIcon";
import StarIllustration from "../components/starIllustration";
import Swiper from "../components/swiper";
import TiktokIcon from "../components/tiktokIcon";
import TwitterIcon from "../components/twitterIcon";
import ValuesIllustration from "../components/valuesIllustration";
import YellowBallIcon from "../components/yellowBallIcon";
import YoutubeIcon from "../components/youtubeIcon";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect } from "react";
import { useTranslation } from "next-i18next";

export default function Home() {
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
      },
      ".fadeIn",
      isInViewFirst ? { opacity: 1 } : { opacity: 0 },
      {
        duration: 1,
        transition: "all .7s cubic-bezier(.29,-1.08,.69,4)",
      }
    );
    /* animateSecond(
      ".stagger",
      isInViewSecond
        ? { opacity: 1, scale: 1, x: 0 }
        : { opacity: 0, scale: 0.8, x: -40 },
      {
        duration: 1,
        transition: "all .7s cubic-bezier(.29,-1.08,.69,4)",
        delay: isInViewSecond ? stagger(0.3) : 0,
      }
    ); */
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
    <Layout home siteTitle={`3elm - ${t("navigation.home")}`}>
      <section className="hidden sm:grid">
        <h1 className="z-10 col-start-1 col-end-2 row-start-1 row-end-1 flex flex-col font-cohead text-fluid-xl font-bold">
          <m.span
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: [10, 20, 10], opacity: 1 }}
            transition={{
              y: {
                duration: 6,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
              },
              opacity: {
                duration: 1,
                ease: "easeInOut",
              },
            }}
            className="leading-none text-brightorange"
          >
            {t("home.hero title 1")}
          </m.span>
          <m.span
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: [10, 20, 10], opacity: 1 }}
            transition={{
              y: {
                duration: 5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
              },
              opacity: {
                duration: 1,
                delay: 0.5,
                ease: "easeInOut",
              },
            }}
            className="leading-none text-green"
          >
            {t("home.hero title 2")}
          </m.span>
          <m.span
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: [10, 20, 10], opacity: 1 }}
            transition={{
              y: {
                duration: 5.5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
              },
              opacity: {
                duration: 1,
                delay: 1,
                ease: "easeInOut",
              },
            }}
            className="leading-none text-cyan"
          >
            {t("home.hero title 3")}
            <m.span className="text-brightorange"> !</m.span>
          </m.span>
        </h1>
        <m.h2
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: [10, 20, 10], opacity: 1 }}
          transition={{
            y: {
              duration: 6,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            },
            opacity: {
              duration: 1,
              delay: 1.5,
              ease: "easeInOut",
            },
          }}
          className="z-10 col-start-1 col-end-2 row-start-2 row-end-3 max-w-[20ch] text-fluid-m text-white"
        >
          {t("home.hero subtitle")}
        </m.h2>
        <HeroIllustration className="rtl:mirror isolate col-start-1 col-end-3 row-start-1 row-end-4 mt-16 overflow-visible ltr:transform-none md:mt-0"></HeroIllustration>
      </section>
      <section>
        <HeroIllustrationMobile className="h-full w-full sm:hidden" />
      </section>
      <div ref={scopeFirst}>
        <section className="stagger border-image-perforation relative mt-20 bg-brightorange px-[3vh] pb-[9rem] pt-6 sm:-mx-8 md:mt-40">
          <h2 className="stagger text-center font-cohead text-fluid-xl font-bold">
            {t("home.about title")}
          </h2>
          <p className="stagger relative z-10 mx-auto max-w-[60ch] text-fluid-m">
            {t("home.about main")}
          </p>
          <div className="fadeIn">
            <StarIllustration className="absolute -bottom-16 scale-125 ltr:right-12 rtl:left-12 md:-bottom-12 md:scale-150"></StarIllustration>
          </div>
        </section>
      </div>
      <section>
        <FallingWords />
      </section>
      {/* <section
        ref={scopeSecond}
        className="mb-40 flex flex-wrap justify-center gap-16"
      >
        <div className="stagger hover-card hover-card-hint relative aspect-square basis-[20rem]">
          <div className="hover-card__side hover-card__side--front clip-path-corner--right absolute inset-0 grid place-items-center bg-orange">
            <figgroup className="clip-path-corner--right flex h-[90%] w-[90%] flex-col bg-darkorange">
              <figcaption>
                <h3 className="mt-3 text-center font-cohead text-fluid-m">
                  {t("home.card 1 title")}
                </h3>
              </figcaption>
              <figure className="arrow-background m-3 flex-grow bg-repeat-space">
                <ValuesIllustration></ValuesIllustration>
              </figure>
            </figgroup>
          </div>
          <div className="hover-card__side hover-card__side--back clip-path-corner--left absolute inset-0 flex items-center justify-center bg-orange p-4">
            <ul role="list" className="flex h-full flex-col justify-evenly">
              <li className="rotate-12 text-4xl">{t("home.card 1 point 1")}</li>
              <li className="-ml-5 -rotate-6 text-lg">
                {t("home.card 1 point 2")}
              </li>
              <li className="ml-8 -rotate-6 text-4xl">
                {t("home.card 1 point 3")}
              </li>
              <li className="text-2xl">{t("home.card 1 point 4")}</li>
              <li className="rotate-[15deg] self-end text-xl">
                {t("home.card 1 point 5")}
              </li>
            </ul>
          </div>
        </div>
        <div className="stagger hover-card hover-card-hint relative aspect-square basis-[20rem]">
          <div className="hover-card__side hover-card__side--front clip-path-corner--right absolute inset-0 grid place-items-center bg-orange">
            <figgroup className="clip-path-corner--right flex h-[90%] w-[90%] flex-col bg-darkorange">
              <figcaption>
                <h3 className="mt-3 text-center font-cohead text-fluid-m">
                  {t("home.card 2 title")}
                </h3>
              </figcaption>
              <figure className="arrow-background m-3 flex-grow bg-repeat-space">
                <DesignIllustration></DesignIllustration>
              </figure>
            </figgroup>
          </div>
          <div className="hover-card__side hover-card__side--back clip-path-corner--left absolute inset-0 h-full items-center justify-center bg-orange p-4">
            <HoverCardDesignBack className="-mt-8"></HoverCardDesignBack>
            <ul
              role="list"
              className="list-square flex flex-col items-center pt-6 text-center text-sm font-light"
            >
              <li>{t("home.card 2 point 1")}</li>
              <li>{t("home.card 2 point 2")}</li>
              <li>{t("home.card 2 point 3")}</li>
              <li className="list-item-width-80">{t("home.card 2 point 4")}</li>
              <li>{t("home.card 2 point 5")}</li>
            </ul>
          </div>
        </div>
        <div className="stagger hover-card hover-card-hint relative aspect-square basis-[20rem]">
          <div className="hover-card__side hover-card__side--front clip-path-corner--right absolute inset-0 grid place-items-center bg-orange">
            <figgroup className="clip-path-corner--right flex h-[90%] w-[90%] flex-col bg-darkorange">
              <figcaption>
                <h3 className="mt-3 text-center font-cohead text-fluid-m">
                  {t("home.card 3 title")}
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
              <li>{t("home.card 3 point 1")}</li>
              <li>{t("home.card 3 point 2")}</li>
            </ul>
          </div>
        </div>
      </section> */}
      <section
        ref={scopeThird}
        className=" rtl:reverse-rtl relative grid grid-cols-3 items-end gap-x-6 gap-y-12 px-6 sm:px-0 md:mb-40"
      >
        <h2 className="stagger inline-flex flex-col gap-y-2 justify-self-center text-center font-cohead text-fluid-l">
          <CurvedText
            className="curved-text-width mx-auto"
            text={t("home.socials title 1")}
          />
          <div className="flex justify-between px-2">
            <div className="h-2 w-2 rounded-full bg-orange"></div>
            <div className="h-2 w-2 rounded-full bg-orange"></div>
          </div>
          <span className="ltr:show text-cyan rtl:hidden">
            {t("home.socials title 2")}
          </span>
        </h2>
        <FishIllustration className="stagger col-start-1 col-end-4 row-start-2 row-end-5 h-full w-full"></FishIllustration>

        <div class="stagger relative col-start-1 col-end-2 row-start-1 row-end-2">
          <a
            href="https://www.facebook.com/3elmgmbh"
            target="_blank"
            className="clip-path-message--left group col-start-1 col-end-2 row-start-1 row-end-2 block flex h-16 bg-orange transition-colors hover:bg-white active:bg-orange"
          >
            <FacebookIcon className="h-3/5 pl-2.5 pt-2.5" fill="white" />
            <span className="hidden pl-2.5 pt-3 text-white group-hover:text-orange group-active:text-white md:inline">
              3elm
            </span>
          </a>
        </div>
        <div className="stagger clip-path-message--left col-start-1 col-end-2 row-start-2 row-end-3 h-16 bg-orange"></div>
        <a
          href="https://instagram.com/3elmstudio"
          target="_blank"
          className="stagger2 clip-path-message--left group col-start-1 col-end-2 row-start-2 row-end-3 flex h-16 -translate-y-2 translate-x-2 bg-white transition-all hover:translate-x-0 hover:translate-y-0 active:bg-orange"
        >
          <InstagramIcon className="h-3/5 pl-2.5 pt-2.5" fill="#E24F27" />
          <span className="hidden pl-2.5 pt-3 text-darkorange group-active:text-white md:inline">
            @3elmstudio
          </span>
        </a>
        <a
          href="https://twitter.com/3elmstudio"
          target="_blank"
          className="stagger clip-path-message--left group col-start-1 col-end-2 row-start-3 row-end-4 flex h-16 bg-orange transition-colors hover:bg-white active:bg-orange"
        >
          <TwitterIcon className="h-3/5 pl-2.5 pt-2.5" fill="white" />
          <span className="hidden pl-2.5 pt-3 text-white group-hover:text-orange group-active:text-white md:inline">
            @3elmstudio
          </span>
        </a>
        <div className="stagger clip-path-message--right col-start-3 col-end-4 row-start-1 row-end-2 h-16 bg-orange"></div>
        <a
          href="https://www.youtube.com/@3elmstudio"
          target="_blank"
          className="stagger2 clip-path-message--right group col-start-3 col-end-4 row-start-1 row-end-2 flex h-16 -translate-x-2 -translate-y-2 bg-white transition-all hover:translate-x-0 hover:translate-y-0 active:bg-orange"
        >
          <span className="ml-auto hidden pr-2.5 pt-3 text-darkorange group-active:text-white md:inline">
            @3elmstudio
          </span>
          <YoutubeIcon
            className="ml-auto h-3/5 w-auto pr-2.5 pt-2.5 md:ml-0"
            fill="#E24F27"
          />
        </a>
        <a
          href="https://tiktok.com/@3elmstudio"
          target="_blank"
          className="stagger clip-path-message--right group col-start-3 col-end-4 row-start-2 row-end-3 flex h-16 bg-orange transition-colors hover:bg-white active:bg-orange"
        >
          <span className="ml-auto hidden pr-2.5 pt-3 text-white group-hover:text-orange group-active:text-white md:inline">
            @3elmstudio
          </span>
          <TiktokIcon
            className="ml-auto h-3/5 w-auto pr-2.5 pt-2.5 md:ml-0"
            fill="white"
          />
        </a>
        <div className="stagger relative col-start-3 col-end-4 row-start-3 row-end-4">
          <div className="clip-path-message--right h-16 bg-orange"></div>
        </div>
        <a
          href="https://www.linkedin.com/company/3elmstudio/"
          target="_blank"
          className="stagger2 clip-path-message--right group col-start-3 col-end-4 row-start-3 row-end-4 flex h-16 -translate-x-2 -translate-y-2 bg-white transition-all hover:translate-x-0 hover:translate-y-0 active:bg-orange"
        >
          <span className="ml-auto hidden pr-2.5 pt-3 text-darkorange group-active:text-white md:inline">
            3elm
          </span>
          <LinkedinIcon
            className="ml-auto h-3/5 w-auto pr-2.5 pt-2.5 md:ml-0"
            fill="#E24F27"
          />
        </a>
        <LikeIcon></LikeIcon>
        <HeartIcon></HeartIcon>
      </section>
      <section
        ref={scopeFourth}
        className="text-center sm:-mx-[max(20px,4vw)] md:mx-0"
      >
        <h2 className="stagger mb-6 inline-flex flex-col gap-y-2 text-center font-cohead text-fluid-l">
          <CurvedText
            className="curved-text-width mx-auto"
            text={t("home.projects title 1")}
          />
          <div className="flex justify-between px-2">
            <div className="h-2 w-2 rounded-full bg-orange"></div>
            <div className="h-2 w-2 rounded-full bg-orange"></div>
          </div>
          <span className="ltr:show text-cyan rtl:hidden">
            {t("home.projects title 2")}
          </span>
        </h2>
        <Swiper className="stagger !pb-[max(35px,4vw)]" />
      </section>
      {/* This SVG is wrapped in a div bc of problems in the intersection observer of Chromium, Webkit 
      They only support the top level, so paths or other elements inside can't be used 
      https://bugs.chromium.org/p/chromium/issues/detail?id=963246,
      https://github.com/w3c/IntersectionObserver/issues/376#issuecomment-708088219 */}
      <div className="relative">
        <PipeIllustration className="isolate -mb-[2.5%] h-full w-full px-4 sm:px-0" />
        <RedStarIcon className="absolute right-4 top-1/2 w-[5%]" />
        <YellowBallIcon className="absolute left-4 top-2/3 w-[3%]" />
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
