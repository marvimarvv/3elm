import Link from "next/link";
import { useRouter } from "next/router";

export default function LocaleSwitcher({ className }) {
  const router = useRouter();

  const { locales, locale: activeLocale } = router;

  const otherLocales = locales?.filter(
    (locale) => locale !== activeLocale && locale !== "default"
  );

  return (
    <span className={className}>
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
