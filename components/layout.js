import Footer from "./footer";
import Head from "next/head";
import Nav from "./nav";
import { motion as m } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "next-i18next";

export default function Layout({ children, home, siteTitle }) {
  const { t } = useTranslation("");
  const pageContent = useRef(null);

  return (
    <m.div
      ref={pageContent}
      className="mx-auto max-w-screen-2xl overflow-hidden scroll-smooth pt-[max(20px,4vw)] font-cotext text-white selection:bg-orange selection:text-white sm:px-[max(20px,4vw)]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1,
      }}
    >
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.svg" sizes="any" type="image/svg+xml" />
        <meta name="description" content={t("metadata.description")} />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={t("metadata.description")} />
        <meta property="og:image" content="https:/3elm.com/favicon.svg" />
        <meta property="og:site_name" content="3elm" />
      </Head>
      <header>
        <Nav pageContent={pageContent}></Nav>
      </header>
      <main
        className={`relative z-0 mt-[max(20px,4vw)] sm:p-8 ${
          home ? "sm:pb-0" : ""
        }`}
      >
        {children}
      </main>
      <Footer></Footer>
    </m.div>
  );
}
