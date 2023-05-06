import "../styles/globals.css";

import { useEffect, useState } from "react";

import { AnimatePresence } from "framer-motion";
import PageLoader from "../components/pageLoader";
import Router from "next/router";
import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps, router }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // Used for page transition
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading ? (
        <PageLoader key="pageloader" />
      ) : (
        <Component {...pageProps} key={router.asPath} />
      )}
    </AnimatePresence>
  );
}

export default appWithTranslation(MyApp);
