import { useTranslation } from "next-i18next";

export default function TokaBack({ className }) {
  const { t } = useTranslation();

  return (
    <div className={className}>
      <svg
        width="276"
        height="276"
        viewBox="0 0 276 276"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%" }}
      >
        <path
          d="M274.993 126.515C268.803 50.7048 202.333 -5.7253 126.533 0.464698C50.7228 6.6547 -5.70717 73.1247 0.482826 148.925C1.94283 166.835 6.77283 183.675 14.3028 198.855C38.6128 247.905 91.0628 279.705 148.953 274.975C198.883 270.895 240.403 240.675 261.173 198.855C271.933 177.185 277.123 152.395 275.013 126.515H274.993Z"
          fill="#F15A24"
        />
        <g style={{ mixBlendMode: "hue" }} opacity="0.5">
          <path
            d="M0.482786 148.925C6.67279 224.735 73.1428 281.165 148.943 274.975C224.753 268.785 281.183 202.315 274.993 126.515C273.533 108.605 268.703 91.7647 261.173 76.5847C236.863 27.5347 184.413 -4.26529 126.523 0.46471C76.5928 4.54471 35.0728 34.7647 14.3028 76.5847C3.54279 98.2547 -1.64723 123.045 0.462767 148.925H0.482786Z"
            fill="#F15A24"
          />
        </g>
        <g style={{ mixBlendMode: "hue" }} opacity="0.5">
          <path
            d="M0.482786 148.925C6.67279 224.735 73.1428 281.165 148.943 274.975C224.753 268.785 281.183 202.315 274.993 126.515C273.533 108.605 268.703 91.7647 261.173 76.5847C236.863 27.5347 184.413 -4.26529 126.523 0.46471C76.5928 4.54471 35.0728 34.7647 14.3028 76.5847C3.54279 98.2547 -1.64723 123.045 0.462767 148.925H0.482786Z"
            fill="#F15A24"
          />
        </g>
        <path
          d="M261.643 159.065C258.343 161.315 257.543 166.295 259.533 169.765C261.523 173.235 265.793 175.045 269.773 174.645C271.793 174.445 273.963 173.565 274.793 171.715C275.663 169.795 274.813 167.545 273.673 165.775C273.183 165.015 272.613 164.265 271.803 163.845C270.333 163.085 268.533 163.615 267.063 164.365C262.203 166.835 258.583 171.615 257.513 176.955C256.923 179.905 257.203 183.305 259.333 185.435C260.993 187.095 263.513 187.675 265.833 187.345C268.153 187.015 270.283 185.865 272.163 184.465C272.913 183.905 273.683 182.865 273.073 182.155C272.673 181.695 271.943 181.775 271.373 181.975C269.053 182.775 267.433 184.875 266.203 186.995C265.233 188.665 264.403 190.465 264.263 192.385C264.123 194.305 264.783 196.375 266.333 197.525C267.883 198.675 270.343 198.595 271.533 197.075"
          stroke="#F15A24"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M23.9628 184.685C27.2628 186.935 28.0628 191.915 26.0728 195.385C24.0728 198.845 19.8128 200.665 15.8328 200.265C13.8128 200.065 11.6428 199.185 10.8128 197.335C9.94281 195.415 10.7928 193.165 11.9328 191.395C12.4228 190.635 12.9928 189.885 13.8028 189.465C15.2728 188.705 17.0728 189.235 18.5428 189.985C23.4028 192.455 27.0228 197.235 28.0928 202.575C28.6828 205.525 28.4028 208.925 26.2728 211.055C24.6128 212.715 22.0928 213.295 19.7728 212.965C17.4528 212.635 15.3228 211.485 13.4428 210.085C12.6928 209.525 11.9228 208.485 12.5328 207.775C12.9328 207.315 13.6628 207.395 14.2328 207.595C16.5528 208.395 18.1728 210.495 19.4028 212.615C20.3728 214.285 21.2028 216.085 21.3428 218.005C21.4828 219.925 20.8228 221.995 19.2728 223.145C17.7328 224.295 15.2628 224.215 14.0728 222.695"
          stroke="#F15A24"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <div className="absolute top-1/2 max-w-[20ch] -translate-y-1/2">
        <h3 className="mb-4">{t("about.toka title")}</h3>
        <p className=" text-xs font-light">{t("about.toka text")}</p>
      </div>
    </div>
  );
}