import { m, useInView } from "framer-motion";

import { useRef } from "react";

export default function HeartIcon() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <m.div ref={ref}>
      <svg
        width="31"
        height="31"
        viewBox="0 0 41 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -bottom-8 right-2"
        style={{
          transform: isInView ? "scale(3)" : "none",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <path
          d="M20.366 40.5508C16.4094 40.5508 12.5416 39.3772 9.25216 37.1786C5.96268 34.9799 3.39927 31.855 1.8862 28.1991C0.373123 24.5433 -0.0216197 20.5208 0.751951 16.6405C1.52552 12.7603 3.43264 9.19665 6.23199 6.40052C9.03134 3.60438 12.5971 1.70139 16.4783 0.932285C20.3594 0.16318 24.3815 0.562527 28.0356 2.07981C31.6897 3.59709 34.8117 6.16411 37.0066 9.45612C39.2014 12.7481 40.3705 16.6172 40.366 20.5738C40.3625 25.8749 38.2535 30.9577 34.5029 34.704C30.7523 38.4503 25.6671 40.5534 20.366 40.5508ZM32.442 18.5508C32.4518 17.659 32.2144 16.7818 31.756 16.0168C31.2326 15.1585 30.5616 14.3995 29.774 13.7748C28.9946 13.0704 28.0398 12.5889 27.0101 12.3811C25.9803 12.1733 24.9135 12.2468 23.922 12.5938C22.6479 13.0368 21.4931 13.7674 20.547 14.7288C20.404 14.8688 20.331 14.8758 20.179 14.7288C19.3389 13.8873 18.3435 13.2169 17.248 12.7548C16.4417 12.3978 15.5644 12.2302 14.6833 12.2648C13.8022 12.2995 12.9407 12.5355 12.165 12.9548C11.1444 13.5218 10.2477 14.2875 9.52798 15.2068C8.98513 15.8323 8.60208 16.5801 8.41171 17.3862C8.22134 18.1923 8.22932 19.0325 8.43496 19.8348C8.77826 21.1655 9.39353 22.4107 10.242 23.4918C11.7165 25.3997 13.4188 27.1202 15.311 28.6148C16.898 29.9288 18.598 31.0928 20.239 32.3358C20.2555 32.3529 20.2754 32.3663 20.2974 32.3753C20.3194 32.3842 20.343 32.3885 20.3667 32.3877C20.3905 32.3869 20.4138 32.3812 20.4352 32.3709C20.4566 32.3606 20.4756 32.3459 20.491 32.3278C20.75 32.1228 21.014 31.9218 21.283 31.7278C23.5792 30.1514 25.7552 28.4066 27.793 26.5078C29.2512 25.1787 30.4944 23.6312 31.478 21.9208C32.0742 20.8957 32.4055 19.7381 32.442 18.5528V18.5508Z"
          fill="#EC1625"
        />
      </svg>
    </m.div>
  );
}
