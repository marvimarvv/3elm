import { motion as m, useInView } from "framer-motion";

import { useRef } from "react";

export default function Esraa({ className }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }, { amount: 0.5 });

  return (
    <m.div className={className}>
      <svg
        width={291}
        height={279}
        viewBox="0 0 291 279"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ref={ref}
        style={{
          transform: isInView
            ? "rotate(0deg) scale(1)"
            : "rotate(720deg) scale(0)",
          opacity: isInView ? 1 : 0,
          transition: "all 1.5s cubic-bezier(.43,.2,.54,1.17)",
          width: "100%",
        }}
      >
        <path
          d="M287.38 129.32C281.19 53.51 214.72 -2.92003 138.92 3.26997C63.11 9.45997 6.68003 75.9299 12.87 151.73C14.33 169.64 19.16 186.48 26.69 201.66C51 250.71 103.45 282.51 161.34 277.78C211.27 273.7 252.79 243.48 273.56 201.66C284.32 179.99 289.51 155.2 287.4 129.32H287.38Z"
          fill="#F15A24"
        />
        <path
          style={{ mixBlendMode: "hue" }}
          opacity="0.5"
          d="M12.87 151.74C19.06 227.55 85.53 283.98 161.33 277.79C237.14 271.6 293.57 205.13 287.38 129.33C285.92 111.42 281.09 94.58 273.56 79.4C249.25 30.35 196.8 -1.45004 138.91 3.27996C88.98 7.35996 47.46 37.58 26.69 79.4C15.93 101.07 10.74 125.86 12.85 151.74H12.87Z"
          fill="url(#paint0_linear_2_1527)"
        />
        <path
          d="M287.38 129.32C281.19 53.51 214.72 -2.92003 138.92 3.26997C63.11 9.45997 6.68003 75.9299 12.87 151.73C14.33 169.64 19.16 186.48 26.69 201.66C51 250.71 103.45 282.51 161.34 277.78C211.27 273.7 252.79 243.48 273.56 201.66C284.32 179.99 289.51 155.2 287.4 129.32H287.38Z"
          fill="#F15A24"
        />
        <path
          style={{ mixBlendMode: "hue" }}
          opacity="0.5"
          d="M12.87 151.74C19.06 227.55 85.53 283.98 161.33 277.79C237.14 271.6 293.57 205.13 287.38 129.33C285.92 111.42 281.09 94.58 273.56 79.4C249.25 30.35 196.8 -1.45004 138.91 3.27996C88.98 7.35996 47.46 37.58 26.69 79.4C15.93 101.07 10.74 125.86 12.85 151.74H12.87Z"
          fill="url(#paint1_linear_2_1527)"
        />
        <path
          d="M114.79 97.7299C124.16 96.3499 133.56 99.37 142.53 102.4C148.84 104.53 155.98 107.52 157.89 113.9C159.26 112.38 158.57 109.93 157.43 108.22C154.81 104.32 150.47 101.98 146.18 100.08C136.94 95.97 127.17 93.1799 117.44 90.4099C109.12 88.0399 105.67 99.0699 114.78 97.7299H114.79Z"
          fill="#00002A"
        />
        <path
          d="M71.27 110.28C63.74 110.96 57.01 115.06 50.61 119.08C46.11 121.91 41.13 125.57 40.83 130.88C39.48 129.96 39.56 127.92 40.13 126.39C41.43 122.88 44.37 120.25 47.34 117.97C53.75 113.06 60.81 109.07 67.84 105.1C73.85 101.7 78.6 109.63 71.27 110.29V110.28Z"
          fill="#00002A"
        />
        <path
          d="M127.07 20.28C137.81 39.59 171.37 90.51 235.88 111.26C235.88 111.26 179.16 183.08 175.2 276.95C175.2 276.95 279.72 262.89 290.18 147.7C290.18 147.7 298.72 74.26 236.13 28.03C218.41 14.94 197.7 6.53997 175.99 2.78997C159.47 -0.0700316 132.91 -1.25005 125.03 5.10995C123.76 10.2399 124.5 15.66 127.07 20.28Z"
          fill="#00002A"
        />
        <path
          d="M120.17 3.69997L2.18005 44.4C2.18005 44.4 -6.24995 107.57 12.4 141.33C12.4 141.33 116.7 67.12 127.31 8.25996C127.75 5.83996 125.17 1.69997 120.17 3.69997Z"
          fill="#00002A"
        />
        <g style={{ mixBlendMode: "multiply" }} opacity="0.3">
          <path
            d="M115.47 167.64C115.47 167.64 86.77 157.96 95.73 133.92C98.4 126.74 103.5 120.69 110.07 116.75C117.67 112.2 129.22 108.81 140.45 119.18C145.2 123.56 148.5 129.29 150.14 135.54L151.65 141.3C151.65 141.3 123.15 141.73 115.48 167.64H115.47Z"
            fill="#F15A24"
          />
        </g>
        <path
          d="M150.93 135.67C155.06 150.5 149.69 160.96 134.86 165.1C120.03 169.23 101.23 166.56 97.1001 151.72C92.9701 136.89 104.82 119.54 119.65 115.41C134.48 111.28 146.8 120.84 150.93 135.68V135.67Z"
          fill="white"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M101.61 129.53C101.61 129.53 107.11 114.7 129.01 114.77C129.01 114.77 140.01 114.92 146.48 125.7C146.48 125.7 136.98 103.89 111.38 117.61C107.59 119.64 104.54 122.88 102.62 126.73C102.13 127.71 101.75 128.68 101.61 129.51V129.53Z"
          fill="#00002A"
        />
        <g style={{ mixBlendMode: "multiply" }} opacity="0.3">
          <path
            d="M53.27 168.53C53.27 168.53 30.45 160.84 37.57 141.72C39.7 136.01 43.75 131.2 48.97 128.07C55.01 124.45 64.19 121.76 73.13 130C76.91 133.48 79.53 138.03 80.83 143.01L82.03 147.59C82.03 147.59 59.37 147.93 53.27 168.53Z"
            fill="#F15A24"
          />
        </g>
        <path
          d="M81.46 143.12C84.74 154.91 80.48 163.23 68.68 166.51C56.89 169.79 41.94 167.67 38.66 155.87C35.38 144.08 44.8 130.28 56.59 127C68.38 123.72 78.17 131.32 81.46 143.11V143.12Z"
          fill="white"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M42.2501 138.23C42.2501 138.23 46.6301 126.44 64.0401 126.5C64.0401 126.5 72.7901 126.62 77.9301 135.19C77.9301 135.19 70.3801 117.85 50.0201 128.76C47.0001 130.38 44.5801 132.95 43.0501 136.01C42.6601 136.79 42.3601 137.56 42.2501 138.22V138.23Z"
          fill="#00002A"
        />
        <path
          d="M87.0001 151.26L81.9401 178.01C81.8301 178.61 82.3001 179.15 82.9101 179.13C85.0801 179.04 89.7501 178.59 92.8001 176.52"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <g opacity="0.3">
          <mask
            id="mask0_2_1527"
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="3"
            width="288"
            height="273"
          >
            <path
              d="M198.13 11.42C198.13 11.42 167.72 -1.47002 125.91 4.97998C125.13 4.45998 124.13 4.26998 123.11 4.59998L2.18005 44.4099C2.18005 44.4099 -6.24995 107.58 12.4 141.34C12.4 141.34 107.6 73.6 125.34 16.23C125.77 17.63 126.34 18.99 127.06 20.29C137.8 39.6 171.36 90.52 235.87 111.27C235.87 111.27 179.15 182.09 175.19 275.96C175.19 275.96 278.76 258.91 287.62 148.52C287.62 148.52 298.55 52.18 198.13 11.42Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0_2_1527)">
            <path
              d="M252.44 106.01C235.13 128.54 214.5 160.54 202.91 186.48C199.17 194.85 195.75 203.37 193.14 212.15C187.42 231.37 185.68 251.77 188.05 271.68"
              stroke="#BC4300"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M267.39 112.47C249.92 137.39 224.23 171.41 212.55 199.52C204.26 219.45 199.06 241.66 204.16 262.63C204.37 263.51 205.23 264.62 205.92 264.04"
              stroke="#BC4300"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M226.41 256.04C225.15 243.51 229 231.07 233.39 219.27C244.7 188.88 266.54 146.29 285.16 119.75"
              stroke="#BC4300"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M286.78 155.3C273.17 176.45 258.39 207.02 253.34 231.66"
              stroke="#BC4300"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M125.47 15.09C132.58 26.94 142.97 36.42 153.2 45.71C160.27 52.13 167.34 58.55 174.84 64.45C196.84 81.75 259.06 109.66 285.17 119.74"
              stroke="#BC4300"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M127.75 6.63998C153.48 32.83 184.02 54.29 217.38 69.62C224.08 72.7 230.9 75.54 237.93 77.75C250.1 81.59 262.86 83.55 275.63 83.53"
              stroke="#BC4300"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M143.72 3.76996C155.53 18.27 171.29 29.15 188.07 37.4C204.85 45.65 222.72 51.41 240.56 57.01C247.12 59.07 254.19 61.12 260.74 59.02"
              stroke="#BC4300"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M176.39 5.74997C183.8 15.23 194.97 20.86 205.75 26.19C218.37 32.43 231.35 38.77 245.36 40.12"
              stroke="#BC4300"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M118.98 8.52997C86.45 52.18 45.98 89.17 5.77002 125.87C6.16002 125.12 6.54002 124.37 6.93002 123.61"
              stroke="#BC4300"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M94.9301 15.16C71.1301 37.47 47.3301 59.77 23.5301 82.08C16.8601 88.34 9.99006 94.72 1.56006 98.26"
              stroke="#BC4300"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M56.25 28.0399C38.93 44.4699 19.86 59.06 -0.529968 71.46"
              stroke="#BC4300"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M27.74 36.69C18.91 44.56 9.62 51.92 -0.0599976 58.7299"
              stroke="#BC4300"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </g>
        <path
          d="M204.25 99.3L219.66 79.4799L230.64 88.1599L215.55 107.8L204.25 99.3Z"
          fill="#F4FF15"
        />
        <path
          d="M187.61 88.8L203.02 68.9799L214 77.6599L198.91 97.2899L187.61 88.8Z"
          fill="#F4FF15"
        />
        <path
          d="M116.13 198.06C114.96 201.13 111.66 211.72 115.34 225.98C119.34 241.49 113.03 244.09 111.88 244.43C111.72 244.48 111.56 244.53 111.41 244.58C104.08 247.19 100.1 243.27 98.14 239.93C97.24 238.39 96.63 236.7 96.29 234.95C95.4 230.37 91.73 213.16 85.45 205.85C78.17 197.38 83.04 196.03 83.04 196.03L111.04 189.15C116.2 187.88 117.05 191.32 116.96 194.08C116.92 195.44 116.62 196.78 116.14 198.06H116.13Z"
          fill="#00002A"
        />
        <path
          d="M84.0001 195.79C84.0001 195.79 88.6101 210.39 100.69 207.42C112.77 204.45 112.15 193.1 112.95 188.88L84.0101 195.79H84.0001Z"
          fill="white"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M119.79 240.63C119.84 245.64 119.4 251.14 115.6 254.39C111.25 258.12 106.08 258.59 102.27 256.24C98.21 253.74 96.17 249.35 95.14 244.7C91.86 229.84 88.08 218.94 84.99 212.87C83.57 210.08 80.49 206.82 78.53 204.39C66.93 190.06 79.16 187.27 79.16 187.27L109.73 179.99C122.32 177.36 123.55 186.52 123.32 191.57L122.95 193.46C122.5 195.75 121.86 197.99 121.14 200.2C118.07 209.66 119.79 240.63 119.79 240.63ZM111.03 189.16L83.03 196.04C83.03 196.04 78.16 197.4 85.44 205.86C91.72 213.17 95.4 230.38 96.28 234.96C96.62 236.71 97.23 238.4 98.13 239.94C100.09 243.28 104.06 247.2 111.4 244.59C111.56 244.53 111.71 244.48 111.87 244.44C113.03 244.1 119.33 241.51 115.33 225.99C111.66 211.73 114.95 201.15 116.12 198.07C116.61 196.8 116.9 195.45 116.94 194.09C117.03 191.33 116.18 187.89 111.02 189.16H111.03Z"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M111.98 236.82L182.77 199.35L184.83 204.53L115.11 242.64C113.38 243.59 111.21 242.82 110.46 240.99C109.81 239.41 110.46 237.61 111.97 236.81L111.98 236.82Z"
          fill="#FFFD2A"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <mask
          id="mask1_2_1527"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="134"
          y="190"
          width="43"
          height="89"
        >
          <path
            d="M146.46 277.51C146.46 277.51 147.14 241.31 134.84 221.39C134.06 220.13 134.04 218.5 134.9 217.28C135.58 216.31 136.82 215.59 139.07 216.09C139.07 216.09 141.11 210.62 145.66 214.36C145.66 214.36 145.75 210.1 152.46 211.57C152.46 211.57 147.38 202 139.74 194.09C138.05 192.34 139.74 189.5 142.08 190.16C142.37 190.24 142.69 190.35 143.02 190.48C143.02 190.48 159.63 205.28 169.59 233.51C169.59 233.51 176.74 236.73 176.31 251.94C176.31 251.94 175.32 270.01 174.4 275.97C174.4 275.97 159.13 279.95 146.46 277.51Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask1_2_1527)">
          <path
            d="M21.23 100.67C43.47 27.9399 120.46 -13 193.19 9.23996C265.92 31.48 306.86 108.47 284.62 181.2C279.36 198.39 271.05 213.8 260.46 227.02C226.23 269.75 168.2 289.61 112.66 272.63C64.75 257.98 30.65 219.58 19.3 174.29C13.42 150.82 13.65 125.49 21.24 100.67H21.23Z"
            fill="#F15A24"
          />
          <path
            style={{ mixBlendMode: "hue" }}
            opacity="0.5"
            d="M284.62 181.21C262.38 253.94 185.39 294.88 112.66 272.64C39.93 250.4 -1.00996 173.41 21.23 100.68C26.49 83.49 34.8 68.0799 45.39 54.8599C79.62 12.1299 137.65 -7.73004 193.19 9.24996C241.1 23.9 275.2 62.3 286.55 107.59C292.43 131.06 292.2 156.39 284.61 181.21H284.62Z"
            fill="url(#paint2_linear_2_1527)"
          />
          <path
            d="M21.23 100.67C43.47 27.9399 120.46 -13 193.19 9.23996C265.92 31.48 306.86 108.47 284.62 181.2C279.36 198.39 271.05 213.8 260.46 227.02C226.23 269.75 168.2 289.61 112.66 272.63C64.75 257.98 30.65 219.58 19.3 174.29C13.42 150.82 13.65 125.49 21.24 100.67H21.23Z"
            fill="#F15A24"
          />
          <path
            style={{ mixBlendMode: "hue" }}
            opacity="0.5"
            d="M284.62 181.21C262.38 253.94 185.39 294.88 112.66 272.64C39.93 250.4 -1.00996 173.41 21.23 100.68C26.49 83.49 34.8 68.0799 45.39 54.8599C79.62 12.1299 137.65 -7.73004 193.19 9.24996C241.1 23.9 275.2 62.3 286.55 107.59C292.43 131.06 292.2 156.39 284.61 181.21H284.62Z"
            fill="url(#paint3_linear_2_1527)"
          />
        </g>
        <path
          d="M146.44 277.46C146.44 277.46 147.12 241.26 134.82 221.34C134.04 220.08 134.02 218.45 134.88 217.23C135.56 216.26 136.8 215.54 139.05 216.04C139.05 216.04 141.09 210.57 145.64 214.31C145.64 214.31 145.73 210.05 152.44 211.52C152.44 211.52 147.36 201.95 139.72 194.04C138.03 192.29 139.72 189.45 142.06 190.11C142.35 190.19 142.67 190.3 143 190.43C143 190.43 159.61 205.23 169.57 233.46C169.57 233.46 176.72 236.68 176.29 251.89C176.29 251.89 175.3 269.96 174.38 275.92"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M145.64 214.32L148.82 221.35"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M139.05 216.05C139.05 216.05 142.93 222.94 144.37 225.3"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M169.57 233.47L171.9 242.98"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M152.45 211.53L157.19 220.13"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M182.77 199.35C182.77 199.35 194.49 189.8 206.2 190.02C206.2 190.02 198.64 202.26 184.84 204.53L182.78 199.35H182.77Z"
          fill="#F15A24"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M116.55 175.2C116.55 175.2 123.42 186.5 129.55 189.28"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M147.23 126.58L153.53 119.68"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M148.65 129.46L160.53 122.37"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M150.04 132.48L159.29 131.15"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M42.15 137.27L35.85 130.38"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M40.73 140.15L28.85 133.06"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M39.34 143.17L30.09 141.84"
          stroke="#00002A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          style={{ mixBlendMode: "multiply" }}
          opacity="0.94"
          d="M142.32 135.05C139.58 125.2 133.23 117.69 124.93 114.95C137.49 113.97 147.57 122.96 151.22 136.1C155.35 150.93 149.98 161.39 135.15 165.53C128.1 167.49 120.16 167.92 113.32 166.23C117.67 166.25 122.11 165.63 126.24 164.48C141.07 160.35 146.44 149.89 142.31 135.05H142.32Z"
          fill="url(#paint4_linear_2_1527)"
        />
        <path
          style={{ mixBlendMode: "multiply" }}
          opacity="0.94"
          d="M74.61 142.62C72.43 134.79 67.38 128.81 60.78 126.64C70.76 125.86 78.78 133.01 81.68 143.46C84.96 155.25 80.7 163.57 68.9 166.85C63.3 168.41 56.98 168.75 51.55 167.41C55.01 167.43 58.54 166.93 61.82 166.02C73.61 162.74 77.88 154.42 74.6 142.63L74.61 142.62Z"
          fill="url(#paint5_linear_2_1527)"
        />
        <path
          d="M132.9 163.52C141.599 163.52 148.65 156.468 148.65 147.77C148.65 139.072 141.599 132.02 132.9 132.02C124.202 132.02 117.15 139.072 117.15 147.77C117.15 156.468 124.202 163.52 132.9 163.52Z"
          fill="#00002A"
        />
        <path
          d="M124.09 141.47C126.145 141.47 127.81 139.804 127.81 137.75C127.81 135.695 126.145 134.03 124.09 134.03C122.036 134.03 120.37 135.695 120.37 137.75C120.37 139.804 122.036 141.47 124.09 141.47Z"
          fill="white"
        />
        <path
          d="M67.13 165.25C74.0446 165.25 79.65 159.645 79.65 152.73C79.65 145.815 74.0446 140.21 67.13 140.21C60.2154 140.21 54.61 145.815 54.61 152.73C54.61 159.645 60.2154 165.25 67.13 165.25Z"
          fill="#00002A"
        />
        <path
          d="M60.12 147.72C61.7548 147.72 63.08 146.395 63.08 144.76C63.08 143.125 61.7548 141.8 60.12 141.8C58.4853 141.8 57.16 143.125 57.16 144.76C57.16 146.395 58.4853 147.72 60.12 147.72Z"
          fill="white"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2_1527"
            x1="150.13"
            y1="2.80996"
            x2="150.13"
            y2="278.25"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F15A24" stop-opacity="0" />
            <stop offset="1" stop-color="#662D91" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_2_1527"
            x1="150.13"
            y1="2.80996"
            x2="150.13"
            y2="278.25"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F15A24" stop-opacity="0" />
            <stop offset="1" stop-color="#662D91" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_2_1527"
            x1="182.334"
            y1="6.37821"
            x2="123.516"
            y2="275.465"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F15A24" stop-opacity="0" />
            <stop offset="1" stop-color="#662D91" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_2_1527"
            x1="182.334"
            y1="6.37821"
            x2="123.516"
            y2="275.465"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F15A24" stop-opacity="0" />
            <stop offset="1" stop-color="#662D91" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_2_1527"
            x1="148.738"
            y1="129.342"
            x2="106.694"
            y2="155.563"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F15A24" stop-opacity="0" />
            <stop offset="1" stop-color="#662D91" />
          </linearGradient>
          <linearGradient
            id="paint5_linear_2_1527"
            x1="79.7108"
            y1="138.072"
            x2="46.2795"
            y2="158.922"
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
