import Link from "next/link";
import { useRouter } from "next/router";

export default function LocaleSwitcher() {
  const router = useRouter();

  const { locales, locale: activeLocale } = router;

  const otherLocales = locales?.filter(
    (locale) => locale !== activeLocale && locale !== "default"
  );

  return (
    <span className="text-muted cursor-pointer text-center text-fluid-xl md:m-auto md:text-base">
      {otherLocales?.map((locale) => {
        const { pathname, query, asPath } = router;
        return (
          <span key={"locale-" + locale}>
            <Link href={{ pathname, query }} as={asPath} locale={locale}>
              {locale === "en" ? "English" : locale === "ar" ? "عربى" : null}
            </Link>
          </span>
        );
      })}
    </span>
  );
}
