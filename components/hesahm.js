import { motion as m, useInView } from "framer-motion";

import { useRef } from "react";

export default function Hesahm({ className }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }, { amount: 0.9 });

  return (
    <m.div className={className}>
      <svg
        width={278}
        height={303}
        viewBox="0 0 278 303"
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
          d="M276.19 153.29C270 77.48 203.53 21.05 127.73 27.24C51.92 33.43 -4.50997 99.8999 1.68003 175.7C3.14003 193.61 7.97003 210.45 15.5 225.63C39.81 274.68 92.26 306.48 150.15 301.75C200.08 297.67 241.6 267.45 262.37 225.63C273.13 203.96 278.32 179.17 276.21 153.29H276.19Z"
          fill="#F15A24"
        />
        <path
          style={{ mixBlendMode: "hue" }}
          opacity="0.5"
          d="M1.67008 175.7C7.86008 251.51 74.3301 307.94 150.13 301.75C225.94 295.56 282.37 229.09 276.18 153.29C274.72 135.38 269.89 118.54 262.36 103.36C238.05 54.3099 185.6 22.5099 127.71 27.2399C77.7801 31.3199 36.2601 61.5399 15.4901 103.36C4.73009 125.03 -0.459915 149.82 1.65009 175.7H1.67008Z"
          fill="url(#paint0_linear_2_339)"
        />
        <path
          d="M276.19 153.29C270 77.48 203.53 21.05 127.73 27.24C51.92 33.43 -4.50997 99.8999 1.68003 175.7C3.14003 193.61 7.97003 210.45 15.5 225.63C39.81 274.68 92.26 306.48 150.15 301.75C200.08 297.67 241.6 267.45 262.37 225.63C273.13 203.96 278.32 179.17 276.21 153.29H276.19Z"
          fill="#F15A24"
        />
        <path
          style={{ mixBlendMode: "hue" }}
          opacity="0.5"
          d="M1.67008 175.7C7.86008 251.51 74.3301 307.94 150.13 301.75C225.94 295.56 282.37 229.09 276.18 153.29C274.72 135.38 269.89 118.54 262.36 103.36C238.05 54.3099 185.6 22.5099 127.71 27.2399C77.7801 31.3199 36.2601 61.5399 15.4901 103.36C4.73009 125.03 -0.459915 149.82 1.65009 175.7H1.67008Z"
          fill="url(#paint1_linear_2_339)"
        />
        <path
          d="M97.8001 217.64C97.8001 217.64 84.4901 198.11 87.2801 187.64C87.2801 187.64 98.6101 184.52 115.75 191.55"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M30.2601 156.63C30.2601 156.63 17.3001 152.69 14.8801 140.97"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <g style={{ mixBlendMode: "multiply" }} opacity="0.3">
          <path
            d="M153.87 214.21C153.87 214.21 118.23 210.17 122.6 180.09C123.9 171.11 128.29 162.83 134.92 156.63C142.59 149.47 155.11 142.66 170.71 151.86C177.3 155.75 182.56 161.55 186.01 168.38L189.19 174.68C189.19 174.68 156.29 182.29 153.88 214.2L153.87 214.21Z"
            fill="#F15A24"
          />
        </g>
        <path
          d="M187.51 194.73C182.5 211.78 170.85 218.74 153.8 213.73C136.75 208.72 119.98 194.62 124.99 177.57C130 160.52 152.2 150.77 169.25 155.78C186.3 160.79 192.52 177.68 187.5 194.73H187.51Z"
          fill="white"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M170.79 196.55C179.875 196.55 187.24 189.185 187.24 180.1C187.24 171.015 179.875 163.65 170.79 163.65C161.705 163.65 154.34 171.015 154.34 180.1C154.34 189.185 161.705 196.55 170.79 196.55Z"
          fill="#00002A"
        />
        <path
          style={{ mixBlendMode: "multiply" }}
          opacity="0.48"
          d="M179.46 188.86C182.79 177.54 181.16 166.3 174.71 158.55C187.61 165.26 191.98 180.22 187.54 195.32C182.53 212.37 170.88 219.33 153.83 214.32C145.73 211.94 137.7 207.5 132.03 201.68C136.27 204.36 141 206.46 145.75 207.86C162.8 212.87 174.45 205.91 179.46 188.86Z"
          fill="url(#paint2_linear_2_339)"
        />
        <path
          d="M155.13 182.97C157.063 182.97 158.63 181.403 158.63 179.47C158.63 177.537 157.063 175.97 155.13 175.97C153.197 175.97 151.63 177.537 151.63 179.47C151.63 181.403 153.197 182.97 155.13 182.97Z"
          fill="white"
        />
        <path
          d="M126.88 172.9C126.88 172.9 165.47 172.3 189.17 182.2C189.17 182.2 189.31 156.65 166.34 152.02C155.72 149.88 144.62 152.59 136.37 159.61C132.7 162.73 129.18 167.03 126.88 172.89V172.9Z"
          fill="#F15A24"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M114.76 153.09L115.32 163.03"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M195.17 138.96C172.05 147.4 138.22 149.95 123.91 150.68C121.02 150.83 119.33 151.99 118.33 154.53C118.21 154.32 118.04 154.05 117.85 153.74C117.54 153.25 116.78 153.48 116.81 154.06L117.08 161.26C117.15 162.49 117.92 163.57 119.06 164.03C121.77 165.11 127.93 166.42 140.66 164.75C140.66 164.75 140.64 164.75 140.6 164.75C140.63 164.75 140.65 164.75 140.68 164.75C140.68 164.75 140.67 164.75 140.66 164.75C140.66 164.75 140.66 164.75 140.68 164.75C158.14 163.89 173.97 161.3 184.51 159.18C192.49 157.58 198.73 151.36 200.34 143.38C200.94 140.39 198.04 137.91 195.18 138.96H195.17Z"
          fill="#00002A"
        />
        <path
          d="M187.39 157.66C187.39 157.66 200.35 153.73 202.78 142.01"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <g style={{ mixBlendMode: "multiply" }} opacity="0.3">
          <path
            d="M53.02 209.07C53.02 209.07 18.33 209.03 19.28 179.65C19.56 170.88 22.88 162.45 28.58 155.79C35.17 148.08 46.47 140.19 62.45 147.36C69.21 150.39 74.88 155.4 78.94 161.59L82.68 167.3C82.68 167.3 51.89 178.16 53.03 209.08L53.02 209.07Z"
            fill="#F15A24"
          />
        </g>
        <path
          d="M84.3001 190.6C79.2901 207.65 67.6401 214.61 50.5901 209.6C33.5401 204.59 16.7701 190.49 21.7801 173.44C26.7901 156.39 48.9901 146.64 66.0401 151.65C83.0901 156.66 89.3101 173.55 84.2901 190.6H84.3001Z"
          fill="white"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M67.5801 192.41C76.6652 192.41 84.0301 185.045 84.0301 175.96C84.0301 166.875 76.6652 159.51 67.5801 159.51C58.495 159.51 51.1301 166.875 51.1301 175.96C51.1301 185.045 58.495 192.41 67.5801 192.41Z"
          fill="#00002A"
        />
        <path
          style={{ mixBlendMode: "multiply" }}
          opacity="0.48"
          d="M76.2501 184.72C79.5801 173.4 77.9501 162.16 71.5001 154.41C84.4001 161.12 88.7701 176.08 84.3301 191.18C79.3201 208.23 67.6701 215.19 50.6201 210.18C42.5201 207.8 34.4901 203.36 28.8201 197.54C33.0601 200.22 37.7901 202.32 42.5401 203.72C59.5901 208.73 71.2401 201.77 76.2501 184.72Z"
          fill="url(#paint3_linear_2_339)"
        />
        <path
          d="M51.92 178.83C53.853 178.83 55.42 177.263 55.42 175.33C55.42 173.397 53.853 171.83 51.92 171.83C49.987 171.83 48.42 173.397 48.42 175.33C48.42 177.263 49.987 178.83 51.92 178.83Z"
          fill="white"
        />
        <path
          d="M23.67 168.76C23.67 168.76 62.2601 168.16 85.9601 178.06C85.9601 178.06 86.1 152.51 63.13 147.88C52.51 145.74 41.41 148.45 33.16 155.47C29.49 158.59 25.97 162.89 23.67 168.75V168.76Z"
          fill="#F15A24"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M17.36 142.51C18.97 150.48 25.21 156.71 33.19 158.31C46.98 161.08 69.83 164.68 93.56 164.11C97.45 164.02 100.56 160.85 100.56 156.96C100.56 153.15 97.58 150.01 93.77 149.82C79.46 149.09 45.63 146.54 22.51 138.1C19.65 137.06 16.75 139.54 17.35 142.52L17.36 142.51Z"
          fill="#00002A"
        />
        <path
          d="M102.82 154.05L101.95 163.47"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M100.41 151.66L99.54 163.09"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M217.05 194.89L220.15 197.86"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M229.24 195.25L232.35 198.22"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M224.93 197.83L228.03 200.79"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M216.97 200.29L220.07 203.26"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M194.49 212.97L197.6 215.94"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M190.18 215.54L193.28 218.51"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M198.58 210.08L201.69 213.05"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M201.93 216.87L205.03 219.84"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M190 221.4L193.11 224.37"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M185.69 223.98L188.79 226.94"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M197.88 224.34L200.99 227.31"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M193.56 226.92L196.67 229.88"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M209.68 220.63L212.79 223.59"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M205.37 223.2L208.47 226.17"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M216.88 220.71L213.77 217.74"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M185.6 229.38L188.71 232.34"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M224.78 205.39L227.88 208.35"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M220.46 207.96L223.57 210.93"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M232.66 208.33L235.76 211.29"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M228.34 210.9L231.45 213.87"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M240.14 207.19L243.25 210.15"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M220.38 213.36L223.49 216.33"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M239.97 213.05L243.07 216.01"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M235.65 215.62L238.76 218.59"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M235.57 221.02L238.68 223.99"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M231.63 226.17L234.74 229.14"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M227.32 228.74L230.42 231.71"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M239.51 229.11L242.62 232.07"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M235.2 231.68L238.3 234.65"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M227.24 234.14L230.34 237.11"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M242.5 236.4L245.61 239.37"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M210.84 204.11L213.94 207.08"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M227.35 216.95L230.45 219.92"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M223.03 219.53L226.13 222.49"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M220.42 227.24L223.53 230.21"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M228.29 241.36L231.39 244.32"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M223.97 243.93L227.08 246.9"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M232.38 238.47L235.48 241.44"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M248.45 222.31L251.55 225.27"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M195.12 243.03L198.23 245.99"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M162.91 232.64L166.01 235.61"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M158.59 235.21L161.7 238.18"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M174.71 228.93L177.81 231.89"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M170.39 231.5L173.5 234.47"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M178.8 226.04L181.91 229.01"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M247.45 228.36L250.55 231.33"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M205.1 231.5L208.2 234.47"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M200.78 234.07L203.89 237.04"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M212.58 230.36L215.69 233.32"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M212.41 236.22L215.51 239.18"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M208.09 238.79L211.2 241.76"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M220.29 239.16L223.39 242.12"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M215.97 241.73L219.08 244.7"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M208.01 244.19L211.12 247.16"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M204.07 249.34L207.18 252.31"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M214.57 247.95L217.67 250.91"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M211.11 210.34L214.22 213.3"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M194.86 237.48L197.96 240.45"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M186.9 239.95L190 242.91"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M182.96 245.1L186.06 248.06"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M178.64 247.67L181.75 250.63"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M190.84 248.03L193.94 251"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M175.96 240.06L179.06 243.03"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M171.64 242.63L174.74 245.6"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M180.05 237.17L183.15 240.14"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M163.58 241.21L166.69 244.17"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M150.89 221.01C150.89 221.01 165.86 211.56 180.76 215.91"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <mask
          id="mask0_2_339"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="73"
          y="217"
          width="66"
          height="28"
        >
          <path
            d="M111.36 221.39C121.15 219.76 133.03 214.05 136.66 219.6C139.49 223.91 142.07 231.85 128.64 239.2C120.82 243.48 111.84 245.14 102.98 244.2L94.58 243.31C70.85 240.19 72.02 231.26 74.14 226.75C75.11 224.68 77.61 224.19 80.76 224.28C91.03 224.57 101.31 223.61 111.34 221.4L111.36 221.39Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0_2_339)">
          <path
            d="M254 256.97C261.54 332.65 206.31 400.12 130.63 407.67C54.95 415.21 -12.52 359.98 -20.07 284.3C-21.85 266.41 -20.13 248.99 -15.46 232.7C-0.36997 180.07 45.5 139.36 103.3 133.6C153.15 128.63 199.43 150.9 227.38 188.3C241.86 207.69 251.42 231.14 254 256.97Z"
            fill="#F15A24"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <g style={{ mixBlendMode: "hue" }} opacity="0.5">
            <path
              d="M-20.07 284.29C-27.61 208.61 27.62 141.14 103.3 133.59C178.98 126.05 246.45 181.28 254 256.96C255.78 274.85 254.06 292.27 249.39 308.56C234.3 361.19 188.43 401.9 130.63 407.66C80.78 412.63 34.5 390.36 6.55001 352.96C-7.92999 333.57 -17.49 310.12 -20.07 284.29Z"
              fill="url(#paint4_linear_2_339)"
              style={{ mixBlendMode: "hue" }}
            />
            <path
              d="M-20.07 284.29C-27.61 208.61 27.62 141.14 103.3 133.59C178.98 126.05 246.45 181.28 254 256.96C255.78 274.85 254.06 292.27 249.39 308.56C234.3 361.19 188.43 401.9 130.63 407.66C80.78 412.63 34.5 390.36 6.55001 352.96C-7.92999 333.57 -17.49 310.12 -20.07 284.29Z"
              stroke="#00002A"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <path
            d="M254 256.97C261.54 332.65 206.31 400.12 130.63 407.67C54.95 415.21 -12.52 359.98 -20.07 284.3C-21.85 266.41 -20.13 248.99 -15.46 232.7C-0.36997 180.07 45.5 139.36 103.3 133.6C153.15 128.63 199.43 150.9 227.38 188.3C241.86 207.69 251.42 231.14 254 256.97Z"
            fill="#F15A24"
            stroke="#00002A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <g style={{ mixBlendMode: "hue" }} opacity="0.5">
            <path
              d="M-20.07 284.29C-27.61 208.61 27.62 141.14 103.3 133.59C178.98 126.05 246.45 181.28 254 256.96C255.78 274.85 254.06 292.27 249.39 308.56C234.3 361.19 188.43 401.9 130.63 407.66C80.78 412.63 34.5 390.36 6.55001 352.96C-7.92999 333.57 -17.49 310.12 -20.07 284.29Z"
              fill="url(#paint5_linear_2_339)"
              style={{ mixBlendMode: "hue" }}
            />
            <path
              d="M-20.07 284.29C-27.61 208.61 27.62 141.14 103.3 133.59C178.98 126.05 246.45 181.28 254 256.96C255.78 274.85 254.06 292.27 249.39 308.56C234.3 361.19 188.43 401.9 130.63 407.66C80.78 412.63 34.5 390.36 6.55001 352.96C-7.92999 333.57 -17.49 310.12 -20.07 284.29Z"
              stroke="#00002A"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </g>
        <path
          d="M111.36 221.39C121.15 219.76 133.03 214.05 136.66 219.6C139.49 223.91 142.07 231.85 128.64 239.2C120.82 243.48 111.84 245.14 102.98 244.2L94.58 243.31C70.85 240.19 72.02 231.26 74.14 226.75C75.11 224.68 77.61 224.19 80.76 224.28C91.03 224.57 101.31 223.61 111.34 221.4L111.36 221.39Z"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M88.36 233.08C88.36 233.08 115.99 238.43 132.21 228.66"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M194.24 255.07L197.34 258.04"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M189.92 257.65L193.03 260.61"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M198.33 252.19L201.44 255.15"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M201.68 258.98L204.78 261.94"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M189.75 263.51L192.85 266.47"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M197.63 266.45L200.73 269.41"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M193.31 269.02L196.42 271.99"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M209.43 262.73L212.53 265.7"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M205.11 265.31L208.22 268.27"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M216.62 262.81L213.52 259.84"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M204.85 273.6L207.95 276.57"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M200.53 276.18L203.64 279.14"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M212.33 272.46L215.44 275.43"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M210.86 252.44L213.96 255.41"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M194.61 279.59L197.71 282.56"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M140.57 241.74L143.22 245.13"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M152.59 243.86L155.24 247.24"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M147.95 245.78L150.6 249.16"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M139.72 247.08L142.36 250.46"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M115.66 256.4L118.3 259.79"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M120.12 254.13L122.77 257.51"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M122.46 261.33L125.1 264.71"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M117.38 268.14L120.03 271.53"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M126.88 256.74L129.53 260.12"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M129.59 266.16L132.24 269.54"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M124.95 268.09L127.6 271.47"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M136.7 267.27L134.05 263.89"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M146.72 253.24L149.37 256.63"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M142.08 255.17L144.73 258.55"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M154.09 257.28L156.74 260.66"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M149.45 259.21L152.1 262.59"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M161.67 257.23L164.31 260.61"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M141.22 260.51L143.87 263.89"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M160.65 263L163.3 266.38"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M156.01 264.93L158.66 268.31"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M155.16 270.26L157.8 273.64"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M150.52 274.79L153.17 278.17"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M145.88 276.72L148.53 280.1"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M157.9 278.83L160.54 282.21"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M153.26 280.76L155.9 284.14"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M145.02 282.06L147.67 285.44"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M159.81 286.48L162.46 289.86"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M133.1 249.98L135.75 253.36"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M147.6 265.06L150.25 268.44"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M142.96 266.99L145.61 270.37"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M139.27 274.25L141.92 277.63"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M145.03 289.35L147.68 292.73"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M140.39 291.27L143.04 294.65"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M149.49 287.07L152.14 290.45"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M116.01 285.84L118.66 289.22"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M123.5 276.26L126.14 279.64"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M118.86 278.19L121.5 281.57"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M131.07 276.21L133.71 279.59"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M130.05 281.98L132.7 285.36"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M125.41 283.91L128.06 287.29"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M137.43 286.02L140.08 289.4"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M132.79 287.95L135.44 291.33"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M124.56 289.24L127.21 292.62"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M132.48 256.18L135.13 259.56"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M113.31 277.49L115.96 280.87"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <mask
          id="mask1_2_339"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="137"
          y="219"
          width="56"
          height="81"
        >
          <path
            d="M167.21 299.25C167.21 299.25 158.27 265.71 141.68 250.6C140.63 249.64 140.18 248.14 140.65 246.8C141.02 245.73 141.98 244.74 144.18 244.6C144.18 244.6 144.62 239.02 149.8 241.27C149.8 241.27 148.76 237.32 155.33 236.9C155.33 236.9 148.12 229.42 138.99 224.15C136.97 222.99 137.77 219.92 140.11 219.91C140.4 219.91 140.72 219.92 141.06 219.96C141.06 219.96 160.28 229.21 176.91 252.6C176.91 252.6 184.35 253.68 187.97 267.81C187.97 267.81 191.83 284.73 192.55 290.46C192.55 290.46 179.53 298.16 167.21 299.26V299.25Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask1_2_339)">
          <path
            d="M5.09007 169.33C6.38007 96.4199 66.5301 38.3599 139.44 39.6499C212.35 40.9399 270.41 101.09 269.12 174C268.82 191.23 265.22 207.63 258.95 222.61C238.69 271.03 190.45 304.66 134.77 303.68C86.7501 302.83 45.1701 276.45 22.7501 237.7C11.1301 217.62 4.65007 194.22 5.09007 169.33Z"
            fill="#F15A24"
          />
          <path
            style={{ mixBlendMode: "hue" }}
            opacity="0.5"
            d="M269.11 174C267.82 246.91 207.67 304.97 134.76 303.68C61.85 302.39 3.79005 242.24 5.08005 169.33C5.38005 152.1 8.98004 135.7 15.25 120.72C35.51 72.2999 83.75 38.67 139.43 39.65C187.45 40.5 229.03 66.8799 251.45 105.63C263.07 125.71 269.55 149.11 269.11 174Z"
            fill="url(#paint6_linear_2_339)"
          />
          <path
            d="M5.09007 169.33C6.38007 96.4199 66.5301 38.3599 139.44 39.6499C212.35 40.9399 270.41 101.09 269.12 174C268.82 191.23 265.22 207.63 258.95 222.61C238.69 271.03 190.45 304.66 134.77 303.68C86.7501 302.83 45.1701 276.45 22.7501 237.7C11.1301 217.62 4.65007 194.22 5.09007 169.33Z"
            fill="#F15A24"
          />
          <path
            style={{ mixBlendMode: "hue" }}
            opacity="0.5"
            d="M269.11 174C267.82 246.91 207.67 304.97 134.76 303.68C61.85 302.39 3.79005 242.24 5.08005 169.33C5.38005 152.1 8.98004 135.7 15.25 120.72C35.51 72.2999 83.75 38.67 139.43 39.65C187.45 40.5 229.03 66.8799 251.45 105.63C263.07 125.71 269.55 149.11 269.11 174Z"
            fill="url(#paint7_linear_2_339)"
          />
        </g>
        <path
          d="M167.18 299.21C167.18 299.21 158.24 265.67 141.65 250.56C140.6 249.6 140.15 248.1 140.62 246.76C140.99 245.69 141.95 244.7 144.15 244.56C144.15 244.56 144.59 238.98 149.77 241.23C149.77 241.23 148.73 237.28 155.3 236.86C155.3 236.86 148.09 229.38 138.96 224.11C136.94 222.95 137.74 219.88 140.08 219.87C140.37 219.87 140.69 219.88 141.03 219.92C141.03 219.92 160.25 229.17 176.88 252.56C176.88 252.56 184.32 253.64 187.94 267.77C187.94 267.77 191.8 284.69 192.52 290.42"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M149.77 241.23L155.22 247.39"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M144.15 244.56C144.15 244.56 149.54 249.88 151.5 251.68"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M176.87 252.56L181.53 260.7"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M155.3 236.86L161.94 243.52"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M42.47 242.43L40.23 246.09"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M56.0201 238.37L53.7801 242.03"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M51.32 236.63L49.08 240.29"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M49.3701 244.55L47.1301 248.21"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M67.7401 245.29L65.6301 249.03"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M64.19 241.74L62.08 245.48"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M70.6901 252.26L68.5801 256"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M64.97 253.53L62.86 257.27"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M61.41 249.98L59.3 253.72"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M64.06 261.89L61.95 265.63"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M60.5 258.34L58.39 262.08"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M58.0801 242.26L55.9601 246"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M74.52 262.2L72.73 266.11"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M69.65 261.03L67.86 264.93"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M86.9801 267.7L85.3301 271.66"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M83.0301 264.59L81.3801 268.56"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M52.7301 250.13L50.5001 253.79"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M46.97 251.21L44.73 254.87"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M43.53 247.54L41.3 251.21"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M69.8601 267.45L67.6401 271.93"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M54.4701 255.06L52.2301 258.72"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M77.0201 265.83L75.3701 269.79"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M50.47 232.38L48.2 236.02"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M62.3701 235.47L60.1001 239.12"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M39.13 223.06L36.86 226.71"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M43.9501 224.48L41.6801 228.12"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M32.2301 227.87L29.9601 231.52"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M37.05 229.29L34.79 232.93"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M45.38 229.69L43.11 233.34"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M33.5701 235.68L31.3101 239.32"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M28.13 227.15L25.86 230.8"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M39.5301 234.9L37.2601 238.55"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M44.3501 236.32L42.0801 239.96"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M53.6 224.45L51.33 228.09"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M85.1201 252.27L83.3301 256.18"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M80.2601 251.1L78.4601 255"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M97.5801 257.77L95.9301 261.73"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M93.64 254.66L91.98 258.62"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M80.4601 257.52L78.2401 262"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M87.6301 255.9L85.9701 259.86"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M93.3201 263.79L91.6601 267.76"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M89.3701 260.69L87.7101 264.65"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M74.4701 255.06L72.8101 259.02"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M95.5601 274.18L93.7701 278.09"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M108.02 279.68L106.36 283.64"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M104.07 276.57L102.42 280.54"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M98.0601 277.81L96.4101 281.77"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M106.16 264.25L104.37 268.16"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M101.29 263.08L99.5001 266.98"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M101.5 269.5L99.2801 273.98"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M108.66 267.88L107.01 271.84"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M110.41 272.67L108.75 276.63"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M95.5101 267.04L93.8501 271"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M87.6501 274.03L85.0001 277.41"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.34"
          d="M80.0801 273.97L77.4301 277.35"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M31.9301 208C31.9301 208 49.4001 205.09 61.4401 214.88"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M224 51.8399C289.09 101.46 276.06 179.22 276.06 179.22C260.96 165.44 235.01 169.87 235.01 169.87C238.34 135.95 221.87 118.31 221.87 118.31C221.87 118.31 228.96 70.96 198.77 58.64C191.48 55.67 183.36 55.4399 175.82 57.7099C154.03 64.2899 73.4901 92.63 53.5601 65.56C40.0701 47.24 70.1001 37.7199 98.4901 30.4399C114.09 26.4399 130.24 25.0699 146.3 26.3199C172.47 28.3599 197.61 33.37 219.13 48.41L224.01 51.8199L224 51.8399Z"
          fill="#00002A"
        />
        <path
          d="M256.19 126.11C251.27 129.55 243.84 128.02 240.04 123.37C236.24 118.72 235.96 111.76 238.63 106.38C239.99 103.64 242.38 101.07 245.43 100.88C248.58 100.68 251.3 103.07 253.18 105.62C253.99 106.72 254.74 107.92 254.9 109.27C255.19 111.74 253.48 113.98 251.64 115.65C245.57 121.16 236.94 123.7 228.86 122.36C224.39 121.62 219.77 119.41 217.91 115.29C216.46 112.08 216.99 108.22 218.7 105.13C220.4 102.05 223.15 99.66 226.12 97.77C227.3 97.01 229.19 96.4799 229.85 97.7199C230.28 98.5299 229.78 99.5099 229.2 100.21C226.83 103.04 223.03 104.2 219.39 104.79C216.53 105.26 213.55 105.46 210.78 104.63C208.01 103.8 205.45 101.77 204.66 98.9899C203.86 96.2099 205.29 92.78 208.06 91.92"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M61.76 72.3199C58.97 74.7699 54.3 74.3299 51.65 71.7299C49 69.1299 48.36 64.87 49.63 61.39C50.28 59.62 51.57 57.87 53.43 57.55C55.35 57.22 57.19 58.4999 58.51 59.9399C59.08 60.5599 59.62 61.2499 59.81 62.0699C60.16 63.5699 59.25 65.0599 58.24 66.2099C54.89 69.9999 49.75 72.1499 44.69 71.8799C41.89 71.7299 38.91 70.69 37.48 68.27C36.37 66.39 36.44 63.9799 37.28 61.9799C38.12 59.9799 39.65 58.3199 41.34 56.9499C42.02 56.3999 43.14 55.95 43.63 56.67C43.95 57.14 43.71 57.7799 43.4 58.2499C42.14 60.1499 39.88 61.1199 37.68 61.7299C35.96 62.2099 34.14 62.5399 32.38 62.2199C30.62 61.8999 28.91 60.82 28.24 59.17C27.57 57.52 28.21 55.3099 29.85 54.5999"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M184.25 86.28C187.4 82.5 186.66 76.32 183.13 72.9C179.59 69.47 173.93 68.7699 169.35 70.5799C167.02 71.4999 164.76 73.2699 164.39 75.7499C164.01 78.3099 165.78 80.7 167.72 82.41C168.56 83.15 169.49 83.8399 170.58 84.0699C172.58 84.4799 174.53 83.2299 176.02 81.8399C180.93 77.2699 183.61 70.3899 183.07 63.6999C182.77 59.9999 181.29 56.07 178.05 54.27C175.53 52.87 172.34 53.0299 169.7 54.2099C167.06 55.3899 164.93 57.47 163.17 59.76C162.47 60.67 161.91 62.18 162.87 62.8C163.5 63.21 164.34 62.8699 164.95 62.4399C167.42 60.6999 168.63 57.6799 169.37 54.7399C169.95 52.4399 170.32 50.0199 169.84 47.6999C169.36 45.3799 167.87 43.15 165.65 42.31C163.43 41.47 160.53 42.3999 159.64 44.5999"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M84.0301 128.88C84.0301 128.88 113.09 135.95 141.71 128.34"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M229.96 80.26C220.66 56.78 199.71 39.8799 174.77 35.8299C174.44 35.7799 174.26 35.75 174.26 35.75C153.99 -0.920025 122.27 13.7199 122.27 13.7199C109.95 4.97994 99.4 1.34 90.79 0.399996C89.26 0.229996 87.7401 0.179962 86.2401 0.239962C82.0701 -0.210038 77.76 0.0399184 73.46 1.06992C52.94 5.99992 40.38 26.9399 45.4 47.8399C46.39 51.9499 47.99 55.76 50.07 59.18C49.28 62.33 49.0001 65.6399 49.9801 68.4399C52.5001 75.6299 59.5501 74.8199 62.4401 71.8199C70.8601 77.1799 81.27 79.25 91.64 76.76C95.87 75.74 99.75 74.0499 103.22 71.8199C114.49 66.3499 120.58 55.37 120.58 55.37C120.58 55.37 135.02 76.9399 162.41 53.6899C183.84 81.7799 214.24 67.75 214.24 67.75C212.87 73.99 231.51 84.2099 231.51 84.2099L229.95 80.28L229.96 80.26Z"
          fill="#00002A"
        />
        <path
          d="M51.0901 58.4499C51.0901 58.4499 -10.9099 94.4499 2.09006 181.45C2.09006 181.45 -5.90995 98.4499 58.9501 68.0699L51.0901 58.4499Z"
          fill="#00002A"
        />
        <path
          d="M62.45 71.81C62.45 71.81 109.46 97.53 177.73 66.06L174.71 49.3699L62.45 71.8199V71.81Z"
          fill="#00002A"
        />
        <path
          d="M275.35 184.55C275.35 184.55 258.37 170.88 234.21 174.62L233.93 178.74C233.93 178.74 258.1 177.27 274.47 190.04L275.35 184.55Z"
          fill="#00002A"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2_339"
            x1="138.93"
            y1="26.7799"
            x2="138.93"
            y2="302.22"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F15A24" stop-opacity="0" />
            <stop offset="1" stop-color="#662D91" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_2_339"
            x1="138.93"
            y1="26.7799"
            x2="138.93"
            y2="302.22"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F15A24" stop-opacity="0" />
            <stop offset="1" stop-color="#662D91" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_2_339"
            x1="189.22"
            y1="187.23"
            x2="132.02"
            y2="187.23"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F15A24" stop-opacity="0" />
            <stop offset="1" stop-color="#662D91" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_2_339"
            x1="86.0101"
            y1="183.1"
            x2="28.8101"
            y2="183.1"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F15A24" stop-opacity="0" />
            <stop offset="1" stop-color="#662D91" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_2_339"
            x1="141.734"
            y1="406.091"
            x2="92.1993"
            y2="135.132"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F15A24" stop-opacity="0" />
            <stop offset="1" stop-color="#662D91" />
          </linearGradient>
          <linearGradient
            id="paint5_linear_2_339"
            x1="141.734"
            y1="406.091"
            x2="92.1993"
            y2="135.132"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F15A24" stop-opacity="0" />
            <stop offset="1" stop-color="#662D91" />
          </linearGradient>
          <linearGradient
            id="paint6_linear_2_339"
            x1="128.762"
            y1="39.8588"
            x2="145.62"
            y2="303.4"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F15A24" stop-opacity="0" />
            <stop offset="1" stop-color="#662D91" />
          </linearGradient>
          <linearGradient
            id="paint7_linear_2_339"
            x1="128.762"
            y1="39.8588"
            x2="145.62"
            y2="303.4"
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
