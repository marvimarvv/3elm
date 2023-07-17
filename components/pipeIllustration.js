import { motion as m, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function PipeIllustration({ className }) {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();
  const controls5 = useAnimation();
  const controls6 = useAnimation();
  const ref = useRef(null);
  const intersectionObserver = useRef(null);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    intersectionObserver.current = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasTriggered) {
          controls1.start({
            "--footer-tube-offset-path--left": ["0%", "30%", "70%", "93%"],
            opacity: [0, 1],
            rotateZ: [0, -360, 360, 720],
          });
          controls2.start({
            "--footer-tube-offset-path--left": ["0%", "30%", "70%", "90%"],
            opacity: [0, 1],
            rotateZ: [0, -360, 360, 720],
          });
          controls3.start({
            "--footer-tube-offset-path--left": ["0%", "30%", "70%", "85%"],
            opacity: [0, 1],
            rotateZ: [0, -360, 360, 720],
          });
          controls4.start({
            "--footer-tube-offset-path--right": ["0%", "30%", "70%", "100%"],
            opacity: [0, 1],
            rotateZ: [0, 360, -360, -720],
          });
          controls5.start({
            "--footer-tube-offset-path--right": ["0%", "30%", "70%", "93%"],
            opacity: [0, 1],
            rotateZ: [0, 360, -360, -720],
          });
          controls6.start({
            "--footer-tube-offset-path--right": ["0%", "30%", "70%", "83%"],
            opacity: [0, 1],
            rotateZ: [0, 360, -360, -720],
          });
          setHasTriggered(true); // Set the state to indicate that the animation has been triggered
        }
      },
      {
        threshold: 0.5, // Adjust the threshold value as needed
      }
    );

    if (ref.current) {
      intersectionObserver.current.observe(ref.current);
    }

    return () => {
      if (intersectionObserver.current) {
        intersectionObserver.current.disconnect();
      }
    };
  }, [
    controls1,
    controls2,
    controls3,
    controls4,
    controls5,
    controls6,
    hasTriggered,
  ]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1170 812.47"
      className={className}
      ref={ref}
    >
      <path
        d="M279.6 494.07h-80.5v50s-69.2-10-87.6 55c0 0-22.9 82.6 62.5 100.5h287v-74.2l-260.9.8c-2.2 0-4.3-.4-6.3-1.4-1.8-.9-3.4-2.3-2.9-4.3.2-.8.7-1.5 1.3-1.9.6-.5 1.4-.7 2.2-.7h10.4c11.5.1 22.8-2.1 33.4-6.3 12.3-5.1 26.2-14.1 34.4-30 4.1-8.2 6.2-17.2 6.2-26.4l.8-61.1z"
        style={{
          isolation: "isolate",
        }}
        fill="#fff"
        opacity={0.17}
      />
      <path
        d="M461 625.47l-260.9.8c-2.2 0-4.3-.4-6.3-1.4-1.8-.9-3.4-2.3-2.9-4.3.2-.8.7-1.5 1.3-1.9s1.4-.7 2.2-.7h10.4c11.5.1 22.8-2.1 33.4-6.3 12.3-5.1 26.2-14.1 34.4-30 4.1-8.2 6.2-17.2 6.2-26.4l.8-61.1"
        fill="none"
        stroke="#f4ff15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M199.1 494.07v50s-69.2-10-87.6 55c0 0-22.9 82.6 62.5 100.5h287"
        fill="none"
        stroke="#f4ff15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M884.8 493.07h81.1v50.4s69.8-10.1 88.3 55.5c0 0 23.1 83.2-63 101.3H702v-74.8l262.9.8c2.2 0 4.4-.4 6.4-1.4 1.8-.9 3.4-2.3 2.9-4.4-.2-.8-.7-1.5-1.3-1.9-.7-.5-1.4-.7-2.3-.7h-10.5c-11.5.1-23-2.1-33.7-6.4-12.4-5.1-26.4-14.2-34.6-30.3-4.1-8.3-6.3-17.4-6.3-26.6l-.7-61.5z"
        style={{
          isolation: "isolate",
        }}
        fill="#fff"
        opacity={0.17}
      />
      <path
        d="M702 625.47l262.9.8c2.2 0 4.4-.4 6.4-1.4 1.8-.9 3.4-2.3 2.9-4.4-.2-.8-.7-1.5-1.3-1.9-.7-.5-1.4-.7-2.3-.7h-10.5c-11.5.1-23-2.1-33.7-6.4-12.4-5.1-26.4-14.2-34.6-30.3-4.1-8.3-6.3-17.4-6.3-26.6l-.8-61.6"
        fill="none"
        stroke="#f4ff15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M965.9 493.07v50.4s69.8-10.1 88.3 55.5c0 0 23.1 83.2-63 101.3H702"
        fill="none"
        stroke="#f4ff15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <m.g
        initial={{ opacity: 0 }}
        animate={controls1}
        transition={{
          "--footer-tube-offset-path--left": {
            ease: ["linear", "linear", "easeOut"],
            duration: 12,
            times: [0, 0.2, 0.4, 1],
            delay: 2,
          },
          opacity: {
            times: [0, 0.1],
            duration: 12,
            delay: 2,
          },
          rotateZ: {
            duration: 12,
            times: [0, 0.25, 0.4, 1],
            ease: ["linear", "linear", "easeOut"],
            delay: 2,
          },
        }}
        className="footer-tube-offset-path--left"
        style={{
          offsetDistance: "var(--footer-tube-offset-path--left)",
          offsetRotate: "0deg",
        }}
      >
        <path
          d="M355.5 696.87c11.7 0 21.3-9.5 21.3-21.3s-9.5-21.3-21.3-21.3-21.3 9.5-21.3 21.3 9.6 21.3 21.3 21.3z"
          fill="#74dde1"
        />
        <path
          d="M358.4 665.37c2.7 0 5-2.2 5-5s-2.2-5-5-5-5 2.2-5 5 2.2 5 5 5zM346.9 669.37c2.7 0 5-2.2 5-5s-2.2-5-5-5-5 2.2-5 5 2.2 5 5 5z"
          fill="#fff"
        />
        <path
          d="M357.3 661.27c1.3 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3-2.3 1-2.3 2.3 1 2.3 2.3 2.3zM346.9 665.27c1.3 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3-2.3 1-2.3 2.3 1.1 2.3 2.3 2.3z"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M357.4 676.47c2.6 0 4.8-2.1 4.8-4.8s-2.1-4.8-4.8-4.8-4.8 2.1-4.8 4.8 2.2 4.8 4.8 4.8z" />
      </m.g>
      <m.g
        initial={{ opacity: 0 }}
        animate={controls2}
        transition={{
          "--footer-tube-offset-path--left": {
            ease: ["linear", "linear", "easeOut"],
            duration: 12,
            times: [0, 0.2, 0.4, 1],
          },
          opacity: {
            times: [0, 0.1],
            duration: 12,
          },
          rotateZ: {
            duration: 12,
            times: [0, 0.25, 0.4, 1],
            ease: ["linear", "linear", "easeOut"],
          },
        }}
        className="footer-tube-offset-path--left"
        style={{
          offsetDistance: "var(--footer-tube-offset-path--left)",
          offsetRotate: "0deg",
        }}
      >
        <path
          d="M147.4 680.67c11.3 0 20.4-9.1 20.4-20.4s-9.1-20.4-20.4-20.4-20.4 9.1-20.4 20.4 9.2 20.4 20.4 20.4z"
          fill="#74dde1"
        />
        <path
          d="M131.8 656.07c2.7 0 5-2.2 5-5s-2.2-5-5-5-5 2.2-5 5 2.3 5 5 5zM143.4 660.07c2.7 0 5-2.2 5-5s-2.2-5-5-5-5 2.2-5 5 2.2 5 5 5z"
          fill="#fff"
        />
        <path
          d="M132.9 651.87c1.3 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3-2.3 1-2.3 2.3c.1 1.3 1.1 2.3 2.3 2.3zM143.3 655.97c1.3 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3-2.3 1-2.3 2.3 1 2.3 2.3 2.3z"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M132.8 667.17c2.6 0 4.8-2.1 4.8-4.8s-2.1-4.8-4.8-4.8-4.8 2.1-4.8 4.8 2.2 4.8 4.8 4.8z" />
      </m.g>
      <m.g
        initial={{ opacity: 0 }}
        animate={controls3}
        transition={{
          "--footer-tube-offset-path--left": {
            ease: ["linear", "linear", "easeOut"],
            duration: 12,
            times: [0, 0.2, 0.4, 1],
            delay: 4,
          },
          opacity: {
            times: [0, 0.1],
            duration: 12,
            delay: 4,
          },
          rotateZ: {
            duration: 12,
            times: [0, 0.25, 0.4, 1],
            ease: ["linear", "linear", "easeOut"],
            delay: 4,
          },
        }}
        className="footer-tube-offset-path--left"
        style={{
          offsetDistance: "var(--footer-tube-offset-path--left)",
          offsetRotate: "0deg",
        }}
      >
        <path
          d="M234.2 609.77c12 0 21.7-9.7 21.7-21.7s-9.7-21.7-21.7-21.7-21.7 9.7-21.7 21.7 9.7 21.7 21.7 21.7z"
          fill="#74dde1"
        />
        <path
          d="M246.8 577.37c2.7 0 5-2.2 5-5s-2.2-5-5-5-5 2.2-5 5 2.3 5 5 5zM235.3 581.37c2.7 0 5-2.2 5-5s-2.2-5-5-5-5 2.2-5 5c.1 2.7 2.3 5 5 5z"
          fill="#fff"
        />
        <path
          d="M245.7 573.17c1.3 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3-2.3 1-2.3 2.3c.1 1.3 1.1 2.3 2.3 2.3zM235.4 577.27c1.3 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3-2.3 1-2.3 2.3c0 1.3 1 2.3 2.3 2.3z"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M245.9 588.37c2.6 0 4.8-2.1 4.8-4.8s-2.1-4.8-4.8-4.8-4.8 2.1-4.8 4.8 2.1 4.8 4.8 4.8z" />
      </m.g>
      <m.g
        initial={{
          x: 160,
          opacity: 0,
        }}
        animate={controls4}
        transition={{
          "--footer-tube-offset-path--right": {
            ease: ["linear", "linear", "easeOut"],
            duration: 12,
            times: [0, 0.2, 0.4, 1],
            delay: 5,
          },
          opacity: {
            times: [0, 0.1],
            duration: 12,
            delay: 5,
          },
          rotateZ: {
            duration: 12,
            times: [0, 0.25, 0.4, 1],
            ease: ["linear", "linear", "easeOut"],
            delay: 5,
          },
        }}
        className="footer-tube-offset-path--right"
        style={{
          offsetDistance: "var(--footer-tube-offset-path--right)",
          offsetRotate: "0deg",
        }}
      >
        <path
          d="M752 698.27c11.8 0 21.4-9.6 21.4-21.4s-9.6-21.4-21.4-21.4-21.4 9.6-21.4 21.4 9.6 21.4 21.4 21.4z"
          style={{
            isolation: "isolate",
          }}
          fill="#6cff6a"
        />
        <path
          d="M763.3 672.77c3.2 0 5.8-2.6 5.8-5.8s-2.6-5.8-5.8-5.8-5.8 2.6-5.8 5.8c-.1 3.2 2.5 5.8 5.8 5.8zM748.7 670.27c3.2 0 5.8-2.6 5.8-5.8s-2.6-5.8-5.8-5.8-5.8 2.6-5.8 5.8 2.6 5.8 5.8 5.8z"
          fill="#fff"
        />
        <path
          d="M763.1 667.47c1.5 0 2.7-1.2 2.7-2.7s-1.2-2.7-2.7-2.7-2.7 1.2-2.7 2.7 1.2 2.7 2.7 2.7zM749.6 665.77c1.5 0 2.7-1.2 2.7-2.7s-1.2-2.7-2.7-2.7-2.7 1.2-2.7 2.7 1.3 2.7 2.7 2.7z"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M751.7 680.37c-2.6-1.7-2.3-4.8.7-6 1.3-.6 2.6-.5 3.4 1.2 1.7 4.2 4.5 8.9-1.2 6.3-1-.4-2-.9-2.9-1.5z" />
      </m.g>
      <m.g
        initial={{
          x: 160,
          opacity: 0,
        }}
        animate={controls5}
        transition={{
          "--footer-tube-offset-path--right": {
            ease: ["linear", "linear", "easeOut"],
            duration: 12,
            times: [0, 0.2, 0.4, 1],
            delay: 2.4,
          },
          opacity: {
            times: [0, 0.1],
            duration: 12,
            delay: 2.4,
          },
          rotateZ: {
            duration: 12,
            times: [0, 0.25, 0.4, 1],
            ease: ["linear", "linear", "easeOut"],
            delay: 2.4,
          },
        }}
        className="footer-tube-offset-path--right"
        style={{
          offsetDistance: "var(--footer-tube-offset-path--right)",
          offsetRotate: "0deg",
        }}
      >
        <path
          d="M1018 681.87c11.4 0 20.6-9.2 20.6-20.6s-9.2-20.6-20.6-20.6-20.6 9.2-20.6 20.6 9.3 20.6 20.6 20.6z"
          style={{
            isolation: "isolate",
          }}
          fill="#6cff6a"
        />
        <path
          d="M1018.4 668.97c3.3 0 6-2.7 6-6s-2.7-6-6-6-6 2.7-6 6 2.7 6 6 6zM1003.5 666.37c3.3 0 6-2.7 6-6s-2.7-6-6-6-6 2.7-6 6 2.7 6 6 6z"
          fill="#fff"
        />
        <path
          d="M1018.2 663.57c1.5 0 2.8-1.2 2.8-2.7s-1.2-2.7-2.8-2.7c-1.5 0-2.7 1.2-2.7 2.7 0 1.4 1.2 2.7 2.7 2.7zM1004.5 661.87c1.5 0 2.8-1.2 2.8-2.7s-1.2-2.7-2.8-2.7c-1.5 0-2.7 1.2-2.7 2.7s1.1 2.7 2.7 2.7z"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M1006.6 676.77c-2.6-1.7-2.4-4.9.7-6.2 1.4-.6 2.7-.5 3.5 1.3 1.7 4.3 4.6 9.1-1.2 6.5-1.1-.5-2.1-1-3-1.6z" />
      </m.g>
      <m.g
        initial={{
          x: 160,
          opacity: 0,
        }}
        animate={controls6}
        transition={{
          "--footer-tube-offset-path--right": {
            ease: ["linear", "linear", "easeOut"],
            duration: 12,
            times: [0, 0.2, 0.4, 1],
            delay: 1.2,
          },
          opacity: {
            times: [0, 0.1],
            duration: 12,
            delay: 1.2,
          },
          rotateZ: {
            duration: 12,
            times: [0, 0.25, 0.4, 1],
            ease: ["linear", "linear", "easeOut"],
            delay: 1.2,
          },
        }}
        className="footer-tube-offset-path--right"
        style={{
          offsetDistance: "var(--footer-tube-offset-path--right)",
          offsetRotate: "0deg",
        }}
      >
        <path
          d="M930.6 610.47c12.1 0 21.9-9.8 21.9-21.9s-9.8-21.9-21.9-21.9-21.9 9.8-21.9 21.9c.1 12.1 9.9 21.9 21.9 21.9z"
          style={{
            isolation: "isolate",
          }}
          fill="#6cff6a"
        />
        <path
          d="M927.7 583.77c3.3 0 6-2.7 6-6s-2.7-6-6-6-6 2.7-6 6 2.7 6 6 6zM942.5 581.27c3.3 0 6-2.7 6-6s-2.7-6-6-6-6 2.7-6 6c.1 3.3 2.8 6 6 6z"
          fill="#fff"
        />
        <path
          d="M927.9 578.37c1.5 0 2.7-1.2 2.7-2.7s-1.2-2.7-2.7-2.7-2.7 1.2-2.7 2.7c-.1 1.4 1.1 2.7 2.7 2.7zM941.6 576.67c1.5 0 2.7-1.2 2.7-2.7s-1.2-2.7-2.7-2.7-2.7 1.2-2.7 2.7c0 1.4 1.2 2.7 2.7 2.7z"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M939.5 591.57c2.6-1.7 2.4-4.9-.7-6.2-1.3-.6-2.7-.5-3.4 1.3-1.7 4.3-4.6 9.1 1.2 6.5 1-.5 2-1 2.9-1.6z" />
      </m.g>
      <path
        d="M293.8 625.97s-11.7 42.3 0 73.7M270.3 625.97s-11.7 42.3 0 73.7M850.3 625.97s11.7 42.3 0 73.7M873.9 625.97s11.7 42.3 0 73.7"
        fill="none"
        stroke="#f4ff15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
