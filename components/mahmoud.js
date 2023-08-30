import { motion as m, useInView } from "framer-motion";

import { useRef } from "react";

export default function Mahmoud({ className }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }, { amount: 0.5 });

  return (
    <m.div className={className}>
      <svg
        width="301"
        height="316"
        viewBox="0 0 301 316"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ref={ref}
        style={{
          transform: isInView
            ? "rotate(0deg) scale(1)"
            : "rotate(720deg) scale(0)",
          opacity: isInView ? 1 : 0,
          transition: "all 1.5s cubic-bezier(.43,.2,.54,1.17) .2s",
          width: "100%",
        }}
      >
        <path
          d="M289.01 164.78C282.82 88.97 216.35 32.54 140.55 38.73C64.74 44.92 8.31004 111.39 14.5 187.19C15.96 205.1 20.79 221.94 28.32 237.12C52.63 286.17 105.08 317.97 162.97 313.24C212.9 309.16 254.42 278.94 275.19 237.12C285.95 215.45 291.14 190.66 289.03 164.78H289.01Z"
          fill="#F15A24"
        />
        <path
          style={{ mixBlendMode: "hue" }}
          opacity="0.5"
          d="M14.49 187.19C20.68 263 87.15 319.43 162.95 313.24C238.76 307.05 295.19 240.58 289 164.78C287.54 146.87 282.71 130.03 275.18 114.85C250.87 65.7999 198.42 34 140.53 38.73C90.6001 42.81 49.08 73.0299 28.31 114.85C17.55 136.52 12.36 161.31 14.47 187.19H14.49Z"
          fill="url(#paint0_linear_2_1279)"
        />
        <path
          d="M289.01 164.78C282.82 88.97 216.35 32.54 140.55 38.73C64.74 44.92 8.31004 111.39 14.5 187.19C15.96 205.1 20.79 221.94 28.32 237.12C52.63 286.17 105.08 317.97 162.97 313.24C212.9 309.16 254.42 278.94 275.19 237.12C285.95 215.45 291.14 190.66 289.03 164.78H289.01Z"
          fill="#F15A24"
        />
        <path
          style={{ mixBlendMode: "hue" }}
          opacity="0.5"
          d="M14.49 187.19C20.68 263 87.15 319.43 162.95 313.24C238.76 307.05 295.19 240.58 289 164.78C287.54 146.87 282.71 130.03 275.18 114.85C250.87 65.7999 198.42 34 140.53 38.73C90.6001 42.81 49.08 73.0299 28.31 114.85C17.55 136.52 12.36 161.31 14.47 187.19H14.49Z"
          fill="url(#paint1_linear_2_1279)"
        />
        <g style={{ mixBlendMode: "multiply" }} opacity="0.3">
          <path
            d="M165.85 187.72C165.85 187.72 143.66 160.72 167.11 142.64C174.11 137.24 182.8 134.42 191.64 134.59C201.86 134.78 215.24 138.51 219.91 155.53C221.88 162.72 221.62 170.35 219.41 177.47L217.36 184.03C217.36 184.03 189.18 167.04 165.85 187.73V187.72Z"
            fill="#F15A24"
          />
        </g>
        <path
          d="M220.1 178.07C215.09 195.12 203.44 202.08 186.39 197.07C169.34 192.06 152.57 177.96 157.58 160.91C162.59 143.86 184.79 134.11 201.84 139.12C218.89 144.13 225.11 161.02 220.09 178.07H220.1Z"
          fill="white"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M186.82 181.9C195.905 181.9 203.27 174.535 203.27 165.45C203.27 156.365 195.905 149 186.82 149C177.735 149 170.37 156.365 170.37 165.45C170.37 174.535 177.735 181.9 186.82 181.9Z"
          fill="#00002A"
        />
        <path
          d="M175.55 141.94C175.55 141.94 190 130.78 211.4 144.23C211.4 144.23 222.08 151.1 221.83 165.61C221.83 165.61 225.85 138.45 192.39 136.25C187.43 135.92 182.47 137.23 178.24 139.83C177.16 140.49 176.2 141.21 175.55 141.94Z"
          fill="#00002A"
        />
        <path
          style={{ mixBlendMode: "multiply" }}
          opacity="0.48"
          d="M212.05 172.2C215.38 160.88 213.75 149.64 207.3 141.89C220.2 148.6 224.57 163.56 220.13 178.66C215.12 195.71 203.47 202.67 186.42 197.66C178.32 195.28 170.29 190.84 164.62 185.02C168.86 187.7 173.59 189.8 178.34 191.2C195.39 196.21 207.04 189.25 212.05 172.2Z"
          fill="url(#paint2_linear_2_1279)"
        />
        <path
          d="M156.74 165.55C156.74 165.55 191.52 158.13 221.84 165.6C221.84 165.6 222.58 135.12 187.46 138.35C176.48 139.36 166.49 145.39 160.86 154.87C159.07 157.88 157.6 161.42 156.75 165.55H156.74Z"
          fill="#F15A24"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <g style={{ mixBlendMode: "multiply" }} opacity="0.3">
          <path
            d="M134.4 187.4C134.4 187.4 156.59 160.4 133.14 142.32C126.14 136.92 117.45 134.1 108.61 134.27C98.39 134.46 85.01 138.19 80.34 155.21C78.37 162.4 78.63 170.03 80.84 177.15L82.89 183.71C82.89 183.71 111.07 166.72 134.4 187.41V187.4Z"
            fill="#F15A24"
          />
        </g>
        <path
          d="M80.1501 177.74C85.1601 194.79 96.81 201.75 113.86 196.74C130.91 191.73 147.68 177.63 142.67 160.58C137.66 143.53 115.46 133.78 98.41 138.79C81.36 143.8 75.14 160.69 80.16 177.74H80.1501Z"
          fill="white"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M124.7 141.61C124.7 141.61 110.25 130.45 88.85 143.9C88.85 143.9 78.17 150.77 78.42 165.28C78.42 165.28 74.4 138.12 107.86 135.92C112.82 135.59 117.78 136.9 122.01 139.5C123.09 140.16 124.05 140.88 124.7 141.61Z"
          fill="#00002A"
        />
        <path
          style={{ mixBlendMode: "multiply" }}
          opacity="0.48"
          d="M88.2 171.87C84.87 160.55 86.5 149.31 92.95 141.56C80.05 148.27 75.68 163.23 80.12 178.33C85.13 195.38 96.78 202.34 113.83 197.33C121.93 194.95 129.96 190.51 135.63 184.69C131.39 187.37 126.66 189.47 121.91 190.87C104.86 195.88 93.21 188.92 88.2 171.87Z"
          fill="url(#paint3_linear_2_1279)"
        />
        <path
          d="M118.02 179.81C127.105 179.81 134.47 172.445 134.47 163.36C134.47 154.275 127.105 146.91 118.02 146.91C108.935 146.91 101.57 154.275 101.57 163.36C101.57 172.445 108.935 179.81 118.02 179.81Z"
          fill="#00002A"
        />
        <path
          d="M143.51 165.22C143.51 165.22 108.73 157.8 78.41 165.27C78.41 165.27 77.67 134.79 112.79 138.02C123.77 139.03 133.76 145.06 139.39 154.54C141.18 157.55 142.65 161.09 143.5 165.22H143.51Z"
          fill="#F15A24"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M78.35 131.84C90.08 130.5 123.58 133.55 136.89 132.6C139.36 132.42 141.46 134.37 141.46 136.84V140.93C141.46 143.3 139.53 145.21 137.16 145.18L103.54 140.16C88.17 137.87 48.16 160.48 59.49 149.84L65.12 143.17L61.0301 143.29C60.4701 143.31 60.25 142.57 60.74 142.28L78.36 131.82L78.35 131.84Z"
          fill="#00002A"
        />
        <path
          d="M156.85 137.53V143.18"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M152.5 170.2C152.5 170.2 140.6 183.62 139.14 193.06C139.14 193.06 145.92 191.58 153.19 187.43"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M154.4 212.37C164.19 210.74 176.07 205.03 179.7 210.58C182.53 214.89 185.11 222.83 171.68 230.18C163.86 234.46 154.88 236.12 146.02 235.18L137.62 234.29C113.89 231.17 115.06 222.24 117.18 217.73C118.15 215.66 120.65 215.17 123.8 215.26C134.07 215.55 144.35 214.59 154.38 212.38L154.4 212.37Z"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M143.09 134.76V143.36"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M149.91 143.18L152.82 136.19"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M214.2 256.38C216.16 265.85 215.87 277.45 215.3 291.12C215.15 295.3 212.68 300.08 208.88 301.84C153 327.68 114.38 310.66 99 303.68C95.33 302.01 92.33 297.71 91.98 293.69L91.76 291.12C91.76 291.12 91.03 283.96 90.71 273.74C90.29 260.57 91.38 247.67 94.86 236.03C102.34 211.06 125.86 194.4 151.93 195.08C152.44 195.09 152.95 195.11 153.46 195.13C170.53 195.86 186.55 203.91 196.98 217.44C203.86 226.36 210.59 238.98 214.2 256.39V256.38Z"
          fill="#00002A"
        />
        <mask
          id="mask0_2_1279"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="116"
          y="208"
          width="66"
          height="28"
        >
          <path
            d="M154.42 212.37C164.21 210.74 176.09 205.03 179.72 210.58C182.55 214.89 185.13 222.83 171.7 230.18C163.88 234.46 154.9 236.12 146.04 235.18L137.64 234.29C113.91 231.17 115.08 222.24 117.2 217.73C118.17 215.66 120.67 215.17 123.82 215.26C134.09 215.55 144.37 214.59 154.4 212.38L154.42 212.37Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0_2_1279)">
          <path
            d="M297.06 247.95C304.6 323.63 249.37 391.1 173.69 398.65C98.01 406.19 30.54 350.96 22.99 275.28C21.21 257.39 22.93 239.97 27.6 223.68C42.69 171.05 88.56 130.34 146.36 124.58C196.21 119.61 242.49 141.88 270.44 179.28C284.92 198.67 294.48 222.12 297.06 247.95Z"
            fill="#F15A24"
          />
          <path
            style={{ mixBlendMode: "hue" }}
            opacity="0.5"
            d="M22.99 275.27C15.45 199.59 70.68 132.12 146.36 124.57C222.04 117.03 289.51 172.26 297.06 247.94C298.84 265.83 297.12 283.25 292.45 299.54C277.36 352.17 231.49 392.88 173.69 398.64C123.84 403.61 77.56 381.34 49.61 343.94C35.13 324.55 25.57 301.1 22.99 275.27Z"
            fill="url(#paint4_linear_2_1279)"
          />
          <path
            d="M297.06 247.95C304.6 323.63 249.37 391.1 173.69 398.65C98.01 406.19 30.54 350.96 22.99 275.28C21.21 257.39 22.93 239.97 27.6 223.68C42.69 171.05 88.56 130.34 146.36 124.58C196.21 119.61 242.49 141.88 270.44 179.28C284.92 198.67 294.48 222.12 297.06 247.95Z"
            fill="#F15A24"
          />
          <path
            style={{ mixBlendMode: "hue" }}
            opacity="0.5"
            d="M22.99 275.27C15.45 199.59 70.68 132.12 146.36 124.57C222.04 117.03 289.51 172.26 297.06 247.94C298.84 265.83 297.12 283.25 292.45 299.54C277.36 352.17 231.49 392.88 173.69 398.64C123.84 403.61 77.56 381.34 49.61 343.94C35.13 324.55 25.57 301.1 22.99 275.27Z"
            fill="url(#paint5_linear_2_1279)"
          />
        </g>
        <path
          d="M131.42 224.06C131.42 224.06 159.05 229.41 175.27 219.64"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M218.55 211.99L221.78 214.82"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M214.35 214.75L217.58 217.58"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M230.17 207.77L233.4 210.59"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M225.97 210.53L229.2 213.35"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M234.13 204.7L237.36 207.53"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M226.05 216.39L229.29 219.22"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M221.85 219.15L225.09 221.98"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M234.05 218.98L237.29 221.81"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M229.85 221.74L233.09 224.57"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M245.68 214.75L248.91 217.58"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M241.48 217.51L244.71 220.34"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M222.01 224.55L225.24 227.38"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M218.3 229.86L221.53 232.69"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M214.1 232.62L217.33 235.45"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M226.3 232.45L229.53 235.28"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M221.29 236.83L224.52 239.66"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M237.93 228.23L241.16 231.06"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M233.73 230.99L236.96 233.81"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M241.89 225.16L245.12 227.99"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M214.26 238.02L217.49 240.85"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M233.81 236.85L237.04 239.68"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M229.61 239.61L232.84 242.44"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M241.81 239.44L245.04 242.27"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M237.61 242.2L240.84 245.03"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M229.76 245.01L233 247.84"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M213.61 220.84L216.85 223.67"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M215.62 245.18L218.85 248.01"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M219.58 242.12L222.81 244.95"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M237.79 249.76L241.03 252.59"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M233.59 252.52L236.83 255.35"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M245.79 252.35L249.03 255.18"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M241.6 255.11L244.83 257.94"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M233.75 257.92L236.98 260.75"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M223.81 249.09L227.04 251.92"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M240.86 261.2L244.1 264.03"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M224.36 255.3L227.59 258.13"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M201.54 216.19L204.77 219.01"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M206.71 214.74L209.94 217.57"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M208.27 224.01L211.5 226.84"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M219.1 260.73L222.33 263.56"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M217.41 252.82L220.64 255.65"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M217.33 267.1L220.56 269.93"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M228.96 262.87L232.19 265.7"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M224.76 265.63L227.99 268.46"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M221.2 276.35L224.43 279.18"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M235.18 264.56L238.41 267.39"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M225.16 273.28L228.39 276.11"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M222.34 131.75C210.61 130.41 177.11 133.46 163.8 132.51C161.33 132.33 159.23 134.28 159.23 136.75V140.84C159.23 143.21 161.16 145.12 163.53 145.09L197.15 140.07C212.52 137.78 252.53 160.39 241.2 149.75L235.57 143.08L239.66 143.2C240.22 143.22 240.44 142.48 239.95 142.19L222.33 131.73L222.34 131.75Z"
          fill="#00002A"
        />
        <path
          opacity="0.34"
          d="M83.61 212.8L80.38 215.63"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M87.81 215.56L84.58 218.39"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M71.99 208.57L68.76 211.4"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M76.19 211.33L72.95 214.16"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M68.0301 205.51L64.79 208.34"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M76.11 217.2L72.87 220.02"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M80.31 219.96L77.07 222.78"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M68.11 219.79L64.87 222.62"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M72.3 222.55L69.07 225.38"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M56.48 215.56L53.25 218.39"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M60.68 218.32L57.45 221.15"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M80.1501 225.36L76.92 228.18"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M83.86 230.67L80.63 233.5"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M88.06 233.43L84.83 236.26"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M75.86 233.26L72.63 236.09"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M80.87 237.64L77.63 240.47"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M64.23 229.04L61 231.86"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M68.43 231.8L65.2 234.62"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M60.2701 225.97L57.04 228.8"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M87.9001 238.83L84.67 241.66"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M68.35 237.66L65.12 240.49"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M72.55 240.42L69.32 243.24"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M60.35 240.25L57.12 243.08"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M64.55 243.01L61.32 245.84"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M72.39 245.82L69.16 248.65"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M88.55 221.65L85.31 224.48"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M86.54 245.99L83.31 248.82"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M82.58 242.93L79.35 245.76"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M64.37 250.57L61.13 253.4"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M68.56 253.33L65.33 256.16"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M56.37 253.16L53.13 255.99"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M60.56 255.92L57.33 258.75"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M68.41 258.73L65.18 261.56"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M78.35 249.9L75.12 252.73"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M61.3 262.01L58.06 264.84"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M77.8 256.11L74.57 258.94"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M100.62 216.99L97.39 219.82"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M95.45 215.55L92.22 218.37"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M93.89 224.82L90.66 227.65"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M83.06 261.54L79.82 264.37"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M84.75 253.63L81.5201 256.46"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M84.83 267.91L81.6 270.74"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M73.2 263.68L69.97 266.51"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M77.4001 266.44L74.17 269.27"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M80.9601 277.16L77.73 279.98"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M66.98 265.37L63.75 268.2"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M77 274.09L73.7701 276.92"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <mask
          id="mask1_2_1279"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="179"
          y="215"
          width="84"
          height="63"
        >
          <path
            d="M242.79 277.52C242.79 277.52 218.78 250.42 196.25 244.08C194.82 243.68 193.7 242.49 193.51 241.02C193.36 239.85 193.78 238.48 195.77 237.32C195.77 237.32 193.57 231.91 199.45 231.59C199.45 231.59 196.64 228.39 202.57 224.93C202.57 224.93 192.35 221.32 181.37 220.68C178.94 220.54 178.26 217.3 180.43 216.2C180.7 216.06 181.01 215.93 181.34 215.8C181.34 215.8 203.59 215.44 230.03 229.48C230.03 229.48 237.47 227.01 247.45 238.49C247.45 238.49 258.96 252.46 262.31 257.47C262.31 257.47 253.77 270.74 242.79 277.51V277.52Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask1_2_1279)">
          <path
            d="M30.9 232.14C-1.96996 163.55 26.9801 81.2999 95.5701 48.4299C164.16 15.56 246.41 44.5099 279.28 113.1C287.05 129.31 291.36 146.28 292.52 163.18C296.25 217.8 266.99 271.7 214.61 296.8C169.44 318.45 118.34 313.28 79.32 287.63C59.1 274.34 42.12 255.54 30.9 232.13V232.14Z"
            fill="#F15A24"
          />
          <path
            style={{ mixBlendMode: "hue" }}
            opacity="0.5"
            d="M279.28 113.11C312.15 181.7 283.2 263.95 214.61 296.82C146.02 329.69 63.77 300.74 30.9 232.15C23.13 215.94 18.82 198.97 17.66 182.07C13.93 127.45 43.19 73.55 95.57 48.45C140.74 26.8 191.84 31.97 230.86 57.62C251.08 70.91 268.06 89.71 279.28 113.12V113.11Z"
            fill="url(#paint6_linear_2_1279)"
          />
          <path
            d="M30.9 232.14C-1.96996 163.55 26.9801 81.2999 95.5701 48.4299C164.16 15.56 246.41 44.5099 279.28 113.1C287.05 129.31 291.36 146.28 292.52 163.18C296.25 217.8 266.99 271.7 214.61 296.8C169.44 318.45 118.34 313.28 79.32 287.63C59.1 274.34 42.12 255.54 30.9 232.13V232.14Z"
            fill="#F15A24"
          />
          <path
            style={{ mixBlendMode: "hue" }}
            opacity="0.5"
            d="M279.28 113.11C312.15 181.7 283.2 263.95 214.61 296.82C146.02 329.69 63.77 300.74 30.9 232.15C23.13 215.94 18.82 198.97 17.66 182.07C13.93 127.45 43.19 73.55 95.57 48.45C140.74 26.8 191.84 31.97 230.86 57.62C251.08 70.91 268.06 89.71 279.28 113.12V113.11Z"
            fill="url(#paint7_linear_2_1279)"
          />
        </g>
        <path
          d="M242.75 277.5C242.75 277.5 218.74 250.4 196.21 244.06C194.78 243.66 193.66 242.47 193.47 241C193.32 239.83 193.74 238.46 195.73 237.3C195.73 237.3 193.53 231.89 199.41 231.57C199.41 231.57 196.6 228.37 202.53 224.91C202.53 224.91 192.31 221.3 181.33 220.66C178.9 220.52 178.22 217.28 180.39 216.18C180.66 216.04 180.97 215.91 181.3 215.78C181.3 215.78 203.55 215.42 229.99 229.46C229.99 229.46 237.43 226.99 247.41 238.47C247.41 238.47 258.92 252.44 262.27 257.45"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M199.41 231.57L208.32 234.69"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M195.73 237.3C195.73 237.3 203.25 239.74 205.91 240.51"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M229.99 229.47L238.13 234.88"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M202.53 224.91L211.84 228.02"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M96.57 46.47C97.41 53.18 91.98 59.77 85.35 61.11C78.72 62.45 71.65 59.07 67.69 53.58C65.68 50.79 64.37 47.06 65.79 43.92C67.25 40.68 71.06 39.23 74.58 38.69C76.1 38.46 77.69 38.35 79.12 38.9C81.73 39.91 83.06 42.79 83.76 45.5C86.05 54.43 84.05 64.37 78.47 71.71C75.39 75.77 70.76 79.21 65.67 78.89C61.71 78.64 58.14 76.08 55.97 72.77C53.8 69.46 52.87 65.46 52.54 61.51C52.41 59.93 52.87 57.78 54.45 57.78C55.48 57.78 56.2001 58.79 56.5901 59.74C58.1601 63.58 57.32 67.98 56 71.92C54.97 75.01 53.6 78.0799 51.32 80.4099C49.04 82.7399 45.67 84.21 42.48 83.54C39.29 82.87 36.63 79.64 37.23 76.44"
          stroke="#00002A"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M53.21 80.4C53.64 83.87 50.83 87.2799 47.4 87.9799C43.97 88.6699 40.31 86.92 38.26 84.09C37.22 82.65 36.54 80.72 37.28 79.09C38.04 77.41 40.01 76.66 41.83 76.39C42.61 76.27 43.44 76.2099 44.18 76.4999C45.53 77.0199 46.22 78.5199 46.58 79.9199C47.77 84.5399 46.73 89.6799 43.84 93.4799C42.24 95.5799 39.85 97.36 37.22 97.2C35.17 97.07 33.33 95.75 32.2 94.03C31.07 92.31 30.59 90.25 30.42 88.2C30.35 87.38 30.59 86.27 31.41 86.27C31.94 86.27 32.32 86.79 32.52 87.28C33.33 89.27 32.9 91.54 32.21 93.58C31.67 95.18 30.97 96.7699 29.79 97.9699C28.61 99.1699 26.87 99.94 25.22 99.59C23.57 99.24 22.19 97.5699 22.5 95.9199"
          stroke="#00002A"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M111.4 41.84C112.14 47.8 107.32 53.65 101.43 54.85C95.5401 56.05 89.2601 53.04 85.7501 48.16C83.9601 45.68 82.8001 42.37 84.0601 39.58C85.3601 36.7 88.7401 35.41 91.8701 34.94C93.2201 34.74 94.6301 34.64 95.9001 35.13C98.2201 36.02 99.4001 38.59 100.02 41C102.06 48.93 100.28 57.76 95.3201 64.28C92.5801 67.89 88.4701 70.94 83.9501 70.66C80.4401 70.44 77.2701 68.17 75.3301 65.22C73.3901 62.27 72.5701 58.73 72.2801 55.22C72.1601 53.82 72.57 51.91 73.98 51.9C74.89 51.9 75.5301 52.79 75.8801 53.64C77.2801 57.05 76.53 60.96 75.36 64.46C74.44 67.21 73.2301 69.94 71.2001 72C69.1701 74.06 66.18 75.38 63.35 74.78C60.52 74.18 58.1501 71.32 58.6901 68.47"
          stroke="#00002A"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M72.89 71.9699C73.27 75.0499 70.78 78.08 67.73 78.7C64.68 79.32 61.43 77.7599 59.62 75.2399C58.7 73.9599 58.1 72.2399 58.75 70.7999C59.42 69.3099 61.17 68.64 62.79 68.4C63.49 68.29 64.22 68.24 64.88 68.5C66.08 68.96 66.69 70.2899 67.01 71.5399C68.06 75.6499 67.14 80.21 64.58 83.59C63.16 85.46 61.04 87.04 58.7 86.89C56.88 86.78 55.24 85.6 54.24 84.08C53.24 82.56 52.81 80.7199 52.66 78.9099C52.6 78.1899 52.81 77.2 53.54 77.19C54.01 77.19 54.34 77.65 54.52 78.09C55.24 79.86 54.85 81.88 54.25 83.69C53.77 85.11 53.15 86.52 52.1 87.59C51.05 88.66 49.5 89.34 48.04 89.03C46.58 88.72 45.35 87.24 45.63 85.77"
          stroke="#00002A"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12.59 130.21C18.65 133.21 26.66 130.26 30.11 124.45C33.56 118.64 32.7 110.84 28.83 105.3C26.86 102.48 23.77 100.02 20.34 100.32C16.8 100.63 14.1701 103.75 12.5101 106.89C11.7901 108.24 11.16 109.71 11.21 111.25C11.3 114.05 13.59 116.26 15.91 117.81C23.59 122.92 33.63 124.31 42.4 121.46C47.25 119.89 52.02 116.66 53.4 111.75C54.47 107.93 53.23 103.72 50.82 100.57C48.41 97.42 44.95 95.23 41.33 93.61C39.89 92.97 37.7001 92.69 37.1701 94.18C36.8301 95.15 37.54 96.16 38.31 96.84C41.42 99.59 45.85 100.24 50 100.3C53.26 100.34 56.61 100.07 59.56 98.68C62.51 97.29 65.01 94.6 65.43 91.37C65.85 88.14 63.6801 84.56 60.4601 84.07"
          stroke="#00002A"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M58.93 100.47C62.07 102.02 66.21 100.5 68 97.49C69.79 94.48 69.3401 90.45 67.3401 87.58C66.3201 86.12 64.72 84.85 62.95 85C61.12 85.16 59.7601 86.77 58.9001 88.4C58.5301 89.1 58.2 89.86 58.23 90.65C58.28 92.1 59.46 93.2399 60.66 94.0399C64.63 96.6899 69.83 97.4 74.37 95.93C76.88 95.12 79.35 93.44 80.06 90.9C80.61 88.92 79.97 86.74 78.73 85.12C77.48 83.49 75.69 82.36 73.82 81.52C73.07 81.19 71.94 81.04 71.67 81.82C71.49 82.32 71.86 82.85 72.26 83.2C73.87 84.63 76.16 84.96 78.31 84.99C80 85.01 81.73 84.87 83.26 84.15C84.79 83.43 86.08 82.04 86.3 80.37C86.52 78.7 85.4 76.85 83.73 76.59"
          stroke="#00002A"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M3.32004 142.68C8.70004 145.35 15.8201 142.73 18.8901 137.56C21.9601 132.39 21.19 125.47 17.75 120.55C16 118.05 13.25 115.86 10.21 116.13C7.06003 116.41 4.73004 119.17 3.25004 121.97C2.61004 123.17 2.05003 124.48 2.09003 125.84C2.17003 128.32 4.20003 130.29 6.27003 131.67C13.09 136.21 22.01 137.44 29.8 134.91C34.11 133.51 38.35 130.64 39.57 126.28C40.52 122.89 39.42 119.15 37.28 116.35C35.14 113.56 32.06 111.61 28.85 110.17C27.57 109.6 25.63 109.35 25.16 110.68C24.86 111.54 25.49 112.44 26.18 113.05C28.94 115.5 32.87 116.07 36.56 116.12C39.46 116.16 42.43 115.92 45.05 114.68C47.67 113.44 49.89 111.06 50.26 108.19C50.63 105.32 48.71 102.14 45.85 101.71"
          stroke="#00002A"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M44.47 116.27C47.25 117.65 50.94 116.29 52.53 113.62C54.12 110.95 53.72 107.37 51.94 104.82C51.03 103.52 49.61 102.39 48.04 102.53C46.41 102.67 45.2 104.11 44.44 105.55C44.11 106.17 43.82 106.85 43.84 107.55C43.88 108.84 44.93 109.85 46 110.56C49.53 112.91 54.14 113.55 58.18 112.24C60.41 111.52 62.6 110.03 63.24 107.78C63.73 106.03 63.16 104.09 62.06 102.64C60.96 101.19 59.36 100.19 57.7 99.44C57.04 99.14 56.03 99.02 55.79 99.7C55.63 100.15 55.96 100.61 56.32 100.92C57.75 102.19 59.78 102.48 61.69 102.51C63.19 102.53 64.73 102.41 66.08 101.77C67.43 101.13 68.5801 99.8999 68.7801 98.4099C68.9801 96.9199 67.98 95.28 66.5 95.06"
          stroke="#00002A"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M203.85 48.93C203.01 55.64 208.44 62.23 215.07 63.57C221.7 64.91 228.77 61.53 232.73 56.04C234.74 53.25 236.05 49.52 234.63 46.38C233.17 43.14 229.36 41.69 225.84 41.15C224.32 40.92 222.73 40.81 221.3 41.36C218.69 42.37 217.36 45.25 216.66 47.96C214.37 56.89 216.37 66.83 221.95 74.17C225.03 78.23 229.66 81.6699 234.75 81.3499C238.71 81.0999 242.28 78.54 244.45 75.23C246.62 71.92 247.55 67.92 247.88 63.97C248.01 62.39 247.55 60.24 245.97 60.24C244.94 60.24 244.22 61.25 243.83 62.2C242.26 66.04 243.1 70.44 244.42 74.38C245.45 77.47 246.82 80.54 249.1 82.87C251.38 85.2 254.75 86.67 257.94 86C261.13 85.33 263.79 82.1 263.19 78.9"
          stroke="#00002A"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M247.2 82.86C246.77 86.33 249.58 89.74 253.01 90.44C256.44 91.13 260.1 89.38 262.15 86.55C263.19 85.11 263.87 83.18 263.13 81.55C262.37 79.87 260.4 79.1199 258.58 78.8499C257.8 78.7299 256.97 78.67 256.23 78.96C254.88 79.48 254.19 80.98 253.83 82.38C252.64 87 253.68 92.14 256.57 95.94C258.17 98.04 260.56 99.8199 263.19 99.6599C265.24 99.5299 267.08 98.21 268.21 96.49C269.34 94.77 269.82 92.7099 269.99 90.6599C270.06 89.8399 269.82 88.73 269 88.73C268.47 88.73 268.09 89.25 267.89 89.74C267.08 91.73 267.51 94 268.2 96.04C268.74 97.64 269.44 99.23 270.62 100.43C271.8 101.63 273.54 102.4 275.19 102.05C276.84 101.7 278.22 100.03 277.91 98.38"
          stroke="#00002A"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M189.01 44.3C188.27 50.26 193.09 56.11 198.98 57.31C204.87 58.5 211.15 55.5 214.66 50.62C216.45 48.14 217.61 44.83 216.35 42.04C215.05 39.16 211.67 37.87 208.54 37.4C207.19 37.2 205.78 37.1 204.51 37.59C202.19 38.48 201.01 41.05 200.39 43.46C198.35 51.39 200.13 60.22 205.09 66.74C207.83 70.35 211.94 73.4 216.46 73.12C219.97 72.9 223.14 70.63 225.08 67.68C227.02 64.73 227.84 61.19 228.13 57.68C228.25 56.28 227.84 54.37 226.43 54.36C225.52 54.36 224.88 55.25 224.53 56.1C223.13 59.51 223.88 63.42 225.05 66.92C225.97 69.67 227.18 72.4 229.21 74.46C231.24 76.53 234.23 77.84 237.06 77.24C239.89 76.65 242.26 73.78 241.72 70.93"
          stroke="#00002A"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M227.52 74.43C227.14 77.51 229.63 80.54 232.68 81.16C235.73 81.78 238.98 80.22 240.79 77.7C241.71 76.42 242.31 74.7 241.66 73.26C240.99 71.77 239.24 71.1 237.62 70.86C236.92 70.75 236.19 70.7 235.53 70.96C234.33 71.42 233.72 72.75 233.4 74C232.35 78.11 233.27 82.67 235.83 86.05C237.25 87.92 239.37 89.5 241.71 89.35C243.53 89.24 245.17 88.06 246.17 86.54C247.17 85.02 247.6 83.18 247.75 81.37C247.81 80.65 247.6 79.66 246.87 79.65C246.4 79.65 246.07 80.11 245.89 80.55C245.17 82.32 245.56 84.34 246.16 86.15C246.64 87.57 247.26 88.98 248.31 90.05C249.36 91.12 250.91 91.8 252.37 91.49C253.83 91.18 255.06 89.7 254.78 88.23"
          stroke="#00002A"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M287.82 132.67C281.76 135.67 273.75 132.72 270.3 126.91C266.85 121.1 267.71 113.3 271.58 107.76C273.55 104.94 276.64 102.48 280.07 102.78C283.61 103.09 286.24 106.21 287.9 109.35C288.62 110.7 289.25 112.17 289.2 113.71C289.11 116.51 286.82 118.72 284.5 120.27C276.82 125.38 266.78 126.77 258.01 123.92C253.16 122.35 248.39 119.12 247.01 114.21C245.94 110.39 247.18 106.18 249.59 103.03C252 99.88 255.46 97.69 259.08 96.07C260.52 95.43 262.71 95.15 263.24 96.64C263.58 97.61 262.87 98.62 262.1 99.3C258.99 102.05 254.56 102.7 250.41 102.76C247.15 102.8 243.8 102.53 240.85 101.14C237.9 99.75 235.4 97.06 234.98 93.83C234.56 90.6 236.73 87.02 239.95 86.53"
          stroke="#00002A"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M241.49 102.93C238.35 104.48 234.21 102.96 232.42 99.95C230.63 96.94 231.08 92.9099 233.08 90.0399C234.1 88.5799 235.7 87.31 237.47 87.46C239.3 87.62 240.66 89.23 241.52 90.86C241.89 91.56 242.22 92.32 242.19 93.11C242.14 94.56 240.96 95.7 239.76 96.5C235.79 99.15 230.59 99.86 226.05 98.39C223.54 97.58 221.07 95.9 220.36 93.36C219.81 91.38 220.45 89.2 221.69 87.58C222.94 85.95 224.73 84.8199 226.6 83.9799C227.35 83.6499 228.48 83.5 228.75 84.28C228.93 84.78 228.56 85.3099 228.16 85.6599C226.55 87.0899 224.26 87.42 222.11 87.45C220.42 87.47 218.69 87.33 217.16 86.61C215.63 85.89 214.34 84.5 214.12 82.83C213.9 81.16 215.02 79.31 216.69 79.05"
          stroke="#00002A"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M297.1 146.14C291.72 148.81 284.6 146.19 281.53 141.02C278.46 135.86 279.23 128.93 282.67 124.01C284.42 121.51 287.17 119.32 290.21 119.59C293.36 119.87 295.69 122.63 297.17 125.43C297.81 126.63 298.37 127.94 298.33 129.3C298.25 131.78 296.22 133.75 294.15 135.13C287.33 139.67 278.41 140.9 270.62 138.37C266.31 136.97 262.07 134.1 260.85 129.74C259.9 126.35 261 122.61 263.14 119.81C265.28 117.01 268.36 115.07 271.57 113.63C272.85 113.06 274.79 112.81 275.26 114.14C275.56 115 274.93 115.9 274.24 116.51C271.48 118.96 267.55 119.53 263.86 119.58C260.96 119.62 257.99 119.38 255.37 118.14C252.75 116.91 250.53 114.52 250.16 111.65C249.79 108.78 251.71 105.6 254.57 105.17"
          stroke="#00002A"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M255.94 118.73C253.16 120.11 249.47 118.75 247.88 116.08C246.29 113.41 246.69 109.83 248.47 107.28C249.38 105.98 250.8 104.85 252.37 104.99C254 105.13 255.21 106.57 255.97 108.01C256.3 108.63 256.59 109.31 256.57 110.01C256.53 111.3 255.48 112.31 254.41 113.02C250.88 115.37 246.27 116.01 242.23 114.7C240 113.98 237.81 112.49 237.17 110.24C236.68 108.49 237.25 106.55 238.35 105.1C239.46 103.65 241.05 102.65 242.71 101.9C243.37 101.6 244.38 101.48 244.62 102.16C244.78 102.61 244.45 103.07 244.09 103.38C242.66 104.65 240.63 104.94 238.72 104.97C237.22 104.99 235.68 104.87 234.33 104.23C232.98 103.59 231.83 102.36 231.63 100.87C231.43 99.38 232.43 97.74 233.91 97.52"
          stroke="#00002A"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M209.16 46.17C204.61 51.17 196.07 51.33 190.74 47.17C185.41 43.01 183.38 35.43 184.98 28.86C185.79 25.52 187.78 22.1 191.08 21.14C194.5 20.14 198.07 22.09 200.77 24.42C201.93 25.42 203.05 26.56 203.56 28.01C204.49 30.65 203.17 33.54 201.56 35.83C196.27 43.38 187.41 48.32 178.2 48.85C173.11 49.15 167.49 47.87 164.42 43.8C162.04 40.63 161.66 36.26 162.76 32.45C163.86 28.64 166.29 25.34 169.08 22.52C170.19 21.4 172.13 20.35 173.16 21.54C173.83 22.32 173.53 23.52 173.06 24.44C171.16 28.14 167.27 30.35 163.42 31.91C160.4 33.13 157.18 34.1 153.93 33.88C150.68 33.66 147.37 32.06 145.81 29.2C144.25 26.34 144.96 22.22 147.79 20.6"
          stroke="#00002A"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M155.19 35.29C152.83 37.88 148.42 37.96 145.66 35.81C142.9 33.66 141.85 29.74 142.68 26.34C143.1 24.61 144.13 22.84 145.84 22.34C147.61 21.82 149.46 22.83 150.85 24.04C151.45 24.56 152.03 25.15 152.3 25.9C152.78 27.27 152.1 28.76 151.26 29.95C148.52 33.86 143.94 36.41 139.17 36.69C136.54 36.84 133.63 36.18 132.04 34.08C130.81 32.44 130.61 30.18 131.18 28.21C131.75 26.24 133.01 24.53 134.45 23.07C135.02 22.49 136.03 21.94 136.56 22.56C136.91 22.96 136.75 23.59 136.51 24.06C135.53 25.97 133.52 27.12 131.52 27.92C129.96 28.55 128.29 29.05 126.61 28.94C124.93 28.83 123.22 28 122.41 26.52C121.6 25.04 121.97 22.91 123.44 22.07"
          stroke="#00002A"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M222.33 54.42C218.28 58.86 210.7 59 205.97 55.31C201.24 51.61 199.43 44.89 200.85 39.05C201.57 36.08 203.34 33.05 206.27 32.19C209.3 31.3 212.48 33.04 214.87 35.1C215.9 35.99 216.9 37 217.35 38.28C218.18 40.62 217 43.19 215.57 45.23C210.87 51.94 203 56.32 194.83 56.8C190.31 57.06 185.32 55.93 182.59 52.31C180.47 49.5 180.14 45.61 181.12 42.23C182.1 38.85 184.26 35.92 186.73 33.41C187.72 32.41 189.44 31.48 190.35 32.54C190.95 33.23 190.68 34.3 190.26 35.11C188.58 38.39 185.12 40.36 181.7 41.74C179.02 42.83 176.16 43.68 173.27 43.49C170.38 43.3 167.44 41.87 166.05 39.33C164.66 36.79 165.3 33.13 167.81 31.69"
          stroke="#00002A"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M174.39 44.76C172.3 47.06 168.37 47.13 165.92 45.22C163.47 43.31 162.54 39.83 163.27 36.81C163.64 35.27 164.56 33.7 166.07 33.26C167.64 32.8 169.28 33.7 170.52 34.77C171.05 35.23 171.57 35.75 171.8 36.42C172.23 37.63 171.62 38.96 170.88 40.01C168.45 43.48 164.38 45.75 160.15 46C157.81 46.14 155.23 45.55 153.82 43.68C152.72 42.22 152.55 40.21 153.06 38.46C153.57 36.71 154.68 35.19 155.96 33.9C156.47 33.38 157.36 32.9 157.84 33.45C158.15 33.81 158.01 34.36 157.8 34.78C156.93 36.48 155.14 37.5 153.37 38.21C151.98 38.77 150.5 39.22 149.01 39.11C147.52 39 146 38.27 145.28 36.96C144.56 35.65 144.89 33.75 146.19 33.01"
          stroke="#00002A"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M90.94 36.82C92.6 43.38 100.05 47.55 106.71 46.39C113.37 45.23 118.73 39.51 120.43 32.97C121.29 29.64 121.15 25.69 118.7 23.28C116.16 20.79 112.08 20.82 108.61 21.6C107.11 21.94 105.59 22.41 104.46 23.44C102.39 25.33 102.2 28.5 102.54 31.28C103.65 40.44 109.12 48.97 116.99 53.78C121.34 56.44 126.9 57.97 131.52 55.82C135.12 54.15 137.51 50.47 138.33 46.59C139.15 42.71 138.57 38.66 137.44 34.85C136.99 33.33 135.78 31.49 134.3 32.06C133.34 32.43 133.04 33.63 133.02 34.66C132.95 38.81 135.33 42.6 137.99 45.79C140.08 48.29 142.46 50.66 145.43 52C148.4 53.34 152.07 53.49 154.8 51.71C157.53 49.93 158.84 45.96 157.11 43.19"
          stroke="#00002A"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M143.66 52.68C144.52 56.07 148.37 58.23 151.82 57.63C155.27 57.03 158.04 54.07 158.92 50.68C159.37 48.96 159.29 46.91 158.02 45.67C156.71 44.38 154.6 44.3999 152.8 44.7999C152.03 44.9699 151.24 45.22 150.65 45.75C149.58 46.73 149.48 48.37 149.65 49.81C150.22 54.55 153.06 58.96 157.13 61.45C159.38 62.83 162.26 63.62 164.65 62.51C166.51 61.65 167.75 59.7399 168.18 57.7399C168.61 55.7299 168.3 53.63 167.72 51.67C167.49 50.89 166.86 49.93 166.1 50.23C165.6 50.42 165.45 51.0399 165.44 51.5799C165.4 53.7299 166.64 55.69 168.01 57.34C169.09 58.64 170.32 59.8599 171.86 60.5499C173.4 61.2399 175.3 61.32 176.71 60.4C178.12 59.48 178.8 57.4199 177.91 55.9899"
          stroke="#00002A"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M75.43 37.88C76.9 43.7 83.52 47.41 89.44 46.38C95.36 45.35 100.12 40.27 101.62 34.46C102.38 31.5 102.26 27.9899 100.08 25.8599C97.82 23.6499 94.2 23.68 91.12 24.37C89.79 24.67 88.44 25.09 87.43 26.01C85.59 27.69 85.42 30.51 85.72 32.97C86.7 41.1 91.57 48.68 98.55 52.96C102.41 55.32 107.35 56.68 111.46 54.78C114.65 53.3 116.78 50.03 117.51 46.59C118.24 43.15 117.72 39.54 116.72 36.17C116.32 34.82 115.24 33.19 113.93 33.7C113.08 34.03 112.81 35.1 112.79 36.01C112.73 39.7 114.85 43.06 117.21 45.9C119.06 48.12 121.18 50.23 123.82 51.42C126.46 52.61 129.72 52.74 132.14 51.16C134.56 49.58 135.73 46.05 134.19 43.59"
          stroke="#00002A"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M122.26 51.98C123.02 54.99 126.45 56.91 129.51 56.38C132.57 55.85 135.04 53.2199 135.81 50.2099C136.21 48.6799 136.14 46.86 135.01 45.76C133.84 44.62 131.97 44.6299 130.37 44.9899C129.68 45.1399 128.98 45.36 128.46 45.84C127.51 46.71 127.42 48.17 127.58 49.44C128.09 53.65 130.61 57.57 134.22 59.78C136.22 61 138.77 61.71 140.9 60.72C142.55 59.95 143.65 58.26 144.03 56.48C144.41 54.7 144.14 52.83 143.62 51.09C143.41 50.39 142.86 49.55 142.18 49.81C141.74 49.98 141.6 50.53 141.59 51.01C141.56 52.92 142.65 54.66 143.88 56.13C144.84 57.28 145.93 58.3699 147.3 58.9899C148.67 59.6099 150.35 59.6699 151.61 58.8599C152.86 58.0399 153.47 56.21 152.67 54.94"
          stroke="#00002A"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M97.47 28.13C98.31 34.84 92.88 41.43 86.25 42.77C79.62 44.11 72.5501 40.73 68.5901 35.24C66.5801 32.45 65.27 28.72 66.69 25.58C68.15 22.34 71.96 20.89 75.48 20.35C77 20.12 78.5901 20.01 80.0201 20.56C82.63 21.57 83.96 24.45 84.66 27.16C86.95 36.09 84.95 46.03 79.37 53.37C76.29 57.43 71.66 60.87 66.57 60.55C62.61 60.3 59.04 57.74 56.87 54.43C54.7 51.12 53.77 47.12 53.44 43.17C53.31 41.59 53.77 39.44 55.35 39.44C56.38 39.44 57.1 40.45 57.49 41.4C59.06 45.24 58.2201 49.64 56.9001 53.58C55.8701 56.67 54.5 59.74 52.22 62.07C49.94 64.4 46.57 65.87 43.38 65.2C40.19 64.53 37.53 61.3 38.13 58.1"
          stroke="#00002A"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M54.12 62.06C54.55 65.53 51.74 68.94 48.31 69.64C44.88 70.33 41.22 68.58 39.17 65.75C38.13 64.31 37.45 62.38 38.19 60.75C38.95 59.07 40.92 58.3199 42.74 58.0499C43.52 57.9299 44.35 57.87 45.09 58.16C46.44 58.68 47.13 60.1799 47.49 61.5799C48.68 66.1999 47.64 71.34 44.75 75.14C43.15 77.24 40.76 79.0199 38.13 78.8599C36.08 78.7299 34.24 77.41 33.11 75.69C31.98 73.97 31.5 71.9099 31.33 69.8599C31.26 69.0399 31.5 67.93 32.32 67.93C32.85 67.93 33.23 68.45 33.43 68.94C34.24 70.93 33.81 73.1999 33.12 75.2399C32.58 76.8399 31.88 78.43 30.7 79.63C29.52 80.83 27.78 81.6 26.13 81.25C24.48 80.9 23.1 79.23 23.41 77.58"
          stroke="#00002A"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M112.31 23.49C113.05 29.45 108.23 35.3 102.34 36.5C96.4501 37.69 90.17 34.69 86.66 29.81C84.87 27.33 83.71 24.02 84.97 21.23C86.27 18.35 89.6501 17.06 92.7801 16.59C94.1301 16.39 95.5401 16.29 96.8101 16.78C99.1301 17.67 100.31 20.24 100.93 22.65C102.97 30.58 101.19 39.41 96.23 45.93C93.49 49.54 89.38 52.59 84.86 52.31C81.35 52.09 78.18 49.82 76.24 46.87C74.3 43.92 73.4801 40.38 73.1901 36.87C73.0701 35.47 73.4801 33.56 74.8901 33.55C75.8001 33.55 76.44 34.44 76.79 35.29C78.19 38.7 77.4401 42.61 76.2701 46.11C75.3501 48.86 74.14 51.59 72.11 53.65C70.08 55.71 67.0901 57.03 64.2601 56.43C61.4301 55.83 59.06 52.97 59.6 50.12"
          stroke="#00002A"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M73.8 53.63C74.18 56.71 71.69 59.74 68.64 60.36C65.59 60.98 62.34 59.42 60.53 56.9C59.61 55.62 59.01 53.9 59.66 52.46C60.33 50.97 62.08 50.3 63.7 50.06C64.4 49.95 65.13 49.9 65.79 50.16C66.99 50.62 67.6 51.95 67.92 53.2C68.97 57.31 68.05 61.87 65.49 65.25C64.07 67.12 61.95 68.7 59.61 68.55C57.79 68.44 56.15 67.26 55.15 65.74C54.15 64.22 53.72 62.38 53.57 60.57C53.51 59.85 53.72 58.86 54.45 58.85C54.92 58.85 55.25 59.31 55.43 59.75C56.15 61.52 55.76 63.5399 55.16 65.3499C54.68 66.7699 54.06 68.18 53.01 69.25C51.96 70.32 50.41 71 48.95 70.69C47.49 70.38 46.26 68.9 46.54 67.43"
          stroke="#00002A"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M13.5 111.86C19.56 114.86 27.57 111.91 31.02 106.1C34.47 100.29 33.61 92.49 29.74 86.95C27.77 84.13 24.68 81.6699 21.25 81.9699C17.71 82.2799 15.0801 85.3999 13.4201 88.5399C12.7001 89.8899 12.07 91.36 12.12 92.9C12.21 95.7 14.5 97.91 16.82 99.46C24.5 104.57 34.54 105.96 43.31 103.11C48.16 101.54 52.93 98.31 54.31 93.4C55.38 89.58 54.1401 85.3699 51.7301 82.2199C49.3201 79.0699 45.86 76.88 42.24 75.26C40.8 74.62 38.61 74.34 38.08 75.83C37.74 76.8 38.45 77.81 39.22 78.49C42.33 81.24 46.76 81.89 50.91 81.95C54.17 81.99 57.52 81.72 60.47 80.33C63.42 78.94 65.9201 76.25 66.3401 73.02C66.7601 69.79 64.59 66.2099 61.37 65.7199"
          stroke="#00002A"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M59.8301 82.13C62.9701 83.68 67.1101 82.16 68.9001 79.15C70.6901 76.14 70.24 72.11 68.24 69.24C67.22 67.78 65.62 66.5099 63.85 66.6599C62.02 66.8199 60.66 68.43 59.8 70.06C59.43 70.76 59.1 71.52 59.13 72.31C59.18 73.76 60.36 74.9 61.56 75.7C65.53 78.35 70.7301 79.06 75.2701 77.59C77.7801 76.78 80.2501 75.1 80.9601 72.56C81.5101 70.58 80.87 68.4 79.63 66.78C78.38 65.15 76.59 64.02 74.72 63.18C73.97 62.85 72.84 62.7 72.57 63.48C72.39 63.98 72.76 64.51 73.16 64.86C74.77 66.29 77.0601 66.62 79.2101 66.65C80.9001 66.67 82.63 66.53 84.16 65.81C85.69 65.09 86.9801 63.7 87.2001 62.03C87.4201 60.36 86.3 58.51 84.63 58.25"
          stroke="#00002A"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M4.22004 124.34C9.60004 127.01 16.72 124.39 19.79 119.22C22.86 114.06 22.09 107.13 18.65 102.21C16.9 99.71 14.15 97.5199 11.11 97.7899C7.96002 98.0699 5.63003 100.83 4.15003 103.63C3.51003 104.83 2.95003 106.14 2.99003 107.5C3.07003 109.98 5.10005 111.95 7.17005 113.33C13.99 117.87 22.91 119.1 30.7 116.57C35.01 115.17 39.25 112.3 40.47 107.94C41.42 104.55 40.32 100.81 38.18 98.01C36.04 95.22 32.96 93.27 29.75 91.83C28.47 91.26 26.53 91.01 26.06 92.34C25.76 93.2 26.39 94.1 27.08 94.71C29.84 97.16 33.77 97.73 37.46 97.78C40.36 97.82 43.33 97.58 45.95 96.34C48.57 95.11 50.79 92.7199 51.16 89.8499C51.53 86.9799 49.61 83.8 46.75 83.37"
          stroke="#00002A"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M45.38 97.93C48.16 99.31 51.85 97.95 53.44 95.28C55.03 92.61 54.63 89.0299 52.85 86.4799C51.94 85.1799 50.52 84.05 48.95 84.19C47.32 84.33 46.11 85.77 45.35 87.21C45.02 87.83 44.73 88.51 44.75 89.21C44.79 90.5 45.84 91.5099 46.91 92.2199C50.44 94.5699 55.0501 95.21 59.0901 93.9C61.3201 93.18 63.5101 91.69 64.1501 89.44C64.6401 87.69 64.07 85.75 62.97 84.3C61.86 82.85 60.27 81.8499 58.61 81.0999C57.95 80.7999 56.94 80.68 56.7 81.36C56.54 81.81 56.87 82.27 57.23 82.58C58.66 83.85 60.69 84.14 62.6 84.17C64.1 84.19 65.64 84.07 66.99 83.43C68.34 82.79 69.49 81.56 69.69 80.07C69.89 78.58 68.89 76.9399 67.41 76.7199"
          stroke="#00002A"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M204.75 30.59C203.91 37.3 209.34 43.89 215.97 45.23C222.6 46.57 229.67 43.19 233.63 37.7C235.64 34.91 236.95 31.18 235.53 28.04C234.07 24.8 230.26 23.35 226.74 22.81C225.22 22.58 223.63 22.47 222.2 23.02C219.59 24.03 218.26 26.91 217.56 29.62C215.27 38.55 217.27 48.49 222.85 55.83C225.93 59.89 230.56 63.33 235.65 63.01C239.61 62.76 243.18 60.2 245.35 56.89C247.52 53.58 248.45 49.58 248.78 45.63C248.91 44.05 248.45 41.9 246.87 41.9C245.84 41.9 245.12 42.91 244.73 43.86C243.16 47.7 244 52.1 245.32 56.04C246.35 59.13 247.72 62.2 250 64.53C252.28 66.86 255.65 68.3299 258.84 67.6599C262.03 66.9899 264.69 63.76 264.09 60.56"
          stroke="#00002A"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M248.11 64.52C247.68 67.99 250.49 71.3999 253.92 72.0999C257.35 72.7999 261.01 71.04 263.06 68.21C264.1 66.77 264.78 64.84 264.04 63.21C263.28 61.53 261.31 60.78 259.49 60.51C258.71 60.39 257.88 60.33 257.14 60.62C255.79 61.14 255.1 62.6399 254.74 64.0399C253.55 68.6599 254.59 73.7999 257.48 77.5999C259.08 79.6999 261.47 81.48 264.1 81.32C266.15 81.19 267.99 79.87 269.12 78.15C270.25 76.43 270.73 74.37 270.9 72.32C270.97 71.5 270.73 70.39 269.91 70.39C269.38 70.39 269 70.91 268.8 71.4C267.99 73.39 268.42 75.66 269.11 77.7C269.65 79.3 270.35 80.89 271.53 82.09C272.71 83.29 274.45 84.06 276.1 83.71C277.75 83.36 279.13 81.6899 278.82 80.0399"
          stroke="#00002A"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M189.92 25.95C189.18 31.91 194 37.76 199.89 38.96C205.78 40.16 212.06 37.15 215.57 32.27C217.36 29.79 218.52 26.48 217.26 23.69C215.96 20.81 212.58 19.52 209.45 19.05C208.1 18.85 206.69 18.75 205.42 19.24C203.1 20.13 201.92 22.7 201.3 25.11C199.26 33.04 201.04 41.87 206 48.39C208.74 52 212.85 55.05 217.37 54.77C220.88 54.55 224.05 52.28 225.99 49.33C227.93 46.38 228.75 42.84 229.04 39.33C229.16 37.93 228.75 36.02 227.34 36.01C226.43 36.01 225.79 36.9 225.44 37.75C224.04 41.16 224.79 45.07 225.96 48.57C226.88 51.32 228.09 54.05 230.12 56.11C232.15 58.17 235.14 59.49 237.97 58.89C240.8 58.29 243.17 55.43 242.63 52.58"
          stroke="#00002A"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M228.43 56.09C228.05 59.17 230.54 62.2 233.59 62.82C236.64 63.44 239.89 61.88 241.7 59.36C242.62 58.08 243.22 56.36 242.57 54.92C241.9 53.43 240.15 52.76 238.53 52.52C237.83 52.41 237.1 52.36 236.44 52.62C235.24 53.08 234.63 54.41 234.31 55.66C233.26 59.77 234.18 64.33 236.74 67.71C238.16 69.58 240.28 71.16 242.62 71.01C244.44 70.9 246.08 69.72 247.08 68.2C248.08 66.68 248.51 64.84 248.66 63.03C248.72 62.31 248.51 61.32 247.78 61.31C247.31 61.31 246.98 61.77 246.8 62.21C246.08 63.98 246.47 66 247.07 67.81C247.55 69.23 248.17 70.64 249.22 71.71C250.27 72.78 251.82 73.46 253.28 73.15C254.74 72.84 255.97 71.36 255.69 69.89"
          stroke="#00002A"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M288.73 114.32C282.67 117.32 274.66 114.37 271.21 108.56C267.76 102.75 268.62 94.9499 272.49 89.4099C274.46 86.5899 277.55 84.13 280.98 84.43C284.52 84.74 287.15 87.86 288.81 91C289.53 92.35 290.16 93.82 290.11 95.36C290.02 98.16 287.73 100.37 285.41 101.92C277.73 107.03 267.69 108.42 258.92 105.57C254.07 104 249.3 100.77 247.92 95.86C246.85 92.04 248.09 87.83 250.5 84.68C252.91 81.53 256.37 79.3399 259.99 77.7199C261.43 77.0799 263.62 76.7999 264.15 78.2899C264.49 79.2599 263.78 80.27 263.01 80.95C259.9 83.7 255.47 84.3499 251.32 84.4099C248.06 84.4499 244.71 84.1799 241.76 82.7899C238.81 81.3999 236.31 78.7099 235.89 75.4799C235.47 72.2499 237.64 68.67 240.86 68.18"
          stroke="#00002A"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M242.39 84.59C239.25 86.14 235.11 84.62 233.32 81.61C231.53 78.6 231.98 74.57 233.98 71.7C235 70.24 236.6 68.97 238.37 69.12C240.2 69.28 241.56 70.89 242.42 72.52C242.79 73.22 243.12 73.98 243.09 74.77C243.04 76.22 241.86 77.3599 240.66 78.1599C236.69 80.8099 231.49 81.52 226.95 80.05C224.44 79.24 221.97 77.56 221.26 75.02C220.71 73.04 221.35 70.86 222.59 69.24C223.83 67.62 225.63 66.48 227.5 65.64C228.25 65.31 229.38 65.16 229.65 65.94C229.83 66.44 229.46 66.97 229.06 67.32C227.45 68.75 225.16 69.08 223.01 69.11C221.32 69.13 219.59 68.99 218.06 68.27C216.53 67.55 215.24 66.16 215.02 64.49C214.8 62.82 215.92 60.97 217.59 60.71"
          stroke="#00002A"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M298 126.8C292.62 129.47 285.5 126.85 282.43 121.68C279.36 116.52 280.13 109.59 283.57 104.67C285.32 102.17 288.07 99.98 291.11 100.25C294.26 100.53 296.59 103.29 298.07 106.09C298.71 107.29 299.27 108.6 299.23 109.96C299.15 112.44 297.12 114.41 295.05 115.79C288.23 120.33 279.31 121.56 271.52 119.03C267.21 117.63 262.97 114.76 261.75 110.4C260.8 107.01 261.9 103.27 264.04 100.47C266.18 97.6799 269.26 95.7299 272.47 94.2899C273.75 93.7199 275.69 93.47 276.16 94.8C276.46 95.66 275.83 96.56 275.14 97.17C272.38 99.62 268.45 100.19 264.76 100.24C261.86 100.28 258.89 100.04 256.27 98.8C253.65 97.56 251.43 95.18 251.06 92.31C250.69 89.44 252.61 86.26 255.47 85.83"
          stroke="#00002A"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M256.85 100.39C254.07 101.77 250.38 100.41 248.79 97.74C247.2 95.07 247.6 91.49 249.38 88.94C250.29 87.64 251.71 86.51 253.28 86.65C254.91 86.79 256.12 88.23 256.88 89.67C257.21 90.29 257.5 90.97 257.48 91.67C257.44 92.96 256.39 93.97 255.32 94.68C251.79 97.03 247.18 97.67 243.14 96.36C240.91 95.64 238.72 94.15 238.08 91.9C237.59 90.15 238.16 88.21 239.26 86.76C240.36 85.31 241.96 84.31 243.62 83.56C244.28 83.26 245.29 83.14 245.53 83.82C245.69 84.27 245.36 84.7299 245 85.0399C243.57 86.3099 241.54 86.6 239.63 86.63C238.13 86.65 236.59 86.53 235.24 85.89C233.89 85.25 232.74 84.02 232.54 82.53C232.34 81.04 233.34 79.4 234.82 79.18"
          stroke="#00002A"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M210.06 27.83C205.51 32.83 196.97 32.99 191.64 28.83C186.31 24.67 184.28 17.09 185.88 10.52C186.69 7.17996 188.68 3.75996 191.98 2.79996C195.4 1.79996 198.97 3.74996 201.67 6.07996C202.83 7.07996 203.95 8.21998 204.46 9.66998C205.39 12.31 204.07 15.2 202.46 17.49C197.17 25.04 188.31 29.98 179.1 30.51C174.01 30.81 168.39 29.53 165.32 25.46C162.94 22.29 162.56 17.92 163.66 14.11C164.76 10.3 167.19 6.99996 169.98 4.17996C171.09 3.05996 173.03 2.00998 174.06 3.19998C174.73 3.97998 174.43 5.17998 173.96 6.09998C172.06 9.79998 168.17 12.01 164.32 13.57C161.3 14.79 158.08 15.76 154.83 15.54C151.58 15.32 148.27 13.72 146.71 10.86C145.15 7.99995 145.86 3.87998 148.69 2.25998"
          stroke="#00002A"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M156.09 16.95C153.73 19.54 149.32 19.62 146.56 17.47C143.8 15.32 142.75 11.4 143.58 7.99997C144 6.26997 145.03 4.49997 146.74 3.99997C148.51 3.47997 150.36 4.48998 151.75 5.69998C152.35 6.21998 152.93 6.80997 153.2 7.55997C153.68 8.92997 153 10.42 152.16 11.61C149.42 15.52 144.84 18.07 140.07 18.35C137.44 18.5 134.53 17.84 132.94 15.74C131.71 14.1 131.51 11.84 132.08 9.86996C132.65 7.89996 133.91 6.18998 135.35 4.72998C135.92 4.14998 136.93 3.59997 137.46 4.21997C137.81 4.61997 137.65 5.24997 137.41 5.71997C136.43 7.62997 134.42 8.77996 132.42 9.57996C130.86 10.21 129.19 10.71 127.51 10.6C125.83 10.49 124.12 9.65996 123.31 8.17996C122.5 6.69996 122.87 4.56998 124.34 3.72998"
          stroke="#00002A"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M223.23 36.08C219.18 40.52 211.6 40.66 206.87 36.97C202.14 33.27 200.33 26.55 201.75 20.71C202.47 17.74 204.24 14.71 207.17 13.85C210.2 12.96 213.38 14.7 215.77 16.76C216.8 17.65 217.8 18.66 218.25 19.94C219.08 22.28 217.9 24.85 216.47 26.89C211.77 33.6 203.9 37.98 195.73 38.46C191.21 38.72 186.22 37.59 183.49 33.97C181.37 31.16 181.04 27.27 182.02 23.89C183 20.51 185.16 17.58 187.63 15.07C188.62 14.07 190.34 13.14 191.25 14.2C191.85 14.89 191.58 15.96 191.16 16.77C189.48 20.05 186.02 22.02 182.6 23.4C179.92 24.49 177.06 25.34 174.17 25.15C171.28 24.95 168.34 23.53 166.95 20.99C165.56 18.45 166.2 14.79 168.71 13.35"
          stroke="#00002A"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M175.3 26.42C173.21 28.72 169.28 28.79 166.83 26.88C164.38 24.97 163.45 21.49 164.18 18.47C164.55 16.93 165.47 15.36 166.98 14.92C168.55 14.46 170.19 15.36 171.43 16.43C171.96 16.89 172.48 17.41 172.71 18.08C173.14 19.29 172.53 20.62 171.79 21.67C169.36 25.14 165.29 27.41 161.06 27.66C158.72 27.8 156.14 27.21 154.73 25.34C153.63 23.88 153.46 21.87 153.97 20.12C154.48 18.37 155.59 16.85 156.87 15.56C157.38 15.04 158.27 14.56 158.75 15.11C159.06 15.47 158.92 16.02 158.71 16.44C157.84 18.14 156.05 19.16 154.28 19.87C152.89 20.43 151.41 20.88 149.92 20.77C148.42 20.67 146.91 19.93 146.19 18.62C145.47 17.31 145.8 15.41 147.1 14.67"
          stroke="#00002A"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M91.85 18.47C93.51 25.03 100.96 29.2 107.62 28.04C114.28 26.88 119.64 21.16 121.34 14.62C122.2 11.29 122.06 7.33995 119.61 4.92995C117.07 2.43995 112.99 2.46996 109.52 3.24996C108.02 3.58996 106.5 4.05996 105.37 5.08996C103.3 6.97996 103.11 10.15 103.45 12.93C104.56 22.09 110.03 30.62 117.9 35.43C122.25 38.09 127.81 39.62 132.43 37.47C136.03 35.8 138.42 32.12 139.24 28.24C140.06 24.36 139.48 20.31 138.35 16.5C137.9 14.98 136.69 13.14 135.21 13.71C134.25 14.08 133.95 15.28 133.93 16.31C133.86 20.46 136.24 24.25 138.9 27.44C140.99 29.94 143.37 32.31 146.34 33.65C149.31 34.99 152.98 35.1399 155.71 33.3599C158.44 31.5799 159.75 27.61 158.02 24.84"
          stroke="#00002A"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M144.56 34.34C145.42 37.73 149.27 39.89 152.72 39.29C156.17 38.69 158.94 35.73 159.82 32.34C160.27 30.62 160.19 28.57 158.92 27.33C157.61 26.04 155.5 26.06 153.7 26.46C152.93 26.63 152.14 26.88 151.55 27.41C150.48 28.39 150.38 30.03 150.55 31.47C151.12 36.21 153.96 40.62 158.03 43.11C160.28 44.49 163.16 45.28 165.55 44.17C167.41 43.31 168.65 41.4 169.08 39.4C169.51 37.4 169.2 35.29 168.62 33.33C168.39 32.55 167.76 31.59 167 31.89C166.5 32.08 166.35 32.7 166.34 33.24C166.3 35.39 167.54 37.35 168.91 39C169.99 40.3 171.22 41.52 172.76 42.21C174.3 42.9 176.2 42.98 177.61 42.06C179.02 41.14 179.7 39.08 178.81 37.65"
          stroke="#00002A"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M76.3401 19.54C77.8101 25.36 84.43 29.07 90.35 28.04C96.27 27.01 101.03 21.93 102.53 16.12C103.29 13.16 103.17 9.64995 100.99 7.51995C98.73 5.30995 95.1101 5.33996 92.0301 6.02996C90.7001 6.32996 89.3501 6.74998 88.3401 7.66998C86.5001 9.34998 86.33 12.17 86.63 14.63C87.61 22.76 92.4801 30.34 99.4601 34.62C103.32 36.98 108.26 38.34 112.37 36.44C115.56 34.96 117.69 31.69 118.42 28.25C119.15 24.81 118.63 21.1999 117.63 17.8299C117.23 16.4799 116.15 14.8499 114.84 15.3599C113.99 15.6899 113.72 16.76 113.7 17.67C113.64 21.36 115.76 24.72 118.12 27.56C119.97 29.78 122.09 31.8899 124.73 33.0799C127.37 34.2699 130.63 34.4 133.05 32.82C135.47 31.24 136.64 27.71 135.1 25.25"
          stroke="#00002A"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M123.16 33.63C123.92 36.64 127.35 38.56 130.41 38.03C133.47 37.5 135.94 34.87 136.71 31.86C137.11 30.33 137.04 28.51 135.91 27.41C134.74 26.27 132.87 26.28 131.27 26.64C130.58 26.79 129.88 27.01 129.36 27.49C128.41 28.36 128.32 29.82 128.48 31.09C128.99 35.3 131.51 39.22 135.12 41.43C137.12 42.65 139.67 43.36 141.8 42.37C143.45 41.6 144.55 39.91 144.93 38.13C145.31 36.35 145.04 34.48 144.52 32.74C144.31 32.04 143.76 31.2 143.08 31.46C142.64 31.63 142.5 32.18 142.49 32.66C142.46 34.57 143.55 36.31 144.78 37.78C145.74 38.93 146.83 40.02 148.2 40.64C149.57 41.26 151.25 41.32 152.51 40.51C153.77 39.7 154.37 37.86 153.57 36.59"
          stroke="#00002A"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M66.42 26.77C60.58 25.38 54.23 29.52 52.39 35.24C50.56 40.96 52.85 47.54 57.31 51.56C59.58 53.61 62.74 55.13 65.65 54.18C68.66 53.21 70.31 49.99 71.12 46.93C71.47 45.61 71.73 44.22 71.38 42.9C70.75 40.5 68.33 39.04 66 38.16C58.34 35.26 49.37 36.06 42.34 40.27C38.45 42.6 34.96 46.34 34.75 50.86C34.58 54.38 36.49 57.78 39.2 60.02C41.91 62.26 45.35 63.47 48.8 64.15C50.18 64.42 52.13 64.22 52.28 62.83C52.38 61.92 51.56 61.19 50.76 60.75C47.52 58.98 43.56 59.3 39.95 60.08C37.12 60.69 34.27 61.59 32 63.38C29.72 65.17 28.09 67.99 28.37 70.88C28.65 73.76 31.24 76.43 34.12 76.21"
          stroke="#00002A"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M233.77 25.91C239.61 24.52 245.96 28.66 247.8 34.38C249.64 40.1 247.34 46.68 242.88 50.7C240.61 52.75 237.45 54.27 234.54 53.32C231.53 52.35 229.88 49.13 229.07 46.07C228.72 44.75 228.46 43.36 228.81 42.04C229.44 39.64 231.86 38.18 234.19 37.3C241.85 34.4 250.82 35.2 257.85 39.41C261.74 41.74 265.23 45.48 265.44 50C265.61 53.52 263.7 56.92 260.99 59.16C258.28 61.4 254.84 62.61 251.39 63.29C250.01 63.56 248.06 63.36 247.91 61.97C247.81 61.06 248.63 60.33 249.43 59.89C252.67 58.12 256.63 58.44 260.24 59.22C263.07 59.83 265.92 60.73 268.19 62.52C270.46 64.31 272.1 67.13 271.82 70.02C271.54 72.9 268.95 75.57 266.07 75.35"
          stroke="#00002A"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M48.89 185.91L45.65 188.74"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M53.08 188.67L49.85 191.5"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M44.92 182.85L41.69 185.68"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M53 194.53L49.77 197.36"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M45 197.12L41.77 199.95"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M49.2 199.88L45.97 202.71"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M33.38 192.9L30.14 195.73"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M37.58 195.66L34.34 198.49"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M52.76 210.6L49.53 213.43"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M41.13 206.37L37.9 209.2"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M45.33 209.13L42.1 211.96"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M37.17 203.31L33.94 206.14"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M45.25 214.99L42.02 217.82"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M49.45 217.75L46.22 220.58"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M37.25 217.59L34.02 220.41"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M41.45 220.35L38.22 223.17"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M49.29 223.15L46.06 225.98"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M41.26 227.91L38.03 230.73"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M45.46 230.66L42.23 233.49"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M33.26 230.5L30.03 233.32"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M37.46 233.26L34.23 236.08"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M45.31 236.06L42.07 238.89"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M38.19 239.35L34.96 242.18"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M54.7 233.44L51.47 236.27"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M50.1 241.02L46.87 243.85"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M43.87 242.71L40.64 245.54"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M254.41 182.68L257.65 185.51"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M250.21 185.44L253.45 188.27"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M258.37 179.61L261.61 182.44"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M250.3 191.3L253.53 194.13"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M258.3 193.89L261.53 196.72"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M254.1 196.65L257.33 199.48"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M269.92 189.67L273.15 192.49"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M265.72 192.42L268.96 195.25"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M250.54 207.37L253.77 210.2"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M262.17 203.14L265.4 205.97"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M257.97 205.9L261.2 208.73"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M266.13 200.08L269.36 202.9"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M258.05 211.76L261.28 214.59"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M253.85 214.52L257.08 217.35"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M266.05 214.35L269.28 217.18"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M261.85 217.11L265.08 219.94"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M254.01 219.92L257.24 222.75"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M262.04 224.67L265.27 227.5"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M257.84 227.43L261.07 230.26"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M270.04 227.26L273.27 230.09"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M265.84 230.02L269.07 232.85"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M257.99 232.83L261.22 235.66"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M265.1 236.12L268.34 238.94"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M248.6 230.21L251.83 233.04"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M253.2 237.79L256.43 240.61"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M259.42 239.48L262.66 242.3"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M18.8901 137.56C18.8901 137.56 9.02003 164.67 15.36 195.06L26.2001 194.31C26.2001 194.31 24.39 149.27 34.34 132.79L18.88 137.56H18.8901Z"
          fill="#00002A"
        />
        <path
          d="M285.68 143.01C285.68 143.01 294.01 168.68 287.59 200.51L276.75 199.76C276.75 199.76 281.5 156.43 271.55 139.95L285.68 143.01Z"
          fill="#00002A"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2_1279"
            x1="151.75"
            y1="38.27"
            x2="151.75"
            y2="313.71"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F15A24" stop-opacity="0" />
            <stop offset="1" stop-color="#662D91" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_2_1279"
            x1="151.75"
            y1="38.27"
            x2="151.75"
            y2="313.71"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F15A24" stop-opacity="0" />
            <stop offset="1" stop-color="#662D91" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_2_1279"
            x1="221.81"
            y1="170.57"
            x2="164.62"
            y2="170.57"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F15A24" stop-opacity="0" />
            <stop offset="1" stop-color="#662D91" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_2_1279"
            x1="78.44"
            y1="170.25"
            x2="135.64"
            y2="170.25"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F15A24" stop-opacity="0" />
            <stop offset="1" stop-color="#662D91" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_2_1279"
            x1="184.806"
            y1="397.079"
            x2="135.272"
            y2="126.119"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F15A24" stop-opacity="0" />
            <stop offset="1" stop-color="#662D91" />
          </linearGradient>
          <linearGradient
            id="paint5_linear_2_1279"
            x1="184.806"
            y1="397.079"
            x2="135.272"
            y2="126.119"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F15A24" stop-opacity="0" />
            <stop offset="1" stop-color="#662D91" />
          </linearGradient>
          <linearGradient
            id="paint6_linear_2_1279"
            x1="85.7683"
            y1="53.7542"
            x2="224.611"
            y2="291.641"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F15A24" stop-opacity="0" />
            <stop offset="1" stop-color="#662D91" />
          </linearGradient>
          <linearGradient
            id="paint7_linear_2_1279"
            x1="85.7683"
            y1="53.7542"
            x2="224.611"
            y2="291.641"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F15A24" stop-opacity="0" />
            <stop offset="1" stop-color="#662D91" />
          </linearGradient>
        </defs>
      </svg>
    </m.div>
  );
}
