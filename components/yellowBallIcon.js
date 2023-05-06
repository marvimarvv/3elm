import { motion as m, useInView } from "framer-motion";

import { useRef } from "react";

export default function YellowBallIcon({ className }) {
  const ball = useRef(null);
  const ballIsInView = useInView(ball, { once: true });

  return (
    <m.div className={className}>
      <svg
        viewBox="0 0 23 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        ref={ball}
        style={{
          transform: ballIsInView ? "scale(1)" : "scale(0.5)",
          opacity: ballIsInView ? 1 : 0,
          transition: "all .7s cubic-bezier(.29,-1.08,.69,4)",
          transformBox: "content-box",
        }}
      >
        <path
          d="M11.472 23.422C17.8078 23.422 22.944 18.2858 22.944 11.95C22.944 5.61422 17.8078 0.478027 11.472 0.478027C5.13619 0.478027 0 5.61422 0 11.95C0 18.2858 5.13619 23.422 11.472 23.422Z"
          fill="#F4FF15"
        />
      </svg>
    </m.div>
  );
}
