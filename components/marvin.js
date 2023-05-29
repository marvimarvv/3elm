import { motion as m, useInView } from "framer-motion";

import { useRef } from "react";

export default function Marvin({ className }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }, { amount: 0.9 });

  return (
    <m.div className={className}>
      <svg
        width={276}
        height={277}
        viewBox="0 0 276 277"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ref={ref}
        style={{
          transform: isInView
            ? "translateX(0%) rotate(0deg)"
            : "translateX(0%) rotate(720deg)",
          opacity: isInView ? 1 : 0,
          transition: "all 3s cubic-bezier(.43,.2,.54,1.17)",
          width: "100%",
        }}
      >
        <path
          d="M275.01 127.297c-6.19-75.81-72.66-132.24-148.46-126.05C50.74 7.437-5.69 73.907.5 149.707c1.46 17.91 6.29 34.75 13.82 49.93 24.31 49.05 76.76 80.85 134.65 76.12 49.93-4.08 91.45-34.3 112.22-76.12 10.76-21.67 15.95-46.46 13.84-72.34h-.02z"
          fill="#F15A24"
        />
        <path
          style={{
            mixBlendMode: "hue",
          }}
          opacity={0.5}
          d="M148.96 275.757c75.81-6.19 132.24-72.66 126.05-148.46-6.19-75.81-72.66-132.24-148.46-126.05-17.91 1.46-34.75 6.29-49.93 13.82C27.57 39.377-4.23 91.827.5 149.717c4.08 49.93 34.3 91.45 76.12 112.22 21.67 10.76 46.46 15.95 72.34 13.84v-.02z"
          fill="url(#paint0_linear_1_872)"
        />
        <path
          d="M117.41 151.387s23.26-26.09.54-45.1c-6.78-5.67-15.35-8.84-24.19-9.03-10.22-.22-23.74 2.97-29.08 19.79-2.26 7.11-2.31 14.74-.37 21.94l1.78 6.64s28.83-15.85 51.32 5.76zM152.32 149.007s-22.19-27 1.26-45.08c7-5.4 15.69-8.22 24.53-8.05 10.22.19 23.6 3.92 28.27 20.94 1.97 7.19 1.71 14.82-.5 21.94l-2.05 6.56s-28.18-16.99-51.51 3.7v-.01z"
          fill="#F15A24"
          opacity={0.3}
        />
        <path
          d="M144.17.927s-100.06-10.06-138.04 97c0 0 132.46-55.01 264.22 4.44 0 0-22.22-95.75-126.18-101.44z"
          fill="#00002A"
        />
        <path
          d="M109.05 60.767c11.7-1.58 34.39-3.67 56.92-.23 4.32.66 8.22-2.69 8.22-7.06v-.15c0-3.17-2.08-5.97-5.12-6.87-9.68-2.86-32.42-7.44-62.73.28-3.17.81-5.4 3.66-5.4 6.94 0 4.33 3.81 7.67 8.11 7.09z"
          fill="#F15A24"
        />
        <path
          d="M109.05 60.767c11.7-1.58 34.39-3.67 56.92-.23 4.32.66 8.22-2.69 8.22-7.06v-.15c0-3.17-2.08-5.97-5.12-6.87-9.68-2.86-32.42-7.44-62.73.28-3.17.81-5.4 3.66-5.4 6.94 0 4.33 3.81 7.67 8.11 7.09z"
          fill="#F15A24"
        />
        <path
          d="M64.72 142.427c5.01 17.05 16.66 24.01 33.71 19 17.05-5.01 33.82-19.11 28.81-36.16-5.01-17.05-27.21-26.8-44.26-21.79-17.05 5.01-23.27 21.9-18.25 38.95h-.01z"
          fill="#fff"
          stroke="#00002A"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M96.22 139.407c10.035 0 18.17-8.135 18.17-18.17 0-10.035-8.135-18.17-18.17-18.17-10.035 0-18.17 8.135-18.17 18.17 0 10.035 8.135 18.17 18.17 18.17z"
          fill="#58753C"
        />
        <path
          d="M82.26 118.597a4.29 4.29 0 100-8.58 4.29 4.29 0 000 8.58z"
          fill="#fff"
        />
        <path
          d="M206.57 139.357c-5.01 17.05-16.66 24.01-33.71 19-17.05-5.01-33.82-19.11-28.81-36.16 5.01-17.05 27.21-26.8 44.26-21.79 17.05 5.01 23.27 21.9 18.25 38.95h.01z"
          fill="#fff"
          stroke="#00002A"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M175.07 136.337c10.035 0 18.17-8.135 18.17-18.17 0-10.035-8.135-18.17-18.17-18.17-10.035 0-18.17 8.135-18.17 18.17 0 10.035 8.135 18.17 18.17 18.17z"
          fill="#58753C"
        />
        <path
          d="M189.03 115.527a4.29 4.29 0 100-8.58 4.29 4.29 0 000 8.58z"
          fill="#fff"
        />
        <path
          d="M162.02 103.227s14.45-11.16 35.85 2.29c0 0 10.68 6.87 10.43 21.38 0 0 4.02-27.16-29.44-29.36-4.96-.33-9.92.98-14.15 3.58-1.08.66-2.04 1.38-2.69 2.11zM108.82 106.237s-14.45-11.16-35.85 2.29c0 0-10.68 6.87-10.43 21.38 0 0-4.02-27.16 29.44-29.36 4.96-.33 9.92.98 14.15 3.58 1.08.66 2.04 1.38 2.69 2.11zM164.4 91.097c.5 1.1 1.79 1.58 2.96 1.85 6.08 1.4 12.41.05 18.6-.76 6.19-.81 12.93-.96 18.16 2.44.66.43 1.46.93 2.17.58.32-.16.54-.46.67-.79.53-1.29-.16-2.83-1.27-3.69-1.1-.86-2.51-1.2-3.88-1.49-2.96-.64-41.47-6.96-37.42 1.87l.01-.01zM103.39 91.647c-.5 1.1-1.79 1.58-2.96 1.85-6.08 1.4-12.41.05-18.6-.76-6.19-.81-12.93-.96-18.16 2.44-.66.43-1.46.93-2.17.58-.32-.16-.54-.46-.67-.79-.53-1.29.16-2.83 1.27-3.69 1.11-.86 2.51-1.2 3.88-1.49 2.96-.64 41.47-6.96 37.42 1.87l-.01-.01z"
          fill="#00002A"
        />
        <path
          d="M112.48 69.437a2.32 2.32 0 100-4.64 2.32 2.32 0 000 4.64zM122.19 69.057a2.31 2.31 0 100-4.62 2.31 2.31 0 000 4.62z"
          fill="#F15A24"
        />
        <path
          d="M6.55 180.437s13.23-14.15 20.14-16.01c0 0-10.55-43.45 0-73.56l-20.56 7.06s-13.7 31.71.42 82.52v-.01z"
          fill="url(#paint1_linear_1_872)"
        />
        <path
          d="M162.08 89.037l.4 4.04M159.68 89.327l.41 4.04M107.49 88.837l-.06 4.06M105.07 88.857l-.05 4.06M137.73 205.847c14.116 0 25.56-11.444 25.56-25.56 0-14.117-11.444-25.56-25.56-25.56-14.116 0-25.56 11.443-25.56 25.56 0 14.116 11.444 25.56 25.56 25.56z"
          stroke="#00002A"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M137.73 190.427c5.6 0 10.14-4.54 10.14-10.14 0-5.6-4.54-10.14-10.14-10.14-5.6 0-10.14 4.54-10.14 10.14 0 5.6 4.54 10.14 10.14 10.14zM112.39 183.587s-1.45 27.74 29.79 22.13c0 0-23.84 3.64-29.79-22.13z"
          fill="#00002A"
        />
        <path
          d="M122.53 152.777l-.06 4.06M118.73 154.917l-1.35 3.83M148.55 150.187l.05 4.06M152.34 152.327l1.36 3.82M106.39 172.227l-.06 4.06M102.59 174.367l-1.35 3.82M94.21 172.497l2.85 2.89M93.06 176.687l1.77 3.66M86.64 172.357l-.05 4.06M82.85 174.497l-1.36 3.83M74.46 172.627l2.85 2.89M73.31 176.827l1.77 3.65M73.19 189.257l-.08 6.36M67.26 192.607l-2.12 5.99M54.14 189.677l4.46 4.53M52.34 196.247l2.76 5.73M42.28 189.467l-.08 6.36M36.34 192.817l-2.12 5.99M23.22 189.887l4.46 4.53M21.42 196.457l2.77 5.73M33.76 209.427l.05 4.06M37.55 203.887l1.35 3.83M45.93 202.017l-2.85 2.89M47.08 206.217l-1.77 3.65M53.51 209.557l.05 4.06M57.3 211.697l1.35 3.83M65.68 209.827l-2.85 2.89M66.83 214.027l-1.77 3.65M39.88 216.357l.08 6.36M48.64 216.477l2.13 5.99M71.46 222.027l-4.46 4.53M73.26 228.607l-2.76 5.72M100.67 181.967l-.08 6.36M94.73 185.317l-2.12 5.99M81.61 182.387l4.46 4.53M79.81 188.957l2.77 5.73M72.25 205.617l1.35 3.83M80.63 203.747l-2.85 2.89M81.78 207.947l-1.77 3.65M60.08 236.547l.08 6.35M66.02 239.887l2.12 5.99M79.14 236.957l-4.46 4.53M80.94 243.537l-2.77 5.72M149.75 229.607l-2.13 3.46M141.95 226.017l2.18 3.43M139.95 229.877l.95 3.94M134.58 224.287l-.91 3.96M130.42 225.577l-2.13 3.45M122.62 221.977l2.18 3.43M120.61 225.837l.96 3.95M117.87 237.967l-1.42 6.2M111.36 239.987l-3.33 5.41M99.15 234.357l3.41 5.36M96.01 240.397l1.5 6.18M94.34 253.657l-.8 3.98M97.6 256.547l.52 4.02M106.19 256.487l-3.4 2.22M106.42 260.827l-2.49 3.2M146.27 236.637l-1.42 6.2M139.76 238.657l-3.34 5.41M127.55 233.027l3.4 5.37M124.4 239.077l1.5 6.17M125.99 255.217l.52 4.03M134.58 255.157l-3.39 2.23M134.82 259.507l-2.5 3.2M34.68 182.647l-1.76 3.66M105.18 206.217l1.77 3.65M230.29 179.467l.08 6.35M236.23 182.807l2.12 5.99M249.35 179.877l-4.46 4.53M251.15 186.457l-2.77 5.72M249.98 199.757l-.05 4.06M246.19 201.897l-1.36 3.83M237.81 200.027l2.85 2.89M236.66 204.227l1.77 3.65M232.02 212.237l4.46 4.52M230.22 218.807l2.77 5.72M202.82 172.177l.08 6.35M208.75 175.517l2.13 5.99M163.3 205.717l-4.46 4.53M223.68 179.167l-2.77 5.72M218.72 194.607l-1.36 3.83M210.33 192.737l2.85 2.89M153.73 219.817l2.14 3.45M161.53 216.217l-2.17 3.43M163.54 220.077l-.96 3.95M168.91 214.487l.9 3.96M173.06 215.777l2.14 3.45M180.86 212.177l-2.17 3.43M182.87 216.037l-.95 3.95M185.61 228.167l1.42 6.2M192.12 230.187l3.34 5.41M204.33 224.557l-3.4 5.37M207.48 230.597l-1.5 6.18M209.14 243.857l.81 3.98M205.89 246.747l-.52 4.02M197.3 246.687l3.4 2.22M197.06 251.037l2.5 3.2M157.22 226.847l1.42 6.19M163.73 228.857l3.34 5.41M175.94 223.227l-3.41 5.37M179.08 229.277l-1.49 6.17M177.49 245.417l-.51 4.03M168.91 245.357l3.39 2.23M168.67 249.707l2.5 3.2M184.05 183.717l-1.77 3.65M203.79 183.847l-1.76 3.65M203.91 196.277l.09 6.36M176.44 188.987l.08 6.36M182.38 192.337l2.12 5.99M195.5 189.407l-4.46 4.53M197.3 195.977l-2.77 5.73M192.34 211.427l-1.36 3.83M178.3 201.877l2.85 2.9M92.03 213.827l-1.77 3.65M111.77 213.957l-1.76 3.66M84.42 219.107l.08 6.35M90.36 222.447l2.12 5.99M103.48 219.517l-4.46 4.53M105.28 226.097l-2.77 5.72M85.4 230.777l-1.77 3.65M48.43 226.617l-.81 3.98M51.59 229.087l.57 4.45M60.28 224.197l-3.4 2.22M60.51 228.537l-2.5 3.2M164.67 261.347l-3.34 5.4M152.46 255.717l3.4 5.36M87.91 248.237l-1.77 3.66M156.78 240.877l-4.46 4.53M158.58 247.447l-2.77 5.72M226.08 198.887l-1.77 3.66M218.47 204.167l.09 6.36M224.41 207.517l2.12 5.99M220.33 217.057l2.85 2.89M175.76 169.987l-1.77 3.66M170.86 202.037l-1.77 3.66M168.15 175.267l.08 6.36M174.09 178.617l2.12 5.99M187.21 175.687l-4.46 4.53M208.84 206.347l-1.77 3.66M201.23 211.627l.08 6.36M207.17 214.977l2.12 5.99M188.64 243.927l-1.77 3.65M181.03 249.197l.08 6.36M215.25 229.917l2.12 6M130.26 213.427l-2.17 3.43M132.27 217.297l-.95 3.94M137.64 211.707l.9 3.95M141.8 212.987l2.13 3.46M149.6 209.397l-2.18 3.43M151.6 213.257l-.95 3.94M112.86 223.937l-2.17 3.43M114.87 227.797l-.96 3.95M60.89 176.617l-.05 4.06M57.1 178.747l-1.35 3.83M48.72 176.877l2.85 2.9M47.57 181.077l1.77 3.66M99.98 193.967l-1.77 3.66M92.37 199.247l.09 6.36M98.31 202.597l2.12 5.99M122.34 212.997l-4.46 4.53M118.47 251.267l-4.46 4.52M120.26 257.837l-2.76 5.72"
          stroke="#00002A"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={0.3}
        />
        <path
          d="M137.83 137.447s-7.79 7.96-8.48 13.81c0 0 4.66-.69 9.57-3.02"
          stroke="#00002A"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          style={{
            mixBlendMode: "multiply",
          }}
          opacity={0.48}
          d="M72.78 135.567c-3.33-11.32-1.7-22.56 4.75-30.31-12.9 6.71-17.27 21.67-12.83 36.77 5.01 17.05 16.66 24.01 33.71 19 8.1-2.38 16.13-6.82 21.8-12.64-4.24 2.68-8.97 4.78-13.72 6.18-17.05 5.01-28.7-1.95-33.71-19z"
          fill="url(#paint2_linear_1_872)"
        />
        <path
          style={{
            mixBlendMode: "multiply",
          }}
          opacity={0.48}
          d="M198.52 133.487c3.33-11.32 1.7-22.56-4.75-30.31 12.9 6.71 17.27 21.67 12.83 36.77-5.01 17.05-16.66 24.01-33.71 19-8.1-2.38-16.13-6.82-21.8-12.64 4.24 2.68 8.97 4.78 13.72 6.18 17.05 5.01 28.7-1.95 33.71-19z"
          fill="url(#paint3_linear_1_872)"
        />
        <path
          d="M249.35 93.827s9.39 38.28-.97 70.67c0 0 13.36 9.17 19.08 20.38 0 0 16.22-40.5 2.89-82.52l-21-8.54v.01z"
          fill="url(#paint4_linear_1_872)"
        />
        <mask
          id="a"
          style={{
            maskType: "luminance",
          }}
          maskUnits="userSpaceOnUse"
          x={163}
          y={180}
          width={81}
          height={66}
        >
          <path
            d="M223.18 245.957s-22.38-28.46-44.5-36.11c-1.4-.49-2.45-1.73-2.55-3.22-.08-1.18.42-2.52 2.47-3.56 0 0-1.88-5.53 4.01-5.51 0 0-2.62-3.36 3.5-6.47 0 0-9.99-4.2-20.91-5.48-2.42-.28-2.91-3.56-.68-4.52.28-.12.59-.24.93-.34 0 0 22.23.95 47.8 16.51 0 0 7.58-2.03 16.86 10.01 0 0 10.67 14.62 13.72 19.82 0 0-9.31 12.74-20.66 18.87h.01z"
            fill="#fff"
          />
        </mask>
        <g mask="url(#a)">
          <path
            d="M14.31 188.247c-28.8-70.39 4.92-150.81 75.32-179.6 70.39-28.8 150.81 4.92 179.6 75.32 6.81 16.64 10.12 33.83 10.28 50.77.53 54.75-31.84 106.84-85.6 128.83-46.36 18.97-97.07 10.81-134.52-17.08-19.41-14.45-35.25-34.21-45.08-58.24z"
            fill="#F15A24"
          />
          <path
            style={{
              mixBlendMode: "hue",
            }}
            opacity={0.5}
            d="M269.23 83.957c28.8 70.39-4.92 150.81-75.32 179.6-70.39 28.8-150.81-4.92-179.6-75.32-6.81-16.64-10.12-33.83-10.28-50.77-.53-54.75 31.84-106.84 85.6-128.83 46.36-18.97 97.07-10.81 134.52 17.08 19.41 14.45 35.25 34.21 45.08 58.24z"
            fill="url(#paint5_linear_1_872)"
          />
          <path
            d="M14.31 188.247c-28.8-70.39 4.92-150.81 75.32-179.6 70.39-28.8 150.81 4.92 179.6 75.32 6.81 16.64 10.12 33.83 10.28 50.77.53 54.75-31.84 106.84-85.6 128.83-46.36 18.97-97.07 10.81-134.52-17.08-19.41-14.45-35.25-34.21-45.08-58.24z"
            fill="#F15A24"
          />
          <path
            style={{
              mixBlendMode: "hue",
            }}
            opacity={0.5}
            d="M269.23 83.957c28.8 70.39-4.92 150.81-75.32 179.6-70.39 28.8-150.81-4.92-179.6-75.32-6.81-16.64-10.12-33.83-10.28-50.77-.53-54.75 31.84-106.84 85.6-128.83 46.36-18.97 97.07-10.81 134.52 17.08 19.41 14.45 35.25 34.21 45.08 58.24z"
            fill="url(#paint6_linear_1_872)"
          />
        </g>
        <path
          d="M223.14 245.927s-22.38-28.46-44.5-36.11c-1.4-.49-2.45-1.73-2.55-3.22-.08-1.18.42-2.52 2.47-3.56 0 0-1.88-5.53 4.01-5.51 0 0-2.62-3.36 3.5-6.47 0 0-9.99-4.2-20.91-5.48-2.42-.28-2.91-3.56-.68-4.52.28-.12.59-.24.93-.34 0 0 22.23.95 47.8 16.51 0 0 7.58-2.03 16.86 10.01 0 0 10.67 14.62 13.72 19.82M182.57 197.537l5.97 2.8M178.55 203.047s7.36 2.88 9.97 3.8M213.21 197.237l7.82 5.88M186.07 191.077s7.15 2.94 10.96 5.08"
          stroke="#00002A"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M131.1 68.887a2.32 2.32 0 100-4.64 2.32 2.32 0 000 4.64z"
          fill="#F15A24"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1_872"
            x1={137.76}
            y1={0.776742}
            x2={137.76}
            y2={276.217}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F15A24" stopOpacity={0} />
            <stop offset={1} stopColor="#662D91" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_1_872"
            x1={13.43}
            y1={180.437}
            x2={13.43}
            y2={90.8668}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F15A24" stopOpacity={0} />
            <stop offset={0.99} stopColor="#FF0" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_1_872"
            x1={63.02}
            y1={133.947}
            x2={120.21}
            y2={133.947}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F15A24" stopOpacity={0} />
            <stop offset={1} stopColor="#662D91" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_1_872"
            x1={208.28}
            y1={131.857}
            x2={151.08}
            y2={131.857}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F15A24" stopOpacity={0} />
            <stop offset={1} stopColor="#662D91" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_1_872"
            x1={262}
            y1={184.887}
            x2={262}
            y2={93.8268}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F15A24" stopOpacity={0} />
            <stop offset={0.99} stopColor="#FF0" />
          </linearGradient>
          <linearGradient
            id="paint5_linear_1_872"
            x1={79.3559}
            y1={13.2928}
            x2={204.06}
            y2={258.886}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F15A24" stopOpacity={0} />
            <stop offset={1} stopColor="#662D91" />
          </linearGradient>
          <linearGradient
            id="paint6_linear_1_872"
            x1={79.3559}
            y1={13.2928}
            x2={204.06}
            y2={258.886}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F15A24" stopOpacity={0} />
            <stop offset={1} stopColor="#662D91" />
          </linearGradient>
        </defs>
      </svg>
    </m.div>
  );
}