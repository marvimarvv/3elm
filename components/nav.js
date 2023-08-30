import Link from "next/link";
import LocaleSwitch from "./localeSwitch";
import Logo from "./logo";
import MobileMenu from "./mobileMenu";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

export default function Nav({ pageContent }) {
  const router = useRouter();
  const { t } = useTranslation("");

  useEffect(() => {
    let dir = router.locale == "ar" ? "rtl" : "ltr";
    let lang = router.locale == "ar" ? "ar" : "en";
    document.querySelector("html").setAttribute("dir", dir);
    document.querySelector("html").setAttribute("lang", lang);
  }, [router.locale]);

  return (
    <>
      <nav className="hidden items-center gap-4 font-bold md:flex">
        <Link
          className={
            router.pathname == "/work"
              ? "relative m-auto text-center before:absolute before:left-1/2 before:top-1/2 before:-z-10 before:w-[max(60%,120px)] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-brightorange before:px-10 before:py-4 sm:grow sm:basis-1/6"
              : "relative m-auto text-center before:absolute before:left-1/2 before:top-1/2 before:-z-10 before:w-[max(60%,120px)] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-brightorange before:px-10 before:py-4 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-50 sm:grow sm:basis-1/6 "
          }
          href="/work"
        >
          {t("navigation.work")}
        </Link>
        <div className="h-2 w-2 rounded-full bg-orange"></div>
        <Link
          className={
            router.pathname == "/about"
              ? "relative m-auto text-center before:absolute before:left-1/2 before:top-1/2 before:-z-10 before:w-[max(60%,120px)] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-brightorange before:px-10 before:py-4 sm:grow sm:basis-1/6"
              : "relative m-auto text-center before:absolute before:left-1/2 before:top-1/2 before:-z-10 before:w-[max(60%,120px)] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-brightorange before:px-10 before:py-4 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-50 sm:grow sm:basis-1/6 "
          }
          href="/about"
        >
          {t("navigation.about")}
        </Link>
        <div className="h-2 w-2 rounded-full bg-orange"></div>
        <Logo className="mx-6 grow transition-all duration-300 hover:rotate-12 hover:opacity-70"></Logo>
        <div className="h-2 w-2 rounded-full bg-orange"></div>
        <Link
          className={
            router.pathname == "/contact"
              ? "relative m-auto text-center before:absolute before:left-1/2 before:top-1/2 before:-z-10 before:w-[max(60%,120px)] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-brightorange before:px-10 before:py-4 sm:grow sm:basis-1/6"
              : "relative m-auto text-center before:absolute before:left-1/2 before:top-1/2 before:-z-10 before:w-[max(60%,120px)] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-brightorange before:px-10 before:py-4 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-50 sm:grow sm:basis-1/6 "
          }
          href="/contact"
        >
          {t("navigation.contact")}
        </Link>
        <div className="h-2 w-2 rounded-full bg-orange"></div>
        <LocaleSwitch className="text-muted group grow cursor-pointer text-center text-fluid-xl sm:basis-1/6 md:m-auto md:text-base" />
      </nav>
      <div className="grid grid-cols-3 md:hidden">
        <Logo className="z-20 col-[2/3] row-[1/-1]"></Logo>
        <MobileMenu
          pageContent={pageContent}
          className="relative z-10 col-[3/-1] row-[1/-1] flex justify-self-end ltr:right-6 rtl:left-6"
        />
      </div>
    </>
  );
}
