import { useTranslation } from "next-i18next";

export default function NadiaBack({ className }) {
  const { t } = useTranslation();

  return (
    <div className={className}>
      <svg
        width="306"
        height="312"
        viewBox="0 0 306 312"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%" }}
      >
        <path
          d="M298.487 136.958C291.902 55.4892 221.199 -5.15314 140.572 1.49893C59.9335 8.151 -0.0903826 79.5828 6.49384 161.041C8.04682 180.288 13.1844 198.385 21.194 214.698C47.0522 267.41 102.843 301.584 164.419 296.501C217.529 292.116 261.694 259.64 283.786 214.698C295.232 191.411 300.752 164.77 298.508 136.958H298.487Z"
          fill="#F15A24"
        />
        <path
          d="M301.559 122.917C296.934 103.666 288.452 83.7978 274.016 65.078V65.1206C253.181 35.2391 227.285 20.9308 227.285 20.9308C217.197 15.3712 207.343 11.183 197.787 8.12153C168.192 -1.91336 125.544 -6.32493 77.7401 20.0379C77.7401 20.0379 66.4402 26.2778 52.7698 39.1297C34.1563 55.9573 21.6446 74.9747 13.3318 94.0453C-19.2284 168.775 10.5467 261.598 80.2063 294.19C170.435 337.625 238.245 287.95 238.245 287.95C289.1 256.081 316.877 186.815 301.548 122.906L301.559 122.917ZM227.923 273.77C154.681 316.057 86.3718 277.161 86.2868 277.118C35.8891 247.577 10.9506 184.678 32.009 126.138C36.7501 112.956 43.3727 99.4561 52.5572 86.5511C77.687 52.003 115.265 29.6582 152.321 29.1586C202.241 28.4889 251.214 67.4591 272.304 123.374C275.547 132.463 277.821 141.52 279.341 150.3C288.239 201.74 267.925 248.417 227.923 273.77Z"
          fill="#F15A24"
        />
      </svg>
      <h3 className="absolute top-1/2">{t("about.nadia title")}</h3>
      <p>{t("about.nadia text")}</p>
    </div>
  );
}
