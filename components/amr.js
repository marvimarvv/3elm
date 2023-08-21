import { motion as m, useInView } from "framer-motion";

import { useRef } from "react";

export default function Amr({ className }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }, { amount: 0.9 });

  return (
    <m.div className={className}>
      <svg
        width={278}
        height={305}
        viewBox="0 0 278 305"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ref={ref}
        style={{
          transform: isInView
            ? "rotate(0deg) scale(1)"
            : "rotate(720deg) scale(0)",
          opacity: isInView ? 1 : 0,
          transition: "all 1.5s cubic-bezier(.43,.2,.54,1.17) .4s",
          width: "100%",
        }}
      >
        <path
          d="M276.83 158.87C272.71 82.92 207.8 24.7 131.85 28.82C55.9 32.94 -2.32003 97.85 1.79997 173.8C2.76997 191.75 7.13998 208.7 14.25 224.08C37.22 273.78 88.78 306.99 146.77 303.84C196.79 301.12 239.12 272.04 261.02 230.8C272.37 209.43 278.23 184.79 276.82 158.86L276.83 158.87Z"
          fill="#F15A24"
        />
        <path
          style={{ mixBlendMode: "hue" }}
          opacity="0.5"
          d="M1.81002 173.8C5.93002 249.75 70.8401 307.97 146.79 303.85C222.74 299.73 280.96 234.82 276.84 158.87C275.87 140.92 271.5 123.97 264.39 108.59C241.42 58.89 189.86 25.68 131.87 28.83C81.85 31.55 39.52 60.63 17.62 101.87C6.27002 123.24 0.410034 147.88 1.82003 173.81L1.81002 173.8Z"
          fill="url(#paint0_linear_2_583)"
        />
        <path
          d="M276.83 158.87C272.71 82.92 207.8 24.7 131.85 28.82C55.9 32.94 -2.32003 97.85 1.79997 173.8C2.76997 191.75 7.13998 208.7 14.25 224.08C37.22 273.78 88.78 306.99 146.77 303.84C196.79 301.12 239.12 272.04 261.02 230.8C272.37 209.43 278.23 184.79 276.82 158.86L276.83 158.87Z"
          fill="#F15A24"
        />
        <path
          style={{ mixBlendMode: "hue" }}
          opacity="0.5"
          d="M1.81002 173.8C5.93002 249.75 70.8401 307.97 146.79 303.85C222.74 299.73 280.96 234.82 276.84 158.87C275.87 140.92 271.5 123.97 264.39 108.59C241.42 58.89 189.86 25.68 131.87 28.83C81.85 31.55 39.52 60.63 17.62 101.87C6.27002 123.24 0.410034 147.88 1.82003 173.81L1.81002 173.8Z"
          fill="url(#paint1_linear_2_583)"
        />
        <path
          d="M165.22 131.17C165.95 133.12 168.11 134.11 170.1 134.72C180.42 137.87 191.49 136.31 202.26 135.66C213.03 135.01 224.67 135.57 233.28 142.08C234.36 142.9 235.69 143.86 236.95 143.34C237.52 143.11 237.93 142.6 238.2 142.06C239.28 139.9 238.26 137.16 236.47 135.54C234.68 133.92 232.28 133.17 229.96 132.5C224.93 131.04 159.31 115.45 165.21 131.17H165.22Z"
          fill="#00002A"
        />
        <path
          d="M162.75 127.73L163.16 133.65"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M159.92 130.63L160.5 134.01"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M107.79 128.87C107.13 130.71 105.13 131.67 103.26 132.27C93.63 135.38 83.23 134.07 73.12 133.62C63.01 133.17 52.11 133.86 44.13 140.08C43.13 140.86 41.89 141.78 40.71 141.32C40.18 141.11 39.78 140.64 39.52 140.13C38.48 138.12 39.39 135.54 41.05 133.99C42.71 132.44 44.94 131.71 47.11 131.04C51.81 129.6 113.1 114.04 107.8 128.87H107.79Z"
          fill="#00002A"
        />
        <path
          d="M128.36 152.34L147.01 152.22C146.95 151.4 146.39 150.56 146.39 149.73C146.39 147.6 145.81 145.44 146.73 143.6L128.8 144.19L128.38 143.86C128.83 146.35 127.97 148.53 127.97 150.96C127.97 151.4 127.99 152.27 127.61 152.35C127.25 152.42 127.98 152.35 128.35 152.35L128.36 152.34Z"
          fill="#00002A"
        />
        <path
          d="M146.58 161.5C146.58 161.5 146.58 161.51 146.58 161.52L146.75 161.49H146.58V161.5Z"
          fill="white"
          stroke="#A91E28"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M149.45 191.24L152.29 194.1"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M153.82 197.19L156.66 200.05"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M164.7 197.21L167.54 200.07"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M162.71 203.63L165.73 206.68"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M170.5 206.78L173.53 209.83"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M183.19 196.98L186.03 199.84"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M182.4 203.39L185.42 206.44"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M186.18 198.79L189.01 201.66"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M162.48 209.03L165.5 212.08"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M91.74 191.84L91.04 195.81"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M96.43 191.38L95.74 195.35"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M182.06 209.24L185.09 212.29"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M177.68 211.7L180.7 214.75"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M189.86 212.4L192.88 215.45"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M185.48 214.85L188.5 217.9"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M197.37 211.46L200.4 214.51"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M205.93 206.23L208.95 209.28"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M18.45 192.05L15.26 194.93"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M22.69 194.74L19.51 197.62"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M181.17 225.29L184.19 228.34"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M176.79 227.74L179.81 230.79"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M193.07 221.89L196.09 224.95"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M188.68 224.35L191.71 227.4"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M197.24 219.12L200.26 222.17"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M22.62 200.14L19.44 203.02"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M188.35 230.2L191.37 233.25"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M183.96 232.66L186.99 235.71"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M196.15 233.36L199.17 236.41"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M191.76 235.81L194.78 238.86"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M208.04 229.96L211.07 233.01"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M203.66 232.42L206.68 235.47"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M212.21 227.19L215.23 230.24"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M183.74 238.06L186.76 241.11"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M27.23 185.64L24.04 188.52"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M48.46 204.12L45.28 207"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M52.71 206.81L49.52 209.69"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M36.77 200.08L33.58 202.96"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M41.01 202.77L37.83 205.65"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M32.76 197.08L29.57 199.96"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M29.62 193.43L26.44 196.31"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M41.03 208.63L37.84 211.51"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M45.27 211.32L42.09 214.2"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M33.07 211.36L29.89 214.24"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M37.32 214.05L34.13 216.93"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M21.38 207.32L18.19 210.2"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M25.62 210.01L22.44 212.89"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M17.37 204.32L14.18 207.2"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M72.91 239.76L70.8 243.51"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M218.42 238.56L215.4 235.51"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M160.93 250.12L163.95 253.17"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M156.54 252.57L159.57 255.62"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M165.1 247.34L168.12 250.39"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M136.62 258.21L139.64 261.26"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M156.21 258.43L159.23 261.48"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M151.82 260.88L154.85 263.93"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M164 261.58L167.03 264.63"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M159.62 264.03L162.64 267.08"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M175.9 258.19L178.93 261.24"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M171.52 260.64L174.54 263.69"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M183.09 258.46L180.07 255.41"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M151.6 266.28L154.62 269.33"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M191.41 243.36L194.43 246.41"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M187.03 245.82L190.05 248.87"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M199.21 246.52L202.23 249.57"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M194.82 248.97L197.85 252.02"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M211.1 243.12L214.13 246.17"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M206.72 245.58L209.74 248.63"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M215.27 240.35L218.29 243.4"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M186.8 251.22L189.82 254.27"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M206.38 251.43L209.41 254.48"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M202 253.89L205.02 256.94"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M214.18 254.58L217.2 257.63"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M209.8 257.04L212.82 260.09"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M226.08 251.19L229.1 254.24"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M221.69 253.65L224.72 256.7"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M230.25 248.42L233.27 251.47"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M201.77 259.28L204.8 262.33"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M197.69 264.32L200.72 267.37"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M193.31 266.78L196.33 269.83"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M205.49 267.48L208.51 270.53"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M201.11 269.93L204.13 272.98"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M217.39 264.08L220.41 267.13"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M213 266.54L216.03 269.59"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M221.56 261.31L224.58 264.36"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M193.08 272.18L196.11 275.23"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M212.67 272.39L215.69 275.44"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M208.28 274.85L211.31 277.9"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M177.51 241.71L180.53 244.76"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M193.66 255L196.68 258.05"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M189.28 257.45L192.3 260.5"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M186.46 265.09L189.48 268.14"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M193.94 279.42L196.96 282.47"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M189.55 281.87L192.58 284.92"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M198.1 276.64L201.13 279.69"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M236.26 195.36L239.28 198.41"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M244.06 198.51L247.08 201.56"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M236.03 200.76L239.06 203.81"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M231.95 205.8L234.98 208.85"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M227.57 208.25L230.59 211.3"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M239.75 208.95L242.77 212"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M235.37 211.4L238.39 214.45"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M251.65 205.56L254.67 208.61"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M247.26 208.01L250.29 211.06"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M255.81 202.78L258.84 205.83"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M227.34 213.65L230.36 216.7"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M246.93 213.87L249.95 216.92"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M242.54 216.32L245.57 219.37"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M254.72 217.02L257.75 220.07"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M250.34 219.47L253.36 222.52"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M83.41 236.68L81.3 240.42"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M88.29 237.88L86.18 241.63"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M52.13 214.14L48.95 217.02"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M242.32 221.72L245.34 224.77"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M216.26 219.33L213.23 216.28"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M223.53 198.92L226.56 201.97"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M218.41 216.94L221.44 219.99"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M221.74 213.47L224.77 216.52"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M216.3 224.28L219.32 227.33"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M228.2 220.89L231.22 223.94"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M223.81 223.34L226.84 226.39"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M232.36 218.11L235.39 221.16"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M219.51 233.78L222.53 236.83"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M223.67 231L226.7 234.05"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M249.99 227.03L253.01 230.08"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M245.6 229.48L248.63 232.53"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M113.85 260.85L116.87 263.9"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M109.46 263.31L112.48 266.36"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M125.74 257.46L128.77 260.51"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M121.36 259.92L124.38 262.97"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M160.74 280.18L163.76 283.23"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M245.38 234.88L248.4 237.93"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M121.02 265.77L124.05 268.82"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M116.64 268.22L119.66 271.27"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M128.82 268.92L131.84 271.97"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M124.44 271.38L127.46 274.43"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M140.72 265.53L143.74 268.58"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M136.33 267.99L139.36 271.04"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M144.89 262.75L147.91 265.8"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M236.09 225.37L239.11 228.42"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M108.3 269.33L111.32 272.38"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M171.02 268.93L174.05 271.98"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M166.64 271.38L169.66 274.43"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M178.54 267.99L181.56 271.04"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M178.2 273.85L181.23 276.9"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M173.82 276.3L176.84 279.35"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M186 277L189.02 280.05"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M181.62 279.45L184.64 282.5"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M173.59 281.7L176.61 284.75"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M169.51 286.74L172.54 289.79"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M180.04 285.63L183.07 288.68"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M177.61 247.94L180.64 250.99"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M57.32 221.06L56.07 225.17"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M45.22 223.62L43.97 227.73"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M50.24 223.74L48.99 227.85"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M40.24 223.11L38.99 227.22"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M53.27 228.76L52.02 232.87"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M58.3 228.88L57.05 232.99"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M47.85 235.19L46.6 239.3"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M52.88 235.31L51.63 239.42"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M35.75 237.75L34.5 241.86"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M40.77 237.87L39.52 241.98"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M30.77 237.24L29.52 241.35"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M61.02 233.55L59.77 237.66"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M66.98 236.1L65.73 240.21"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M61.56 242.53L60.31 246.64"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M66.58 242.65L65.33 246.76"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M49.45 245.09L48.21 249.2"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M54.48 245.21L53.23 249.32"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M44.47 244.58L43.23 248.69"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M57.51 250.23L56.26 254.34"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M62.53 250.35L61.28 254.46"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M52.09 256.66L50.84 260.77"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M57.11 256.78L55.86 260.89"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M65.26 255.02L64.01 259.12"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M77.35 247.69L76.1 251.8"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M72.37 247.18L71.12 251.29"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M60.95 263.29L59.7 267.4"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M65.98 263.42L64.73 267.52"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M72.47 255.33L71.22 259.44"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M160.63 274.63L163.65 277.68"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M152.6 276.88L155.63 279.93"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M148.52 281.92L151.55 284.97"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M144.14 284.37L147.16 287.42"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M156.32 285.07L159.34 288.12"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M151.94 287.52L154.96 290.57"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M143.91 289.77L146.93 292.82"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M159.11 292.44L162.14 295.49"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M141.66 276.69L144.68 279.74"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M137.28 279.15L140.3 282.2"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M145.83 273.92L148.85 276.97"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M121.14 292.41L124.16 295.46"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M133.03 289.02L136.06 292.07"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M128.65 291.48L131.67 294.53"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M137.2 286.25L140.22 289.3"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M152.18 294.31L155.2 297.36"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M90.44 251.45L89.33 255.6"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M86.11 248.9L85 253.05"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M99.38 260L98.27 264.15"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M95.04 257.46L93.94 261.61"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M103.88 262.2L102.77 266.35"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M89.82 260.13L88.72 264.27"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M85.49 257.58L84.38 261.73"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M91.04 268.45L89.93 272.6"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M86.71 265.9L85.6 270.05"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M80.32 250.94L79.22 255.09"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M129.26 277.5L132.28 280.55"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M137.59 157.99C137.59 157.99 127.03 174.13 126.06 185.33C126 186.01 126.69 186.51 127.32 186.23C129.84 185.13 135.55 182.38 141.33 177.86"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M166.89 157.96C165.64 173.56 170.01 188.04 185.14 189.26C200.27 190.47 222.82 181.22 224.07 165.62C225.32 150.02 214.06 136.39 198.93 135.18C183.8 133.97 168.14 142.37 166.89 157.97V157.96Z"
          fill="white"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M170.43 160.14C169.22 171.86 176.22 181.87 186.06 182.5C195.9 183.13 192.82 173.51 194.02 161.79C195.23 150.07 200.26 140.68 190.42 140.05C180.58 139.42 171.63 148.42 170.43 160.14Z"
          fill="#00002A"
        />
        <path
          d="M194.96 152.84C196.893 152.84 198.46 151.273 198.46 149.34C198.46 147.407 196.893 145.84 194.96 145.84C193.027 145.84 191.46 147.407 191.46 149.34C191.46 151.273 193.027 152.84 194.96 152.84Z"
          fill="white"
        />
        <path
          style={{ mixBlendMode: "multiply" }}
          opacity="0.48"
          d="M198.93 135.22C197.48 135.1 196.02 135.08 194.57 135.14C208.09 137.85 217.73 150.64 216.57 165.14C215.44 179.28 196.81 188.2 182.07 188.85C183.04 189.07 184.07 189.22 185.15 189.31C200.28 190.52 222.83 181.27 224.08 165.67C225.33 150.07 214.07 136.44 198.94 135.23L198.93 135.22Z"
          fill="url(#paint2_linear_2_583)"
        />
        <path
          d="M205 136.6C205 136.6 220.26 138.98 224.45 159.95C224.45 159.95 226.45 170.51 217.39 178.79C217.39 178.79 236.41 165.46 218.3 143.63C215.62 140.4 211.93 138.11 207.87 137.02C206.83 136.74 205.83 136.57 205.01 136.6H205Z"
          fill="#00002A"
        />
        <path
          d="M53.01 160C52.85 175.65 58.22 189.79 73.4 189.95C88.58 190.1 110.42 179.3 110.58 163.65C110.74 148 98.56 135.19 83.38 135.03C68.2 134.88 53.17 144.34 53.01 159.99V160Z"
          fill="white"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M56.7 161.93C56.31 173.71 63.99 183.21 73.85 183.15C83.71 183.09 79.97 173.72 80.35 161.94C80.74 150.16 85.1 140.44 75.24 140.5C65.38 140.56 57.08 150.16 56.7 161.93Z"
          fill="#00002A"
        />
        <path
          d="M80.41 152.95C82.343 152.95 83.91 151.383 83.91 149.45C83.91 147.517 82.343 145.95 80.41 145.95C78.477 145.95 76.91 147.517 76.91 149.45C76.91 151.383 78.477 152.95 80.41 152.95Z"
          fill="white"
        />
        <path
          style={{ mixBlendMode: "multiply" }}
          opacity="0.48"
          d="M83.39 135.08C81.93 135.07 80.48 135.14 79.03 135.3C92.7 137.06 103.21 149.14 103.07 163.69C102.93 177.87 84.97 188.07 70.3 189.75C71.29 189.9 72.32 189.98 73.4 189.99C88.58 190.14 110.42 179.34 110.58 163.69C110.74 148.04 98.56 135.23 83.38 135.07L83.39 135.08Z"
          fill="url(#paint3_linear_2_583)"
        />
        <path
          d="M89.54 136.04C89.54 136.04 104.93 137.35 110.57 157.98C110.57 157.98 113.3 168.37 104.84 177.27C104.84 177.27 122.89 162.65 103.3 142.13C100.4 139.09 96.56 137.06 92.43 136.26C91.38 136.06 90.37 135.95 89.55 136.04H89.54Z"
          fill="#00002A"
        />
        <mask
          id="mask0_2_583"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="148"
          y="161"
          width="89"
          height="50"
        >
          <path
            d="M236.88 169.29C197.44 148.57 148.44 174.51 148.44 174.51L158.77 204.46L209.4 210.75L228.74 205.2L236.88 169.3V169.29Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0_2_583)">
          <path
            d="M290.3 145.12C285.89 63.93 216.51 1.69 135.32 6.1C54.13 10.51 -8.10999 79.89 -3.69999 161.08C-2.65999 180.27 2.01001 198.39 9.61001 214.83C34.16 267.96 89.2801 303.46 151.28 300.1C204.75 297.2 250 266.1 273.41 222.02C285.54 199.17 291.8 172.83 290.3 145.12Z"
            fill="#F15A24"
          />
          <path
            style={{ mixBlendMode: "hue" }}
            opacity="0.5"
            d="M-3.69999 161.08C0.710009 242.27 70.09 304.51 151.28 300.1C232.47 295.69 294.71 226.31 290.3 145.12C289.26 125.93 284.59 107.81 276.99 91.37C252.44 38.24 197.32 2.73995 135.32 6.09995C81.85 8.99995 36.6 40.1 13.19 84.18C1.06002 107.03 -5.19999 133.37 -3.69999 161.08Z"
            fill="url(#paint4_linear_2_583)"
          />
          <path
            d="M290.3 145.12C285.89 63.93 216.51 1.69 135.32 6.1C54.13 10.51 -8.10999 79.89 -3.69999 161.08C-2.65999 180.27 2.01001 198.39 9.61001 214.83C34.16 267.96 89.2801 303.46 151.28 300.1C204.75 297.2 250 266.1 273.41 222.02C285.54 199.17 291.8 172.83 290.3 145.12Z"
            fill="#F15A24"
          />
          <path
            style={{ mixBlendMode: "hue" }}
            opacity="0.5"
            d="M-3.69999 161.08C0.710009 242.27 70.09 304.51 151.28 300.1C232.47 295.69 294.71 226.31 290.3 145.12C289.26 125.93 284.59 107.81 276.99 91.37C252.44 38.24 197.32 2.73995 135.32 6.09995C81.85 8.99995 36.6 40.1 13.19 84.18C1.06002 107.03 -5.19999 133.37 -3.69999 161.08Z"
            fill="url(#paint5_linear_2_583)"
          />
        </g>
        <mask
          id="mask1_2_583"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="29"
          y="164"
          width="89"
          height="50"
        >
          <path
            d="M117.58 170.15C76.79 152.23 29.72 181.52 29.72 181.52L42.11 210.67L93.05 213.42L111.96 206.54L117.58 170.15Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask1_2_583)">
          <path
            d="M169.18 142.31C159.12 61.63 85.57 4.38001 4.89003 14.43C-75.79 24.49 -133.04 98.04 -122.99 178.72C-120.61 197.79 -114.69 215.54 -105.96 231.41C-77.76 282.7 -20.31 314.27 41.31 306.59C94.45 299.97 137.42 265.8 157.7 220.19C168.21 196.55 172.62 169.84 169.19 142.3L169.18 142.31Z"
            fill="#F15A24"
          />
          <path
            style={{ mixBlendMode: "hue" }}
            opacity="0.5"
            d="M-122.99 178.73C-112.93 259.41 -39.38 316.66 41.3 306.61C121.98 296.55 179.23 223 169.18 142.32C166.8 123.25 160.88 105.5 152.15 89.63C123.95 38.34 66.5 6.77 4.87997 14.45C-48.26 21.07 -91.23 55.24 -111.51 100.85C-122.02 124.49 -126.43 151.2 -123 178.74L-122.99 178.73Z"
            fill="url(#paint6_linear_2_583)"
          />
          <path
            d="M169.18 142.31C159.12 61.63 85.57 4.38001 4.89003 14.43C-75.79 24.49 -133.04 98.04 -122.99 178.72C-120.61 197.79 -114.69 215.54 -105.96 231.41C-77.76 282.7 -20.31 314.27 41.31 306.59C94.45 299.97 137.42 265.8 157.7 220.19C168.21 196.55 172.62 169.84 169.19 142.3L169.18 142.31Z"
            fill="#F15A24"
          />
          <path
            style={{ mixBlendMode: "hue" }}
            opacity="0.5"
            d="M-122.99 178.73C-112.93 259.41 -39.38 316.66 41.3 306.61C121.98 296.55 179.23 223 169.18 142.32C166.8 123.25 160.88 105.5 152.15 89.63C123.95 38.34 66.5 6.77 4.87997 14.45C-48.26 21.07 -91.23 55.24 -111.51 100.85C-122.02 124.49 -126.43 151.2 -123 178.74L-122.99 178.73Z"
            fill="url(#paint7_linear_2_583)"
          />
        </g>
        <path
          d="M159.46 170.9C159.46 170.9 203.41 147.28 241.12 173.2"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M31.18 181.64C31.18 181.64 73.47 150.01 117.02 171.21"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M159.5 219.29C114.79 258.82 98.64 207.74 98.64 207.74C98.64 207.74 98.58 207.63 98.48 207.44C96.05 202.56 100.26 196.79 106.29 196.67C115.18 196.49 136.29 195.89 144.15 194.02C153.09 191.89 204.21 179.76 159.5 219.3V219.29Z"
          fill="#00002A"
        />
        <path
          d="M101.18 199.24C101.18 199.24 131.9 224.94 173.52 192.37C173.52 192.37 170.32 188.96 151.7 193.07C141.98 195.21 132.1 196.58 122.16 197.02C118.57 197.18 114.66 197.26 110.51 197.23C107.8 197.21 105.1 197.63 102.56 198.59C101.95 198.82 101.45 199.05 101.18 199.24Z"
          fill="white"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M59.76 210.72L59.02 214.95"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M67.94 213.26L64.76 216.14"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M49.71 202.85L46.53 205.73"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M62.9 221.83L62.16 226.06"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M52.98 205.17L52.24 209.4"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <mask
          id="mask2_2_583"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="86"
          y="183"
          width="102"
          height="61"
        >
          <path
            d="M165.23 223.91C109.92 277.73 87.76 205.71 87.76 205.71C87.76 205.71 87.68 205.56 87.55 205.28C84.3 198.37 89.45 190.44 97.08 190.48C108.34 190.53 135.04 190.39 144.95 188.03C156.21 185.35 220.54 170.09 165.23 223.91ZM144.32 194.76C136.62 196.59 115.95 197.19 107.24 197.36C101.33 197.48 97.2 203.13 99.59 207.9C99.68 208.09 99.75 208.19 99.75 208.19C99.75 208.19 115.57 258.23 159.36 219.51C203.15 180.79 153.09 192.67 144.33 194.75L144.32 194.76Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask2_2_583)">
          <path
            d="M264.1 170.94C260.23 99.6299 199.28 44.96 127.97 48.83C56.66 52.7 1.98999 113.65 5.85999 184.96C6.76999 201.81 10.88 217.73 17.55 232.17C39.12 278.84 87.53 310.02 141.99 307.07C188.96 304.52 228.71 277.21 249.26 238.49C259.92 218.42 265.42 195.29 264.1 170.94Z"
            fill="#F15A24"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <g style={{ mixBlendMode: "hue" }} opacity="0.5">
            <path
              d="M5.86001 184.96C9.73001 256.27 70.68 310.94 141.99 307.07C213.3 303.2 267.97 242.25 264.1 170.94C263.19 154.09 259.08 138.17 252.41 123.73C230.84 77.06 182.43 45.88 127.97 48.83C81 51.38 41.25 78.69 20.7 117.41C10.04 137.48 4.54001 160.61 5.86001 184.96Z"
              fill="url(#paint8_linear_2_583)"
              style={{ mixBlendMode: "hue" }}
            />
            <path
              d="M5.86001 184.96C9.73001 256.27 70.68 310.94 141.99 307.07C213.3 303.2 267.97 242.25 264.1 170.94C263.19 154.09 259.08 138.17 252.41 123.73C230.84 77.06 182.43 45.88 127.97 48.83C81 51.38 41.25 78.69 20.7 117.41C10.04 137.48 4.54001 160.61 5.86001 184.96Z"
              stroke="#00002A"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <path
            d="M264.1 170.94C260.23 99.6299 199.28 44.96 127.97 48.83C56.66 52.7 1.98999 113.65 5.85999 184.96C6.76999 201.81 10.88 217.73 17.55 232.17C39.12 278.84 87.53 310.02 141.99 307.07C188.96 304.52 228.71 277.21 249.26 238.49C259.92 218.42 265.42 195.29 264.1 170.94Z"
            fill="#F15A24"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <g style={{ mixBlendMode: "hue" }} opacity="0.5">
            <path
              d="M5.86001 184.96C9.73001 256.27 70.68 310.94 141.99 307.07C213.3 303.2 267.97 242.25 264.1 170.94C263.19 154.09 259.08 138.17 252.41 123.73C230.84 77.06 182.43 45.88 127.97 48.83C81 51.38 41.25 78.69 20.7 117.41C10.04 137.48 4.54001 160.61 5.86001 184.96Z"
              fill="url(#paint9_linear_2_583)"
              style={{ mixBlendMode: "hue" }}
            />
            <path
              d="M5.86001 184.96C9.73001 256.27 70.68 310.94 141.99 307.07C213.3 303.2 267.97 242.25 264.1 170.94C263.19 154.09 259.08 138.17 252.41 123.73C230.84 77.06 182.43 45.88 127.97 48.83C81 51.38 41.25 78.69 20.7 117.41C10.04 137.48 4.54001 160.61 5.86001 184.96Z"
              stroke="#00002A"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </g>
        <path
          d="M165.23 223.91C109.92 277.73 87.76 205.71 87.76 205.71C87.76 205.71 87.68 205.56 87.55 205.28C84.3 198.37 89.45 190.44 97.08 190.48C108.34 190.53 135.04 190.39 144.95 188.03C156.21 185.35 220.54 170.09 165.23 223.91ZM144.32 194.76C136.62 196.59 115.95 197.19 107.24 197.36C101.33 197.48 97.2 203.13 99.59 207.9C99.68 208.09 99.75 208.19 99.75 208.19C99.75 208.19 115.57 258.23 159.36 219.51C203.15 180.79 153.09 192.67 144.33 194.75L144.32 194.76Z"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M253.38 102.61L252.83 158.28C252.79 162.84 255.59 166.96 259.86 168.53C264.13 170.1 270.44 170.83 277.03 166.85C277.03 166.85 279.94 91.14 224.29 57.97C224.29 57.97 216.42 92.42 253.37 102.61H253.38Z"
          fill="url(#paint10_linear_2_583)"
        />
        <path
          d="M28.07 96.63L25.59 152.25C25.39 156.8 22.37 160.77 18.01 162.1C13.65 163.43 7.33002 163.82 0.960022 159.49C0.960022 159.49 0.959988 90.15 59.55 53.65C59.55 53.65 65.53 88.47 28.08 96.64L28.07 96.63Z"
          fill="url(#paint11_linear_2_583)"
        />
        <path
          d="M117.12 256.96C117.12 256.96 132.34 247.92 147.12 252.68"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M109.99 127.76L109.67 133.69"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M112.87 130.62L112.33 134.01"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M171.84 53.84C144.43 77.0701 130.01 55.49 130.01 55.49C130.01 55.49 123.91 66.46 112.63 71.92C109.16 74.15 105.27 75.84 101.05 76.85C80.53 81.76 59.8401 68.79 54.8401 47.89C49.8401 26.99 62.42 6.06005 82.94 1.15005C87.24 0.120046 91.55 -0.119962 95.72 0.330038C97.22 0.270038 98.73 0.330021 100.27 0.500021C108.88 1.45002 119.43 5.09 131.74 13.85C131.74 13.85 163.47 -0.759983 183.71 35.93C183.71 35.93 214.95 37.14 226.95 60.14L229.18 86.12C229.18 86.12 222.28 74.19 223.66 67.95C223.66 67.95 193.26 81.9501 171.85 53.84H171.84Z"
          fill="#00002A"
        />
        <mask
          id="mask3_2_583"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="162"
          y="213"
          width="78"
          height="65"
        >
          <path
            d="M218.95 277.56C218.95 277.56 198.24 249.71 177.23 241.81C175.9 241.31 174.93 240.08 174.87 238.66C174.82 237.53 175.34 236.25 177.33 235.31C177.33 235.31 175.67 229.96 181.32 230.14C181.32 230.14 178.9 226.86 184.84 224.03C184.84 224.03 175.38 219.75 164.94 218.24C162.63 217.91 162.24 214.76 164.41 213.89C164.68 213.78 164.98 213.68 165.31 213.58C165.31 213.58 186.59 215.06 210.7 230.63C210.7 230.63 218.01 228.88 226.61 240.66C226.61 240.66 236.46 254.95 239.25 260C239.25 260 230 271.97 218.96 277.55L218.95 277.56Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask3_2_583)">
          <path
            d="M20.25 216.87C-5.54003 148.66 28.85 72.46 97.06 46.68C165.27 20.89 241.47 55.28 267.25 123.49C273.34 139.61 276.08 156.17 275.8 172.41C274.9 224.89 242.53 273.98 190.44 293.68C145.52 310.66 97.13 301.54 61.96 273.85C43.73 259.5 29.05 240.16 20.25 216.87Z"
            fill="#F15A24"
          />
          <path
            style={{ mixBlendMode: "hue" }}
            opacity="0.5"
            d="M267.26 123.49C293.05 191.7 258.66 267.9 190.45 293.68C122.24 319.47 46.04 285.08 20.26 216.87C14.17 200.75 11.4301 184.19 11.7101 167.95C12.6101 115.47 44.98 66.38 97.07 46.68C141.99 29.7 190.38 38.82 225.55 66.51C243.78 80.86 258.46 100.2 267.26 123.49Z"
            fill="url(#paint12_linear_2_583)"
          />
          <path
            d="M20.25 216.87C-5.54003 148.66 28.85 72.46 97.06 46.68C165.27 20.89 241.47 55.28 267.25 123.49C273.34 139.61 276.08 156.17 275.8 172.41C274.9 224.89 242.53 273.98 190.44 293.68C145.52 310.66 97.13 301.54 61.96 273.85C43.73 259.5 29.05 240.16 20.25 216.87Z"
            fill="#F15A24"
          />
          <path
            style={{ mixBlendMode: "hue" }}
            opacity="0.5"
            d="M267.26 123.49C293.05 191.7 258.66 267.9 190.45 293.68C122.24 319.47 46.04 285.08 20.26 216.87C14.17 200.75 11.4301 184.19 11.7101 167.95C12.6101 115.47 44.98 66.38 97.07 46.68C141.99 29.7 190.38 38.82 225.55 66.51C243.78 80.86 258.46 100.2 267.26 123.49Z"
            fill="url(#paint13_linear_2_583)"
          />
        </g>
        <path
          d="M218.9 277.53C218.9 277.53 198.19 249.68 177.18 241.78C175.85 241.28 174.88 240.05 174.82 238.63C174.77 237.5 175.29 236.22 177.28 235.28C177.28 235.28 175.62 229.93 181.27 230.11C181.27 230.11 178.85 226.83 184.79 224C184.79 224 175.33 219.72 164.89 218.21C162.58 217.88 162.19 214.73 164.36 213.86C164.63 213.75 164.93 213.65 165.26 213.55C165.26 213.55 186.54 215.03 210.65 230.6C210.65 230.6 217.96 228.85 226.56 240.63C226.56 240.63 236.41 254.92 239.2 259.97"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M181.27 230.11L188.61 233.81"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M177.28 235.28C177.28 235.28 184.26 238.23 186.74 239.17"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M210.64 230.6L217.99 236.45"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M184.79 224L193.43 227.74"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M130.36 142.57L130.38 142.13C130.53 138.93 130.42 135.72 130.08 132.53C129.56 129.16 128.72 125.77 127.59 122.43C126.46 119.7 123.76 117.94 120.8 118.01L33.16 120.14C30.5 120.2 28.14 121.85 27.17 124.32H27.13C24.96 129.41 23.73 134.58 23.74 139.6C23.77 165.87 50.8 189.2 76.09 189.17C100.09 189.14 127.42 170.6 130.16 146.06L130.37 144.08V142.56L130.36 142.57ZM127.72 139.85C127.75 164.67 100.03 186.21 76.14 186.24C52.25 186.27 26.71 164.23 26.68 139.41C26.68 136.54 27.1 133.62 27.89 130.7C28.92 126.88 32.36 124.21 36.32 124.1L122.92 121.62C123.68 121.6 124.37 122.07 124.64 122.78H124.67C126.63 128.44 127.72 134.26 127.73 139.85H127.72Z"
          fill="#00002A"
        />
        <path
          d="M246.19 122.09L246.33 122.15L245.9 121.22C245.79 120.88 245.67 120.55 245.55 120.21H245.44C244.42 118 242.17 116.61 239.73 116.69L149.34 119.64C147.83 119.69 146.51 120.66 146.01 122.09H145.98C144.49 125.36 143.38 128.67 142.73 131.97H142.83L142.81 132.05C142.16 135.01 142 138.06 142.33 141.07L142.59 142.89C144.29 168.11 169.95 188.16 194.43 188.13C219.73 188.1 249.07 165.29 249.04 139.01C249.04 133.47 248.02 127.72 246.19 122.09ZM245.77 138.76C245.8 163.43 218.25 184.85 194.5 184.88C170.75 184.91 145.36 163 145.33 138.33C145.33 134.77 145.98 131.13 147.18 127.5C148.01 124.99 150.32 123.27 152.96 123.19L240.15 120.72C241.45 120.68 242.64 121.5 243.04 122.74C244.78 128.06 245.75 133.51 245.76 138.76H245.77Z"
          fill="#00002A"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2_583"
            x1="143.065"
            y1="28.673"
            x2="135.566"
            y2="304.011"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F15A24" stop-opacity="0" />
            <stop offset="1" stop-color="#662D91" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_2_583"
            x1="143.065"
            y1="28.673"
            x2="135.566"
            y2="304.011"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F15A24" stop-opacity="0" />
            <stop offset="1" stop-color="#662D91" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_2_583"
            x1="184.067"
            y1="161.621"
            x2="224.237"
            y2="164.451"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F15A24" stop-opacity="0" />
            <stop offset="1" stop-color="#662D91" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_2_583"
            x1="70.2546"
            y1="162.586"
            x2="110.525"
            y2="162.614"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F15A24" stop-opacity="0" />
            <stop offset="1" stop-color="#662D91" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_2_583"
            x1="147.305"
            y1="5.93996"
            x2="139.29"
            y2="300.271"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F15A24" stop-opacity="0" />
            <stop offset="1" stop-color="#662D91" />
          </linearGradient>
          <linearGradient
            id="paint5_linear_2_583"
            x1="147.305"
            y1="5.93996"
            x2="139.29"
            y2="300.271"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F15A24" stop-opacity="0" />
            <stop offset="1" stop-color="#662D91" />
          </linearGradient>
          <linearGradient
            id="paint6_linear_2_583"
            x1="16.7932"
            y1="13.4402"
            x2="29.3289"
            y2="307.623"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F15A24" stop-opacity="0" />
            <stop offset="1" stop-color="#662D91" />
          </linearGradient>
          <linearGradient
            id="paint7_linear_2_583"
            x1="16.7932"
            y1="13.4402"
            x2="29.3289"
            y2="307.623"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F15A24" stop-opacity="0" />
            <stop offset="1" stop-color="#662D91" />
          </linearGradient>
          <linearGradient
            id="paint8_linear_2_583"
            x1="138.498"
            y1="48.6861"
            x2="131.457"
            y2="307.22"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F15A24" stop-opacity="0" />
            <stop offset="1" stop-color="#662D91" />
          </linearGradient>
          <linearGradient
            id="paint9_linear_2_583"
            x1="138.498"
            y1="48.6861"
            x2="131.457"
            y2="307.22"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F15A24" stop-opacity="0" />
            <stop offset="1" stop-color="#662D91" />
          </linearGradient>
          <linearGradient
            id="paint10_linear_2_583"
            x1="248.872"
            y1="169.315"
            x2="251.884"
            y2="58.7062"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F15A24" stop-opacity="0" />
            <stop offset="0.43" stop-color="#00002A" />
          </linearGradient>
          <linearGradient
            id="paint11_linear_2_583"
            x1="28.9518"
            y1="163.524"
            x2="31.9641"
            y2="52.9151"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F15A24" stop-opacity="0" />
            <stop offset="0.43" stop-color="#00002A" />
          </linearGradient>
          <linearGradient
            id="paint12_linear_2_583"
            x1="87.1198"
            y1="50.7533"
            x2="200.31"
            y2="289.346"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F15A24" stop-opacity="0" />
            <stop offset="1" stop-color="#662D91" />
          </linearGradient>
          <linearGradient
            id="paint13_linear_2_583"
            x1="87.1198"
            y1="50.7533"
            x2="200.31"
            y2="289.346"
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
