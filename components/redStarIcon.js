import { motion as m, useInView } from "framer-motion";

import { useRef } from "react";

export default function RedStarIcon({ className }) {
  const star = useRef(null);
  const starIsInView = useInView(star, { once: true });

  return (
    <m.div className={className}>
      <svg
        viewBox="0 0 44 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        ref={star}
        style={{
          transform: starIsInView ? "scale(1)" : "scale(0.5)",
          opacity: starIsInView ? 1 : 0,
          transition: "all .7s cubic-bezier(.29,-1.08,.69,4)",
          transformBox: "view-box",
        }}
      >
        <path
          d="M33.1111 44.0781C30.3321 31.0831 33.529 20.3481 44 11.7371C30.847 14.3941 20.3771 10.4371 12.6731 0.37207C12.2831 6.16507 12.4731 12.1461 11.3311 17.8621C10.1421 23.8131 5.37902 27.8981 0.525024 32.8311C14.264 29.6801 24.7001 33.6881 33.1111 44.0781Z"
          fill="#E24F27"
        />
      </svg>
    </m.div>
  );
}
