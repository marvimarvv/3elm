import { motion as m, useInView } from "framer-motion";

import { useRef } from "react";

export default function Marvin({ className }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }, { amount: 0.9 });

  return (
    <m.div className={className}>
      <svg
        width={276}
        height={280}
        viewBox="0 0 276 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ref={ref}
        style={{
          transform: isInView
            ? "rotate(0deg) scale(1)"
            : "rotate(720deg) scale(0)",
          opacity: isInView ? 1 : 0,
          transition: "all 3s cubic-bezier(.43,.2,.54,1.17) .5s",
          width: "100%",
        }}
      >
        <path
          d="M275.21 130.06C269.02 54.25 202.55 -2.18001 126.75 4.00999C50.94 10.2 -5.48995 76.6699 0.70005 152.47C2.16005 170.38 6.99003 187.22 14.52 202.4C38.83 251.45 91.28 283.25 149.17 278.52C199.1 274.44 240.62 244.22 261.39 202.4C272.15 180.73 277.34 155.94 275.23 130.06H275.21Z"
          fill="#F15A24"
        />
        <path
          style={{ mixBlendMode: "hue" }}
          opacity="0.5"
          d="M149.16 278.52C224.97 272.33 281.4 205.86 275.21 130.06C269.02 54.25 202.55 -2.18001 126.75 4.00999C108.84 5.46999 92 10.3 76.82 17.83C27.77 42.14 -4.02997 94.59 0.700031 152.48C4.78003 202.41 35 243.93 76.82 264.7C98.49 275.46 123.28 280.65 149.16 278.54V278.52Z"
          fill="url(#paint0_linear_2_872)"
        />
        <g style={{ mixBlendMode: "multiply" }} opacity="0.3">
          <path
            d="M117.6 154.15C117.6 154.15 140.86 128.06 118.14 109.05C111.36 103.38 102.79 100.21 93.9501 100.02C83.7301 99.8 70.21 102.99 64.87 119.81C62.61 126.92 62.5601 134.55 64.5001 141.75L66.2801 148.39C66.2801 148.39 95.11 132.54 117.6 154.15Z"
            fill="#F15A24"
          />
        </g>
        <g style={{ mixBlendMode: "multiply" }} opacity="0.3">
          <path
            d="M152.52 151.77C152.52 151.77 130.33 124.77 153.78 106.69C160.78 101.29 169.47 98.47 178.31 98.64C188.53 98.83 201.91 102.56 206.58 119.58C208.55 126.77 208.29 134.4 206.08 141.52L204.03 148.08C204.03 148.08 175.85 131.09 152.52 151.78V151.77Z"
            fill="#F15A24"
          />
        </g>
        <path
          d="M92.26 8.82002C60.4 20.06 21.87 45.06 6.32004 100.6C6.32004 100.6 138.78 45.69 270.54 105.04C270.54 105.04 269.64 99.88 266.76 91.79C259.71 71.99 240.78 34.66 194.04 12.69C162.22 -2.26998 125.41 -2.88999 92.25 8.81001L92.26 8.82002Z"
          fill="#00002A"
        />
        <path
          d="M109.25 63.53C120.95 61.95 143.64 59.86 166.17 63.3C170.49 63.96 174.39 60.61 174.39 56.24V56.09C174.39 52.92 172.31 50.1199 169.27 49.2199C159.59 46.3599 136.85 41.78 106.54 49.5C103.37 50.31 101.14 53.16 101.14 56.44C101.14 60.77 104.95 64.11 109.25 63.53Z"
          fill="#F15A24"
        />
        <path
          d="M109.25 63.53C120.95 61.95 143.64 59.86 166.17 63.3C170.49 63.96 174.39 60.61 174.39 56.24V56.09C174.39 52.92 172.31 50.1199 169.27 49.2199C159.59 46.3599 136.85 41.78 106.54 49.5C103.37 50.31 101.14 53.16 101.14 56.44C101.14 60.77 104.95 64.11 109.25 63.53Z"
          fill="#F15A24"
        />
        <path
          d="M64.91 145.19C69.92 162.24 81.57 169.2 98.62 164.19C115.67 159.18 132.44 145.08 127.43 128.03C122.42 110.98 100.22 101.23 83.17 106.24C66.12 111.25 59.9 128.14 64.92 145.19H64.91Z"
          fill="white"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M96.41 142.17C106.445 142.17 114.58 134.035 114.58 124C114.58 113.965 106.445 105.83 96.41 105.83C86.375 105.83 78.24 113.965 78.24 124C78.24 134.035 86.375 142.17 96.41 142.17Z"
          fill="#58753C"
        />
        <path
          d="M82.4601 121.36C84.8294 121.36 86.75 119.439 86.75 117.07C86.75 114.701 84.8294 112.78 82.4601 112.78C80.0908 112.78 78.17 114.701 78.17 117.07C78.17 119.439 80.0908 121.36 82.4601 121.36Z"
          fill="white"
        />
        <path
          d="M206.77 142.12C201.76 159.17 190.11 166.13 173.06 161.12C156.01 156.11 139.24 142.01 144.25 124.96C149.26 107.91 171.46 98.16 188.51 103.17C205.56 108.18 211.78 125.07 206.76 142.12H206.77Z"
          fill="white"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M175.27 139.1C185.305 139.1 193.44 130.965 193.44 120.93C193.44 110.895 185.305 102.76 175.27 102.76C165.235 102.76 157.1 110.895 157.1 120.93C157.1 130.965 165.235 139.1 175.27 139.1Z"
          fill="#58753C"
        />
        <path
          d="M189.22 118.29C191.589 118.29 193.51 116.369 193.51 114C193.51 111.631 191.589 109.71 189.22 109.71C186.851 109.71 184.93 111.631 184.93 114C184.93 116.369 186.851 118.29 189.22 118.29Z"
          fill="white"
        />
        <path
          d="M162.22 105.99C162.22 105.99 176.67 94.83 198.07 108.28C198.07 108.28 208.75 115.15 208.5 129.66C208.5 129.66 212.52 102.5 179.06 100.3C174.1 99.97 169.14 101.28 164.91 103.88C163.83 104.54 162.87 105.26 162.22 105.99Z"
          fill="#00002A"
        />
        <path
          d="M109.02 109C109.02 109 94.57 97.84 73.17 111.29C73.17 111.29 62.49 118.16 62.74 132.67C62.74 132.67 58.72 105.51 92.18 103.31C97.14 102.98 102.1 104.29 106.33 106.89C107.41 107.55 108.37 108.27 109.02 109Z"
          fill="#00002A"
        />
        <path
          d="M164.59 93.86C165.09 94.96 166.38 95.44 167.55 95.71C173.63 97.11 179.96 95.76 186.15 94.95C192.34 94.14 199.08 93.99 204.31 97.39C204.97 97.82 205.77 98.3199 206.48 97.9699C206.8 97.8099 207.02 97.51 207.15 97.18C207.68 95.89 206.99 94.35 205.88 93.49C204.77 92.63 203.37 92.29 202 92C199.04 91.36 160.53 85.04 164.58 93.87L164.59 93.86Z"
          fill="#00002A"
        />
        <path
          d="M103.58 94.4099C103.08 95.5099 101.79 95.99 100.62 96.26C94.5401 97.66 88.2101 96.31 82.0201 95.5C75.8301 94.69 69.09 94.54 63.86 97.94C63.2 98.37 62.4001 98.87 61.6901 98.52C61.3701 98.36 61.1501 98.06 61.0201 97.73C60.4901 96.44 61.18 94.9 62.29 94.0399C63.4 93.1799 64.8 92.84 66.17 92.55C69.13 91.91 107.64 85.59 103.59 94.42L103.58 94.4099Z"
          fill="#00002A"
        />
        <path
          d="M112.68 72.2C113.961 72.2 115 71.1613 115 69.88C115 68.5987 113.961 67.56 112.68 67.56C111.399 67.56 110.36 68.5987 110.36 69.88C110.36 71.1613 111.399 72.2 112.68 72.2Z"
          fill="#F15A24"
        />
        <path
          d="M122.38 71.82C123.656 71.82 124.69 70.7858 124.69 69.51C124.69 68.2342 123.656 67.2 122.38 67.2C121.104 67.2 120.07 68.2342 120.07 69.51C120.07 70.7858 121.104 71.82 122.38 71.82Z"
          fill="#F15A24"
        />
        <path
          d="M6.75004 183.2C6.75004 183.2 19.9801 169.05 26.8901 167.19C26.8901 167.19 16.3401 123.74 26.8901 93.63L6.33002 100.69C6.33002 100.69 -7.36996 132.4 6.75004 183.21V183.2Z"
          fill="url(#paint1_linear_2_872)"
        />
        <path
          d="M162.27 91.8L162.67 95.84"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M159.88 92.09L160.28 96.13"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M107.68 91.6L107.63 95.66"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M105.27 91.62L105.22 95.68"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M137.92 208.61C152.036 208.61 163.48 197.166 163.48 183.05C163.48 168.934 152.036 157.49 137.92 157.49C123.804 157.49 112.36 168.934 112.36 183.05C112.36 197.166 123.804 208.61 137.92 208.61Z"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M137.92 193.19C143.52 193.19 148.06 188.65 148.06 183.05C148.06 177.45 143.52 172.91 137.92 172.91C132.32 172.91 127.78 177.45 127.78 183.05C127.78 188.65 132.32 193.19 137.92 193.19Z"
          fill="#00002A"
        />
        <path
          d="M112.58 186.35C112.58 186.35 111.13 214.09 142.37 208.48C142.37 208.48 118.53 212.12 112.58 186.35Z"
          fill="#00002A"
        />
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M122.72 155.54L122.67 159.6"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M118.93 157.68L117.57 161.51"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M148.74 152.95L148.8 157.01"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M152.54 155.09L153.89 158.91"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M106.58 174.99L106.53 179.05"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M102.79 177.12L101.43 180.95"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M94.41 175.26L97.26 178.15"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M93.26 179.45L95.0201 183.11"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M86.83 175.12L86.7801 179.18"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M83.04 177.26L81.69 181.09"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M74.66 175.39L77.51 178.28"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M73.51 179.59L75.2801 183.24"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M73.39 192.02L73.31 198.38"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M67.45 195.37L65.33 201.36"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M54.33 192.44L58.79 196.97"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M52.5301 199.01L55.3 204.74"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M42.47 192.23L42.39 198.59"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M36.54 195.58L34.42 201.57"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M23.42 192.65L27.88 197.18"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M21.62 199.22L24.38 204.94"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M33.95 212.19L34 216.25"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M37.74 206.65L39.1 210.48"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M46.13 204.78L43.2801 207.67"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M47.2801 208.98L45.51 212.63"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M53.7 212.32L53.75 216.38"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M57.49 214.46L58.85 218.29"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M65.87 212.59L63.0301 215.48"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M67.0201 216.79L65.26 220.44"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M40.08 219.12L40.16 225.48"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M48.8401 219.23L50.9601 225.23"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M71.66 224.79L67.2 229.32"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M73.4601 231.36L70.69 237.09"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M100.86 184.73L100.78 191.09"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M94.93 188.08L92.81 194.07"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M81.8 185.15L86.26 189.68"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M80.01 191.72L82.7701 197.45"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M72.44 208.38L73.8 212.21"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M80.83 206.51L77.98 209.4"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M81.97 210.71L80.2101 214.36"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M60.2801 239.31L60.36 245.66"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M66.2101 242.65L68.3401 248.64"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M79.3401 239.72L74.88 244.25"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M81.13 246.29L78.37 252.02"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M149.95 232.37L147.82 235.83"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M142.15 228.78L144.32 232.21"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M140.14 232.64L141.1 236.58"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M134.78 227.05L133.87 231.01"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M130.62 228.34L128.48 231.79"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M122.82 224.74L124.99 228.17"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M120.81 228.6L121.76 232.55"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M118.07 240.73L116.65 246.93"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M111.56 242.75L108.22 248.16"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M99.35 237.12L102.75 242.48"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M96.2 243.16L97.7 249.34"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M94.54 256.42L93.73 260.4"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M97.79 259.3L98.31 263.33"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M106.38 259.25L102.99 261.47"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M106.62 263.59L104.12 266.79"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M146.46 239.4L145.04 245.6"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M139.95 241.42L136.61 246.83"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M127.74 235.79L131.15 241.16"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M124.6 241.83L126.1 248.01"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M126.19 257.98L126.7 262"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M134.78 257.92L131.38 260.15"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M135.01 262.27L132.51 265.47"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M34.88 185.41L33.11 189.07"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M105.38 208.98L107.15 212.63"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M230.49 182.23L230.57 188.58"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M236.42 185.57L238.55 191.56"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M249.55 182.64L245.09 187.17"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M251.34 189.22L248.58 194.94"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M250.18 202.52L250.12 206.58"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M246.38 204.66L245.03 208.49"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M238 202.79L240.85 205.68"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M236.85 206.99L238.62 210.64"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M232.22 214.99L236.68 219.52"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M230.42 221.57L233.19 227.29"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M203.01 174.94L203.09 181.29"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M208.95 178.28L211.07 184.27"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M163.49 208.48L159.03 213.01"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M223.87 181.93L221.1 187.65"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M218.91 197.37L217.55 201.2"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M210.53 195.5L213.38 198.39"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M153.93 222.58L156.06 226.03"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M161.73 218.98L159.55 222.41"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M163.74 222.84L162.78 226.79"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M169.1 217.25L170.01 221.21"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M173.26 218.54L175.39 221.99"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M181.06 214.94L178.88 218.37"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M183.07 218.8L182.11 222.75"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M185.81 230.93L187.23 237.13"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M192.32 232.95L195.66 238.36"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M204.53 227.32L201.12 232.69"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M207.67 233.36L206.17 239.54"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M209.34 246.62L210.15 250.6"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M206.08 249.51L205.57 253.53"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M197.49 249.45L200.89 251.67"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M197.26 253.79L199.76 256.99"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M157.42 229.61L158.84 235.8"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M163.92 231.62L167.26 237.03"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M176.13 225.99L172.73 231.36"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M179.28 232.04L177.78 238.21"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M177.69 248.18L177.17 252.21"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M169.1 248.12L172.5 250.35"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M168.86 252.47L171.36 255.67"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M184.24 186.47L182.47 190.13"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M203.99 186.61L202.22 190.26"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M204.11 199.04L204.19 205.4"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M176.63 191.75L176.72 198.11"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M182.57 195.1L184.69 201.09"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M195.69 192.17L191.23 196.7"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M197.49 198.74L194.73 204.47"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M192.53 214.19L191.18 218.02"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M178.49 204.64L181.34 207.54"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M92.22 216.59L90.45 220.24"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M111.97 216.72L110.2 220.37"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M84.61 221.87L84.69 228.22"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M90.55 225.21L92.67 231.2"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M103.67 222.28L99.2101 226.81"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M105.47 228.85L102.7 234.58"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M85.5901 233.54L83.82 237.19"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M48.63 229.38L47.82 233.36"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M51.7801 231.85L52.36 236.3"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M60.47 226.96L57.07 229.18"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M60.7101 231.3L58.2101 234.5"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M164.86 264.1L161.52 269.51"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M152.65 258.47L156.06 263.84"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M88.1 251L86.3401 254.66"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M156.97 243.64L152.51 248.17"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M158.77 250.21L156.01 255.93"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M226.28 201.65L224.51 205.31"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M218.67 206.93L218.75 213.29"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M224.61 210.28L226.73 216.27"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M220.53 219.82L223.38 222.71"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M175.95 172.75L174.18 176.41"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M171.06 204.8L169.29 208.46"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M168.35 178.03L168.43 184.39"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M174.28 181.38L176.4 187.37"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M187.4 178.45L182.94 182.98"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M209.03 209.11L207.26 212.77"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M201.43 214.39L201.51 220.75"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M207.36 217.74L209.48 223.73"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M188.83 246.68L187.06 250.34"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M181.23 251.96L181.31 258.32"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M215.44 232.68L217.56 238.68"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M130.46 216.19L128.28 219.62"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M132.47 220.05L131.51 224"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M137.83 214.46L138.74 218.42"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M141.99 215.75L144.12 219.21"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M149.79 212.16L147.61 215.58"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M151.8 216.02L150.84 219.96"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M113.06 226.7L110.88 230.13"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M115.06 230.56L114.11 234.51"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M61.0901 179.38L61.04 183.44"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M57.3 181.51L55.94 185.34"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M48.91 179.64L51.76 182.54"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M47.76 183.84L49.5301 187.5"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M100.18 196.73L98.41 200.39"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M92.57 202.01L92.6501 208.37"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M98.51 205.36L100.63 211.35"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M122.54 215.76L118.08 220.29"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M118.66 254.03L114.2 258.55"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.3">
          <path
            d="M120.46 260.6L117.69 266.32"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <path
          d="M138.03 140.21C138.03 140.21 130.24 148.17 129.55 154.02C129.55 154.02 134.21 153.33 139.12 151"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          style={{ mixBlendMode: "multiply" }}
          opacity="0.48"
          d="M72.97 138.33C69.64 127.01 71.27 115.77 77.72 108.02C64.82 114.73 60.45 129.69 64.89 144.79C69.9 161.84 81.55 168.8 98.6 163.79C106.7 161.41 114.73 156.97 120.4 151.15C116.16 153.83 111.43 155.93 106.68 157.33C89.63 162.34 77.98 155.38 72.97 138.33Z"
          fill="url(#paint2_linear_2_872)"
        />
        <path
          style={{ mixBlendMode: "multiply" }}
          opacity="0.48"
          d="M198.71 136.25C202.04 124.93 200.41 113.69 193.96 105.94C206.86 112.65 211.23 127.61 206.79 142.71C201.78 159.76 190.13 166.72 173.08 161.71C164.98 159.33 156.95 154.89 151.28 149.07C155.52 151.75 160.25 153.85 165 155.25C182.05 160.26 193.7 153.3 198.71 136.25Z"
          fill="url(#paint3_linear_2_872)"
        />
        <path
          d="M249.55 96.59C249.55 96.59 258.94 134.87 248.58 167.26C248.58 167.26 261.94 176.43 267.66 187.64C267.66 187.64 283.88 147.14 270.55 105.12L249.55 96.58V96.59Z"
          fill="url(#paint4_linear_2_872)"
        />
        <mask
          id="mask0_2_872"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="163"
          y="183"
          width="82"
          height="66"
        >
          <path
            d="M223.38 248.72C223.38 248.72 201 220.26 178.88 212.61C177.48 212.12 176.43 210.88 176.33 209.39C176.25 208.21 176.75 206.87 178.8 205.83C178.8 205.83 176.92 200.3 182.81 200.32C182.81 200.32 180.19 196.96 186.31 193.85C186.31 193.85 176.32 189.65 165.4 188.37C162.98 188.09 162.49 184.81 164.72 183.85C165 183.73 165.31 183.61 165.65 183.51C165.65 183.51 187.88 184.46 213.45 200.02C213.45 200.02 221.03 197.99 230.31 210.03C230.31 210.03 240.98 224.65 244.03 229.85C244.03 229.85 234.72 242.59 223.37 248.72H223.38Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0_2_872)">
          <path
            d="M14.51 191.01C-14.29 120.62 19.43 40.2 89.83 11.41C160.22 -17.39 240.64 16.33 269.43 86.73C276.24 103.37 279.55 120.56 279.71 137.5C280.24 192.25 247.87 244.34 194.11 266.33C147.75 285.3 97.04 277.14 59.59 249.25C40.18 234.8 24.34 215.04 14.51 191.01Z"
            fill="#F15A24"
          />
          <path
            style={{ mixBlendMode: "hue" }}
            opacity="0.5"
            d="M269.43 86.7199C298.23 157.11 264.51 237.53 194.11 266.32C123.72 295.12 43.3 261.4 14.51 191C7.70004 174.36 4.39004 157.17 4.23004 140.23C3.70004 85.4799 36.07 33.39 89.83 11.4C136.19 -7.57 186.9 0.589951 224.35 28.4799C243.76 42.93 259.6 62.6899 269.43 86.7199Z"
            fill="url(#paint5_linear_2_872)"
          />
          <path
            d="M14.51 191.01C-14.29 120.62 19.43 40.2 89.83 11.41C160.22 -17.39 240.64 16.33 269.43 86.73C276.24 103.37 279.55 120.56 279.71 137.5C280.24 192.25 247.87 244.34 194.11 266.33C147.75 285.3 97.04 277.14 59.59 249.25C40.18 234.8 24.34 215.04 14.51 191.01Z"
            fill="#F15A24"
          />
          <path
            style={{ mixBlendMode: "hue" }}
            opacity="0.5"
            d="M269.43 86.7199C298.23 157.11 264.51 237.53 194.11 266.32C123.72 295.12 43.3 261.4 14.51 191C7.70004 174.36 4.39004 157.17 4.23004 140.23C3.70004 85.4799 36.07 33.39 89.83 11.4C136.19 -7.57 186.9 0.589951 224.35 28.4799C243.76 42.93 259.6 62.6899 269.43 86.7199Z"
            fill="url(#paint6_linear_2_872)"
          />
        </g>
        <path
          d="M223.33 248.69C223.33 248.69 200.95 220.23 178.83 212.58C177.43 212.09 176.38 210.85 176.28 209.36C176.2 208.18 176.7 206.84 178.75 205.8C178.75 205.8 176.87 200.27 182.76 200.29C182.76 200.29 180.14 196.93 186.26 193.82C186.26 193.82 176.27 189.62 165.35 188.34C162.93 188.06 162.44 184.78 164.67 183.82C164.95 183.7 165.26 183.58 165.6 183.48C165.6 183.48 187.83 184.43 213.4 199.99C213.4 199.99 220.98 197.96 230.26 210C230.26 210 240.93 224.62 243.98 229.82"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M182.76 200.3L188.73 203.1"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M178.75 205.81C178.75 205.81 186.11 208.69 188.72 209.61"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M213.4 199.99L221.22 205.88"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M186.26 193.84C186.26 193.84 193.41 196.78 197.22 198.92"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M131.3 71.65C132.581 71.65 133.62 70.6113 133.62 69.33C133.62 68.0487 132.581 67.01 131.3 67.01C130.019 67.01 128.98 68.0487 128.98 69.33C128.98 70.6113 130.019 71.65 131.3 71.65Z"
          fill="#F15A24"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2_872"
            x1="137.95"
            y1="3.54999"
            x2="137.95"
            y2="278.99"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F15A24" stop-opacity="0" />
            <stop offset="1" stop-color="#662D91" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_2_872"
            x1="13.62"
            y1="183.2"
            x2="13.62"
            y2="93.63"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F15A24" stop-opacity="0" />
            <stop offset="0.99" stop-color="#FFFF00" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_2_872"
            x1="63.21"
            y1="136.7"
            x2="120.41"
            y2="136.7"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F15A24" stop-opacity="0" />
            <stop offset="1" stop-color="#662D91" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_2_872"
            x1="208.47"
            y1="134.62"
            x2="151.28"
            y2="134.62"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F15A24" stop-opacity="0" />
            <stop offset="1" stop-color="#662D91" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_2_872"
            x1="262.19"
            y1="187.65"
            x2="262.19"
            y2="96.59"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F15A24" stop-opacity="0" />
            <stop offset="0.99" stop-color="#FFFF00" />
          </linearGradient>
          <linearGradient
            id="paint5_linear_2_872"
            x1="79.5488"
            y1="16.0589"
            x2="204.253"
            y2="261.652"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F15A24" stop-opacity="0" />
            <stop offset="1" stop-color="#662D91" />
          </linearGradient>
          <linearGradient
            id="paint6_linear_2_872"
            x1="79.5488"
            y1="16.0589"
            x2="204.253"
            y2="261.652"
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
