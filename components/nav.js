import Link from "next/link";
import LocaleSwitcher from "./localeSwitcher";
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
              ? "relative m-auto text-center before:absolute before:left-1/2 before:top-1/2 before:-z-10 before:w-[130%] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-darkorange before:p-4"
              : "m-auto text-center before:opacity-0 before:transition-opacity before:duration-300 hover:relative hover:before:absolute hover:before:left-1/2 hover:before:top-1/2 hover:before:-z-10 hover:before:w-[130%] hover:before:-translate-x-1/2 hover:before:-translate-y-1/2 hover:before:rounded-full hover:before:bg-darkorange hover:before:p-4 hover:before:opacity-50"
          }
          href="/work"
        >
          {t("navigation.work")}
        </Link>
        <div className="h-2 w-2 rounded-full bg-orange"></div>
        <Link
          className={
            router.pathname == "/about"
              ? "relative m-auto text-center before:absolute before:left-1/2 before:top-1/2 before:-z-10 before:w-[130%] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-darkorange before:p-4"
              : "m-auto text-center before:opacity-0 before:transition-opacity before:duration-300 hover:relative hover:before:absolute hover:before:left-1/2 hover:before:top-1/2 hover:before:-z-10 hover:before:w-[130%] hover:before:-translate-x-1/2 hover:before:-translate-y-1/2 hover:before:rounded-full hover:before:bg-darkorange hover:before:p-4 hover:before:opacity-50"
          }
          href="/about"
        >
          {t("navigation.about")}
        </Link>
        <div className="h-2 w-2 rounded-full bg-orange"></div>
        <Logo className="m-auto transition-all duration-300 hover:rotate-12 hover:opacity-70"></Logo>
        <div className="h-2 w-2 rounded-full bg-orange"></div>
        <Link
          className={
            router.pathname == "/contact"
              ? "relative m-auto text-center before:absolute before:left-1/2 before:top-1/2 before:-z-10 before:w-[130%] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-darkorange before:p-4"
              : "m-auto text-center before:opacity-0 before:transition-opacity before:duration-300 hover:relative hover:before:absolute hover:before:left-1/2 hover:before:top-1/2 hover:before:-z-10 hover:before:w-[130%] hover:before:-translate-x-1/2 hover:before:-translate-y-1/2 hover:before:rounded-full hover:before:bg-darkorange hover:before:p-4 hover:before:opacity-50"
          }
          href="/contact"
        >
          {t("navigation.contact")}
        </Link>
        <div className="h-2 w-2 rounded-full bg-orange"></div>
        <LocaleSwitcher className="text-muted cursor-pointer text-center text-fluid-xl before:opacity-0 before:transition-opacity before:duration-300 hover:relative hover:before:absolute hover:before:left-1/2 hover:before:top-1/2 hover:before:-z-10 hover:before:w-[130%] hover:before:-translate-x-1/2 hover:before:-translate-y-1/2 hover:before:rounded-full hover:before:bg-darkorange hover:before:p-4 hover:before:opacity-50 md:m-auto md:text-base" />
      </nav>
      <div className="grid grid-cols-3 md:hidden">
        <Logo className="z-20 col-[2/3] row-[1/-1]"></Logo>
        <MobileMenu
          pageContent={pageContent}
          className="relative right-4 z-10 col-[3/-1] row-[1/-1] flex justify-self-end"
        />
      </div>
    </>
  );
}
