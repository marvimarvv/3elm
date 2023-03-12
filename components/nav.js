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
      <nav className="hidden items-center gap-4 md:flex">
        <Link
          className={
            router.pathname == "/work"
              ? "m-auto rounded-full bg-darkorange px-3 py-2 text-center"
              : "m-auto text-center"
          }
          href="/work"
        >
          {t("navigation.work")}
        </Link>
        <div className="h-2 w-2 rounded-full bg-orange"></div>
        <Link
          className={
            router.pathname == "/about"
              ? "m-auto rounded-full bg-darkorange px-3 py-2 text-center"
              : "m-auto text-center"
          }
          href="/about"
        >
          {t("navigation.about")}
        </Link>
        <div className="h-2 w-2 rounded-full bg-orange"></div>
        <Logo className="m-auto"></Logo>
        <div className="h-2 w-2 rounded-full bg-orange"></div>
        <Link
          className={
            router.pathname == "/contact"
              ? "m-auto rounded-full bg-darkorange px-3 py-2 text-center"
              : "m-auto text-center"
          }
          href="/contact"
        >
          {t("navigation.contact")}
        </Link>
        <div className="h-2 w-2 rounded-full bg-orange"></div>
        <LocaleSwitcher />
      </nav>
      <div className="grid grid-cols-3 md:hidden">
        <Logo className="col-[2/3] row-[1/-1]"></Logo>
        <MobileMenu
          pageContent={pageContent}
          className="relative z-10 col-[3/-1] row-[1/-1] self-center justify-self-end"
        />
      </div>
    </>
  );
}
