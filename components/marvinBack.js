import { useTranslation } from "next-i18next";

export default function MarvinBack({ className }) {
  const { t } = useTranslation();

  return (
    <div className={className}>
      <svg
        width="276"
        height="277"
        viewBox="0 0 276 277"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%" }}
      >
        <path
          d="M275.01 127.297C268.82 51.4868 202.35 -4.94326 126.55 1.24674C50.7401 7.43674 -5.68996 73.9067 0.500038 149.707C1.96004 167.617 6.79004 184.457 14.32 199.637C38.63 248.687 91.08 280.487 148.97 275.757C198.9 271.677 240.42 241.457 261.19 199.637C271.95 177.967 277.14 153.177 275.03 127.297H275.01Z"
          fill="#F15A24"
        />
      </svg>
      <div className="absolute top-1/2 max-w-[20ch] -translate-y-1/2">
        <h3 className="mb-4">{t("about.marvin title")}</h3>
        <p className=" text-xs font-light">{t("about.marvin text")}</p>
      </div>
    </div>
  );
}
