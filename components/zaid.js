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
            ? "translateX(0%) rotate(0deg)"
            : "translateX(0%) rotate(720deg)",
          opacity: isInView ? 1 : 0,
          transition: "all 3s cubic-bezier(.43,.2,.54,1.17)",
          width: "100%",
        }}
      >
        <path
          d="M32.83 126.957s.68-4.8 2.91-12.56c29.96-103.93 160.27-137.99 237.69-62.46 17.34 16.91 32.42 39.17 40.67 68.35"
          stroke="#00002A"
          strokeWidth={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M305.38 155.297c-5.93-72.67-69.66-126.78-142.33-120.84-72.67 5.93-126.78 69.66-120.84 142.33 1.4 17.17 6.03 33.31 13.25 47.86 23.31 47.03 73.59 77.51 129.08 72.98 47.87-3.91 87.67-32.89 107.58-72.98 10.32-20.78 15.29-44.54 13.26-69.35z"
          fill="#F15A24"
        />
        <path
          style={{
            mixBlendMode: "hue",
          }}
          opacity={0.5}
          d="M42.21 176.787c5.93 72.67 69.66 126.78 142.33 120.84 72.67-5.93 126.78-69.66 120.84-142.33-1.4-17.17-6.03-33.31-13.25-47.86-23.31-47.03-73.59-77.51-129.08-72.98-47.87 3.91-87.67 32.89-107.58 72.98-10.32 20.78-15.29 44.54-13.26 69.35z"
          fill="url(#paint0_linear_1_3)"
        />
        <path
          d="M305.38 155.297c-5.93-72.67-69.66-126.78-142.33-120.84-72.67 5.93-126.78 69.66-120.84 142.33 1.4 17.17 6.03 33.31 13.25 47.86 23.31 47.03 73.59 77.51 129.08 72.98 47.87-3.91 87.67-32.89 107.58-72.98 10.32-20.78 15.29-44.54 13.26-69.35z"
          fill="#F15A24"
        />
        <path
          style={{
            mixBlendMode: "hue",
          }}
          opacity={0.5}
          d="M42.21 176.787c5.93 72.67 69.66 126.78 142.33 120.84 72.67-5.93 126.78-69.66 120.84-142.33-1.4-17.17-6.03-33.31-13.25-47.86-23.31-47.03-73.59-77.51-129.08-72.98-47.87 3.91-87.67 32.89-107.58 72.98-10.32 20.78-15.29 44.54-13.26 69.35z"
          fill="url(#paint1_linear_1_3)"
        />
        <path
          d="M95.7 114.217s-11.49 2.69-14.25 12.74M182.77 104.087l.53-9.53"
          stroke="#00002A"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M259.86 117.637c-22.16-8.09-54.6-10.54-68.31-11.24-2.77-.14-4.39-1.25-5.35-3.69-.12.2-.28.46-.46.75-.3.47-1.02.25-1-.31l.26-6.9c.07-1.18.8-2.21 1.9-2.65 2.6-1.04 8.5-2.3 20.71-.69h-.05.07c16.74.82 31.92 3.31 42.02 5.34 7.65 1.54 13.63 7.5 15.17 15.15.58 2.86-2.2 5.24-4.95 4.24h-.01z"
          fill="#00002A"
        />
        <path
          d="M252.4 99.707s12.43 3.77 14.75 15"
          stroke="#00002A"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M83.69 125.757a17.585 17.585 0 0114.65-12.83c12.14-1.63 32.21-3.45 52.79-1.62 3.38.3 5.9 3.23 5.68 6.61-.22 3.31-2.99 5.87-6.3 5.82-12.47-.18-42.02.13-62.59 6.15-2.55.75-4.93-1.57-4.23-4.13z"
          fill="#00002A"
        />
        <path
          d="M158.61 120.567l-.22-8.23M156.37 122.517l-.1-9.99"
          stroke="#00002A"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          opacity={0.34}
          d="M248.68 195.187l2.98 2.84M260.37 195.537l2.98 2.84M256.24 198.007l2.97 2.84M248.61 200.367l2.97 2.84M227.06 212.517l2.98 2.85M222.92 214.987l2.98 2.84M230.98 209.747l2.98 2.85M234.19 216.257l2.98 2.85M222.76 220.607l2.97 2.84M218.62 223.067l2.97 2.85M230.31 223.417l2.98 2.85M226.17 225.887l2.98 2.85M241.62 219.857l2.98 2.85M237.49 222.327l2.97 2.84M248.52 219.937l-2.98-2.85M218.54 228.247l2.98 2.85M256.1 205.247l2.97 2.85M251.96 207.717l2.98 2.84M263.65 208.067l2.98 2.84M259.51 210.537l2.98 2.84M270.83 206.977l2.97 2.84M251.88 212.897l2.98 2.84M270.66 212.587l2.98 2.85M266.52 215.057l2.98 2.85M266.44 220.237l2.98 2.84M262.67 225.177l2.97 2.84M258.53 227.637l2.98 2.85M270.22 227.987l2.98 2.85M266.08 230.457l2.98 2.84M258.45 232.817l2.98 2.85M273.09 234.977l2.98 2.85M242.73 204.027l2.98 2.84M258.56 216.337l2.97 2.85M254.42 218.807l2.98 2.84M251.92 226.207l2.98 2.84M259.46 239.737l2.98 2.84M255.32 242.197l2.98 2.85M263.38 236.967l2.98 2.84M278.79 221.467l2.97 2.85M227.67 241.337l2.97 2.84M192.65 233.847l2.97 2.84M208.1 227.817l2.97 2.84M203.96 230.287l2.98 2.84M212.02 225.047l2.97 2.84M277.83 227.277l2.98 2.84M237.23 230.287l2.98 2.84M233.09 232.747l2.98 2.85M244.4 229.187l2.98 2.85M244.24 234.807l2.97 2.84M240.1 237.277l2.98 2.84M251.79 237.627l2.98 2.84M247.65 240.087l2.98 2.85M240.02 242.457l2.98 2.84M236.24 247.387l2.98 2.84M246.31 246.047l2.97 2.85M242.99 209.997l2.98 2.84M227.41 236.017l2.98 2.85M219.78 238.377l2.98 2.85M216 243.317l2.98 2.84M211.87 245.787l2.97 2.84M223.56 246.137l2.98 2.84M209.29 238.487l2.98 2.85M205.15 240.957l2.98 2.84M213.21 235.717l2.98 2.85M197.43 239.587l2.97 2.84M226.82 252.887l2.98 2.84M222.68 255.347l2.98 2.85M230.74 250.117l2.98 2.84M233.95 256.627l2.97 2.84M222.51 260.967l2.98 2.85M230.07 263.787l2.97 2.84M225.93 266.257l2.98 2.84M241.38 260.227l2.98 2.84M237.24 262.697l2.98 2.84M248.28 260.297l-2.98-2.84M236.99 270.647l2.97 2.85M232.85 273.117l2.98 2.84M244.16 269.557l2.98 2.84M242.75 250.357l2.98 2.85M227.17 276.387l2.98 2.84M186.89 242.127l2.54 3.24M182.44 243.977l2.54 3.24M174.55 245.217l2.54 3.24M151.48 254.157l2.54 3.24M155.76 251.977l2.54 3.25M158 258.887l2.54 3.24M153.13 265.417l2.54 3.24M162.24 254.477l2.54 3.25M164.84 263.517l2.54 3.24M160.39 265.357l2.54 3.25M171.66 264.577l-2.54-3.24M181.26 251.127l2.54 3.24M176.81 252.977l2.54 3.24M188.33 254.997l2.54 3.25M183.88 256.847l2.54 3.24M195.59 254.947l2.54 3.24M175.99 258.087l2.54 3.25M194.62 260.487l2.54 3.24M190.17 262.327l2.54 3.25M189.35 267.447l2.54 3.24M184.9 271.787l2.54 3.24M180.46 273.637l2.53 3.24M191.98 275.657l2.54 3.24M187.53 277.507l2.54 3.24M179.64 278.747l2.54 3.24M193.81 282.987l2.54 3.24M168.21 248.007l2.54 3.24M182.1 262.457l2.54 3.24M177.66 264.307l2.53 3.24M174.12 271.267l2.54 3.24M183.92 283.557l2.54 3.25M151.82 282.377l2.54 3.24M159 273.197l2.54 3.24M154.55 275.047l2.54 3.24M166.26 273.147l2.53 3.24M165.28 278.677l2.54 3.24M160.84 280.527l2.53 3.24M172.36 282.547l2.53 3.25M167.91 284.397l2.54 3.24M167.61 253.947l2.54 3.24M149.23 274.367l2.54 3.24M81.32 240.757l-2.15 3.52M94.31 236.867l-2.15 3.51M89.8 235.197l-2.14 3.51M87.94 242.787l-2.15 3.52M105.55 243.497l-2.02 3.59M102.14 240.097l-2.02 3.59M108.38 250.187l-2.03 3.59M102.89 251.407l-2.02 3.58M99.48 248.007l-2.02 3.58M102.02 259.417l-2.03 3.59M98.61 256.017l-2.02 3.59M96.28 240.597l-2.02 3.59M112.05 259.717l-1.72 3.74M107.38 258.587l-1.72 3.75M123.99 264.987l-1.59 3.8M120.21 262.007l-1.59 3.8M91.16 248.147l-2.15 3.51M85.63 249.177l-2.14 3.51M82.34 245.657l-2.14 3.52M107.58 264.757l-2.13 4.28M92.82 252.867l-2.14 3.52M114.45 263.197l-1.59 3.8M88.99 231.127l-2.18 3.49M100.4 234.097l-2.18 3.49M78.12 222.197l-2.18 3.49M82.74 223.547l-2.17 3.5M71.5 226.807l-2.17 3.49M76.13 228.157l-2.18 3.5M84.11 228.547l-2.18 3.5M72.79 234.287l-2.17 3.5M67.57 226.117l-2.17 3.5M78.5 233.547l-2.18 3.49M83.12 234.897l-2.17 3.5M91.99 223.517l-2.17 3.5M122.21 250.197l-1.72 3.74M117.54 249.067l-1.71 3.74M134.16 255.467l-1.59 3.8M130.37 252.487l-1.59 3.8M117.74 255.227l-2.13 4.29M124.61 253.677l-1.59 3.8M130.06 261.247l-1.58 3.8M126.28 258.267l-1.59 3.8M112 252.867l-1.59 3.8M132.22 271.207l-1.72 3.74M144.16 276.477l-1.59 3.8M140.38 273.497l-1.59 3.8M134.62 274.677l-1.59 3.8M142.38 261.687l-1.72 3.74M137.71 260.557l-1.71 3.74M137.91 266.717l-2.13 4.29M144.78 265.157l-1.59 3.8M146.45 269.747l-1.59 3.8M132.17 264.357l-1.59 3.79M124.63 271.057l-2.54 3.24M117.37 270.997l-2.53 3.24"
          stroke="#00002A"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M283.81 98.987l-.53 53.37c-.04 4.37 2.64 8.32 6.74 9.83 4.26 1.57 10.14 2.2 16.46-1.61 0 0 3.64-61.14-50.56-104.38 0 0-7.54 33.02 27.88 42.79h.01z"
          fill="url(#paint2_linear_1_3)"
        />
        <path
          d="M67.81 93.257l-2.38 53.32c-.19 4.36-3.09 8.17-7.27 9.45-4.34 1.33-10.24 1.65-16.35-2.51 0 0-.31-61.24 56.17-101.47 0 0 5.73 33.38-30.17 41.21z"
          fill="url(#paint3_linear_1_3)"
        />
        <path
          d="M205.65 52.237c-26.28 22.27-40.1 1.58-40.1 1.58s-5.85 10.52-16.66 15.75a35.921 35.921 0 01-11.11 4.73c-19.67 4.71-39.51-7.72-44.31-27.76-4.79-20.04 7.27-40.1 26.94-44.81 4.12-.99 8.25-1.22 12.25-.79 1.43-.05 2.89 0 4.36.16 8.25.91 18.37 4.4 30.17 12.8 0 0 30.42-14.01 49.82 21.17 0 0 26.03 9.46 38.91 21.13l4.68 26.99s-6.61-11.43-5.29-17.42c0 0-29.15 13.42-49.67-13.53h.01z"
          fill="#00002A"
        />
        <path
          d="M182.78 155.287c-.93 17.71 4.46 33.99 21.64 34.89 17.18.9 42.44-10.27 43.37-27.98.93-17.71-12.24-32.81-29.42-33.71-17.18-.91-34.66 9.09-35.59 26.8z"
          fill="#fff"
          stroke="#00002A"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M186.86 157.647c-1 13.32 7.23 24.44 18.4 24.85 11.16.41 7.38-10.39 8.38-23.71 1-13.32 6.42-24.11-4.75-24.52-11.16-.41-21.03 10.06-22.03 23.38z"
          fill="#00002A"
        />
        <path
          d="M214.31 148.617a3.96 3.96 0 100-7.92 3.96 3.96 0 000 7.92z"
          fill="#fff"
        />
        <path
          style={{
            mixBlendMode: "multiply",
          }}
          opacity={0.48}
          d="M218.37 128.537c-1.65-.09-3.3-.07-4.94.04 15.4 2.65 26.72 16.84 25.85 33.31-.85 16.05-21.67 26.74-38.36 27.93 1.11.22 2.27.36 3.5.43 17.18.91 42.44-10.27 43.37-27.98.93-17.71-12.24-32.81-29.42-33.71v-.02z"
          fill="url(#paint4_linear_1_3)"
        />
        <path
          d="M225.3 129.907s17.36 2.23 22.75 25.85c0 0 2.59 11.9-7.42 21.56 0 0 21.14-15.68-.05-39.86-3.14-3.58-7.39-6.06-12.02-7.17-1.18-.28-2.32-.45-3.25-.39l-.01.01z"
          fill="#00002A"
        />
        <path
          d="M94.08 156.157c-.93 17.71 4.46 33.99 21.64 34.89 17.18.91 42.44-10.27 43.37-27.98.93-17.71-12.24-32.81-29.42-33.71-17.18-.91-34.66 9.09-35.59 26.8z"
          fill="#fff"
          stroke="#00002A"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M98.16 158.517c-1 13.32 7.23 24.44 18.4 24.85 11.16.41 7.38-10.39 8.38-23.71 1-13.32 6.42-24.11-4.75-24.52-11.16-.41-21.03 10.06-22.03 23.38z"
          fill="#00002A"
        />
        <path
          d="M125.62 149.477a3.96 3.96 0 100-7.92 3.96 3.96 0 000 7.92z"
          fill="#fff"
        />
        <path
          style={{
            mixBlendMode: "multiply",
          }}
          opacity={0.48}
          d="M129.68 129.397c-1.65-.09-3.3-.07-4.94.04 15.4 2.65 26.72 16.84 25.85 33.31-.85 16.05-21.67 26.74-38.36 27.93 1.11.22 2.27.36 3.5.43 17.18.91 42.44-10.27 43.37-27.98.93-17.71-12.24-32.81-29.42-33.71v-.02z"
          fill="url(#paint5_linear_1_3)"
        />
        <path
          d="M136.6 130.777s17.36 2.23 22.75 25.85c0 0 2.59 11.9-7.42 21.56 0 0 21.14-15.68-.05-39.86-3.14-3.58-7.39-6.06-12.02-7.17-1.18-.28-2.32-.45-3.25-.39l-.01.01z"
          fill="#00002A"
        />
        <path
          d="M323.33 124.467v-35.01c0-5.61-4.55-10.16-10.16-10.16s-10.16 4.55-10.16 10.16v35.87c0 3.22 2.6 5.84 5.82 5.85l7.73.04c3.74.02 6.78-3.01 6.78-6.74l-.01-.01zM332.6 182.367h-.67v-46.59h.67c7.61 0 13.79 6.18 13.79 13.79v19.01c0 7.61-6.18 13.79-13.79 13.79z"
          fill="#F15A24"
        />
        <mask
          id="a"
          style={{
            maskType: "luminance",
          }}
          maskUnits="userSpaceOnUse"
          x={88}
          y={173}
          width={75}
          height={42}
        >
          <path
            d="M162.05 180.177c-32.79-17.22-73.52 4.34-73.52 4.34l8.58 24.89 42.09 5.23 16.08-4.61 6.77-29.85z"
            fill="#fff"
          />
        </mask>
        <g mask="url(#a)">
          <path
            d="M206.45 160.087c-3.66-67.49-61.34-119.23-128.83-115.57-67.49 3.66-119.23 61.34-115.57 128.83.87 15.95 4.75 31.02 11.07 44.69 20.41 44.16 66.23 73.68 117.77 70.88 44.45-2.41 82.07-28.26 101.53-64.91 10.08-18.99 15.29-40.89 14.04-63.93l-.01.01z"
            fill="#F15A24"
          />
          <path
            style={{
              mixBlendMode: "hue",
            }}
            opacity={0.5}
            d="M-37.95 173.347c3.66 67.49 61.34 119.23 128.83 115.57 67.49-3.66 119.23-61.34 115.57-128.83-.87-15.95-4.75-31.02-11.07-44.69-20.41-44.16-66.23-73.68-117.77-70.88-44.45 2.41-82.07 28.26-101.53 64.91-10.08 18.99-15.29 40.89-14.04 63.93l.01-.01z"
            fill="url(#paint6_linear_1_3)"
          />
          <path
            d="M206.45 160.087c-3.66-67.49-61.34-119.23-128.83-115.57-67.49 3.66-119.23 61.34-115.57 128.83.87 15.95 4.75 31.02 11.07 44.69 20.41 44.16 66.23 73.68 117.77 70.88 44.45-2.41 82.07-28.26 101.53-64.91 10.08-18.99 15.29-40.89 14.04-63.93l-.01.01z"
            fill="#F15A24"
          />
          <path
            style={{
              mixBlendMode: "hue",
            }}
            opacity={0.5}
            d="M-37.95 173.347c3.66 67.49 61.34 119.23 128.83 115.57 67.49-3.66 119.23-61.34 115.57-128.83-.87-15.95-4.75-31.02-11.07-44.69-20.41-44.16-66.23-73.68-117.77-70.88-44.45 2.41-82.07 28.26-101.53 64.91-10.08 18.99-15.29 40.89-14.04 63.93l.01-.01z"
            fill="url(#paint7_linear_1_3)"
          />
        </g>
        <path
          d="M95.43 182.067s31.23-18.27 60.46-3.52"
          stroke="#00002A"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <mask
          id="b"
          style={{
            maskType: "luminance",
          }}
          maskUnits="userSpaceOnUse"
          x={179}
          y={171}
          width={75}
          height={42}
        >
          <path
            d="M253.29 177.737c-32.79-17.22-73.52 4.34-73.52 4.34l8.58 24.89 42.09 5.23 16.08-4.61 6.77-29.85z"
            fill="#fff"
          />
        </mask>
        <g mask="url(#b)">
          <path
            d="M297.7 157.647c-3.66-67.49-61.34-119.23-128.83-115.57-67.49 3.66-119.23 61.34-115.57 128.83.87 15.95 4.75 31.02 11.07 44.69 20.41 44.16 66.23 73.68 117.77 70.88 44.45-2.41 82.07-28.26 101.53-64.91 10.08-18.99 15.29-40.89 14.04-63.93l-.01.01z"
            fill="#F15A24"
          />
          <path
            style={{
              mixBlendMode: "hue",
            }}
            opacity={0.5}
            d="M53.29 170.907c3.66 67.49 61.34 119.23 128.83 115.57 67.49-3.66 119.23-61.34 115.57-128.83-.87-15.95-4.75-31.02-11.07-44.69-20.41-44.16-66.23-73.68-117.77-70.88-44.45 2.41-82.07 28.26-101.53 64.91-10.08 18.99-15.29 40.89-14.04 63.93l.01-.01z"
            fill="url(#paint8_linear_1_3)"
          />
          <path
            d="M297.7 157.647c-3.66-67.49-61.34-119.23-128.83-115.57-67.49 3.66-119.23 61.34-115.57 128.83.87 15.95 4.75 31.02 11.07 44.69 20.41 44.16 66.23 73.68 117.77 70.88 44.45-2.41 82.07-28.26 101.53-64.91 10.08-18.99 15.29-40.89 14.04-63.93l-.01.01z"
            fill="#F15A24"
          />
          <path
            style={{
              mixBlendMode: "hue",
            }}
            opacity={0.5}
            d="M53.29 170.907c3.66 67.49 61.34 119.23 128.83 115.57 67.49-3.66 119.23-61.34 115.57-128.83-.87-15.95-4.75-31.02-11.07-44.69-20.41-44.16-66.23-73.68-117.77-70.88-44.45 2.41-82.07 28.26-101.53 64.91-10.08 18.99-15.29 40.89-14.04 63.93l.01-.01z"
            fill="url(#paint9_linear_1_3)"
          />
        </g>
        <path
          d="M186.67 179.627s31.23-18.27 60.46-3.52M177.01 210.667c11.59-4.45 24.71-14.44 30.56-8.55 4.55 4.58 9.71 13.66-4.9 26.03-8.51 7.2-19.09 11.5-30.19 12.57l-10.51 1.01c-29.87 2.13-30.67-9.1-29.2-15.16.67-2.78 3.61-4.01 7.49-4.69 12.66-2.22 25.01-5.98 36.76-11.21h-.01zM151.77 230.757s35.21-.39 52.63-16.43M207.04 197.377s5.69 13.42 10.24 15.49M132.44 219.147s1.01 14.54-2.11 18.45"
          stroke="#00002A"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <mask
          id="c"
          style={{
            maskType: "luminance",
          }}
          maskUnits="userSpaceOnUse"
          x={188}
          y={214}
          width={63}
          height={72}
        >
          <path
            d="M228.01 285.507s-13.68-30.33-31.73-42.04c-1.15-.74-1.8-2.09-1.57-3.43.19-1.07.93-2.16 2.99-2.63 0 0-.46-5.35 4.79-4.03 0 0-1.6-3.57 4.55-5 0 0-7.98-5.95-17.45-9.51-2.09-.79-1.81-3.82.39-4.19.28-.05.58-.08.91-.1 0 0 19.62 5.75 39 25.28 0 0 7.21-.14 12.84 12.66 0 0 6.29 15.4 7.87 20.71 0 0-11.12 9.31-22.6 12.27l.01.01z"
            fill="#fff"
          />
        </mask>
        <g mask="url(#c)">
          <path
            d="M54.39 187.897c-10.15-69.17 37.69-133.47 106.86-143.62 69.17-10.15 133.47 37.69 143.62 106.86 2.4 16.35 1.56 32.42-2.04 47.57-11.62 48.96-52 88.29-104.82 96.05-45.56 6.69-89-11.79-116.25-44.94-14.12-17.18-23.9-38.31-27.37-61.92z"
            fill="#F15A24"
          />
          <path
            style={{
              mixBlendMode: "hue",
            }}
            opacity={0.5}
            d="M304.86 151.137c10.15 69.17-37.69 133.47-106.86 143.62-69.17 10.15-133.47-37.69-143.62-106.86-2.4-16.35-1.56-32.42 2.04-47.57 11.62-48.96 52-88.29 104.82-96.05 45.56-6.69 89 11.79 116.25 44.94 14.12 17.18 23.9 38.31 27.37 61.92z"
            fill="url(#paint10_linear_1_3)"
          />
          <path
            d="M54.39 187.897c-10.15-69.17 37.69-133.47 106.86-143.62 69.17-10.15 133.47 37.69 143.62 106.86 2.4 16.35 1.56 32.42-2.04 47.57-11.62 48.96-52 88.29-104.82 96.05-45.56 6.69-89-11.79-116.25-44.94-14.12-17.18-23.9-38.31-27.37-61.92z"
            fill="#F15A24"
          />
          <path
            style={{
              mixBlendMode: "hue",
            }}
            opacity={0.5}
            d="M304.86 151.137c10.15 69.17-37.69 133.47-106.86 143.62-69.17 10.15-133.47-37.69-143.62-106.86-2.4-16.35-1.56-32.42 2.04-47.57 11.62-48.96 52-88.29 104.82-96.05 45.56-6.69 89 11.79 116.25 44.94 14.12 17.18 23.9 38.31 27.37 61.92z"
            fill="url(#paint11_linear_1_3)"
          />
        </g>
        <path
          d="M227.97 285.467s-13.68-30.33-31.73-42.04c-1.15-.74-1.8-2.09-1.57-3.43.19-1.07.93-2.16 2.99-2.63 0 0-.46-5.35 4.79-4.03 0 0-1.6-3.57 4.55-5 0 0-7.98-5.95-17.45-9.51-2.09-.79-1.81-3.82.39-4.19.28-.05.58-.08.91-.1 0 0 19.62 5.75 39 25.28 0 0 7.21-.14 12.84 12.66 0 0 6.29 15.4 7.87 20.71M202.46 233.337l6.12 4.98M197.66 237.367s5.93 4.2 8.06 5.59M229.87 239.827l5.67 6.98M207.01 228.347l7.32 5.27M161.73 210.177s-12.76-18.72-10.09-28.76c0 0 10.86-2.99 27.29 3.75"
          stroke="#00002A"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21.86 128.287v-37.97c0-6.09 4.94-11.02 11.02-11.02 6.09 0 11.02 4.94 11.02 11.02v37.94c0 4.03-3.25 7.29-7.28 7.31l-7.42.04c-4.05.02-7.35-3.26-7.35-7.31l.01-.01zM12.78 140.157h.67c.87 0 1.58.71 1.58 1.58v43.33c0 .87-.71 1.58-1.58 1.58h-.67c-6.72 0-12.18-5.46-12.18-12.18v-22.15c0-6.72 5.46-12.18 12.18-12.18v.02z"
          fill="#F15A24"
        />
        <path
          opacity={0.25}
          d="M9.41 141.297l5.62 45.36v-46.5s-3.5.24-5.62 1.14zM338.16 137.067l-5.64 45.45v-46.59s3.5.24 5.64 1.14zM23.81 114.417l20.09-16.33v20.22l-20.09-3.89z"
          fill="#00002A"
        />
        <path
          d="M35.38 111.287h-1.82c-10.389 0-18.81 8.421-18.81 18.81v66.6c0 10.388 8.422 18.81 18.81 18.81h1.82c10.388 0 18.81-8.422 18.81-18.81v-66.6c0-10.389-8.422-18.81-18.81-18.81z"
          fill="#00002A"
        />
        <path d="M34.77 135.447h-3.1v79.79h3.1v-79.79z" fill="#F4FF15" />
        <path
          opacity={0.25}
          d="M302.83 109.337l20.14-14.72v17.24l-20.14-2.52z"
          fill="#00002A"
        />
        <path
          d="M311.54 211.267h1.84c10.405 0 18.84-8.435 18.84-18.84v-66.75c0-10.405-8.435-18.84-18.84-18.84h-1.84c-10.405 0-18.84 8.435-18.84 18.84v66.75c0 10.405 8.435 18.84 18.84 18.84z"
          fill="#00002A"
        />
        <path d="M315.38 107.017h-4.03v103.87h4.03v-103.87z" fill="#F4FF15" />
        <defs>
          <linearGradient
            id="paint0_linear_1_3"
            x1={173.79}
            y1={34.0067}
            x2={173.79}
            y2={298.077}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F15A24" stopOpacity={0} />
            <stop offset={1} stopColor="#662D91" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_1_3"
            x1={173.79}
            y1={34.0067}
            x2={173.79}
            y2={298.077}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F15A24" stopOpacity={0} />
            <stop offset={1} stopColor="#662D91" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_1_3"
            x1={279.496}
            y1={162.942}
            x2={282.383}
            y2={56.9114}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F15A24" stopOpacity={0} />
            <stop offset={0.43} stopColor="#00002A" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_1_3"
            x1={68.6603}
            y1={157.398}
            x2={71.5481}
            y2={51.3571}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F15A24" stopOpacity={0} />
            <stop offset={0.43} stopColor="#00002A" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_1_3"
            x1={202.358}
            y1={158.932}
            x2={247.955}
            y2={160.899}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F15A24" stopOpacity={0} />
            <stop offset={1} stopColor="#662D91" />
          </linearGradient>
          <linearGradient
            id="paint5_linear_1_3"
            x1={113.668}
            y1={159.8}
            x2={159.265}
            y2={161.767}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F15A24" stopOpacity={0} />
            <stop offset={1} stopColor="#662D91" />
          </linearGradient>
          <linearGradient
            id="paint6_linear_1_3"
            x1={87.5759}
            y1={44.3736}
            x2={80.9121}
            y2={289.063}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F15A24" stopOpacity={0} />
            <stop offset={1} stopColor="#662D91" />
          </linearGradient>
          <linearGradient
            id="paint7_linear_1_3"
            x1={87.5759}
            y1={44.3736}
            x2={80.9121}
            y2={289.063}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F15A24" stopOpacity={0} />
            <stop offset={1} stopColor="#662D91" />
          </linearGradient>
          <linearGradient
            id="paint8_linear_1_3"
            x1={178.826}
            y1={41.9368}
            x2={172.162}
            y2={286.616}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F15A24" stopOpacity={0} />
            <stop offset={1} stopColor="#662D91" />
          </linearGradient>
          <linearGradient
            id="paint9_linear_1_3"
            x1={178.826}
            y1={41.9368}
            x2={172.162}
            y2={286.616}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F15A24" stopOpacity={0} />
            <stop offset={1} stopColor="#662D91" />
          </linearGradient>
          <linearGradient
            id="paint10_linear_1_3"
            x1={151.194}
            y1={46.0919}
            x2={208.231}
            y2={292.753}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F15A24" stopOpacity={0} />
            <stop offset={1} stopColor="#662D91" />
          </linearGradient>
          <linearGradient
            id="paint11_linear_1_3"
            x1={151.194}
            y1={46.0919}
            x2={208.231}
            y2={292.753}
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