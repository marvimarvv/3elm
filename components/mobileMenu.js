import { Popover, Transition } from "@headlessui/react";

import Link from "next/link";
import LocaleSwitcher from "./localeSwitcher";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

export default function MobileMenu({ className, pageContent }) {
  const router = useRouter();
  const { t } = useTranslation("");

  const hidePageContent = () => {
    const isOpen = pageContent.current.style.overflow === "hidden";

    if (isOpen) {
      pageContent.current.style.overflow = "auto";
      pageContent.current.style.height = "unset";
      console.log("Apply auto");
    } else {
      pageContent.current.style.overflow = "hidden";
      pageContent.current.style.height = "100dvh";
    }
  };

  useEffect(() => {
    let dir = router.locale == "ar" ? "rtl" : "ltr";
    let lang = router.locale == "ar" ? "ar" : "en";
    document.querySelector("html").setAttribute("dir", dir);
    document.querySelector("html").setAttribute("lang", lang);
  }, [router.locale]);

  return (
    <Popover className={className}>
      {({ open }) => (
        <>
          <Popover.Button
            className="text-fluid-xl"
            onClick={() => {
              console.log("onclick", open);
              hidePageContent();
            }}
          >
            &#9776;
          </Popover.Button>
          <Popover.Overlay className="fixed inset-0 bg-deepblue" />
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
            className="fixed inset-0 grid place-items-center"
          >
            <Popover.Panel className="fixed inset-0 grid place-items-center">
              <Popover.Button
                title="Close menu"
                className="absolute top-10 right-10 text-fluid-xl"
                onClick={() => {
                  console.log("onclick", close);
                  hidePageContent();
                }}
              >
                X
              </Popover.Button>
              <nav className="flex flex-col items-center justify-center gap-4">
                <Popover.Button
                  as={Link}
                  className="grow text-center text-fluid-xl"
                  href="/work"
                >
                  {t("navigation.work")}
                </Popover.Button>
                <div className="h-2 w-2 rounded-full bg-orange"></div>
                <Popover.Button
                  as={Link}
                  className="grow text-center text-fluid-xl"
                  href="/about"
                >
                  {t("navigation.about")}
                </Popover.Button>
                <div className="h-2 w-2 rounded-full bg-orange"></div>
                <Popover.Button
                  as={Link}
                  className="grow text-center text-fluid-xl"
                  href="/contact"
                >
                  {t("navigation.contact")}
                </Popover.Button>
                <div className="h-2 w-2 rounded-full bg-orange"></div>
                <Popover.Button as={LocaleSwitcher}></Popover.Button>
              </nav>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
