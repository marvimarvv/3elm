import { Switch } from "@headlessui/react"; // Import the Switch component
import { useRouter } from "next/router";

export default function LocaleSwitcher({ className }) {
  const router = useRouter();

  const { locales, locale: activeLocale } = router;

  const otherLocales = locales?.filter(
    (locale) => locale !== activeLocale && locale !== "default"
  );

  const handleLocaleChange = (locale) => {
    const { pathname, query, asPath } = router;

    router.push({ pathname, query }, asPath, { locale });
  };

  return (
    <span className={className}>
      <Switch.Group>
        <div className="flex items-center">
          {otherLocales?.map((locale) => (
            <Switch
              key={"locale-" + locale}
              checked={locale === activeLocale}
              onChange={() => handleLocaleChange(locale)}
              className={`${
                locale === activeLocale ? "bg-indigo-600" : "bg-brightorange"
              } relative inline-flex h-8 w-16 items-center rounded-full transition-all duration-500 group-hover:bg-darkorange`}
            >
              <span className="absolute ltr:left-2 rtl:right-3 rtl:top-0">
                {locale === "ar" ? "En" : "ع"}
              </span>
              <span
                className={`${
                  locale === "ar" ? "translate-x-9" : "-translate-x-9"
                } relative inline-block h-6 w-6 transform rounded-full bg-deepblue text-white transition-all duration-500 `}
              >
                <span
                  className={
                    locale === "ar"
                      ? "absolute -top-[4px] left-[7px]"
                      : "text-[14px]"
                  }
                >
                  {locale === "ar" ? "ع" : "En"}
                </span>
              </span>
            </Switch>
          ))}
        </div>
      </Switch.Group>
    </span>
  );
}
