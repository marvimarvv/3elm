import FacebookIcon from "./facebookIcon";
import InfiniteLoopSlider from "./infiniteLoopSlider";
import InstagramIcon from "./instagramIcon";
import Link from "next/link";
import LinkedinIcon from "./linkedinIcon";
import TiktokIcon from "./tiktokIcon";
import TwitterIcon from "./twitterIcon";
import YoutubeIcon from "./youtubeIcon";
import { useTranslation } from "next-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <>
      <footer className="rounded-t-3xl bg-orange p-10 md:p-20">
        <div className="flex flex-wrap gap-y-10 gap-x-20 md:gap-y-20">
          <blockquote className="flex basis-full flex-col font-cohead text-fluid-m font-bold">
            {t("footer.quotation")}
            <span className="font-normal">{t("footer.author")}</span>
          </blockquote>
          <div className="flex flex-col gap-y-2 self-end ltr:mr-auto rtl:ml-auto">
            <a
              className=" transition-opacity duration-300 hover:opacity-50"
              href="mailto:info@3elm.com"
            >
              info@3elm.com
            </a>
            <Link
              className=" transition-opacity duration-300 hover:opacity-50"
              href="/imprint"
            >
              {t("footer.imprint")}
            </Link>
            <Link
              className=" transition-opacity duration-300 hover:opacity-50"
              href="/privacy"
            >
              {t("footer.privacy")}
            </Link>
            <p className="align-self-end font-light opacity-80">
              {t("footer.copyright")}
            </p>
          </div>
          <div>
            <h3 className="mb-4 font-cohead text-fluid-m">
              {t("footer.address headline")}
            </h3>
            <address className="font-light not-italic opacity-80">
              <p>{t("footer.address street")}</p>
              <p>{t("footer.address city")}</p>
              <p>{t("footer.address country")}</p>
            </address>
          </div>
          <div className="">
            <h3 className="mb-4 font-cohead text-fluid-m">
              {t("footer.socials headline")}
            </h3>
            <div className="grid grid-cols-3 gap-6 md:gap-3">
              <a
                href="https://www.facebook.com/3elmgmbh"
                target="_blank"
                className=" transition-opacity duration-300 hover:opacity-50"
              >
                <FacebookIcon className={"md:h-3/5 md:w-auto"} fill="white" />
              </a>
              <a
                href="https://tiktok.com/@3elmstudio"
                target="_blank"
                className=" transition-opacity duration-300 hover:opacity-50"
              >
                <TiktokIcon className={"md:h-3/5 md:w-auto"} fill="white" />
              </a>
              <a
                href="https://www.youtube.com/@3elmstudio"
                target="_blank"
                className=" transition-opacity duration-300 hover:opacity-50"
              >
                <YoutubeIcon className={"md:h-3/5 md:w-auto"} fill="white" />
              </a>
              <a
                href="https://instagram.com/3elmstudio"
                target="_blank"
                className=" transition-opacity duration-300 hover:opacity-50"
              >
                <InstagramIcon className={"md:h-3/5 md:w-auto"} fill="white" />
              </a>
              <a
                href="https://www.linkedin.com/company/3elmstudio/"
                target="_blank"
                className=" transition-opacity duration-300 hover:opacity-50"
              >
                <LinkedinIcon className={"md:h-3/5 md:w-auto"} fill="white" />
              </a>
              <a
                href="https://twitter.com/3elmstudio"
                target="_blank"
                className=" transition-opacity duration-300 hover:opacity-50"
              >
                <TwitterIcon className={"md:h-3/5 md:w-auto"} fill="white" />
              </a>
            </div>
          </div>
        </div>
      </footer>
      <InfiniteLoopSlider />
    </>
  );
}
