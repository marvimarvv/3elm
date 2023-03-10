import Footer from "./footer";
import Head from "next/head";
import Nav from "./nav";
import { useRef } from "react";

export const siteTitle = "3elm";

export default function Layout({ children, home }) {
  const pageContent = useRef(null);

  return (
    <div
      ref={pageContent}
      className="mx-auto max-w-screen-2xl px-[max(20px,4vw)] pt-[max(20px,4vw)] font-cotext text-white selection:bg-orange selection:text-white"
    >
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="3elm - arabic scientific content for the world"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header>
        <Nav pageContent={pageContent}></Nav>
      </header>
      <main className="relative z-0 mt-[max(20px,4vw)] sm:p-8">{children}</main>
      <Footer></Footer>
    </div>
  );
}
