import { motion as m, useInView } from "framer-motion";

import { useRef } from "react";

export default function Zaid({ className }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }, { amount: 0.9 });

  return (
    <m.div className={className}>
      <svg
        width={347}
        height={299}
        viewBox="0 0 347 299"
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
          d="M32.83 126.957C32.83 126.957 33.51 122.157 35.74 114.397C65.7 10.4667 196.01 -23.5933 273.43 51.9367C290.77 68.8467 305.85 91.1067 314.1 120.287"
          stroke="#00002A"
          stroke-width="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M305.38 155.297C299.45 82.6268 235.72 28.5167 163.05 34.4567C90.38 40.3867 36.27 104.117 42.21 176.787C43.61 193.957 48.24 210.097 55.46 224.647C78.77 271.677 129.05 302.157 184.54 297.627C232.41 293.717 272.21 264.737 292.12 224.647C302.44 203.867 307.41 180.107 305.38 155.297Z"
          fill="#F15A24"
        />
        <path
          style={{ mixBlendMode: "hue" }}
          opacity="0.5"
          d="M42.2099 176.787C48.1399 249.457 111.87 303.567 184.54 297.627C257.21 291.697 311.32 227.967 305.38 155.297C303.98 138.127 299.35 121.987 292.13 107.437C268.82 60.4068 218.54 29.9267 163.05 34.4567C115.18 38.3667 75.3799 67.3468 55.4699 107.437C45.1499 128.217 40.1799 151.977 42.2099 176.787Z"
          fill="url(#paint0_linear_1_3)"
        />
        <path
          d="M305.38 155.297C299.45 82.6268 235.72 28.5167 163.05 34.4567C90.38 40.3867 36.27 104.117 42.21 176.787C43.61 193.957 48.24 210.097 55.46 224.647C78.77 271.677 129.05 302.157 184.54 297.627C232.41 293.717 272.21 264.737 292.12 224.647C302.44 203.867 307.41 180.107 305.38 155.297Z"
          fill="#F15A24"
        />
        <path
          style={{ mixBlendMode: "hue" }}
          opacity="0.5"
          d="M42.2099 176.787C48.1399 249.457 111.87 303.567 184.54 297.627C257.21 291.697 311.32 227.967 305.38 155.297C303.98 138.127 299.35 121.987 292.13 107.437C268.82 60.4068 218.54 29.9267 163.05 34.4567C115.18 38.3667 75.3799 67.3468 55.4699 107.437C45.1499 128.217 40.1799 151.977 42.2099 176.787Z"
          fill="url(#paint1_linear_1_3)"
        />
        <path
          d="M95.7 114.217C95.7 114.217 84.21 116.907 81.45 126.957"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M182.77 104.087L183.3 94.5568"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M259.86 117.637C237.7 109.547 205.26 107.097 191.55 106.397C188.78 106.257 187.16 105.147 186.2 102.707C186.08 102.907 185.92 103.167 185.74 103.457C185.44 103.927 184.72 103.707 184.74 103.147L185 96.2467C185.07 95.0667 185.8 94.0367 186.9 93.5967C189.5 92.5567 195.4 91.2968 207.61 92.9068C207.61 92.9068 207.59 92.9068 207.56 92.9068C207.58 92.9068 207.61 92.9068 207.63 92.9068C207.63 92.9068 207.62 92.9068 207.61 92.9068C207.61 92.9068 207.61 92.9068 207.63 92.9068C224.37 93.7268 239.55 96.2167 249.65 98.2467C257.3 99.7867 263.28 105.747 264.82 113.397C265.4 116.257 262.62 118.637 259.87 117.637H259.86Z"
          fill="#00002A"
        />
        <path
          d="M252.4 99.7067C252.4 99.7067 264.83 103.477 267.15 114.707"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M83.69 125.757C85.54 118.917 91.32 113.867 98.34 112.927C110.48 111.297 130.55 109.477 151.13 111.307C154.51 111.607 157.03 114.537 156.81 117.917C156.59 121.227 153.82 123.787 150.51 123.737C138.04 123.557 108.49 123.867 87.92 129.887C85.37 130.637 82.99 128.317 83.69 125.757Z"
          fill="#00002A"
        />
        <path
          d="M158.61 120.567L158.39 112.337"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M156.37 122.517L156.27 112.527"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M248.68 195.187L251.66 198.027"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M260.37 195.537L263.35 198.377"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M256.24 198.007L259.21 200.847"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M248.61 200.367L251.58 203.207"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M227.06 212.517L230.04 215.367"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M222.92 214.987L225.9 217.827"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M230.98 209.747L233.96 212.597"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M234.19 216.257L237.17 219.107"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M222.76 220.607L225.73 223.447"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M218.62 223.067L221.59 225.917"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M230.31 223.417L233.29 226.267"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M226.17 225.887L229.15 228.737"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M241.62 219.857L244.6 222.707"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M237.49 222.327L240.46 225.167"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M248.52 219.937L245.54 217.087"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M218.54 228.247L221.52 231.097"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M256.1 205.247L259.07 208.097"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M251.96 207.717L254.94 210.557"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M263.65 208.067L266.63 210.907"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M259.51 210.537L262.49 213.377"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M270.83 206.977L273.8 209.817"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M251.88 212.897L254.86 215.737"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M270.66 212.587L273.64 215.437"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M266.52 215.057L269.5 217.907"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M266.44 220.237L269.42 223.077"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M262.67 225.177L265.64 228.017"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M258.53 227.637L261.51 230.487"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M270.22 227.987L273.2 230.837"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M266.08 230.457L269.06 233.297"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M258.45 232.817L261.43 235.667"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M273.09 234.977L276.07 237.827"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M242.73 204.027L245.71 206.867"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M258.56 216.337L261.53 219.187"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M254.42 218.807L257.4 221.647"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M251.92 226.207L254.9 229.047"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M259.46 239.737L262.44 242.577"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M255.32 242.197L258.3 245.047"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M263.38 236.967L266.36 239.807"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M278.79 221.467L281.76 224.317"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M227.67 241.337L230.64 244.177"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M192.65 233.847L195.62 236.687"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M208.1 227.817L211.07 230.657"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M203.96 230.287L206.94 233.127"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M212.02 225.047L214.99 227.887"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M277.83 227.277L280.81 230.117"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M237.23 230.287L240.21 233.127"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M233.09 232.747L236.07 235.597"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M244.4 229.187L247.38 232.037"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M244.24 234.807L247.21 237.647"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M240.1 237.277L243.08 240.117"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M251.79 237.627L254.77 240.467"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M247.65 240.087L250.63 242.937"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M240.02 242.457L243 245.297"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M236.24 247.387L239.22 250.227"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M246.31 246.047L249.28 248.897"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M242.99 209.997L245.97 212.837"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M227.41 236.017L230.39 238.867"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M219.78 238.377L222.76 241.227"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M216 243.317L218.98 246.157"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M211.87 245.787L214.84 248.627"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M223.56 246.137L226.54 248.977"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M209.29 238.487L212.27 241.337"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M205.15 240.957L208.13 243.797"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M213.21 235.717L216.19 238.567"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M197.43 239.587L200.4 242.427"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M226.82 252.887L229.8 255.727"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M222.68 255.347L225.66 258.197"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M230.74 250.117L233.72 252.957"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M233.95 256.627L236.92 259.467"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M222.51 260.967L225.49 263.817"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M230.07 263.787L233.04 266.627"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M225.93 266.257L228.91 269.097"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M241.38 260.227L244.36 263.067"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M237.24 262.697L240.22 265.537"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M248.28 260.297L245.3 257.457"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M236.99 270.647L239.96 273.497"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M232.85 273.117L235.83 275.957"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M244.16 269.557L247.14 272.397"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M242.75 250.357L245.73 253.207"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M227.17 276.387L230.15 279.227"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M186.89 242.127L189.43 245.367"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M182.44 243.977L184.98 247.217"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M174.55 245.217L177.09 248.457"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M151.48 254.157L154.02 257.397"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M155.76 251.977L158.3 255.227"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M158 258.887L160.54 262.127"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M153.13 265.417L155.67 268.657"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M162.24 254.477L164.78 257.727"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M164.84 263.517L167.38 266.757"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M160.39 265.357L162.93 268.607"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M171.66 264.577L169.12 261.337"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M181.26 251.127L183.8 254.367"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M176.81 252.977L179.35 256.217"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M188.33 254.997L190.87 258.247"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M183.88 256.847L186.42 260.087"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M195.59 254.947L198.13 258.187"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M175.99 258.087L178.53 261.337"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M194.62 260.487L197.16 263.727"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M190.17 262.327L192.71 265.577"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M189.35 267.447L191.89 270.687"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M184.9 271.787L187.44 275.027"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M180.46 273.637L182.99 276.877"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M191.98 275.657L194.52 278.897"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M187.53 277.507L190.07 280.747"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M179.64 278.747L182.18 281.987"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M193.81 282.987L196.35 286.227"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M168.21 248.007L170.75 251.247"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M182.1 262.457L184.64 265.697"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M177.66 264.307L180.19 267.547"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M174.12 271.267L176.66 274.507"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M183.92 283.557L186.46 286.807"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M151.82 282.377L154.36 285.617"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M159 273.197L161.54 276.437"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M154.55 275.047L157.09 278.287"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M166.26 273.147L168.79 276.387"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M165.28 278.677L167.82 281.917"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M160.84 280.527L163.37 283.767"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M172.36 282.547L174.89 285.797"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M167.91 284.397L170.45 287.637"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M167.61 253.947L170.15 257.187"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M149.23 274.367L151.77 277.607"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M81.3199 240.757L79.17 244.277"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M94.31 236.867L92.16 240.377"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M89.8 235.197L87.66 238.707"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M87.9399 242.787L85.79 246.307"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M105.55 243.497L103.53 247.087"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M102.14 240.097L100.12 243.687"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M108.38 250.187L106.35 253.777"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M102.89 251.407L100.87 254.987"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M99.48 248.007L97.46 251.587"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M102.02 259.417L99.99 263.007"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M98.61 256.017L96.59 259.607"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M96.28 240.597L94.2599 244.187"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M112.05 259.717L110.33 263.457"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M107.38 258.587L105.66 262.337"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M123.99 264.987L122.4 268.787"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M120.21 262.007L118.62 265.807"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M91.16 248.147L89.0099 251.657"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M85.6299 249.177L83.49 252.687"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M82.34 245.657L80.2 249.177"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M107.58 264.757L105.45 269.037"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M92.8199 252.867L90.68 256.387"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M114.45 263.197L112.86 266.997"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M88.99 231.127L86.81 234.617"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M100.4 234.097L98.22 237.587"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M78.12 222.197L75.9399 225.687"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M82.74 223.547L80.5699 227.047"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M71.5 226.807L69.33 230.297"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M76.1299 228.157L73.95 231.657"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M84.11 228.547L81.93 232.047"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M72.79 234.287L70.62 237.787"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M67.5699 226.117L65.4 229.617"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M78.5 233.547L76.3199 237.037"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M83.12 234.897L80.95 238.397"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M91.99 223.517L89.8199 227.017"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M122.21 250.197L120.49 253.937"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M117.54 249.067L115.83 252.807"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M134.16 255.467L132.57 259.267"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M130.37 252.487L128.78 256.287"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M117.74 255.227L115.61 259.517"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M124.61 253.677L123.02 257.477"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M130.06 261.247L128.48 265.047"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M126.28 258.267L124.69 262.067"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M112 252.867L110.41 256.667"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M132.22 271.207L130.5 274.947"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M144.16 276.477L142.57 280.277"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M140.38 273.497L138.79 277.297"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M134.62 274.677L133.03 278.477"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M142.38 261.687L140.66 265.427"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M137.71 260.557L136 264.297"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M137.91 266.717L135.78 271.007"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M144.78 265.157L143.19 268.957"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M146.45 269.747L144.86 273.547"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M132.17 264.357L130.58 268.147"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M124.63 271.057L122.09 274.297"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M117.37 270.997L114.84 274.237"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M283.81 98.9867L283.28 152.357C283.24 156.727 285.92 160.677 290.02 162.187C294.28 163.757 300.16 164.387 306.48 160.577C306.48 160.577 310.12 99.4367 255.92 56.1967C255.92 56.1967 248.38 89.2167 283.8 98.9867H283.81Z"
          fill="url(#paint2_linear_1_3)"
        />
        <path
          d="M67.81 93.2567L65.43 146.577C65.24 150.937 62.3399 154.747 58.1599 156.027C53.8199 157.357 47.92 157.677 41.81 153.517C41.81 153.517 41.5 92.2768 97.98 52.0468C97.98 52.0468 103.71 85.4267 67.81 93.2567Z"
          fill="url(#paint3_linear_1_3)"
        />
        <path
          d="M205.65 52.2367C179.37 74.5067 165.55 53.8168 165.55 53.8168C165.55 53.8168 159.7 64.3368 148.89 69.5668C145.56 71.7068 141.84 73.3268 137.78 74.2968C118.11 79.0068 98.27 66.5768 93.47 46.5368C88.68 26.4968 100.74 6.4367 120.41 1.7267C124.53 0.736696 128.66 0.506779 132.66 0.936779C134.09 0.886779 135.55 0.936691 137.02 1.09669C145.27 2.00669 155.39 5.49674 167.19 13.8967C167.19 13.8967 197.61 -0.113216 217.01 35.0668C217.01 35.0668 243.04 44.5267 255.92 56.1967L260.6 83.1868C260.6 83.1868 253.99 71.7567 255.31 65.7667C255.31 65.7667 226.16 79.1867 205.64 52.2367H205.65Z"
          fill="#00002A"
        />
        <path
          d="M182.78 155.287C181.85 172.997 187.24 189.277 204.42 190.177C221.6 191.077 246.86 179.907 247.79 162.197C248.72 144.487 235.55 129.387 218.37 128.487C201.19 127.577 183.71 137.577 182.78 155.287Z"
          fill="white"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M186.86 157.647C185.86 170.967 194.09 182.087 205.26 182.497C216.42 182.907 212.64 172.107 213.64 158.787C214.64 145.467 220.06 134.677 208.89 134.267C197.73 133.857 187.86 144.327 186.86 157.647Z"
          fill="#00002A"
        />
        <path
          d="M214.31 148.617C216.497 148.617 218.27 146.844 218.27 144.657C218.27 142.47 216.497 140.697 214.31 140.697C212.123 140.697 210.35 142.47 210.35 144.657C210.35 146.844 212.123 148.617 214.31 148.617Z"
          fill="white"
        />
        <path
          style={{ mixBlendMode: "multiply" }}
          opacity="0.48"
          d="M218.37 128.537C216.72 128.447 215.07 128.467 213.43 128.577C228.83 131.227 240.15 145.417 239.28 161.887C238.43 177.937 217.61 188.627 200.92 189.817C202.03 190.037 203.19 190.177 204.42 190.247C221.6 191.157 246.86 179.977 247.79 162.267C248.72 144.557 235.55 129.457 218.37 128.557V128.537Z"
          fill="url(#paint4_linear_1_3)"
        />
        <path
          d="M225.3 129.907C225.3 129.907 242.66 132.137 248.05 155.757C248.05 155.757 250.64 167.657 240.63 177.317C240.63 177.317 261.77 161.637 240.58 137.457C237.44 133.877 233.19 131.397 228.56 130.287C227.38 130.007 226.24 129.837 225.31 129.897L225.3 129.907Z"
          fill="#00002A"
        />
        <path
          d="M94.0799 156.157C93.1499 173.867 98.5399 190.147 115.72 191.047C132.9 191.957 158.16 180.777 159.09 163.067C160.02 145.357 146.85 130.257 129.67 129.357C112.49 128.447 95.0099 138.447 94.0799 156.157Z"
          fill="white"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M98.16 158.517C97.16 171.837 105.39 182.957 116.56 183.367C127.72 183.777 123.94 172.977 124.94 159.657C125.94 146.337 131.36 135.547 120.19 135.137C109.03 134.727 99.16 145.197 98.16 158.517Z"
          fill="#00002A"
        />
        <path
          d="M125.62 149.477C127.807 149.477 129.58 147.704 129.58 145.517C129.58 143.33 127.807 141.557 125.62 141.557C123.433 141.557 121.66 143.33 121.66 145.517C121.66 147.704 123.433 149.477 125.62 149.477Z"
          fill="white"
        />
        <path
          style={{ mixBlendMode: "multiply" }}
          opacity="0.48"
          d="M129.68 129.397C128.03 129.307 126.38 129.327 124.74 129.437C140.14 132.087 151.46 146.277 150.59 162.747C149.74 178.797 128.92 189.487 112.23 190.677C113.34 190.897 114.5 191.037 115.73 191.107C132.91 192.017 158.17 180.837 159.1 163.127C160.03 145.417 146.86 130.317 129.68 129.417V129.397Z"
          fill="url(#paint5_linear_1_3)"
        />
        <path
          d="M136.6 130.777C136.6 130.777 153.96 133.007 159.35 156.627C159.35 156.627 161.94 168.527 151.93 178.187C151.93 178.187 173.07 162.507 151.88 138.327C148.74 134.747 144.49 132.267 139.86 131.157C138.68 130.877 137.54 130.707 136.61 130.767L136.6 130.777Z"
          fill="#00002A"
        />
        <path
          d="M323.33 124.467V89.4567C323.33 83.8467 318.78 79.2968 313.17 79.2968C307.56 79.2968 303.01 83.8467 303.01 89.4567V125.327C303.01 128.547 305.61 131.167 308.83 131.177L316.56 131.217C320.3 131.237 323.34 128.207 323.34 124.477L323.33 124.467Z"
          fill="#F15A24"
        />
        <path
          d="M332.6 182.367H331.93V135.777H332.6C340.21 135.777 346.39 141.957 346.39 149.567V168.577C346.39 176.187 340.21 182.367 332.6 182.367Z"
          fill="#F15A24"
        />
        <mask
          id="mask0_1_3"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="88"
          y="173"
          width="75"
          height="42"
        >
          <path
            d="M162.05 180.177C129.26 162.957 88.53 184.517 88.53 184.517L97.11 209.407L139.2 214.637L155.28 210.027L162.05 180.177Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0_1_3)">
          <path
            d="M206.45 160.087C202.79 92.5966 145.11 40.8567 77.62 44.5167C10.13 48.1767 -41.61 105.857 -37.95 173.347C-37.08 189.297 -33.2 204.367 -26.88 218.037C-6.47 262.197 39.35 291.717 90.89 288.917C135.34 286.507 172.96 260.657 192.42 224.007C202.5 205.017 207.71 183.117 206.46 160.077L206.45 160.087Z"
            fill="#F15A24"
          />
          <path
            style={{ mixBlendMode: "hue" }}
            opacity="0.5"
            d="M-37.95 173.347C-34.29 240.837 23.39 292.577 90.88 288.917C158.37 285.257 210.11 227.577 206.45 160.087C205.58 144.137 201.7 129.067 195.38 115.397C174.97 71.2368 129.15 41.7168 77.61 44.5168C33.16 46.9268 -4.46003 72.7768 -23.92 109.427C-34 128.417 -39.21 150.317 -37.96 173.357L-37.95 173.347Z"
            fill="url(#paint6_linear_1_3)"
          />
          <path
            d="M206.45 160.087C202.79 92.5966 145.11 40.8567 77.62 44.5167C10.13 48.1767 -41.61 105.857 -37.95 173.347C-37.08 189.297 -33.2 204.367 -26.88 218.037C-6.47 262.197 39.35 291.717 90.89 288.917C135.34 286.507 172.96 260.657 192.42 224.007C202.5 205.017 207.71 183.117 206.46 160.077L206.45 160.087Z"
            fill="#F15A24"
          />
          <path
            style={{ mixBlendMode: "hue" }}
            opacity="0.5"
            d="M-37.95 173.347C-34.29 240.837 23.39 292.577 90.88 288.917C158.37 285.257 210.11 227.577 206.45 160.087C205.58 144.137 201.7 129.067 195.38 115.397C174.97 71.2368 129.15 41.7168 77.61 44.5168C33.16 46.9268 -4.46003 72.7768 -23.92 109.427C-34 128.417 -39.21 150.317 -37.96 173.357L-37.95 173.347Z"
            fill="url(#paint7_linear_1_3)"
          />
        </g>
        <path
          d="M95.43 182.067C95.43 182.067 126.66 163.797 155.89 178.547"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <mask
          id="mask1_1_3"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="179"
          y="171"
          width="75"
          height="42"
        >
          <path
            d="M253.29 177.737C220.5 160.517 179.77 182.077 179.77 182.077L188.35 206.967L230.44 212.197L246.52 207.587L253.29 177.737Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask1_1_3)">
          <path
            d="M297.7 157.647C294.04 90.1567 236.36 38.4166 168.87 42.0766C101.38 45.7366 49.64 103.417 53.3 170.907C54.17 186.857 58.05 201.927 64.37 215.597C84.78 259.757 130.6 289.277 182.14 286.477C226.59 284.067 264.21 258.217 283.67 221.567C293.75 202.577 298.96 180.677 297.71 157.637L297.7 157.647Z"
            fill="#F15A24"
          />
          <path
            style={{ mixBlendMode: "hue" }}
            opacity="0.5"
            d="M53.29 170.907C56.95 238.397 114.63 290.137 182.12 286.477C249.61 282.817 301.35 225.137 297.69 157.647C296.82 141.697 292.94 126.627 286.62 112.957C266.21 68.7967 220.39 39.2767 168.85 42.0767C124.4 44.4867 86.78 70.3367 67.32 106.987C57.24 125.977 52.03 147.877 53.28 170.917L53.29 170.907Z"
            fill="url(#paint8_linear_1_3)"
          />
          <path
            d="M297.7 157.647C294.04 90.1567 236.36 38.4166 168.87 42.0766C101.38 45.7366 49.64 103.417 53.3 170.907C54.17 186.857 58.05 201.927 64.37 215.597C84.78 259.757 130.6 289.277 182.14 286.477C226.59 284.067 264.21 258.217 283.67 221.567C293.75 202.577 298.96 180.677 297.71 157.637L297.7 157.647Z"
            fill="#F15A24"
          />
          <path
            style={{ mixBlendMode: "hue" }}
            opacity="0.5"
            d="M53.29 170.907C56.95 238.397 114.63 290.137 182.12 286.477C249.61 282.817 301.35 225.137 297.69 157.647C296.82 141.697 292.94 126.627 286.62 112.957C266.21 68.7967 220.39 39.2767 168.85 42.0767C124.4 44.4867 86.78 70.3367 67.32 106.987C57.24 125.977 52.03 147.877 53.28 170.917L53.29 170.907Z"
            fill="url(#paint9_linear_1_3)"
          />
        </g>
        <path
          d="M186.67 179.627C186.67 179.627 217.9 161.357 247.13 176.107"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M177.01 210.667C188.6 206.217 201.72 196.227 207.57 202.117C212.12 206.697 217.28 215.777 202.67 228.147C194.16 235.347 183.58 239.647 172.48 240.717L161.97 241.727C132.1 243.857 131.3 232.627 132.77 226.567C133.44 223.787 136.38 222.557 140.26 221.877C152.92 219.657 165.27 215.897 177.02 210.667H177.01Z"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M151.77 230.757C151.77 230.757 186.98 230.367 204.4 214.327"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M207.04 197.377C207.04 197.377 212.73 210.797 217.28 212.867"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M132.44 219.147C132.44 219.147 133.45 233.687 130.33 237.597"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <mask
          id="mask2_1_3"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="188"
          y="214"
          width="63"
          height="72"
        >
          <path
            d="M228.01 285.507C228.01 285.507 214.33 255.177 196.28 243.467C195.13 242.727 194.48 241.377 194.71 240.037C194.9 238.967 195.64 237.877 197.7 237.407C197.7 237.407 197.24 232.057 202.49 233.377C202.49 233.377 200.89 229.807 207.04 228.377C207.04 228.377 199.06 222.427 189.59 218.867C187.5 218.077 187.78 215.047 189.98 214.677C190.26 214.627 190.56 214.597 190.89 214.577C190.89 214.577 210.51 220.327 229.89 239.857C229.89 239.857 237.1 239.717 242.73 252.517C242.73 252.517 249.02 267.917 250.6 273.227C250.6 273.227 239.48 282.537 228 285.497L228.01 285.507Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask2_1_3)">
          <path
            d="M54.3899 187.897C44.2399 118.727 92.08 54.4268 161.25 44.2768C230.42 34.1268 294.72 81.9668 304.87 151.137C307.27 167.487 306.43 183.557 302.83 198.707C291.21 247.667 250.83 286.997 198.01 294.757C152.45 301.447 109.01 282.967 81.7599 249.817C67.6399 232.637 57.8599 211.507 54.3899 187.897Z"
            fill="#F15A24"
          />
          <path
            style={{ mixBlendMode: "hue" }}
            opacity="0.5"
            d="M304.86 151.137C315.01 220.307 267.17 284.607 198 294.757C128.83 304.907 64.5299 257.067 54.3799 187.897C51.9799 171.547 52.82 155.477 56.42 140.327C68.04 91.3666 108.42 52.0367 161.24 44.2767C206.8 37.5867 250.24 56.0666 277.49 89.2166C291.61 106.397 301.39 127.527 304.86 151.137Z"
            fill="url(#paint10_linear_1_3)"
          />
          <path
            d="M54.3899 187.897C44.2399 118.727 92.08 54.4268 161.25 44.2768C230.42 34.1268 294.72 81.9668 304.87 151.137C307.27 167.487 306.43 183.557 302.83 198.707C291.21 247.667 250.83 286.997 198.01 294.757C152.45 301.447 109.01 282.967 81.7599 249.817C67.6399 232.637 57.8599 211.507 54.3899 187.897Z"
            fill="#F15A24"
          />
          <path
            style={{ mixBlendMode: "hue" }}
            opacity="0.5"
            d="M304.86 151.137C315.01 220.307 267.17 284.607 198 294.757C128.83 304.907 64.5299 257.067 54.3799 187.897C51.9799 171.547 52.82 155.477 56.42 140.327C68.04 91.3666 108.42 52.0367 161.24 44.2767C206.8 37.5867 250.24 56.0666 277.49 89.2166C291.61 106.397 301.39 127.527 304.86 151.137Z"
            fill="url(#paint11_linear_1_3)"
          />
        </g>
        <path
          d="M227.97 285.467C227.97 285.467 214.29 255.137 196.24 243.427C195.09 242.687 194.44 241.337 194.67 239.997C194.86 238.927 195.6 237.837 197.66 237.367C197.66 237.367 197.2 232.017 202.45 233.337C202.45 233.337 200.85 229.767 207 228.337C207 228.337 199.02 222.387 189.55 218.827C187.46 218.037 187.74 215.007 189.94 214.637C190.22 214.587 190.52 214.557 190.85 214.537C190.85 214.537 210.47 220.287 229.85 239.817C229.85 239.817 237.06 239.677 242.69 252.477C242.69 252.477 248.98 267.877 250.56 273.187"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M202.46 233.337L208.58 238.317"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M197.66 237.367C197.66 237.367 203.59 241.567 205.72 242.957"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M229.87 239.827L235.54 246.807"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M207.01 228.347L214.33 233.617"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M161.73 210.177C161.73 210.177 148.97 191.457 151.64 181.417C151.64 181.417 162.5 178.427 178.93 185.167"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M21.86 128.287V90.3168C21.86 84.2268 26.7999 79.2968 32.8799 79.2968C38.9699 79.2968 43.9 84.2368 43.9 90.3168V128.257C43.9 132.287 40.65 135.547 36.62 135.567L29.2 135.607C25.15 135.627 21.85 132.347 21.85 128.297L21.86 128.287Z"
          fill="#F15A24"
        />
        <path
          d="M12.78 140.157H13.45C14.32 140.157 15.03 140.867 15.03 141.737V185.067C15.03 185.937 14.32 186.647 13.45 186.647H12.78C6.05997 186.647 0.599976 181.187 0.599976 174.467V152.317C0.599976 145.597 6.05997 140.137 12.78 140.137V140.157Z"
          fill="#F15A24"
        />
        <path
          opacity="0.25"
          d="M9.40997 141.297L15.03 186.657V140.157C15.03 140.157 11.53 140.397 9.40997 141.297Z"
          fill="#00002A"
        />
        <path
          opacity="0.25"
          d="M338.16 137.067L332.52 182.517V135.927C332.52 135.927 336.02 136.167 338.16 137.067Z"
          fill="#00002A"
        />
        <path
          opacity="0.25"
          d="M23.81 114.417L43.9 98.0867V118.307L23.81 114.417Z"
          fill="#00002A"
        />
        <path
          d="M35.3799 111.287H33.56C23.1715 111.287 14.75 119.708 14.75 130.097V196.697C14.75 207.085 23.1715 215.507 33.56 215.507H35.3799C45.7684 215.507 54.1899 207.085 54.1899 196.697V130.097C54.1899 119.708 45.7684 111.287 35.3799 111.287Z"
          fill="#00002A"
        />
        <path d="M34.77 135.447H31.67V215.237H34.77V135.447Z" fill="#F4FF15" />
        <path
          opacity="0.25"
          d="M302.83 109.337L322.97 94.6167V111.857L302.83 109.337Z"
          fill="#00002A"
        />
        <path
          d="M311.54 211.267H313.38C323.785 211.267 332.22 202.832 332.22 192.427V125.677C332.22 115.272 323.785 106.837 313.38 106.837H311.54C301.135 106.837 292.7 115.272 292.7 125.677V192.427C292.7 202.832 301.135 211.267 311.54 211.267Z"
          fill="#00002A"
        />
        <path
          d="M315.38 107.017H311.35V210.887H315.38V107.017Z"
          fill="#F4FF15"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1_3"
            x1="173.79"
            y1="34.0067"
            x2="173.79"
            y2="298.077"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F15A24" stop-opacity="0" />
            <stop offset="1" stop-color="#662D91" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_1_3"
            x1="173.79"
            y1="34.0067"
            x2="173.79"
            y2="298.077"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F15A24" stop-opacity="0" />
            <stop offset="1" stop-color="#662D91" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_1_3"
            x1="279.496"
            y1="162.942"
            x2="282.383"
            y2="56.9114"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F15A24" stop-opacity="0" />
            <stop offset="0.43" stop-color="#00002A" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_1_3"
            x1="68.6603"
            y1="157.398"
            x2="71.5481"
            y2="51.3571"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F15A24" stop-opacity="0" />
            <stop offset="0.43" stop-color="#00002A" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_1_3"
            x1="202.358"
            y1="158.932"
            x2="247.955"
            y2="160.899"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F15A24" stop-opacity="0" />
            <stop offset="1" stop-color="#662D91" />
          </linearGradient>
          <linearGradient
            id="paint5_linear_1_3"
            x1="113.668"
            y1="159.8"
            x2="159.265"
            y2="161.767"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F15A24" stop-opacity="0" />
            <stop offset="1" stop-color="#662D91" />
          </linearGradient>
          <linearGradient
            id="paint6_linear_1_3"
            x1="87.5759"
            y1="44.3736"
            x2="80.9121"
            y2="289.063"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F15A24" stop-opacity="0" />
            <stop offset="1" stop-color="#662D91" />
          </linearGradient>
          <linearGradient
            id="paint7_linear_1_3"
            x1="87.5759"
            y1="44.3736"
            x2="80.9121"
            y2="289.063"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F15A24" stop-opacity="0" />
            <stop offset="1" stop-color="#662D91" />
          </linearGradient>
          <linearGradient
            id="paint8_linear_1_3"
            x1="178.826"
            y1="41.9368"
            x2="172.162"
            y2="286.616"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F15A24" stop-opacity="0" />
            <stop offset="1" stop-color="#662D91" />
          </linearGradient>
          <linearGradient
            id="paint9_linear_1_3"
            x1="178.826"
            y1="41.9368"
            x2="172.162"
            y2="286.616"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F15A24" stop-opacity="0" />
            <stop offset="1" stop-color="#662D91" />
          </linearGradient>
          <linearGradient
            id="paint10_linear_1_3"
            x1="151.194"
            y1="46.0919"
            x2="208.231"
            y2="292.753"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F15A24" stop-opacity="0" />
            <stop offset="1" stop-color="#662D91" />
          </linearGradient>
          <linearGradient
            id="paint11_linear_1_3"
            x1="151.194"
            y1="46.0919"
            x2="208.231"
            y2="292.753"
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
