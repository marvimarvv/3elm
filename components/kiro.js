import { motion as m, useInView } from "framer-motion";

import { useRef } from "react";

export default function Kiro({ className }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }, { amount: 0.9 });

  return (
    <m.div className={className}>
      <svg
        width="301"
        height="349"
        viewBox="0 0 301 349"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ref={ref}
        style={{
          transform: isInView
            ? "rotate(0deg) scale(1)"
            : "rotate(720deg) scale(0)",
          opacity: isInView ? 1 : 0,
          transition: "all 3s cubic-bezier(.43,.2,.54,1.17)",
          width: "100%",
        }}
      >
        <path
          d="M70.99 223.527C106.64 223.527 135.54 194.627 135.54 158.977C135.54 123.327 106.64 94.4268 70.99 94.4268C35.34 94.4268 6.44 123.327 6.44 158.977C6.44 194.627 35.34 223.527 70.99 223.527Z"
          fill="#5B371E"
        />
        <path
          d="M33.6 194.097C33.6 194.097 28.64 226.077 17.74 249.507L10.51 209.757C10.51 209.757 -11.31 179.457 7.98 151.497L33.6 194.097Z"
          fill="#5B371E"
        />
        <path
          d="M88.9 137.627C111.107 137.627 129.11 119.624 129.11 97.4167C129.11 75.2094 111.107 57.2067 88.9 57.2067C66.6926 57.2067 48.69 75.2094 48.69 97.4167C48.69 119.624 66.6926 137.627 88.9 137.627Z"
          fill="#5B371E"
        />
        <path
          d="M287.53 201.717C282.52 125.827 216.94 68.3567 141.05 73.3667C65.16 78.3767 7.69001 143.957 12.7 219.847C13.88 237.787 18.45 254.687 25.74 269.987C49.29 319.417 101.23 352.027 159.19 348.197C209.18 344.897 251.17 315.317 272.58 273.827C283.68 252.327 289.25 227.617 287.54 201.707L287.53 201.717Z"
          fill="#F15A24"
        />
        <path
          style={{ mixBlendMode: "hue" }}
          opacity="0.5"
          d="M12.7 219.847C17.71 295.737 83.29 353.207 159.18 348.197C235.07 343.187 292.54 277.607 287.53 201.717C286.35 183.777 281.78 166.877 274.49 151.577C250.94 102.147 199 69.5367 141.04 73.3667C91.05 76.6667 49.06 106.247 27.65 147.737C16.55 169.237 10.98 193.947 12.69 219.857L12.7 219.847Z"
          fill="url(#paint0_linear_1_1957)"
        />
        <path
          d="M287.53 201.717C282.52 125.827 216.94 68.3567 141.05 73.3667C65.16 78.3767 7.69001 143.957 12.7 219.847C13.88 237.787 18.45 254.687 25.74 269.987C49.29 319.417 101.23 352.027 159.19 348.197C209.18 344.897 251.17 315.317 272.58 273.827C283.68 252.327 289.25 227.617 287.54 201.707L287.53 201.717Z"
          fill="#F15A24"
        />
        <path
          style={{ mixBlendMode: "hue" }}
          opacity="0.5"
          d="M12.7 219.847C17.71 295.737 83.29 353.207 159.18 348.197C235.07 343.187 292.54 277.607 287.53 201.717C286.35 183.777 281.78 166.877 274.49 151.577C250.94 102.147 199 69.5367 141.04 73.3667C91.05 76.6667 49.06 106.247 27.65 147.737C16.55 169.237 10.98 193.947 12.69 219.857L12.7 219.847Z"
          fill="url(#paint1_linear_1_1957)"
        />
        <path
          d="M137.63 234.957L140.81 237.837"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M133.38 237.647L136.57 240.527"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M145.59 237.677L148.77 240.547"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M141.34 240.367L144.53 243.247"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M157.28 233.627L160.46 236.507"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M153.04 236.317L156.22 239.197"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M165.24 236.347L168.42 239.217"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M173.42 245.287L170.24 242.417"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M181.08 246.547L184.27 249.417"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M189.04 249.257L192.23 252.137"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M184.8 251.957L187.98 254.827"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M200.73 245.217L203.92 248.087"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M196.49 247.907L199.68 250.787"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M204.74 242.207L207.92 245.087"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M176.91 254.637L180.1 257.517"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M74.44 262.017L73.94 266.277"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M79.41 261.247L78.9 265.517"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M89.15 248.587L88.65 252.847"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M94.11 247.817L93.61 252.087"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M77.69 253.247L77.18 257.507"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M82.65 252.477L82.15 256.737"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M103.91 240.387L103.4 244.647"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M108.87 239.617L108.37 243.887"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M99.71 247.667L99.2 251.937"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M104.56 253.777L104.06 258.037"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M196.48 253.767L199.66 256.647"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M192.24 256.467L195.42 259.337"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M204.44 256.487L207.62 259.367"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M200.19 259.177L203.38 262.057"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M216.13 252.437L219.32 255.317"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M211.89 255.137L215.07 258.017"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M220.14 249.437L223.32 252.317"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M192.31 261.867L195.49 264.747"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M208.16 265.797L211.35 268.667"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M203.92 268.487L207.11 271.367"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M212.17 262.787L215.36 265.667"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M203.91 274.347L207.1 277.227"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M211.87 277.067L215.06 279.947"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M207.63 279.757L210.82 282.637"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M223.56 273.017L226.75 275.897"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M219.32 275.717L222.51 278.587"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M227.57 270.017L230.76 272.897"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M183.97 258.037L187.16 260.907"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M179.73 260.727L182.92 263.607"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M207.7 287.317L210.88 290.197"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M203.45 290.017L206.64 292.897"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M215.66 290.037L218.84 292.917"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M211.41 292.727L214.6 295.607"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M227.35 285.987L230.53 288.867"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M223.11 288.687L226.29 291.567"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M231.35 282.987L234.54 285.867"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M203.53 295.417L206.71 298.297"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M223.09 294.547L226.28 297.427"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M218.85 297.237L222.04 300.117"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M231.05 297.267L234.24 300.137"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M226.81 299.957L230 302.837"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M242.75 293.217L245.93 296.097"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M238.5 295.907L241.69 298.787"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M246.75 290.217L249.94 293.097"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M218.93 302.647L222.11 305.517"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M215.13 307.897L218.32 310.777"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M210.89 310.597L214.08 313.477"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M223.09 310.617L226.28 313.497"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M218.85 313.307L222.04 316.187"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M234.78 306.567L237.97 309.447"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M230.54 309.267L233.73 312.147"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M238.79 303.567L241.98 306.447"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M210.96 315.997L214.15 318.877"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M230.53 315.127L233.72 318.007"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M226.29 317.817L229.48 320.697"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M210.59 298.807L213.77 301.687"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M206.35 301.507L209.53 304.377"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M203.96 309.287L207.14 312.167"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M212.22 323.177L215.4 326.057"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M207.97 325.867L211.16 328.747"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M216.22 320.177L219.41 323.057"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M249.82 236.907L253.01 239.787"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M249.89 242.307L253.08 245.187"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M246.1 247.567L249.29 250.447"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M241.86 250.257L245.04 253.137"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M254.06 250.287L257.24 253.157"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M249.82 252.977L253 255.857"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M265.75 246.237L268.94 249.117"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M261.51 248.927L264.69 251.807"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M269.76 243.237L272.94 246.117"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M241.93 255.667L245.12 258.537"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M261.5 254.797L264.68 257.667"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M257.25 257.487L260.44 260.367"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M269.46 257.507L272.64 260.387"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M265.21 260.207L268.4 263.077"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M257.33 262.887L260.51 265.767"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M241.55 238.477L244.74 241.357"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M237.31 241.167L240.5 244.047"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M231.79 252.617L234.98 255.497"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M234.92 248.957L238.11 251.837"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M231.49 266.887L234.68 269.767"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M243.18 262.847L246.37 265.717"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M238.94 265.537L242.13 268.417"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M247.19 259.837L250.38 262.717"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M235.22 276.197L238.41 279.077"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M239.23 273.197L242.41 276.077"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M265.28 267.767L268.47 270.647"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M261.04 270.457L264.23 273.337"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M261.11 275.857L264.3 278.737"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M251.31 266.887L254.5 269.757"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M188.76 313.977L191.95 316.857"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M184.52 316.667L187.7 319.547"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M196.21 312.627L199.4 315.507"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M196.2 318.487L199.39 321.367"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M191.96 321.177L195.14 324.057"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M204.16 321.207L207.34 324.077"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M199.92 323.897L203.1 326.777"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M192.03 326.587L195.22 329.457"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M188.23 331.837L191.42 334.717"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M198.69 330.147L201.87 333.027"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M72.58 272.477L71.56 276.647"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M60.64 275.697L59.62 279.877"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M65.66 275.547L64.64 279.717"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M55.63 275.467L54.62 279.647"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M68.96 280.387L67.94 284.557"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M73.99 280.237L72.97 284.407"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M63.91 287.107L62.89 291.277"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M68.93 286.957L67.91 291.127"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M51.96 290.337L50.94 294.507"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M56.99 290.177L55.97 294.347"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M46.96 290.107L45.94 294.277"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M66.06 296.897L65.04 301.077"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M71.08 296.747L70.06 300.917"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M61.05 296.667L60.03 300.847"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M74.38 301.587L73.36 305.757"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M69.33 308.307L68.31 312.477"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M74.35 308.157L73.33 312.327"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M78.54 314.447L77.52 318.617"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M83.57 314.287L82.55 318.457"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M178.69 320.247L181.88 323.127"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M170.8 322.937L173.99 325.807"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M167.01 328.187L170.2 331.067"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M162.77 330.887L165.96 333.757"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M174.97 330.907L178.16 333.787"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M170.73 333.597L173.92 336.477"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M162.84 336.287L166.03 339.167"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M178.17 338.107L181.36 340.987"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M159.87 323.357L163.06 326.227"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M155.63 326.047L158.81 328.927"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M163.88 320.347L167.06 323.227"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M151.94 336.137L155.13 339.017"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M147.7 338.837L150.88 341.717"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M155.95 333.137L159.13 336.017"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M171.34 340.367L174.53 343.247"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g style={{ mixBlendMode: "multiply" }} opacity="0.3">
          <path
            d="M144.11 216.517C144.11 216.517 119.69 186.867 145.45 166.977C153.14 161.037 162.68 157.927 172.39 158.097C183.63 158.297 198.33 162.377 203.48 181.077C205.66 188.977 205.38 197.357 202.95 205.187L200.71 212.407C200.71 212.407 169.73 193.767 144.11 216.527V216.517Z"
            fill="#F15A24"
          />
        </g>
        <path
          d="M203.72 205.847C198.23 224.587 185.44 232.257 166.7 226.767C147.96 221.277 129.51 205.807 135 187.067C140.49 168.327 164.87 157.587 183.61 163.077C202.35 168.567 209.2 187.117 203.71 205.857L203.72 205.847Z"
          fill="white"
          stroke="#00002A"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M154.72 166.197C154.72 166.197 170.58 153.917 194.12 168.667C194.12 168.667 205.87 176.207 205.61 192.147C205.61 192.147 210 162.297 173.23 159.917C167.78 159.567 162.33 161.007 157.68 163.867C156.49 164.597 155.44 165.387 154.73 166.187L154.72 166.197Z"
          fill="#00002A"
        />
        <path
          style={{ mixBlendMode: "multiply" }}
          d="M194.86 199.407C198.5 186.967 196.7 174.617 189.6 166.107C203.78 173.467 208.6 189.907 203.74 206.497C198.25 225.237 185.46 232.907 166.72 227.417C157.82 224.807 148.98 219.947 142.75 213.547C147.42 216.487 152.61 218.787 157.84 220.317C176.58 225.807 189.37 218.137 194.86 199.397V199.407Z"
          fill="url(#paint2_linear_1_1957)"
        />
        <path
          d="M143.28 193.407C143.28 208.257 153.33 219.917 165.74 219.447C178.15 218.977 173.06 207.317 173.07 192.457C173.07 177.607 178.19 165.187 165.77 165.657C153.36 166.127 143.28 178.557 143.27 193.407H143.28Z"
          fill="#58753C"
        />
        <path
          d="M172.65 181.137C175.086 181.137 177.06 179.162 177.06 176.727C177.06 174.291 175.086 172.317 172.65 172.317C170.214 172.317 168.24 174.291 168.24 176.727C168.24 179.162 170.214 181.137 172.65 181.137Z"
          fill="white"
        />
        <g style={{ mixBlendMode: "multiply" }} opacity="0.3">
          <path
            d="M100.51 217.387C100.51 217.387 125.41 189.387 101.04 169.047C93.77 162.977 84.58 159.587 75.1 159.397C64.14 159.167 49.66 162.607 43.94 180.647C41.53 188.267 41.48 196.447 43.56 204.167L45.48 211.287C45.48 211.287 76.37 194.267 100.5 217.397L100.51 217.387Z"
            fill="#F15A24"
          />
        </g>
        <path
          d="M44.02 207.837C49.41 226.107 61.91 233.567 80.18 228.167C98.45 222.777 116.42 207.637 111.02 189.367C105.63 171.097 81.82 160.667 63.55 166.057C45.28 171.447 38.63 189.557 44.02 207.827V207.837Z"
          fill="white"
          stroke="#00002A"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M91.25 168.997C91.25 168.997 75.75 157.047 52.82 171.487C52.82 171.487 41.37 178.867 41.66 194.417C41.66 194.417 37.32 165.307 73.19 162.907C78.5 162.557 83.83 163.947 88.37 166.737C89.53 167.447 90.56 168.217 91.26 168.997H91.25Z"
          fill="#00002A"
        />
        <path
          d="M47.46 194.677C46.7 208.847 55.71 220.467 67.58 220.647C79.45 220.817 75.18 209.437 75.93 195.277C76.69 181.107 82.18 169.517 70.32 169.347C58.45 169.177 48.22 180.517 47.46 194.687V194.677Z"
          fill="#58753C"
        />
        <path
          d="M76.32 184.447C78.6451 184.447 80.53 182.562 80.53 180.237C80.53 177.912 78.6451 176.027 76.32 176.027C73.9949 176.027 72.11 177.912 72.11 180.237C72.11 182.562 73.9949 184.447 76.32 184.447Z"
          fill="white"
        />
        <path
          style={{ mixBlendMode: "multiply" }}
          opacity="0.48"
          d="M82.07 166.777C80.42 166.707 78.78 166.747 77.14 166.877C92.51 169.367 103.95 183.537 103.27 200.137C102.6 216.327 81.97 227.347 65.36 228.747C66.47 228.947 67.63 229.087 68.85 229.137C85.98 229.847 111.02 218.277 111.75 200.407C112.48 182.537 99.19 167.487 82.06 166.777H82.07Z"
          fill="url(#paint3_linear_1_1957)"
        />
        <path
          d="M143.79 131.737C144.54 133.647 146.67 134.577 148.64 135.137C158.82 138.057 169.66 136.337 180.22 135.507C190.78 134.687 202.21 135.037 210.77 141.267C211.85 142.057 213.17 142.967 214.39 142.447C214.94 142.207 215.34 141.707 215.6 141.167C216.62 139.027 215.57 136.357 213.79 134.797C212.01 133.237 209.64 132.547 207.35 131.927C202.38 130.577 137.73 116.417 143.79 131.737Z"
          fill="#5B371E"
        />
        <path
          d="M141.08 127.937L141.62 134.127"
          stroke="#5B371E"
          stroke-width="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M137.7 129.737L138.38 133.267"
          stroke="#5B371E"
          stroke-width="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M102.5 146.497C101.91 148.147 100.12 149.007 98.45 149.547C89.83 152.337 80.51 151.187 71.45 150.787C62.4 150.387 52.63 151.027 45.49 156.607C44.59 157.307 43.49 158.137 42.43 157.717C41.95 157.527 41.59 157.117 41.36 156.657C40.43 154.857 41.24 152.537 42.73 151.157C44.21 149.777 46.21 149.107 48.15 148.507C52.36 147.207 107.25 133.207 102.51 146.497H102.5Z"
          fill="#5B371E"
        />
        <path
          d="M104.47 145.507L104.19 150.817"
          stroke="#5B371E"
          stroke-width="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M107.05 148.057L106.58 151.097"
          stroke="#5B371E"
          stroke-width="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M111.41 236.917C108.1 230.317 104.65 221.407 106.32 215.497C106.32 215.497 117.7 212.557 134.73 219.847"
          stroke="#00002A"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M84.04 304.497L83.41 308.747"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M89.52 313.627L88.89 317.877"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M95.79 315.267L95.16 319.517"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M100.77 314.647L100.15 318.887"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M96.36 321.807L95.74 326.057"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M104.16 318.857L103.53 323.107"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M98.22 306.987L97.59 311.237"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M103.2 306.367L102.58 310.617"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M93.21 307.227L92.59 311.477"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M112.47 311.807L111.85 316.057"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M117.46 311.177L116.83 315.427"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M107.47 312.037L106.85 316.287"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M100.2 327.417L99.57 331.667"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M149.51 324.767L149.24 329.057"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M142.5 320.267L142.23 324.557"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M142.26 332.567L141.99 336.857"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M135.25 328.067L134.98 332.357"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M128.77 328.367L128.5 332.657"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M124.02 326.727L123.76 331.007"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M131.6 336.287L131.33 340.577"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M126.85 334.647L126.58 338.927"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M119.84 330.147L119.57 334.427"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M128.11 319.767L127.84 324.057"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M123.37 318.127L123.1 322.407"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M132.96 321.037L132.69 325.317"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M113.17 321.517L112.9 325.807"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M108.42 319.877L108.15 324.157"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M118.01 322.787L117.74 327.077"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M183.03 308.347C182.33 317.317 179.07 327.617 175.01 339.677C173.79 343.377 170.61 346.107 166.76 346.697C114.44 354.777 79.5 330.157 67.56 319.927C64.71 317.487 63.4 313.687 64.13 310.007L64.59 307.657C64.59 307.657 65.79 301.067 68.16 291.847C71.2 279.967 75.51 268.717 81.64 259.217C94.79 238.837 120.14 230.037 143.26 237.407C143.71 237.547 144.16 237.697 144.62 237.847C159.69 242.927 171.92 254.267 177.74 269.067C181.58 278.827 184.32 291.847 183.03 308.337V308.347Z"
          fill="#5B371E"
        />
        <mask
          id="mask0_1_1957"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="87"
          y="248"
          width="71"
          height="33"
        >
          <path
            d="M127.41 255.147C137.83 252.397 150.08 245.007 154.58 250.637C158.08 255.017 161.67 263.327 147.91 272.637C139.9 278.057 130.36 280.777 120.69 280.657L111.52 280.547C85.55 279.587 85.91 269.817 87.74 264.727C88.58 262.397 91.23 261.607 94.64 261.387C105.78 260.657 116.78 258.567 127.41 255.157V255.147Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0_1_1957)">
          <path
            d="M285.22 279.077C301.08 360.117 248.24 438.677 167.2 454.537C86.16 470.397 7.59999 417.557 -8.26001 336.517C-12.01 317.367 -11.92 298.347 -8.53001 280.267C2.42999 221.837 47.87 173.167 109.76 161.047C163.14 150.597 215.44 169.957 249.46 207.547C267.09 227.027 279.81 251.407 285.23 279.067L285.22 279.077Z"
            fill="#F15A24"
          />
          <path
            style={{ mixBlendMode: "hue" }}
            opacity="0.5"
            d="M-8.27002 336.527C-24.13 255.487 28.71 176.927 109.75 161.067C190.79 145.207 269.35 198.047 285.21 279.087C288.96 298.237 288.87 317.257 285.48 335.337C274.52 393.767 229.08 442.437 167.19 454.557C113.81 465.007 61.51 445.647 27.49 408.057C9.85998 388.577 -2.86002 364.197 -8.28002 336.537L-8.27002 336.527Z"
            fill="url(#paint4_linear_1_1957)"
          />
          <path
            d="M285.22 279.077C301.08 360.117 248.24 438.677 167.2 454.537C86.16 470.397 7.59999 417.557 -8.26001 336.517C-12.01 317.367 -11.92 298.347 -8.53001 280.267C2.42999 221.837 47.87 173.167 109.76 161.047C163.14 150.597 215.44 169.957 249.46 207.547C267.09 227.027 279.81 251.407 285.23 279.067L285.22 279.077Z"
            fill="#F15A24"
          />
          <path
            style={{ mixBlendMode: "hue" }}
            opacity="0.5"
            d="M-8.27002 336.527C-24.13 255.487 28.71 176.927 109.75 161.067C190.79 145.207 269.35 198.047 285.21 279.087C288.96 298.237 288.87 317.257 285.48 335.337C274.52 393.767 229.08 442.437 167.19 454.557C113.81 465.007 61.51 445.647 27.49 408.057C9.85998 388.577 -2.86002 364.197 -8.28002 336.537L-8.27002 336.527Z"
            fill="url(#paint5_linear_1_1957)"
          />
        </g>
        <path
          d="M127.39 255.147C137.81 252.397 150.06 245.007 154.56 250.637C158.06 255.017 161.65 263.327 147.89 272.637C139.88 278.057 130.34 280.777 120.67 280.657L111.5 280.547C85.53 279.587 85.89 269.817 87.72 264.727C88.56 262.397 91.21 261.607 94.62 261.387C105.76 260.657 116.76 258.567 127.39 255.157V255.147Z"
          stroke="#00002A"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M103.73 270.127C103.73 270.127 134.15 273.097 150.68 260.877"
          stroke="#00002A"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M86.72 258.397C86.72 258.397 87.28 272.537 84.15 276.237"
          stroke="#00002A"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M154.99 246.547C154.99 246.547 157.41 260.487 161.26 263.447"
          stroke="#00002A"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M163.87 239.827L165.78 241.757"
          stroke="#6B4125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M171.4 234.737C170.21 230.487 167.12 226.147 160.07 223.727C156.43 222.477 152.37 222.677 149.02 224.497C148.52 224.767 148.04 225.067 147.59 225.407C147.59 225.407 147.45 225.507 147.2 225.647C145.39 226.657 143.17 226.697 141.26 225.857C138.75 224.747 135.93 224.167 132.94 224.277C123.79 224.637 116.35 231.637 115.95 240.267C115.57 248.467 121.45 255.437 129.47 257.297C129.48 257.347 129.49 257.367 129.49 257.367C129.49 257.367 150.05 263.517 164.58 252.997C170.49 248.717 173.3 241.537 171.39 234.737H171.4Z"
          fill="#5B371E"
        />
        <path
          d="M71.37 254.427C70.76 250.067 71.87 244.957 77.41 240.187C80.27 237.727 84.11 236.467 87.94 236.947C88.51 237.017 89.07 237.127 89.63 237.287C89.63 237.287 89.8 237.327 90.09 237.367C92.17 237.647 94.25 236.897 95.66 235.437C97.53 233.507 99.91 231.967 102.72 231.007C111.33 228.067 121.03 231.887 124.88 239.727C128.53 247.177 125.91 255.727 119.24 260.317C119.24 260.367 119.24 260.387 119.24 260.387C119.24 260.387 102.7 273.427 85.01 268.887C77.81 267.037 72.33 261.407 71.36 254.427H71.37Z"
          fill="#5B371E"
        />
        <path
          opacity="0.78"
          d="M257.33 156.897C257.33 156.897 270.11 193.867 262.84 226.837C262.84 226.837 276.88 234.677 283.56 245.237C283.56 245.237 295.89 203.727 278.87 163.417L257.34 156.897H257.33Z"
          fill="url(#paint6_linear_1_1957)"
        />
        <path
          d="M222.69 136.317C245.113 136.317 263.29 118.139 263.29 95.7167C263.29 73.2939 245.113 55.1167 222.69 55.1167C200.267 55.1167 182.09 73.2939 182.09 95.7167C182.09 118.139 200.267 136.317 222.69 136.317Z"
          fill="#5B371E"
        />
        <path
          d="M149.69 114.537C178.249 114.537 201.4 91.3853 201.4 62.8267C201.4 34.2681 178.249 11.1167 149.69 11.1167C121.131 11.1167 97.98 34.2681 97.98 62.8267C97.98 91.3853 121.131 114.537 149.69 114.537Z"
          fill="#5B371E"
        />
        <path
          d="M125.09 59.3067C119.12 58.6667 114.52 52.6267 114.71 46.6267C114.9 40.6267 119.26 35.1967 124.81 32.8967C127.63 31.7267 131.12 31.3567 133.55 33.2167C136.06 35.1367 136.54 38.7267 136.28 41.8767C136.17 43.2367 135.94 44.6367 135.18 45.7567C133.78 47.8067 131.01 48.3767 128.53 48.4267C120.34 48.5967 112.16 44.8367 106.94 38.5167C104.06 35.0267 102.02 30.3267 103.33 25.9867C104.35 22.6167 107.29 20.0467 110.6 18.8467C113.91 17.6467 117.55 17.6467 121.03 18.1667C122.42 18.3767 124.19 19.2067 123.87 20.5767C123.66 21.4667 122.64 21.8867 121.74 22.0267C118.1 22.6067 114.47 20.9767 111.33 19.0367C108.87 17.5167 106.49 15.7067 104.94 13.2667C103.39 10.8267 102.8 7.61673 104.03 4.98673C105.26 2.36673 108.59 0.716731 111.24 1.89673"
          stroke="#5B371E"
          stroke-width="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M77.01 33.5367C73.83 38.6367 75.75 45.9767 80.59 49.5267C85.43 53.0867 92.39 52.9967 97.63 50.0467C100.29 48.5467 102.74 46.0267 102.77 42.9767C102.8 39.8167 100.27 37.2267 97.64 35.4867C96.5 34.7367 95.26 34.0467 93.9 33.9567C91.42 33.7967 89.27 35.6267 87.69 37.5467C82.51 43.8867 80.41 52.6467 82.17 60.6467C83.14 65.0667 85.58 69.5667 89.8 71.2167C93.08 72.4967 96.91 71.7667 99.9 69.9067C102.89 68.0467 105.13 65.1767 106.87 62.1167C107.56 60.8967 108 58.9867 106.72 58.3967C105.89 58.0067 104.93 58.5567 104.27 59.1767C101.57 61.6867 100.61 65.5467 100.2 69.2067C99.88 72.0867 99.83 75.0667 100.8 77.7967C101.77 80.5267 103.93 82.9667 106.75 83.6167C109.57 84.2667 112.92 82.6567 113.63 79.8567"
          stroke="#5B371E"
          stroke-width="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M180.55 84.5067C177.6 79.2767 179.83 72.0267 184.82 68.6867C189.81 65.3467 196.76 65.7367 201.87 68.9067C204.46 70.5167 206.8 73.1467 206.7 76.1967C206.59 79.3567 203.96 81.8367 201.25 83.4567C200.08 84.1567 198.81 84.7867 197.45 84.8167C194.97 84.8767 192.89 82.9467 191.41 80.9567C186.51 74.3967 184.8 65.5567 186.9 57.6367C188.06 53.2567 190.7 48.8667 194.99 47.4167C198.32 46.2867 202.12 47.1767 205.03 49.1667C207.94 51.1567 210.05 54.1167 211.65 57.2567C212.29 58.5067 212.64 60.4367 211.34 60.9667C210.5 61.3167 209.56 60.7267 208.92 60.0767C206.33 57.4467 205.54 53.5567 205.29 49.8767C205.1 46.9867 205.18 44.0067 206.27 41.3167C207.36 38.6267 209.62 36.2867 212.47 35.7567C215.32 35.2267 218.59 36.9767 219.18 39.8167"
          stroke="#5B371E"
          stroke-width="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M121.76 6.85675C118.58 11.9568 120.5 19.2968 125.34 22.8468C130.18 26.4068 137.14 26.3168 142.38 23.3668C145.04 21.8668 147.49 19.3468 147.52 16.2968C147.55 13.1368 145.02 10.5468 142.39 8.80675C141.25 8.05675 140.01 7.36675 138.65 7.27675C136.17 7.11675 134.02 8.94675 132.44 10.8668C127.26 17.2068 125.16 25.9667 126.92 33.9667C127.89 38.3867 130.33 42.8868 134.55 44.5368C137.83 45.8168 141.66 45.0868 144.65 43.2268C147.64 41.3668 149.88 38.4968 151.62 35.4368C152.31 34.2168 152.75 32.3067 151.47 31.7167C150.64 31.3267 149.68 31.8768 149.02 32.4968C146.32 35.0068 145.36 38.8668 144.95 42.5268C144.63 45.4068 144.58 48.3868 145.55 51.1168C146.52 53.8468 148.68 56.2868 151.5 56.9368C154.32 57.5868 157.67 55.9768 158.38 53.1768"
          stroke="#5B371E"
          stroke-width="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M260.85 172.257C279.368 172.257 294.38 157.245 294.38 138.727C294.38 120.209 279.368 105.197 260.85 105.197C242.332 105.197 227.32 120.209 227.32 138.727C227.32 157.245 242.332 172.257 260.85 172.257Z"
          fill="#5B371E"
        />
        <path
          d="M238.91 100.897C243.07 96.5568 250.65 96.6068 255.29 100.427C259.93 104.247 261.56 111.017 260 116.807C259.2 119.757 257.36 122.747 254.41 123.527C251.36 124.337 248.22 122.527 245.88 120.397C244.87 119.477 243.9 118.447 243.48 117.147C242.71 114.787 243.95 112.247 245.43 110.247C250.3 103.657 258.27 99.4768 266.46 99.2068C270.99 99.0568 275.95 100.317 278.58 103.997C280.63 106.867 280.86 110.757 279.8 114.107C278.74 117.457 276.5 120.337 273.97 122.777C272.96 123.747 271.21 124.637 270.33 123.557C269.75 122.847 270.04 121.787 270.48 120.987C272.25 117.747 275.75 115.867 279.2 114.567C281.91 113.547 284.79 112.767 287.67 113.037C290.55 113.307 293.45 114.797 294.78 117.377C296.11 119.947 295.37 123.597 292.83 124.977"
          stroke="#5B371E"
          stroke-width="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M112.84 78.5667C115 82.2867 113.47 87.4967 109.92 89.9367C106.37 92.3767 101.39 92.1567 97.7 89.9367C95.83 88.8067 94.13 86.9467 94.18 84.7567C94.23 82.4967 96.1 80.6967 98.02 79.5067C98.85 78.9967 99.76 78.5267 100.73 78.4967C102.51 78.4367 104.01 79.7967 105.09 81.2067C108.66 85.8667 109.96 92.1867 108.53 97.8767C107.74 101.027 105.89 104.197 102.83 105.277C100.45 106.117 97.72 105.507 95.62 104.117C93.52 102.717 91.98 100.617 90.8 98.3767C90.33 97.4867 90.06 96.1067 90.99 95.7167C91.59 95.4567 92.27 95.8667 92.73 96.3267C94.61 98.1867 95.21 100.967 95.42 103.607C95.59 105.677 95.55 107.817 94.8 109.747C94.04 111.677 92.44 113.377 90.41 113.787C88.38 114.197 86.01 112.967 85.57 110.937"
          stroke="#5B371E"
          stroke-width="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          opacity="0.78"
          d="M37.8 130.987C37.8 130.987 15.71 174.277 24.08 222.007C24.08 222.007 18.84 223.397 14.38 234.057C14.38 234.057 11.23 218.487 12.96 195.927C14.45 176.497 21.42 156.047 31.88 139.607L37.81 130.977L37.8 130.987Z"
          fill="url(#paint7_linear_1_1957)"
        />
        <mask
          id="mask1_1_1957"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="153"
          y="248"
          width="83"
          height="87"
        >
          <path
            d="M207.99 334.137C207.99 334.137 188.8 297.277 165.48 283.947C164 283.097 163.08 281.467 163.28 279.777C163.44 278.427 164.29 277.027 166.82 276.287C166.82 276.287 165.87 269.647 172.52 270.927C172.52 270.927 170.28 266.587 177.85 264.377C177.85 264.377 167.48 257.517 155.43 253.747C152.77 252.917 152.91 249.117 155.63 248.497C155.97 248.417 156.35 248.357 156.75 248.307C156.75 248.307 181.62 254.107 207.16 277.097C207.16 277.097 216.14 276.417 224.05 291.977C224.05 291.977 232.97 310.737 235.31 317.247C235.31 317.247 222.1 329.637 207.99 334.137Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask1_1_1957)">
          <path
            d="M-15.34 224.607C-32.84 139.077 22.3 55.5568 107.83 38.0468C193.36 20.5368 276.89 75.6868 294.4 161.217C298.54 181.427 298.62 201.527 295.2 220.677C284.15 282.537 236.56 334.417 171.24 347.787C114.91 359.317 59.44 339.327 23.14 299.907C4.32 279.477 -9.35 253.817 -15.32 224.627L-15.34 224.607Z"
            fill="#F15A24"
          />
          <path
            style={{ mixBlendMode: "hue" }}
            opacity="0.5"
            d="M294.4 161.207C311.91 246.737 256.76 330.267 171.23 347.777C85.7 365.287 2.17002 310.137 -15.34 224.607C-19.48 204.397 -19.56 184.297 -16.14 165.147C-5.08998 103.287 42.5 51.4068 107.82 38.0368C164.15 26.5068 219.62 46.4968 255.92 85.9168C274.74 106.347 288.41 132.007 294.38 161.197L294.4 161.207Z"
            fill="url(#paint8_linear_1_1957)"
          />
          <path
            d="M-15.34 224.607C-32.84 139.077 22.3 55.5568 107.83 38.0468C193.36 20.5368 276.89 75.6868 294.4 161.217C298.54 181.427 298.62 201.527 295.2 220.677C284.15 282.537 236.56 334.417 171.24 347.787C114.91 359.317 59.44 339.327 23.14 299.907C4.32 279.477 -9.35 253.817 -15.32 224.627L-15.34 224.607Z"
            fill="#F15A24"
          />
          <path
            style={{ mixBlendMode: "hue" }}
            opacity="0.5"
            d="M294.4 161.207C311.91 246.737 256.76 330.267 171.23 347.777C85.7 365.287 2.17002 310.137 -15.34 224.607C-19.48 204.397 -19.56 184.297 -16.14 165.147C-5.08998 103.287 42.5 51.4068 107.82 38.0368C164.15 26.5068 219.62 46.4968 255.92 85.9168C274.74 106.347 288.41 132.007 294.38 161.197L294.4 161.207Z"
            fill="url(#paint9_linear_1_1957)"
          />
        </g>
        <path
          d="M207.94 334.097C207.94 334.097 188.75 297.237 165.43 283.907C163.95 283.057 163.03 281.427 163.23 279.737C163.39 278.387 164.24 276.987 166.77 276.247C166.77 276.247 165.82 269.607 172.47 270.887C172.47 270.887 170.23 266.547 177.8 264.337C177.8 264.337 167.43 257.477 155.38 253.707C152.72 252.877 152.86 249.077 155.58 248.457C155.92 248.377 156.3 248.317 156.7 248.267C156.7 248.267 181.57 254.067 207.11 277.057C207.11 277.057 216.09 276.377 224 291.937C224 291.937 232.92 310.697 235.26 317.207"
          stroke="#00002A"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M172.47 270.887L181.65 276.937"
          stroke="#00002A"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M166.78 276.247C166.78 276.247 174.47 281.067 177.22 282.647"
          stroke="#00002A"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M207.1 277.057L214.67 285.367"
          stroke="#00002A"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M177.8 264.337L187.3 270.397"
          stroke="#00002A"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M58.66 89.2467C58.57 91.9467 56.02 94.1967 53.32 94.3167C50.62 94.4267 48.05 92.6567 46.83 90.2467C46.21 89.0167 45.93 87.4667 46.69 86.3267C47.47 85.1367 49.06 84.8067 50.48 84.8167C51.09 84.8167 51.73 84.8768 52.26 85.1868C53.23 85.7468 53.57 86.9667 53.67 88.0767C54.01 91.7367 52.6 95.5267 49.94 98.0767C48.47 99.4867 46.43 100.547 44.45 100.107C42.91 99.7567 41.66 98.5268 41.01 97.0868C40.36 95.6468 40.25 94.0167 40.36 92.4367C40.41 91.8067 40.72 90.9868 41.35 91.0868C41.76 91.1468 41.98 91.5967 42.07 91.9967C42.45 93.6067 41.84 95.2868 41.07 96.7568C40.47 97.9068 39.74 99.0368 38.69 99.8068C37.64 100.577 36.23 100.947 35.01 100.487C33.79 100.027 32.95 98.5867 33.39 97.3567"
          stroke="#5B371E"
          stroke-width="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M267.34 171.637C267.34 171.637 270.12 201.567 286.99 220.967L290.43 187.287C290.43 187.287 312.25 156.987 292.96 129.027L267.34 171.627V171.637Z"
          fill="#5B371E"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1_1957"
            x1="152.187"
            y1="73.1075"
            x2="147.908"
            y2="348.514"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F15A24" stop-opacity="0" />
            <stop offset="1" stop-color="#662D91" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_1_1957"
            x1="152.187"
            y1="73.1075"
            x2="147.908"
            y2="348.514"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F15A24" stop-opacity="0" />
            <stop offset="1" stop-color="#662D91" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_1_1957"
            x1="205.587"
            y1="197.654"
            x2="142.737"
            y2="197.72"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F15A24" stop-opacity="0" />
            <stop offset="1" stop-color="#662D91" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_1_1957"
            x1="73.43"
            y1="166.95"
            x2="93.3173"
            y2="222.351"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F15A24" stop-opacity="0" />
            <stop offset="1" stop-color="#662D91" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_1_1957"
            x1="179.104"
            y1="451.7"
            x2="97.9741"
            y2="163.844"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F15A24" stop-opacity="0" />
            <stop offset="1" stop-color="#662D91" />
          </linearGradient>
          <linearGradient
            id="paint5_linear_1_1957"
            x1="179.104"
            y1="451.7"
            x2="97.9741"
            y2="163.844"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F15A24" stop-opacity="0" />
            <stop offset="1" stop-color="#662D91" />
          </linearGradient>
          <linearGradient
            id="paint6_linear_1_1957"
            x1="278.171"
            y1="245.688"
            x2="269.838"
            y2="155.693"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F15A24" stop-opacity="0" />
            <stop offset="0.99" stop-color="#5B371E" />
          </linearGradient>
          <linearGradient
            id="paint7_linear_1_1957"
            x1="23.5261"
            y1="235.194"
            x2="36.4706"
            y2="130.823"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F15A24" stop-opacity="0" />
            <stop offset="0.99" stop-color="#5B371E" />
          </linearGradient>
          <linearGradient
            id="paint8_linear_1_1957"
            x1="95.2517"
            y1="40.9606"
            x2="183.672"
            y2="344.515"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F15A24" stop-opacity="0" />
            <stop offset="1" stop-color="#662D91" />
          </linearGradient>
          <linearGradient
            id="paint9_linear_1_1957"
            x1="95.2517"
            y1="40.9606"
            x2="183.672"
            y2="344.515"
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
